# CLAUDE.md

Course website for **"Systemy bezpieczeństwa i monitorowania instalacji OZE"** (Odnawialne źródła energii, semester 5: lectures 20 h, exercises 10 h). Content is in Polish. The lecturer presents from this site in class and students use it for self-study.

- Site: Docusaurus 3 in `bezp-monit/`, live at https://bezp-monit.vercel.app
- Deployment: Vercel builds the `main` branch (Node 22.x); GitHub Actions builds every push to `main` and every pull request (`.github/workflows/build.yml`)
- The teaching content belongs to the lecturer. When working on the app, do not rewrite lecture or exercise text unless asked.

## Commands

Run in `bezp-monit/` (Node 22, see `.nvmrc`):

- `npm ci`: install dependencies
- `npm start`: dev server at http://localhost:3000. Shows draft pages; search does not work here.
- `npm run build`: production build. Must pass with no warnings before committing: broken links and MDX errors fail the build.
- `npm run serve`: preview the production build (search works here)

## Layout

- `bezp-monit/docs/`
  - `wyklady-bezp/`: current lectures W0–W10 (navbar "Wykłady"); one folder per lecture with `index.md` and topic pages `01-….mdx`
  - `cwiczenia/`: exercises (navbar "Ćwiczenia"): `index.md`, `plan/`, `karty/` (task cards, `urzadzenia/` device docs), `dane.md`, `szablony/`, `rubryki/`, `kompendium/`, `klucze/` (answer keys, drafts)
  - `wyklady/`: earlier lecture series on monitoring (navbar "Archiwum"), to be deleted later
  - `intro.md`: course introduction, first item of the "Wykłady" sidebar
  - `literatura/index.md`: literature, a single page without a sidebar
  - `web-tech-info/`: reference pages for authors (drafts)
- `bezp-monit/sidebars.js`: one sidebar per navbar section; order inside a section comes from `_category_.json` and `sidebar_position`
- `bezp-monit/docusaurus.config.js`: navbar, footer, search, redirects of old URLs, plugins
- `bezp-monit/src/`
  - `components/SlideComponents.jsx`: slide and content components
  - `components/InteractiveQuiz.jsx`: quizzes
  - `components/LiteratureList.jsx` + `data/literature.json`: literature lists (currently unused)
  - `components/PresentationMode/` + `theme/MDXContent/`: presentation mode on doc pages
  - `remark/slide-titles.js`: turns `<Slide title="…">` into a `##` heading at build time
  - `plugins/course-overview.js`: collects lectures and exercise cards for the homepage
  - `pages/index.js`: homepage
  - `css/custom.css`: global styles
- `bezp-monit/static/`: `img/` (logo, favicon, link preview image), `cwiczenia/dane/*.csv` (exercise data)
- `bezp-monit/i18n/pl/code.json`: Polish UI strings of the search box
- `_promts/`: prompt library used to write content, not part of the site

## Writing content

### Files and order
- File and folder names: lowercase, hyphens, number prefixes for order (`01-`, `02-`). Docusaurus drops number prefixes from URLs and doc ids (`01-plan-semestru.md` → `/docs/cwiczenia/plan/plan-semestru`).
- New lecture: folder `docs/wyklady-bezp/wyklad-NN-nazwa/` with `index.md` (`title: "WN: …"`, `sidebar_position: N`, an overview paragraph under `## Przegląd i cele kształcenia`, the list of topics) and topic pages. The homepage picks it up automatically: title, first paragraph and number of topic pages.
- New exercise card: `docs/cwiczenia/karty/zadanie-NN-….md` with `title: "Zadanie N — …"` and `duration_min`. It also appears on the homepage automatically.

### Links
- Link to other pages by file path: `[Plan semestru](../plan/01-plan-semestru.md)`. Do not write `/docs/...` URLs to pages: they break when number prefixes are dropped or files move.
- Index pages without a file are linked by URL: `/docs/wyklady-bezp`, `/docs/cwiczenia/karty`, `/docs/wyklady`.
- Downloads from `static/`: `/cwiczenia/dane/<plik>.csv`.
- Pages that do not exist yet: plain text, no link.

