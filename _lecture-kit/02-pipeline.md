# Pipeline — how one chat writes one lecture

You are the **coordinator** for lecture WN. You plan, delegate to agents, verify, integrate and report. You do not write the lecture pages yourself unless an agent fails twice.

Before starting, read: `README.md` (this kit), `00-syllabus.md` (your WN section and its neighbours), `01-writing-spec.md`, `05-feedback-and-lessons.md`, `course-ledger.md`, `verified-facts/*.md`, `04-environment.md`, and the repository's `CLAUDE.md`. Look at the previous lecture's `index.md` and one topic page to match the style.

Use a task list with one item per phase below (TaskCreate/TaskUpdate if available) and keep `/home/claude/work/WNN/STATUS.md` up to date in any case. Send the lecturer short updates only when something changes what they will get (a draft outline, a limitation, a decision).

Conventions: `NN` = two-digit lecture number (03), `N` = number (3), `slug` = folder name from the syllabus. Paths are those of setup A in `04-environment.md`.

---

## Phase 0 — Preflight

1. Load `SendUserMessage` and `SendMessage` (ToolSearch) so you can message the lecturer mid-task and continue agents. If `AskUserQuestion` is not available, ask questions with SendUserMessage and end your turn; continue when the lecturer answers.
2. Check the environment (`04-environment.md` A.1). Stop if the computer is not linked.
3. Snapshot the repository into `/home/claude/repo` (A.3). Set up the check tools once (`tools/README.md`: `/tmp/lecture-tools`); agents share the container and use them too.
4. `git --no-optional-locks status --short` on the computer. Note unrelated changes; you will not touch them. If files of earlier lectures (W1…W(N-1)) are untracked or modified, note it: you will not commit in Phase 7 (a commit of only your files would link to uncommitted pages); tell the lecturer in the final report.
5. Check on the computer that the lecture folder does not exist yet. If it exists, ask the lecturer whether to overwrite it or stop. Never overwrite silently.
6. Read the documents listed above. From the ledger, copy the "Forward references" for WN into `/home/claude/work/WNN/STATUS.md`.
7. Tell the lecturer in one or two sentences what you are about to do and roughly how long it takes (the W1/W2 pipeline took about 2–3 hours of agent time per lecture).

## Phase 1 — Research

1. Split the syllabus section into **5–8 research topics**. Each topic: 4–8 key questions, suggested sources (from the syllabus "starting points" and your judgement), output file `/home/claude/research/WNN/<topic>.md`. Put the plan in STATUS.md.
2. If the `anthropic-skills:deep-research` skill is available, locate its researcher guide (`Glob` for `**/deep-research/references/researcher.md` under `/root/.claude/skills`) and add "As a first step, read <path>" to each researcher prompt.
3. Launch all researchers **in parallel in one message** (Agent tool, `general-purpose`), prompt template **R** in `03-agent-prompts.md`.
4. Polish law and drafts: researchers cannot open ISAP/RCL. While they work, verify the Polish legal points your lecture needs in the built-in browser (`tools/browser_snippets.md`). Reuse `verified-facts/` first; add new facts in a dated section of the **snapshot copy** `/home/claude/repo/_lecture-kit/verified-facts/…` (the writer, the fact-checkers and the lint read it there). It goes to the computer in Phase 6.
5. Read each researcher's summary (not the whole notes). Check coverage against the syllabus "Must cover" list and the forward references. Launch a short second round for gaps, if needed.
6. Write the notes and STATUS.md back to the computer now (`_lecture-kit/research/WNN/*.md` and `_lecture-kit/lectures/WNN/STATUS.md`, via the install folder and `device_commit_files`), so that a reset of the cloud container does not lose the most expensive part of the work.

Stop condition: if a "Must cover" item has no VERIFIED source after the second round, keep it in the outline with a hedge or propose dropping it in your report. Do not fill it from memory.

## Phase 2 — Outline (checkpoint)

