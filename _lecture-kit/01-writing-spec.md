# Writing specification — lectures W1–W10

Read this whole file before writing. It applies to every lecture. W1 and W2 were written to this spec; use them as the model for tone, density and format.

Paths below are relative to the repository root. In a cloud chat the repository snapshot lives at `/home/claude/repo/` (see `04-environment.md`).

## 1. Context

- Course: "Systemy bezpieczeństwa i monitorowania instalacji OZE", ZUT Szczecin, kierunek OZE, semester 5, first-cycle engineering studies. The students are energy engineers, not computer scientists.
- Format: 10 lectures × 90 min. The lecturer presents from the course website. In presentation mode every `<Slide>` is one screen. Students also use the pages for self-study.
- The course was rebuilt from scratch in 2026/27. The old lectures (archived in `bezp-monit/archiwum/2025-26/`) contained technical errors, invented statistics and AI artefacts. **Do not use the archive as a source of facts.** You may look at it only to see which topics the lecturer used to cover.
- Scope, boundaries and the list of lectures: `_lecture-kit/00-syllabus.md`. Stay inside your lecture's scope.
- What earlier lectures already taught, which terms and numbers they fixed, and what they promised: `_lecture-kit/course-ledger.md`.
- Lecturer feedback and lessons from earlier fact-checks: `_lecture-kit/05-feedback-and-lessons.md`. Lecturer feedback there overrides this spec.
- Repository conventions: `CLAUDE.md`. Where CLAUDE.md and this kit differ (its slide example comes from the old lectures: emoji titles, a second notes block), **this kit wins**. Components: `bezp-monit/src/components/SlideComponents.jsx` and `InteractiveQuiz.jsx`.

## 2. Evidence rules (most important)

- Your factual basis is the research notes you are given. Read the assigned notes files **completely**.
- **Use as facts only items marked VERIFIED** in the notes.
  - SECONDARY or VERIFIED-SECONDARY: only with a visible hedge ("według …", "wg doniesień branżowych") and the source link, and only when the point matters and no primary source exists.
  - UNVERIFIED or LISTED: never as facts. Omit them, or phrase them as something to check, for example "(stan na X 2026 — sprawdź tekst jednolity w ISAP)" with the ISAP link.
