# Lecturer feedback and lessons learned

Every lecture chat reads this file before planning and writing. Section 1 overrides the writing spec.

## 1. Lecturer feedback (highest priority)

The lecturer adds general feedback here after reviewing each lecture: style, length, depth, balance of topics, anything that should change in all later lectures. Feedback that concerns only one lecture belongs in that lecture, not here.

Format: `- [after WN, date] feedback`

- (none yet)

## 2. Lessons from the W1 and W2 fact-checks

These errors were found by independent fact-checkers in the first drafts of W1 and W2 (77 accepted fixes in total: 36 for W1, 41 for W2; full lists in `lectures/W01/fixes.md` and `lectures/W02/fixes.md`). Avoid them from the start.

**Safety-critical statements**
1. A PV firefighting sentence generalised a German guideline into "PV can be extinguished with water from 1–5 m". The guideline's distances depend on voltage level and spray versus solid jet, and other guidelines give larger distances. Quote the exact conditions and name the jurisdiction; prefer the Polish (PSP) position for Polish practice.
2. "W PV prąd stały, którego nie da się wyłączyć w dzień" was imprecise. Correct form: the DC voltage of illuminated modules is not removed by the isolator at the inverter.

**Numbers and physical data**
3. Methane explosive limits: use the European Ex values (DGW 4,4% obj., GGW 17% obj., ISO/IEC 80079-20-1; detectors are calibrated to 100% DGW = 4,4% obj.). Older sources (5–15%) only as "starsze źródła".
4. Polish thresholds differ from EU maxima: RfG generator types in Poland (URE decision) are not the EU maximum values. Always look for the national implementation.
5. A statistic must match its source exactly (period, denominator, "do 10.11.2024" versus full year). Quiz questions must use the same numbers as the slides.
6. Illustrative examples must be internally consistent: the LOPA consequence had to be redefined (membrane rupture) so that the protection layers made sense, and a required RRF that landed exactly on a SIL boundary was changed to avoid an ambiguous answer.

**Law and standards status**
7. Trade press reported alarm thresholds (10%/30% DGW) for the draft technical conditions (WT) that are not in the current draft text (which has 25% DGW for ventilation). Always read the draft itself on RCL and give its date.
8. Distinguish in force / adopted but not yet applicable / draft, with dates. The old WT stopped applying on 19.09.2026, with an 18-month transitional regime — details in `verified-facts/`.
9. Standard editions change often (UL 9540A ed. 6 in 2026, IEC 60079-29-0:2025 replacing -29-1/-29-4, ISO 20816-21:2025 replacing ISO 10816-21, IEC 61511 ed. 3 not yet published). Check the publisher's page on the writing date.
10. "Standardy wciąż obowiązują" is wrong wording for voluntary standards: write "są aktualne".

**Attribution and wording**
11. Do not add qualifiers the source does not have (HSE CHIS6 says a long-term average of ≤ 1 alarm per 10 min in normal operation — not "per operator").
12. Phrase limits exactly: operator response to an alarm may be credited with a PFD **not lower than** 0,1 (risk reduction at most 10), and only under stated conditions.
13. Do not turn correlation into causation ("wymóg jest zbieżny z wnioskami z dochodzeń po McMicken", not "wymóg wynika z McMicken").
14. Incident root causes can be disputed between investigators (McMicken: DNV GL versus UL). Say so.
15. Label your own assessments "(ocena własna)".
16. Names: check author spellings (Bellino, not Bellini) and programme names (SAFEChE, not SAChE).
17. Use PN-EN terminology exactly (IEC 61882: "cecha" for characteristic, "właściwość" is a different defined term).
18. Link the official location (the DNV page for DNV-SE-0439, not a third-party mirror).

**Format**
19. Slide times in the notes must sum exactly to the plan in `index.md` (one W1 page summed to 23,5 min against 22 in the plan). The lint checks this now.
20. Process concentrations are not exposure limits: H₂S in the biogas stream (ppm in the gas) is not compared with NDS (air in the workplace). The old exercise mixed them up.

## 3. Lessons from later lectures

Add new lessons here after each fact-check: `- [WN] lesson`.

Merged on 30.09.2026 (W3 chat, preflight) from `lectures/W01/ledger-update.md` §6 and `lectures/W02/ledger-update.md` §6 (the W1 and W2 rewrites of 29.09.2026).

