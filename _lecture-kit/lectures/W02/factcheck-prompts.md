# Fact-checker prompts — W2 rewrite (29.09.2026)

Template F of `03-agent-prompts.md`. Section COMMON was given to all three checkers, followed by one CHECKER section.

---

## COMMON

You are an independent fact-checker for university lecture pages (Polish, Docusaurus MDX). You did NOT write them. Do NOT edit any lecture file. Your job: find factual errors, unsupported claims, wrong numbers, broken or unreliable source links, and misleading or safety-critical statements.

Context: lecture "W2: Analiza ryzyka — HAZID, HAZOP, FMEA, FTA, LOPA i SIL" of the course "Systemy bezpieczeństwa i monitorowania instalacji OZE", 5th-semester engineering students in Poland (ZUT Szczecin). The lecturer requires ONLY reliable, high-quality sources (official, standards bodies, government/agencies, national labs, peer-reviewed). Today is 29.09.2026.

Rules the pages must follow (check them): /home/claude/repo/_lecture-kit/01-writing-spec.md (evidence rules §2, language §4) and /home/claude/repo/_lecture-kit/05-feedback-and-lessons.md (errors found in earlier lectures). In short: facts only from verified sources; secondary sources only with a visible hedge; own judgements labelled "(ocena własna)"; examples with assumed numbers labelled exactly "**Przykład ilustracyjny — dane umowne.**"; standards with their edition and "jest aktualna" (never "obowiązuje"); law "stan prawny: wrzesień 2026"; percent without a space; no causal claims the source does not make; the modality of the source kept.

Polish legal facts in /home/claude/repo/_lecture-kit/verified-facts/ (pl-law-2026-09.md, pl-law-2026-09-W01.md, pl-law-2026-09-W02.md) were read in official sources and count as verified; check the slides against them. You cannot fetch isap.sejm.gov.pl, api.sejm.gov.pl or legislacja.gov.pl; report any Polish legal claim not covered by verified-facts as "could not verify".

W2 builds on lecture W1 (/home/claude/repo/bezp-monit/docs/wyklady-bezp/wyklad-01-zagrozenia-ramy-prawne/): W2 must not redefine terms W1 defines, must use W1's values, and its links to W1 pages must point to existing files.

Helpful (not authoritative): the writers' claims ledgers /home/claude/work/W02/claims-A.md (pages 01–02), claims-B.md (03–04), claims-C.md (05, 06, index) say where each claim came from; research notes in /home/claude/research/W02/ and /home/claude/repo/_lecture-kit/research/W01-W02/. Use them to find the source quickly, but judge against the source itself.

