# Systemy bezpieczeństwa i monitorowania instalacji OZE

Course website for "Systemy bezpieczeństwa i monitorowania instalacji OZE" (Odnawialne źródła energii, semester 5), built with [Docusaurus](https://docusaurus.io/) 3.

Live site: https://bezp-monit.vercel.app

Conventions for writing content and working on the site are in [`CLAUDE.md`](../CLAUDE.md).

## Requirements

- Node.js 22 (see `.nvmrc`, the same version Vercel uses)
- npm

## Local development

```bash
npm ci
npm start
```

`npm start` runs a dev server with live reload at http://localhost:3000. Pages marked `draft: true` in their front matter are shown only here, not on the live site: the answer keys (`docs/cwiczenia/klucze/`) and the reference pages in `docs/web-tech-info/`. Search does not work in the dev server.

## Build

```bash
npm run build
npm run serve
```

The build fails on broken links, so run it before pushing. `npm run serve` previews the production build locally, including search.

## Site sections

- **Wykłady**: `docs/wyklady-bezp/` (current lectures) and the course introduction `docs/intro.md`
- **Ćwiczenia**: `docs/cwiczenia/` (plan, task cards, data, templates, rubrics)
- **Literatura**: `docs/literatura/index.md`
- **Archiwum**: `docs/wyklady/`, the earlier lecture series on monitoring

Lecture and exercise pages have a **▶ Prezentacja** button: one slide per screen, arrow keys to move, N for instructor notes, F for fullscreen, Esc to exit.

## Deployment

Vercel deploys the `main` branch. GitHub Actions builds every push to `main` and every pull request (`.github/workflows/build.yml`).
