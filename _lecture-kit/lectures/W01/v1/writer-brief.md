# Writer brief used for W1 (29.09.2026)

This is the exact prompt given to the writer agent. It is kept as a model for template W in `03-agent-prompts.md`. Paths refer to the 2026-09 session layout (`/home/claude/lectures_work/`, `/home/claude/research_notes/`); the notes are now in `_lecture-kit/research/W01-W02/`.

---

Write Lecture 1 of a Polish university course as Docusaurus MDX pages.

FIRST read the full writing specification: /home/claude/lectures_work/WRITING_SPEC.md — follow it strictly (evidence rules, language, format, quality gates). Then read the repo conventions /mnt/user-data/uploads/KIOZE-sys-bez-monit/CLAUDE.md and the components in /mnt/user-data/uploads/KIOZE-sys-bez-monit/bezp-monit/src/components/.

Lecture: "W1: Zagrożenia w instalacjach OZE, ramy prawne i warstwy ochrony" (sidebar_position: 1).
Output folder: /mnt/user-data/outputs/lectures/wyklad-01-zagrozenia-ramy-prawne/
Claims ledger: /home/claude/lectures_work/w1_claims.md

Research notes — read ALL of these completely (they are long; read them in chunks):
- /home/claude/research_notes/OZE safety lectures W1 W2/pv_bess_hazards.md
- /home/claude/research_notes/OZE safety lectures W1 W2/wind_biogas_hazards_pl_fleet.md
- /home/claude/research_notes/OZE safety lectures W1 W2/eu_legal_framework.md
- /home/claude/research_notes/OZE safety lectures W1 W2/pl_legal_framework.md
- /home/claude/research_notes/OZE safety lectures W1 W2/standards_terminology.md
- /home/claude/research_notes/OZE safety lectures W1 W2/monitoring_vs_protection.md

Page plan (adapt slide counts to the evidence; total ≈ 38 slides, 90 min):

index.md — per spec. Outcomes, e.g.: classify hazards of PV/wind/BESS/biogas installations and name their sources; distinguish zagrożenie/ryzyko/ryzyko resztkowe; indicate which EU and Polish acts apply to a given installation and who is responsible (manufacturer/designer/operator); find the right standard and edition; distinguish monitoring functions from protection functions and explain the conditions for counting a layer as a protection layer. Next lecture link: ../wyklad-02-analiza-ryzyka/index.md.

01-zagrozenia-w-instalacjach-oze.mdx (~28 min, ~11 slides)
- Opening: why safety + monitoring; scale of RES in Poland (official figures from the notes only: URE/ARE/PSE/KOWR; give the reference date).
- Hazard taxonomy table: electrical, fire, explosion, toxic/asphyxiation, mechanical, work at height, environmental, cyber × PV/wind/BESS/biogas.
- PV: DC cannot be switched off in daylight, arcs, fire; evidence from Fraunhofer ISE/TÜV Rheinland, BRE (UK), PSP data (with the caveats from the notes).
- Wind: hazards (blade failure, nacelle fire, ice throw, lightning, work at height, rescue); robust statistics = G+ (offshore members) only; teaching point on why press-clipping databases (CWIF) are not valid rates.
- BESS: thermal runaway mechanism and vent gases; EPRI failure-rate trend; case McMicken 2019 (DNV GL report); case Moss Landing 2025 (WECC) — only verified facts.
- Biogas: CH4 flammability limits, H2S toxicity with Polish NDS/NDSCh and EU IOELV, confined spaces; accident statistics (Casson Moreno et al. 2016); a real case (e.g., Rhadereistedt 2005) only if verified in the notes.
- One slide "Jak czytać statystyki wypadków" (exposure/normalisation, reporting bias, sources).

02-pojecia-podstawowe.mdx (~8 min, ~4 slides)
- zagrożenie, sytuacja zagrożenia, szkoda, ryzyko, ryzyko tolerowane, ryzyko resztkowe (ISO/IEC Guide 51:2014 / ISO 12100 as verified in the notes; PL equivalents); ISO 31000 definition of risk and how it differs.
- Hierarchy of risk reduction (inherently safe design → technical protective measures → information for use/organisational measures) — per ISO 12100 / Guide 51 as in notes.
- ALARP / tolerability briefly (HSE R2P2, only verified numbers) — "rozwiniemy w W2".

03-ramy-prawne-ue-i-polska.mdx (~22 min, ~10 slides)
- Mermaid map: EU product law (manufacturer, CE) / workplace law (employer, operator) / major accidents / cyber / grid → Polish implementation.
- NLF, CE marking, harmonised standards, presumption of conformity (Blue Guide 2022).
- Product law table with application dates (LVD, EMC, RED + DA 2022/30 from 1.08.2025, Machinery Directive → Regulation 2023/1230 from 20.01.2027, ATEX 2014/34, PED, Batteries Regulation 2023/1542 milestones, CPR 2024/3110) — only verified dates.
- Workplace law: 89/391, 1999/92 (explosion protection document), 2009/104, 98/24 + IOELV for H2S.
- Seveso III and biogas (exactly as the notes establish).
- Cyber and grid: NIS2, CRA (reporting from 11.09.2026, full application 11.12.2027), NCCS 2024/1366, RfG 2016/631 and the status of its revision.
- Poland: Prawo budowlane art. 56 (PV > 6,5 kW), 2025/2026 energy-storage changes, status of technical conditions (WT) — carefully hedged per the notes; fire-protection regulations; DZPW (rozporządzenie MG 2010); NDS; qualifications (świadectwa kwalifikacyjne 2022); UDT technical inspection; KSC amendment (NIS2) with dates.
- Slide "Kto za co odpowiada" (manufacturer / designer / installer / owner-operator-employer / PSP / UDT / OSD / URE) — only what the notes support.

04-normy.mdx (~10 min, ~5 slides)
- Standards vs law (voluntary; harmonised → presumption; PN-EN adoption; editions matter).
- Map tables per technology with current editions (PV, wind, BESS, Ex/biogas) — only VERIFIED editions; mark changes 2025–2026.
- Cross-cutting: functional safety (IEC 61508, IEC 61511, ISO 13849-1:2023, IEC 62061:2021), risk (ISO 31000:2018, IEC 31010:2019), alarms (IEC 62682:2022), cyber (IEC 62443).

05-monitoring-a-warstwy-ochrony.mdx (~17 min, ~7 slides)
- Monitoring vs protection: information vs automatic action; independence; design to functional-safety standards.
- Layers of protection (IEC 61511 / CCPS) — mermaid diagram; Swiss-cheese model (Reason 2000, BMJ).
- When a layer counts: IPL criteria; BPCS credit ≤ 10 (hedged as secondary per notes); operator response to an alarm.
- Table per technology: monitoring functions vs protection functions (PV, wind, BESS, biogas) — only as supported by the notes.
- McMicken 2019 analysed layer by layer (which barriers were absent/failed).
- How monitoring supports safety (early warning, diagnostics, proof-test evidence, SOE for investigations) and its limits → bridge to W2.

06-podsumowanie.mdx (~5 min, ~2 slides + quiz)
- Key takeaways; InteractiveQuiz with 8–10 questions; consolidated "## Źródła" grouped by: incidents & statistics; EU law; Polish law; standards; protection concepts.

Follow the quality gates in the spec (Python checks, MDX compile check, claims ledger), then reply with the final report described in the spec.
