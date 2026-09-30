# Ledger update proposed by the W1 rewrite (29.09.2026)

This chat did not edit the shared files (`course-ledger.md`, `sources-used.md`, `05-feedback-and-lessons.md`, `verified-facts/pl-law-2026-09.md`, `docs/intro.md`), at the lecturer's request, because other chats work in the repository at the same time. Below are the changes to copy into them. Page paths are relative to `bezp-monit/docs/wyklady-bezp/`.

## 1. Status (`course-ledger.md` §1)

Replace the W1 row:

| Lecture | Folder | Status | Date | Slides | Notes |
|---|---|---|---|---|---|
| W1 | `wyklad-01-zagrozenia-ramy-prawne` | rewritten from scratch, fact-checked, built | 29.09.2026 | 40 | v2: 3 writers in parallel; 3 independent fact-checkers; 58 fixes applied (3 major); first version archived in `bezp-monit/archiwum/2026-09-v1/`, its records in `_lecture-kit/lectures/W01/v1/` |

Structure: 01 (26 min, 12 slides), 02 (9 min, 4), 03 (22 min, 10), 04 (9 min, 4), 05 (19 min, 8), 06 (5 min, 2 + quiz of 10) = 90 min; 3 mermaid diagrams (thermal-runaway stages on 01, legal map on 03, onion model on 05). File names unchanged. W1 is now in the W2 form (quiz after `</SlideContainer>`, bibliography entries, numbered "Najważniejsze źródła", bold "Przykład ilustracyjny — dane umowne", percent without a space).

Slide titles (= anchors) changed against v1 (no page in the repository links to a W1 anchor; checked 29.09.2026 on the computer):
- dropped: "Projekt nowych WT: wymagania dla PV i BESS" (03; its content is in "Warunki techniczne i ochrona ppoż. w IX 2026"), "Bezpieczeństwo funkcjonalne i ryzyko" and "Alarmy i cyberbezpieczeństwo OT" (04; merged into "Normy wspólne dla wszystkich technologii"), the slide "Sprawdź się" (06; the heading `## Sprawdź się` keeps the anchor `#sprawdź-się`);
- new: "Ćwiczenie: monitoring czy warstwa ochrony" (05), "Normy wspólne dla wszystkich technologii" (04), "Co dalej: od opisu zagrożeń do analizy ryzyka" (06).

## 2. Terms (`course-ledger.md` §3)

The existing W1 rows stay valid (same Polish terms, same pages). Update these source entries:

| Term (PL) | Change |
|---|---|
| dolna/górna granica wybuchowości (DGW/GGW) | source now **IFA GESTIS (dane CHEMSAFE) and GisChem**, not "ISO/IEC 80079-20-1 via GisChem" (GESTIS read 29.09.2026, `verified-facts/pl-law-2026-09-W01.md`) |
| warstwy ochrony (model cebuli), model sera szwajcarskiego | source: **SAFEChE LOPA tutorial** for the layer order (CCPS 2015 also describes the onion model); Reason 1990/2000 |
| alarm (wymaga reakcji operatora w określonym czasie) | source: ISA-18.2 as quoted in ISA InTech 2020 (edition not named there; ISA-18.2-2016 is the current edition per ISA) |
| BPCS, SIS, SIF | BPCS definition read in the official IEC 61511-1:2016 sample (3.2.3; Note 2: BPCS "typically may implement" control, monitoring and alarms) |

Add these rows (defined in W1 v2):

| Term (PL) | English / acronym | Page | Source used |
|---|---|---|---|
| BESS, BMS, EMS, SCADA, CMS, OT (expansions used in the course) | Battery Energy Storage System — bateryjny magazyn energii; Battery Management System — system zarządzania baterią; Energy Management System — system zarządzania energią; Supervisory Control and Data Acquisition — system nadzoru i akwizycji danych; Condition Monitoring System — system monitorowania stanu; Operational Technology — technika operacyjna | W1 `01`, `04`, `05` | — |
| zakład o zwiększonym / dużym ryzyku (ZZR / ZDR) | Seveso lower / upper tier | W1 `03` | Dz.U. 2016 poz. 138; POŚ art. 248 |
| podmiot kluczowy, podmiot ważny; SZBI | essential / important entity; ISMS | W1 `03` | Dz.U. 2026 poz. 252 (art. 5) |
| wskaźnikowe dopuszczalne wartości narażenia zawodowego (IOELV) | IOELV | W1 `03` | 2009/161/UE |
| bezpieczeństwo funkcjonalne | functional safety (IEC 61508 concept; clause text not read) | W1 `04` | textbook, IEC 61508 series |
| TRIR | Total Recordable Injury Rate — wskaźnik wszystkich rejestrowanych urazów | W1 `01` | G+ / Energy Institute |
| RRF (named with the illustrative example) | Risk Reduction Factor — współczynnik zmniejszenia ryzyka | W1 `05` (defined in full in W2 `05`) | — |
| rejestracja sekwencji zdarzeń (SOE) | Sequence of Events | W1 `05` | DNV GL 2020 (McMicken) |
| obejście (ang. bypass) | bypass | W1 `05` | IEC 61511-1:2016 3.2.4 (sample) |

