# Components and design rules for slide visuals

Read before proposing or applying a visual. Working examples of every component: the draft lecture W99 (`bezp-monit/docs/wyklady-bezp/wyklad-99-test-wizualizacji/`, visible in `npm start` at `/docs/wyklady-bezp/wyklad-99-test-wizualizacji`). Per-slide ideas for W1 and W2: `ideas-W1-W2.md`.

## 1. Design rules

The evidence behind them is summarised on the W99 index page.

1. **One claim, one piece of evidence.** Above the visual, one full sentence with the conclusion (`<Claim>`); the visual proves it. Assertion–evidence slides improved comprehension of engineering students (Garner and Alley 2013).
2. **Labels on the drawing,** next to the element they describe, not in a legend or a separate table. Colour is never the only carrier of meaning: add a word, an icon or a line style.
3. **Build complex drawings in steps** (`Stepper`, "Dalej") so that the drawing grows with the lecturer's words.
4. **No decoration.** Every element shows a number or a mechanism. No stock photos, clip art, emoji or icons for their own sake.
5. **Interaction only where a parameter changes the conclusion** (β, test interval, crediting a layer), with a question for the students in the notes. Simulations with guidance help learning (SRI 2014); sliders without a question do not.
6. **Same facts as the slide.** A visual may use only facts that are already on the slide or VERIFIED in the lecture's claims ledger (`_lecture-kit/lectures/WNN/claims.md`) or research notes. No new numbers, no "typical values". Illustrative data keep the label **"Przykład ilustracyjny — dane umowne"**.
7. **Fits the slide.** One slide is one 16:9 screen in presentation mode. SVG visuals are limited to 60% of the screen height there; keep the claim to one or two lines.
8. **Polish everywhere:** labels, tooltips, decimal comma (`num`, `sci`, `auto` in `viz/util.js`), units with a space, percent without.
9. **Light and dark mode:** colours only through the CSS variables below.
10. **Accessible:** SVG with `role="img"` and an `aria-label` that states the content; a "Tabela" twin through `VizFrame table`; keyboard-operable controls (the shared `ToggleGroup`, `Slider`, `Check`, `Stepper`).

## 2. Catalogue: `@site/src/components/viz`

`import { Claim, FaultTree } from '@site/src/components/viz';`

| Component | Shows | Props (data) | Built for |
|---|---|---|---|
| `Claim` | one-sentence conclusion above the visual | children | every slide with a visual |
| `Replaces` | note "zastępuje …" (W99 only; not on lecture pages) | children | W99 |
| `StatTiles` | big numbers counting up, part-of-whole bar | `items: [{label, value, decimals, unit, delta, note}]`, `share: {label, value, note}` | scale slides (W1.1) |
| `HazardHeatmap` | table of hazards × technologies as a heat map | `groups`, `tech` (default W1) | W1.1 hazard map |
| `Waffle` | 10 × 10 waffle, optional funnel bars | `categories: [{label, value, unknown}]`, `funnel: [{label, value}]` | shares, e.g. fire causes |
| `RateToggle` | counts versus rates (denominator switch) | `data: [{label, events, exposure}]`, `per`, `perLabel` | statistics |
| `ThermalRunaway` | cell temperature curve, step by step | fixed (W1) | BESS thermal runaway |
| `GasScales` | CH₄ in % vol. with LEL/UEL, H₂S in ppm (log) | fixed (W1, W2) | biogas gases |
| `RpnHistogram` | RPN distribution, 1–10 versus Tavner scales | computed | FMEA |
| `HierarchyFunnel` | ISO 12100 three-step method | `levels` | hierarchy of measures |
| `AlarpCarrot` | HSE ALARP triangle with a risk slider | fixed (R2P2) | ALARP |
| `OnionLayers` | layers of protection (CCPS) with IEC 61511 groups | fixed | protection layers |
| `SwissCheese` | McMicken 2019 in Reason's model, "add one layer" | fixed (DNV GL) | incident analysis |
| `BowTie` | biogas bow-tie with barrier states (frost, BPCS) | fixed (TRAS 120) | bow-tie |
| `RiskMatrix` | 5 × 5 matrix with Cox's pitfalls | fixed (W2) | risk matrix |
| `FaultTree` | BESS fault tree with β and a second fan | fixed (W2) | FTA |
| `EventTree` | event tree with an ignition slider | `fIE`, `pFail` | ETA |
| `LopaWaterfall` | LOPA as steps on a log scale, gap and SIL | `ief` | LOPA |
| `PfdSawtooth` | PFD(t) and the proof-test interval | `required`, `requiredLabel` | PFDavg |
| `BetaBars` | 1oo2: independent and common-cause parts | `lambda`, `hours` | β factor |

All take `title` and `source` (shown as "Źródło: …" under the visual). "Fixed" components contain the numbers of the W1/W2 slide they were built for; reuse them only on that slide, or add props.

