# STATUS — W2 rewrite (29.09.2026)

Lecture: W2: Analiza ryzyka — HAZID, HAZOP, FMEA, FTA, LOPA i SIL (sidebar_position 2)
Folder: bezp-monit/docs/wyklady-bezp/wyklad-02-analiza-ryzyka/ (exists; rewrite replaces it — lecturer's decision in prompt, answers Phase 0 step 5)
Mode: outline approval. Git: no commit, no push.
Snapshot: _tmp/repo-src-W02.tar.gz (16:21), extracted to /home/claude/repo. Old W2 md5: snapshot-W02-md5.txt (identical on computer at 16:21).
Old records md5 (computer, 16:21): calc.py 8e97dc9375564810289e0941ffa39d35; claims.md 902539ec69682d7e164ee10029b0c8c5; fixes.md 8e93371ab303396a6985b4983ccd28de; writer-brief.md 6c5cd69be9681f7d52e0076b0e82eb19.
W1 md5 at 16:21: 01 b289566160fd8db9b3abf11833d8939b; 02 295026ef3431780373c993acd3f7adf9; 03 99c57eb135b63eada33be11b1d69a6f6; 04 a35a6f5b1b15077203c82b04fe887606; 05 fe989e0f8fc8061eaa8c382812a7e58c; 06 3d0b3d948d1a7f189ca125b72445dc9f; index 8f96e6c13f784358865145d029785e51 (W1 v2 installed 16:14 by the W1 chat).

Differences from pipeline (lecturer's prompt):
- Scope = syllabus W2 summary + current W2 (outcomes, pages) + W2 forward refs (ledger §5, keep all) + Must cover / Not here of W3–W10. W1 = prerequisite: link back to W1 terms (ledger §3 + W1 ledger-update §2), do not redefine.
- Current W2 = draft/source. Reuse research/W01-W02, lectures/W02/{claims,calc,fixes}, verified-facts. New research only for gaps/outdated/new syllabus needs. Keep VERIFIED; drop or re-verify rest. New calc.py.
- Spec fully (summary page form, bibliography, bold "Przykład ilustracyjny — dane umowne", percent without space).
- Keep page file names 01-proces-zarzadzania-ryzykiem, 02-hazid-i-hazop, 03-fmea-i-fmeca, 04-fta-eta-i-bow-tie, 05-lopa-i-sil, 06-podsumowanie. Ask before rename/drop or changing a slide title another page links to (#anchor).
- W1 may change in parallel: re-read W1 before install; check links/terms/numbers; report differences.
- Snapshot tag W02 (done).
- Do not write shared files (course-ledger, sources-used, 05-feedback, verified-facts/pl-law-2026-09.md, docs/intro.md), no edits to other lectures. Outputs instead: lectures/W02/ledger-update.md; verified-facts/pl-law-2026-09-W02.md; research/W02/.
- Skip Phase 5 step 1. index "Powiązania": back to W1; forward to W3 as link only if wyklad-03-architektura-monitoringu exists at install time, else plain text.
- Phase 5 build: restage current docs/wyklady-bezp (W1, W3) from computer; build with new W2; anchor warnings from other lectures pointing to renamed W2 slides → list, don't edit.
- Phase 7: (a) ask lecturer to confirm W3 chat finished; (b) check W2 unchanged since snapshot (diff+ask if changed); (c) mv old folder → bezp-monit/archiwum/2026-09-v1/wyklad-02-analiza-ryzyka/; (d) mv old records {claims.md,calc.py,fixes.md,writer-brief.md} → lectures/W02/v1/; (e) write new, verify md5.

Phase 0 notes:
- git status: W1/W2 pages, _lecture-kit, archiwum untracked/modified; many unrelated modified files (_promts, cwiczenia). No commit anyway.
- On computer wyklady-bezp: wyklad-01…, wyklad-02…, wyklad-99-test-wizualizacji. No W3 folder yet (16:21).
- Links into W2 (snapshot): W1 index, 02 (2×), 04, 05 (2×), 06 (2×) and intro.md (2×) → W2 index.md only. No #anchor links into W2 pages.
- Old W2: 40 slides, 90 min (14/20/16/16/19/5). Form issues: "4,4 % obj." etc. with space; variants "**Przykład ilustracyjny** — …"; page 01 redefines hazard/risk (ISO 17776) and ALARP (now in W1 v2 02); page 05 repeats IPL/BPCS/alarm rules now in W1 v2 05; methane cites GisChem only (W1 v2: GESTIS/CHEMSAFE + GisChem); McMicken URL .ashx (W1 v2 uses .pdf?la=… with doc no.); Machinery Reg date phrased "stosowane od 20.01.2027 (W1)" OK.

## Forward references made by W2 (ledger §5) — all to keep
| For | Promise | Old location |
|---|---|---|
| W3 | "jakie wielkości mierzyć (napełnienie, O₂, H₂S, CH₄), gdzie i z jaką dokładnością — tor pomiarowy w W3" | 02 "Od wyników HAZOP do wymagań" |
| W3 | "co mierzyć, gdzie i z jaką dokładnością, żeby alarmy i funkcje działały zgodnie z założeniami analiz — W3" | 06 "Od analizy do projektu monitoringu i zabezpieczeń" |
| W5 | "racjonalizację alarmów opisuje IEC 62682:2022 (rozdz. 9) — W5" | 02 "Od wyników HAZOP do wymagań"; 06 |
| W5 | "Z HAZOP i LOPA wynika lista alarmów, którą w W5 będziemy racjonalizować" | 06 (notes) |
| W7 | "Czy i jak IEC 61400-1 powołuje ISO 13849-1 lub IEC 62061 — do sprawdzenia w tekście normy (W7)" | 05 "Maszyny i turbiny wiatrowe: PL i SIL" |
| W7 | "wrócimy do tego w W7" + question: demand mode of turbine overspeed stop | 05 (notes) |
| W7 | main bearing, gearbox, generator as mandatory CMS scope (DNVGL-SE-0439:2016) — W7; vibration sensors "o czym w W7" | 06 |
| W8 | cause-and-effect matrix: "który sygnał (gaz, temperatura, dym) uruchamia które działanie (wentylacja, odłączenie, gaszenie) — W8" | 06 |
| W9 | "W9 — bezpieczeństwo procesowe biogazowni" | index.md |

## What later lectures reuse from W2 (syllabus) — must stay in v2
- W3: biogas gas holder HAZOP + LOPA as the source of measurement requirements (fill level, O₂, H₂S, CH₄).
- W5: IPL credit rules (W1 part 5, W2 part 5); alarm list from HAZOP/LOPA.
- W7: wind-turbine FMEA (Tavner, Shafiee, Carroll); PL/SIL/demand-mode promise.
- W8: BESS fault tree (gases in container); cause-and-effect matrix named only.
- W9: HAZOP, bow-tie and LOPA examples for the biogas holder.
- W10: MOC and incident investigation as the loop back to risk analysis (one sentence in W2 at most).

## "Not here" for W2 (owned by others) — one sentence at most
- measurement chain/accuracy (W3); alarm rationalisation lifecycle (W5); CMS details, turbine PL/SIL resolution (W7); cause-and-effect matrix (W8); detector selection/set points, zones (W9); MOC/permits (W10).

## Phases
- [x] Phase 0 preflight (snapshot, tools, reading)
- [x] Phase 1 research (gap-only) + PL law in browser — 6 researcher notes in research/W02 (risk_criteria_matrix, standards_status, biogas_hazop_measurements, ccf_fta_eta_bess, fmea_update, lopa_sil_pl; written 16:32–16:34 by the first run of this chat, whose context was lost; resumed 17:40 from this STATUS). Coordinator browser checks 17:45: R2P2 first-hand (pkt 130/132/133/136, research/W02/coordinator_checks.md); KP art. 226 + 207 §1 (t.j. Dz.U. 2026 poz. 1245), rozp. ogólne BHP § 2 pkt 7 + § 39a (t.j. 2003 poz. 1650; zm. 2007/330, 2021/2088; newest 2026/927), PN-N-18002:2011 current in PKN shop, PN-EN 61882:2016-07 (EN version; PL title) → verified-facts/pl-law-2026-09-W02.md (snapshot copy). PKN shop blocked further searches (60812, 31010, 61025, 62502 not checked). No second research round: remaining gaps (ISO 13849-1 PL bands, IEC 61508-6 Annex D table, PN-N-18002:2011 matrix cells, membrane holder set points, BESS ignition probabilities) → keep qualitative or omit.
  Check 17:48 on computer: W1 md5 = 16:21 values (unchanged); W2 = snapshot; no W3 folder.
- [x] Phase 2 outline → approval — plan.md written 17:53 by the earlier run (context lost again). Resumed 19:35 (third run): computer re-checked 19:36 — W1 md5 = 16:21 values, W2 = snapshot, no W3 folder, no #anchor links into W2. Plan reviewed (minutes 15/20/15/16/19/5 = 90, slides 7/8/7/7/9/2 = 40; spot-checked calcs). Outline sent 19:40; APPROVED by lecturer (no changes).
- [x] Phase 3 writing — 3 writers in parallel (19:42–19:59; A 01–02, B 03–04, C 05–06+index), C round 2 aligned quiz + consolidated bibliography (45 entries). Coordinator: liquid seal term unified to "zamknięcie cieczowe" (04, 05). Gates: calc_A/B/C ALL PASSED; LINT OK (1 WARN: 5×6 matrix table on 01, accepted); MDX CHECK OK (73 KaTeX, 4 mermaid). 40 slides, 90 min. Coordinator read all pages once. Notes for fixes: index W9 line redundant parenthesis; 06 notes say 3 computational quiz questions (4).
- [x] Phase 4 fact-check — 3 checkers (F1 01–02, F2 03–04, F3 05/06/index): 0 critical, 2 major (both checked by coordinator: Shafiee T7 offshore S vs O; RR716 §6.5.2 PFD<0,1 cannot be claimed), 42 minor, all accepted (6 modified), none rejected; + 6 coordinator fixes. Applied with fixtool/apply_fixes.py (62 replacements). calc.py merged (227 checks, ALL PASSED), claims.md merged (+ post-fact-check section), fixes.md written. LINT OK (1 WARN matrix 5×6), MDX OK (75 KaTeX, 4 mermaid).
- [x] Phase 5 build/render — 20:30 restaged docs/wyklady-bezp + intro.md from computer (_tmp/wyklady-bezp-W02.tar.gz): identical to 16:21 snapshot (W1 unchanged, no W3 folder). BUILD OK (no warnings, no anchor warnings); RENDER CHECK OK (7 pages, mermaid 1/1/0/2/0/0, KaTeX 0 errors, no wide tables, homepage card). Phase 5 step 1 skipped (lecturer).
- [x] Phase 6 records — ledger-update.md (status, terms, numbers, forward refs, open items incl. W1 EPRI 'Cell/Module' conflict and Zadanie 3 H₂S, lessons); research/W02/coordinator_checks.md §3 added (RR716 §6.5.2, CIOP https); verified-facts/pl-law-2026-09-W02.md (from Phase 1, unchanged). No shared files written.
- [x] Phase 7 install — lecturer: W3 chat waits for W2 (30.09.2026). 04:36 UTC: W2 on computer = snapshot md5 (unchanged); W1 = 16:21 md5 (unchanged, links/terms/numbers checked by build + fact-checkers); no W3 folder → W3 stays plain text in index. mv old W2 → bezp-monit/archiwum/2026-09-v1/wyklad-02-analiza-ryzyka/ (md5 identical); mv old records claims/calc/fixes/writer-brief → lectures/W02/v1/ (md5 identical). New folder + records written from install-final/, md5 verified.
- [ ] Phase 8 report
