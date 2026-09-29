# Systemy bezpieczeństwa i monitorowania instalacji OZE

Course website for *Odnawialne źródła energii*, semester 5. Content is in Polish.

Live site: https://bezp-monit.vercel.app

The site lives in [`bezp-monit/`](bezp-monit/). Writing conventions: [`CLAUDE.md`](CLAUDE.md).

## Tech stack

- [Docusaurus](https://docusaurus.io/) 3 (React 19, MDX)
- KaTeX, Mermaid, local full-text search
- Node.js 24, npm
- Vercel (production), GitHub Actions (build check)

## How to start

```bash
cd bezp-monit
npm install
npm start
```

Dev server: http://localhost:3000 (live reload; draft pages are visible here).

```bash
npm run build
npm run serve
```

Production preview locally, including search. The build fails on broken links.
