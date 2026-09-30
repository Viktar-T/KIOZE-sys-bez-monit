# Review page and choices: the format

The contract between the two steps. `/wizualizacje-propozycje` writes a review page in this format; the lecturer chooses on it; `/wizualizacje-zastosuj` reads the page and the choices. A complete example: `example-review-page.mdx` (also installed at `bezp-monit/docs/propozycje/przyklad/04-fta-eta-i-bow-tie.mdx`).

## Where

| What | Path |
|---|---|
| Lecture page | `bezp-monit/docs/wyklady-bezp/<lecture>/<NN-part>.mdx` |
| Review page | `bezp-monit/docs/propozycje/<lecture>/<NN-part>.mdx` (git-ignored, `draft: true`) |
| Media research results | `bezp-monit/docs/propozycje/<lecture>/<NN-part>.media.json` (git-ignored) |
| Review page in the browser | `http://localhost:3000/docs/propozycje/<lecture>/<part without NN->` (only in `npm start`) |
| Saved choices | `_wizualizacje/choices/<lecture>/<NN-part>.yml` (tracked) |

`<lecture>` is the lecture folder (e.g. `wyklad-02-analiza-ryzyka`), `<NN-part>` the page file name without `.mdx` (e.g. `04-fta-eta-i-bow-tie`). Docusaurus drops the `NN-` prefix from the URL.

## Review page

```mdx
---
title: "Propozycje: <page title>"
draft: true
source_page: bezp-monit/docs/wyklady-bezp/<lecture>/<NN-part>.mdx
created: 2026-10-02
new_components: [PvStringIsolator]      # components written for this proposal, [] if none
---

import { Review, ReviewSlide, Option, ImageCandidate, VideoCandidate } from '@site/src/components/review';
import { Claim, FaultTree } from '@site/src/components/viz';

**Jak wybierać.** …one short paragraph (copy from the example)…

Wykład: [<page title>](../../wyklady-bezp/<lecture>/<NN-part>.mdx)

<Review part="<lecture>/<NN-part>">

<ReviewSlide id="s2" title="<exact slide title>" now="<what the slide shows today, one line>">

<Option id="A" kind="statyczna" summary="<one sentence: what it shows>" replaces="<what it replaces on the slide, or: nic (dodatek)>">

…exactly the MDX that will go into the slide: usually <Claim> + one visual…

</Option>

<Option id="B" kind="interaktywna" summary="…" replaces="…">

…

</Option>

<ImageCandidate id="IMG1" title="…" preview="…" page="…" author="…" license="…" status="wolna" learn="…" why="…" />

<VideoCandidate id="VID1" youtube="…" title="…" channel="…" duration="12:34" lang="PL" start="1:20" end="3:05" fragment="…" embeddable="tak" learn="…" why="…" />

</ReviewSlide>

</Review>
```

Rules:

- **Slide ids**: `sN` = the N-th `<Slide>` on the lecture page, counted from 1 in file order. Include only the slides you have proposals for; keep page order.
- **`title`** of `ReviewSlide` is the exact slide title, so the apply step can find the slide even if slides were added in the meantime.
- **Two options per slide**, `A` and `B`, that differ in kind (`kind`: `statyczna`, `interaktywna`, `animowana`, `krok po kroku`, `zdjęcie z opisem`). An option's content is exactly what the apply step inserts into the slide.
- **`replaces`** tells the lecturer and the apply step what the option takes the place of: `diagram Mermaid`, `tabela S/O/D`, `lista w punktach 2–4`, or `nic (dodatek)`.
- **Pictures** `IMG1…IMG3` and **videos** `VID1…VID3` per slide, best first. Ids are unique within a slide (every slide may have its own `IMG1`).
- `ImageCandidate`
  - `preview`: a thumbnail URL for the review only (Commons: the `preview` field of `commons.mjs`, or `https://commons.wikimedia.org/wiki/Special:FilePath/<file>?width=640`). Nothing is downloaded before the choice.
  - `page`: the source page of the picture (Commons file page, agency page).
  - `status`: `wolna` | `do sprawdzenia` | `niewolna` (see `media-rules.md`). `wolna` needs `author` and `license`.
  - `learn`: one sentence, what the student learns from it. `why`: source and anything the lecturer should know.
- `VideoCandidate`
  - `youtube` (11-character id) or `vimeo` (number); `title` as published; `channel`; `duration` of the whole video; `lang` (`PL`, `EN`, `DE`…; add `, napisy PL` if Polish captions exist).
  - `start`/`end` only when the fragment is grounded (chapters, transcript, description); otherwise leave them out and write `fragment="do ustalenia po obejrzeniu"`.
  - `embeddable`: `tak` | `nie` | `nieznane` from `video.mjs`. A video with `nie` may still be proposed as a link.
  - Videos are never marked as watched on a review page: the badge "nieobejrzany" is always shown.
- Plain text in props: no `"` inside values (use „…”), no `{` or `<`.

## Choices (what the lecturer copies)

The "Kopiuj wybory" button on the review page produces:

```yaml
czesc: wyklad-02-analiza-ryzyka/04-fta-eta-i-bow-tie
slajdy:
  s2:  # Przykład drzewa: gazy w kontenerze BESS
    wizualizacja: B
    na_slajd: [VID1]
    dla_chetnych: [VID2]
    uwagi: "VID1 od 0:10 do 0:40"
  s7:  # Bow-tie dla zbiornika biogazu
    wizualizacja: bez zmian
    na_slajd: [IMG3]
    dla_chetnych: []
```

- `wizualizacja`: `A`, `B` or `bez zmian`.
- `na_slajd`: pictures and videos shown on the slide (also in presentation mode).
- `dla_chetnych`: pictures and videos in a collapsed block "Dla chętnych" under the slide, hidden in presentation mode.
- Candidates not listed are skipped.
- `uwagi`: free text; it overrides the defaults (fragment times, "usuń tabelę", "zdjęcie mniejsze", "bez zmiany notatek").

The lecturer may also edit the YAML by hand before pasting it.