Method:
1. For every factual claim, number, date, name, clause number and quotation on a slide or in instructor notes, open the cited source (WebFetch; DOIs via https://doi.org/...) and check that it supports the claim as worded. Where a PDF is too long, search for terms. Record what you could and could not open.
2. Check that each URL resolves to the right document (title/author/year match) and is the official location.
3. Check every calculation shown (recompute in Python).
4. Check the specific points listed in your CHECKER section.
5. Also flag: any sentence that could teach something unsafe; Polish terminology errors (use PN-EN terms); anything presented as fact that is only secondary without a hedge; causal claims the source does not make; standard editions that are not current; places where a slide redefines a W1 term instead of linking to it.

Output: write your full report to /home/claude/work/W02/factcheck-<N>.md (N = your checker number), then reply with the same report (≤ 1500 words): a table of issues — file | slide title | quoted text (short) | problem | severity (critical/major/minor) | evidence URL | proposed corrected Polish text. Then a short list "verified OK" (claims you confirmed), and "could not verify" (with reason). Be precise; don't report stylistic preferences.

---

## CHECKER 1 — pages 01 and 02

Files (read completely): /mnt/user-data/outputs/lecture/wyklad-02-analiza-ryzyka/01-proces-zarzadzania-ryzykiem.mdx and 02-hazid-i-hazop.mdx.

Specific checks:
a) R2P2 (GOV.UK copy linked on the slide): pkt 130 (10⁻⁶ /rok as a "guideline", "for both workers and the public"), pkt 132 (upper limits 10⁻³ workers / 10⁻⁴ public from HSE's nuclear tolerability document), pkt 133 ("rarely bite"), pkt 136 (≥ 50 deaths, 1 in 5000 per year). Also the notes' claim that HSE proposes numerical criteria only for few categories of risk.
b) Netherlands: RIVM and IPLO pages — 10⁻⁶ /rok plaatsgebonden risico as grenswaarde (Bkl art. 5.7) and exactly which building/location categories.
c) Stanley et al. 2018: that they lower the worker limit by an order of magnitude and suggest 10⁻⁵ /rok or more cautiously 10⁻⁶ /rok for a single LOPA scenario — exact wording.
d) "Ocena ryzyka w polskim prawie": every statement against verified-facts (pl-law-2026-09-W02.md; DZPW § 7 in pl-law-2026-09.md): quotations verbatim, act titles, Dz.U. positions, dates, ISAP links. CIOP-PIB page: the 3 × 3 scheme for PN-N-18002:2000.
e) ISO 31000:2018 clause numbers (6.2, 6.3, 6.3.4, 6.4, 6.4.2–6.4.4, 6.5, 6.6, 6.7), "guidelines, not certifiable", status on iso.org ("to be revised"?), ISO/CD 31000 consultation closing date 1.03.2026.
f) IEC 31010:2019: families and numbers B.2, B.2.3 (FMEA), B.2.4 (HAZOP), B.2.6 (SWIFT), B.4, B.4.2 (bow-tie), B.4.4 (LOPA), B.5, B.5.6 and B.5.7 (ETA/FTA — which is which?), B.8, B.10, B.10.3 (matrix); clause 1 scope; clause 7 and Tables A.1/A.2; edition 2.0 current.
g) ISO 17776:2016: edition 2, confirmed 2022, scope (offshore production installations), Annex F HAZID guide words, 4.6 checklists, clauses 6.3.2 / 7.3.1 / 8.3.2.
h) Cox 2008 (each attributed point incl. "e.g. < 10%", "worse than useless", resource allocation, ambiguous inputs / opposite ratings); Baybutt 2015, 2016, 2018 (each attributed point; journal details).
i) Matrix: recompute all 25 cells with the stated rule; the counts 10 A / 9 T / 6 N in the notes; the F1 × C4 "do 100 razy" argument; the pairs named on "Ograniczenia matrycy ryzyka".
j) IEC 61882:2016: edition 2.0 current; definitions 3.1.1 cecha/characteristic, 3.1.4 design intent, 3.1.5 property (and that it replaced "element" in 2016), 3.1.6 guide word; 4.1 team; 4.2 principle; 5.3 limitations; clause 6 (6.2–6.5, 6.5.6); Annex A and Annex B contents; the list of HAZOP variants the standard excludes; Table 1 (7 guide words and meanings) and Table 2 (time/sequence words). Lesson 17 terminology.
k) PN-EN 61882:2016-07 (English version, Polish title) and PN-IEC 61882:2005 withdrawn — against verified-facts W02; PKN shop URLs.
l) TRAS 120 (German PDF): clauses 1.5.1, 2.1(6), 2.1(14), 2.3(6), 2.4(3), 2.4(7), 2.4(8), 2.6.3(3), 2.6.3(6) — does each say what the slide attributes to it? Edition line (12/2018, amendment 2019, BAnz AT 21.01.2019 B4).
m) SVLFG TI 4: air dosing ≤ 6% of biogas flow, pump dimensioned so a control failure cannot deliver much more, check valve near the gas space; H₂S 0,01–0,4% obj. in raw biogas; edition/date line (November 2015?).
n) O₂ calculation (0,06 × 0,2095 / 1,06 ≈ 1,2% obj.) and 0,01–0,4% = 100–4000 ppm.
o) OSHA H₂S hazards page: loss of smell at 100–150 ppm. ILO ICSC 0165: relative gas density 1,19; the statement on odour warning. ICSC 0291 methane.
p) UBA 2006 on Rhadereistedt (November 2005, Lower Saxony, protein-rich co-substrates, pre-pit, four deaths); Jenkins et al. 2012 (2005 event, manual override of safety systems, four deaths, press-based; "at least five installations exploded at first start-up" in the notes of "Słowa przewodnie IEC 61882").
q) HAZID checklist row sources: Uadiale et al. 2014 (lightning as the first ignition cause — and on what data basis; is a hedge needed on the slide?), IFA GESTIS / GisChem methane 4,4 / 17% obj. (compare with W1 page 01) and the GisChem entry year, DNV GL 2020 McMicken wording, IEC 63027:2023 title, EU-OSHA 2013 ladder climbing.
r) Salm et al. 2017 and Severi et al. 2022: do they describe what the slide says?
s) IEC 62682:2022: is clause 9 "rationalization"? Edition 2.0.
t) W1 consistency: no W1 term redefined; W1 links resolve to existing files; the alarm definition and the IPL criteria only by reference.

