# Agent prompt templates

These are the prompts that produced W1 and W2, generalised. Replace everything in `<…>`. Keep the constraints as they are: they are what kept the sources clean.

Agents cannot see this conversation. Each prompt must be self-contained: paths, audience, date, rules.

---

## R — Researcher (one per topic, launched in parallel)

```
Research <topic> for lecture W<N> "<lecture title>".

Objective: Build a verified evidence base (facts, definitions, numbers, standard editions, legal references, incidents with investigation reports, lessons learned) for the lecture part(s): <which pages/slides this feeds>. Every number must come with its exact source and URL.

Key questions:
- <question 1, specific: which value, which edition, which article>
- <question 2>
- …

Suggested sources:
- <standards bodies / regulators / national labs / journals relevant to this topic>

Constraints:
- Audience: 5th-semester engineering students of Renewable Energy (OZE) at ZUT Szczecin, Poland; notes feed a 90-minute lecture written in Polish. Current date: <date> — reflect the state as of that date; flag anything that changed in the last two years.
- STRICT source quality: only official/government/regulator/public-safety agencies, national labs and research institutes, standards bodies (IEC/ISO/CEN/CENELEC/PKN/UL/NFPA/DNV), recognised professional bodies, and peer-reviewed papers (give DOI). Do NOT use blogs, vendor marketing, advocacy/lobby groups, content farms, Wikipedia (except to locate primary sources), or AI-generated pages. Trade press only when no primary source exists — mark it SECONDARY.
- Polish legal texts (isap.sejm.gov.pl, api.sejm.gov.pl, legislacja.gov.pl) cannot be fetched from your tools. Record what you need from them as UNVERIFIED with the ISAP/RCL link; the coordinator will verify them in a browser.
- For every fact/number record: exact value and wording, source title, publisher, year, working URL (prefer DOI/official page), and whether you opened the page yourself (VERIFIED) or only saw it in a snippet/secondary citation (UNVERIFIED). Never invent or estimate numbers; if you cannot confirm something, say so.
- For standards: record the current edition and date from the publisher's page (IEC Webstore, ISO, CEN/CENELEC, PKN), and what changed from the previous edition if relevant.
- Include 1–3 teachable real cases (with sources) where they fit, each with: what happened, causes, what monitoring/protection existed or was missing, lessons.
- These facts are already verified and taught in earlier lectures; do not re-research them, only note if you find newer data: <short list from course-ledger.md "Key numbers">.

Save your notes to <output path>. Structure: numbered findings, each with a status (VERIFIED / VERIFIED-SECONDARY / SECONDARY / UNVERIFIED), then a section "Sources" with full references, then "Gaps".

Reply to me with a summary of at most 300 words: what you found, the strongest sources, and the gaps.
```

---

## W — Writer

```
Write Lecture <N> of a Polish university course as Docusaurus MDX pages.

FIRST read the full writing specification: /home/claude/repo/_lecture-kit/01-writing-spec.md — follow it strictly (evidence rules, consistency, language, format, quality gates). Then read:
- /home/claude/repo/_lecture-kit/05-feedback-and-lessons.md (lecturer feedback overrides the spec; the lessons list the mistakes found in earlier lectures)
- /home/claude/repo/_lecture-kit/course-ledger.md (terms already defined, numbers already used, forward references you must deliver)
- /home/claude/repo/_lecture-kit/verified-facts/ (all files; authoritative for Polish law)
- /home/claude/repo/CLAUDE.md and the components in /home/claude/repo/bezp-monit/src/components/
- one earlier lecture as a model of tone and density: /home/claude/repo/bezp-monit/docs/wyklady-bezp/<previous lecture folder>/

Lecture: "W<N>: <exact title from the syllabus>" (sidebar_position: <N>).
Output folder: /mnt/user-data/outputs/lecture/<folder>/
Claims ledger: /home/claude/work/W<NN>/claims.md
Calculation checks: /home/claude/work/W<NN>/calc.py (start from /home/claude/repo/_lecture-kit/tools/calc_template.py)

Research notes — read ALL of these completely (they are long; read them in chunks):
- /home/claude/research/W<NN>/<topic1>.md
- …

Page plan (adapt slide counts to the evidence; total ≈ 38 slides, 90 min):

index.md — per spec. Outcomes: <4–6 outcomes>. Powiązania: previous lecture link <path>; next lecture as plain text.

01-<name>.mdx (~<min> min, ~<n> slides)
- <slide content points, with which notes support them>
…

06-podsumowanie.mdx (~5 min, 2 slides + quiz)
- Key takeaways; bridge to W<N+1>; InteractiveQuiz with 8–10 questions; consolidated "## Źródła" grouped by: <groups>.

Forward references you must deliver: <list from the ledger>.
Link back instead of repeating: <list of earlier slides/pages with paths>.

Follow the quality gates in the spec (calc.py, lint_lecture.py, check_mdx.mjs, claims ledger), then reply with the final report described in the spec (≤ 400 words).
```

