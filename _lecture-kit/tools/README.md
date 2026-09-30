# Tools

All tools were tested on W1 and W2 on 29.09.2026. Paths assume setup A of `../04-environment.md` (snapshot in `/home/claude/repo`).

| Tool | Runs where | What it does |
|---|---|---|
| `make_repo_tarball.sh` | computer (`device_bash`) | Packs the repository (without node_modules, .git, build, PDFs) into `_tmp/repo-src.tar.gz` for staging into the container. |
| `lint_lecture.py` | container (or any computer with Python 3) | Structure and evidence lint: index sections, plan = 90 min (more only when the lecture contains videos added in the visualisation step), page minutes = sum of "Czas" in the notes, slide format, notes length, bullets and tables, blank lines around JSX, imports, links, `## Źródła`, quiz format, and URL provenance (every URL must appear in the notes, verified-facts or the claims ledger). |
| `check_mdx.mjs` + `package.json` | container | Compiles every page with MDX 3 (+GFM, math), renders every KaTeX expression, parses every mermaid block (with a negative control). |
| `calc_template.py` | container | Template for the lecture's `calc.py`: recompute and assert every displayed number. |
| `build_site.sh` | container | Overlays `/mnt/user-data/outputs/install/` and the new lecture on the snapshot, runs `npm ci` and `npm run build`, fails on warnings, serves on port 3100. |
| `stop_site.sh` | container | Stops the server started by `build_site.sh` (by process group). |
| `render_check.cjs` | container | Opens every page of the lecture in Chromium: page loads, mermaid SVGs rendered, no KaTeX errors, no over-wide tables, no console errors, homepage card present. Screenshots in `/tmp/shots/`. |
| `../../_wizualizacje/tools/check-page.mjs` | computer (Node, uses `bezp-monit/node_modules`) | Visualisation step: review pages and lecture pages after applying visuals (imports, exports, media attribution, unwatched videos, timing). See `_wizualizacje/README.md`. |
| `collect_sources.py` | container | Regenerates `../sources-used.md` from the `## Źródła` lists of all lectures. |
| `browser_snippets.md` | built-in browser | Reading ISAP/ELI metadata, PDF texts of acts and RCL draft .docx files. |

## Commands

```bash
K=/home/claude/repo/_lecture-kit
L=/mnt/user-data/outputs/lecture/wyklad-NN-slug

# lint (notes + verified facts + claims ledger as the URL corpus)
python3 $K/tools/lint_lecture.py $L --notes /home/claude/research/WNN $K/verified-facts --claims /home/claude/work/WNN/claims.md

# MDX / KaTeX / mermaid (setup once per session)
mkdir -p /tmp/lecture-tools && cp $K/tools/package.json $K/tools/check_mdx.mjs /tmp/lecture-tools/
(cd /tmp/lecture-tools && npm install --no-audit --no-fund)
node /tmp/lecture-tools/check_mdx.mjs $L/*.md*

# calculations
python3 /home/claude/work/WNN/calc.py

# build + serve + render
bash $K/tools/build_site.sh $L
node $K/tools/render_check.cjs wyklad-NN-slug
bash $K/tools/stop_site.sh     # never pkill -f "docusaurus serve": it kills the calling shell too

# bibliography of all lectures
mkdir -p /mnt/user-data/outputs/install/_lecture-kit
python3 $K/tools/collect_sources.py > /mnt/user-data/outputs/install/_lecture-kit/sources-used.md
```

Expected results: `LINT OK` (WARN lines are advisory), `MDX CHECK OK`, `ALL CHECKS PASSED`, `BUILD OK`, `RENDER CHECK OK`.

Playwright: if `render_check.cjs` cannot find it, run `npm i -g playwright`. Do not run `playwright install`; Chromium is pre-installed in `/opt/pw-browsers`.
