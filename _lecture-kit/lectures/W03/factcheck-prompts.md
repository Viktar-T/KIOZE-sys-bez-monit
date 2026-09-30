# Fact-check prompts — W3 (30.09.2026)

Template F of `03-agent-prompts.md`; three checkers in parallel on disjoint pages. COMMON is identical; each checker got one PAGES/CHECKS section.

## COMMON

You are an independent fact-checker for university lecture pages (Polish, Docusaurus MDX). You did NOT write them. Do NOT edit any files. Your job: find factual errors, unsupported claims, wrong numbers, broken or unreliable source links, and misleading or safety-critical statements.

Context: course "Systemy bezpieczeństwa i monitorowania instalacji OZE" (ZUT Szczecin), lecture "W3: Architektura monitoringu i tor pomiarowy", 5th-semester engineering students in Poland. The lecturer requires ONLY reliable, high-quality sources (official, standards bodies, government/agencies, national labs, peer-reviewed); manufacturer or trade sources are acceptable only with a visible hedge ("wg producenta", "wg literatury branżowej", "według komunikatu"). Today is 30.09.2026. Polish legal and PCA facts in /home/claude/repo/_lecture-kit/verified-facts/ (especially pl-law-2026-09-W03.md) were read in official sources and count as verified; check the slides against them. You cannot fetch isap.sejm.gov.pl or legislacja.gov.pl; report any other Polish legal claim as "could not verify". The research notes the writers used are in /home/claude/research/W03/ (coordinator_checks.md overrides the others) and the writers' claims ledger is /home/claude/work/W03/claims.md — use them to find the source of a claim, but verify against the source itself, not against the notes.

Writing rules the pages must follow (report violations that matter): /home/claude/repo/_lecture-kit/01-writing-spec.md §2 (evidence), §3 (consistency), §4 (language). Own judgements must be labelled "(ocena własna)"; illustrative numbers must follow the bold label "Przykład ilustracyjny — dane umowne."; standards need their edition; law "stan prawny: wrzesień 2026". Terms already defined in W1/W2 must not be redefined (list: /home/claude/repo/_lecture-kit/course-ledger.md §3).