1. Write the page plan to `/home/claude/work/WNN/plan.md` in the format of the W1 writer brief (template **W** in `03-agent-prompts.md`):
   - pages with minutes and slide counts (total 90 min, about 36–40 slides);
   - for each page, the slides with their content points and the notes files to use;
   - 2–4 mermaid diagrams, the illustrative calculations, the quiz topics;
   - index outcomes (4–6), forward references to deliver, earlier slides to link back to.
2. **Outline checkpoint** — depends on the "Mode" line in the lecturer's prompt:
   - "Mode: outline approval" (default, also when the line is missing): send the plan with SendUserMessage as a compact list (pages → minutes → slide titles, plus the diagrams and worked examples) and ask with AskUserQuestion: "Approve" / "Change (I will describe)". Wait for the answer; apply the changes.
   - "Mode: no stops": continue without waiting and put the plan in the final report.
3. Write `plan.md` and STATUS.md back to `_lecture-kit/lectures/WNN/` on the computer.

## Phase 3 — Writing

1. Launch one **writer** agent (template **W**) with: the spec, the list of notes files, `verified-facts/`, the ledger, the plan, the output folder `/mnt/user-data/outputs/lecture/wyklad-NN-slug/`, claims ledger `/home/claude/work/WNN/claims.md`, calculation script `/home/claude/work/WNN/calc.py`. Save the full prompt you give the writer as `/home/claude/work/WNN/writer-brief.md` (as for W1/W2).
   For a long lecture you may split it between two writers (pages 1–3, pages 4–6) with the same brief; then check terms and cross-references between the halves yourself.
2. When the writer reports back, run yourself:
   - `python3 /home/claude/work/WNN/calc.py` → all checks pass;
   - `python3 /home/claude/repo/_lecture-kit/tools/lint_lecture.py <out> --notes /home/claude/research/WNN /home/claude/repo/_lecture-kit/verified-facts --claims /home/claude/work/WNN/claims.md` → `LINT OK`;
   - `node /tmp/lecture-tools/check_mdx.mjs <out>/*.md*` → `MDX CHECK OK` (one-time setup in `tools/README.md`).
3. Read the pages once. Fix obvious problems yourself or send them back to the writer (SendMessage to the same agent).

## Phase 4 — Independent fact-check

1. Launch **2–3 fact-checker** agents in parallel (template **F**), each with a disjoint set of pages. They did not write the pages and must not edit them.
2. For each checker, list **specific checks**: every safety-critical statement, every number from a single source, every legal date or threshold, every standard edition, every incident description, and every place where the writer reported a hedge.
3. Triage the findings yourself:
   - accept, reject (with reason) or modify each finding;
   - open the source yourself for every **critical** or disputed finding before accepting it;
   - write the accepted fixes as a numbered list with exact replacement Polish text to `/home/claude/work/WNN/fixes.md` (format: see `lectures/W01/fixes.md`).
4. Apply the fixes with one **fixer** agent (template **X**) or yourself if there are few.
5. Rerun calc, lint and MDX checks. Check that the quiz still matches the slides.

## Phase 5 — Build and render

1. Update the previous lecture's `index.md` → "Powiązania": turn the plain-text "Następny wykład: WN …" into a file link to the new lecture, with the exact new title. Take every lecture title from that lecture's `index.md` front matter, not from the syllabus. Change nothing else in earlier lectures.
   Also update the course introduction `bezp-monit/docs/intro.md` → table "Plan wykładów": in the WN row, turn the title into a file link (`./wyklady-bezp/wyklad-NN-slug/index.md`) with the exact title, adjust "Najważniejsze zagadnienia" if the lecture's scope changed, and set the status to "dostępny". Put both edited files under `/mnt/user-data/outputs/install/`.