Shared building blocks in `viz/Frame.jsx`: `VizFrame` (panel with title, controls, caption, "Tabela" twin), `DataTable`, `ToggleGroup`, `Slider`, `Check`, `Stepper`, `Badge`, `Tip`, `Lines` (multi-line SVG text). Helpers in `viz/util.js`: `num`, `sci`, `auto`, `pct`, `silBand`, `scale`, `logScale`, `niceTicks`, `useReveal` (entrance animation, SSR-safe, respects reduced motion), `useTween`, `useTip`, `useSvgId` (ids safe for `url(#…)`), `wrap`, `smoothPath`.

## 3. Pictures and videos: `@site/src/components/media`

`import { Figure, MediaLink, Video, Extra } from '@site/src/components/media';`

| Component | Use | Props |
|---|---|---|
| `Figure` | a picture with a free licence or own material, file in `img/` next to the page | `src` (imported file), `alt` (Polish, what is visible), `caption` (what to notice), `author`, `license`, `licenseUrl`, `source`, `sourceUrl`, `size`: `wide` (default) \| `half` \| `third`; `author="własne"` for own material |
| `MediaLink` | material without a free licence (press, manufacturers, fire service): link only | `href`, `title`, `source`, `kind`: `zdjęcie` \| `film` \| `strona` \| `dokument`, `note` |
| `Video` | YouTube or Vimeo, loads only after a click, plays `start`–`end` | `youtube` or `vimeo`, `title`, `channel`, `lang`, `duration`, `start`, `end` (`"m:ss"`), `watched={false}` until the lecturer has watched it (badge in `npm start` only) |
| `Extra` | collapsed "Dla chętnych" block, hidden in presentation mode | `title`, children |

Picture import: `import pochodnia from './img/04-fta-pochodnia.jpg';` then `<Figure src={pochodnia} … />`. Import raster files (jpg, png, webp) only: an imported `.svg` becomes a React component in Docusaurus, not a URL.

## 4. Review components: `@site/src/components/review`

`Review`, `ReviewSlide`, `Option`, `ImageCandidate`, `VideoCandidate`: only on review pages in `docs/propozycje/` (format: `review-page.md`). `check-page.mjs --final` rejects them on lecture pages.

## 5. Mermaid

Static diagrams without code: ` ```mermaid ` fences (Mermaid 11.17, `@docusaurus/theme-mermaid`).

- Useful types: `flowchart` (TD/LR, at most about 12 nodes), `sequenceDiagram`, `stateDiagram-v2`, `gantt` (legal timelines), `quadrantChart` (method choice), `sankey-beta` (flows), `xychart-beta` (simple bars and lines), `ishikawa` (cause and effect, since 11.13), `timeline`, `mindmap`.
- **Never set `theme`** in the diagram's front matter or `%%{init}%%`: it disables the site's dark mode. Font sizes and layout options (e.g. `gantt: {fontSize: 14, barHeight: 24, useWidth: 820}`) are fine; see the gantt in W99 part 2.
- Labels in `["…"]`, short, raw characters (no HTML entities). `classDef` only with `stroke-width` or `stroke-dasharray` (no fill colours: they break dark mode).
- The kit expects 2–4 mermaid diagrams per lecture; the lint only warns outside that range.

## 6. Writing a new component

Only when neither the catalogue nor Mermaid can show the idea. At most three new components per proposal run.

- File `bezp-monit/src/components/viz/<Name>.jsx`, default export, then `export {default as <Name>} from './<Name>';` in `viz/index.js`. List it in the review page's `new_components`.
- Wrap in `VizFrame` (`title`, `source`, `note`, `table` for the data twin, `controls` for toggles and sliders).
- Styles: add classes to `viz/viz.module.css`; colours only from the role variables: `--viz-ink`, `--viz-ink-2`, `--viz-muted`, `--viz-grid`, `--viz-axis`, `--viz-border`, `--viz-surface`, `--viz-hover`, series `--viz-s1…s4` (+ `-tint`), status `--viz-good`, `--viz-warning`, `--viz-serious`, `--viz-critical` (+ `-tint`, `-ink`), heat `--viz-heat-0…3`, risk `--viz-r1…r4` (+ `-ink`). Every new variable needs a dark value under `[data-theme='dark']`.
- SSR-safe: no `window` or `document` during render; effects only in `useEffect`. Entrance animation through `useReveal`; respect reduced motion.
- SVG: `viewBox` and width 100% (class `s.svg`), text at least 12 px at 800 px width, ids from `useSvgId()`.
- Numbers through `num`/`sci`/`auto` (Polish formatting). The numbers must equal those on the slide; compute derived values in code, do not hard-code rounded results.
- No dependencies beyond React and `clsx`. No emoji.
- Check in `npm start`: light and dark mode, presentation mode (▶ Prezentacja), a 1280 px and a 390 px wide window.
