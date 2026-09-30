# STATUS — W1 rewrite (29.09.2026)

Lecture: W1: Zagrożenia w instalacjach OZE, ramy prawne i warstwy ochrony (sidebar_position 1)
Folder: bezp-monit/docs/wyklady-bezp/wyklad-01-zagrozenia-ramy-prawne/ (exists; rewrite replaces it — lecturer's decision in prompt)
Mode: outline approval. Git: no commit, no push.
Snapshot: _tmp/repo-src-W01.tar.gz (md5 d7330c9fc4998ff833df31d74c828e38), extracted to /home/claude/repo.
Snapshot md5 of old W1 pages and old records: snapshot-W1-md5.txt, snapshot-W01records-md5.txt (for Phase 7 check).

Differences from pipeline (lecturer's prompt):
- Scope from syllabus W1 summary + current W1 (outcomes, pages) + W1 forward refs (ledger §5) + Must cover / Not here of W3–W10.
- Current W1 = draft/source material. Reuse research/W01-W02, lectures/W01/{claims,fixes}, verified-facts. New research only for gaps.
- Keep page file names 01-…06-podsumowanie. Ask before rename/drop or changing a slide title that is linked (#anchor).
- Do not write shared files (course-ledger, sources-used, 05-feedback, verified-facts/pl-law-2026-09.md, docs/intro.md), no edits to other lectures.
  Outputs instead: _lecture-kit/lectures/W01/ledger-update.md; _lecture-kit/verified-facts/pl-law-2026-09-W01.md; _lecture-kit/research/W01/.
- Skip Phase 5 step 1.
- Phase 5 build: restage current wyklady-bezp (W2, W3) from the computer; anchor warnings from other lectures → list, don't edit.
- Phase 7: ask lecturer (W3 chat finished?), check W1 unchanged since snapshot, mv old folder → bezp-monit/archiwum/2026-09-v1/wyklad-01-zagrozenia-ramy-prawne/, mv old records {claims.md,calc.py,fixes.md,writer-brief.md} → _lecture-kit/lectures/W01/v1/, write new, verify md5.

Phase 0 notes:
- git status: W1 folder, W2 pages, _lecture-kit, archiwum are untracked; many unrelated modified files (_promts, cwiczenia, config). Not committing anyway.
- On computer wyklady-bezp has: wyklad-01…, wyklad-02…, wyklad-99-test-wizualizacji. No W3 folder yet (W3 chat may be running).
- Links into W1 from other pages (snapshot): W2 index.md and W2 01 → W1 index.md; intro.md → W1 index.md (2×). No #anchor links into W1 pages.
- Baseline lint of old W1: LINT OK, 41 slides, 3 mermaid; 1 WARN (notes 151 words).
- Known defects of old W1: quiz inside a slide (W1 form); bibliography not in W2 form; Q9 explanation duplicates answer; "Example title=Przykład…" instead of bold label; several SECONDARY PL-law rows in claims.md (since verified in ISAP).

## Forward references made by W1 (ledger §5) — to keep
| For | Promise | Old location |
|---|---|---|
| W3 | "od W3 do W5 … jak zbudować monitoring, któremu można ufać" | 05 "Jak monitoring wspiera bezpieczeństwo" (notes) |
| W4 | "IEC 62351 zabezpiecza protokoły komunikacyjne energetyki, które poznacie w W4" | 04 "Alarmy i cyberbezpieczeństwo OT" (notes) |
| W5 | "Alarmy omówimy w W5" | 04 "Alarmy i cyberbezpieczeństwo OT" |
| W6, W8 | IEC 60364-7-712:2025 — storage coupled to PV, island operation — "łączy tematy W6 i W8" | 04 "Normy dla fotowoltaiki…" |
| W6–W9 | "Szczegóły każdej technologii omówimy w W6, W7, W8 i W9" | 05 "Monitoring i ochrona w technologiach OZE" |
| W7 | independent turbine safety system, e.g. overspeed (DNV-ST-0438; W7) | 05 table |
| W10 | "zagrożenia cyber dotyczą wszystkich technologii (szerzej w W10)" | 01 "Mapa zagrożeń: ludzie, otoczenie, cyber" |
| W10 | "cyberbezpieczeństwo OT w W10" | 04 |

## What later lectures reuse from W1 (from syllabus "Reuse, do not repeat")
- W3: part 5 (monitoring vs protection, IPL criteria).
- W4: legal map (RfG, NCCS, CRA dates).
- W5: HSE CHIS6 figure, alarm definition, IPL credit rules (alarm + operator).
- W6: PV fire statistics (Fraunhofer ISE, BRE, PSP) and PV DC basics.
- W7: wind hazards and G+ statistics.
- W8: thermal-runaway stages (Feng 2018), vent-gas data (Shen, Larsson), EPRI statistics, McMicken/Moss Landing/Czajków narratives.
- W9: methane/H₂S properties, Rhadereistedt case.
- W10: legal map NIS2/KSC/CRA/NCCS.

## "Not here" for W1 (owned by later lectures) — W1 at most one sentence
- DC arc detection details, IEC 63027 detection/interruption, firefighting distances, rapid shutdown, draft WT § 304/306 details (W6).
- Ice-throw distances and formula, icing detection, nacelle fire detection/suppression, lightning protection details (W7).
- BMS functions list, UL 9540A, gas detection set points, draft WT §§ 311–316 values, cause-and-effect matrix (W8).
- Hazardous-area classification, Ex equipment selection, detector principles/set points (W9).
- Alarm management lifecycle, rationalisation, KPIs (W5); protocols (W4); architecture/metrology (W3).
- IEC 62443 programme, LOTO, permits, emergency planning, KSC obligations in depth (W10).
- LOPA/SIL arithmetic (W2).

## Phases
- [x] Phase 0 preflight (snapshot, tools, reading)
- [x] Phase 1 research (gap-only) + PL law in browser — notes research/W01/*.md (5 files), verified-facts/pl-law-2026-09-W01.md; written to computer 13:14 (coordinator_checks.md not yet — add in Phase 6)
- [x] Phase 2 outline → APPROVED by lecturer 29.09 (no changes); outline re-sent ~14:50 after context loss (recheck on computer 14:50: no #anchor links into W1; W3 folder still absent)
- [x] Phase 3 writing — 3 writers in parallel (A 01–02 aa7479f288314c919, B 03–04 a6627abc10da9f0d5, C 05–06+index a37bf6e666f7a1420); brief writer-brief.md; claims-A/B/C.md, calc_A/B/C.py; C round 2 done (quiz aligned, 06 bibliography = selection of 45). Coordinator checks 15:15: calc 54 OK, LINT OK (40 slides, 90 min, 3 mermaid), MDX OK. Next: coordinator read-through.
  Writer-reported items: EPRI −97% denominator not stated in EPRI paper (ledger §4 says per GWh → correct); GESTIS ZVG 010000 (not 010010); WECC description general knowledge (check); KG PSP 2022 PDF not read; old WT: ISAP repeal date 21.09.2026 vs art. 102a 'do 19.09.2026'; IEC 60364-7-712 & 62933-5-2 checked 28.09; ISA-18.2-2016 edition inferred; SIS/SIF descriptions textbook; DNV-SE-0439 via third-party copy; Q-bank dropped LFP vs NCM.
- [x] Phase 4 fact-check — F1 (01) ab7c6369fc983eeec, F2 (02–03) aac3513fe54103507, F3 (04–06, index) ae7218e173dbd4a10; reports factcheck-1..3.md; 0 critical, 3 major (EI TRIR comparison; Feng first venting 100–110 °C; WECC attribution — all opened by coordinator), ~35 minor; 58 fixes applied by script (fixtool/), 4 rejected; claims.md merged (A+B+C+fixes), calc.py merged (53 checks). After fixes: calc ALL PASSED, LINT OK (no WARN), MDX OK. Could not read doi.org/10.3389/fenrg.2018.00126 (HTTP 429) — read the same article on frontiersin.org instead.
- [x] Phase 5 build/render — restaged W2, W99, intro.md from computer 15:47 (md5 identical to snapshot; no W3 folder on computer); step 1 skipped per lecturer; BUILD OK (no warnings, no anchor warnings); RENDER CHECK OK (3 mermaid, no wide tables, homepage card); screenshots checked (thermal-runaway diagram, Seveso table, quiz). Site issue found (not ours): active sidebar category label is white on transparent (W1 and W2 labels invisible when inside the lecture).
- [x] Phase 6 records — ledger-update.md (instead of course-ledger/05-feedback/sources-used, per lecturer); no new PL legal facts after 13:14 (pl-law-2026-09-W01.md on computer unchanged); research/W01/coordinator_checks.md added; records: STATUS, plan, writer-brief, claims (merged), calc (merged), fixes, factcheck-1..3, factcheck-prompts, ledger-update. Install set: /mnt/user-data/outputs/install-final/.
- [x] Phase 7 install — lecturer confirmed (no other chat writing W1); W1 + 4 old records unchanged since snapshot (md5); mv old W1 → bezp-monit/archiwum/2026-09-v1/wyklad-01-zagrozenia-ramy-prawne/ (md5 intact); mv old claims/calc/fixes/writer-brief → _lecture-kit/lectures/W01/v1/; 19 files written from install-final, all md5 match. No git commit (lecturer).
- [x] Phase 8 report — sent 29.09.2026