### Markdown and MDX
- `.md` and `.mdx` files are both compiled as MDX: write `&lt;` or `\{` for a literal `<` or `{`, and `{/* … */}` instead of `<!-- … -->`.
- Admonitions: `:::tip[Tytuł]` … `:::` for new content. The older form `:::tip Tytuł` used in existing pages still works (`markdown.mdx1Compat.admonitions`).
- Math: `$…$` and `$$…$$` (KaTeX, bundled with the site). Diagrams: ` ```mermaid ` blocks.
- Images: in an `img/` folder next to the page, with alt text: `![Opis](./img/plik.png)`.
- `draft: true` in the front matter: the page exists only in `npm start`. The answer keys in `docs/cwiczenia/klucze/` are drafts on purpose; do not link them from student pages.

### Slides
```mdx
import { SlideContainer, Slide, KeyPoints, SupportingDetails, InstructorNotes, VisualSeparator } from '@site/src/components/SlideComponents';

<SlideContainer>

<Slide title="🎯 Tytuł slajdu" type="info">

<KeyPoints title="📋 Kluczowe punkty">
- **Pojęcie** – krótkie wyjaśnienie
</KeyPoints>

<InstructorNotes>
Notatki prowadzącego: mówiony język polski, gotowy do odczytania na zajęciach.
</InstructorNotes>

</Slide>

<VisualSeparator type="energy" />

</SlideContainer>
```
- `title` must be plain text: it becomes the slide's `##` heading (anchor link, table of contents). Keep titles short and unique and do not add another `##` for the same slide.
- `type`: `info`, `tip`, `warning`, `danger`, `success` or `default`. `VisualSeparator` types: `default`, `data`, `technical`, `energy`.
- One `<Slide>` is one screen in presentation mode, so keep a slide to about one 16:9 screen: one idea, 4–7 bullets.
- More components: `LearningObjective`, `KeyConcept title`, `Example title`, `InfoBox`, `WarningBox`, `SuccessBox`, `SupportingDetails`.
- Instructor notes: `<InstructorNotes>` (optional `title`, e.g. a second, short block titled "Wykładowca: Krótkie notatki"). A `<details>` whose summary contains "Notatki" is treated the same way. Students can expand the notes on the normal page.

### Quizzes
```mdx
import { InteractiveQuiz } from '@site/src/components/InteractiveQuiz';

<InteractiveQuiz questions={[
  { question: "…", options: ["…", "…", "…"], correctAnswer: 1, explanation: "…" },
]} />
```
`correctAnswer` is the 0-based index of the right option (`correct` works too). The default export, `import InteractiveQuiz from '@site/src/components/InteractiveQuiz'`, is a single question with the same props.

### Teaching style
- Polish, academic but accessible, for 5th-semester engineering students.
- One idea per slide, **bold** for key terms, define terms and acronyms on first use.
- Connect theory with practice in PV, wind, biogas and energy storage, with realistic numbers.
- Prompts for instructor notes: `_promts/InstractorNotes-*.md`; slide conversion: `_promts/4. slides-conversion.md`; styles: `_promts/project-styles.md`.

## Site features

- **Presentation mode**: "▶ Prezentacja" button on lecture, exercise and intro pages (screens wider than 996 px). Each `<Slide>` is a slide; pages without slides are split at `##` headings. Keys: ←/→ change slide, Space/PageDown scroll a long slide and then go on, Home/End, N instructor notes, F fullscreen, Esc exit. The URL `…#slajd-3` opens the presentation at slide 3. The state is kept in `data-pm*` attributes on `<html>`: Docusaurus rewrites the `class` attribute of `<html>`, so do not use classes there.
- **Search**: `@easyops-cn/docusaurus-search-local` (Polish and English), index built by `npm run build`. The archive `docs/wyklady` is excluded (`ignoreFiles`) to keep the index small.
- **Homepage**: lecture and exercise cards come from `src/plugins/course-overview.js`; the quick links are in `src/pages/index.js`.
- **Redirects**: old section URLs (`/docs/category/…`) redirect to the current ones (`plugins` in `docusaurus.config.js`).

## Styling

- Global classes in `src/css/custom.css`, CSS modules in components and pages.
- Every custom background or border color needs a dark-mode variant (`[data-theme='dark']`); prefer Infima variables (`var(--ifm-…)`).
- Avoid inline styles in content.

## Removing the archive (`docs/wyklady`)

1. Delete `bezp-monit/docs/wyklady/`.
2. `sidebars.js`: remove `archiwumSidebar`. `docusaurus.config.js`: remove the navbar item "Archiwum", the footer link "Archiwum wykładów", the redirect `/docs/category/wykłady` and the search `ignoreFiles` entry.
3. `src/pages/index.js`: remove the "Archiwum" link from `resourceLinks`.
4. `docs/intro.md`: the "Wykład 1" link points into the archive.
5. `npm run build` lists anything else that still links there.

## Before committing

- `npm run build` passes with no warnings.
- New pages sit in the right sidebar and use file links.
- New styles checked in light and dark mode.