---

## F — Fact-checker (2–3 in parallel, disjoint pages)

```
You are an independent fact-checker for university lecture pages (Polish, Docusaurus MDX). You did NOT write them. Do NOT edit any files. Your job: find factual errors, unsupported claims, wrong numbers, broken or unreliable source links, and misleading or safety-critical statements.

Files to check (read completely):
- /mnt/user-data/outputs/lecture/<folder>/<file>
- …

Context: course "Systemy bezpieczeństwa i monitorowania instalacji OZE", 5th-semester engineering students in Poland. The lecturer requires ONLY reliable, high-quality sources (official, standards bodies, government/agencies, national labs, peer-reviewed). Today is <date>. Polish legal facts in /home/claude/repo/_lecture-kit/verified-facts/ were read in official sources and count as verified; check the slides against them. You cannot fetch isap.sejm.gov.pl or legislacja.gov.pl; report any other Polish legal claim as "could not verify".

Method:
1. For every factual claim, number, date, name and quotation on a slide or in instructor notes, open the cited source (WebFetch; DOIs via https://doi.org/...) and check that it supports the claim as worded. Where a PDF is too long, search for terms. Record what you could and could not open.
2. Check that each URL resolves to the right document (title/author/year match) and is the official location.
3. Check every calculation shown (recompute).
4. Check that quiz answers and explanations match the slides exactly.
5. Specific checks requested:
   a) <claim and what to confirm>
   b) …
6. Also flag: any sentence that could teach something unsafe; Polish terminology errors (use PN-EN terms); anything presented as fact that is only secondary/trade press without a hedge; causal claims the source does not make; standard editions that are not current.

Output (≤ 1200 words): a table of issues — file | slide title | quoted text (short) | problem | severity (critical/major/minor) | evidence URL | proposed corrected Polish text. Then a short list "verified OK" (claims you confirmed), and "could not verify" (with reason). Be precise; don't report stylistic preferences.
```

---

## X — Fixer

```
Apply a list of accepted fact-check corrections to Polish university lecture pages (Docusaurus MDX).

Read first:
1. /home/claude/repo/_lecture-kit/01-writing-spec.md (style, format and evidence rules — follow them)
2. /home/claude/work/W<NN>/fixes.md (the exact list of fixes to apply — apply ALL of them, in order)
3. /home/claude/repo/_lecture-kit/verified-facts/ (Polish legal facts already verified in official sources — do not contradict them)

Files to edit: /mnt/user-data/outputs/lecture/<folder>/*.mdx and index.md. Edit only what the fix list requires; do not rewrite other content. Keep MDX valid (blank lines around JSX, `&lt;` for literal <, no HTML comments, mermaid labels in quotes). Every new URL must be opened and confirmed (WebFetch) before you add it; if a claim can't be confirmed, don't add it and report. Keep the "Czas" values in the notes consistent with the index plan.

When done: update /home/claude/work/W<NN>/claims.md; rerun and fix errors until all pass:
- python3 /home/claude/work/W<NN>/calc.py
- python3 /home/claude/repo/_lecture-kit/tools/lint_lecture.py /mnt/user-data/outputs/lecture/<folder> --notes /home/claude/research/W<NN> /home/claude/repo/_lecture-kit/verified-facts --claims /home/claude/work/W<NN>/claims.md
- node /tmp/lecture-tools/check_mdx.mjs /mnt/user-data/outputs/lecture/<folder>/*.md*

Then reply (≤ 400 words) with: each fix number → done / changed differently (why) / not done (why), and the list of new URLs you verified.
```