## 3. Key numbers (`course-ledger.md` §4)

Corrections to existing rows:
- **EPRI −97% (2018–2023)**: EPRI compares failures with deployed capacity (Fig. 1: cumulative GW deployed against incidents); the text does not say "per deployed GWh". Replace "BESS failure rate per deployed GWh −97%" with "failure rate of grid-scale BESS −97% (2018–2023), compared with deployed capacity". (W2 pages do not quote the −97% figure; checked 29.09.2026.)
- **Methane DGW/GGW**: source IFA GESTIS (CHEMSAFE) and GisChem (see §2).
- **G+ offshore wind**: report for 2025 (11.06.2026): 69,2 mln h (+5% on 2024), TRIR 3,48 (+4% on 2024), no fatalities, lost-work-day injuries 95 → 93. Report for 2024 (12.06.2025): 79 mln h, TRIR 2,93, 1 fatality, 99 lost-work-day injuries, manual handling 121. Reports restate the previous year: never put 2,93 and 3,48 side by side as a trend.
- **Thermal runaway stages (Feng 2018)**: add the first venting at ≈100–110 °C (electrolyte solvent vapour, before the large internal short), second at ≈250 °C, third after the redox reactions start.

New numbers W1 v2 uses (reuse, do not re-research):

| Value | Meaning | Where | Source |
|---|---|---|---|
| ≈1,3 mln PV systems; 350 fires with PV involved, 120 caused by PV, 75 with large damage (≈0,006%) | Germany, ≈20 years to 2013 | W1 `01` | Fraunhofer ISE 2013 (expert workshop) |
| 80 fires, 58 caused by PV; DC isolators most often; root cause unknown in 28 of 58 | UK, VII 2015 – II 2018 | W1 `01` | BRE NSC 2018 |
| 411 events, 128 caused by PV; montaż 28,9%, wyrób 21,1%, zewnętrzne 14,1%, projekt 1,6%, nieznane 34,3% | Poland, PSP reports 2018–2021 | W1 `01` | Bednarczyk 2022 |
| 145 (2020) → 808 (2024) events with PV present (presence, not cause); 312 building fires with PV in 2025 (other unit) | Poland | W1 `01` | PSP via Globenergia; KG PSP via Gramwzielone (both hedged) |
| Moss Landing 16.01.2025: 300 MW / 1200 MWh; ≈56 000 of ≈100 000 modules burned; 18.09.2026 ≈1300 damaged modules burned, shelter-in-place; root cause unpublished (CPUC 14.07.2026) | BESS incident | W1 `01` | WECC 2025; US EPA (updated 25.09.2026); CPUC |
| Czajków 7.05.2026: ≈2 MW(h) trailer, ≈107 500 cells, up to 24 fire units, 65 evacuated, cause unpublished | BESS incident, Poland | W1 `01` | KW PSP Poznań; KP PSP Ostrzeszów |
| Seveso (PL): P2 10 / 50 t; poz. 18 50 / 200 t (upgraded biogas may be classified here, note 19); hydrogen 5 / 50 t | ZZR / ZDR thresholds | W1 `03` | Dz.U. 2016 poz. 138 |
| raw biogas 60% CH₄ / 40% CO₂ ≈ 1,22 kg/m³ → 10 t ≈ 8200 m³ (illustrative) | order of magnitude only | W1 `03` | calc.py |
| KSC: fines under art. 73 ust. 1–4, 73a–73c, 76b from 3.04.2028 (art. 35) | NIS2 in Poland | W1 `03` | Dz.U. 2026 poz. 252 |
| RfG: PL types B ≥ 0,2 MW, C ≥ 10 MW (below EU maxima 1 / 50 MW), D ≥ 75 MW (= EU maximum) or ≥ 110 kV; PSE requirements approved 15.05.2025 (types B–D from 1.12.2025, A from 1.01.2027); RfG revision = draft (feedback 8.07–25.08.2026, adoption planned Q4 2026) | grid connection | W1 `03` | PSE; European Commission (initiative 14165) |

