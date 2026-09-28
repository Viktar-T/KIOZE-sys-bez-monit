# Systemy bezpieczeństwa i monitorowania instalacji OZE

Course website for "Systemy bezpieczeństwa i monitorowania instalacji OZE" (Odnawialne źródła energii, semester 5), built with [Docusaurus](https://docusaurus.io/) 3.

Live site: https://bezp-monit.vercel.app

## Requirements

- Node.js 22 (see `.nvmrc`, the same version Vercel uses)
- npm

## Local development

```bash
npm ci
npm start
```

`npm start` runs a dev server with live reload at http://localhost:3000. Pages marked `draft: true` in their front matter are shown only here, not on the live site.

## Build

```bash
npm run build
npm run serve
```

The build fails on broken links, so run it before pushing. `npm run serve` previews the production build locally.

## Project layout

- `docs/wyklady-bezp/` — lectures (current series)
- `docs/wyklady/` — earlier lecture series on monitoring
- `docs/cwiczenia/` — exercises: plan, cards, answer keys, rubrics, templates
- `docs/literatura/` — literature
- `docs/web-tech-info/` — reference pages for authors (drafts, not published)
- `src/components/` — MDX components used in lectures (slides, quizzes, literature list)
- `src/css/custom.css` — global styles
- `static/` — images and downloadable files (`static/cwiczenia/dane/*.csv`)

## Writing content

- Link to other pages by file path, for example `[Plan semestru](../plan/01-plan-semestru.md)`. The build checks these links and they keep working when URLs change. Links written as `/docs/...` URLs break, because Docusaurus removes number prefixes such as `01-` from URLs.
- Admonitions with a title use the form `:::tip Tytuł` … `:::`.

## Deployment

Vercel deploys the `main` branch. GitHub Actions builds every push to `main` and every pull request (`.github/workflows/build.yml`).