Method:
1. For every factual claim, number, date, name and quotation on a slide or in instructor notes, open the cited source (WebFetch; DOIs via https://doi.org/...) and check that it supports the claim as worded. Where a PDF is too long, search for terms. Record what you could and could not open.
2. Check that each URL resolves to the right document (title/author/year match) and is the official location.
3. Check every calculation shown (recompute).
4. Check that quiz answers and explanations match the slides exactly (where your pages contain quiz content).
5. Specific checks requested: see your section.
6. Also flag: any sentence that could teach something unsafe; Polish terminology errors (use PN-EN / Polish metrology terms where they exist); anything presented as fact that is only secondary/trade press without a hedge; causal claims the source does not make; standard editions that are not current; translations presented as quotations that distort the source.

Output (≤ 1200 words): a table of issues — file | slide title | quoted text (short) | problem | severity (critical/major/minor) | evidence URL | proposed corrected Polish text. Then a short list "verified OK" (claims you confirmed), and "could not verify" (with reason). Be precise; don't report stylistic preferences.

## CHECKER 1 — index.md, 01-cele-architektura-i-czas.mdx, 02-tor-pomiarowy.mdx

Files (read completely): /mnt/user-data/outputs/lecture/wyklad-03-architektura-monitoringu/index.md, 01-cele-architektura-i-czas.mdx, 02-tor-pomiarowy.mdx.

Specific checks:
a) IEC 62264-1:2013: edition number, "data stabilności 2028", "według wstępu norma opiera się na hierarchicznym modelu referencyjnym Purdue dla CIM"; the translated level definitions (3.1); ANSI/ISA-95.00.01-2025 existence and title.
b) OPC 10030 4.2.3 time frames as written on slide "Poziomy architektury według IEC 62264".
c) NIST SP 800-82r3: every paraphrase in the table on "Elementy systemu: od sterownika do archiwum" (SCADA 2.3.2, HMI, PLC, IED, historian) and the SIS-independence quote; NIST CSRC RTU glossary incl. "PLC z łącznością radiową mogą zastępować RTU".
d) IEA PVPS T13-03:2014: purposes paraphrase; Table 1 minimum parameters (incl. "czas trwania przerw"); availability 99% / 95% wording; "próbkować co sekundę lub częściej, średnie co 5–15 min; dłuższe średnie mogą utrudnić analizę, krótsze przeciążyć bazę danych".
e) Maldonado-Correa et al. 2020: "ponad 200 zmiennych w interwałach 1–10 min", 10 min most common and limits diagnostics, "nie wymagają dodatkowych czujników ani sprzętu akwizycji".
f) NREL/TP-7A40-73822 (2018): monitoring purposes named on slide 1 (alarms, diagnostics, reports for stakeholders, billing/revenue metering).
g) DOE Energy Storage Handbook 2020 ch. 15: BMS provides SOC, SOH, cell temperature; PCS works with BMS to respect battery limits; local EMS and a supervisory EMS coordinating several local EMS.
h) NREL/CP-5K00-76022: the abstract statement about the frequency of communication outages vs real production outages.
i) IEA PVPS T13-34:2026: authors/editors in the bibliography entry and the statement on slide "Przetwarzanie lokalne i w chmurze".
j) ENERCON press release 28.03.2022 (windfair.net reproduction): 24.02.2022 start, KA-SAT, ~30 000 terminals, 5800 turbines, > 10 GW, "no risk to the WECs", grid operators' access, > 50% back online around 22.03.2022, most by Easter; all hedged "według komunikatu".
k) NERC PRC-002-3 R10 (±2 ms of UTC; UTC with or without local offset); PRC-018-1 merged into PRC-002-2 on 13.11.2014; PRC-028-1 R6 (±1 ms devices, ±100 ms inverter-level data), NERC Board 8.10.2024, FERC 20.02.2025; is PRC-002-3 or a later version the one in force (flag, do not demand change unless wrong)?
l) RFC 5905 accuracy wording (tens of µs for primary servers, tens of ms with poll intervals up to 36 h); IEEE 1588-2019 "sub-microsecond"; IEC 61588:2021 ed. 3 and "wersja poprawiona 2026-01"; IEC/IEEE 61850-9-3:2016; Macii & Rinaldi (NTP few ms, PTP power profile sub-µs with 15 transparent clocks, GNSS ±100 ns, classes 1 µs … > 1 s); identify the journal/DOI of Macii & Rinaldi if you can (report it; the page says "czasopisma nie sprawdzono").
m) GPS week rollover 6.04.2019 23:59:42 UTC (GPS.gov); IERS Bulletin C 72 (6.07.2026): no leap second at end of December 2026, UTC−TAI = −37 s since 1.01.2017; CGPM 2022 Resolution 4 wording (maximum UT1−UTC increased in or before 2035).
n) 2003 blackout: Interim Report sentence as quoted in the PRC-002-3 background (p. 103 of the Interim Report), Final Report Recommendation 28 title, 2006 implementation report pp. 37–38 statements; DOE/NASPI case study sentence and "bez daty wydania".
o) VIM (JCGM 200:2012) definitions 3.2, 3.7, 3.8, 3.10, 4.7, 4.14, 4.23 as translated; no VIM 4th edition on the BIPM JCGM publications page; IEC 60381-1:1982 ed. 2.0 and stability date 2026.
p) HART: FieldComm Group statements (Bell 202 FSK, 1200 bit/s, "without interrupting", status/diagnostics, up to four dynamic variables, 2–3 PV updates per second, point-to-point and multidrop); TI SLAAEH0 (1200/2200 Hz, 1 mA p-p, 230–600 Ω, 250 Ω typical, multidrop 4 mA fixed); HART expansion.
q) GUM F.2.2.1 (u = 0,29 δx); IEC 61724-1:2021 3.2–3.4 definitions; Lindig et al. 2020 (1-min weather, 15-min electrical, averaged).
r) Recompute every number on 02: 675 Ω, 35 Ω, 0,7 V, 285 Ω, 390 Ω, 18,3 V, 1/3/5 V; 4,88 µA, 3276,8 codes, 1,53 ppm, 0,44 ppm, 0,095 ppm (16 bit); 1 Hz alias; 50 ppm mean; τ ≈ 13 s and 54%; and the notes (535 Ω, 785 Ω).
s) Slide 1 of 01: the legal-metrology sentence against verified-facts/pl-law-2026-09-W03.md (Prawo o miarach t.j. Dz.U. 2022 poz. 2063; MID MI-003).
t) index.md: titles of W1, W2 and W4–W10 exactly as in /home/claude/repo/_lecture-kit/00-syllabus.md and the W1/W2 index.md front matter; "Najważniejsze źródła" entries match the topic pages.

