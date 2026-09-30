# Course ledger — state of the course after each lecture

Living document. The coordinator of each lecture chat reads it before planning and updates it in Phase 6 of the pipeline. Keep entries short and point to the page where the full text is.

Page paths are relative to `bezp-monit/docs/wyklady-bezp/`.

Merge note (30.09.2026, W3 chat, preflight): the proposals in `lectures/W01/ledger-update.md` (W1 rewrite v2) and `lectures/W02/ledger-update.md` (W2 rewrite v2), both of 29.09.2026, are merged into this file; where they overlap, the W2 update wins.

## 1. Status

| Lecture | Folder | Status | Date | Slides | Notes |
|---|---|---|---|---|---|
| W1 | `wyklad-01-zagrozenia-ramy-prawne` | rewritten from scratch, fact-checked, built | 29.09.2026 | 40 | v2: 3 writers in parallel; 3 independent fact-checkers; 58 fixes applied (3 major); first version archived in `bezp-monit/archiwum/2026-09-v1/`, its records in `_lecture-kit/lectures/W01/v1/` |
| W2 | `wyklad-02-analiza-ryzyka` | rewritten from scratch, fact-checked, built | 29.09.2026 | 40 | v2: 6 gap-research notes + browser checks; 3 writers in parallel; 3 independent fact-checkers; 62 fixes applied (2 major); first version archived in `bezp-monit/archiwum/2026-09-v1/wyklad-02-analiza-ryzyka/`, its records in `_lecture-kit/lectures/W02/v1/` |
| W3 | `wyklad-03-architektura-monitoringu` | written, fact-checked, built | 30.09.2026 | 39 | 10 research notes (2 rounds) + coordinator checks (ELI browser: Prawo o miarach; EUR-Lex: MID; PCA DA-06 wyd. 9; Reda tables; JCGM editions); 3 writers in parallel; 3 independent fact-checkers; 79 replacements (4 major: NERC PRC-002-5, IEC 61850-5 classes, IEC 61400-12/50-1 restructuring); records in `_lecture-kit/lectures/W03/` |
| W4 | `wyklad-04-komunikacja` | planned | | | |
| W5 | `wyklad-05-dane-kpi-alarmy` | planned | | | |
| W6 | `wyklad-06-fotowoltaika` | planned | | | |
| W7 | `wyklad-07-energetyka-wiatrowa` | planned | | | |
| W8 | `wyklad-08-magazyny-energii` | planned | | | |
| W9 | `wyklad-09-biogazownie` | planned | | | |
| W10 | `wyklad-10-cyberbezpieczenstwo-eksploatacja` | planned | | | |

Structure of the finished lectures:
- W1: 01 (26 min, 12 slides), 02 (9 min, 4), 03 (22 min, 10), 04 (9 min, 4), 05 (19 min, 8), 06 (5 min, 2 + quiz of 10) = 90 min; 3 mermaid diagrams (thermal-runaway stages on 01, legal map on 03, onion model on 05).
- W2: 01 (15 min, 7 slides), 02 (20 min, 8), 03 (15 min, 7), 04 (16 min, 7), 05 (19 min, 9), 06 (5 min, 2 + quiz of 10 + consolidated bibliography of 45 entries in 7 groups) = 90 min; 4 mermaid diagrams (ISO 31000 process on 01, HAZOP examination loop on 02, BESS gas fault tree and biogas bow-tie on 04).
- W3: 01 Cele, architektura i czas (20 min, 9 slides), 02 Tor pomiarowy od czujnika do zapisu (18, 8), 03 Niepewność pomiaru, wzorcowanie i dryft (14, 6), 04 Czujniki w instalacjach OZE i klasy monitoringu PV (15, 7), 05 Uszkodzenia toru pomiarowego i przykład biogazowy (18, 7), 06 Podsumowanie i quiz (5, 2 + quiz of 10 + consolidated bibliography of 55 entries in 7 groups) = 90 min; 4 mermaid diagrams (IEC 62264 levels on 01, measuring chain on 02, traceability chain on 03, fill-level SIF timing on 05).
- All three are in the spec form (quiz after `</SlideContainer>`, bibliography entries, numbered "Najważniejsze źródła", bold "Przykład ilustracyjny — dane umowne.", percent without a space).

Slide titles (= anchors) that other pages or the ledger cite:
- W1: "Jak monitoring wspiera bezpieczeństwo" (05), "Monitoring i ochrona w technologiach OZE" (05), "Kiedy warstwa jest warstwą ochrony" (05), "Normy wspólne dla wszystkich technologii" (04), "Co dalej: od opisu zagrożeń do analizy ryzyka" (06). Changed in v2: dropped "Projekt nowych WT: wymagania dla PV i BESS" (03), "Bezpieczeństwo funkcjonalne i ryzyko" and "Alarmy i cyberbezpieczeństwo OT" (04), the slide "Sprawdź się" (06; the heading `## Sprawdź się` keeps the anchor); new "Ćwiczenie: monitoring czy warstwa ochrony" (05), "Normy wspólne dla wszystkich technologii" (04), "Co dalej: od opisu zagrożeń do analizy ryzyka" (06).
- W2: "Od wyników HAZOP do wymagań" (02), "Maszyny i turbiny wiatrowe: PL i SIL" (05), "Od analizy do projektu monitoringu i zabezpieczeń" (06), "Przykład LOPA: nadciśnienie w zbiorniku biogazu" and "Przykład LOPA: luka i wymagany SIL" (05). Changed in v2: 01 "Powtórka z W1 i pytania na dziś" → "Od opisu zagrożeń do analizy ryzyka", new "Ocena ryzyka w polskim prawie"; 02 "HAZID: identyfikacja zagrożeń w fazie koncepcji" and "Lista kontrolna HAZID dla OZE" merged into "HAZID i SWIFT na etapie koncepcji"; 05 "Kiedy warstwa jest niezależną warstwą ochrony" → "Warstwy ochrony w LOPA: typowe błędy".

- W3: "Po co monitorujemy instalacje OZE", "Poziomy architektury według IEC 62264", "Przetwarzanie lokalne i w chmurze", "Znacznik czasu i skala UTC", "Synchronizacja zegarów: NTP, PTP i GNSS" (01); "Tor pomiarowy według VIM", "Pętla prądowa 4–20 mA", "Uśrednianie, filtracja i czas odpowiedzi", "Zapis danych i kompresja" (02); "Przykład: budżet niepewności pomiaru napełnienia", "Wzorcowanie i spójność pomiarowa", "Niepewność a nastawy zabezpieczeń" (03); "Klasy monitoringu PV według IEC 61724-1:2021", "Od wymagań do projektu monitoringu PV", "Drgania, BMS i detektory gazu: zasady działania" (04); "Sygnalizacja uszkodzeń: NAMUR NE 43 i NE 107", "Zbiornik biogazu: od HAZOP i LOPA do specyfikacji", "Przykład: ile czasu daje zbiornik biogazu", "Pomiary składu gazu i czas odpowiedzi" (05); "Monitoring, któremu można ufać", "Od toru pomiarowego do komunikacji" (06).

Records per lecture (research notes, claims ledger, calculation script, fixes): `_lecture-kit/research/` and `_lecture-kit/lectures/`.

