// MDX compile + KaTeX render + Mermaid parse check for lecture pages.
//
// Setup once per session (versions follow the site: mermaid 11, katex 0.16, MDX 3):
//   mkdir -p /tmp/lecture-tools && cp <kit>/tools/package.json <kit>/tools/check_mdx.mjs /tmp/lecture-tools/
//   cd /tmp/lecture-tools && npm install --no-audit --no-fund
// Run:
//   node /tmp/lecture-tools/check_mdx.mjs <lecture_dir>/*.md*
//
// Exit code 1 if any file fails to compile, any KaTeX expression fails, or any mermaid block fails to parse.
import { compile } from '@mdx-js/mdx';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import katex from 'katex';
import { JSDOM } from 'jsdom';
import fs from 'node:fs';
import path from 'node:path';

const files = process.argv.slice(2);
if (!files.length) { console.error('usage: node check_mdx.mjs <files…>'); process.exit(2); }

// Mermaid needs a DOM
const dom = new JSDOM('<!doctype html><html><body></body></html>', { pretendToBeVisual: true });
globalThis.window = dom.window;
globalThis.document = dom.window.document;
for (const k of ['navigator', 'Element', 'HTMLElement', 'SVGElement', 'DOMParser', 'Node']) {
  try { globalThis[k] = dom.window[k]; } catch (e) { /* read-only globals */ }
}
const mermaid = (await import('mermaid')).default;
mermaid.initialize({ startOnLoad: false });

let bad = 0, nMath = 0, nMermaid = 0;
for (const f of files) {
  const name = path.basename(f);
  const src = fs.readFileSync(f, 'utf8');

  // 1. MDX compile (same remark plugins as the site)
  try {
    await compile(src, { remarkPlugins: [remarkGfm, remarkMath] });
  } catch (e) {
    bad++;
    console.log(`MDX FAIL ${name}: ${e.reason || e.message} @ line ${e.line ?? e.place?.line ?? '?'}`);
  }

  // 2. KaTeX: $$…$$ and $…$ outside code fences
  const noCode = src.replace(/```[\s\S]*?```/g, '');
  const display = [...noCode.matchAll(/\$\$([\s\S]*?)\$\$/g)].map(m => [m[1], true]);
  const rest = noCode.replace(/\$\$[\s\S]*?\$\$/g, '');
  const inline = [...rest.matchAll(/\$([^$\n]+)\$/g)].map(m => [m[1], false]);
  for (const [expr, displayMode] of [...display, ...inline]) {
    nMath++;
    try { katex.renderToString(expr, { displayMode, throwOnError: true }); }
    catch (e) { bad++; console.log(`KATEX FAIL ${name}: ${JSON.stringify(expr)} — ${e.message}`); }
  }

  // 3. Mermaid blocks
  for (const m of src.matchAll(/```mermaid\n([\s\S]*?)```/g)) {
    nMermaid++;
    try { await mermaid.parse(m[1]); }
    catch (e) { bad++; console.log(`MERMAID FAIL ${name}: ${(e.message || String(e)).split('\n')[0]}`); }
  }
  console.log(`checked ${name}`);
}

// negative control: a broken diagram must be rejected, otherwise the mermaid check is not working
let control = false;
try { await mermaid.parse('flowchart TD\n A["x" --> B'); } catch (e) { control = true; }
if (!control) { bad++; console.log('CONTROL FAIL: mermaid accepted a broken diagram — parse check not reliable'); }

console.log(`files: ${files.length}, KaTeX expressions: ${nMath}, mermaid blocks: ${nMermaid}, failures: ${bad}`);
console.log(bad ? 'MDX CHECK FAILED' : 'MDX CHECK OK');
process.exit(bad ? 1 : 0);
