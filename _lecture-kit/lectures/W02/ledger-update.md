# Ledger update proposed by the W2 rewrite (29.09.2026)

This chat did not edit the shared files (`course-ledger.md`, `sources-used.md`, `05-feedback-and-lessons.md`, `verified-facts/pl-law-2026-09.md`, `docs/intro.md`) or other lectures, at the lecturer's request, because other chats work in the repository at the same time. Below are the changes to copy into them. Page paths are relative to `bezp-monit/docs/wyklady-bezp/`. New verified Polish legal facts are in the new file `verified-facts/pl-law-2026-09-W02.md`; research notes in `research/W02/`.

## 1. Status (`course-ledger.md` §1)

Replace the W2 row:

| Lecture | Folder | Status | Date | Slides | Notes |
|---|---|---|---|---|---|
| W2 | `wyklad-02-analiza-ryzyka` | rewritten from scratch, fact-checked, built | 29.09.2026 | 40 | v2: 6 gap-research notes + browser checks; 3 writers in parallel; 3 independent fact-checkers; 62 fixes applied (2 major); first version archived in `bezp-monit/archiwum/2026-09-v1/wyklad-02-analiza-ryzyka/`, its records in `_lecture-kit/lectures/W02/v1/` |

Structure: 01 (15 min, 7 slides), 02 (20 min, 8), 03 (15 min, 7), 04 (16 min, 7), 05 (19 min, 9), 06 (5 min, 2 + quiz of 10 + consolidated bibliography of 45 entries in 7 groups) = 90 min; 4 mermaid diagrams (ISO 31000 process with method families on 01, HAZOP examination loop on 02, BESS gas fault tree and biogas bow-tie on 04). File names and page titles unchanged. W2 is in the spec form (quiz after `</SlideContainer>`, bibliography entries, numbered "Najważniejsze źródła", bold "Przykład ilustracyjny — dane umowne.", percent without a space).

Slide titles (= anchors) changed against v1 (no page in the repository links to a W2 anchor; checked on the computer 29.09.2026, 19:36 and 20:30):
- 01: "Powtórka z W1 i pytania na dziś" → "Od opisu zagrożeń do analizy ryzyka"; new slide "Ocena ryzyka w polskim prawie";
- 02: "HAZID: identyfikacja zagrożeń w fazie koncepcji" and "Lista kontrolna HAZID dla OZE" merged into "HAZID i SWIFT na etapie koncepcji";
- 05: "Kiedy warstwa jest niezależną warstwą ochrony" → "Warstwy ochrony w LOPA: typowe błędy" (the IPL criteria are now only recapped with a link to W1 part 5).
Titles the ledger cites are kept: "Od wyników HAZOP do wymagań" (02), "Maszyny i turbiny wiatrowe: PL i SIL" (05), "Od analizy do projektu monitoringu i zabezpieczeń" (06).

Records: `_lecture-kit/lectures/W02/` — `STATUS.md`, `plan.md`, `writer-brief.md`, `claims.md` (merged A/B/C + post-fact-check section), `calc.py` (merged, 227 checks), `fixes.md`, `factcheck-prompts.md`, `factcheck-1.md` … `factcheck-3.md`, `fixtool/` (apply script and fix data), this file. v1 records (claims, calc, fixes, writer brief) in `lectures/W02/v1/`.

## 2. Terms (`course-ledger.md` §3)

W2 no longer redefines W1 terms: hazard chain, risk, tolerable/residual risk, ALARP, IPL criteria, BPCS credit, alarm, SIS/SIF and SIL (named) are used with links to W1 parts 1–5. The existing W2 rows stay valid (same Polish terms, same pages). Update these source entries:

| Term (PL) | Change |
|---|---|
| ALARP, rażąca dysproporcja, trzy obszary tolerowalności | defined only in W1 `02`; W2 `01` links to it (remove "W2 `01`" from the Page column) |
| niezależna warstwa ochrony (IPL): skuteczna, niezależna, audytowalna | defined only in W1 `05`; W2 `05` recaps in one line with a link (remove "W2 `05`") |
| BPCS, SIS, SIF | W2 `05` recaps; page of definition W1 `05` |
| HAZOP terms | add **właściwość** (ang. property, IEC 61882:2016 3.1.5; replaced "element" in 2016; own translation) and **część (węzeł)**; Polish standard: PN-EN 61882:2016-07 is an English-language version with the Polish title „Badania zagrożeń i zdolności do działania (badania HAZOP) — Przewodnik zastosowań”; PN-IEC 61882:2005 (Polish text) withdrawn (verified-facts W02) |
| matryca ryzyka i jej ograniczenia | IEC 31010:2019 B.10.3, listed under recording and reporting techniques (B.10); Cox 2008; Baybutt 2015, 2016, 2018 |
| FMEA terms | S — **ciężkość**, O — **występowanie**, D — **wykrywalność** (IEC 60812 3.2 "SOD severity, occurrence, detectability"); RPN = **liczba priorytetu ryzyka**; AP = **priorytet działania** (AIAG & VDA 2019, via Barsalou 2020) |
| uszkodzenia spowodowane wspólną przyczyną, model β | source: IEC 61508-6 Annex D via Rausand & Lundteigen (NTNU slides, ch. 8 and 10) |
| LOPA; IEF; PFD; RRF | generic values: SAFEChE LOPA tutorial citing **Crowl & Louvar (2019)**, not CCPS directly |
| SIL terms | demand modes (tryb niskiego zapotrzebowania / wysokiego zapotrzebowania / ciągły) in IEC 61508 wording via King 2014 |
| PL, PLr | add **kategoria** (ISO 13849-1:2023 3.1.4) and SRP/CS; definitions 3.1.4–3.1.6 in own translation (Polish PN terms not checked) |

Add these rows (defined in W2 v2):

| Term (PL) | English / acronym | Page | Source used |
|---|---|---|---|
| ocena ryzyka = identyfikacja + analiza + ewaluacja ryzyka; kryteria ryzyka; postępowanie z ryzykiem | ISO 31000 process terms | W2 `01` | ISO 31000:2018 cl. 6 (ANSI preview) |
| ryzyko zawodowe (definicja przepisu) | occupational risk | W2 `01` | rozp. MPiPS z 26.09.1997 § 2 pkt 7 (verified-facts W02) |
| rejestr zagrożeń | hazard register | W2 `02` | practice (own judgement) |
| rodzaj uszkodzenia ukrytego; zadanie wykrywania uszkodzeń; przedział P-F; RCM — obsługa ukierunkowana na niezawodność | hidden failure mode; failure-finding task; P-F interval; Reliability Centred Maintenance | W2 `03` | IEC 60300-3-11:2009 3.1.11, 3.1.9, 3.1.22 (Polish RCM term not checked against PN) |
| FMEA-MSR | Supplemental FMEA for Monitoring and System Response | W2 `03` | AIAG page |
| STPA | System-Theoretic Process Analysis — analiza procesu oparta na teorii systemów | W2 `03` | Rosewater et al. 2020 (Sandia) |
| zdarzenie pośrednie; przybliżenie rzadkich zdarzeń; miary ważności | intermediate event; rare-event approximation; importance measures | W2 `04` | NASA FTH 2002 §2.1, §7.5 |
| analiza muszki (bow-tie); czynniki degradacji (dawniej: eskalacji); środki kontroli czynników degradacji; bariera aktywna: wykryj–zdecyduj–działaj | bow-tie terms | W2 `04` | CCPS & EI 2018 via Johnson et al. 2018 |
| zamknięcie cieczowe | liquid seal (of gas-holder pressure protection) | W2 `02`, `04`, `05` | TRAS 120 2.4(7) ("hydraulisch-mechanisch"); term chosen for the course |
| dodatkowe urządzenie zużywające gaz (np. pochodnia) | zusätzliche Gasverbrauchseinrichtung (flare or gas burner) | W2 `02`, `04` | TRAS 120 1.4(28), 2.1(14) |
| modyfikator warunkowy; f_tol (docelowa częstość scenariusza) | conditional modifier; target frequency | W2 `05` | HSE RR716; Stanley et al. 2018 |
| MRT, MTTR | Mean Repair Time — średni czas naprawy; Mean Time To Restoration — średni czas przywrócenia | W2 `05` | Lundteigen & Rausand (NTNU) |
| ograniczenia architektury, zdolność systematyczna | architectural constraints, systematic capability | W2 `05` | IEC 61508 (named only) |

## 3. Key numbers (`course-ledger.md` §4)