## 2. Conventions established in W1–W2

- Six pages per lecture: five topic pages and `06-podsumowanie.mdx` (two slides, a 10-question quiz, a consolidated bibliography grouped by theme).
- Every page starts with `<LearningObjective>` (one sentence). Every factual slide ends with an `Źródło:` line; every page ends with `## Źródła`.
- One `<InstructorNotes>` block per slide, starting with "Czas: ~N min".
- No emoji in slide titles. Plain-text titles.
- "Przykład ilustracyjny — dane umowne" in bold for any example with assumed numbers; the numbers are asserted in the lecture's `calc.py`.
- Law: "stan prawny: wrzesień 2026"; drafts named "projekt" with the draft date.
- Units and numbers: decimal comma, "4,4% obj.", "10⁻⁵ /rok" or KaTeX `10^{-5}`; KaTeX decimal comma `0{,}1`.
- Links: earlier lectures by relative file path; later lectures as plain text ("w W8").
- From W3 on use the W2 form, as fixed in the spec: summary page (quiz after `</SlideContainer>` under `## Sprawdź się`), bibliography entries ("Author (year). *Title*. Publisher. [url](url)"), numbered "Najważniejsze źródła" list. W1 v2 and W2 v2 both follow it.
- 29.09.2026: the link texts between W1 and W2 ("Powiązania") were corrected to the exact lecture titles.
- A table assembled only from sourced facts is labelled "zestawienie dydaktyczne (ocena własna)"; own judgements "(ocena własna)".

## 3. Terms already defined

Use these terms as they are; refer back instead of redefining. Page = where the definition is.

