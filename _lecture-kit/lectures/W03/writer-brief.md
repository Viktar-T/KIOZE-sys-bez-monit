# Writer brief — W3 (30.09.2026)

This is the exact prompt given to the three writer agents (template W of `03-agent-prompts.md`, split into three parts that run in parallel, as for W2). Section "COMMON" is identical for all three; each writer then got one "ASSIGNMENT" section (A, B or C).

---

## COMMON

Write Lecture 3 of a Polish university course as Docusaurus MDX pages. You are one of three writers working in parallel on disjoint pages of the same lecture; stay strictly inside your assignment.

Lecture: "W3: Architektura monitoringu i tor pomiarowy" (sidebar_position 3). Folder name: `wyklad-03-architektura-monitoringu`.
Today is 30.09.2026. Law: "stan prawny: wrzesień 2026". Standards catalogues: state on 30.09.2026.
Audience: 5th-semester engineering students of Renewable Energy (OZE) at ZUT Szczecin. Energy engineers, not computer scientists. The lecturer presents from the pages (one `<Slide>` = one screen) and students use them for self-study.

### Read first (in this order)
1. /home/claude/repo/_lecture-kit/01-writing-spec.md — the full writing specification. Follow it strictly (evidence rules, language, format, quality gates).
2. /home/claude/repo/_lecture-kit/05-feedback-and-lessons.md — lessons from the W1 and W2 fact-checks (section 3); avoid every listed error.
3. /home/claude/repo/_lecture-kit/course-ledger.md — terms already defined (§3), key numbers (§4), forward references (§5).
4. /home/claude/repo/_lecture-kit/verified-facts/pl-law-2026-09.md, pl-law-2026-09-W01.md, pl-law-2026-09-W02.md AND pl-law-2026-09-W03.md — authoritative for Polish law, EU acts and PCA. W03 contains Prawo o miarach (t.j. Dz.U. 2022 poz. 2063), Directive 2014/32/EU (MID) and PCA DA-06 wyd. 9 (2025). If notes disagree with them, they win; report the conflict.
5. /home/claude/work/W03/plan.md — the page plan. Slide titles, slide order, minutes per slide, content points and the "Fixed illustrative numbers" are binding (other writers use the same numbers). Adapt wording, not structure. If the evidence does not support a point, drop or hedge it and report.
6. /home/claude/repo/CLAUDE.md and the components /home/claude/repo/bezp-monit/src/components/SlideComponents.jsx and InteractiveQuiz.jsx. Where CLAUDE.md and the kit differ, the kit wins (no emoji, one notes block per slide).
7. The model of form, tone and density — W2 (written to the current spec): /home/claude/repo/bezp-monit/docs/wyklady-bezp/wyklad-02-analiza-ryzyka/ — read index.md, 02-hazid-i-hazop.mdx and 05-lopa-i-sil.mdx completely; and W1 `05-monitoring-a-warstwy-ochrony.mdx` completely (W3 builds on it).