Corrections to existing rows:
- **R2P2**: now read first-hand (GOV.UK copy of HSE R2P2, inquiry exhibit IQ8.10.J; HSE's own PDF link 404): pkt 130 — 10⁻⁶ /rok for workers and the public as a **guideline** for the broadly acceptable/tolerable boundary; pkt 132 — 10⁻³ /rok workers, 10⁻⁴ /rok public as the upper limit taken from HSE's nuclear tolerability document; pkt 133 — "these limits rarely bite"; pkt 136 — ≥ 50 deaths in one event intolerable if more frequent than 1 in 5000 per year (2 × 10⁻⁴ /rok). Replace "HSE R2P2 via Foster (secondary)". The open item "R2P2 numerical criteria were sourced through secondary papers" (§6) can be closed.
- **Typical IEF/PFD**: source "SAFEChE LOPA tutorial (values from Crowl & Louvar 2019)", generic, secondary; not "CCPS via SAFEChE".
- **EPRI 2024**: the root-cause category is **"Cell/Module"** (3 of 26 classified, 11%). W1 `01` says "tylko 3 (11%) przypisano bezpośrednio ogniwom" — see §5 conflicts.
- **Carroll 2016**: gearbox major replacement ≈ 231 h and ≈ 230 000 EUR (materials; read from figures, VERIFIED-SECONDARY); 298 h in the old notes is the hub. 8,3 = 6,2 + 1,1 + 0,3 + 0,7 (no cost data); pitch/hydraulics 1,076, generator 0,999, gearbox 0,633, tower/foundation 0,185 failures/turbine/yr.

New numbers W2 v2 uses (reuse, do not re-research):

| Value | Meaning | Where | Source |
|---|---|---|---|
| 10⁻⁶ /rok plaatsgebonden risico = grenswaarde for (zeer) kwetsbare gebouwen and kwetsbare locaties | Netherlands, Bkl art. 5.7 | W2 `01` | RIVM, IPLO |
| LOPA single-scenario targets: worker limit cut by an order of magnitude to 10⁻⁴ /rok (cited practice); 10⁻⁵ /rok = middle of the ALARP region; 10⁻⁶ /rok for firms aiming at the broadly acceptable line | risk targets | W2 `01`, `05` | Stanley et al. 2018 §5.4 |
| alarm + operator as OR of hardware 0,1 and operator 0,1 → 0,19, "may be reasonable as a minimum value" | IPL credit | W2 `05` | HSE RR716 §2.5.1 |
| float/displacer level device 19,3 × 10⁻⁶ /h (0,17 /rok) → PFD ≈ 0,085 at annual test, but "too low" for the whole system and "a PFD of less than 0.1 cannot be claimed" | real device data | W2 `05` | HSE RR716 §6.5.2 (read by the coordinator) |
| BPCS as initiating event, non-compliant with IEC 61511 ed. 1: dangerous failure rate not below 10⁻⁵ /h ≈ 0,0876 /rok ≈ 0,1 /rok; "about one failure in eleven years" | BPCS IEF | W2 `05` | RR716 footnote; Chambers & Pearson 2011 |
| ignition probabilities 0,09 and 0,08 for large petrol releases "unrealistically low"; 0,1 for kerosene probably conservative | LOPA inputs | W2 `05` | RR716 §3.4, §6.4, §2.4 |
| β ranges: 0,5–5% logic, 1–10% sensors and final elements; 37-question checklist | CCF | W2 `04`, `05` | IEC 61508-6 Annex D via NTNU |
| 1–10 RPN scales: 1000 combinations, 120 distinct values; 60/72/120 each from 24; none between 900 and 1000; mean 166,4, median 105; 501 > 100. Tavner scales (S 1–4, O 1/2/3/5, D 1/4/7/10): 64 combinations, 39 values, max 200 | RPN properties | W2 `03` | calc.py |
| Walgern et al. 2026: > 1000 turbines, > 4200 operating years; 3,3 onshore / 4,3 offshore failures per turbine-year; per MW: rotor system incl. pitch first, then control | wind reliability | W2 `03` | WES 11: 1553–1568 |
| Hacke et al. 2018: inverters 43–70% of PV service requests (review) | PV O&M | W2 `03` | RSER 82 |
| Sandia (Rosewater et al. 2020): off-gas sensors may pre-empt smoke detection by 5–30 min "in some cases" | BESS detection | W2 `03` | SAND2020-9360 |
| McMicken (DNV GL 2020): door opened 20:02, explosion 20:04, ≈ 3 h after the onset of thermal runaway | BESS incident | W2 `04` | DNV GL 2020; UL 2021 |
| SVLFG TI 4: air dosing for biological desulphurisation ≤ 6% of the biogas flow; raw biogas H₂S 0,01–0,4% obj. = 100–4000 ppm (process concentration, not NDS) | biogas | W2 `02` | SVLFG TI 4 (XI 2015) |
| O₂ from 6% air dosing ≈ 1,2% obj. (0,06 × 0,2095 / 1,06) | illustrative | W2 `02` | calc.py |
| H₂S: loss of smell at 100–150 ppm | toxicology | W2 `02` | OSHA |
| Scarponi et al. 2015: instantaneous release from the digester (LOC3): VCE damage ≈ 100 m (14 kPa), flash fire ≈ 25 m (½ LEL); no frequencies | biogas consequences | W2 `04` | CET 43 |
| IEC 61508 ed. 3: CDVs 2025 (E DIN EN IEC 61508-1:2025-12), expected "early 2027" (61508 Association); IEC 61511:2026 SER (10.07.2026) = 2016 + AMD1:2017; IEC 62061:2021 + AMD1:2024 + AMD2:2026; IEC 61400-1:2019 + AMD1:2025; ISO 13849-1:2023 ed. 4 (26.04.2023) | standards status | W2 `05` | IEC webstore, VDE, 61508.org, ISO |
| ISO 31000:2018 current, "to be revised"; ISO/CD 31000 (ed. 3) comments closed 1.03.2026; IEC 31010:2019, IEC 61882:2016, IEC 60812:2018, IEC 61025:2006, IEC 62502:2010, IEC 60300-3-11:2009, ISO 17776:2016 (confirmed 2022) current; AIAG & VDA FMEA 2019 1st ed. (2nd printing errata only); DNV-ST-0438 2016-04 am. 2021-11; DNV-SE-0439 2016-06 am. 2021-10; TRAS 120 12/2018 with correction of 27.02.2019 | standards status | W2 `01`–`05` | publishers' pages (29.09.2026) |
| Kodeks pracy t.j. Dz.U. 2026 poz. 1245 (art. 207 § 1, art. 226); rozp. ogólne BHP t.j. Dz.U. 2003 nr 169 poz. 1650 ze zm. (§ 2 pkt 7, § 39a); PN-N-18002:2011 current in the PKN shop | Polish law | W2 `01` | verified-facts W02 |

## 4. Forward references (`course-ledger.md` §5)

All nine promises W2 made are kept, with the same wording. Update the "Made in" column:

| For | Promise (quoted briefly) | Made in (W2 v2) |
|---|---|---|
| W3 | "jakie wielkości mierzyć (napełnienie, O₂, H₂S, CH₄), gdzie i z jaką dokładnością — tor pomiarowy w W3" | W2 `02` "Od wyników HAZOP do wymagań" (slide text; the measurement table names quantity, place and purpose, deliberately no accuracy values) |
| W3 | "co mierzyć, gdzie i z jaką dokładnością, żeby alarmy i funkcje działały zgodnie z założeniami analiz — W3" | W2 `06` "Od analizy do projektu monitoringu i zabezpieczeń" |
| W5 | "racjonalizację alarmów opisuje IEC 62682:2022 (rozdz. 9) — W5" | W2 `02` "Od wyników HAZOP do wymagań"; W2 `06` "Od analizy do projektu…" |
| W5 | "Z HAZOP i LOPA wynika lista alarmów, którą w W5 będziemy racjonalizować" | W2 `06` "Od analizy do projektu…" (notes) |
| W7 | "Czy i jak IEC 61400-1 powołuje ISO 13849-1 lub IEC 62061 — do sprawdzenia w tekście normy (W7)" | W2 `05` "Maszyny i turbiny wiatrowe: PL i SIL" |
| W7 | "wrócimy do tego w W7" + question: demand mode of the turbine overspeed stop function ("to trzeba wykazać, a nie założyć") | W2 `05` "Maszyny i turbiny wiatrowe: PL i SIL" (notes) |
| W7 | main bearing, gearbox, generator as mandatory CMS scope (DNVGL-SE-0439:2016) — W7; vibration sensors "o czym w W7" | W2 `06` "Od analizy do projektu…" (slide + notes) |
| W8 | cause-and-effect matrix: "który sygnał (gaz, temperatura, dym) uruchamia które działanie (wentylacja, odłączenie, gaszenie) — W8" | W2 `06` "Od analizy do projektu…" |
| W9 | W2 examples for the biogas holder as the basis of process safety in W9 — now worded "przykłady HAZOP, bow-tie i LOPA zbiornika biogazu wrócą tam jako punkt wyjścia do bezpieczeństwa procesowego biogazowni, razem z doborem detektorów i nastaw" (the old "W9 — bezpieczeństwo procesowe biogazowni") | W2 `index.md` "Powiązania" → "Dalej" |

New pointers made by W2 v2 (one sentence each; all are within the syllabus "Must cover" of the target lecture):

| For | Promise | Made in |
|---|---|---|
| W9 | detector selection and alarm set points "omówimy w W9"; "W9 rozszerzy ten przykład" (biogas bow-tie) | W2 `02` "Od wyników HAZOP do wymagań"; W2 `04` "Bow-tie dla zbiornika biogazu" (notes) |
| W10 | "Zarządzanie zmianą i badanie zdarzeń zamykają pętlę i wracają do analizy ryzyka — w W10" | W2 `01` "Proces ISO 31000 i miejsce metod" (notes); W2 `index.md` "Dalej" |
| W8 | BESS gas fault tree and event tree (04) as material to reuse; index "Dalej" names "drzewo niezdatności dla gazów w kontenerze i macierz przyczynowo-skutkowa" | W2 `04`; W2 `index.md` |

Promises W1 made to W2 (W1 ledger-update §4, "W2 (exists)") — delivered: numerical HSE criteria and their use (W2 `01` "Kryteria tolerowalności ryzyka"); LOPA arithmetic "ile każda warstwa zmniejsza ryzyko" (W2 `05`); SIL selection (W2 `05`); the onion model "as a table of frequencies and probabilities" (W2 `05` "LOPA: scenariusz i równanie"); the scenario chain broken into links by the methods (W2 `01` "Od opisu zagrożeń do analizy ryzyka").

What later lectures reuse from W2 (syllabus) is all in v2: W3 — biogas holder HAZOP and LOPA with the measurement table (02, 05); W5 — IPL credit (recap + RR716 0,19 on 05); W7 — wind-turbine FMEA (Shafiee, Tavner, Carroll, Walgern on 03) and the PL/SIL/demand-mode promise (05); W8 — BESS fault tree (04); W9 — HAZOP (02), bow-tie (04) and LOPA (05) for the biogas holder; W10 — MOC and incident investigation as the loop back (01, one sentence).

## 5. Open items (`course-ledger.md` §6)

To verify before teaching W2:
- TRAS 120 clause numbers once by eye in the PDF (the research tool's extraction was once inconsistent): 1.5.1, 2.1(6), 2.1(14), 2.3(6), 2.4(3) (a fact-checker saw only its first sentence), 2.4(7), 2.4(8), 2.6.3(3), 2.6.3(6).
- HSE RR716 section numbers on 05 (two findings' section numbers were dropped because notes and fetch disagreed; the remaining ones were confirmed by fact-checker 3).
- Sources not opened first-hand or only partly (hedged or cited through a secondary source): CCPS & EI (2018) bow-tie book (via Johnson et al. 2018); CCPS 2015 LOPA book (publisher page 403); IEC 61508-6 Annex D (via NTNU slides; no table values given); ISO 13849-1:2023 Table 2 PL a–e values (deliberately not given) and whether Annex A is still a risk graph; IEC 62682 §9 item list; DNV-SE-0439 2021 amendment (text read in the 2016 edition); Bowles 2003 (title only); Casson Moreno et al. 2018 (content not re-read, rate limit); Walgern 2026 failure definition; Hacke 2018 underlying sources; ISO 31000 clauses 6.3.4 and 6.4.4 (table of contents only); IEC 61882 clause 5.3 wording; IEC 31010 Table A.3 content.
- R2P2 read in a GOV.UK copy (inquiry exhibit); HSE's own PDF link returns 404.
- Polish PN adoptions and Polish terms not checked (PKN shop refused further requests): PN-EN IEC 60812, PN-EN 61025, PN-EN 62502, PN-EN 60300-3-11, PN-ISO 31000:2018-08, PN-EN ISO 13849-1; terms "poziom zapewnienia bezpieczeństwa", "obsługa ukierunkowana na niezawodność", "minimalny przekrój", "analiza muszki". The PKN shop URLs for PN-EN 61882:2016-07 and PN-IEC 61882:2005 come from search results (their status is in verified-facts W02).
- SVLFG TI 4 edition (XI 2015 per file): a newer edition was not checked.
- Time-sensitive: IEC 61508 ed. 3 (expected early 2027), ISO 31000 ed. 3 (CD), Regulation (EU) 2023/1230 applies from 20.01.2027 (during the winter semester), further IEC 62061/IEC 61400-1 amendments.

Conflicts with other lectures and the exercises (not fixed; reported):
- **W1 `01`** says EPRI attributes 3 of 26 incidents "bezpośrednio ogniwom"; EPRI's category is "Cell/Module". W2 `03` now says "kategorii ogniwo lub moduł (ang. Cell/Module)". Suggest aligning W1 in its next revision.
- **course-ledger §4** "typical IEF/PFD … CCPS via SAFEChE": the SAFEChE page cites Crowl & Louvar (2019).
- **Exercise card Zadanie 3** (`cwiczenia/karty/zadanie-03-biogazownia-mala.md`): the CSV column `H2S[ppm]` (18–145 ppm in the biogas) is given the rule ">100 ppm → ALARM (toksyczność, korozja)" and the risk table "H₂S > 100 ppm — detektor, respirator, wentylacja": a process concentration treated as a workplace-air exposure limit (lesson 20; W2 `02` "Przykład HAZOP: skład biogazu" teaches the difference). Already listed in §7 as a known problem; W2 now gives students the explicit counter-example.
- The site issue reported by W1 (active sidebar category label invisible) is also visible on W2 pages.

Scope note: W2 v2 adds a slide on Polish occupational risk assessment (Kodeks pracy art. 207, 226; rozp. BHP § 2 pkt 7, § 39a; PN-N-18002), as the lecturer's prompt asked for "what the syllabus now requires" and outcome 1 of the index. W1 `03` covers the EU framework directive 89/391 only, so there is no overlap.

Records:
- `sources-used.md` must be regenerated after the install (the W2 bibliography changed): `python3 _lecture-kit/tools/collect_sources.py bezp-monit/docs/wyklady-bezp > _lecture-kit/sources-used.md` in the next chat that owns the shared files.
- `README.md`, `00-syllabus.md` (W2 summary) and `course-ledger.md` still say "40 slides / 41 fixes" for W2; v2 has 40 slides and 62 fixes.
- `docs/intro.md` row W2: title unchanged; "Najważniejsze zagadnienia" still fits (you may add "kryteria ryzyka, ocena ryzyka zawodowego, FMECA, CCF, PL").

## 6. Lessons (`05-feedback-and-lessons.md` §3)

Proposed lines:
- [W2 v2] Keep the source's caveat attached to its number: RR716 gives a float/displacer device failure rate (PFD ≈ 0,085 at annual test) and in the same paragraph says the whole alarm system must be counted and a PFD below 0,1 cannot be claimed. Quoting the number alone contradicted W1's alarm-credit rule.
- [W2 v2] Check a ranking explanation against every column of the table: "the tower is first because of O = 5" held onshore only; offshore the other subassemblies also had O = 5 and S decided.
- [W2 v2] Modality is lost most often in method descriptions: "can/may" (Cox, Baybutt), "preferably" (IEC 61882 recorder), "normally" (IEC 60812 criticality) were written as plain facts in the first draft.
- [W2 v2] Scope a negative claim to what was read: "Polish law has no numerical risk criteria" became "art. 226 KP and § 39a do not give numerical criteria".
- [W2 v2] Use the source's own category and term: EPRI "Cell/Module" (not "cells"); TRAS "zusätzliche Gasverbrauchseinrichtung" (flare or gas burner, not "flare"); NUREG-0492 "External Event" (house symbol).
- [W2 v2] Research notes can carry figure-reading errors: Carroll's 298 h belongs to the hub, the gearbox is 231 h. Values read from figures stay VERIFIED-SECONDARY and are hedged ("wg wykresów w artykule").
- [W2 v2, process] With parallel writers, list recurring physical components in the shared terminology, not only the method terms: the liquid seal came back as "zamknięcie cieczowe" and "zamknięcie hydrauliczne" from two writers.
- [W2 v2, process] Applying the accepted fixes with a script that asserts each old string occurs exactly the expected number of times (62 replacements in one pass) was faster and more reliable than a fixer agent; keep the fix data next to fixes.md.
- [W2 v2, process] The rewrite chat lost its context twice; STATUS.md in `_lecture-kit/lectures/WNN/` on the computer plus the container files let it resume without redoing research. Write STATUS.md back after every phase.