| Term (PL) | English / acronym | Page | Source used |
|---|---|---|---|
| zagrożenie, sytuacja zagrożenia, zdarzenie niebezpieczne, szkoda | hazard, hazardous situation, hazardous event, harm | W1 `02-pojecia-podstawowe` | ISO/IEC Guide 51:2014, ISO 12100:2010 |
| ryzyko (dwa ujęcia) | risk: combination of probability and severity of harm; ISO 31000: effect of uncertainty on objectives | W1 `02` | Guide 51, ISO 12100, ISO 31000:2018 |
| ryzyko tolerowane, ryzyko resztkowe, bezpieczeństwo | tolerable risk, residual risk, safety | W1 `02` | Guide 51 |
| hierarchia zmniejszania ryzyka (3 kroki) | three-step method | W1 `02` | ISO 12100:2010, 89/391/EWG |
| ALARP, rażąca dysproporcja, trzy obszary tolerowalności | ALARP, gross disproportion, TOR | W1 `02` (W2 `01` links to it) | HSE R2P2 (2001), Edwards v NCB (1949) |
| nowe ramy prawne, wymagania zasadnicze, normy zharmonizowane, domniemanie zgodności | NLF, essential requirements, harmonised standards, presumption of conformity | W1 `03` | Blue Guide 2022 |
| strefy 0/1/2, dokument zabezpieczenia przed wybuchem (DZPW) | zones, explosion protection document | W1 `03` | 1999/92/WE; rozp. MG z 8.07.2010 |
| zakład o zwiększonym / dużym ryzyku (ZZR / ZDR) | Seveso lower / upper tier | W1 `03` | Dz.U. 2016 poz. 138; POŚ art. 248 |
| podmiot kluczowy, podmiot ważny; SZBI | essential / important entity; ISMS | W1 `03` | Dz.U. 2026 poz. 252 (art. 5) |
| wskaźnikowe dopuszczalne wartości narażenia zawodowego (IOELV) | IOELV | W1 `03` | 2009/161/UE |
| NDS, NDSCh | Polish OELs | W1 `01`, `03` | rozp. MRPiPS, zał. Dz.U. 2026 poz. 447 |
| dolna/górna granica wybuchowości (DGW/GGW) | LEL/UEL | W1 `01` | IFA GESTIS (dane CHEMSAFE) and GisChem (verified-facts W01) |
| niekontrolowany wzrost temperatury | thermal runaway | W1 `01` | Feng et al. 2018 |
| TRIR | Total Recordable Injury Rate — wskaźnik wszystkich rejestrowanych urazów | W1 `01` | G+ / Energy Institute |
| BESS, BMS, EMS, SCADA, CMS, OT (expansions used in the course) | Battery Energy Storage System — bateryjny magazyn energii; Battery Management System — system zarządzania baterią; Energy Management System — system zarządzania energią; Supervisory Control and Data Acquisition — system nadzoru i akwizycji danych; Condition Monitoring System — system monitorowania stanu; Operational Technology — technika operacyjna | W1 `01`, `04`, `05` | — |
| bezpieczeństwo funkcjonalne | functional safety (IEC 61508 concept; clause text not read) | W1 `04` | textbook, IEC 61508 series |
| monitoring a funkcja ochronna | monitoring vs protective function | W1 `05` | synthesis (labelled) |
| warstwy ochrony (model cebuli), model sera szwajcarskiego | layers of protection, Swiss cheese model | W1 `05` | SAFEChE LOPA tutorial (layer order; CCPS 2015 also describes the onion model); Reason 1990/2000 |
| niezależna warstwa ochrony (IPL): skuteczna, niezależna, audytowalna | IPL criteria | W1 `05` (W2 `05` recaps in one line with a link) | SAFEChE; Willey 2014 |
| BPCS, SIS, SIF | Basic Process Control System, Safety Instrumented System/Function (przyrządowa funkcja bezpieczeństwa) | W1 `05` (W2 `05` recaps) | IEC 61511-1:2016 sample, 3.2.3 (Note 2: BPCS "typically may implement" control, monitoring and alarms) |
| alarm (wymaga reakcji operatora w określonym czasie) | alarm | W1 `05` | ISA-18.2 as quoted in ISA InTech 2020 (edition not named there; ISA-18.2-2016 is the current edition per ISA) |
| RRF (named with the illustrative example) | Risk Reduction Factor — współczynnik zmniejszenia ryzyka | W1 `05` (defined in full in W2 `05`) | — |
| rejestracja sekwencji zdarzeń (SOE) | Sequence of Events | W1 `05` | DNV GL 2020 (McMicken) |
| obejście (ang. bypass) | bypass | W1 `05` | IEC 61511-1:2016 3.2.4 (sample) |
| ocena ryzyka = identyfikacja + analiza + ewaluacja ryzyka; kryteria ryzyka; postępowanie z ryzykiem | ISO 31000 process terms | W2 `01` | ISO 31000:2018 cl. 6 (ANSI preview) |
| ryzyko zawodowe (definicja przepisu) | occupational risk | W2 `01` | rozp. MPiPS z 26.09.1997 § 2 pkt 7 (verified-facts W02) |
| HAZID, SWIFT | Hazard Identification; Structured What-If Technique | W2 `02` | ISO 17776:2016; IEC 31010:2019 |
| rejestr zagrożeń | hazard register | W2 `02` | practice (own judgement) |
| HAZOP — badanie zagrożeń i zdolności do działania; część (węzeł), zamierzenie projektowe, właściwość, cecha, słowo przewodnie, odchylenie | HAZOP; part (node), design intent, property, characteristic, guide word, deviation | W2 `02` | IEC 61882:2016 3.1.x (właściwość = property, 3.1.5, replaced "element" in 2016; own translation). PN-EN 61882:2016-07 is an English-language version with the Polish title „Badania zagrożeń i zdolności do działania (badania HAZOP) — Przewodnik zastosowań”; PN-IEC 61882:2005 (Polish text) withdrawn (verified-facts W02) |
| matryca ryzyka i jej ograniczenia | risk matrix | W2 `01` | IEC 31010:2019 B.10.3 (recording and reporting techniques, B.10); Cox 2008; Baybutt 2015, 2016, 2018 |
| FMEA — analiza rodzajów i skutków uszkodzeń; FMECA; rodzaj uszkodzenia, skutek, S — ciężkość, O — występowanie, D — wykrywalność; RPN = liczba priorytetu ryzyka; AP = priorytet działania; macierz krytyczności | FMEA terms | W2 `03` | IEC 60812:2018 (3.2 SOD); AIAG & VDA 2019 via Barsalou 2020 |
| rodzaj uszkodzenia ukrytego; zadanie wykrywania uszkodzeń; przedział P-F; RCM — obsługa ukierunkowana na niezawodność | hidden failure mode; failure-finding task; P-F interval; Reliability Centred Maintenance | W2 `03` | IEC 60300-3-11:2009 3.1.11, 3.1.9, 3.1.22 (Polish RCM term not checked against PN) |
| FMEA-MSR | Supplemental FMEA for Monitoring and System Response | W2 `03` | AIAG page |
| STPA | System-Theoretic Process Analysis — analiza procesu oparta na teorii systemów | W2 `03` | Rosewater et al. 2020 (Sandia) |
| FTA — analiza drzewa niezdatności; zdarzenie szczytowe, podstawowe, nierozwinięte, pośrednie; bramki AND/OR; minimalny przekrój; przybliżenie rzadkich zdarzeń; miary ważności | fault tree terms | W2 `04` | IEC 61025:2006; NUREG-0492; NASA FTH 2002 §2.1, §7.5 |
| uszkodzenia spowodowane wspólną przyczyną, model współczynnika β | CCF, beta-factor | W2 `04` | IEC 61508-6 Annex D via Rausand & Lundteigen (NTNU slides, ch. 8 and 10) |
| ETA — analiza drzewa zdarzeń | event tree analysis | W2 `04` | IEC 62502:2010 |
| analiza muszki (bow-tie); bariery zapobiegawcze, bariery ograniczające skutki; czynniki degradacji (dawniej: eskalacji); środki kontroli czynników degradacji; bariera aktywna: wykryj–zdecyduj–działaj | bow-tie terms | W2 `04` | CCPS & EI 2018 via Johnson et al. 2018 |
| zamknięcie cieczowe | liquid seal (of gas-holder pressure protection) | W2 `02`, `04`, `05` | TRAS 120 2.4(7) ("hydraulisch-mechanisch"); term chosen for the course |
| dodatkowe urządzenie zużywające gaz (np. pochodnia) | zusätzliche Gasverbrauchseinrichtung (flare or gas burner) | W2 `02`, `04` | TRAS 120 1.4(28), 2.1(14) |
| LOPA; IEF; PFD; RRF | Layer of Protection Analysis; initiating event frequency; probability of failure on demand; risk reduction factor | W2 `05` | CCPS; Willey 2014; HSE RR716; generic values: SAFEChE LOPA tutorial citing Crowl & Louvar (2019), not CCPS directly |
| modyfikator warunkowy; f_tol (docelowa częstość scenariusza) | conditional modifier; target frequency | W2 `05` | HSE RR716; Stanley et al. 2018 |
| SIL; PFDavg — średnie prawdopodobieństwo niebezpiecznego uszkodzenia na żądanie; PFH — średnia częstość niebezpiecznych uszkodzeń na godzinę; tryby pracy (tryb niskiego zapotrzebowania / wysokiego zapotrzebowania / ciągły); 1oo1, 1oo2; testy sprawdzające | SIL terms | W2 `05` | IEC 61508:2010, IEC 61511-1:2016; demand modes in IEC 61508 wording via King 2014 |
| MRT, MTTR | Mean Repair Time — średni czas naprawy; Mean Time To Restoration — średni czas przywrócenia | W2 `05` | Lundteigen & Rausand (NTNU) |
| ograniczenia architektury, zdolność systematyczna | architectural constraints, systematic capability | W2 `05` | IEC 61508 (named only) |
| PL, PLr — wymagany poziom zapewnienia bezpieczeństwa; kategoria; SRP/CS | Performance Level; category; safety-related parts of control systems | W2 `05` | ISO 13849-1:2023 3.1.4–3.1.6 (own translation; Polish PN terms not checked) |
| macierz przyczynowo-skutkowa | cause-and-effect matrix | W2 `06` (named only) | full treatment in W8 |
| poziomy 0–4 modelu IEC 62264 (ANSI/ISA-95); model Purdue (tylko obraz struktury) | enterprise-control levels | W3 `01` | IEC 62264-1:2013 (3.1, preview); ISA; NIST SP 800-82r3 |
| PLC (Programmable Logic Controller — programowalny sterownik logiczny, as W1/W2); RTU (Remote Terminal Unit — zdalna stacja telemechaniki); IED (Intelligent Electronic Device — inteligentne urządzenie elektroniczne); HMI (Human-Machine Interface — interfejs człowiek–maszyna); archiwum danych procesowych (ang. historian) | control-system components | W3 `01` | NIST SP 800-82r3 and CSRC glossary |
| przetwarzanie brzegowe (lokalne) a chmura; lokalna autonomia (ocena własna) | edge vs cloud | W3 `01` | own judgement + NREL/CP-5K00-76022, T13-03 |
| znacznik czasu; UTC (Coordinated Universal Time — uniwersalny czas koordynowany); NTP; PTP; GNSS | time terms | W3 `01` | RFC 5905; IEEE 1588-2019/IEC 61588:2021; NERC PRC-002-5, PRC-028-1 |
| tor pomiarowy (measuring chain, VIM 3.10); układ pomiarowy (3.2); czujnik (3.8); przetwornik pomiarowy (3.7); przedział pomiarowy (4.7); rozdzielczość (4.14); czas odpowiedzi na skok (4.23), t₉₀ | VIM terms (Polish names = common technical Polish, Polish VIM not available) | W3 `02` | JCGM 200:2012 (online VIM) |
| pętla prądowa 4–20 mA; żywe zero (live zero); przetwornik A/C, LSB, kwantyzacja; interwał próbkowania, zapis, interwał zapisu (IEC 61724-1 3.2–3.4); aliasing, filtr antyaliasingowy; strefa nieczułości (deadband), kompresja; nasycenie zakresu; HART, FSK | measuring-chain terms | W3 `02` | IEC 60381-1 (edition only); FieldComm Group; GUM F.2.2.1; textbook |
| dokładność pomiaru (Vademecum wording); błąd pomiaru; niepewność pomiaru; największy dopuszczalny błąd pomiaru (MPE); niepewność standardowa; metoda typu A/B; rozkład prostokątny; współczynnik wrażliwości; niepewność standardowa złożona; niepewność rozszerzona; współczynnik rozszerzenia k; budżet niepewności | metrology terms | W3 `03` | VIM; GUM (JCGM 100:2008 + Amd.1:2026) and its Polish translation (GUM 2019); GUM Vademecum 2022; VIML PL; EA-4/02 M:2022 |
| wzorcowanie (VIM 2.39, Vademecum wording) ≠ adiustacja; spójność pomiarowa (VIM 2.41, DA-06 wording); dryft (VIM 4.21); legalizacja (metrologia prawna) | calibration, traceability, drift | W3 `03` | Vademecum; PCA DA-06 wyd. 9; ILAC-G24/OIML D 10:2022 |
| klasy A i B systemu monitoringu PV (IEC 61724-1:2021; klasa C usunięta w wyd. 2) | PV monitoring classes | W3 `04` | IEC 61724-1:2021 Foreword (sample) |
| niebezpieczne uszkodzenie niewykrywalne / wykrywalne (DU/DD), bezpieczne (S); pokrycie diagnostyczne (DC); sygnał zamrożony | failure classes | W3 `05` | SINTEF PDS Data Handbook 2021 |
| NAMUR NE 43 (poziomy sygnału uszkodzenia; wartości wg literatury branżowej), NE 107 (sygnały statusu F/C/S/M) | failure signalling | W3 `05` | NAMUR news pages; Lesman (hedged) |
| UPS (uninterruptible power system — system bezprzerwowego zasilania) | UPS | W3 `05` | IEC 62040-3:2021 |
| czas bezpieczeństwa procesu (process safety time) | PST | W3 `05` | IEC 61511-1:2016 3.2.52.1 as quoted by Beharrysingh et al. 2018 (secondary) |
| czas odpowiedzi t_x (Einstellzeit) i czas reakcji (Ansprechzeit) detektora; linia poboru próbki; analizator procesowy ≠ detektor gazu | gas-measurement timing | W3 `05` | DGUV T 023, T 021 (2023) |

