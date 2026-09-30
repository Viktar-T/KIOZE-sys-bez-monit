#!/usr/bin/env python3
"""Structural and evidence lint for one lecture folder (Docusaurus MDX, course bezp-monit).

Usage:
  python3 lint_lecture.py <lecture_dir> [--notes PATH ...] [--claims FILE ...]
                          [--docs-root DIR] [--no-urls]

  <lecture_dir>  folder with index.md and 01-….mdx pages
  --notes        research notes and verified-facts (files or folders with *.md);
                 every URL in the lecture must appear in the notes or in a claims file
  --claims       claims ledger(s) of the lecture (URLs listed there count as verified)
  --docs-root    folder that contains all lecture folders, used to resolve ../ links
                 (default: /home/claude/repo/bezp-monit/docs/wyklady-bezp)
  --no-urls      skip the URL provenance check

Exit code 1 if any PROBLEM is found. WARN lines do not fail the lint.
"""
import argparse
import glob
import os
import re
import sys

p = argparse.ArgumentParser()
p.add_argument("lecture_dir")
p.add_argument("--notes", nargs="*", default=[])
p.add_argument("--claims", nargs="*", default=[])
p.add_argument("--docs-root", default="/home/claude/repo/bezp-monit/docs/wyklady-bezp")
p.add_argument("--no-urls", action="store_true")
a = p.parse_args()

LD = os.path.abspath(a.lecture_dir)
folder = os.path.basename(LD.rstrip("/"))
problems, warns = [], []
P = problems.append
W = warns.append

m = re.match(r"wyklad-(\d\d)-", folder)
if not m:
    P(f"folder name '{folder}' does not match wyklad-NN-slug")
    NUM = None
else:
    NUM = int(m.group(1))

# ---------- evidence corpus for URL provenance ----------
corpus = ""
for n in a.notes + a.claims:
    files = glob.glob(os.path.join(n, "**", "*.md"), recursive=True) if os.path.isdir(n) else [n]
    for f in files:
        try:
            corpus += "\n" + open(f, encoding="utf-8").read()
        except OSError as e:
            P(f"cannot read notes/claims file {f}: {e}")
dois = {"https://doi.org/" + d.rstrip(".,;*)") for d in re.findall(r"10\.\d{4,9}/[^\s\)\]\|>\"']+", corpus)}
url_re = re.compile(r"https?://[^\s\)\]>\"'|]+")


def url_known(u):
    u = u.rstrip(".,;")
    if u in corpus or u in dois:
        return True
    # tolerate trailing slash and http/https differences
    alt = {u.rstrip("/"), u + "/", u.replace("https://", "http://")}
    return any(x in corpus for x in alt)


ALLOWED_COMPONENTS = {"SlideContainer", "Slide", "KeyPoints", "SupportingDetails", "WarningBox", "SuccessBox",
                      "InfoBox", "InstructorNotes", "VisualSeparator", "LearningObjective", "KeyConcept", "Example",
                      "InteractiveQuiz"}
# Visualisation step (_wizualizacje/): components exported by src/components/viz and src/components/media
_components_dir = os.path.normpath(os.path.join(a.docs_root, "..", "..", "src", "components"))
for _module in ("viz", "media"):
    _index = os.path.join(_components_dir, _module, "index.js")
    if os.path.exists(_index):
        _src = open(_index, encoding="utf-8").read()
        ALLOWED_COMPONENTS |= set(re.findall(r"export\s*\{\s*default as (\w+)", _src))
        for _names in re.findall(r"export\s*\{([^}]*)\}\s*from", _src):
            ALLOWED_COMPONENTS |= {x.strip() for x in _names.split(",") if x.strip() and " as " not in x}
ALLOWED_COMPONENTS.discard("Replaces")  # W99 only
SLIDE_TYPES = {"info", "tip", "warning", "danger", "success", "default"}
EMOJI = re.compile("[\U0001F300-\U0001FAFF☀-➿⭐✅❌]")