- `_lecture-kit/verified-facts/*.md` hold facts read directly in official sources (ISAP/ELI, RCL). They are authoritative for Polish law. Do not contradict them; if your notes disagree, the verified-facts file wins and you report the conflict.
- Do not add facts from memory. Exception: uncontroversial textbook fundamentals (what an AND gate is, Ohm's law, P(A∩B) = P(A)·P(B) for independent events).
- Small gap-closing checks with WebSearch/WebFetch are allowed. Use only official, standards-body, regulator, national-lab or peer-reviewed sources. Record anything you add in the claims ledger as ADDED+VERIFIED.
- No invented statistics, costs, ROI, "typical values", incidents or quotations.
  - Real incidents need a source.
  - Any example with assumed numbers is labelled **"Przykład ilustracyjny — dane umowne"** — exactly this wording, in bold (W1/W2 contain variants; do not copy them).
- Every number, legal reference or date must be traceable. Each slide that states facts ends with a source line before the instructor notes: `Źródło: [Fraunhofer ISE, 2013](https://…)` (several links separated by `;`).
- Each topic page ends (after `</SlideContainer>`) with `## Źródła`: a numbered list with author/organisation, title, year, publisher and a working URL (DOI as `https://doi.org/...`). Copy URLs exactly from the notes or from your own verified fetch; never construct or guess a URL. Prefer the official page over mirrors.
  - Entry format (the W2 form): `1. Author A., Author B. (2018). *Title*. Journal or publisher. [https://…](https://…)`; an organisation as author: `EPRI (2024). *Title*. [https://…](https://…)`; standards: `IEC (2022). *IEC 62682:2022 Management of alarm systems for the process industries*. [page](https://…)`.
- Every URL on the pages, including URLs reused from earlier lectures (`_lecture-kit/sources-used.md`), must appear in your claims ledger; the lint checks it.
- Law: write "stan prawny: <miesiąc rok>" (the month you write in). Distinguish in force / adopted but not yet applicable / draft. Drafts are always labelled "projekt" with the draft date.
- Standards: always give the edition (e.g. IEC 61400-1:2019). Standards are voluntary unless a regulation makes them binding; harmonised standards give a presumption of conformity. Check the edition on the publisher's page on the writing date.
- All arithmetic is recomputed in Python and the displayed numbers must match (see §6).
- Label your own judgements "(ocena własna)". Do not turn correlation into causation ("wymóg jest zbieżny z wnioskami z dochodzeń", not "wynika z").

## 3. Consistency with earlier lectures

- Do not redefine a term that an earlier lecture defined (list in `course-ledger.md`). Use the same Polish term and refer back: "(definicja: [W1, część 2](../wyklad-01-zagrozenia-ramy-prawne/02-pojecia-podstawowe.mdx))".
- Use the same values as earlier lectures (explosive limits, NDS, thresholds, SIL bands). If newer verified data differ, use the newer data, say so on the slide, and list it in your report so the earlier lecture can be updated.
- Deliver everything listed for your lecture under "Forward references" in the ledger.
- Links to earlier lectures are relative file links. Later lectures are plain text ("w W8"), never links.
- Do not edit earlier lectures. The coordinator only updates the previous lecture's "Powiązania" section (to link the new lecture) and reports anything else.

## 4. Language and style

- Polish, academic but accessible, correct Polish technical terminology. Use PN-EN terms where they exist. Examples: zagrożenie, sytuacja zagrożenia, szkoda, ryzyko, ryzyko tolerowane, ryzyko resztkowe; środek ochronny, warstwa ochrony, funkcja bezpieczeństwa, przyrządowy system bezpieczeństwa (SIS); analiza rodzajów i skutków uszkodzeń (FMEA), analiza drzewa niezdatności (FTA); dolna granica wybuchowości (DGW, ang. LEL); NDS/NDSCh; operator systemu dystrybucyjnego (OSD); świadectwo kwalifikacyjne.
- At first use in a lecture, expand acronyms with the English expansion and the Polish term: "HAZOP (Hazard and Operability Study — badanie zagrożeń i zdolności do działania)". After that, one term consistently.
- No English sentences, no mixed-language phrases, no marketing tone, no exclamation marks, **no emoji** (W1/W2 use none).
- Decimal comma. Percent without a space ("4,4% obj.", the form used most in W1/W2); other units with a space ("30 kWh", "25 m"). "×" for multiplication, "10⁻⁵" or KaTeX for powers.
- One idea per slide, 4–7 bullets, fits a 16:9 screen. Tables at most about 6 rows × 5 columns per slide. **Bold** a key term where it is defined.
- Instructor notes: one `<InstructorNotes>` block per slide.
  - Starts with "Czas: ~N min" (N may be 1, 1,5, 2, 2,5, 3 …).
  - Then 60–150 words of natural spoken Polish that the lecturer can say aloud. Where useful: one question to ask the students and one typical misconception.
  - Not a repeat of the bullets.

## 5. Format (Docusaurus 3, MDX)

- One folder per lecture: `bezp-monit/docs/wyklady-bezp/wyklad-NN-slug/` (folder name from the syllabus) with `index.md` and topic pages `01-nazwa.mdx`, `02-…` (lowercase, hyphens).
- `index.md`:
  ```
  ---
  title: "WN: …"            (exact title from the syllabus)
  sidebar_position: N
  ---

  # WN: …

  ## Przegląd i cele kształcenia

  <first plain paragraph, 2–3 sentences; the homepage shows it>

  Po wykładzie student potrafi:

  1. … (4–6 measurable outcomes: wyjaśnić, rozróżnić, wskazać, zastosować, obliczyć, ocenić)

  ## Plan wykładu (90 min)

  | Część | Czas |
  |---|---|
  | [Tytuł części](./01-….mdx) | 18 min |
  …
  | **Razem** | **90 min** |

  ## Najważniejsze źródła

  3–6 key open-access sources with links

  ## Powiązania

  - Poprzedni wykład: [WN-1: …](../wyklad-…/index.md) — one sentence on what is reused.
  - Następny wykład: WN+1 — plain text.
  ```
  The minutes in the plan must equal the sum of the "Czas" values in that page's notes (the lint checks this). Write the plan for exactly 90 min. Only the visualisation step (`_wizualizacje/`) may later make it longer by adding videos; then the heading and the Razem row show the real total.
- Topic page:
  ```
  ---
  title: "…"
  sidebar_position: N
  ---

  import { SlideContainer, Slide, InstructorNotes, LearningObjective } from '@site/src/components/SlideComponents';

  <LearningObjective>

  One sentence: what the student can do after this part.

  </LearningObjective>

  <SlideContainer>

  <Slide title="Plain text title" type="info">

  …markdown content…

  Źródło: [..](..)

  <InstructorNotes>

  Czas: ~3 min

  …

  </InstructorNotes>

  </Slide>

  …

  </SlideContainer>

  ## Źródła

  1. …
  ```
  - Blank line after every opening tag and before every closing tag.
  - Use the components W1/W2 use: SlideContainer, Slide, InstructorNotes, LearningObjective, Example (with `title`), InteractiveQuiz. The others (KeyPoints, SupportingDetails, WarningBox, SuccessBox, InfoBox, KeyConcept, VisualSeparator) only with an explicit `title` without emoji — their default titles contain emoji. Import only what you use.
  - `Slide` `type`: `info`, `tip`, `warning`, `danger`, `success`, `default`.
  - Slide `title`: plain text (no markdown, no quotes, no emoji), short, unique within the page. It becomes the `##` heading; do **not** add another `##` inside a slide.
- MDX rules:
  - In prose write `&lt;` for a literal `<` and `\{` `\}` for braces; prefer `≤ ≥ ×` characters.
  - No HTML comments (`{/* … */}` if a comment is unavoidable).
  - Blank lines around JSX tags, tables, lists and code fences inside JSX.
  - Inside mermaid fences write raw characters, never HTML entities.
  - Math: `$…$` inline, `$$…$$` display (KaTeX). Never `$` for currency; write "USD", "EUR", "zł". Inside KaTeX use `{,}` for a decimal comma (`0{,}1`).
- Mermaid: 2–4 diagrams per lecture where they explain a mechanism. `flowchart TD`/`LR`, at most about 12 nodes, labels in `["…"]`, short labels, no parentheses or special characters outside quotes.
- Quiz (last page only), 8–10 questions that test understanding:
  ```
  import { InteractiveQuiz } from '@site/src/components/InteractiveQuiz';

  <InteractiveQuiz questions={[
    { question: "…", options: ["…", "…", "…", "…"], correctAnswer: 1, explanation: "…" },
  ]} />
  ```
  Double-quoted JS strings, no unescaped inner double quotes (use Polish quotes „…” inside), no backticks. Every quiz fact must match the slide exactly (numbers, dates, wording).
- Links: external links absolute https; internal links relative file paths (`./02-….mdx`, `../wyklad-02-analiza-ryzyka/index.md`); never `/docs/...` for pages.
- No images unless the lecturer supplies them. Use tables and mermaid. Pictures, videos and interactive visuals are added later, one part at a time, in the visualisation step (`_wizualizacje/README.md`), after the lecturer has chosen them; writers do not add them.
- Length: about 36–40 slides for 90 min.
- The last page (`0N-podsumowanie.mdx`), in the W2 form: `<SlideContainer>` with two slides (key takeaways; bridge to the next lecture), then after `</SlideContainer>` a `## Sprawdź się` section with the quiz, then a consolidated `## Źródła` grouped by theme. (W1 put the quiz inside a slide; do not copy that.)

## 6. Quality gates before you finish (writer)

1. Every number and date is checked against the notes; every URL is copied from the notes, the verified-facts files or your own verified fetch.
2. Every calculation is recomputed in the lecture's `calc.py` (template: `_lecture-kit/tools/calc_template.py`) and matches the text. The script asserts each displayed value.
3. `python3 /home/claude/repo/_lecture-kit/tools/lint_lecture.py <lecture folder> --notes <notes folder> /home/claude/repo/_lecture-kit/verified-facts --claims <claims.md>` prints `LINT OK` (WARN lines are advisory).
4. `node /tmp/lecture-tools/check_mdx.mjs <lecture folder>/*.md*` prints `MDX CHECK OK`: every file compiles, every mermaid block parses, every KaTeX expression renders (one-time setup in `_lecture-kit/tools/README.md`).
5. Claims ledger (markdown table): file | slide title | claim (short) | source URL | status (VERIFIED / SECONDARY / ADDED+VERIFIED / INFERENCE / TEXTBOOK / ILLUSTRATIVE / UNVERIFIED→hedged).
6. Final message to the coordinator (≤ 400 words): files and slides per page; time per page; claims hedged or left out on purpose; items the lecturer must check; any check you could not run.