### Depth rule: W1 and W2 are prerequisites — link back, do not redefine
Use the same Polish terms and link to the PAGE (no #anchors):
- `[W1, część 5](../wyklad-01-zagrozenia-ramy-prawne/05-monitoring-a-warstwy-ochrony.mdx)`: monitoring a funkcja ochronna; BPCS, SIS, SIF; kryteria IPL (skuteczna, niezależna, audytowalna); definicja alarmu; rejestracja sekwencji zdarzeń (SOE) and the McMicken BMS data "co do sekundy"; obejście (ang. bypass) and the "zielony ekran" limit; CMS nie zastępuje systemów bezpieczeństwa.
- Expansions fixed in W1 (use them exactly, do not re-explain): BESS (Battery Energy Storage System — bateryjny magazyn energii), BMS (Battery Management System — system zarządzania baterią), EMS (Energy Management System — system zarządzania energią), SCADA (Supervisory Control and Data Acquisition — system nadzoru i akwizycji danych), CMS (Condition Monitoring System — system monitorowania stanu), OT (Operational Technology — technika operacyjna). Expanding an acronym at first use on a page is fine; a new definition is not.
- `[W1, część 4](../wyklad-01-zagrozenia-ramy-prawne/04-normy.mdx)`: IEC 61724-1:2021 already named; standards are voluntary; editions.
- `[W2, część 2](../wyklad-02-analiza-ryzyka/02-hazid-i-hazop.mdx)`: slide "Od wyników HAZOP do wymagań" — the measurement table (napełnienie; ciśnienie/podciśnienie; O₂ w biogazie na stronie tłocznej sprężarki; H₂S w gazie procesowym; H₂S w powietrzu; CH₄) deliberately without accuracy — W3 adds it; raw-biogas H₂S 100–4000 ppm is a process concentration, never compared with NDS; O₂ from 6% air ≈ 1,2% obj.
- `[W2, część 3](../wyklad-02-analiza-ryzyka/03-fmea-i-fmeca.mdx)`: rodzaj uszkodzenia ukrytego, przedział P-F, RCM, FMEA-MSR, D — wykrywalność.
- `[W2, część 4](../wyklad-02-analiza-ryzyka/04-fta-eta-i-bow-tie.mdx)`: CCF (uszkodzenie spowodowane wspólną przyczyną), model współczynnika β, examples "wspólne zasilanie, ta sama błędna kalibracja"; Rosewater & Williams 2015 (BMS voltage calibration, drift).
- `[W2, część 5](../wyklad-02-analiza-ryzyka/05-lopa-i-sil.mdx)`: LOPA of the biogas holder; new SIF = niezależny pomiar napełnienia → sterownik bezpieczeństwa → automatyczne uruchomienie pochodni (TRAS 120, 2.6.3(3)); PFDavg, λDU, T₁, 1oo1/1oo2, testy sprawdzające.
- `[W2, część 6](../wyklad-02-analiza-ryzyka/06-podsumowanie.mdx)`: slide "Od analizy do projektu monitoringu i zabezpieczeń" — SIF specification (funkcja, nastawy, czas zadziałania, PFDavg, T₁).
- Other W3 pages: `./0N-….mdx` (file names in plan.md and below).
- Later lectures as plain text, never links: W4 (protocols beyond the physical signal), W5 (data quality, KPI, alarms), W6 (PV), W7 (CMS, vibration diagnostics), W8 (BMS, gas detection in BESS), W9 (biogas: detector selection, set points, Ex), W10 (Purdue zones, cyber, cause of the KA-SAT outage). At most one sentence each.
- The exercise card may be linked: `[Zadanie 1](../../cwiczenia/karty/zadanie-01-pv-stacja-hulajnog.md)` (15-min records, time stamps "YYYY-MM-DD HH:MM" without time zone; pyranometer, DC voltage/current, module temperature).

### Evidence rules (short form; the spec is binding)
- Facts only from items marked VERIFIED in the notes, in verified-facts, or in coordinator_checks.md. VERIFIED-SECONDARY / SECONDARY → only with a visible hedge ("według …", "wg …", "cytowany w …") and the link. UNVERIFIED / NOT FOUND → omit, or phrase as something to check. TEXTBOOK items in the notes are textbook fundamentals (physics, arithmetic, definitions of well-known techniques) — use them without a numeric claim the notes do not support, and mark them TEXTBOOK in the claims ledger.
- No facts from memory (textbook fundamentals such as Ohm's law, the sampling theorem, first-order step response, GUM formulas excepted). No invented statistics, incidents, quotations, "typical values" or catalogue numbers.
- Small gap checks with WebSearch/WebFetch are allowed on official, standards-body, regulator, national-lab or peer-reviewed sources only; record them as ADDED+VERIFIED with the URL you opened. WebFetch cannot open isap.sejm.gov.pl, api.sejm.gov.pl or legislacja.gov.pl: for Polish law use only verified-facts.
- Every fact slide ends with a `Źródło:` line before the notes. Every URL on your pages must be in your claims ledger. Copy URLs exactly; never construct one.
- Standards: always the edition ("IEC 61724-1:2021"); "jest aktualna", never "obowiązuje". Keep the modality of the source ("should" = "powinien", not "musi"; "may" ≠ "realizuje"). Quote clause numbers only where the notes verified them.
- Own judgements, teaching mappings and design rules without a source: "(ocena własna)". No causal claims the source does not make ("jest zbieżny z", not "wynika z").
- Verbatim quotations: only where the notes give the exact wording; translate into Polish and mark it as a translation where you translate ("w tłumaczeniu własnym"). One short quote per slide at most.

### Form (spec §5, W2 form)
- Front matter of each topic page: `title` and `sidebar_position` exactly as in your assignment.
- `<LearningObjective>` (one sentence) at the top of each topic page; `<SlideContainer>` with the slides; after `</SlideContainer>` a `## Źródła` numbered list.
- Bibliography entry form: `1. Autor A., Autor B. (2018). *Tytuł*. Czasopismo lub wydawca. [https://…](https://…)`; organisation as author: `NREL (2011). *Tytuł*. [https://…](https://…)`; standards: `IEC (2021). *IEC 61724-1:2021 Photovoltaic system performance — Part 1: Monitoring*. [https://…](https://…)`. The link text is the URL itself.
- Illustrative examples with assumed numbers: a paragraph starting with the bold label `**Przykład ilustracyjny — dane umowne.**` exactly (period inside the bold), then one sentence on what the example is built from. No other variants, no `<Example>` component for these. Every such number is asserted in your calc file. A table assembled only from sourced facts is labelled "zestawienie dydaktyczne (ocena własna)".
- Percent without a space ("1,4%", "4,1%", "0–2% obj."); other units with a space ("24 V", "250 Ω", "4,88 µA", "228 m³/h", "10 s"); decimal comma; "×"; KaTeX with `{,}` for the decimal comma (`0{,}289`); no `$` for currency; no emoji; no exclamation marks; no English sentences (English terms only in the acronym expansion or as "ang. …"; an English quotation only if followed by the Polish translation — prefer the Polish translation alone).
- Slide titles exactly as in plan.md (they are anchors); plain text; `type` one of info/tip/warning/danger/success/default.
- One `<InstructorNotes>` per slide: starts with "Czas: ~N min" (N exactly as in plan.md, e.g. "Czas: ~2,5 min"), then 60–150 words of natural spoken Polish, not a repeat of the bullets; where useful one question to the students and one typical misconception. The "Czas" values of a page must sum to that page's minutes in plan.md.
- 4–7 bullets per slide; tables at most about 6 rows × 5 columns; one idea per slide; blank line after every opening tag and before every closing tag; blank lines around tables, lists, mermaid fences and KaTeX display blocks.
- Mermaid: `flowchart TD`/`LR`, ≤ 12 nodes, labels in `["…"]`, raw characters (no HTML entities), no parentheses or special characters outside quotes, short labels.
- Import only the components you use. Components other than SlideContainer, Slide, InstructorNotes, LearningObjective, Example, InteractiveQuiz only with an explicit `title` without emoji.
- Acronyms: expand at first use on each page (students also read single pages): "PLC (Programmable Logic Controller — sterownik programowalny)"; afterwards one term consistently.
- MDX: `&lt;` for a literal `<` in prose (prefer "mniej niż" or "≤"); `\{` `\}` for braces in prose; no HTML comments.

### Shared terminology (all three writers use exactly these)
- Architecture: poziomy 0–4 modelu IEC 62264 (ANSI/ISA-95); PLC (Programmable Logic Controller — sterownik programowalny); RTU (Remote Terminal Unit — zdalna stacja telemechaniki); IED (Intelligent Electronic Device — inteligentne urządzenie elektroniczne); HMI (Human-Machine Interface — interfejs człowiek–maszyna); archiwum danych procesowych (ang. historian); przetwarzanie brzegowe (ang. edge computing) — przetwarzanie lokalne; chmura; sterownik bezpieczeństwa; system ochronny.
- Time: znacznik czasu; UTC (Coordinated Universal Time — uniwersalny czas koordynowany); NTP (Network Time Protocol); PTP (Precision Time Protocol); GNSS (Global Navigation Satellite System — globalny system nawigacji satelitarnej); SOE — rejestracja sekwencji zdarzeń (W1).
- Chain: **tor pomiarowy** (ang. measuring chain, VIM 3.10); czujnik (ang. sensor, VIM 3.8); przetwornik pomiarowy (ang. measuring transducer, VIM 3.7); przetwornik z wyjściem 4–20 mA (ang. transmitter) — "przetwornik"; układ pomiarowy (VIM 3.2); przedział pomiarowy / zakres pomiarowy (VIM 4.7); rozdzielczość (VIM 4.14); pętla prądowa 4–20 mA; żywe zero (ang. live zero); przetwornik analogowo-cyfrowy (A/C, ang. ADC); LSB (Least Significant Bit — najmniej znaczący bit); interwał próbkowania; interwał zapisu (IEC 61724-1 3.2, 3.4); aliasing; filtr antyaliasingowy; czas odpowiedzi na skok (VIM 4.23), t₉₀; strefa nieczułości (ang. deadband); kompresja danych.
- Metrology: dokładność pomiaru; błąd pomiaru; niepewność pomiaru; największy dopuszczalny błąd pomiaru (MPE, ang. maximum permissible error); niepewność standardowa; metoda typu A / metoda typu B; rozkład prostokątny; współczynnik wrażliwości; **niepewność standardowa złożona** (word order of the Polish GUM guide); niepewność rozszerzona; współczynnik rozszerzenia k; budżet niepewności; wzorcowanie; spójność pomiarowa; dryft (ang. instrumental drift, VIM 4.21); legalizacja (metrologia prawna); GUM means the guide JCGM 100:2008 — when you mean the Polish office write "Główny Urząd Miar" in full.
- Failures: sygnał zamrożony; nasycenie zakresu; niebezpieczne uszkodzenie niewykrywalne / wykrywalne (DU/DD, SINTEF); pokrycie diagnostyczne (DC); NAMUR NE 43, NE 107; UPS (Uninterruptible Power Supply — zasilacz bezprzerwowy).
- Biogas: zbiornik biogazu (membranowy zbiornik gazu); napełnienie; urządzenia sygnalizujące napełnienie minimalne i maksymalne; zabezpieczenie nadciśnieniowe (z zamknięciem cieczowym — W2 term); dodatkowe urządzenie zużywające gaz (np. pochodnia) — W2 term; agregat kogeneracyjny (CHP); strona tłoczna sprężarki; odsiarczanie; analizator procesowy vs detektor gazu (urządzenie ostrzegawcze); linia poboru próbki; czas bezpieczeństwa procesu (ang. process safety time).
- "stan prawny: wrzesień 2026".

### Notes — where things are
All W3 notes: /home/claude/research/W03/ — architecture.md, time_sync.md, measurement_chain.md, metrology_uncertainty.md, pv_monitoring.md, pv_monitoring_gaps.md, sensors_oze.md, failure_diagnostics.md, biogas_measurements.md, gaps_round2.md, coordinator_checks.md. `coordinator_checks.md` overrides the other notes where they disagree (Reda tables, JCGM editions, PCA DA-06 edition 9). Each assignment lists which files to read completely and which to search. The notes are long: read them in chunks.

### Your outputs
- Pages: /mnt/user-data/outputs/lecture/wyklad-03-architektura-monitoringu/<your files> (create the folder if needed; do not touch the other writers' files).
- Claims ledger: /home/claude/work/W03/claims-<A|B|C>.md — markdown table: file | slide title | claim (short) | source URL | status (VERIFIED / VERIFIED-SECONDARY / SECONDARY / ADDED+VERIFIED / INFERENCE / TEXTBOOK / ILLUSTRATIVE / UNVERIFIED→hedged). One row per claim, including every URL on your pages. Where the status comes from a note, add the note file and finding number in the claim cell (e.g. "time_sync #20").
- Calculation checks: /home/claude/work/W03/calc_<A|B|C>.py — start from /home/claude/repo/_lecture-kit/tools/calc_template.py; assert every displayed number that results from arithmetic (conversions, ratios, shares, sums, illustrative examples, quiz numbers). Sections named after the page and slide. Use exactly the values written on the page as `on_page`.

### Quality gates (run them; fix until they pass for YOUR files)
- `python3 /home/claude/work/W03/calc_<A|B|C>.py` → ALL CHECKS PASSED.
- `python3 /home/claude/repo/_lecture-kit/tools/lint_lecture.py /mnt/user-data/outputs/lecture/wyklad-03-architektura-monitoringu --notes /home/claude/research/W03 /home/claude/repo/_lecture-kit/verified-facts --claims /home/claude/work/W03/claims-A.md /home/claude/work/W03/claims-B.md /home/claude/work/W03/claims-C.md` → fix every PROBLEM and WARN that concerns your files. Problems caused by files that do not exist yet or belong to another writer are expected while the others work; ignore them (e.g. a missing claims file of another writer, a missing index.md).
- `node /tmp/lecture-tools/check_mdx.mjs <your files>` → MDX CHECK OK.
- Self-check before reporting: `grep -n " %" <your files>` finds no percent with a space; `grep -n "Przykład ilustracyjny" <your files>` shows only the exact bold label; `grep -n "obowiązuj" <your files>` is used only for law, never for a standard; `grep -nP "[\x{1F300}-\x{1FAFF}]" <your files>` finds nothing.

### Final message to the coordinator (≤ 400 words)
Files and slides per page; minutes per page; claims hedged or left out on purpose (and why); items the lecturer must verify; deviations from plan.md; any check you could not run.

---

## ASSIGNMENT A — pages 01 and 02 (17 slides, 38 min)

Files:
- `01-cele-architektura-i-czas.mdx` — title "Cele, architektura i czas", sidebar_position 1, 20 min, 9 slides.
- `02-tor-pomiarowy.mdx` — title "Tor pomiarowy od czujnika do zapisu", sidebar_position 2, 18 min, 8 slides.
Slides and content: plan.md, sections "01-…" and "02-…". Mermaid 1 (IEC 62264 levels with OZE examples, TD, ≤ 11 nodes) is on "Poziomy architektury według IEC 62264"; mermaid 2 (the chain, LR, ≤ 9 nodes) on "Tor pomiarowy według VIM".

Notes — read these completely:
- /home/claude/research/W03/architecture.md
- /home/claude/research/W03/time_sync.md
- /home/claude/research/W03/measurement_chain.md
- /home/claude/research/W03/coordinator_checks.md
Search (grep) as needed: pv_monitoring.md (1.4 purposes quote; 1.7 definitions 3.2–3.4; clause 6.2 heading in time_sync 22), pv_monitoring_gaps.md (KQ4 T13-03 quotes; 1.3 Lindig 2020), gaps_round2.md (Q5 buffering: not found; Q6 IEC 62264-1 webstore), verified-facts/pl-law-2026-09-W03.md (one sentence on billing meters on 01 slide 1).

Specific points:
- 01 slide 1: the five purposes are your grouping "(ocena własna)"; each purpose gets its own source; the billing sentence: "Liczniki rozliczeniowe energii podlegają metrologii prawnej: ustawa z 11 maja 2001 r. – Prawo o miarach (t.j. Dz.U. 2022 poz. 2063) i dyrektywa 2014/32/UE (MID, m.in. liczniki energii elektrycznej czynnej MI-003); stan prawny: wrzesień 2026. Tym zakresem wykład się nie zajmuje." (you may shorten; use the ISAP and EUR-Lex URLs from verified-facts W03).
- 01 slide 2: IEC 62264-1:2013 is the current IEC edition (webstore; gaps_round2 Q6); ANSI/ISA-95.00.01-2025 is new (architecture 2.2) — say "w 2025 r. ISA wydało nowe wydanie części 1". Level definitions from the IEC preview (architecture 2.4) in Polish translation. Time frames only with "wg specyfikacji OPC 10030 (OPC Foundation)". Purdue: one bullet, structural picture only; NIST SP 800-82r3 uses it for network segmentation (architecture 2.6); zones in W10. Do NOT claim Purdue = Williams 1992 (UNVERIFIED).
- 01 slide 3: NIST SP 800-82r3 quotes are in English in the notes — give Polish translations "(tłumaczenie własne)". RTU: note that NIST's glossary definition is narrow/historical (radio, remote sites) — present the role, not that definition as the only one.
- 01 slide 4: the biogas row has no source → "(ocena własna)". Wind SCADA resolution only as architecture 4.3 verified. BESS: DOE ESHB 2020 ch. 15 as verified (4.4). Do not use 4.5/4.6.
- 01 slides 5–6: NREL comms outages (5.1, abstract as verified); T13-03 availability wording (pv_monitoring_gaps KQ4 4.1: "99% or higher", "less than 95% indicates a low quality data acquisition system"); local autonomy rules and buffering "(ocena własna)". ENERCON: "według komunikatu prasowego ENERCON z 28.03.2022 (przedruk w serwisie windfair.net)" — VERIFIED-SECONDARY, exactly what 6.1 says; no turbine count unless hedged as in 6.2; cause → W10.
- 01 slide 8: NERC PRC-028-1 dates (Board 8.10.2024, FERC 20.02.2025) and ±1 ms / ±100 ms exactly as time_sync 20; PRC-002-3 ±2 ms (19) — note the notes say the PRC-002 version in force was not checked: write "PRC-002-3 (wymaganie R10)" as the document read; Macii & Rinaldi classes as the authors' classification. IERS/CGPM leap-second line exactly as time_sync 13–14. GPS rollover as 10.
- 01 slide 9: the Interim Report sentence is quoted via NERC PRC-002-3 → "cytowany w uzasadnieniu standardu NERC PRC-002-3"; Recommendation 28 title (25); implementation report 2006 (26); follow-up chain (27); NASPI case study with hedged date (28).
- 02: follow plan.md and measurement_chain "Inferences" I1–I9, with the fixed numbers. IEC 60381-1: edition and stability date only (2.1–2.2). HART numbers from FieldComm (3.1–3.2); the 230–600 Ω / 250 Ω values are TI (VERIFIED-SECONDARY) → "wg noty aplikacyjnej TI". The sampling theorem as a textbook fact (do not cite Shannon's paper unless you open it). GUM F.2.2.1 for u = q/√12 (measurement_chain 4.2). VIM definitions: quote in Polish translation "(tłumaczenie własne)" with the jcgm.bipm.org URL of each entry used.
- calc_A.py: loop budget (675 Ω, 35 Ω, 0,7 V, 285 Ω, 1/3/5 V), ADC (4,88 µA, 3276,8, 1,53 ppm, 0,44 ppm; 16-bit if shown), aliasing (1 Hz), averaging (50 ppm), t₉₀/τ (13 s, 54%), deadband example, any unit conversions (ft → m if you show them on 01).

## ASSIGNMENT B — pages 03 and 04 (13 slides, 29 min)

Files:
- `03-niepewnosc-i-wzorcowanie.mdx` — title "Niepewność pomiaru, wzorcowanie i dryft", sidebar_position 3, 14 min, 6 slides.
- `04-czujniki-i-monitoring-pv.mdx` — title "Czujniki w instalacjach OZE i klasy monitoringu PV", sidebar_position 4, 15 min, 7 slides.
Slides and content: plan.md, sections "03-…" and "04-…". Mermaid 3 (traceability chain, TD, ≤ 6 nodes) is on "Wzorcowanie i spójność pomiarowa".

Notes — read these completely:
- /home/claude/research/W03/metrology_uncertainty.md
- /home/claude/research/W03/pv_monitoring.md
- /home/claude/research/W03/pv_monitoring_gaps.md
- /home/claude/research/W03/sensors_oze.md
- /home/claude/research/W03/coordinator_checks.md (C1 Reda tables and the rule not to recompute Reda's RSS; C2 JCGM editions; C3 PCA DA-06 wyd. 9)
- /home/claude/repo/_lecture-kit/verified-facts/pl-law-2026-09-W03.md (PCA DA-06 section)
Search (grep) as needed: measurement_chain.md (Q1 VIM 3.x/4.x; 4.2 GUM F.2.2.1), biogas_measurements.md (3.3 electrochemical ageing, 4.2 T 023 Table 1), gaps_round2.md (Q4 IEC 61869-2).

Specific points:
- 03 slide 1: Polish definition of dokładność pomiaru from the GUM Vademecum (metrology 2.2) with its URL; VIM 2.13 Note 1 only as the notes allow (the exact English wording is marked TEXTBOOK — paraphrase "wg VIM dokładność nie jest wielkością i nie ma wartości liczbowej" citing the VIM page, and mark the claim in the ledger). MPE Polish term from the VIML translation (2.4).
- 03 slide 2: EA-4/02 M:2022 via the ENAC-hosted copy (4.1) — say it is the EA document hosted by ENAC. Polish terms exactly from the Polish GUM guide (2.1).
- 03 slide 3: the budget exactly as plan.md "Fixed illustrative numbers" (u_i: 0,289 / 0,200 / 0,577 / 0,058 / 0,0088; u_c 0,678 → "0,68%"; U 1,36 → "1,4%"; variance shares 72,5 / 18,1 / 8,7 / 0,7 / ≈ 0). Table ≤ 6 rows × 5 cols + a KaTeX line. Reda: only published values, labelled as such (coordinator_checks C1). Mention in the notes that part 5 uses this U.
- 03 slide 4: mermaid with Główny Urząd Miar written in full; PCA DA-06 wyd. 9 facts only from verified-facts W03; VIM 2.39 Polish wording from the Vademecum (truncated in the notes — quote only the part given, or paraphrase); "wzorcowanie to nie adiustacja" only as a paraphrase marked TEXTBOOK (VIM 2.39 Note 2 not opened) or omit.
- 03 slide 5: ILAC-G24:2022 / OIML D 10:2022 as verified (5.1); drift examples only as verified in the notes named in plan.md.
- 03 slide 6: RG 1.105 Rev. 4 quotes as verified (6.1), translated; definitions of analytical limit etc. are NOT verified → describe the concept in your own words "(ocena własna, na podstawie RG 1.105)"; no ISA text quoted.
- 04 slide 1: ISO 9060:2018 class names: hedge (pv_monitoring_gaps 2.1 SECONDARY) or use T13-03's 1990 names (2.3 VERIFIED) — do not present class limits (2.2 SECONDARY) as facts; if you give any, hedge "wg producenta (Hukseflux)". Reda Table 10 and Table 3 spectral row as published (C1). Fuke & Kottantharayil 2025 only as pv_monitoring 8.1 verified.
- 04 slide 2: Sandia model: if you show a number, compute it in calc_B.py with coefficients copied from pv_monitoring 5.4 (state the mounting type) and label it "Przykład ilustracyjny — dane umowne" (the irradiance/wind/ambient values are assumed).
- 04 slide 3: CT class definitions are not verified (gaps_round2 Q4) — no class values; IEC 61869-2:2012 edition only; DC sensing review as verified (sensors 2.3); IEC 62053-22 classes are in its title (pv_monitoring 1.6).
- 04 slides 6–7: decision D2 in plan.md (Classes A and B only; C eliminated). No Table 1/3/4 numbers as facts. Slide 7 is a "zestawienie dydaktyczne (ocena własna)" without assumed numbers; exercise link as in COMMON. The IEC 61724-1 stability date 2026 → "sprawdź przed zajęciami, czy nie ukazało się wydanie 3" (pv_monitoring 1.10, pv_monitoring_gaps 3.4).
- calc_B.py: the whole budget (each u_i, u_c, U, shares), any Reda arithmetic you show (only the sum 8,9 may be recomputed; RSS 4,1% is quoted, not asserted — or assert it with a comment "reported value, recomputation of rounded rows gives 4,04"), Sandia example if shown, T13 intervals if converted.

## ASSIGNMENT C — pages 05, 06 and index.md (9 slides + quiz + index, 23 min)

Files:
- `05-uszkodzenia-toru-i-przyklad-biogazowy.mdx` — title "Uszkodzenia toru pomiarowego i przykład biogazowy", sidebar_position 5, 18 min, 7 slides.
- `06-podsumowanie.mdx` — title "Podsumowanie i quiz", sidebar_position 6, 5 min, 2 slides + `## Sprawdź się` (10 questions) + consolidated `## Źródła`.
- `index.md` — per plan.md "index.md" and spec §5 (plan table with the six page titles and minutes exactly as in plan.md; "Najważniejsze źródła" numbered, 6 entries; "Powiązania" as in plan.md; W4 and later plain text).
Slides and content: plan.md, sections "05-…", "06-…" and "index.md". Mermaid 4 (fill-level SIF timing, LR, ≤ 8 nodes) is on "Przykład: ile czasu daje zbiornik biogazu".

Notes — read these completely:
- /home/claude/research/W03/failure_diagnostics.md
- /home/claude/research/W03/biogas_measurements.md
- /home/claude/research/W03/gaps_round2.md
- /home/claude/research/W03/coordinator_checks.md
Read also: W2 pages 02-hazid-i-hazop.mdx (slides "Przykład HAZOP: ciśnienie w zbiorniku biogazu", "Przykład HAZOP: skład biogazu", "Od wyników HAZOP do wymagań") and 05-lopa-i-sil.mdx (the two "Przykład LOPA" slides) — reuse their terms and numbers exactly.
Search (grep) as needed: metrology_uncertainty.md (only for the U = 1,4% link), measurement_chain.md (2.4 live zero, 8.3 250 Ω), architecture.md and time_sync.md (for 06 and the quiz).

Specific points:
- 05 slide 1: SINTEF numbers exactly as failure_diagnostics 3.1–3.3 and 4.1–4.2 (the 30–35% "undetected" is an inference → "(ocena własna na podstawie SINTEF)").
- 05 slide 2: NE 43/NE 107 editions verified (1.1, 2.1); mA values hedged "wg literatury branżowej" (gaps_round2 1.4 recommends the exact wording); NE 107 signal meanings are TEXTBOOK/UNVERIFIED → name only "cztery kategorie sygnałów statusu" if the notes support the count, otherwise just "sygnały statusu". Voltages 0,9 V / 5,25 V at 250 Ω in calc_C.py.
- 05 slide 3: IEC 62040-3 edition as verified (5.1); VFI/VI/VFD not verified → omit. SINTEF DD definition via sensor comparison (4.1).
- 05 slide 4: Buncefield only paragraphs 11, 12, 14, 20, 26, 99 as verified (7.1–7.5); the MIIB report URL from the notes; tank number not verified → omit. Texas City: 8.1, 8.2 (quote the false indication exactly as the notes give it), 8.3, 8.4, 8.7; 15 deaths/180 injured is UNVERIFIED in the notes → include only if you open the CSB report and verify it (then ADDED+VERIFIED), otherwise omit. Imperial units with metric in brackets as in the report (assert conversions if you compute any).
- 05 slide 5: table from biogas_measurements Inferences A, with sourced entries (TRAS 120 2.6.3(3), 2.4(8), 1.5.2.2.1; T 023 Table 1; SVLFG) and "(ocena własna)" entries clearly separated; the gas-space pressure row has no number (coordinator_checks C5). Keep the W2 wording for TRAS 2.6.3(3). No accuracy numbers from sources (none exist) — the slide says so.
- 05 slide 6: numbers exactly as plan.md (228 m³/h; 26 min; U = 1,4% → 14 m³ → 3,6 min; 5% → 13 min). H_u of methane 9,97 kWh/m³ is a textbook constant (say "w warunkach normalnych"). Process safety time definition: VERIFIED-SECONDARY (biogas 6.2 / gaps_round2 2.2) → "definicja IEC 61511-1 w brzmieniu cytowanym przez …"; no clause number. Link part 3 for U and W2 part 5/6 for the SIF.
- 05 slide 7: T 023 / T 021 statements as verified (5.1–5.4, 3.3–3.4); transport delays 15 s and ≈ 170 s (calc). No analyser t₉₀ numbers (none verified).
- 06: two slides as plan.md; the quiz (10 questions, topics in plan.md) must match the slides of ALL pages exactly — pages 01–04 are written in parallel by writers A and B: write 05, index.md and the 06 slides first; then write the quiz and the consolidated bibliography from the finished pages 01–04 if they exist, otherwise from plan.md, and report which questions depend on pages you could not read (the coordinator will send you a second round to align them). Consolidated "## Źródła" grouped by theme as in plan.md, entries copied exactly from the topic pages.
- index.md: Najważniejsze źródła — GUM (JCGM 100:2008, BIPM PDF from the notes), VIM (JCGM 200:2012, jcgm.bipm.org online VIM URL from the notes), NIST SP 800-82r3 (DOI URL), IEA PVPS T13-03:2014 (URL from pv_monitoring_gaps KQ4), Reda 2011 (URL from coordinator_checks C1), TRAS 120 (the same URL as W2 index). Minutes in the plan table must equal the Czas sums of each page (the lint checks it).
- calc_C.py: NE 43 voltages; fill-time example (1250 kW, 125,4 m³/h, 228 m³/h, 26 min, 14 m³, 3,6 min, 50 m³, 13 min, O₂ 1,2% if repeated); transport delays (0,25 l, 15 s; 1,41 l, 170 s, 2,8 min); every computational quiz answer (1,53 ppm; 50 ppm; 0,29% or 1,4%; 26 min …).
