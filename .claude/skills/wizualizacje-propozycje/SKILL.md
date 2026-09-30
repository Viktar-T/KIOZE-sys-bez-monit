---
name: wizualizacje-propozycje
description: Proposes visuals, pictures and videos for one part of a lecture of the course (a topic page in bezp-monit/docs/wyklady-bezp). Writes a draft review page with two visual options per slide and up to three picture and three video candidates per slide; the lecturer chooses there. Use when the lecturer asks for visual proposals for a lecture part. Does not change the lecture.
argument-hint: <lecture page, e.g. "W2 4" or a path> [slides, e.g. s3-s6] [bez mediów | tylko media]
---

# Propose visuals, pictures and videos for one lecture part

Step 1 of 2 of the visualisation process (`_wizualizacje/README.md`). You write proposals; the lecturer chooses; `/wizualizacje-zastosuj` applies the choice later.

Arguments: `$ARGUMENTS`

## What you must not do

- Do not change the lecture page, its `index.md` or anything else under `bezp-monit/docs/wyklady-bezp/`.
- Do not download pictures or videos. Review pages show hotlinked previews only (they are drafts and never published).
- Do not invent file names, video ids, authors, licences or URLs.
- Do not commit.

## 0. Find the page

- "W2 4", "W2.4", "2/4" → `bezp-monit/docs/wyklady-bezp/wyklad-02-*/04-*.mdx`. A path works too. If it does not resolve to exactly one page, ask.
- Optional slide range (`s3-s6`), `bez mediów` (visuals only) or `tylko media` (pictures and videos only).
- `<lecture>` = the lecture folder, `<NN-part>` = the file name without `.mdx`.
- If `bezp-monit/docs/propozycje/<lecture>/<NN-part>.mdx` already exists, ask: overwrite, or write `<NN-part>-v2.mdx`. Never overwrite silently.
- `bezp-monit/node_modules` must exist; if not, ask the lecturer to run `npm ci` in `bezp-monit/`.

## 1. Read

Read completely:

1. `_wizualizacje/README.md`, `_wizualizacje/components.md`, `_wizualizacje/media-rules.md`, `_wizualizacje/review-page.md`, `_wizualizacje/example-review-page.mdx`.
2. The lecture page, and the lecture's `index.md`.
3. `_wizualizacje/ideas-W1-W2.md` for W1 and W2 (earlier per-slide ideas; ★ = a component already exists).
4. `_lecture-kit/01-writing-spec.md` §2 (evidence rules) and §4 (style), and `_lecture-kit/05-feedback-and-lessons.md` §1 (lecturer feedback, overrides everything else).
5. The lecture's claims ledger `_lecture-kit/lectures/WNN/claims.md` if it exists: the facts a visual may use.

Make a task list: one item per step below.

## 2. List the slides

Number the `<Slide>` blocks of the page in file order: `s1`, `s2`, … For each: title, type, what it shows now (bullets, table, mermaid, worked example, quiz), the key numbers and whether it is labelled "Przykład ilustracyjny — dane umowne". Apply the slide range if one was given.

## 3. Two visual options per slide

Unless `tylko media`. For every slide in range, design **option A and option B that differ in kind**: typically A static (Mermaid, or a catalogue component without controls) and B interactive or step by step (catalogue component, or a new one). Two static forms are acceptable only when no parameter on the slide changes a conclusion; say so in the summaries.

- Follow the design rules in `components.md` §1: claim sentence (`<Claim>`) + one visual; same facts and numbers as the slide; no decoration; interaction only with a question the lecturer can ask.
- Prefer the catalogue (`components.md` §2) and Mermaid (§5). Reuse a "fixed" W99 component only on the slide it was built for.
- New component only when nothing else can show the idea; at most three per run; follow `components.md` §6; add them to `new_components` in the review page's front matter.
- If a slide should stay as it is (a title-only bridge slide, a recap), still give two options if a sensible one exists; otherwise one option, and write the reason in `now`.
- The option's content is exactly the MDX that will go into the slide. Set `replaces`.

## 4. Pictures and videos

Unless `bez mediów`. Choose the slides where a picture or a video could show what the slide cannot (`media-rules.md` §1–2); not every slide needs media. Then launch **`media-researcher` agents in parallel, in one message** (Agent tool, `subagent_type: media-researcher`): one agent per slide, or per group of two or three related slides; at most six agents at a time. Give each agent: slide ids, titles, a short summary of what each slide shows and teaches, what to look for (pictures, videos, both), hints (named incidents, equipment, Polish sources).

When the agents return:

- Keep at most three pictures and three videos per slide, best first. Drop anything whose `learn` sentence is weak.
- Spot-check: for one picture per agent run `node _wizualizacje/tools/commons.mjs info "File:…"`; for every video you keep, the agent's `video.mjs` result must show `exists: true`. If a check fails, drop the candidate.
- No time limit for videos (lecturer's decision): keep a long video if it is relevant; the fragment tells the lecturer which part matters.
- Save all agent results (including `rejected` and `none_found`) as `bezp-monit/docs/propozycje/<lecture>/<NN-part>.media.json`.

## 5. Write the review page

`bezp-monit/docs/propozycje/<lecture>/<NN-part>.mdx`, exactly in the format of `_wizualizacje/review-page.md` (copy the structure of `example-review-page.mdx`, without its warning box):

- front matter with `draft: true`, `source_page`, `created`, `new_components`;
- imports: review components + only the viz/media components you use;
- the "Jak wybierać" paragraph and a file link to the lecture page;
- one `ReviewSlide` per slide in range, in page order, with `now`, options, picture and video candidates.

## 6. Check

1. `node _wizualizacje/tools/check-page.mjs bezp-monit/docs/propozycje/<lecture>/<NN-part>.mdx` → `CHECK OK`. Fix every PROBLEM.
2. Dev server: if nothing answers at `http://localhost:3000`, start `npm start -- --no-open` in `bezp-monit/` in the background and wait for the compile to finish. Read the dev server's output for errors about the review page or new components, and fix them.
3. If a browser tool is available (Claude in Chrome or another), open the review page: every option renders, in light and dark mode, and previews load. Otherwise say that you could not look at it.

## 7. Report to the lecturer

Short:

- the address: `http://localhost:3000/docs/propozycje/<lecture>/<part without NN->` (works while `npm start` runs);
- slides covered; how many pictures and videos were found; slides without media and why (one line each);
- new components written (they stay unused unless chosen);
- anything to check: licences marked "do sprawdzenia", fragments "do ustalenia", videos in a foreign language;
- next step: choose on the page, click "Kopiuj wybory", then run `/wizualizacje-zastosuj` and paste the text.