pages = sorted(f for f in glob.glob(os.path.join(LD, "*.md*")) if os.path.basename(f) != "index.md")
index_path = os.path.join(LD, "index.md")
page_minutes = {}
total_slides = 0
total_mermaid = 0


def check_links(name, src):
    for text, target in re.findall(r"\[([^\]]*)\]\(([^)\s]+)\)", src):
        if target.startswith(("http://", "https://", "#", "mailto:")):
            continue
        if target.startswith("/docs/"):
            P(f"{name}: /docs/ link to a page, use a file path: {target}")
            continue
        path = target.split("#")[0]
        if not path:
            continue
        if path.startswith("./"):
            full = os.path.join(LD, path[2:])
        elif path.startswith("../"):
            full = os.path.normpath(os.path.join(a.docs_root, folder, path))
            if not os.path.exists(full):
                # the lecture may not be installed in docs-root yet
                full2 = os.path.normpath(os.path.join(LD, path))
                full = full2 if os.path.exists(full2) else full
        else:
            full = os.path.join(LD, path)
        if not os.path.exists(full):
            P(f"{name}: link target not found: {target}")


def check_urls(name, src):
    if a.no_urls:
        return
    for u in sorted(set(url_re.findall(src))):
        if not url_known(u):
            P(f"{name}: URL not found in notes/claims: {u.rstrip('.,;')}")


def check_blank_lines(name, src):
    for tag in ["<SlideContainer>", "<InstructorNotes>", "<LearningObjective>", "<KeyPoints>", "<SupportingDetails>"]:
        for mm in re.finditer(re.escape(tag), src):
            if src[mm.end():mm.end() + 2] != "\n\n":
                P(f"{name}: no blank line after {tag}")
    for mm in re.finditer(r'<Slide title="[^"]*" type="\w+">', src):
        if src[mm.end():mm.end() + 2] != "\n\n":
            P(f"{name}: no blank line after Slide opening tag")
    for tag in ["</Slide>", "</InstructorNotes>", "</SlideContainer>", "</LearningObjective>", "</Example>",
                "</KeyPoints>", "</SupportingDetails>"]:
        for mm in re.finditer(re.escape(tag), src):
            if src[mm.start() - 2:mm.start()] != "\n\n":
                P(f"{name}: no blank line before {tag}")


# ---------- index.md ----------
if not os.path.exists(index_path):
    P("index.md missing")
    idx = ""
else:
    idx = open(index_path, encoding="utf-8").read()
    fm = re.match(r"---\n([\s\S]*?)\n---\n", idx)
    if not fm:
        P("index.md: no front matter")
    else:
        t = re.search(r'^title:\s*"W(\d+): .+"$', fm.group(1), re.M)
        sp = re.search(r"^sidebar_position:\s*(\d+)$", fm.group(1), re.M)
        if not t:
            P('index.md: title must be "WN: …"')
        elif NUM and int(t.group(1)) != NUM:
            P(f"index.md: title number W{t.group(1)} does not match folder {folder}")
        if not sp or (NUM and int(sp.group(1)) != NUM):
            P("index.md: sidebar_position missing or not equal to the lecture number")
    for h in ["## Przegląd i cele kształcenia", "## Najważniejsze źródła", "## Powiązania"]:
        if h not in idx:
            P(f"index.md: missing section '{h}'")
    # 90 min, or the real total after videos were added in the visualisation step (_wizualizacje/)
    plan_heading = re.search(r"^## Plan wykładu \(([\d,]+) min\)$", idx, re.M)
    if not plan_heading:
        P("index.md: missing section '## Plan wykładu (90 min)'")
    outcomes = re.search(r"Po wykładzie student potrafi:\n\n((?:\d+\. .*\n)+)", idx)
    if not outcomes:
        P("index.md: no numbered outcomes after 'Po wykładzie student potrafi:'")
    else:
        n_out = len(outcomes.group(1).strip().splitlines())
        if not 4 <= n_out <= 6:
            W(f"index.md: {n_out} learning outcomes (expected 4–6)")
    plan_rows = re.findall(r"^\|\s*\[[^\]]+\]\(\./([^)]+)\)\s*\|\s*([\d,]+)\s*min\s*\|", idx, re.M)
    if not plan_rows:
        P("index.md: plan table rows not found (| [Tytuł](./01-….mdx) | 18 min |)")
    plan_sum = 0.0
    for f, mins in plan_rows:
        v = float(mins.replace(",", "."))
        page_minutes[f] = v
        plan_sum += v
        if not os.path.exists(os.path.join(LD, f)):
            P(f"index.md: plan links to missing page {f}")
    total_line = re.search(r"\*\*Razem\*\*\s*\|\s*\*\*([\d,]+) min\*\*", idx)
    if not total_line:
        P("index.md: '| **Razem** | **90 min** |' row missing")
    else:
        total = float(total_line.group(1).replace(",", "."))
        if plan_rows and abs(plan_sum - total) > 1e-9:
            P(f"index.md: plan rows sum to {plan_sum:g} min, but the Razem row says {total_line.group(1)} min")
        if plan_heading and abs(float(plan_heading.group(1).replace(",", ".")) - total) > 1e-9:
            P(f"index.md: heading says {plan_heading.group(1)} min, the Razem row {total_line.group(1)} min")
        if abs(total - 90) > 1e-9:
            # Videos added in the visualisation step may make a lecture longer (lecturer's decision,
            # 29.09.2026). Without videos the lecture must still plan exactly 90 min.
            has_video = any("<Video" in open(f, encoding="utf-8").read() for f in pages)
            (W if has_video else P)(f"index.md: plan totals {total_line.group(1)} min, not 90"
                                    + (" (videos added; the lecturer decides)" if has_video else ""))
    check_links("index.md", idx)
    check_urls("index.md", idx)
    if "<!--" in idx:
        P("index.md: HTML comment")

