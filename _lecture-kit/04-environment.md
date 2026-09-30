# Working environment for a lecture chat

W1 and W2 were written in a **cloud chat linked to the lecturer's computer**. That is setup A below and the default. Setup B (Claude Code running directly in the repository on Windows) is simpler but has no built-in browser for the Polish legal databases.

## A. Cloud chat linked to the computer (default)

The chat runs in a Linux container in the cloud. The repository stays on the lecturer's computer and is reached through the device tools (`mcp__remote-devices__device_*`). The built-in browser pane (`mcp__remote-devices__Claude_Browser__*`) runs on the computer too.

### A.1 Preconditions (check first, stop if missing)

1. Device tools present and the repository folder connected: `device_bash` → `ls $HOME/mnt/` lists `KIOZE-sys-bez-monit`.
   If the tools are missing, the chat is not linked: tell the lecturer to open the chat in the Claude desktop app on the computer with the folder `D:\code\KIOZE-sys-bez-monit` connected, and stop.
2. Built-in browser tools present (load them with ToolSearch query `mcp__remote-devices__Claude_Browser__`; if only `enable__mcp__remote-devices__Claude_Browser` exists, call it). They are needed for Polish law (A.6). If the browser is unavailable, continue but mark every Polish legal detail that is not in `verified-facts/` as "sprawdź w ISAP".

### A.2 Paths

| What | Where |
|---|---|
| Repository on the computer | `D:\code\KIOZE-sys-bez-monit` (check `get_device_info` → connectedFolders if it differs) |
| Same folder inside `device_bash` | `$HOME/mnt/KIOZE-sys-bez-monit` |
| Read-only snapshot in the container | `/home/claude/repo` |
| Research notes | `/home/claude/research/WNN/` |
| Working files (STATUS, plan, claims, calc, fixes) | `/home/claude/work/WNN/` |
| Lecture written by the writer | `/mnt/user-data/outputs/lecture/wyklad-NN-slug/` |
| Files to write back, mirroring repo paths | `/mnt/user-data/outputs/install/<repo-relative path>` |

### A.3 Snapshot the repository into the container

1. `device_bash`: `cd $HOME/mnt/KIOZE-sys-bez-monit && bash _lecture-kit/tools/make_repo_tarball.sh`
   It writes `_tmp/repo-src.tar.gz` (≈25 MB, git-ignored; overwritten each time, no deletion needed). Chats running at the same time pass a tag (`make_repo_tarball.sh W03`, `… W01-rev`) and get `_tmp/repo-src-<tag>.tar.gz`, so they do not overwrite each other's archive.
2. `device_stage_files` with `paths: ["~/mnt/KIOZE-sys-bez-monit/_tmp/repo-src.tar.gz"]` (or the Windows path). The file lands in `/mnt/user-data/uploads/KIOZE-sys-bez-monit/_tmp/repo-src.tar.gz`.
3. `Bash`: `rm -rf /home/claude/repo && mkdir -p /home/claude/repo && tar xzf /mnt/user-data/uploads/KIOZE-sys-bez-monit/_tmp/repo-src.tar.gz -C /home/claude/repo`

Now the Read/Grep/Glob tools work on `/home/claude/repo`. The snapshot is read-only in spirit: changes are written back only through A.5.

### A.4 Build and check the site in the container

**Never run `npm ci`, `npm install` or `npm run build` inside the connected folder on the computer.** Its `node_modules` were installed on Windows; a Linux install would replace them and break the lecturer's setup. (The Linux shell on the computer also cannot run the Windows build: the rspack native binding is missing.)

Build in the container instead:

```bash
bash /home/claude/repo/_lecture-kit/tools/build_site.sh /mnt/user-data/outputs/lecture/wyklad-NN-slug
```

The script copies the lecture into the snapshot, runs `npm ci` (≈30 s) and `npm run build`, fails on any warning, and serves the build on port 3100. Then run the render check (see `tools/README.md`).

### A.5 Write results back to the computer