## 4. Forward references (`course-ledger.md` §5)

All eight promises W1 made are kept. Update the "Made in" column where the slide changed:

| For | Promise (quoted briefly) | Made in (W1 v2) |
|---|---|---|
| W3 | "od W3 do W5 … jak zbudować monitoring, któremu można ufać: W3 — architektura i tor pomiarowy, W4 — komunikacja, W5 — jakość danych i alarmy" | W1 `05` "Jak monitoring wspiera bezpieczeństwo" (notes); also W1 `06` "Co dalej: od opisu zagrożeń do analizy ryzyka" |
| W4 | "IEC 62351 zabezpiecza protokoły komunikacyjne energetyki, które poznacie w W4" | W1 `04` "Normy wspólne dla wszystkich technologii" (notes) — was "Alarmy i cyberbezpieczeństwo OT" |
| W5 | "Alarmy omówimy w W5" | W1 `04` "Normy wspólne dla wszystkich technologii" (notes) — was "Alarmy i cyberbezpieczeństwo OT" |
| W6, W8 | IEC 60364-7-712:2025 covers storage coupled to PV and island operation — "łączy tematy W6 i W8" | W1 `04` "Normy dla fotowoltaiki i energetyki wiatrowej" (notes) |
| W6–W9 | "Szczegóły każdej technologii omówimy w W6, W7, W8 i W9" | W1 `05` "Monitoring i ochrona w technologiach OZE" (notes) |
| W7 | independent turbine safety system, e.g. overspeed (DNV-ST-0438; W7) | W1 `05` "Monitoring i ochrona w technologiach OZE" (table) |
| W10 | "zagrożenia cyber dotyczą wszystkich technologii (szerzej w W10)" | W1 `01` "Mapa zagrożeń: ludzie, otoczenie, cyber" |
| W10 | "cyberbezpieczeństwo OT w W10" | W1 `04` "Normy wspólne dla wszystkich technologii" (notes: "serię IEC 62443 i całe cyberbezpieczeństwo OT w W10") — was "Alarmy i cyberbezpieczeństwo OT" |

New pointers made by W1 v2 (one sentence each; later lectures should cover them, most are already in their "Must cover"):

| For | Promise | Made in |
|---|---|---|
| W6 | "Wykrywanie łuku, odłączanie i działania ratownicze omówimy w W6" (PV firefighting distances deliberately not given in W1) | W1 `01` "PV: napięcie DC i łuk elektryczny" |
| W7 | ice throw / ice fall: site-specific risk assessment (IEA Wind Task 19) — "odległości omówimy w W7" (the old 1,5 × (D + H) formula was dropped) | W1 `01` "Wiatr: główne zagrożenia" |
| W6, W8 | draft WT (6.08.2026) requirements for PV (emergency switch, DC insulation monitoring, arc detection and interruption) and BESS (BMS, emergency switch, gas detection, ventilation) — "szczegóły w W6 i W8" | W1 `03` "Warunki techniczne i ochrona ppoż. w IX 2026" |
| W2 (exists) | numerical risk criteria, LOPA arithmetic, SIL selection — links to W2 `index.md` | W1 `02`, `04`, `05`, `06` |

## 5. Open items (`course-ledger.md` §6)

To verify before teaching W1 (time-sensitive, with dates):
- KSC: self-registration in the "wykaz" until **3.10.2026** (gov.pl) — four days after writing; after that date the slide describes a past deadline.
- New WT: unpublished on 29.09.2026 (ELI search); RCL project 12412604 last completed stage "Notyfikacja" (last change 2.09.2026). Check ISAP/RCL on the lecture date; the transitional regime runs 18 months from 20.09.2026.
- IEC 62109-1 ed. 2: FDIS vote until **16.10.2026**.
- Batteries Regulation art. 13 label: 18.08.2026 or 18 months after the implementing act, whichever is later — whether the implementing act has been adopted was not checked.
- RfG revision: adoption planned Q4 2026.
- ISO 12100 ed. 2 (ISO/DIS 12100.3 vote closed 15.09.2026) and ISO 31000 ed. 3 (CD) may be published during the semester.
- Moss Landing (CPUC investigation, EPA updates) and Vineyard Wind (no BSEE findings published as of IX 2026).
- CNBOP-PIB / PSME BESS fire-safety guideline announced for the end of 2026 (Gramwzielone, hedged).