# ---------- topic pages ----------
if not pages:
    P("no topic pages")
for path in pages:
    name = os.path.basename(path)
    src = open(path, encoding="utf-8").read()
    if not re.match(r"---\ntitle: \"[^\"]+\"\nsidebar_position: \d+\n", src):
        P(f"{name}: front matter must start with title and sidebar_position")
    if "<!--" in src:
        P(f"{name}: HTML comment")
    if "<LearningObjective>" not in src and ":::info" not in src:
        W(f"{name}: no LearningObjective")
    # components imported vs used
    imported = set()
    for imp in re.findall(r"^import \{([^}]*)\} from '@site/src/components/[^']+';", src, re.M):
        imported |= {x.strip() for x in imp.split(",") if x.strip()}
    used = set(re.findall(r"<([A-Z][A-Za-z]+)[\s>/]", src))
    for c in used - imported:
        P(f"{name}: component <{c}> used but not imported")
    for c in imported - used:
        W(f"{name}: component {c} imported but not used")
    for c in used - ALLOWED_COMPONENTS:
        P(f"{name}: unknown component <{c}>")
    check_links(name, src)
    check_urls(name, src)
    check_blank_lines(name, src)
    total_mermaid += len(re.findall(r"^```mermaid", src, re.M))

    slides = re.findall(r'<Slide title="([^"]*)" type="(\w+)">([\s\S]*?)</Slide>', src)
    if len(slides) != src.count("<Slide "):
        P(f"{name}: some <Slide> tags do not match the pattern <Slide title=\"…\" type=\"…\">")
    titles = [s[0] for s in slides]
    if len(set(titles)) != len(titles):
        P(f"{name}: duplicate slide titles")
    minutes = 0.0
    for title, typ, body in slides:
        total_slides += 1
        tag = f"{name} / {title}"
        if typ not in SLIDE_TYPES:
            P(f"{tag}: bad slide type '{typ}'")
        if re.search(r"[*_`\[\]\"]", title) or EMOJI.search(title):
            P(f"{tag}: markdown, quotes or emoji in the title")
        if re.search(r"^##\s", body, re.M):
            P(f"{tag}: extra ## heading inside the slide")
        notes = re.search(r"<InstructorNotes>\n\n([\s\S]*?)\n\n</InstructorNotes>", body)
        if not notes:
            P(f"{tag}: missing or badly spaced InstructorNotes")
            continue
        ntext = notes.group(1)
        tm = re.match(r"Czas: ~([\d,]+) min", ntext)
        if not tm:
            P(f"{tag}: notes do not start with 'Czas: ~N min'")
        else:
            minutes += float(tm.group(1).replace(",", "."))
        spoken = re.sub(r"^Czas: ~[\d,]+ min(\s*\([^)]*\))?\s*", "", ntext)
        wc = len(spoken.split())
        if wc < 60 or wc > 150:
            (P if (wc < 40 or wc > 200) else W)(f"{tag}: notes have {wc} words (expected 60–150)")
        pre = body.split("<InstructorNotes>")[0].rstrip()
        if "InteractiveQuiz" not in body:
            last = pre.splitlines()[-1] if pre else ""
            if not last.startswith("Źródło:") and name.find("podsumowanie") < 0:
                P(f"{tag}: no 'Źródło:' line right before the notes")
        nb = len(re.findall(r"^- ", pre, re.M))
        if nb > 7:
            P(f"{tag}: {nb} top-level bullets (max 7)")
        for tbl in re.findall(r"((?:^\|.*\|[ \t]*\n)+)", pre + "\n", re.M):
            rows = [r for r in tbl.strip().splitlines() if not re.match(r"^\|[-:| ]+\|$", r)]
            ncols = rows[0].count("|") - 1
            if len(rows) - 1 > 6 or ncols > 5:
                W(f"{tag}: table {len(rows) - 1} rows × {ncols} columns (guide: ≤ 6 × 5)")
    tail = src.split("</SlideContainer>")[-1]
    if not re.search(r"\n## Źródła\n", tail):
        P(f"{name}: missing '## Źródła' after </SlideContainer>")
    if name in page_minutes and abs(page_minutes[name] - minutes) > 1e-9:
        P(f"{name}: notes sum to {minutes:g} min but the index plan says {page_minutes[name]:g} min")
    if name not in page_minutes:
        P(f"{name}: page not listed in the index plan")
    print(f"{name}: {len(slides)} slides, {minutes:g} min")