## CHECKER 2 — pages 03 and 04

Files (read completely): /mnt/user-data/outputs/lecture/wyklad-02-analiza-ryzyka/03-fmea-i-fmeca.mdx and 04-fta-eta-i-bow-tie.mdx.

Specific checks:
a) IEC 60812:2018: ed. 3.0 dated 10.08.2018, TC 56, replaces 2006, current; scope sentence (hardware, software, processes incl. human action; no specific guidance for safety applications); definitions of failure mode, failure effect, detection method; steps 5.3.2–5.3.9 and their order; Annex B.2 (scales), B.3 (criticality matrix), B.4.3 (alternative RPN); "criticality combines severity with at least one other attribute".
b) Tavner et al. 2010: scales (S 1–4, O 1/2/3/5 with probability bands, D 1/4/7/10 and their labels), "modified MIL-STD-1629A", exponential scales proposal, three drive-train concepts and which subassembly dominates RPN, and the sentence that the product of occurrence and detection underestimates field failure intensity.
c) Shafiee & Dinmohammadi 2014 Table 7: every O/S/D, RPN and rank for the five subassemblies shown, onshore and offshore; the claim that the same CMS was assumed onshore and offshore; D values 1, 4, 7 in the full table.
d) Recompute in Python: 1–10 scales — 1000 combinations, 120 distinct RPN values, 60/72/120 each from 24 combinations, no value between 900 and 1000, mean 166,4, median 105, 501 combinations > 100; Tavner scales — 64 combinations, 39 distinct values, mean 37,8, median 22,5, max 200.
e) Liu et al. 2013 (75 papers, 1992–2012); Bowles 2003 bibliographic data.
f) AIAG & VDA FMEA Handbook: 1st edition June 2019, second printing = errata only; 7 steps (via Barsalou 2020); AP H/M/L and weighting S > O > D; DFMEA/PFMEA/FMEA-MSR.
g) Carroll et al. 2016: ~350 turbines, 1768 turbine-years; 8,3 = 6,2 + 1,1 + 0,3 + 0,7; subsystem rates (pitch/hydraulics 1,076, generator 0,999, gearbox 0,633, tower/foundation 0,185); ratio 5,8; gearbox major replacement ≈ 231 h and ≈ 230 000 EUR (read from figures — is the hedge adequate?).
h) Walgern et al. 2026 (WES 11: 1553–1568): > 1000 turbines, > 4200 operating years, 3,3 onshore / 4,3 offshore failures per turbine-year; ranking "per MW per year": pitch first, then control and converter — exact wording and unit.
i) Colli 2015 (inverter and grounding system highest RPN), Hacke et al. 2018 (inverters 43–70% of service tickets) — hedges adequate?
j) IEC 60300-3-11:2009: edition 2.0 current; Figure 1; clauses 3.1.9, 3.1.11, 3.1.22 definitions; 7.4; 7.5.2–7.5.4.
k) Rosewater et al. 2020 (SAND2020-9360): STPA, grid-scale; vent-gas sensors may pre-empt smoke detection by 5–30 min "in some cases" — exact wording and author list.
l) Hernandez & Paglioni 2025: H₂ sensor, smoke sensor and chiller failures in the highest risk category.
m) EPRI 2024: cells in 3 of 26 incidents with determined root cause (11%) — compare with how W1 page 01 words it.
n) DNVGL-SE-0439:2016 section 4.1 (CMS not a substitute for safety systems); current edition 2016-06 amended 2021-10 on the DNV page.
o) IEC 61025:2006: ed. 2.0 current; definitions 3.7 (minimal cut set), 3.9 (basic event), 3.12 (undeveloped event); NUREG-0492 Table IV-1 symbols; NASA 2002 handbook sections 2.1 (rare-event justification: most probabilities < 0,1) and 7.5 (importance measures).
p) García Márquez et al. 2016 (BDD, importance measures), Kang et al. 2019 (floating offshore), Yuan et al. 2026 (Processes 14(4): 674; AND of four conditions; the 28% in the notes and what it is).
q) Recompute: G1 0,07831; 0,08 (+2,2%); 0,496 vs 0,6 (+21%); G2 0,005398; P_T 4,23 × 10⁻⁴ and 4,32 × 10⁻⁴; V share 92,6%; the notes' "prawie trzynastokrotnie" for a second independent fan; β table (all cells) and "5,8 razy", "+35%", 5,73 × 10⁻⁴; ETA outcomes 0,07789 / 2,11 × 10⁻⁴ ×2 and the sum.
r) McMicken: DNV GL 2020 (initiated by an internal cell failure; flammable gases accumulated with no means to ventilate; door opened 20:02, explosion 20:04; ~3 h after the onset of thermal runaway); UL 2021 executive summary (disagreement on root cause; agreement that injuries were caused by ignition of battery gases) — exact wording.
s) β-factor: ranges 0,5–5% (logic) and 1–10% (sensors/final elements), 37 questions, via the NTNU slides; Rosewater & Williams 2015 (BMS cell-voltage measurement: missing/inaccurate calibration, fast drift; control may exceed the DC current limit).
t) IEC 62502:2010 ed. 1.0 scope; IEC 61511-3:2016 Annex B (semi-quantitative event tree for SIL determination) and Annex F (LOPA).
u) Bain et al. 2012 (UKOOA ignition model; dependence on release rate, fluid type, scenario).
v) CCPS & Energy Institute 2018 and Johnson et al. 2018: top event definition; "degradation factors (formerly escalation factors)"; barrier criteria effective/independent/auditable; active barrier detect–decide–act; training, competence, MOC, audits, inspection/maintenance programmes are not barriers; 1–5 barriers per threat line, mitigation 1–3 at most 5. IEC 31010 B.4.2.
w) TRAS 120 clauses 2.1(6), 2.1(14), 2.4(7), 2.4(8), 2.6.3(3) as worded on "Bow-tie dla zbiornika biogazu"; Scarponi et al. 2015 (LOC3 instantaneous release from the digester; VCE damage ≈ 100 m at 14 kPa; flash fire ≈ 25 m at ½ LEL; no frequencies); Casson Moreno et al. 2018.
x) W1 consistency: thermal runaway, BESS/BMS/SCADA/CMS expansions, barrier criteria only by reference to W1 part 5.

