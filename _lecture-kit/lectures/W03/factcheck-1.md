# Fact-check 1 — W3 (30.09.2026)

Final report of fact-checker 1 (prompt: factcheck-prompts.md, CHECKER 1).

## Checker 1 (W3: index.md, 01, 02): fact-check

I found 2 major and 11 minor issues. I found nothing unsafe. No files were edited. The recomputed numbers are all correct.

### Issues

| # | File | Slide | Quoted text | Problem | Sev. | Evidence | Proposed Polish text |
|---|---|---|---|---|---|---|---|
| 1 | 01 | Znacznik czasu…; Synchronizacja…; Czas w badaniu zdarzeń; Źródła 16 | "PRC-002-3 (R10)", "NERC (2018) … projekt 2015-09" | The URL points to **Draft 1 of PRC-002-3 (Aug 2018)**, not the adopted standard. PRC-002-3 was adopted on 13.05.2021 and later superseded by PRC-002-4 (FERC 14.04.2023) and then PRC-002-5 (NERC Board 8.10.2024, FERC 20.02.2025). The R10 text is unchanged (UTC with or without local offset, ±2 ms). | major | https://www.nerc.com/globalassets/standards/reliability-standards/prc/prc-002-5.pdf | Replace "PRC-002-3" with "PRC-002-5 (R10)". Źródło: "NERC (2024). *PRC-002-5 Disturbance Monitoring and Reporting Requirements* (zatwierdzony przez FERC 20.02.2025)." Blackout slide: "cytowany w wytycznych do projektu PRC-002-3 (NERC, 2018)" |
| 2 | 01 | Synchronizacja zegarów | "to klasyfikacja autorów, a nie oznaczenia IEC 61850-5" | The paper says the opposite. The caption of its Table 1 is "…classes … specified in the IEC Standard 61850-5:2013", and the text says "The Standard specifies six levels … Class A … Class F". | major | https://iris.unitn.it/retrieve/handle/11572/372687/600120/IMM-D-22-00022-accepted.pdf | "Macii i Rinaldi, powołując się na IEC 61850-5:2013, podają klasy od 1 µs (pomiary fazorów) przez 1 ms (znakowanie szybkich zdarzeń) do ponad 1 s (tekstu normy nie sprawdzono)." |
| 3 | 01 | Czas w badaniu zdarzeń | "PRC-018-1 włączono do PRC-002-2 (13.11.2014), potem PRC-002-3 (±2 ms od UTC)" | The ±2 ms requirement (R10.2) was already in PRC-002-2. The wording suggests it arrived with version 3. | minor | https://www.vertiv.com/49906b/globalassets/documents/technical-specifications/nerc_prc-002-2_258020_0.pdf (copy of the NERC text) | "PRC-018-1 włączono do PRC-002-2 (13.11.2014), który wprowadził wymaganie R10 (±2 ms od UTC, utrzymane w PRC-002-5); dla źródeł falownikowych PRC-028-1 …" |
| 4 | 01 | Źródła 22 | "(b.d., ok. 2022) … czasopisma nie sprawdzono" | The journal is identified: IEEE Instrumentation & Measurement Magazine 25(6): 11–18 (2022). | minor | https://iris.unitn.it/handle/11572/372687 | "Macii D., Rinaldi S. (2022). Time Synchronization for Smart Grids Applications: Requirements and Uncertainty Issues. *IEEE Instrumentation & Measurement Magazine* 25(6): 11–18. https://doi.org/10.1109/MIM.2022.9847197 (manuskrypt: IRIS UniTN)" |
| 5 | 01 | Elementy systemu | historian: "przechowuje i rejestruje informacje zebrane w obiektach terenowych" | In 800-82r3 section 2.3.2 this sentence describes the **control center** ("The control center collects and logs information gathered by the field sites"). The glossary defines a historian as "A centralized database supporting data analysis using statistical process control techniques." | minor | https://csrc.nist.gov/glossary/term/data_historian | "scentralizowana baza danych wspierająca analizę danych metodami statystycznego sterowania procesem (słownik NIST SP 800-82r3)" |
| 6 | 01 | Architektura w PV… | "minimalny zestaw parametrów … (tabl. 1) obejmuje także czas trwania przerw" | Table 1 is titled "Parameters to be measured in real time (adapted from [1])", where [1] is IEC 61724. Its row "Durations of system outage" means outages of the system, not gaps in the data. | minor | T13-03 PDF | "PV: tabl. 1 raportu IEA PVPS T13-03:2014 (parametry mierzone w czasie rzeczywistym, wg IEC 61724) obejmuje także czas trwania przestojów systemu." |
| 7 | 01 | Architektura w PV… | BESS "Poziom 1: BMS: stan naładowania, stan zdrowia…" | This contradicts the diagram on the previous slide, which puts the BMS on Poziom 2. Stan naładowania and stan zdrowia are BMS estimates, not level-1 sensing. | minor | — | Poziom 1: "pomiary ogniw: napięcie, prąd, temperatura (ocena własna)"; Poziom 2: "BMS (dostarcza m.in. stan naładowania, stan zdrowia, temperaturę ogniw); lokalny EMS: …" |
| 8 | 01 | Synchronizacja (NTP row) | column "Dokładność", "RFC 5905: od kilkudziesięciu µs…" | RFC 5905 says "precise within", which is precision, not accuracy. The distinction matters in a metrology lecture. | minor | https://www.rfc-editor.org/rfc/rfc5905.html | "RFC 5905: precyzja (ang. precise within) od kilkudziesięciu µs … do kilkudziesięciu ms …" |
| 9 | 01 | Utrata łącza (notes) | "Tu instalacja pracowała, tylko nikt z zewnątrz jej nie widział" | The release says grid operators kept "unrestricted access". It does not say the turbines kept producing; it says only "no risk" and "no SCADA monitoring is taking place". | minor | windfair URL | "Według komunikatu turbiny nie były zagrożone, a operatorzy sieci mieli do nich dostęp; zabrakło zdalnego monitoringu SCADA i serwisu." |
| 10 | 01 | Po co monitorujemy | "służą też do monitorowania stanu, bo nie wymagają dodatkowych czujników" | The source makes a conditional, economic point ("especially attractive if … avoiding the need for extra sensors"), not a causal one. | minor | https://doi.org/10.3390/en13123132 | "są atrakcyjne ekonomicznie jako podstawa monitorowania stanu, bo nie wymagają dodatkowych czujników ani sprzętu akwizycji" |
| 11 | 02 | Próbkowanie i aliasing | "\|f − k f_s\|, gdzie k jest liczbą całkowitą" | k is not defined. The alias is the value that falls in the range 0…f_s/2. | minor | textbook | "…gdzie k jest liczbą całkowitą dobraną tak, by wynik leżał w przedziale od 0 do f_s/2" |
| 12 | 02 | Bilans napięć | budget calculated at 0,020 A | Page 05 teaches the NE 43 fault signal of ≥ 21 mA. If the budget uses only 20 mA, the loop may not deliver the high fault signal. Recomputed at 22 mA: 13,5 V / 0,022 A ≈ 614 Ω, so 285 Ω and 535 Ω still fit and 785 Ω does not. | minor | own recomputation | Add: "Przy sygnale uszkodzenia ≥ 21 mA (część 5) budżet sprawdza się dla największego prądu, np. 22 mA: (24 − 10,5) V / 0,022 A ≈ 614 Ω (ocena własna)." |
| 13 | 01 | Źródła 21 | "IEC/IEEE 61850-9-3:2016 … wyd. 1.0" | Its stability date is 2026, the same situation as IEC 60381-1, which the page does flag. | minor | https://webstore.iec.ch/en/publication/24998 | "wyd. 1.0 (data stabilności 2026 — przed zajęciami sprawdzić)" |
| 14 | 01, 02 vs index/03/04/06 | Źródła | "(IEA PVPS T13-03:2014)" vs "(Report IEA-PVPS T13-03:2014)" | The same source has two different labels. This matters for the source-consistency check on 06. | minor | — | Use one form everywhere: "(Report IEA-PVPS T13-03:2014)" |

