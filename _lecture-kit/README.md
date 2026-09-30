# Lecture kit — writing W3–W10, one chat per lecture

This folder holds everything a new chat needs to write one lecture of "Systemy bezpieczeństwa i monitorowania instalacji OZE" to the same standard as W1 and W2: the fixed syllabus, the writing rules, the step-by-step process, the state of the course, verified legal facts, check tools and a ready prompt for each lecture. It is not part of the website (Docusaurus only builds `bezp-monit/`).

## For the lecturer: how to run it

0. **Once, before W3: commit the current state** (the archive move, W1, W2, the config changes and this kit). The lecture chats commit only their own files; if W1/W2 are not committed yet, a W3 commit would contain a W2 `index.md` that links to uncommitted pages. Check `git status` first: some files may differ only in line endings, and `package.json`/`package-lock.json` have changes that did not come from the lecture work.
1. **Start a new chat** in the Claude desktop app with the folder `D:\code\KIOZE-sys-bez-monit` connected (the chat must be able to reach your computer). One chat per lecture.
2. **Paste the prompt** from `prompts/W03.md` (then `W04.md`, …). Choose the mode in the prompt: "outline approval" (you approve the plan before writing — recommended) or "no stops".
3. **Wait.** The chat researches with several agents in parallel, verifies Polish law in the built-in browser, writes, has the pages fact-checked by independent agents, applies the fixes, builds the site and checks every page in a browser. Expect roughly 2–3 hours per lecture. If you chose "outline approval", it stops once to show you the plan.
4. **Review** the lecture: read the final report (it lists what you must verify before teaching), then look at the pages with `npm start` in `bezp-monit/` on your computer.
   **Visuals, pictures and videos** are added afterwards, one part at a time, in Claude Code on your computer: `/wizualizacje-propozycje W3 2`, choose on the review page, then `/wizualizacje-zastosuj`. The whole process: `../_wizualizacje/README.md`.
5. **Give feedback**:
   - corrections for this lecture: ask in the same chat, or edit the pages yourself;
   - general feedback for all later lectures: add a line to `05-feedback-and-lessons.md` → section 1.
6. **Push** to GitHub when you are satisfied (the chat commits but never pushes; a push deploys the site on Vercel).
7. Start the next lecture in a **new** chat.

**Revising a finished lecture:** start a separate chat with `prompts/revise-WNN.md` (ready for W1 and W2; copy one and change the number for later lectures). The chat sets up, gives you an overview and waits for your change requests. It follows `06-revision.md`, which keeps it from overwriting files that other chats running at the same time are using.

Run the lectures in order (W3 → W10). The ledger passes terms, numbers and promises from one lecture to the next, and your feedback on one lecture shapes the next. Two chats at the same time would write to the same files.

## For the coordinator chat: what to read

| File | Purpose | Read |
|---|---|---|
| `README.md` | this overview | first |
| `02-pipeline.md` | the phases you follow, from preflight to the final report | fully, then follow it |
| `00-syllabus.md` | scope, boundaries and promises for every lecture | your section + neighbours |
| `01-writing-spec.md` | evidence rules, language, format, quality gates | fully (the writer reads it too) |
| `05-feedback-and-lessons.md` | lecturer feedback (overrides the spec) and past mistakes | fully |
| `course-ledger.md` | status, terms, key numbers, forward references, open items | fully; update in Phase 6 |
| `verified-facts/` | Polish law read in ISAP/RCL; authoritative | fully |
| `../CLAUDE.md` | repository conventions (the kit wins where they differ) | fully |
| `04-environment.md` | how to reach the repo, build, verify law, commit | fully |
| `03-agent-prompts.md` | templates for researcher, writer, fact-checker, fixer | when launching agents |
| `06-revision.md` | procedure for revising a finished lecture at the lecturer's request | only in a revision chat |
| `tools/` | lint, MDX/KaTeX/mermaid check, build, render check, browser snippets | when checking |
| `lectures/W01`, `lectures/W02` | writer briefs, claims ledgers, calculation scripts, fix lists of W1/W2 | as models |
| `research/` | research notes per lecture (git-ignored: they quote third-party texts) | only your own lecture's |
| `sources-used.md` | every source cited so far (generated) | to reuse the same URLs (a reused URL must still be listed in the lecture's claims ledger) |
| `prompts/` | the prompts the lecturer pastes | — |

Rules that always apply: stay inside your lecture's scope; outside the new lecture folder change only the previous lecture's "Powiązania" section, your row in the intro's lecture table and the kit's records; never push; never run `npm ci`/`npm run build` in the folder on the lecturer's computer.

## Open decisions for the lecturer

These are not decided by the kit. A lecture chat will not act on them unless your prompt says so.

1. **Heat pumps.** Exercise 4 (pompa ciepła) is not covered by any lecture. Options: add a short part to one lecture (for example refrigerant and pressure hazards in W10's safe-operation part), or drop or replace the exercise. Default: not covered.
2. **Course pages outside the lectures.** `docs/intro.md` was updated on 29.09.2026 (lecture plan W1–W10, outcomes, prerequisites, exercises); each lecture chat updates its row of the lecture table. Still open: the lecture grading and the final grade (marked "Do uzupełnienia" in the intro), the conflicting exercise grading pages (the plan says 56 pts, `rubryki/kryteria-zaliczenia.md` says 150 pts), the literature page, and the exercise cards themselves.
3. **Parallel chats.** Possible later for independent lectures (e.g. W7 and W9), each on its own git branch, merged afterwards. The ledger must then be merged by hand. Default: one at a time.

## If something goes wrong

- **The chat says it cannot reach the computer**: open the chat in the Claude desktop app on that computer, connect the folder, and send a message; it continues.
- **The conversation was compacted mid-lecture**: the coordinator rereads `/home/claude/work/WNN/STATUS.md` and continues from the last finished phase.
- **The build fails on your computer after a pull or edit**: run `npm ci` in `bezp-monit/` on Windows, then `npm run build`.
- **A stale `.git/index.lock`**: close other git tools and delete the file.
