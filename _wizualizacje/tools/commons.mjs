#!/usr/bin/env node
// Wikimedia Commons: search pictures, read licence metadata, download a chosen file.
// Node 20+ (global fetch), no dependencies. Run from the repository root.
//
//   node _wizualizacje/tools/commons.mjs search "biogas digester" [--limit 15]
//   node _wizualizacje/tools/commons.mjs info "File:Biogasanlage.jpg" ["File:…" …]
//   node _wizualizacje/tools/commons.mjs download "File:Biogasanlage.jpg" --out <path.jpg> [--width 1600]
//
// search and info print JSON: one object per file with the fields the review
// page needs (title, page, preview, author, license, licenseUrl, status, …).
// status: "wolna" (CC0, public domain, CC BY, CC BY-SA: may be embedded with
// attribution) or "do sprawdzenia" (any other licence: read the file page).
// Commons hosts only free files, but the metadata can be incomplete: the
// researcher still opens the file page of every candidate it proposes.

import fs from 'node:fs';
import path from 'node:path';
import {pathToFileURL} from 'node:url';

const API = process.env.COMMONS_API ?? 'https://commons.wikimedia.org/w/api.php';
// Wikimedia asks API clients for a descriptive User-Agent with a contact
const UA = 'bezp-monit-course-tools/1.0 (https://bezp-monit.vercel.app; licence check for lecture pictures)';
const IIPROP = 'url|extmetadata|size|mime';

function usage(msg) {
  if (msg) {
    console.error(msg);
  }
  console.error(
    'usage:\n  commons.mjs search "<query>" [--limit N]\n  commons.mjs info "File:…" […]\n  commons.mjs download "File:…" --out <path> [--width 1600]',
  );
  process.exit(2);
}

function arg(name, fallback) {
  const i = process.argv.indexOf(name);
  return i >= 0 ? process.argv[i + 1] : fallback;
}

/** HTML from extmetadata → plain text */
export function plain(html) {
  if (!html) {
    return '';
  }
  return String(html)
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/\s+/g, ' ')
    .trim();
}

/** Licence short name (and the machine-readable "License" field) → status */
export function licenceStatus(shortName, code) {
  const s = `${shortName ?? ''} ${code ?? ''}`.toLowerCase();
  if (/\bnc\b|non-?commercial|\bnd\b|no-?deriv|fair use|all rights reserved/.test(s)) {
    return 'do sprawdzenia';
  }
  if (/cc0|public domain|\bpd\b|pd-|cc[- ]by(-sa)?([- ]\d(\.\d)?)?/.test(s)) {
    return 'wolna';
  }
  return 'do sprawdzenia';
}

function pageUrl(title) {
  return `https://commons.wikimedia.org/wiki/${encodeURIComponent(title.replace(/ /g, '_')).replace(/%3A/g, ':').replace(/%2F/g, '/')}`;
}

export function describe(page) {
  const ii = page.imageinfo?.[0];
  if (!ii) {
    return {title: page.title, page: pageUrl(page.title), error: page.missing ? 'brak pliku' : 'brak metadanych'};
  }
  const m = ii.extmetadata ?? {};
  const v = (k) => m[k]?.value;
  const license = plain(v('LicenseShortName'));
  return {
    title: page.title,
    page: ii.descriptionurl ?? pageUrl(page.title),
    preview: ii.thumburl ?? ii.url,
    original: ii.url,
    width: ii.width,
    height: ii.height,
    mime: ii.mime,
    author: plain(v('Artist')) || plain(v('Credit')) || 'nieznany',
    credit: plain(v('Credit')),
    license,
    licenseUrl: v('LicenseUrl') ?? '',
    status: licenceStatus(license, v('License')),
    attributionRequired: v('AttributionRequired') ?? 'nieznane',
    restrictions: plain(v('Restrictions')),
    date: plain(v('DateTimeOriginal')) || plain(v('DateTime')),
    description: plain(v('ImageDescription')).slice(0, 300),
  };
}

async function api(params) {
  const url = `${API}?${new URLSearchParams({format: 'json', formatversion: '2', ...params})}`;
  const res = await fetch(url, {headers: {'User-Agent': UA, 'Api-User-Agent': UA}});
  if (!res.ok) {
    throw new Error(`Commons API HTTP ${res.status} for ${url}`);
  }
  return res.json();
}

async function search(query, limit) {
  const data = await api({
    action: 'query',
    generator: 'search',
    gsrnamespace: '6',
    gsrsearch: `${query} filetype:bitmap`,
    gsrlimit: String(limit),
    prop: 'imageinfo',
    iiprop: IIPROP,
    iiurlwidth: '640',
  });
  const pages = data.query?.pages ?? [];
  // generator results are unordered: restore the search ranking
  pages.sort((a, b) => (a.index ?? 0) - (b.index ?? 0));
  return pages.map(describe);
}

async function info(titles, width = 640) {
  const data = await api({
    action: 'query',
    titles: titles.map((t) => (t.startsWith('File:') ? t : `File:${t}`)).join('|'),
    prop: 'imageinfo',
    iiprop: IIPROP,
    iiurlwidth: String(width),
  });
  return (data.query?.pages ?? []).map(describe);
}

async function download(title, out, width) {
  const [meta] = await info([title], width);
  if (!meta || meta.error) {
    throw new Error(`${title}: ${meta?.error ?? 'nie znaleziono'}`);
  }
  // thumburl is the original when the original is not wider than `width`
  const res = await fetch(meta.preview, {headers: {'User-Agent': UA}});
  if (!res.ok) {
    throw new Error(`download HTTP ${res.status}: ${meta.preview}`);
  }
  const buf = Buffer.from(await res.arrayBuffer());
  fs.mkdirSync(path.dirname(out), {recursive: true});
  fs.writeFileSync(out, buf);
  return {...meta, savedTo: out, bytes: buf.length, downloadedFrom: meta.preview};
}

async function main() {
  const [, , cmd, ...rest] = process.argv;
  const positional = rest.filter((x, i) => !x.startsWith('--') && !(i > 0 && rest[i - 1].startsWith('--')));
  if (cmd === 'search') {
    if (!positional[0]) {
      usage('search: query missing');
    }
    console.log(JSON.stringify(await search(positional[0], Number(arg('--limit', 15))), null, 2));
  } else if (cmd === 'info') {
    if (!positional.length) {
      usage('info: file title missing');
    }
    console.log(JSON.stringify(await info(positional), null, 2));
  } else if (cmd === 'download') {
    const out = arg('--out');
    if (!positional[0] || !out) {
      usage('download: file title and --out are required');
    }
    console.log(JSON.stringify(await download(positional[0], out, Number(arg('--width', 1600))), null, 2));
  } else {
    usage();
  }
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((e) => {
    console.error(`ERROR ${e.message}`);
    process.exit(1);
  });
}