### Verified OK

- **IEC 62264-1:2013 and ISA-95**
  - Edition 2.0 (22.05.2013), stability date 2028, no newer edition.
  - The Introduction says "based upon the Purdue Reference Model for CIM (hierarchical form)".
  - Level definitions 3.1.16–3.1.19 are translated correctly.
  - The ISA page says "also known as ANSI/ISA-95 or IEC 62264", and ANSI/ISA-95.00.01-2025 "(IEC 62264-1 Mod)" exists.
- **OPC 10030 4.2.3:** the time frames are exact.
- **NIST SP 800-82r3**
  - SCADA (2.3.2), PLC, IED, HMI and the SIS quote are accurate. The RTU paraphrase is acceptable (field sites "control actuators and/or monitor sensors").
  - The Purdue model appears in Fig. 16 as a segmentation example.
  - The CSRC RTU glossary entry includes "PLCs with radio communication capabilities are also used in place of RTUs".
- **IEA PVPS T13-03:2014:** purposes, 99% / 95% availability, sampling at 1 s or faster with 5–15 min averages (longer/shorter caveats), and the authors.
- **Maldonado-Correa et al. 2020:** more than 200 variables at 1–10 min; 10 min predominant and "negatively affects diagnostic capabilities"; the list of variables.
- **NREL/TP-7A40-73822:** "metering for revenue, alarms, diagnostics…" and "providing reports to facility stakeholders".
- **DOE ESHB 2020, ch. 15:** all points, including that there is no cell–module–rack hierarchy.
- **NREL/CP-5K00-76022:** the abstract sentence.
- **IEA PVPS T13-34:2026:** editors Schill, Louwen, Bruckman, Jahn; the platforms statement.
- **ENERCON release:** every item in check (j), including "Among them are 5,800…", "as of 22 March", SAT modems and LTE.
- **NERC**
  - The R10 wording.
  - PRC-018-1 merged into PRC-002-2 on 13.11.2014.
  - PRC-028-1 R6: ±100 ms for the "IBR unit", ±1 ms for other devices; NERC Board 8.10.2024, FERC 20.02.2025.
  - The Interim Report quote (p. 103) as given in the draft's guideline for R10.