## 4. Key numbers already used

Reuse these values. Full source for each: the lecture's `claims.md` and the slide's `Źródło:` line.

| Value | Meaning | Where | Source |
|---|---|---|---|
| DGW 4,4% obj., GGW 17% obj. (100% DGW = 4,4% obj.) | methane explosive limits | W1 `01`, W2 `02` | IFA GESTIS (CHEMSAFE) and GisChem |
| biogas (60% CH₄) ≈ 6–22% obj. | explosion range of biogas | W1 `01` | SVLFG TI 4 |
| H₂S: NDS 7 mg/m³, NDSCh 14 mg/m³; IOELV 5 ppm / 10 ppm; IDLH 100 ppm | exposure limits | W1 `01`, `03` | Dz.U. 2026 poz. 447; IOELV (UE); NIOSH |
| CO: NDS 23 mg/m³ (20 ppm), NDSCh 117 mg/m³ (100 ppm); CO₂: 9000 / 27 000 mg/m³ | exposure limits | `verified-facts/` | Dz.U. 2026 poz. 447 |
| PV > 6,5 kW: fire-safety expert agreement + PSP notification + plan for rescue teams | Prawo budowlane art. 29 ust. 4 pkt 3 lit. c | W1 `03` | `verified-facts/` |
| BESS 30 / 300 / 2000 kWh thresholds | Prawo budowlane after Dz.U. 2025 poz. 1847 | W1 `03` | `verified-facts/` |
| draft WT (6.08.2026): PV < 30 V in ≤ 30 s; BESS ventilation < 25% DGW; > 60 kWh gas detection; ≥ 0,065 m²/m³ relief | **draft**, not law | W1 `03` | `verified-facts/` |
| KSC: in force 3.04.2026; "wykaz" application by 3.10.2026; SZBI by 3.04.2027; fines under art. 73 ust. 1–4, 73a–73c, 76b from 3.04.2028 (art. 35) | NIS2 in Poland | W1 `03` | Dz.U. 2026 poz. 252 |
| CRA: reporting from 11.09.2026; full application 11.12.2027 | Cyber Resilience Act | W1 `03` | EUR-Lex |
| RfG types in Poland: B ≥ 0,2 MW, C ≥ 10 MW (below EU maxima 1 / 50 MW), D ≥ 75 MW (= EU maximum) or ≥ 110 kV; PSE requirements approved 15.05.2025 (types B–D from 1.12.2025, A from 1.01.2027); RfG revision = draft (feedback 8.07–25.08.2026, adoption planned Q4 2026) | generator types | W1 `03` | URE decision 16.07.2018, PSE; European Commission (initiative 14165) |
| Seveso (PL): P2 10 / 50 t; poz. 18 50 / 200 t (upgraded biogas may be classified here, note 19); hydrogen 5 / 50 t | ZZR / ZDR thresholds | W1 `03` | Dz.U. 2016 poz. 138 |
| raw biogas 60% CH₄ / 40% CO₂ ≈ 1,22 kg/m³ → 10 t ≈ 8200 m³ (illustrative) | order of magnitude only | W1 `03` | calc.py |
| HSE CHIS6: long-term average ≤ 1 alarm / 10 min in normal operation | alarm rate | W1 `05` | HSE CHIS6 |
| BPCS layer: risk reduction ≤ 10; alarm + operator: PFD not lower than 0,1 (exida: 0,5 if the alarm system is not rationalised) | IPL credit | W1 `05`, W2 `05` | IEC 61511-1:2016 cl. 9.3 (via Derbyshire), HSE RR716, exida |
| alarm + operator as OR of hardware 0,1 and operator 0,1 → 0,19, "may be reasonable as a minimum value" | IPL credit | W2 `05` | HSE RR716 §2.5.1 |
| float/displacer level device 19,3 × 10⁻⁶ /h (0,17 /rok) → PFD ≈ 0,085 at annual test, but "too low" for the whole system and "a PFD of less than 0.1 cannot be claimed" | real device data | W2 `05` | HSE RR716 §6.5.2 (read by the coordinator) |
| BPCS as initiating event, non-compliant with IEC 61511 ed. 1: dangerous failure rate not below 10⁻⁵ /h ≈ 0,0876 /rok ≈ 0,1 /rok; "about one failure in eleven years" | BPCS IEF | W2 `05` | RR716 footnote; Chambers & Pearson 2011 |
| typical IEF/PFD: BPCS loop failure 0,1/yr; operator error 0,01 per opportunity; relief device 0,01; dike 0,01 | LOPA generic values | W2 `05` | SAFEChE LOPA tutorial (values from Crowl & Louvar 2019), generic, secondary |
| ignition probabilities 0,09 and 0,08 for large petrol releases "unrealistically low"; 0,1 for kerosene probably conservative | LOPA inputs | W2 `05` | RR716 §3.4, §6.4, §2.4 |
| SIL 1–4 bands of PFDavg and PFH; RRF 10–100 / 100–1000 / 1000–10 000 | SIL table | W2 `05` | IEC 61508-1:2010, IEC 61511-1:2016 |
| PFDavg ≈ λDU·T/2 (1oo1); 1oo2 ≈ ((1−β)λDU·T)²/3 + β·λDU·T/2 | simplified formulas | W2 `05` | IEC 61508-6 via Lundteigen & Rausand |
| β ranges: 0,5–5% logic, 1–10% sensors and final elements; 37-question checklist | CCF | W2 `04`, `05` | IEC 61508-6 Annex D via NTNU |
| R2P2 (read first-hand, GOV.UK copy): pkt 130 — 10⁻⁶ /rok for workers and the public as a **guideline** for the broadly acceptable/tolerable boundary; pkt 132 — 10⁻³ /rok workers, 10⁻⁴ /rok public (from HSE's nuclear tolerability document); pkt 133 — "these limits rarely bite"; pkt 136 — ≥ 50 deaths in one event intolerable if more frequent than 1 in 5000 per year (2 × 10⁻⁴ /rok) | risk criteria | W2 `01` | HSE R2P2 |
| 10⁻⁶ /rok plaatsgebonden risico = grenswaarde for (zeer) kwetsbare gebouwen and kwetsbare locaties | Netherlands, Bkl art. 5.7 | W2 `01` | RIVM, IPLO |
| LOPA single-scenario targets: worker limit cut by an order of magnitude to 10⁻⁴ /rok (cited practice); 10⁻⁵ /rok = middle of the ALARP region; 10⁻⁶ /rok for firms aiming at the broadly acceptable line | risk targets | W2 `01`, `05` | Stanley et al. 2018 §5.4 |
| EPRI: failure rate of grid-scale BESS −97% (2018–2023), compared with deployed capacity (not "per GWh" in the text); 81 events, 26 classified, 3 (11%) in the root-cause category **"Cell/Module"**; 72% early in life | BESS statistics | W1 `01`, W2 `03` | EPRI 2024 (W1 `01` says "bezpośrednio ogniwom" — see §6) |
| thermal runaway stages ≈ 80 / 130 / 190 / ≥ 250 °C; first venting ≈ 100–110 °C (electrolyte vapour, before the large internal short), second ≈ 250 °C, third after the redox reactions start | Feng 2018 (one cell type) | W1 `01` | Feng et al. 2018 |
| HF 20–200 mg/Wh | Li-ion fire gases | W1 `01` | Larsson et al. 2017 |
| Carroll 2016: 8,3 failures/turbine/yr = 6,2 + 1,1 + 0,3 + 0,7 (≈350 turbines, 1768 turbine-years); pitch/hydraulics 1,076, generator 0,999, gearbox 0,633, tower/foundation 0,185; gearbox major replacement ≈ 231 h and ≈ 230 000 EUR (materials, read from figures, VERIFIED-SECONDARY; 298 h is the hub) | offshore wind failure rates | W2 `03` | Carroll et al. 2016 |
| Walgern et al. 2026: > 1000 turbines, > 4200 operating years; 3,3 onshore / 4,3 offshore failures per turbine-year; per MW: rotor system incl. pitch first, then control | wind reliability | W2 `03` | WES 11: 1553–1568 |
| Hacke et al. 2018: inverters 43–70% of PV service requests (review) | PV O&M | W2 `03` | RSER 82 |
| Sandia (Rosewater et al. 2020): off-gas sensors may pre-empt smoke detection by 5–30 min "in some cases" | BESS detection | W2 `03` | SAND2020-9360 |
| McMicken (DNV GL 2020): cell voltage 4,06 → 3,82 V at 16:54:30; ≈ 16:55:20 DC breakers and AC contactors opened; door opened 20:02, explosion 20:04, ≈ 3 h after the onset | BESS incident | W1 `05`, W2 `04` | DNV GL 2020; UL 2021 |
| 1–10 RPN scales: 1000 combinations, 120 distinct values; 60/72/120 each from 24; none between 900 and 1000; mean 166,4, median 105; 501 > 100. Tavner scales (S 1–4, O 1/2/3/5, D 1/4/7/10): 64 combinations, 39 values, max 200 | RPN properties | W2 `03` | calc.py |
| SVLFG TI 4: air dosing for biological desulphurisation ≤ 6% of the biogas flow; raw biogas H₂S 0,01–0,4% obj. = 100–4000 ppm (process concentration, not NDS) | biogas | W2 `02` | SVLFG TI 4 (XI 2015) |
| O₂ from 6% air dosing ≈ 1,2% obj. (0,06 × 0,2095 / 1,06) | illustrative | W2 `02` | calc.py |
| H₂S: loss of smell at 100–150 ppm | toxicology | W2 `02` | OSHA |
| Scarponi et al. 2015: instantaneous release from the digester (LOC3): VCE damage ≈ 100 m (14 kPa), flash fire ≈ 25 m (½ LEL); no frequencies | biogas consequences | W2 `04` | CET 43 |
| G+ 2025 report (11.06.2026): 69,2 mln h (+5% on 2024), TRIR 3,48 (+4% on 2024), no fatalities; 2024 report (12.06.2025): 79 mln h, TRIR 2,93, 1 fatality, 99 lost-work-day injuries (restated to 95 in the 2025 report), manual handling 121. Never put 2,93 and 3,48 side by side as a trend | offshore wind safety | W1 `01` | Energy Institute / G+ |
| PSE 31.12.2025: 77 331 MW installed, 37 106 MW wind + other RES; 1 636 673 micro-installations ≈ 13,9 GW | scale of RES in PL | W1 `01` | PSE, URE |
| ≈1,3 mln PV systems; 350 fires with PV involved, 120 caused by PV, 75 with large damage (≈0,006%) | Germany, ≈20 years to 2013 | W1 `01` | Fraunhofer ISE 2013 (expert workshop) |
| 80 fires, 58 caused by PV; DC isolators most often; root cause unknown in 28 of 58 | UK, VII 2015 – II 2018 | W1 `01` | BRE NSC 2018 |
| 411 events, 128 caused by PV; montaż 28,9%, wyrób 21,1%, zewnętrzne 14,1%, projekt 1,6%, nieznane 34,3% | Poland, PSP reports 2018–2021 | W1 `01` | Bednarczyk 2022 |
| 145 (2020) → 808 (2024) events with PV present (presence, not cause); 312 building fires with PV in 2025 (other unit) | Poland | W1 `01` | PSP via Globenergia; KG PSP via Gramwzielone (both hedged) |
| Moss Landing 16.01.2025: 300 MW / 1200 MWh; ≈56 000 of ≈100 000 modules burned; 18.09.2026 ≈1300 damaged modules burned, shelter-in-place; root cause unpublished (CPUC 14.07.2026) | BESS incident | W1 `01` | WECC 2025; US EPA (updated 25.09.2026); CPUC |
| Czajków 7.05.2026: ≈2 MW(h) trailer, ≈107 500 cells, up to 24 fire units, 65 evacuated, cause unpublished | BESS incident, Poland | W1 `01` | KW PSP Poznań; KP PSP Ostrzeszów |
| IEC 61508 ed. 3: CDVs 2025 (E DIN EN IEC 61508-1:2025-12), expected "early 2027" (61508 Association); IEC 61511:2026 SER (10.07.2026) = 2016 + AMD1:2017; IEC 62061:2021 + AMD1:2024 + AMD2:2026; IEC 61400-1:2019 + AMD1:2025; ISO 13849-1:2023 ed. 4 (26.04.2023) | standards status | W2 `05` | IEC webstore, VDE, 61508.org, ISO |
| ISO 31000:2018 current, "to be revised"; ISO/CD 31000 (ed. 3) comments closed 1.03.2026; IEC 31010:2019, IEC 61882:2016, IEC 60812:2018, IEC 61025:2006, IEC 62502:2010, IEC 60300-3-11:2009, ISO 17776:2016 (confirmed 2022) current; AIAG & VDA FMEA 2019 1st ed. (2nd printing errata only); DNV-ST-0438 2016-04 am. 2021-11; DNV-SE-0439 2016-06 am. 2021-10; TRAS 120 12/2018 with correction of 27.02.2019 | standards status | W2 `01`–`05` | publishers' pages (29.09.2026) |
| Kodeks pracy t.j. Dz.U. 2026 poz. 1245 (art. 207 § 1, art. 226); rozp. ogólne BHP t.j. Dz.U. 2003 nr 169 poz. 1650 ze zm. (§ 2 pkt 7, § 39a); PN-N-18002:2011 current in the PKN shop | Polish law | W2 `01` | verified-facts W02 |
| Prawo o miarach t.j. Dz.U. 2022 poz. 2063 (no newer t.j. or amendment); MID 2014/32/UE (MI-002 gas meters, MI-003 active electrical energy meters); PCA DA-06 wyd. 9 (24.02.2025, stosowany od 24.04.2025); Główny Urząd Miar = Polish NMI | legal metrology, traceability | W3 `01`, `03` | verified-facts W03 |
| NERC PRC-002-5 R10: UTC, ±2 ms (SER/FR/DDR); PRC-028-1 R6 (IBR): ±1 ms devices, ±100 ms inverter-level data; both NERC Board 8.10.2024, FERC 20.02.2025 | time sync requirements (North America, reference only) | W3 `01` | NERC PDFs |
| NTP few ms, PTP (power profile IEC/IEEE 61850-9-3) sub-µs, GNSS ±100 ns; IEC 61850-5:2013 classes 1 µs … > 1 s (via Macii & Rinaldi 2022) | synchronisation accuracy | W3 `01` | Macii & Rinaldi, IEEE I&M Magazine 25(6) 2022 |
| T13-03: sample ≤ 1 s, store 5–15-min averages; data availability ≥ 99% (< 95% = low quality); recalibration 2 years with two cross-checked sensors, yearly with one; cleaning every 1–2 weeks | PV monitoring good practice | W3 `01`, `02`, `03`, `04` | IEA PVPS T13-03:2014 |
| illustrative loop: 24 V, 10,5 V → 675 Ω (614 Ω at 22 mA); cable 35 Ω; 250 Ω → 1/3/5 V; 12-bit card on 0–20 mA, 0–5000 ppm → 1,53 ppm/LSB, u = 0,44 ppm; 30 s peak of 1000 ppm → 10-min mean 50 ppm; t₉₀ 30 s → τ ≈ 13 s | measuring-chain examples (dane umowne) | W3 `02` | calc_A.py |
| illustrative fill-level budget: u_c 0,68%, U ≈ 1,4% (k = 2), drift 72,5% of variance | uncertainty budget (dane umowne) | W3 `03` | calc_B.py |
| Reda (NREL 2011) U95: thermopile pyranometer 4,1% → 2,6% with R = F(z); photodiode 8,0% → 4,0%; Table 3 calibration 3%, sum 8,9%, RSS 4,1% (as published; recomputation of rounded rows 4,04%) | irradiance uncertainty | W3 `03`, `04` | Reda 2011; coordinator_checks C1 |
| SINTEF PDS 2021 transmitters: DC 65% (pressure, flow), 70% (level, temperature); λDU level 1,9 and pressure 0,48 per 10⁶ h | failure data | W3 `05` | SINTEF example pages |
| biogas holder (dane umowne): 500 kW_el, η 0,40, 55% CH₄, 9,97 kWh/m³ (FNR 2024) → ≈ 228 m³/h; trip 90% → 100 m³ ≈ 26 min; U 1,4% → 13,6 m³ ≈ 3,6 min; 5% → 13 min; sampling-line delay 15 s / ≈ 170 s | biogas example | W3 `05` | calc_C.py |

## 5. Forward references (promises to later lectures)

The lecture named in the first column must deliver the item. Mark it delivered with the page when done.

| For | Promise (quoted briefly) | Made in | Delivered |
|---|---|---|---|
| W3 | "od W3 do W5 … jak zbudować monitoring, któremu można ufać: W3 — architektura i tor pomiarowy, W4 — komunikacja, W5 — jakość danych i alarmy" | W1 `05` "Jak monitoring wspiera bezpieczeństwo" (notes); also W1 `06` "Co dalej: od opisu zagrożeń do analizy ryzyka" | delivered: W3 as a whole; stated on W3 `06` "Monitoring, któremu można ufać" (W4 and W5 parts still open) |
| W3 | "jakie wielkości mierzyć (napełnienie, O₂, H₂S, CH₄), gdzie i z jaką dokładnością — tor pomiarowy w W3" | W2 `02` "Od wyników HAZOP do wymagań" (slide text; the measurement table names quantity, place and purpose, deliberately no accuracy values) | delivered: W3 `05` "Zbiornik biogazu: od HAZOP i LOPA do specyfikacji" (range, principle, place, role; no source gives accuracy — stated), "Przykład: ile czasu daje zbiornik biogazu", "Pomiary składu gazu i czas odpowiedzi" |
| W3 | "co mierzyć, gdzie i z jaką dokładnością, żeby alarmy i funkcje działały zgodnie z założeniami analiz — W3" | W2 `06` "Od analizy do projektu monitoringu i zabezpieczeń" | delivered: W3 `03` "Przykład: budżet niepewności pomiaru napełnienia", "Niepewność a nastawy zabezpieczeń"; W3 `05` "Przykład: ile czasu daje zbiornik biogazu" |
| W4 | "IEC 62351 zabezpiecza protokoły komunikacyjne energetyki, które poznacie w W4" | W1 `04` "Normy wspólne dla wszystkich technologii" (notes) | |
| W4 | protocols beyond the physical signal ("Protokoły wymiany danych — W4", "Szczegóły protokołów — W4", "Sieci polowe i protokoły cyfrowe — W4"); typical integration errors named only: "skalowanie, jednostki, kolejność bajtów, wartości nieaktualne i znaczniki czasu"; W3 taught UTC/NTP/PTP basics and PRC-002-5/PRC-028-1 — do not repeat | W3 `01` (UTC, synchronisation), `02` (HART slide), `06` "Od toru pomiarowego do komunikacji" | |
| W5 | data-quality flags, "brak danych" vs "0", recording min/max per interval, validation ("Flagi jakości danych — W5", "Walidacja i jakość danych — W5", "Jakość danych szerzej — W5"); KPI | W3 `01` "Przetwarzanie lokalne i w chmurze", `02` "Zapis danych i kompresja", `05` "Diagnostyka, porównanie czujników i zasilanie", `06` | |
| W6 | PV performance monitoring "z czujnikami i klasami z części 4" (IEC 61724-1:2021 classes A/B; Table 1–6 values still to be read in the standard) | W3 `04`, `06` | |
| W7 | vibration diagnostics needs kHz sampling ("CMS … omówimy w W7"); nacelle anemometry and iced sensors "szczegółowo w W7" | W3 `02` "Próbkowanie i aliasing", `04` "Wiatr: anemometry i ich wzorcowanie", `06` | |
| W8 | BMS measurements (voltage, current, temperature; calibration and drift), gas-detector principles (IR does not detect hydrogen) | W3 `04` "Drgania, BMS i detektory gazu: zasady działania", `06` | |
| W9 | detector selection, set points and Ex for the biogas plant; the W3 `05` specification table and the 26-min fill-level margin as starting point; gas warning response-time chain (DGUV T 023) | W3 `03` "Niepewność a nastawy zabezpieczeń", `05`, `06` | |
| W10 | Purdue zones and segmentation ("strefy bezpieczeństwa omówimy w W10"); cause of the KA-SAT outage and protection of links | W3 `01` "Poziomy architektury według IEC 62264", "Utrata łącza: przypadek KA-SAT 2022", `06` | |
| W5 | "Alarmy omówimy w W5" | W1 `04` "Normy wspólne dla wszystkich technologii" (notes) | |
| W5 | "racjonalizację alarmów opisuje IEC 62682:2022 (rozdz. 9) — W5" | W2 `02` "Od wyników HAZOP do wymagań"; W2 `06` "Od analizy do projektu…" | |
| W5 | "Z HAZOP i LOPA wynika lista alarmów, którą w W5 będziemy racjonalizować" | W2 `06` "Od analizy do projektu…" (notes) | |
| W6 | "Wykrywanie łuku, odłączanie i działania ratownicze omówimy w W6" (PV firefighting distances deliberately not given in W1) | W1 `01` "PV: napięcie DC i łuk elektryczny" | |
| W6, W8 | IEC 60364-7-712:2025 covers storage coupled to PV and island operation — "łączy tematy W6 i W8" | W1 `04` "Normy dla fotowoltaiki i energetyki wiatrowej" (notes) | |
| W6, W8 | draft WT (6.08.2026) requirements for PV (emergency switch, DC insulation monitoring, arc detection and interruption) and BESS (BMS, emergency switch, gas detection, ventilation) — "szczegóły w W6 i W8" | W1 `03` "Warunki techniczne i ochrona ppoż. w IX 2026" | |
| W6–W9 | "Szczegóły każdej technologii omówimy w W6, W7, W8 i W9" | W1 `05` "Monitoring i ochrona w technologiach OZE" (notes) | |
| W7 | independent turbine safety system, e.g. overspeed (DNV-ST-0438; W7) | W1 `05` "Monitoring i ochrona w technologiach OZE" (table) | |
| W7 | ice throw / ice fall: site-specific risk assessment (IEA Wind Task 19) — "odległości omówimy w W7" (the old 1,5 × (D + H) formula was dropped) | W1 `01` "Wiatr: główne zagrożenia" | |
| W7 | "Czy i jak IEC 61400-1 powołuje ISO 13849-1 lub IEC 62061 — do sprawdzenia w tekście normy (W7)" | W2 `05` "Maszyny i turbiny wiatrowe: PL i SIL" | |
| W7 | "wrócimy do tego w W7" + question: demand mode of the turbine overspeed stop function ("to trzeba wykazać, a nie założyć") | W2 `05` "Maszyny i turbiny wiatrowe: PL i SIL" (notes) | |
| W7 | main bearing, gearbox, generator as mandatory CMS scope (DNVGL-SE-0439:2016) — W7; vibration sensors "o czym w W7" | W2 `06` "Od analizy do projektu…" (slide + notes) | |
| W8 | cause-and-effect matrix: "który sygnał (gaz, temperatura, dym) uruchamia które działanie (wentylacja, odłączenie, gaszenie) — W8" | W2 `06` "Od analizy do projektu…" | |
| W8 | BESS gas fault tree and event tree (04) as material to reuse; index "Dalej" names "drzewo niezdatności dla gazów w kontenerze i macierz przyczynowo-skutkowa" | W2 `04`; W2 `index.md` | |
| W9 | "przykłady HAZOP, bow-tie i LOPA zbiornika biogazu wrócą tam jako punkt wyjścia do bezpieczeństwa procesowego biogazowni, razem z doborem detektorów i nastaw" (the old "W9 — bezpieczeństwo procesowe biogazowni") | W2 `index.md` "Powiązania" → "Dalej" | |
| W9 | detector selection and alarm set points "omówimy w W9"; "W9 rozszerzy ten przykład" (biogas bow-tie) | W2 `02` "Od wyników HAZOP do wymagań"; W2 `04` "Bow-tie dla zbiornika biogazu" (notes) | |
| W10 | "zagrożenia cyber dotyczą wszystkich technologii (szerzej w W10)" | W1 `01` "Mapa zagrożeń: ludzie, otoczenie, cyber" | |
| W10 | "cyberbezpieczeństwo OT w W10" | W1 `04` "Normy wspólne dla wszystkich technologii" (notes: "serię IEC 62443 i całe cyberbezpieczeństwo OT w W10") | |
| W10 | "Zarządzanie zmianą i badanie zdarzeń zamykają pętlę i wracają do analizy ryzyka — w W10" | W2 `01` "Proces ISO 31000 i miejsce metod" (notes); W2 `index.md` "Dalej" | |

Promises W1/W2 made to W3 — delivered (30.09.2026): see the three W3 rows above.

Promises W1 made to W2 — delivered: numerical HSE criteria and their use (W2 `01` "Kryteria tolerowalności ryzyka"); LOPA arithmetic "ile każda warstwa zmniejsza ryzyko" (W2 `05`); SIL selection (W2 `05`); the onion model "as a table of frequencies and probabilities" (W2 `05` "LOPA: scenariusz i równanie"); the scenario chain broken into links by the methods (W2 `01` "Od opisu zagrożeń do analizy ryzyka").

What later lectures reuse from W2 (syllabus): W3 — biogas holder HAZOP and LOPA with the measurement table (02, 05); W5 — IPL credit (recap + RR716 0,19 on 05); W7 — wind-turbine FMEA (Shafiee, Tavner, Carroll, Walgern on 03) and the PL/SIL/demand-mode promise (05); W8 — BESS fault tree (04); W9 — HAZOP (02), bow-tie (04) and LOPA (05) for the biogas holder; W10 — MOC and incident investigation as the loop back (01, one sentence).

## 6. Open items

To verify before teaching (from the W1/W2 reports):
- W1, time-sensitive: KSC self-registration in the "wykaz" until **3.10.2026** (gov.pl) — after that date the slide describes a past deadline; new WT unpublished on 29.09.2026 (RCL project 12412604, last completed stage "Notyfikacja", last change 2.09.2026; transitional regime 18 months from 20.09.2026); IEC 62109-1 ed. 2 FDIS vote until **16.10.2026**; Batteries Regulation art. 13 label (implementing act not checked); RfG revision (adoption planned Q4 2026); ISO 12100 ed. 2 and ISO 31000 ed. 3 may be published during the semester; Moss Landing (CPUC, EPA) and Vineyard Wind (no BSEE findings as of IX 2026); CNBOP-PIB / PSME BESS guideline announced for end 2026 (hedged).
- W1, sources not opened first-hand or only partly: KG PSP PV procedures (2022, PDF content not read); IEC 61511-1 cl. 9.3 (via Derbyshire) and the Figure 9 grouping (via Purdue P2SAC; label not found in the text layer — check the slide image); DNV-SE-0439 read in the 2016 edition; R2P2 in a GOV.UK copy (HSE's own PDF 404); Casson Moreno 2016 period only from a summary; Polish PN-EN editions (ISO 12100, IEC 63027) not checked; functional-safety definition = textbook IEC 61508 concept.
- W2: TRAS 120 clause numbers once by eye in the PDF: 1.5.1, 2.1(6), 2.1(14), 2.3(6), 2.4(3), 2.4(7), 2.4(8), 2.6.3(3), 2.6.3(6); HSE RR716 section numbers on 05; sources not opened first-hand or partly: CCPS & EI (2018) bow-tie book (via Johnson), CCPS 2015 LOPA book, IEC 61508-6 Annex D (via NTNU), ISO 13849-1:2023 Table 2 PL values (not given) and Annex A, IEC 62682 §9 items, DNV-SE-0439 2021 amendment, Bowles 2003, Casson Moreno 2018, Walgern 2026 failure definition, Hacke 2018 underlying sources, ISO 31000 6.3.4/6.4.4, IEC 61882 5.3 wording, IEC 31010 Table A.3; Polish PN adoptions and terms not checked (PKN shop refused requests); SVLFG TI 4 edition (XI 2015) — newer edition not checked; time-sensitive: IEC 61508 ed. 3 (early 2027), ISO 31000 ed. 3, Regulation (EU) 2023/1230 from 20.01.2027, further IEC 62061/IEC 61400-1 amendments.
- Methane DGW 4,4% obj.: GESTIS/CHEMSAFE and GisChem, not the ISO/IEC 80079-20-1 text.
- The statement that the Rhadereistedt 2005 accident is the same event as Jenkins' 2005 case is an inference.
- W3, to verify before teaching: IEC 61724-1:2021 stability date 2026 (edition 3 may appear; Table 1–6 values not in any open source — Class A/B descriptions only via Hukseflux, hedged); IEC 60381-1:1982 and IEC/IEEE 61850-9-3:2016 stability dates 2026; NE 43 mA levels only from a distributor page ("wg literatury branżowej"); IEC 61850-5:2013 classes only via Macii & Rinaldi; Polish VIM terms (PKN-ISO/IEC Guide 99:2010 not online; "dryft", "przyrostowa", "adiustacja" unchecked in the Polish VIM); EA-4/02 read on the EA site; IEC 61511-1 PST definition only second-hand (Beharrysingh 2018); DGUV T 023 Table 1 layout read through a summariser; SINTEF DC partly expert judgement; ENERCON/KA-SAT only from the company's press release (windfair.net reprint); IERS may issue a newer Bulletin C (January 2027); the local-autonomy and buffering rules are own judgement (no source found).
- W3, sources not opened first-hand: CSB Texas City (only pp. 17, 23, 35, 57, 131 and Appendix S figure titles); Buncefield 2011 report read in the IChemE copy (HSE archive PDF returned 403); MEASNET wind-direction procedure; FNR Leitfaden Biogas (membrane-holder pressure not used).
- (Closed 29.09.2026 by W2 v2: R2P2 numerical criteria now read first-hand.)

Known conflicts and scope questions:
- **W1 `01`** says EPRI attributes 3 of 26 incidents "bezpośrednio ogniwom"; EPRI's category is "Cell/Module" (W2 `03` uses "kategorii ogniwo lub moduł (ang. Cell/Module)"). Align W1 in its next revision.
- The W1 claims ledger (`lectures/W01/claims.md`) has some rows for Polish law marked SECONDARY/UNVERIFIED that were later verified in ISAP and corrected on the slides; `verified-facts/` is authoritative.
- Exercise 4 (heat pump) is not covered by any lecture (see README "Open decisions").
- `intro.md` was updated on 29.09.2026 to the new syllabus (lecture table with status per lecture; each lecture chat links its row). Still open there: lecture grading and final grade ("Do uzupełnienia"). Exercise grading pages conflict (plan: 56 pts, pass ≥ 34; `rubryki/kryteria-zaliczenia.md`: 150 pts); the literature page (`literatura/index.md`) is outdated. `intro.md` row W2 "Najważniejsze zagadnienia" still fits (could add "kryteria ryzyka, ocena ryzyka zawodowego, FMECA, CCF, PL").
- **Syllabus W3** says "IEC 61724-1 classes A/B/C"; IEC 61724-1:2021 (ed. 2) eliminated Class C (Foreword). W3 teaches A/B and mentions the removal; the syllabus line is outdated (fixed file — not edited).
- **intro.md** still says "Wykłady W3–W10 są w przygotowaniu" below the table (W3 row now "dostępny"; the sentence is outside the W3 row, not edited).
- W3 `01` uses NERC PRC-002-5 (current) and PRC-028-1 as a North-American reference; W4 must not present them as Polish requirements.
- `README.md`, `00-syllabus.md` (W1/W2 summaries) still say "41 slides / 36 fixes" (W1) and "40 slides / 41 fixes" (W2); v2: W1 40 slides / 58 fixes, W2 40 slides / 62 fixes (fixed files — not edited by lecture chats).
- Site issue (W1 render check, also on W2 pages): the sidebar category label of the lecture you are in is invisible (active category link has white text on a transparent background, `menu__link--sublist menu__link--active`); probably a rule in `src/css/custom.css`.

## 7. Exercises and lectures

| Exercise card | Related lectures |
|---|---|
| Zadanie 1 — Monitoring instalacji PV | W3, W5, W6 |
| Zadanie 2 — Turbina wiatrowa VAWT z magazynem energii | W5, W7, W8 |
| Zadanie 3 — Mała biogazownia | W9 (W2 HAZOP/LOPA examples) |
| Zadanie 4 — Pompa ciepła | none (open decision) |
| Zadanie 5 — BESS: SOC/SOH, cykle i bezpieczeństwo | W5, W8 |
| Zajęcia 03 — Hybryda PV + wiatr (leftover card) | — |

Known problems in the exercises (from the 2026 review, not fixed): VAWT rated power implies Cp above the Betz limit; "typical" 86% inverter efficiency; inconsistent H₂S thresholds across pages. Lectures must not copy these values.
- Zadanie 3 (`cwiczenia/karty/zadanie-03-biogazownia-mala.md`): the CSV column `H2S[ppm]` (18–145 ppm in the biogas) is given the rule ">100 ppm → ALARM (toksyczność, korozja)" and the risk table "H₂S > 100 ppm — detektor, respirator, wentylacja": a process concentration treated as a workplace-air exposure limit (lesson 20; W2 `02` "Przykład HAZOP: skład biogazu" teaches the difference).