Sources not opened first-hand or only partly (hedged on the slides):
- KG PSP "Standardowe zasady postępowania podczas zdarzeń w obrębie instalacji fotowoltaicznych" (2022): only title, date and the KP PSP Wołomin publication were checked; the PDF content was not read.
- IEC 61511-1:2016 clause 9.3 (BPCS ≤ 10, at most one BPCS layer when the BPCS is the initiating cause) — through Derbyshire 2016; the Figure 9 grouping — through the Purdue P2SAC slides (the fact-checker could not find the "sterowanie i monitoring" label in the text layer; check the slide image).
- DNV-SE-0439 statement on CMS read in the 2016 edition (third-party copy); the current edition needs a Veracity login.
- R2P2 text read in a GOV.UK copy (inquiry exhibit); HSE's own PDF link returns 404.
- Casson Moreno et al. 2016: the period 1995–2014 only from a summary (full text rate-limited).
- Polish PN-EN editions (ISO 12100, IEC 63027) not checked: the PKN catalogue could not be opened.
- The functional-safety definition on W1 `04` is the textbook IEC 61508 concept; the text of IEC 61508-4 3.1.12 was not read.

Conflicts with other lectures (not fixed; reported):
- W2 `02-hazid-i-hazop.mdx` writes "4,4 % obj." and "17 % obj." with a space (spec: percent without a space) and cites GisChem only; W1 now cites GESTIS (CHEMSAFE) and GisChem with the same values.
- Only course-ledger §4 carries the EPRI "per deployed GWh" wording; W2 pages do not quote the −97% figure.

Site issue found during the render check (not part of the lecture):
- In the sidebar, the category label of the lecture you are in is invisible: the active category link has white text on a transparent background (`menu__link--sublist menu__link--active`, e.g. W2 on W2 pages, W1 on W1 pages). Probably a rule in `src/css/custom.css` for `.menu__link--active` meant for a green background.

Records:
- `sources-used.md` must be regenerated after the install (the W1 bibliography changed): `python3 _lecture-kit/tools/collect_sources.py bezp-monit/docs/wyklady-bezp > _lecture-kit/sources-used.md` in the next chat that owns the shared files.
- The v1 claims ledger, fix list, writer brief and calc script are in `_lecture-kit/lectures/W01/v1/`; the v2 records replace them in `_lecture-kit/lectures/W01/`.
- `README.md`, `00-syllabus.md` (W1 summary) and `course-ledger.md` still say "41 slides / 36 fixes" for W1.

## 6. Lessons (`05-feedback-and-lessons.md` §3)

Proposed lines:
- [W1 v2] Do not put figures from successive annual reports side by side when the publisher restates the previous year (G+ TRIR 2,93 in the 2024 report, 3,48 in the 2025 report = +4%, not +19%); quote the change stated in one report.
- [W1 v2] Mechanism diagrams must show when a hazard first appears, not only the main stage: Li-ion cells vent electrolyte vapour at ≈100–110 °C, before the internal short (Feng 2018). The first venting is the early-warning point for gas detection.
- [W1 v2] Attribute a trend only to the document that states it, in its own terms: WECC (2025) says new BESS favour outdoor containers "reflecting lessons learned from early failures", not "after Moss Landing"; the WECC report is explicitly not a root cause analysis.
- [W1 v2] Keep the modality of the source: IEC 61511-1 3.2.3 Note 2 "typically may implement" ≠ "realizuje"; draft WT § 311 "BMS lub inne środki ochrony" ≠ "BMS".
- [W1 v2] Separate what a report finds from what it recommends and who says what: at McMicken DNV GL states "no means to ventilate" and recommends gas monitoring; the absence of continuous gas monitoring comes from UL FSRI.
- [W1 v2] A review that reports a recommendation is not its author (EU-OSHA 2013 cites a working group and the literature for the lift from 60 m and the second escape route).
- [W1 v2] Label a judgement about sources as "(ocena własna)" ("najbardziej systematyczna publiczna statystyka").
- [W1 v2, process] Three writers in parallel (pages 01–02, 03–04, 05–06 + index; about 16–19 min each) worked when the brief fixed a shared terminology list and the summary-page writer got a second round with the finished pages to align the quiz and the consolidated bibliography.
- [W1 v2, process] Committing a changed file again from the same staged path wrote the earlier content again (29.09.2026, 14:50); use a fresh staging root (`install-2/`, `install-final/`) for every rewrite of the same file and always verify the checksums.
