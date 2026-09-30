---
name: wizualizacje-zastosuj
description: Applies the lecturer's choices from a visualisation review page to the lecture page - inserts the chosen visual, pictures and videos, updates instructor notes, timing, sources and records, then checks the page. Run with the choices text pasted after the command.
argument-hint: <paste the text from "Kopiuj wybory", or a path to a saved .yml>
disable-model-invocation: true
---

# Apply the lecturer's choices to a lecture part

Step 2 of 2 of the visualisation process (`_wizualizacje/README.md`). The lecturer chose on the review page and pasted the choices.

Choices: `$ARGUMENTS`

If the choices are empty, ask the lecturer to paste the text from "Kopiuj wybory" and stop.

## What you must not do

- Do not change slides that have no decision, and do not rewrite lecture text beyond what this procedure lists (the teaching content belongs to the lecturer).
- Do not embed a picture without a verified free licence; do not hotlink pictures; do not download videos.
- Do not cut anything to keep the lecture at 90 minutes: the lecturer decided that videos may make it longer.
- Do not commit or push unless the lecturer asks.

## 0. Set up

1. Parse the choices (format: `_wizualizacje/review-page.md`). `czesc` = `<lecture>/<NN-part>`.
2. Files:
   - review page `bezp-monit/docs/propozycje/<czesc>.mdx` and `<czesc>.media.json`;
   - lecture page from the review page's `source_page`;
   - the lecture's `index.md`;
   - records: `_lecture-kit/lectures/WNN/claims.md` and `revisions.md` (WNN = lecture number; they may not exist, e.g. for W99).
   If the review page is missing, stop and say so.
3. Save the choices as `_wizualizacje/choices/<czesc>.yml` with a first line `# zastosowano <date>`.
4. Ask once, unless the lecturer already said: "Is another chat revising this lecture or writing the next lecture right now?" If yes, stop: that chat may overwrite these edits (`_lecture-kit/06-revision.md`, "Working next to other chats").
5. `git --no-optional-locks status --short bezp-monit/docs/wyklady-bezp/<lecture>`: note uncommitted changes; leave them as they are.
6. Read completely: `_wizualizacje/components.md`, `_wizualizacje/media-rules.md`, `_wizualizacje/review-page.md`, `_lecture-kit/01-writing-spec.md` §4–5 (notes, "Czas", format), `_lecture-kit/05-feedback-and-lessons.md` §1, the review page, the media JSON, the lecture page and `index.md`. Read the lecture page again right before you edit it.
7. Task list: one item per slide with a decision, then timing, records, checks, report.

## 1. For each slide with a decision

Find the slide by the title in the review page (not by number alone). Keep the slide format of the spec: blank lines around every JSX tag, the `Źródło:` line last before `<InstructorNotes>`, one notes block.

### a. Visual (`wizualizacja: A` or `B`)

- Insert the chosen option's content from the review page, adjusted by `uwagi`. Order in the slide: `<Claim>` first, then the visual, then the remaining content, then the `Źródło:` line.
- Remove what the option `replaces`. If the removed element holds information the visual does not show as text (a table, a list of values, minimal cut sets), move it into `<Extra title="…">` right before the `Źródło:` line. A diagram redrawn with the same content is simply removed. `uwagi` override this ("usuń tabelę", "zostaw listę").
- Keep "Przykład ilustracyjny — dane umowne" if the slide has it.
- Imports: add the names to the page's imports (`@site/src/components/viz`, `@site/src/components/media`), merging with an existing import line of the same module.
- `bez zmian`: leave the slide's content as it is.

### b. Pictures (`na_slajd` and `dla_chetnych`)

For each chosen `IMG`:

1. Check the licence again now:
   - Commons: `node _wizualizacje/tools/commons.mjs info "File:…"` → `status: "wolna"`, author and licence present.
   - Other sources: open the source page (WebFetch) and read the licence.
2. Free (`wolna`), or `do sprawdzenia` with the lecturer's explicit "osadź" in `uwagi`:
   - download into `img/` next to the lecture page: `node _wizualizacje/tools/commons.mjs download "File:…" --out bezp-monit/docs/wyklady-bezp/<lecture>/img/<NN>-<short-name>.jpg --width 1600` (other sources: curl the largest size up to 1600 px). File names: lowercase ASCII, hyphens.
   - look at the downloaded file (Read) and write `alt` (Polish, what is visible) and `caption` (one sentence: what to notice) from what you see;
   - `import <camelName> from './img/<file>';` after the other imports; `<Figure src={<camelName>} alt="…" caption="…" author="…" license="…" licenseUrl="…" source="Wikimedia Commons" sourceUrl="<file page>" />`. Use `size="half"` when the slide also has a visual.
3. Not free, or the check fails: `<MediaLink href="<source page>" title="…" source="…" kind="zdjęcie" note="<learn sentence>" />` and say so in the report.

### c. Videos

For each chosen `VID`:

1. `node _wizualizacje/tools/video.mjs <id>` → `exists: true`. If `embeddable` is `nie`: `<MediaLink kind="film" …>` instead.
2. Fragment: times in `uwagi` first, then the candidate's `start`/`end`. If neither exists, insert the whole video and list it in the report under "set the fragment".
3. `<Video youtube="…" title="<as published>" channel="…" lang="…" start="…" end="…" watched={false} />`. Always `watched={false}`: the lecturer removes it after watching.

### d. Where media go