- **Time synchronisation standards and papers**
  - RFC 5905 values and the GPS primary server.
  - IEEE 1588-2019 "sub-microsecond" (active standard).
  - IEC 61588:2021 ed. 3.0, corrected version 2026-01.
  - Macii & Rinaldi: NTP a few ms, sub-µs with up to 15 transparent clocks, GPS ±100 ns with 1 PPS, the class values.
- **Time scale:** GPS.gov rollover time; IERS Bulletin C 72; CGPM 2022 Resolution 4 wording.
- **2003 blackout:** Recommendation 28 title; 2006 report pp. 37–38 (NERC began a standard for time-synchronised disturbance monitoring equipment; sub-items had differing status); the NASPI sentence, with no date printed.
- **Metrology definitions:** VIM 3.2, 3.7, 3.8, 3.10, 4.7, 4.14 and 4.23 are faithful. The BIPM page lists only JCGM 200:2012 (no VIM 4th edition) and does list GUM Amd.1:2026. IEC 60381-1:1982 is ed. 2.0 with stability date 2026.
- **HART:** all FieldComm Group statements, including Bell 202 and "2–3 Primary Variable updates per second". All TI SLAAEH0 (Nov 2023) values, with the "wg noty TI" hedge present.
- **PV monitoring definitions and data:** GUM F.2.2.1 (0,29 δx); IEC 61724-1 3.2–3.4, the Introduction purposes and the 6.2 title; Lindig 2020.
- **All page-02 arithmetic:**
  - Loop: 675, 35, 0,7, 1/3/5 V, 285, 390, 18,3, 535, 785.
  - ADC: 4,88 µA, 3276,8, 1,53, 0,44 and 0,095 ppm.
  - Sampling and response: 1 Hz and 0 Hz aliases, 50 ppm, τ = 13,03 s, 53,6%.
- **Legal and index checks**
  - The legal sentence matches `verified-facts/pl-law-2026-09-W03.md`.
  - All index titles for W1–W10 match the syllabus and front matter, and the index source entries match the topic pages (apart from issue 14).
  - The Zadanie 1 timestamp format is as described.

### Could not verify

- **ISAP (blocked):** I relied on verified-facts for the act. "Liczniki rozliczeniowe … podlegają metrologii prawnej" rests on article content that the verified-facts file did not read.
- **IEC 61724-1 clause 6.2 text:** the sample shows only the title, which is consistent with how the slide words it.
- **Polish VIM terms:** PKN-ISO/IEC Guide 99:2010 is not online, and the GUM Słowniczek (2022) does not contain these terms.
- **PRC-002-5 effective date:** I did not read the implementation plan.
- **Unsourced "opis podręcznikowy" material:** the deadband and swinging-door descriptions and the signal-integrity bullet have no source to check against.
- **NREL/CP-5K00-76022 author list:** GovInfo names only Anderson K.; I could not confirm any co-authors.

