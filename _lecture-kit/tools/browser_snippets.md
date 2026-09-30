# Reading Polish legal sources in the built-in browser

`WebFetch` cannot open `isap.sejm.gov.pl`, `api.sejm.gov.pl` or `legislacja.gov.pl` (robots.txt). The coordinator reads them in the built-in browser pane with `javascript_tool`, which runs in the page and allows top-level `await`. All snippets below were tested on 29.09.2026.

Tools: load them with ToolSearch query `mcp__remote-devices__Claude_Browser__` (max_results 64). If a site is not allowed yet, call `request_access` with the URL (scope "site" for these three hosts) and retry.

Record every fact you use in `verified-facts/` (act, Dz.U., article, date read, ISAP or RCL URL).

Useful URL forms:
- ISAP page for students: `https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20260000524` (WDU + year + 7-digit position).
- ELI API metadata: `https://api.sejm.gov.pl/eli/acts/DU/2026/524`; text: `…/text.pdf` (or `…/text.html` when `textHTML` is true).
- RCL project page: `https://legislacja.gov.pl/projekt/<number>`.

## 1. Act metadata and search (ELI API)

Open a tab on the API host first (same origin for `fetch`):
`preview_start` → `https://api.sejm.gov.pl/eli/acts/DU/2025/1847`

```js
const m = await fetch('/eli/acts/DU/2025/1847').then(r => r.json());
({title: m.title, status: m.status, inForce: m.inForce, entryIntoForce: m.entryIntoForce,
  textHTML: m.textHTML, textPDF: m.textPDF,
  references: Object.fromEntries(Object.entries(m.references || {}).map(([k, v]) => [k, v.map(x => x.id)]))})
```

Search by title words (returns `count` and `items` with `ELI`, `title`, `announcementDate`):

```js
const s = await fetch('/eli/acts/search?publisher=DU&year=2026&title=' + encodeURIComponent('warunków technicznych')).then(r => r.json());
s.items.map(x => x.ELI + ' | ' + x.announcementDate + ' | ' + x.title)
```

`references` lists, among others, the consolidated texts ("Tekst jednolity"), amending acts and repealing acts; `status` is e.g. "obowiązujący" or "uznany za uchylony".

## 2. Full text of an act from the PDF (pdf.js from cdnjs)

On a tab at `https://api.sejm.gov.pl/…`:

```js
const V = '4.10.38';
const pdfjs = await import(`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${V}/pdf.min.mjs`);
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${V}/pdf.worker.min.mjs`;
const doc = await pdfjs.getDocument('/eli/acts/DU/2025/1847/text.pdf').promise;
const pages = [];
for (let i = 1; i <= doc.numPages; i++) {
  const c = await (await doc.getPage(i)).getTextContent();
  pages.push(c.items.map(x => x.str + (x.hasEOL ? '\n' : '')).join(''));
}
window.__txt = pages.join('\n');
({numPages: doc.numPages, chars: window.__txt.length})
```

Then search the text without reloading:

```js
const i = window.__txt.indexOf('Art. 13'); window.__txt.slice(i, i + 1500)
```

For a regex over all hits: `[...window.__txt.matchAll(/magazyn[^\n]{0,200}/g)].map(m => m[0]).slice(0, 20)`.

## 3. Draft text from RCL (.docx)

Open the project page first (same origin): `https://legislacja.gov.pl/projekt/12412604`. Use `get_page_text` to read the stages and find the link to the newest draft text ("Projekt z dnia …"), then:

```js
async function docxText(url) {
  const buf = new Uint8Array(await (await fetch(url)).arrayBuffer());
  const dv = new DataView(buf.buffer);
  let eocd = buf.length - 22;
  while (eocd >= 0 && dv.getUint32(eocd, true) !== 0x06054b50) eocd--;
  const n = dv.getUint16(eocd + 10, true);
  let p = dv.getUint32(eocd + 16, true);
  const entries = {};
  for (let k = 0; k < n; k++) {
    const method = dv.getUint16(p + 10, true), csize = dv.getUint32(p + 20, true);
    const nlen = dv.getUint16(p + 28, true), xlen = dv.getUint16(p + 30, true), clen = dv.getUint16(p + 32, true);
    const lho = dv.getUint32(p + 42, true);
    entries[new TextDecoder().decode(buf.slice(p + 46, p + 46 + nlen))] = { method, csize, lho };
    p += 46 + nlen + xlen + clen;
  }
  const e = entries['word/document.xml'];
  const start = e.lho + 30 + dv.getUint16(e.lho + 26, true) + dv.getUint16(e.lho + 28, true);
  const data = buf.slice(start, start + e.csize);
  const xml = e.method === 0 ? new TextDecoder().decode(data)
    : await new Response(new Blob([data]).stream().pipeThrough(new DecompressionStream('deflate-raw'))).text();
  return xml.replace(/<\/w:p>/g, '\n').replace(/<w:tab\/>/g, '\t').replace(/<[^>]+>/g, '')
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&amp;/g, '&');
}
window.__txt = await docxText('https://legislacja.gov.pl/docs//582/12412604/13216444/dokument791486.docx');
const i = window.__txt.indexOf('§ 304'); window.__txt.slice(i, i + 800)
```

If a draft is published as PDF instead, use snippet 2 on a tab at `legislacja.gov.pl` with the PDF URL.

## 4. EUR-Lex

`WebFetch` works for EUR-Lex ELI URLs (tested 29.09.2026), e.g. `https://eur-lex.europa.eu/eli/reg/2023/1542/oj/eng`. Research agents can verify EU law themselves; use the browser only if WebFetch is refused.