2. `bash /home/claude/repo/_lecture-kit/tools/build_site.sh /mnt/user-data/outputs/lecture/wyklad-NN-slug` → must end with `BUILD OK` (no warnings). The script first overlays `/mnt/user-data/outputs/install/`, so the edited previous `index.md` and its new link are built and tested too.
3. `node /home/claude/repo/_lecture-kit/tools/render_check.cjs wyklad-NN-slug` → every page: mermaid SVG count equals the number of mermaid blocks, no KaTeX errors, no wide tables, no console errors. Look at two or three screenshots.
4. Stop the server: `bash /home/claude/repo/_lecture-kit/tools/stop_site.sh`. (Do not use `pkill -f "docusaurus serve"`: it also kills the shell that runs the command.)

## Phase 6 — Records

1. Update the ledger: `mkdir -p /mnt/user-data/outputs/install/_lecture-kit`, copy `/home/claude/repo/_lecture-kit/course-ledger.md` there and edit that copy:
   - status table (WN done, date, slides, folder);
   - new terms defined (term, English, page, source);
   - key numbers used that later lectures may reuse;
   - forward references: mark those for WN as delivered (with page), add new ones this lecture makes;
   - open items: things the lecturer must verify, conflicts with earlier lectures, scope questions.
2. Add the lessons of this lecture's fact-check (errors worth avoiding in later lectures) to `05-feedback-and-lessons.md` → section 3: copy the file to `/mnt/user-data/outputs/install/_lecture-kit/` and edit that copy.
3. `python3 /home/claude/repo/_lecture-kit/tools/collect_sources.py /home/claude/repo/bezp-monit/docs/wyklady-bezp > /mnt/user-data/outputs/install/_lecture-kit/sources-used.md` (after the build, so the new lecture is in the snapshot).
4. Copy into the install folder:
   - `bezp-monit/docs/wyklady-bezp/wyklad-NN-slug/` (all pages, from `/mnt/user-data/outputs/lecture/`);
   - the previous lecture's `index.md` and `bezp-monit/docs/intro.md`;
   - `_lecture-kit/course-ledger.md`, `_lecture-kit/05-feedback-and-lessons.md`, `_lecture-kit/sources-used.md` (already there), and the changed files of `/home/claude/repo/_lecture-kit/verified-facts/`;
   - `_lecture-kit/research/WNN/*.md`;
   - `_lecture-kit/lectures/WNN/`: `STATUS.md`, `plan.md`, `writer-brief.md`, `claims.md`, `calc.py`, `fixes.md` from `/home/claude/work/WNN/`, and the fact-checkers' reports as `factcheck-1.md`, `factcheck-2.md` … (save their final messages).

## Phase 7 — Install on the computer

1. Write the install folder back (`04-environment.md` A.5) and verify checksums.
2. If the lecturer's prompt asks for a commit **and** the earlier lectures are committed (Phase 0 step 4): follow A.7. Commit message: `WN: <title>` with a short body (pages, slides, checks run) and the attribution lines your session requires. Do not push.

## Phase 8 — Final report to the lecturer

Keep it short. Include:
- where the lecture is and its structure (pages, minutes, slide count);
- what was checked (research sources, Polish law read in ISAP/RCL, independent fact-check with N accepted fixes, calculations, build and render);
- **items to verify before teaching**: hedged or secondary claims, sources not opened first-hand, time-sensitive items (with dates);
- anything that conflicts with earlier lectures or the exercises (not fixed, only reported);
- whether it was committed (never pushed);
- next step: review, add general feedback to `05-feedback-and-lessons.md`, then start W(N+1) with `prompts/W(N+1).md` in a new chat.

## Rules that always apply

- The teaching content belongs to the lecturer. Outside your new lecture folder, change only the previous lecture's "Powiązania" section, your row of the "Plan wykładów" table in `docs/intro.md`, and `_lecture-kit/` records.
- Do not change the syllabus, the spec or other lectures' scope; propose changes in the report.
- Do not push. Do not delete files on the computer except git lock files during a commit.
- If an action cannot be undone and could reasonably go either way, ask the lecturer first.