## CHECKER 2 — 03-niepewnosc-i-wzorcowanie.mdx, 04-czujniki-i-monitoring-pv.mdx

Files (read completely): /mnt/user-data/outputs/lecture/wyklad-03-architektura-monitoringu/03-niepewnosc-i-wzorcowanie.mdx, 04-czujniki-i-monitoring-pv.mdx.

Specific checks:
a) VIM 2.13 (incl. Note 1), 2.16 (Note 1), 2.26 (Notes 1 and 4), 2.39 (incl. Note 2: calibration vs adjustment and "self-calibration"), 2.41, 4.21, 4.26 — translations faithful; Polish wording of "dokładność pomiaru" as in the GUM Vademecum 2022; "największy dopuszczalny błąd pomiaru" in the GUM Polish VIML translation; Polish GUM guide title (2019).
b) GUM clause numbers used: 4.2 (Type A), 4.3.1 (Type B sources), 4.3.7 (rectangular a/√3), 5.1.2, 5.1.3, 6.2.1, 6.3.3 (k = 2 ≈ 95%); JCGM 100:2008 Amd.1:2026 exists (BIPM JCGM publications page).
c) EA-4/02 M:2022 5.1 wording (k = 2, ≈ 95%) in the ENAC-hosted copy; is there a canonical EA URL (european-accreditation.org) that should be cited instead?
d) Recompute the budget on "Przykład: budżet niepewności pomiaru napełnienia" (u_i, u_c 0,678, U 1,36/1,4, variance shares 18,1/8,7/72,5/0,7) and the notes answer "U ≈ 0,9% if drift ±0,5%".
e) Reda (NREL 2011) Table 3 and Table 10 values as used on both pages (U95; thermopile calibration 3%, sum 8,9%, RSS 4,1%; spectral 1% vs 5%; Table 10 4,1→2,6 and 8,0→4,0).
f) PCA DA-06 wyd. 9 (24.02.2025, stosowany od 24.04.2025), ILAC-P10 conformity, GUM as NMI, the VIM 2.41 Polish wording, point 3.1.1 — against verified-facts W03.
g) ILAC-G24:2022 / OIML D 10:2022 clause numbers 4.2, 5.1, 6.1–6.3 and "staircase"/control-chart methods.
h) Pindado et al. 2012 ("po okresie przejściowym ok. 450 dni sprawność anemometrów ma tendencję do spadku"); DGUV T 021 (2023) "replacement when sensitivity falls below 50% of the initial value"; T13-03 recalibration (2 years with two sensors, yearly with one) and cleaning (1–2 weeks).
i) US NRC RG 1.105 Rev. 4 (February 2021): endorsement of ANSI/ISA-67.04.01-2018; 10 CFR 50.36 sentence; 95/95 sentence; section 4.6 drift. Is the "zasada dla instalacji OZE" clearly marked as own judgement and not unsafe?
j) ISO 9060:2018: edition 2, 14.11.2018, replaced 1990 edition, confirmed 2024 (systematic review), spectral range "0,3 µm do 3–4 µm"; class names A/B/C with the 1990 names only hedged (Hukseflux); T13-03 wording on "first class or secondary standard or comparable crystalline sensors".
k) IEC 60904-2:2023 ed. 4.0; IEC 61724-1:2021 3.17 definition; Fuke & Kottantharayil 2025 numbers (IIT Bombay; 36–48%; 30–43%; delayed cleaning).
l) IEC 61724-1:2021 Annex B and figures B.1–B.3; IEC 60904-5 reference; Sandia module/cell temperature models and coefficients a = −3,56, b = −0,0750 for glass/cell/polymer sheet, open rack; recompute T_m 41,1 °C (1 m/s) and 35,6 °C (5 m/s) for E = 800 W/m², T_a = 20 °C; IEA PVPS T13-28:2024 statements (temperature sensors recalibrated every two years in Class A; avoid module/array edges).
m) IEC 61869-2:2012 ed. 1.0 and "arkusz interpretacyjny z 2022 r."; Tang et al. 2024 (Discover Applied Sciences) statements in the DC table (CT cannot measure DC; shunt; Hall open/closed loop; fluxgate) and full author list/volume if available; IEC 61724-1 normative references IEC 61557-12 and IEC 62053-22 (classes 0,1S/0,2S/0,5S); Tables 5 and 6 titles.
n) IEC 61400-12-1:2022: ed. 3.0, 5.09.2022, "z poprawką z 05.2025", replaced IEC 61400-12-1:2017 and IEC 61400-12-2:2013; annex letters F, I, J, K and their titles; MEASNET Anemometer Calibration Procedure v3 (10.12.2020) details (Annex F of IEC 61400-12-1 ed. 2, 4–16 m/s, Pitot tubes, linear regression); MEASNET Wind Direction Sensor Calibration Procedure v1 (May 2025); MEASNET expansion; IEA Wind TCP Task 19 (2018) icing statements.
o) Gas-detector table: catalytic (needs > 10% O₂; poisoning by silicones and H₂S; ambiguous above UEL — note: the course uses DGW/GGW, check the Polish term "górna granica wybuchowości (GGW)"), infrared (does not detect hydrogen; pressure-sensitive; not poisoned), electrochemical ("tlen 0–100%, gazy toksyczne 0–1000 ppm" — find which source supports this, if any), accelerometer principle; IEC 62619:2022 ed. 2.0 BMS definition and 8.2.2–8.2.4; HSE 2004 T90 definition and calibration gas; OSHA SHIB (30.09.2013, updated 26.11.2024) bump test and "full calibration" description.
p) IEC 61724-1:2021: ed. 2.0 21.07.2021; scope and introduction translations; Foreword changes (Class C eliminated, bifacial, irradiance sensors, soiling); Hukseflux class descriptions hedged; table titles 1–6; "recommended minimum number of instruments" (Hukseflux); Lindig 2020 (three classes, 2017 edition); T13-28:2024 still mentions Class C; stability date 2026 and whether an edition 3 / CDV exists on the IEC site.
q) "Od wymagań do projektu monitoringu PV": every row against T13-03 and IEC 61724-1; the Zadanie 1 statement (read /home/claude/repo/bezp-monit/docs/cwiczenia/karty/zadanie-01-pv-stacja-hulajnog.md).