- `na_slajd`: in the slide, after the visual (or after the claim if there is no new visual), in the order of the choices.
- `dla_chetnych`: all of the slide's extra items in one `<Extra title="…">` right before the `Źródło:` line (together with a moved table, if any).
- If a slide now holds a visual and a picture or video, it may no longer fit one screen: do not split it, but list it in the report ("consider two slides").

### e. Instructor notes

The slide's `<InstructorNotes>` block. Keep the lecturer's words; change only what the new form requires:

- First line `Czas: ~N min`. Add the video fragment on the slide, rounded up to 0,5 min, and write `Czas: ~N min (w tym film ~X min)`. Add 0,5 min when the notes tell the lecturer to use an interactive visual live. Pictures and "Dla chętnych" items add nothing. If the lecturer's `uwagi` give a time, use it.
- Replace sentences that describe the old form ("Na diagramie widać…" for a removed diagram).
- Add one or two sentences on how to use the new element: what to point at, the question for the room (from the option), and for a video what to watch for and a question after it.
- 60–150 words after the "Czas" line (the lint warns outside, fails below 40 or above 200). No URLs in the notes.
- `uwagi` "bez zmiany notatek": change only the "Czas" line.

### f. Sources

- New facts are not allowed (they must come from the slide or the claims ledger). If the chosen visual cites a source that the slide's `Źródło:` line lacks, add that link (it must be in the claims ledger or research notes).
- Add each embedded picture and video to the page's `## Źródła` list, numbered after the last entry, in the W2 form (year: the file's date or the video's `published` from `video.mjs`; `b.d.` if unknown, never guessed):
  - `N. <Author> (<year>). *<file title>* [zdjęcie, <licence>]. Wikimedia Commons. [<file page URL>](<file page URL>)`
  - `N. <Channel> (<year>). *<video title>* [film]. YouTube. [https://www.youtube.com/watch?v=<id>](https://www.youtube.com/watch?v=<id>)`
  Links-only items (`MediaLink`) are listed too, as `[strona]`.

## 2. Timing

1. Sum the "Czas" values of the page. Update the page's row in the `## Plan wykładu` table of `index.md`, the `**Razem**` row, and the heading: `## Plan wykładu (90 min)` becomes `## Plan wykładu (<total> min)` when the total is not 90.
2. Report: page minutes before → after, lecture total, and how far it is above 90 min. Do not remove or shorten anything.

## 3. Records

- Claims ledger (if `_lecture-kit/lectures/WNN/claims.md` exists): one row per embedded or linked item, status `MEDIA`:
  `| <NN> | <slide title> | zdjęcie: <file title>, <author>, <licence> (licencja sprawdzona <date>); licencja: <licence URL> | <source URL> | MEDIA |`
  `| <NN> | <slide title> | film: <title>, <channel>, fragment <start>–<end> (osadzanie sprawdzone <date>) | https://www.youtube.com/watch?v=<id> | MEDIA |`
  The lint accepts a URL on the page only if it appears in the ledger or the notes.
- `_lecture-kit/lectures/WNN/revisions.md` (create if missing), the format of `06-revision.md`:
  ```
  ## <date> — wizualizacje: <page title>
  - Change: <per slide: visual A/B, pictures, videos, moved tables>
  - Sources added: <URLs or "none">
  - Affects other lectures: no (or what)
  - Proposed ledger update: none
  ```
- New components that were proposed (`new_components` in the review page) but not chosen: if no page under `bezp-monit/docs/` other than review pages uses them, delete the file and its export line in `viz/index.js`. If another review page uses one, keep it.

## 4. Check

1. `node _wizualizacje/tools/check-page.mjs --final bezp-monit/docs/wyklady-bezp/<lecture>/<NN-part>.mdx` → `CHECK OK`. The WARN lines about unwatched videos go into the report.
2. Lint, if Python is available (`python --version` or `python3 --version`):
   `python _lecture-kit/tools/lint_lecture.py bezp-monit/docs/wyklady-bezp/<lecture> --docs-root bezp-monit/docs/wyklady-bezp --notes _lecture-kit/research/<research folder> _lecture-kit/verified-facts --claims _lecture-kit/lectures/WNN/claims.md`
   → `LINT OK`. (The research folder of W1 and W2 is `_lecture-kit/research/W01-W02`.) If the research notes are missing, add `--no-urls` and say so.
3. Build, without disturbing the lecturer's `npm start`:
   `cd bezp-monit && DOCUSAURUS_GENERATED_FILES_DIR_NAME=.docusaurus-check npx docusaurus build --out-dir build-check`
   → no warnings. Then delete `bezp-monit/build-check` and `bezp-monit/.docusaurus-check`.
4. Look at the page in `npm start` (`http://localhost:3000/docs/wyklady-bezp/<lecture>/<part without NN->`), with a browser tool if one is available: each changed slide in light and dark mode, and in presentation mode (button "▶ Prezentacja"): fits the screen, the video facade shows, "Dla chętnych" is hidden. If no browser tool is available, list what the lecturer should look at.

## 5. Report to the lecturer

Short:

- per slide: what changed (visual A/B, pictures, videos, what moved to "Dla chętnych");
- downloaded pictures: file, source, licence, size;
- **videos to watch before class**: title, fragment, link with the start time (`https://www.youtube.com/watch?v=<id>&t=<seconds>s`); after watching, remove `watched={false}`;
- timing: page before → after, lecture total, minutes above 90;
- slides that may no longer fit one screen;
- new components kept or deleted;
- checks run and their results; anything that could not be checked;
- not committed (unless asked). The review page stays in `docs/propozycje/` (git-ignored); the lecturer may delete it.
