# Writer brief used for W2 (29.09.2026)

This is the exact prompt given to the writer agent. It is kept as a model for template W in `03-agent-prompts.md`. Paths refer to the 2026-09 session layout (`/home/claude/lectures_work/`, `/home/claude/research_notes/`); the notes are now in `_lecture-kit/research/W01-W02/`.

---

Write Lecture 2 of a Polish university course as Docusaurus MDX pages.

FIRST read the full writing specification: /home/claude/lectures_work/WRITING_SPEC.md — follow it strictly (evidence rules, language, format, quality gates). Then read the repo conventions /mnt/user-data/uploads/KIOZE-sys-bez-monit/CLAUDE.md and the components in /mnt/user-data/uploads/KIOZE-sys-bez-monit/bezp-monit/src/components/.

Lecture: "W2: Analiza ryzyka — HAZID, HAZOP, FMEA, FTA, LOPA i SIL" (sidebar_position: 2).
Output folder: /mnt/user-data/outputs/lectures/wyklad-02-analiza-ryzyka/
Claims ledger: /home/claude/lectures_work/w2_claims.md
Python calculation checks: /home/claude/lectures_work/w2_calc.py (keep it; the coordinator will re-run it).

Research notes — read ALL of these completely (long; read in chunks):
- /home/claude/research_notes/OZE safety lectures W1 W2/risk_framework_hazid_hazop.md
- /home/claude/research_notes/OZE safety lectures W1 W2/fmea_fmeca.md
- /home/claude/research_notes/OZE safety lectures W1 W2/fta_lopa_sil.md
- /home/claude/research_notes/OZE safety lectures W1 W2/monitoring_vs_protection.md (layers of protection, IPL criteria, BPCS limit)
- /home/claude/research_notes/OZE safety lectures W1 W2/standards_terminology.md (definitions, ALARP/R2P2, standard editions)
Skim for realistic scenarios (hazards of BESS/biogas/wind/PV): pv_bess_hazards.md and wind_biogas_hazards_pl_fleet.md in the same folder.

Lecture 1 (written in parallel) covers hazards, definitions (zagrożenie/ryzyko/ryzyko resztkowe), law, standards and the idea of layers of protection. Do not repeat it; start from a 1-slide recap and link back: ../wyklad-01-zagrozenia-ramy-prawne/index.md.

Page plan (total ≈ 38 slides, 90 min):

index.md — per spec. Outcomes, e.g.: place the methods in the ISO 31000 process and choose a method for a given stage/question (IEC 31010); run a HAZOP on a simple node with guide words; build an FMEA worksheet and explain why RPN is flawed; build and quantify a simple fault tree incl. a common-cause effect; perform a simple LOPA and derive the required SIL; explain how analysis results turn into requirements for monitoring and protection.

01-proces-zarzadzania-ryzykiem.mdx (~14 min, ~6 slides)
- 1-slide recap of W1; ISO 31000:2018 process (mermaid); where HAZID/HAZOP/FMEA/FTA/ETA/LOPA/bow-tie sit (identification/analysis/evaluation/treatment); IEC 31010:2019 selection — table "method vs. project stage vs. question it answers".
- Risk criteria and tolerability (HSE R2P2 — only verified numbers, with caveat that criteria are set by the organisation/regulator).
- Risk matrix: construction (Przykład ilustracyjny 5×5 as a markdown table) and limitations (Cox 2008 and others in notes).

02-hazid-i-hazop.mdx (~20 min, ~8 slides)
- HAZID (ISO 17776:2016 per notes): purpose, stage, checklist categories; SWIFT.
- HAZOP (IEC 61882:2016): design intent, node/element, parameter, guide words table with meanings (exactly as verified in notes), team roles, procedure (mermaid loop), worksheet columns, limitations.
- Worked HAZOP example (2–3 slides): a biogas digester + membrane gas holder node OR a BESS container cooling/ventilation node — rows (deviation, causes, consequences, existing safeguards, recommendations) grounded in the notes (TRAS 120, DGUV, published studies). Label "Przykład ilustracyjny" where content is synthesised.
- Outputs of HAZOP → requirements for alarms, interlocks, SIFs (bridge to LOPA).

03-fmea-i-fmeca.mdx (~16 min, ~7 slides)
- IEC 60812:2018: steps and worksheet; S/O/D scales (illustrative, clearly labelled — the standard does not fix one scale); RPN and its limitations — include a small computed example showing two different failure modes with the same RPN but very different severity (Python-checked); AIAG & VDA 2019 Action Priority logic described in your own words (no copied tables); FMECA criticality matrix.
- RES example based on published work in the notes (e.g., wind-turbine FMEA or PV FMEA) — use only values present in the notes, cite them.
- Link to monitoring: detection rating improves with monitoring/CMS; FMEA → maintenance plan.

04-fta-eta-i-bow-tie.mdx (~16 min, ~7 slides)
- FTA (IEC 61025:2006; NUREG-0492; NASA handbook): top event, gates, basic/undeveloped events, minimal cut sets (mermaid tree).
- Quantification: AND product (independence), OR exact 1−Π(1−p) vs rare-event approximation; worked example — Przykład ilustracyjny, e.g., BESS "pożar rozprzestrzeniający się na sąsiednie moduły" or wind "nadobroty wirnika" with assumed probabilities; compute exactly and with approximation (Python).
- Common-cause failures: beta-factor (IEC 61508-6 as in notes) — show numerically how CCF dominates a redundant pair.
- ETA (IEC 62502:2010) and bow-tie (CCPS/Energy Institute 2018) with a mermaid diagram.

05-lopa-i-sil.mdx (~19 min, ~8 slides)
- LOPA (CCPS 2001/2015): scenario = initiating event + consequence; equation f_C = f_IE × Π PFD_i (× modifiers); IPL criteria; BPCS credit limit (IEC 61511 Ed.2, hedged per notes).
- Table of typical IEF / PFD values — only values with a source in the notes (cite each).
- Worked LOPA example (Przykład ilustracyjny), e.g., overpressure of a biogas digester/gas holder or deflagration in a BESS container: target frequency → mitigated frequency → gap → required risk reduction factor → SIL; all numbers Python-checked.
- SIL tables (IEC 61508: low demand PFDavg, high/continuous demand PFH) exactly as in notes; low vs high demand boundary; simplified PFDavg ≈ λDU·T1/2 for 1oo1 with a computed example and effect of the proof-test interval; brief 1oo2 with β.
- Machinery view (ISO 13849-1:2023 PL a–e, IEC 62061:2021) and relevance to wind turbines / Machinery Regulation — only as supported by the notes.

06-podsumowanie.mdx (~5 min, ~2 slides + quiz)
- Method-selection summary table; how analysis outputs feed monitoring and protection design (alarm list/rationalisation, cause-and-effect matrix, SIF specification, proof tests, CMS requirements) → later lectures (plain text).
- InteractiveQuiz 8–10 questions (include 2–3 small calculation questions whose answers you verified in Python).
- Consolidated "## Źródła" grouped by method.

Follow the quality gates in the spec (Python checks, MDX compile check, claims ledger), then reply with the final report described in the spec.
