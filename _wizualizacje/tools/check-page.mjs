#!/usr/bin/env node
// Check a review page or a lecture page after the visualisation step.
// Uses the site's own MDX compiler (bezp-monit/node_modules), so it runs on the
// lecturer's computer without an extra install. Run from the repository root.
//
//   node _wizualizacje/tools/check-page.mjs <review page .mdx> […]            review pages
//   node _wizualizacje/tools/check-page.mjs --final <lecture page .mdx> […]   lecture pages
//
// Both modes: the page compiles with MDX 3 (+GFM, math); every component used
// is imported; every imported name exists in the module it comes from;
// imported local files (pictures) exist.
// Review pages: draft: true; unique slide ids; two options per slide; complete
// candidate data (licence status, preview, source page; video id).
// Lecture pages (--final): no review components; pictures are local files with
// alt text and attribution; remote pictures only as <MediaLink>; videos
// flagged watched={false} are listed; "Czas" in the notes sums to the minutes in
// the lecture's index.md plan (and the plan total is printed).
//
// Exit code 1 on any PROBLEM. WARN lines are advisory.

import fs from 'node:fs';
import path from 'node:path';
import {createRequire} from 'node:module';
import {fileURLToPath, pathToFileURL} from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const SITE = path.resolve(here, '../../bezp-monit');
const require = createRequire(path.join(SITE, 'package.json'));
const load = async (name) => import(pathToFileURL(require.resolve(name)).href);

const {createProcessor} = await load('@mdx-js/mdx');
const remarkGfm = (await load('remark-gfm')).default;
const remarkMath = (await load('remark-math')).default;

const REVIEW_ONLY = new Set(['Review', 'ReviewSlide', 'Option', 'ImageCandidate', 'VideoCandidate']);
const LICENCE_STATUS = new Set(['wolna', 'do sprawdzenia', 'niewolna']);

const args = process.argv.slice(2);
const final = args.includes('--final');
const files = args.filter((a) => !a.startsWith('--'));
if (!files.length) {
  console.error('usage: node _wizualizacje/tools/check-page.mjs [--final] <page.mdx> […]');
  process.exit(2);
}

let problems = 0;
let warnings = 0;
const P = (f, msg) => {
  problems += 1;
  console.log(`PROBLEM ${f}: ${msg}`);
};
const W = (f, msg) => {
  warnings += 1;
  console.log(`WARN ${f}: ${msg}`);
};

/** Named exports of a component module (index.js re-exports or export const/function) */
const exportCache = new Map();
function exportsOf(spec, fromFile) {
  let file;
  if (spec.startsWith('@site/')) {
    file = path.join(SITE, spec.slice('@site/'.length));
  } else if (spec.startsWith('.')) {
    file = path.resolve(path.dirname(fromFile), spec);
  } else {
    return null; // npm package: not checked
  }
  const candidates = [file, `${file}.js`, `${file}.jsx`, path.join(file, 'index.js'), path.join(file, 'index.jsx')];
  const found = candidates.find((c) => fs.existsSync(c) && fs.statSync(c).isFile());
  if (!found) {
    return {missing: true};
  }
  if (exportCache.has(found)) {
    return exportCache.get(found);
  }
  const src = fs.readFileSync(found, 'utf8');
  const names = new Set();
  for (const m of src.matchAll(/export\s+(?:const|function|class|let)\s+([A-Za-z_$][\w$]*)/g)) {
    names.add(m[1]);
  }
  for (const m of src.matchAll(/export\s*\{([^}]*)\}/g)) {
    for (const part of m[1].split(',')) {
      const name = part.split(/\s+as\s+/).pop().trim();
      if (name) {
        names.add(name);
      }
    }
  }
  const hasDefault = /export\s+default\b/.test(src) || names.has('default');
  const info = {names, hasDefault, file: found};
  exportCache.set(found, info);
  return info;
}

function walk(node, fn) {
  fn(node);
  for (const child of node.children ?? []) {
    walk(child, fn);
  }
}

function attrs(node) {
  const out = {};
  for (const a of node.attributes ?? []) {
    if (a.type !== 'mdxJsxAttribute') {
      continue;
    }
    out[a.name] = a.value === null || a.value === undefined ? true : typeof a.value === 'string' ? a.value : {expr: a.value.value};
  }
  return out;
}

const isRemote = (v) => typeof v === 'string' && /^https?:\/\//.test(v);

