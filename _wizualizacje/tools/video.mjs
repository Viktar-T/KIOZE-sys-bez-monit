#!/usr/bin/env node
// Check video candidates before they go on a review page or a lecture page.
// Node 20+ (global fetch), no dependencies. Run from the repository root.
//
//   node _wizualizacje/tools/video.mjs <YouTube id or URL | Vimeo URL> […]
//
// Prints JSON per video:
//   exists, embeddable ("tak" | "nie" | "nieznane"), title, channel, channelUrl,
//   durationSec, duration ("m:ss"), published, captions (language codes),
//   chapters ([{t: "1:20", s: 80, title}] from the description), note.
// YouTube: oEmbed answers 401 when the owner disabled embedding and 404 when
// the video is gone or private. Duration, date, captions and chapters come
// from the public watch page; if YouTube shows a consent page instead, these
// fields stay null (the note says so) and the lecturer reads them in the player.
// Nothing here downloads a video.

import {pathToFileURL} from 'node:url';

const YT_OEMBED = process.env.YT_OEMBED ?? 'https://www.youtube.com/oembed';
const YT_WATCH = process.env.YT_WATCH ?? 'https://www.youtube.com/watch';
const VIMEO_OEMBED = process.env.VIMEO_OEMBED ?? 'https://vimeo.com/api/oembed.json';
const UA = 'Mozilla/5.0 (compatible; bezp-monit-course-tools/1.0; +https://bezp-monit.vercel.app)';

export function parseRef(ref) {
  const s = String(ref).trim();
  const vimeo = s.match(/vimeo\.com\/(?:video\/)?(\d+)/) ?? s.match(/^vimeo:(\d+)$/);
  if (vimeo) {
    return {provider: 'vimeo', id: vimeo[1]};
  }
  const yt =
    s.match(/[?&]v=([\w-]{11})/) ??
    s.match(/youtu\.be\/([\w-]{11})/) ??
    s.match(/youtube(?:-nocookie)?\.com\/(?:embed|shorts|live)\/([\w-]{11})/) ??
    s.match(/^([\w-]{11})$/);
  if (yt) {
    return {provider: 'youtube', id: yt[1]};
  }
  return null;
}

export function clock(sec) {
  if (sec === null || sec === undefined) {
    return null;
  }
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const ss = String(sec % 60).padStart(2, '0');
  return h > 0 ? `${h}:${String(m).padStart(2, '0')}:${ss}` : `${m}:${ss}`;
}

/** "1:02:03" | "4:05" → seconds */
function toSec(t) {
  return t.split(':').map(Number).reduce((a, p) => a * 60 + p, 0);
}

/** Timestamped lines of a description, e.g. "02:15 Test ogniowy" */
export function chaptersFrom(description) {
  const out = [];
  for (const line of String(description ?? '').split('\n')) {
    const m = line.match(/^\s*[([]?((?:\d{1,2}:)?\d{1,2}:\d{2})[)\]]?\s*[-–—:|]?\s*(.+)$/);
    if (m) {
      out.push({t: m[1], s: toSec(m[1]), title: m[2].trim().slice(0, 120)});
    }
  }
  return out;
}

/** JSON string literal after "key": in the watch page */
function jsonString(html, key) {
  const m = html.match(new RegExp(`"${key}":"((?:[^"\\\\]|\\\\.)*)"`));
  if (!m) {
    return null;
  }
  try {
    return JSON.parse(`"${m[1]}"`);
  } catch {
    return m[1];
  }
}

async function youtube(id) {
  const r = {provider: 'youtube', id, url: `https://www.youtube.com/watch?v=${id}`};
  const o = await fetch(`${YT_OEMBED}?${new URLSearchParams({format: 'json', url: r.url})}`, {
    headers: {'User-Agent': UA},
  });
  if (o.status === 200) {
    const j = await o.json();
    Object.assign(r, {exists: true, embeddable: 'tak', title: j.title, channel: j.author_name, channelUrl: j.author_url});
  } else if (o.status === 401 || o.status === 403) {
    Object.assign(r, {exists: true, embeddable: 'nie', note: 'osadzanie wyłączone albo film prywatny: tylko link'});
  } else if (o.status === 404) {
    return {...r, exists: false, embeddable: 'nie', note: 'film nie istnieje albo jest prywatny'};
  } else {
    Object.assign(r, {exists: null, embeddable: 'nieznane', note: `oEmbed HTTP ${o.status}`});
  }

  try {
    const w = await fetch(`${YT_WATCH}?v=${id}&hl=pl`, {
      headers: {'User-Agent': UA, 'Accept-Language': 'pl,en;q=0.8'},
    });
    const html = await w.text();
    const len = html.match(/"lengthSeconds":"(\d+)"/);
    if (!len) {
      r.note = [r.note, 'strona filmu bez metadanych (np. strona zgody): długość i rozdziały sprawdź w odtwarzaczu']
        .filter(Boolean)
        .join('; ');
      return {durationSec: null, duration: null, published: null, captions: [], chapters: [], ...r};
    }
    r.durationSec = Number(len[1]);
    r.duration = clock(r.durationSec);
    r.published = jsonString(html, 'publishDate')?.slice(0, 10) ?? null;
    const embed = html.match(/"playableInEmbed":(true|false)/);
    if (embed && embed[1] === 'false') {
      r.embeddable = 'nie';
    }
    r.captions = [...new Set([...html.matchAll(/"captionTracks":\[(.*?)\]/g)].flatMap((m) => [...m[1].matchAll(/"languageCode":"([\w-]+)"/g)].map((x) => x[1])))];
    r.chapters = chaptersFrom(jsonString(html, 'shortDescription'));
    if (!r.title) {
      r.title = jsonString(html, 'title');
    }
  } catch (e) {
    r.note = [r.note, `strona filmu niedostępna: ${e.message}`].filter(Boolean).join('; ');
  }
  return r;
}

async function vimeo(id) {
  const url = `https://vimeo.com/${id}`;
  const o = await fetch(`${VIMEO_OEMBED}?${new URLSearchParams({url})}`, {headers: {'User-Agent': UA}});
  if (o.status === 200) {
    const j = await o.json();
    return {
      provider: 'vimeo',
      id,
      url,
      exists: true,
      embeddable: 'tak',
      title: j.title,
      channel: j.author_name,
      channelUrl: j.author_url,
      durationSec: j.duration ?? null,
      duration: clock(j.duration ?? null),
      published: j.upload_date?.slice(0, 10) ?? null,
      captions: [],
      chapters: chaptersFrom(j.description),
    };
  }
  return {
    provider: 'vimeo',
    id,
    url,
    exists: o.status === 404 ? false : null,
    embeddable: o.status === 403 ? 'nie' : 'nieznane',
    note: `oEmbed HTTP ${o.status}`,
  };
}

async function main() {
  const refs = process.argv.slice(2);
  if (!refs.length) {
    console.error('usage: node _wizualizacje/tools/video.mjs <YouTube id or URL | Vimeo URL> […]');
    process.exit(2);
  }
  const out = [];
  for (const ref of refs) {
    const p = parseRef(ref);
    if (!p) {
      out.push({ref, error: 'nie rozpoznano identyfikatora filmu'});
    } else {
      out.push(p.provider === 'vimeo' ? await vimeo(p.id) : await youtube(p.id));
    }
  }
  console.log(JSON.stringify(out, null, 2));
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((e) => {
    console.error(`ERROR ${e.message}`);
    process.exit(1);
  });
}
