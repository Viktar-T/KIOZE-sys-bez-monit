# Revising a finished lecture — one chat per lecture

Use this procedure when the lecturer reads an existing lecture and asks for changes in the chat. The changes must meet the same standard as the original writing: the rules of `01-writing-spec.md` still apply to every new or changed sentence.

Other chats may work in the same repository at the same time (a lecture being written, another lecture being revised). The rules in "Working next to other chats" below keep them from overwriting each other.

Conventions: `WN`/`NN` as in `02-pipeline.md`; `LD` = the lecture folder `bezp-monit/docs/wyklady-bezp/wyklad-NN-slug/`; `R` = the lecture's records `_lecture-kit/lectures/WNN/`.

## Setup (once per chat)

1. Load `SendUserMessage` (ToolSearch). Check the environment (`04-environment.md` A.1); stop if the computer is not linked.
2. Snapshot the repository with your own tag: `bash $HOME/mnt/KIOZE-sys-bez-monit/_lecture-kit/tools/make_repo_tarball.sh WNN-rev`, stage `_tmp/repo-src-WNN-rev.tar.gz`, extract to `/home/claude/repo` (A.3). Set up the check tools (`tools/README.md`).
3. Read: `README.md`, `01-writing-spec.md`, `05-feedback-and-lessons.md`, `course-ledger.md`, `verified-facts/`, `../CLAUDE.md`; the lecture's records in `R` (`claims.md`, `calc.py`, `fixes.md`, `revisions.md` if it exists); and every page of the lecture, completely. Skim the research notes listed in `R/writer-brief.md` (they are in `_lecture-kit/research/`).
4. Create `/home/claude/work/WNN-rev/STATUS.md` (requests received, done, pending).
5. Send the lecturer a short overview: pages with minutes and slide counts; the open items for this lecture from `course-ledger.md` §6 (things to verify before teaching); anything the lint reports as WARN. Then wait for requests.

## For each request

1. **Understand it.** If a request is ambiguous and a wrong guess would cost real work (a new part, a removed topic, a changed title), ask one short question first. Otherwise act.
2. **Get the current files from the computer** right before editing: `device_stage_files` for every file of `LD` you will touch (note each file's `mtimeMs`), and copy them over the snapshot copy in `/home/claude/repo/LD`. The lecturer may edit files in their own editor between requests; never edit an older copy.
3. **Make the change** in `/home/claude/repo/LD`, following the spec:
   - new facts need VERIFIED sources: a quick check yourself (WebFetch, official sources only) or a researcher agent (template R) for anything larger; Polish law only as read in ISAP/RCL in the built-in browser (`tools/browser_snippets.md`);
   - every new or changed claim goes into `claims.md`; every changed number into `calc.py`;
   - keep the "Czas" values equal to the index plan (change the plan if the lecturer changes timing) and the total at 90 min, or at the total the plan already shows after videos were added in the visualisation step (`_wizualizacje/README.md`);
   - keep the quiz consistent with the slides; keep the page's `## Źródła` complete;
   - a removed slide may leave a forward reference or a quiz question pointing at it: fix those too.
4. **Check** on `/home/claude/repo/LD`: `calc.py`, `lint_lecture.py` (`--notes` = this lecture's research folder in `/home/claude/repo/_lecture-kit/research/` + `verified-facts/`, `--claims` = `R/claims.md`), `check_mdx.mjs`. For a substantial change (new slides, or new facts on three or more slides), run one independent fact-checker (template F) on the changed slides only, and apply what you accept.
5. **Write back**: copy the changed files to a fresh staged path (`/mnt/user-data/outputs/rev-<n>/…`) and use `device_commit_files`, passing `expectedMtimeMs` from step 2 for every file that already existed. If a file is rejected, it changed on the computer in the meantime: stage it again, reapply the change, retry. Use a fresh staged path for each write-back round and verify the checksums (`04-environment.md` A.5).
6. **Report** in two to four lines: what changed (page, slide), anything the lecturer should look at. The lecturer's dev server (`npm start`) shows the change at once.
7. **Log** the change in `R/revisions.md` (create it if missing; write it back with the pages):

   ```
   ## <date> — <short request>
   - Change: <what, where>
   - Sources added: <URLs or "none">
   - Affects other lectures: <term/number/promise/title and which lecture, or "no">
   - Proposed ledger update: <text, or "none">
   ```

After a batch of changes, and always before you finish: full build and render check in the container (`INSTALL=/nonexistent bash tools/build_site.sh` — the snapshot already contains your changes — `tools/render_check.cjs wyklad-NN-slug`, `tools/stop_site.sh`).

## Working next to other chats

- **Change only this lecture's folder `LD` and its records `R`.** Everything else is read-only for you.
- **Shared kit files are read-only** in a revision chat: `course-ledger.md`, `sources-used.md`, `05-feedback-and-lessons.md`, `00-syllabus.md`, `verified-facts/pl-law-*.md`. A lecture-writing chat rewrites some of them at its end. Put proposed ledger updates in `revisions.md`; put newly verified legal facts in a new file `verified-facts/pl-law-YYYY-MM-WNN-rev.md`. The lecturer applies them later (or asks a chat to do it when no other chat is running).
- **The `index.md` of the lecture just before one being written** is rewritten by that writing chat near its end (its "Powiązania" section). While that chat runs, do not edit this `index.md`; queue those changes in STATUS.md and apply them when the lecturer says the other chat has finished.
- **Changes that affect other lectures** (a term defined here and used later, a number reused elsewhere, a "w W5" promise, the lecture title, links in `docs/intro.md`): do not edit the other files. Record the effect in `revisions.md` and tell the lecturer.
- **General feedback** ("do this in every lecture"): apply it here if asked, and suggest the line for `05-feedback-and-lessons.md` §1 in your report; the lecturer adds it.
- **Git**: no commits or pushes unless the lecturer asks. Several chats committing in one repository can collide on `.git/index.lock`.

## When the lecturer is done

Final report, short:
- list of changes (from `revisions.md`);
- checks run (lint, calculations, MDX, fact-check if any, build and render);
- proposed updates to shared files (ledger, feedback, verified facts) and effects on other lectures;
- anything still open.
