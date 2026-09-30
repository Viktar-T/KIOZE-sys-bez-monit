// Render check of a built lecture in a real browser (Playwright + pre-installed Chromium).
//
// Usage: node render_check.cjs <lecture-folder-name> [--port 3100] [--repo /home/claude/repo]
//   Requires the site served by build_site.sh. Screenshots go to /tmp/shots/<page>.png.
//
// For every page of the lecture it checks: the page loads, mermaid SVG count equals the number of
// mermaid blocks in the source, no KaTeX errors, no tables wider than their container, no console errors.
// It also checks that the homepage has a card linking to the lecture.
// If playwright is missing: `npm i -g playwright` (do NOT run `playwright install`; Chromium is in /opt/pw-browsers).
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function loadPlaywright() {
  try { return require('playwright'); } catch (e) { /* fall through */ }
  const root = execSync('npm root -g').toString().trim();
  return require(path.join(root, 'playwright'));
}

const args = process.argv.slice(2);
const folder = args[0];
if (!folder) { console.error('usage: node render_check.cjs <lecture-folder-name> [--port N] [--repo DIR]'); process.exit(2); }
const opt = (k, d) => { const i = args.indexOf(k); return i > 0 ? args[i + 1] : d; };
const port = opt('--port', '3100');
const repo = opt('--repo', '/home/claude/repo');
const dir = path.join(repo, 'bezp-monit/docs/wyklady-bezp', folder);
const files = fs.readdirSync(dir).filter(f => /\.mdx?$/.test(f)).sort();
const titleMatch = fs.readFileSync(path.join(dir, 'index.md'), 'utf8').match(/^title:\s*"([^"]+)"/m);
const lectureTitle = titleMatch ? titleMatch[1] : null;

(async () => {
  const { chromium } = loadPlaywright();
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
  const errors = [];
  page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
  page.on('pageerror', e => errors.push(String(e)));
  fs.mkdirSync('/tmp/shots', { recursive: true });
  let bad = 0;

  for (const f of files) {
    const src = fs.readFileSync(path.join(dir, f), 'utf8');
    const expectedMermaid = (src.match(/^```mermaid/gm) || []).length;
    const slug = f === 'index.md' ? '' : '/' + f.replace(/^\d+-/, '').replace(/\.mdx?$/, '');
    const url = `http://localhost:${port}/docs/wyklady-bezp/${folder}${slug}`;
    const resp = await page.goto(url, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1500);
    const info = await page.evaluate(() => ({
      title: document.querySelector('h1') ? document.querySelector('h1').innerText : '',
      notFound: document.body.innerText.includes('Nie znaleziono strony') || document.body.innerText.includes('Page Not Found'),
      mermaidSvgs: document.querySelectorAll('.docusaurus-mermaid-container svg, svg[id^="mermaid"]').length,
      mermaidErrors: document.body.innerText.includes('Syntax error'),
      katex: document.querySelectorAll('.katex').length,
      katexErrors: document.querySelectorAll('.katex-error').length,
      slides: document.querySelectorAll('.slide-card').length,
      wideTables: [...document.querySelectorAll('table')].filter(t => t.scrollWidth > t.parentElement.clientWidth + 2).length,
    }));
    const problems = [];
    if (!resp || resp.status() !== 200 || info.notFound) problems.push('page not found');
    if (info.mermaidSvgs < expectedMermaid || info.mermaidErrors) problems.push(`mermaid ${info.mermaidSvgs}/${expectedMermaid}`);
    if (info.katexErrors) problems.push(`${info.katexErrors} KaTeX errors`);
    if (info.wideTables) problems.push(`${info.wideTables} wide tables`);
    if (problems.length) bad++;
    console.log(`${problems.length ? 'FAIL' : 'OK  '} ${f} → ${url}\n     ${JSON.stringify(info)}${problems.length ? '\n     ' + problems.join('; ') : ''}`);
    await page.screenshot({ path: `/tmp/shots/${f.replace(/\.mdx?$/, '')}.png` });
  }

  await page.goto(`http://localhost:${port}/`, { waitUntil: 'networkidle' });
  const hrefs = await page.evaluate(() => [...document.querySelectorAll('a')].map(a => a.getAttribute('href') || ''));
  const onHome = hrefs.some(h => h.replace(/\/$/, '') === `/docs/wyklady-bezp/${folder}`);
  console.log(`${onHome ? 'OK  ' : 'FAIL'} homepage has a card linking to /docs/wyklady-bezp/${folder}/ (${lectureTitle || 'no title'})`);
  if (!onHome) bad++;
  await page.screenshot({ path: '/tmp/shots/home.png' });

  if (errors.length) { bad++; console.log('console errors:', errors.slice(0, 10)); }
  await browser.close();
  console.log(bad ? 'RENDER CHECK FAILED' : 'RENDER CHECK OK');
  process.exit(bad ? 1 : 0);
})();