1. Put every file to write under `/mnt/user-data/outputs/install/`, mirroring repository paths, e.g. `/mnt/user-data/outputs/install/bezp-monit/docs/wyklady-bezp/wyklad-03-…/index.md`.
2. `device_commit_files` with `files: [{stagedPath: "/mnt/user-data/outputs/install/<path>", devicePath: "~/mnt/KIOZE-sys-bez-monit/<path>"}, …]`, at most 50 files per call. The `~/mnt/…` spelling is accepted and resolved to `D:\code\KIOZE-sys-bez-monit\…`; missing folders are created (both tested 29.09.2026).
3. Verify: `md5sum` of the install folder in the container and of the same files on the computer (`device_bash`) must match. **Always check.** Committing a changed file again from the same `stagedPath` can silently write the earlier content (seen on 29.09.2026). If a checksum differs, copy the file to a new staged path (e.g. `/mnt/user-data/outputs/install-2/…`) and commit from there.
4. Never write file content by re-typing it in a `device_bash` heredoc; tool output can be truncated.

### A.6 Polish law and drafts: ISAP, ELI API, RCL

- `WebFetch` is refused by `isap.sejm.gov.pl`, `api.sejm.gov.pl` and `legislacja.gov.pl` (robots.txt; tested 29.09.2026). Research agents therefore cannot verify Polish law. The **coordinator** verifies it in the built-in browser.
- `WebFetch` works for EUR-Lex ELI URLs (e.g. `https://eur-lex.europa.eu/eli/reg/2023/1542/oj/eng`).
- Ready-to-run snippets (act metadata, search, PDF text via pdf.js, RCL .docx text): `tools/browser_snippets.md`. All three were tested on 29.09.2026.
- Record what you read in a new dated section of `verified-facts/pl-law-YYYY-MM.md` (or a new file) with the act, article, date and URL. Edit the snapshot copy in `/home/claude/repo/_lecture-kit/verified-facts/`; it goes to the computer with the other records in Phase 6.

### A.7 Git on the computer

- Read-only commands with `git --no-optional-locks …` (`status`, `diff`, `log`). Plain `git status` refreshes the index and can leave a stale `.git/index.lock` that the Linux shell cannot delete.
- Commit only when the lecturer's prompt asks for it:
  1. `device_request_delete_permission` for the repository root once (reason: "git musi usuwać swoje pliki blokady"). Without it git cannot remove `index.lock`.
  2. The Linux shell has no git identity. Use the author of the last commit: `git -c user.name="$(git log -1 --format=%an)" -c user.email="$(git log -1 --format=%ae)" commit …`.
  3. Stage explicit paths only: the new lecture folder, the previous lecture's `index.md` if changed, `_lecture-kit/`. **Never `git add -A` or `git add .`** — the working tree contains unrelated changes (for example line-ending changes in `_promts/`).
  4. **Never push.** A push to `main` deploys the site on Vercel; the lecturer pushes after review.
- A stale `.git/index.lock` with no git process running can be removed once delete permission is granted.

### A.8 Context budget and resuming

One lecture per chat. Keep the coordinator's context small:
- Agents read long notes; the coordinator reads their short summaries.
- The coordinator reads the lecture pages once, at review time.
- After each phase, update `/home/claude/work/WNN/STATUS.md` (phase done, files produced, decisions, open items). If the conversation is compacted, reread STATUS.md and continue.
- If the container was reset (the files in `/home/claude` are gone): take a new snapshot (A.3); copy `/home/claude/repo/_lecture-kit/research/WNN/` to `/home/claude/research/WNN/` and `/home/claude/repo/_lecture-kit/lectures/WNN/` to `/home/claude/work/WNN/`; read STATUS.md; restart from the first unfinished phase.

## B. Claude Code running in the repository on Windows

- Paths are local; build with `cd bezp-monit && npm run build` (Node 24, see `.nvmrc`).
- Write research notes directly to `_lecture-kit/research/WNN/` and working files to `_lecture-kit/lectures/WNN/`.
- No built-in browser for ISAP/RCL: use Claude in Chrome if it is connected; otherwise mark Polish legal details not in `verified-facts/` as "sprawdź w ISAP" and list them in the final report.
- Git: same rules (explicit paths, no push unless the lecturer asks).