## CHECKER 3 — pages 05, 06 and index.md

Files (read completely): /mnt/user-data/outputs/lecture/wyklad-02-analiza-ryzyka/05-lopa-i-sil.mdx, 06-podsumowanie.mdx and index.md.

Specific checks:
a) Willey 2014 (one cause–one consequence; the equation); CCPS 2001 and 2015 books (titles, publisher pages); IEC 31010 B.4.4; IEC 61511-3:2016 Annex F (LOPA) and Tables F.3/F.4 titles.
b) HSE RR716 (2009): every attributed finding and section number on "Warstwy ochrony w LOPA: typowe błędy", "Typowe wartości IEF i PFD", "Przykład LOPA: luka i wymagany SIL", "PFDavg funkcji 1oo1 i interwał testów": 3.5.2 (shared PLC), 2.2 / company A and C (criteria without justification), 6.2 / company E (scope of target), 3.4 / company B (double counting), 3.4 and 6.4 (ignition probabilities 0,09 and 0,08 unrealistically low for large petrol releases), splitting the initiating event, 2.5.1 (0,19 "may be reasonable as a minimum value"), 2.6 ("conclusions … sensitive to all input assumptions"; sensitivity analysis rarely done), 2.4 (0,1 for kerosene probably conservative), 6.5.2 (float switch 19,3 × 10⁻⁶ /h), the first-edition IEC 61511 limit 10⁻⁵ /h for a non-compliant BPCS, human-error values taken from Table F.3 without justification. Authors: Chambers, Wilday, Turner.
c) Chambers & Pearson 2011: authors, shared-valve statement, "about once in 11 years".
d) SAFEChE LOPA tutorial: the six generic values and that it cites Crowl & Louvar (2019).
e) Stanley et al. 2018: single-scenario targets 10⁻⁵ and 10⁻⁶ /rok.
f) TRAS 120 clauses 2.1(6), 2.1(14), 2.6.3(3) as worded on 05.
g) Recompute: LOPA A (10⁻³, RRF 200, PFDavg ≤ 5 × 10⁻³), B (10⁻⁴, RRF 20, ≤ 5 × 10⁻²); 1oo1 check 8,76 × 10⁻³ → 8,76 × 10⁻⁶ > 5 × 10⁻⁶; 4,38 × 10⁻³ → 4,38 × 10⁻⁶; the notes' "ok. 1,14 × 10⁻⁶ /h"; ignition modifier 0,1 → RRF 20; 1 − 0,9 × 0,9 = 0,19; 10⁻⁵ × 8760 = 0,0876; 1oo1 table (6 mies./1 rok/2 lata), λDD variant 8,768 × 10⁻³, float switch 0,17 /rok → PFD ≈ 0,085; 1oo2 β table (all cells), ratios 86 and 9, share 91%; check that no required RRF lies on a SIL boundary.
h) SIL table (PFDavg, PFH, RRF columns) against IEC 61508-1:2010 Tables 2/3 via King 2014; IEC 61511-1:2016 Tables 4/5 (official sample); demand-mode definitions (IEC 61508 wording via King 2014) — is "funkcja działa jak ciągła funkcja sterowania" a fair rendering?
i) Standards status: IEC 61508 ed. 3 at CDV stage (2025; VDE draft E DIN EN IEC 61508-1:2025-12); 61508 Association "early 2027"; IEC 61511:2026 SER dated 10.07.2026 = 2016 + AMD1:2017 content.
j) PFDavg formulas (NTNU chapter 8): 1oo1 with MRT/MTTR; 1oo2 with β; definitions of MRT and MTTR (the English expansions); Brissaud & Oliveira 2015 and the statement about DNV authors using different formulas.
k) β: IEC 61508-6 Annex D 37 questions, ranges; IEC 62061 β checklist items (separation, diversity, complexity, environment) via NTNU.
l) ISO 13849-1:2023: edition 4, 26.04.2023, replaces 2015; scope (high demand and continuous mode, regardless of technology); definitions 3.1.4 category, 3.1.5 PL, 3.1.6 PLr; Table 2; informative Annex A; clause 6.1.2 PL/SIL; statement on compatibility with IEC 62061. IFA Report 2/2017e (edition, "risk graph").
m) IEC 62061:2021 + AMD1:2024 + AMD2:2026; "since 2021 also non-electrical technologies".
n) IEC 61400-1:2019 + AMD1:2025 (control and protection functions); DNV-ST-0438 (2016-04, amended 2021-11) scope wording.
o) Regulation (EU) 2023/1230: applies from 20.01.2027 (compare with W1 page 03).
p) 06: Dunn & Sands 2020 (ISA InTech); ISA-18.2-2016 on the ISA page; IEC 62682:2022 clause 9 = rationalization; Derbyshire 2016 (IEC 61511 ed. 2 requires a proof test after repair); DNVGL-SE-0439:2016 mandatory CMS scope: main bearing, gearbox, generator.
q) Quiz: every question, option and explanation against the slides of 01–05 (read those pages too for this purpose): numbers, clause numbers, wording; exactly one correct answer; correctAnswer index right. Also the notes' claim "trzy pytania obliczeniowe".
r) index.md: exact titles of W1 and W3–W10 (compare with /home/claude/repo/bezp-monit/docs/wyklady-bezp/wyklad-01-zagrozenia-ramy-prawne/index.md "Dalej" list); outcomes match content; plan minutes; "Najważniejsze źródła" entries; the W3 line is plain text.
s) Forward references (these exact promises must be present): "Czy i jak IEC 61400-1 powołuje ISO 13849-1 lub IEC 62061 — do sprawdzenia w tekście normy (W7)" (05 slide text); "wrócimy do tego w W7" + the overspeed demand-mode question (05 notes); alarm rationalisation IEC 62682:2022 (rozdz. 9) — W5 and "Z HAZOP i LOPA wynika lista alarmów, którą w W5 będziemy racjonalizować" (06); cause-and-effect matrix — W8 (06); CMS scope DNVGL-SE-0439:2016 — W7 and vibration sensors "o czym w W7" (06); measurement chain — W3 (06); "W9 — bezpieczeństwo procesowe biogazowni" (index).
t) W1 consistency: IPL criteria, BPCS ≤ 10, alarm + operator PFD not lower than 0,1 only recapped with a link to W1 part 5 and worded as in W1.