- [W1 v2] Do not put figures from successive annual reports side by side when the publisher restates the previous year (G+ TRIR 2,93 in the 2024 report, 3,48 in the 2025 report = +4%, not +19%); quote the change stated in one report.
- [W1 v2] Mechanism diagrams must show when a hazard first appears, not only the main stage: Li-ion cells vent electrolyte vapour at ≈100–110 °C, before the internal short (Feng 2018). The first venting is the early-warning point for gas detection.
- [W1 v2] Attribute a trend only to the document that states it, in its own terms: WECC (2025) says new BESS favour outdoor containers "reflecting lessons learned from early failures", not "after Moss Landing"; the WECC report is explicitly not a root cause analysis.
- [W1 v2] Keep the modality of the source: IEC 61511-1 3.2.3 Note 2 "typically may implement" ≠ "realizuje"; draft WT § 311 "BMS lub inne środki ochrony" ≠ "BMS".
- [W1 v2] Separate what a report finds from what it recommends and who says what: at McMicken DNV GL states "no means to ventilate" and recommends gas monitoring; the absence of continuous gas monitoring comes from UL FSRI.
- [W1 v2] A review that reports a recommendation is not its author (EU-OSHA 2013 cites a working group and the literature for the lift from 60 m and the second escape route).
- [W1 v2] Label a judgement about sources as "(ocena własna)" ("najbardziej systematyczna publiczna statystyka").
- [W1 v2, process] Three writers in parallel (pages 01–02, 03–04, 05–06 + index; about 16–19 min each) worked when the brief fixed a shared terminology list and the summary-page writer got a second round with the finished pages to align the quiz and the consolidated bibliography.
- [W1 v2, process] Committing a changed file again from the same staged path wrote the earlier content again (29.09.2026, 14:50); use a fresh staging root (`install-2/`, `install-final/`) for every rewrite of the same file and always verify the checksums.
- [W2 v2] Keep the source's caveat attached to its number: RR716 gives a float/displacer device failure rate (PFD ≈ 0,085 at annual test) and in the same paragraph says the whole alarm system must be counted and a PFD below 0,1 cannot be claimed. Quoting the number alone contradicted W1's alarm-credit rule.
- [W2 v2] Check a ranking explanation against every column of the table: "the tower is first because of O = 5" held onshore only; offshore the other subassemblies also had O = 5 and S decided.
- [W2 v2] Modality is lost most often in method descriptions: "can/may" (Cox, Baybutt), "preferably" (IEC 61882 recorder), "normally" (IEC 60812 criticality) were written as plain facts in the first draft.
- [W2 v2] Scope a negative claim to what was read: "Polish law has no numerical risk criteria" became "art. 226 KP and § 39a do not give numerical criteria".
- [W2 v2] Use the source's own category and term: EPRI "Cell/Module" (not "cells"); TRAS "zusätzliche Gasverbrauchseinrichtung" (flare or gas burner, not "flare"); NUREG-0492 "External Event" (house symbol).
- [W2 v2] Research notes can carry figure-reading errors: Carroll's 298 h belongs to the hub, the gearbox is 231 h. Values read from figures stay VERIFIED-SECONDARY and are hedged ("wg wykresów w artykule").
- [W2 v2, process] With parallel writers, list recurring physical components in the shared terminology, not only the method terms: the liquid seal came back as "zamknięcie cieczowe" and "zamknięcie hydrauliczne" from two writers.
- [W2 v2, process] Applying the accepted fixes with a script that asserts each old string occurs exactly the expected number of times (62 replacements in one pass) was faster and more reliable than a fixer agent; keep the fix data next to fixes.md.
- [W2 v2, process] The rewrite chat lost its context twice; STATUS.md in `_lecture-kit/lectures/WNN/` on the computer plus the container files let it resume without redoing research. Write STATUS.md back after every phase.
- [W3] Check which version of a regulatory standard a URL points to: the notes cited NERC PRC-002-3 from a 2018 project page (Draft 1); the version in force is PRC-002-5 (FERC 20.02.2025). Quote the current version and keep the draft only for what is quoted from it (its guideline text).
- [W3] "Researcher could not confirm X" is not "X is false": the notes warned that the Macii & Rinaldi accuracy classes might not be IEC 61850-5; the writer turned this into "to nie są oznaczenia IEC 61850-5", while the paper's table caption says they are. A doubt stays a hedge, never a negative claim.
- [W3] Standards series get restructured: IEC 61400-12-1:2022 and 12-2:2022 were published together with the new IEC 61400-50-1:2022 (anemometer classification and calibration moved there). The "cancels and replaces" sentence is shared boilerplate; read the scope of each part before saying where a topic lives.
- [W3] Quote the official Polish wording when it exists (GUM Vademecum for VIM 2.39 and its Note 2: "adiustacja", "samowzorcowanie", "weryfikacja wzorcowania"); an own translation of a defined term drifts ("samokalibracja", "sprawdzenie wzorcowania"). In PN usage an Amendment is a "zmiana", not a "poprawka".
- [W3] A document that quotes a lesson is not its author: Buncefield "Why did it happen?" para 99 adopts the Baker report's lesson after Texas City.
- [W3] Keep the conclusion consistent with the slide's own numbers: "zbyt wolna" for extractive gas analysis contradicted the computed 15 s–2,8 min against a 26-min margin; the real argument is indirectness and dependence on the sampling line.
- [W3] Say where a number comes from even when it is a known constant: methane 9,97 kWh/m³ has an agency source (FNR Basisdaten Bioenergie 2024, p. 51).
- [W3] A diagnostic-coverage figure is not a field statistic: SINTEF λDU comes from operating data, DC partly from expert judgement and certificates.
- [W3] One Polish term per concept across pages: t₉₀/t_x appeared as "czas odpowiedzi na skok", "czas odpowiedzi T90" and "czas ustalania wskazania"; the shared terminology list must fix such terms before writing (also PLC: use the W1/W2 expansion "programowalny sterownik logiczny").
- [W3, process] A worked uncertainty budget from a published report failed recomputation (Reda's printed RSS 4,1% vs 4,04% from the rounded rows; semiconductor 8,0% vs 7,57%). Use an illustrative, fully recomputable budget for the worked example and show published values only as published.
- [W3, process] Fixed illustrative numbers in plan.md (loop, ADC, budget, fill time) kept three parallel writers consistent across pages (U = 1,4% used on 03, 05 and in the quiz).