/** Minutes per slide from "Czas: ~N min" at the start of each slide's first notes block */
function slideMinutes(src) {
  const out = [];
  for (const m of src.matchAll(/<Slide title="([^"]*)"[^>]*>([\s\S]*?)<\/Slide>/g)) {
    const t = m[2].match(/<InstructorNotes[^>]*>\s*Czas: ~([\d,]+) min/);
    out.push({title: m[1], min: t ? Number(t[1].replace(',', '.')) : null});
  }
  return out;
}

function checkTiming(file, src) {
  const slides = slideMinutes(src);
  if (!slides.length) {
    return;
  }
  const missing = slides.filter((s) => s.min === null);
  for (const s of missing) {
    W(file, `slide "${s.title}": notes do not start with "Czas: ~N min"`);
  }
  const sum = slides.reduce((a, s) => a + (s.min ?? 0), 0);
  const index = path.join(path.dirname(file), 'index.md');
  if (!fs.existsSync(index)) {
    console.log(`  timing: ${sum} min on this page (no index.md next to it)`);
    return;
  }
  const idx = fs.readFileSync(index, 'utf8');
  const base = path.basename(file);
  const rows = [...idx.matchAll(/^\|\s*\[[^\]]+\]\(\.\/([^)]+)\)\s*\|\s*([\d,]+)\s*min\s*\|/gm)];
  const row = rows.find((r) => r[1] === base);
  const total = rows.reduce((a, r) => a + Number(r[2].replace(',', '.')), 0);
  const razem = idx.match(/\*\*Razem\*\*\s*\|\s*\*\*([\d,]+) min\*\*/);
  if (!row) {
    W(file, 'page not found in the plan table of index.md');
  } else if (Math.abs(Number(row[2].replace(',', '.')) - sum) > 1e-9) {
    P(file, `notes sum to ${String(sum).replace('.', ',')} min, index.md plan says ${row[2]} min`);
  }
  if (razem && Math.abs(Number(razem[1].replace(',', '.')) - total) > 1e-9) {
    P(file, `index.md: plan rows sum to ${String(total).replace('.', ',')} min, the "Razem" row says ${razem[1]} min`);
  }
  console.log(
    `  timing: this page ${String(sum).replace('.', ',')} min; lecture plan ${String(total).replace('.', ',')} min${total > 90 ? ` (${String(total - 90).replace('.', ',')} min over the 90-min slot)` : ''}`,
  );
}