## CHECKER 3 — 05-uszkodzenia-toru-i-przyklad-biogazowy.mdx, 06-podsumowanie.mdx

Files (read completely): /mnt/user-data/outputs/lecture/wyklad-03-architektura-monitoringu/05-uszkodzenia-toru-i-przyklad-biogazowy.mdx, 06-podsumowanie.mdx. For the quiz and the summary also read pages 01–04 in the same folder (only to compare; others check them).

Specific checks:
a) SINTEF PDS Data Handbook 2021 (example pages): DU/DD/S definitions; DC 65% (pressure, flow) and 70% (level, temperature) for transmitters; λDU level transmitter 1,9 per 10⁶ h and pressure transmitter 0,48 per 10⁶ h; "ok. 4 razy"; is there an edition newer than 2021?
b) NAMUR NE 43: current edition 2021-07-26, previous 2003-02-03, what the 2021 revision changed; NAMUR full name; the signal levels (3,8–20,5 mA; ≤ 3,6 mA; ≥ 21 mA) — are they correctly hedged and, if you can find a better (official or peer-reviewed) source, report it; voltages at 250 Ω (0,95–5,125 V; 0,9 V; 5,25 V). NE 107: edition 2025-07-15, previous 2017-04-10, the four status signals F/C/S/M and "unifies colours and symbols".
c) IEC 62040-3:2021 ed. 3.0 and its title.
d) Buncefield: which report is cited (COMAH Competent Authority 2011 "Why did it happen?") and whether paragraphs 11, 12, 14, 20, 26, 99 say what the slide says (03:05 flatline; 05:37 petrol from roof vents; 06:01 fire alarm and explosion; stuck 14 times since 31.08.2005; independent high-level switch inoperable because the padlock's role was not understood; lesson para 99). Both URLs.
e) CSB Texas City report (2007): 15 killed, 180 injured; the level transmitter span (5 ft / 1,5 m within the bottom 9 ft / 2,7 m of a 170 ft / 52 m tower); the Figure 6 quote (13:04, 158 ft / 48 m, 78% of the transmitter range, 7,9 ft / 2,4 m); redundant high-level alarm did not activate; no other level indications or automatic safeguards.
f) TRAS 120: 2.6.3(3) (continuous monitoring of fill level; min/max devices separate from the fill-level measurement; automatic start of the additional gas-consuming device before release via the overpressure device; switching off consumers at minimum), 2.4(8), 1.5.2.2.1 (CH₄ 45–75%, O₂ normal band, H₂S up to 0,4% obj.), the alarm-and-record sentence for relief devices (which clause?); LfU Bayern 2024 ("kontinuierlich … anzuzeigen"); BMWFJ 2012 (visual check, rope indicator/sight glass); SVLFG TI 4 3.6.1.5 (gas detection in the CHP room); DGUV T 021 ("Hersteller befragen" for process gases) and T 023 Table 1 (catalytic only up to LEL; IR up to 100% vol.).
g) Recompute the biogas example: 1250 kW, 125,4 m³/h, 228 m³/h, 100 m³ → 26 min, U 1,36% → 13,6 m³ → 3,6 min, 5% → 50 m³ → 13 min; methane lower heating value ≈ 9,97 kWh/m³ (normal conditions) — is this correct and how should it be sourced?; 1000 m³ / 228 → 4,4 h (quiz).
h) Process safety time: Beharrysingh et al. (2018) — does the paper quote the IEC 61511-1 definition as translated on the slide? Bibliographic data and URL.
i) DGUV T 023 (October 2023): t_x (Einstellzeit) and Ansprechzeit definitions; sampling lines "as short as possible"; multiplexing adds the maximum cycle time; alarm thresholds consider transport, t_x and the protective-measure delay; condensate and adsorption; T 021 50% sensitivity rule.
j) Recompute the transport delays (0,25 l, 15 s; 1,41 l, 170 s ≈ 2,8 min).
k) Safety: is anything on page 05 unsafe or overstated (e.g. "niezależność urządzenia maksimum jest ważniejsza niż jego precyzja"; the conclusion that extractive gas analysis is not the primary protective layer; "O₂ — rozwiązanie TRAS 2.4(8) dla instalacji istniejących")?
l) Quiz (10 questions on 06): each question, answer and explanation must match pages 01–05 exactly (numbers, dates, wording); exactly one correct option; correctAnswer indices right.
m) Summary slides on 06 consistent with pages 01–05; consolidated "## Źródła" on 06 — every entry identical to the entry on the topic page it comes from (report differences).
n) Consistency with W2 (read /home/claude/repo/bezp-monit/docs/wyklady-bezp/wyklad-02-analiza-ryzyka/02-hazid-i-hazop.mdx and 05-lopa-i-sil.mdx biogas slides): terms (zamknięcie cieczowe, dodatkowe urządzenie zużywające gaz, zabezpieczenie nadciśnieniowe), TRAS wording, O₂ 1,2% obj., H₂S 100–4000 ppm as process concentration.