# ---------- quiz ----------
if pages:
    last = open(pages[-1], encoding="utf-8").read()
    qm = re.search(r"<InteractiveQuiz questions=\{\[([\s\S]*?)\]\} />", last)
    if not qm:
        P(f"{os.path.basename(pages[-1])}: no <InteractiveQuiz questions={{[…]}} /> on the last page")
    else:
        qs = re.findall(r"\{\s*question:\s*\"([^\"]*)\",\s*options:\s*\[([^\]]*)\],\s*correctAnswer:\s*(\d+),\s*explanation:\s*\"([^\"]*)\"\s*\}", qm.group(1))
        raw_count = qm.group(1).count("question:")
        if len(qs) != raw_count:
            P(f"quiz: {raw_count} questions, but only {len(qs)} match the expected format "
              '{ question: "…", options: ["…"], correctAnswer: N, explanation: "…" }')
        if not 8 <= raw_count <= 10:
            W(f"quiz: {raw_count} questions (expected 8–10)")
        for i, (q, opts, ca, ex) in enumerate(qs, 1):
            n_opts = len(re.findall(r"\"[^\"]*\"", opts))
            if int(ca) >= n_opts:
                P(f"quiz Q{i}: correctAnswer {ca} out of range ({n_opts} options)")
        if "`" in qm.group(1):
            P("quiz: backticks inside quiz strings")

print(f"TOTAL: {len(pages)} pages, {total_slides} slides, {sum(page_minutes.values()):g} min in plan, {total_mermaid} mermaid diagrams")
if not 32 <= total_slides <= 44:
    W(f"{total_slides} slides in total (expected about 36–40)")
if not 2 <= total_mermaid <= 4:
    W(f"{total_mermaid} mermaid diagrams (expected 2–4)")
for w in warns:
    print("WARN", w)
if problems:
    print("\nPROBLEMS:")
    for x in problems:
        print(" -", x)
    sys.exit(1)
print("LINT OK")
