# Systemy bezpieczeństwa i monitorowania instalacji OZE

Course website for "Systemy bezpieczeństwa i monitorowania instalacji OZE" (Odnawialne źródła energii, semester 5), built with [Docusaurus](https://docusaurus.io/) 3.

Live site: https://bezp-monit.vercel.app

Conventions for writing content and working on the site are in [`CLAUDE.md`](../CLAUDE.md).

## Requirements

- Node.js 24 (see `.nvmrc`; Vercel builds with Node 24.x). Versions 20–25 work too.
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

## Dependency overrides

`overrides` in `package.json` force patched versions of indirect dependencies, so that `npm audit` reports no vulnerabilities:

- `mermaid` `^11.17.2`: patched 11.x. `@docusaurus/theme-mermaid` accepts any version from 11.6, which lets npm install Mermaid 12, a breaking release (Safari 17.4+, new default layout).
- `lodash-es` `^4.18.1`: `chevrotain`, a Mermaid dependency, pins the vulnerable 4.17.23.
- `serialize-javascript` `^7.1.2`: the webpack plugins inside `@docusaurus/bundler` pin 6.x. 7.x only adds the requirement Node 20+.
- `uuid` `^11.1.1` for `sockjs` (dev server only): `sockjs` pins 8.x.

After upgrading Docusaurus, check with `npm audit` whether an override is still needed and remove the ones that are not. Do not run `npm audit fix --force`: it "fixes" `serialize-javascript` by downgrading Docusaurus.