for (const file of files) {
  if (!fs.existsSync(file)) {
    P(file, 'file not found');
    continue;
  }
  const src = fs.readFileSync(file, 'utf8');

  // 1. compile like the site does
  const processor = createProcessor({remarkPlugins: [remarkGfm, remarkMath]});
  let tree;
  try {
    await processor.process(src);
    tree = processor.parse(src);
  } catch (e) {
    P(file, `MDX does not compile: ${e.reason ?? e.message} (line ${e.line ?? e.place?.line ?? '?'})`);
    continue;
  }

  // 2. imports
  const imported = new Map(); // local name → {spec, name}
  walk(tree, (n) => {
    if (n.type !== 'mdxjsEsm') {
      return;
    }
    for (const m of n.value.matchAll(/import\s+([\s\S]*?)\s+from\s+['"]([^'"]+)['"]/g)) {
      const [, clause, spec] = m;
      const named = clause.match(/\{([^}]*)\}/);
      const def = clause.replace(/\{[^}]*\}/, '').replace(/,/g, '').trim();
      if (def) {
        imported.set(def, {spec, name: 'default'});
      }
      for (const part of named ? named[1].split(',') : []) {
        const [orig, alias] = part.split(/\s+as\s+/).map((x) => x.trim());
        if (orig) {
          imported.set(alias || orig, {spec, name: orig});
        }
      }
    }
  });
  for (const [local, {spec, name}] of imported) {
    if (/\.(jpe?g|png|webp|gif|svg|avif)$/i.test(spec)) {
      if (!fs.existsSync(path.resolve(path.dirname(file), spec))) {
        P(file, `imported file not found: ${spec}`);
      }
      continue;
    }
    const ex = exportsOf(spec, file);
    if (!ex) {
      continue;
    }
    if (ex.missing) {
      P(file, `module not found: ${spec}`);
    } else if (name === 'default' ? !ex.hasDefault : !ex.names.has(name)) {
      P(file, `${spec} has no export "${name}" (imported as ${local})`);
    }
  }

  // 3. components used
  const used = [];
  walk(tree, (n) => {
    if ((n.type === 'mdxJsxFlowElement' || n.type === 'mdxJsxTextElement') && n.name && /^[A-Z]/.test(n.name)) {
      used.push(n);
    }
  });
  for (const name of new Set(used.map((n) => n.name.split('.')[0]))) {
    if (!imported.has(name)) {
      P(file, `<${name}> is used but not imported`);
    }
  }

  const line = (n) => n.position?.start?.line ?? '?';

  if (!final) {
    // ---------- review page ----------
    if (!/^---\n[\s\S]*?^draft:\s*true\s*$[\s\S]*?\n---/m.test(src)) {
      P(file, 'review page without "draft: true" in the front matter: it would be published');
    }
    if (!file.replace(/\\/g, '/').includes('docs/propozycje/')) {
      W(file, 'review pages belong in bezp-monit/docs/propozycje/ (git-ignored)');
    }
    const ids = new Set();
    for (const n of used.filter((u) => u.name === 'ReviewSlide')) {
      const a = attrs(n);
      if (!a.id || !a.title) {
        P(file, `line ${line(n)}: <ReviewSlide> needs id and title`);
      }
      if (ids.has(a.id)) {
        P(file, `line ${line(n)}: duplicate slide id ${a.id}`);
      }
      ids.add(a.id);
      const kids = [];
      walk(n, (k) => k !== n && (k.type === 'mdxJsxFlowElement' || k.type === 'mdxJsxTextElement') && kids.push(k));
      const options = kids.filter((k) => k.name === 'Option');
      if (options.length !== 2) {
        W(file, `slide ${a.id}: ${options.length} visual options (the process asks for two)`);
      }
      const media = new Set();
      for (const k of kids.filter((x) => x.name === 'ImageCandidate' || x.name === 'VideoCandidate')) {
        const c = attrs(k);
        if (!c.id) {
          P(file, `line ${line(k)}: <${k.name}> without id`);
        } else if (media.has(c.id)) {
          P(file, `slide ${a.id}: duplicate media id ${c.id}`);
        }
        media.add(c.id);
        if (!c.learn) {
          W(file, `slide ${a.id} ${c.id}: no "learn" (what the student learns from it)`);
        }
        if (k.name === 'ImageCandidate') {
          if (!c.page) {
            P(file, `slide ${a.id} ${c.id}: no source page`);
          }
          if (!LICENCE_STATUS.has(c.status)) {
            P(file, `slide ${a.id} ${c.id}: status must be wolna | do sprawdzenia | niewolna`);
          }
          if (c.status === 'wolna' && (!c.author || !c.license)) {
            P(file, `slide ${a.id} ${c.id}: status "wolna" needs author and license`);
          }
        } else if (!c.youtube && !c.vimeo && !c.src) {
          P(file, `slide ${a.id} ${c.id}: video without youtube, vimeo or src`);
        }
      }
    }
    if (!ids.size) {
      W(file, 'no <ReviewSlide> found');
    }
  } else {
    // ---------- lecture page ----------
    for (const n of used) {
      const a = attrs(n);
      if (REVIEW_ONLY.has(n.name)) {
        P(file, `line ${line(n)}: <${n.name}> belongs on review pages only`);
      }
      if (n.name === 'Figure') {
        if (!a.alt) {
          P(file, `line ${line(n)}: <Figure> without alt text`);
        }
        if (isRemote(a.src)) {
          P(file, `line ${line(n)}: <Figure> loads a remote picture; download it to img/ (free licence) or use <MediaLink>`);
        }
        const own = a.author === 'własne' || a.license === 'własne';
        if (!own && (!a.author || !a.license || !(a.sourceUrl || a.source))) {
          P(file, `line ${line(n)}: <Figure> needs author, license and source/sourceUrl (or author="własne")`);
        }
        if (!own && a.license && !a.licenseUrl && !/domena publiczna|public domain|cc0/i.test(a.license)) {
          W(file, `line ${line(n)}: <Figure> licence without licenseUrl`);
        }
      }
      if (n.name === 'Video') {
        if (a.watched && typeof a.watched === 'object' && /false/.test(a.watched.expr)) {
          W(file, `line ${line(n)}: video "${a.title}" not watched yet (watched={false})`);
        }
        if (!a.start && !a.end) {
          W(file, `line ${line(n)}: video "${a.title}" without start/end: the whole film plays`);
        }
        if (a.poster) {
          W(file, `line ${line(n)}: poster on a lecture page loads an image from the provider before any click`);
        }
      }
      if (n.name === 'MediaLink' && !isRemote(a.href)) {
        P(file, `line ${line(n)}: <MediaLink> needs an absolute https href`);
      }
    }
    checkTiming(file, src);
  }
  console.log(`checked ${file}`);
}

console.log(`files: ${files.length}, problems: ${problems}, warnings: ${warnings}`);
console.log(problems ? 'CHECK FAILED' : 'CHECK OK');
process.exit(problems ? 1 : 0);
