# Fact-check 3 — W3 (30.09.2026)

Final report of fact-checker 3 (prompt: factcheck-prompts.md, CHECKER 3).

## Checker 3: pages 05 and 06, W3

No critical or major errors. The biogas-example calculations, the quiz key and the consolidated bibliography are correct. The 11 issues below are all minor: attribution, precision, sourcing or terminology.

| file | slide title | quoted text | problem | severity | evidence URL | proposed corrected Polish text |
|---|---|---|---|---|---|---|
| 05 (also 06 Q9 and the summary bullet "Uszkodzenia") | Buncefield i Texas City | „Wniosek raportu (pkt 99): systemy ochrony…” | Paragraph 99 reads: "The Baker report emphasised that … That lesson again must be drawn from the Buncefield incident." The lesson comes from the Baker report on Texas City; the Buncefield report only adopts it. | minor | https://www.icheme.org/media/10706/buncefield-report.pdf | „Raport (pkt 99) przywołuje wniosek raportu Bakera po Texas City — systemy ochrony bezpieczeństwa procesowego nie powinny polegać na reakcji operatora na alarmy, a zabezpieczenie przed przepełnieniem powinno być niezależne od zwykłego monitoringu ruchowego — i stwierdza, że tę lekcję trzeba wyciągnąć także z Buncefield.” |
| 05 | Jak zawodzi tor pomiarowy (and notes) | „Dane SINTEF … DC … 65% … 70%”; notes: „autodiagnostyka przetwornika wykrywa około dwóch trzecich” | Only λDU comes from field data. The handbook says "Expert judgements have been important … to establish diagnostic coverage", and certificates were also used. SINTEF's DC also counts external diagnostics, not only the transmitter's own self-diagnostics. | minor | https://www.sintef.no/globalassets/project/pds/presentations/pds-data-handbook-2021-example-pages-2021-09-07.pdf | „Wg SINTEF (λDU z danych eksploatacyjnych norweskiego przemysłu naftowego i gazowego; DC ustalone m.in. na podstawie ocen ekspertów i certyfikatów) pokrycie diagnostyczne — udział uszkodzeń niebezpiecznych wykrywanych przez testy automatyczne (autodiagnostyka urządzenia i diagnostyka zewnętrzna) — wynosi…”; notes: „diagnostyka automatyczna wykrywa około dwóch trzecich…” |
| 05 | Sygnalizacja uszkodzeń: NAMUR NE 43 i NE 107 | „Wydanie z 2025 r. ujednolica ich kolory i symbole” | The 2025 NAMUR news item is an abstract ("This document specifies…"), not a list of changes. LED representation was already added in 2017 (8.3.3). Separately, "zastąpiło wyd. 2017-04-10" is an inference because the 2025 item names no predecessor; the inference is acceptable. | minor | https://www.namur.net/en/publications/news-archive/ne107-self-monitoring-and-diagnostics-of-field-devices-has-been-revised.html ; https://www.namur.net/en/publications/news-archive/ne-107-has-been-revised.html | „Zalecenie (wyd. 2025) określa jednolite kolory i symbole sygnałów statusu na ekranach i diodach LED.” |
| 05 | Diagnostyka, porównanie czujników i zasilanie | „UPS (Uninterruptible Power Supply — zasilacz bezprzerwowy)” | The standard expands UPS as "uninterruptible power systems"; the PN-EN 62040 series is titled "Systemy bezprzerwowego zasilania (UPS)". Only the iTeh sample is cited, not the official page. The IEC stability date (2026) has been reached. | minor | https://webstore.iec.ch/en/publication/60140 | „UPS (ang. uninterruptible power system — system bezprzerwowego zasilania)”; add the IEC webstore link as the source. |
| 05 | Zbiornik biogazu: od HAZOP i LOPA do specyfikacji | „TRAS 120 (alarm i rejestracja)” | The clause is identifiable: the sentence „Das Ansprechen von Über- oder Unterdrucksicherungen…” is TRAS 2.6.3(4). | minor | TRAS 120 PDF | „TRAS 120, 2.6.3(4) (alarm i rejestracja)” |
| 05 | Przykład: ile czasu daje zbiornik biogazu | „wartość opałowa metanu … stała z tablic” | The value is correct but has no source. An official agency source exists: FNR, *Basisdaten Bioenergie Deutschland 2024*, p. 51: „1 m³ Methan 9,97 kWh”. | minor | https://www.fnr.de/fileadmin/Projekte/2023/Mediathek/Broschuere_Basisdaten_Bioenergie_2023_web.pdf | „…ok. 9,97 kWh/m³ (FNR 2023, Basisdaten Bioenergie Deutschland 2024, s. 51)”, plus a bibliography entry. |
| 05 | Przykład: ile czasu daje zbiornik biogazu | „definicja IEC 61511-1” | The edition is missing. IEC 61511-1:2016 (ed. 2.0, +AMD1:2017, stability date 2029) is current; the paper cites 3.2.52.1. | minor | https://webstore.iec.ch/en/publication/24241 | „definicja IEC 61511-1:2016 (3.2.52.1) w brzmieniu cytowanym przez…” |
| 05 (and 06 Q10) | Przykład: ile czasu daje zbiornik biogazu | „niezależność urządzenia maksimum jest ważniejsza niż jego precyzja (Buncefield)” | At Buncefield the independent switch existed but was inoperable (para 20), so the lesson is independence plus proven function. Q10 attaches this judgement to TRAS without "(ocena własna)", so it reads as a TRAS statement. | minor | IChemE PDF, para 20 | Slide: „…niezależność i potwierdzona testami sprawność urządzenia maksimum są ważniejsze niż jego precyzja (por. Buncefield: niezależny wyłącznik był niesprawny)”. Q10: „… ważniejsza niż precyzja pomiaru (ocena własna).” |
| 05 | Pomiary składu gazu i czas odpowiedzi | „zbyt wolna i pośrednia … pomiar O₂ jest rozwiązaniem TRAS 120 (2.4(8)) dla instalacji istniejących” | "Zbyt wolna" contradicts the slide's own numbers (15 s to 2,8 min against a 26-min margin). The TRAS condition is also missing: the O₂ rule applies only „soweit … nicht gewährleistet”. | minor | TRAS 120 PDF | „…jest pośrednia i zależy od sprawności linii poboru (kondensat, adsorpcja, cykl przełączania), więc nie powinna być główną warstwą ochrony (ocena własna). … pomiar O₂ TRAS 120 (2.4(8)) wymaga w instalacjach istniejących, w których nie zapewniono ograniczenia poboru gazu przed zadziałaniem zabezpieczenia podciśnieniowego.” |
| 05 | Pomiary składu gazu i czas odpowiedzi | „czas ustalania wskazania $t_x$” | t₉₀ now has three Polish names in this lecture: „czas odpowiedzi na skok” (02, VIM 4.23), „czas odpowiedzi T90” (04) and this one. That breaks spec §4 (one term used consistently), and the slide title itself says „czas odpowiedzi”. | minor | — | „**czas odpowiedzi** $t_x$ (niem. Einstellzeit; por. czas odpowiedzi na skok, [część 2](./02-tor-pomiarowy.mdx))” |
| 05 | Buncefield i Texas City | „zakres pomiarowy obejmował normalną pracę, a nie awarię” | Incomplete. A range problem alone would give a saturated reading, but the transmitter showed 78% and a falling level. CSB also shows LT-5100 was calibrated for specific gravity 0.8 (Appendix S), and the key findings say the indicator "showed that the tower level was declining". | minor | https://www.csb.gov/assets/1/20/csbfinalreportbp.pdf | „…zakres obejmował tylko normalną pracę, a przetwornik był wzorcowany dla gęstości względnej 0,8 (CSB, dodatek S); przy przepełnieniu pokazywał poziom wiarygodny i malejący.” |
| 06 | Sprawdź się, Q10 | „ok. 14 m³ … ok. 3,6 min” | 14 m³ ÷ 228 m³/h = 3,7 min. The slide on page 05 correctly uses 13,6 m³. | minor | — | „…czyli ok. 13,6 m³” |
| 06 | Q2; summary bullet „Architektura” | local protection stated as fact | On page 01 all three rules are „Zasada (ocena własna)”. Q2 and the summary mark only two of them (or none) as own judgement. | minor | — | Q2: „Wszystkie trzy to zasady projektowe z części 1 (ocena własna): …” |

### Verified OK

- **SINTEF PDS Data Handbook:**
  - DU/DD/S definitions (p. 16) and Table 3.1 values: λDU 0,48 / 1,9 / 0,1 / 1,4; DC 65 / 70 / 70 / 65%; offshore and some onshore Norwegian oil and gas data.
  - 1,9 / 0,48 = 3,96, so "ok. 4 razy" holds.
  - No edition newer than 2021: SINTEF Store sells the 2021 edition (ISBN 978-82-14-06468-1).
- **NE 43:**
  - Title, edition 2021-07-26, previous 2003-02-03 and what changed, as the slide says. NAMUR's full name as written. DIN Media shows 8 pp., current edition.
  - Voltages at 250 Ω are correct: 0,95 / 5,125 / 0,9 / 5,25 V.
  - The mA levels are adequately hedged. I found no official or peer-reviewed source for them: only vendor pages. The Endress+Hauser patent DE102004019392A1 (2005) quotes ≤ 3,6 / ≥ 21 mA, but it is also manufacturer text, so it is not a better source.
- **NE 107:** edition 2025-07-15; four signals F/C/S/M; 2017 edition dated 2017-04-10 (its predecessor was 2006-06-12).
- **IEC 62040-3:** ed. 3.0, 2021-04, title as on the slide.
- **Buncefield:**
  - Report is the Competent Authority's "Buncefield: Why did it happen?", February 2011.
  - Paragraphs 11 (03:05 flatline), 12 (05:37 roof vents), 14 (06:01 alarm, explosion almost immediately), 20 (padlock) and 26 (stuck 14 times since 31.08.2005) are verbatim-consistent.
  - The archive URL is indexed as this report; the live HSE URL returns 404.
- **Texas City (CSB):** 15 killed and 180 injured (p. 17); span sentence (p. 35); Figure 6 quote (p. 57); key finding (p. 23).
- **TRAS 120:** 2.6.3(3); 2.4(8); 1.5.2.2.1 (CH₄ 45–75, O₂ 0–2, H₂S 0–0,4% obj.).
- **Other biogas sources:**
  - LfU 2.2.2.2.4, "kontinuierlich … anzuzeigen" (July 2024).
  - BMWFJ 7.2.2: sight glass or rope indicator.
  - SVLFG TI 4 3.6.1.5: "Raumluftüberwachung".
  - DGUV T 021: "Hersteller zu befragen" and the 50% sensitivity rule.
  - DGUV T 023 (213-057, 10/2023): t(x), Ansprechzeit, sampling lines, cycle time, alarm thresholds, condensate and adsorption. Table 1: the catalytic sensor needs ≥ 10% O₂ and its range is ≤ UEG; the „(0) bis 100 %” in the extraction belongs to the thermal-conductivity column.
  - Both DGUV publisher pages confirmed.
- **Beharrysingh et al. (2018):** authors, Fluor, symposium 23–25.10.2018; the definition includes "or the basic process control system" and cites 3.2.52.1.
- **Calculations, all recomputed:**
  - Biogas: 1250 kW; 125,4 m³/h CH₄; 227,96 m³/h biogas; 26,3 min; 13,6 m³ → 3,58 min; 50 m³ → 13,2 min; 4,39 h.
  - Transport delays: 0,251 l → 15,1 s; 1,414 l → 169,6 s.
  - 9,97 kWh/m³ is correct: NIST ΔcH° −890,7 kJ/mol gives about 35,9 MJ/m³ (net, real gas, 0 °C).
- **Quiz:** 10 questions, one correct option each, all indices correct, and the numbers match pages 01–05. Four questions are computational, as the notes say.
- **06 bibliography and links:** all 53 entries are identical to the topic-page entries (checked by script), and every relative link resolves.
- **Consistency with W2:** same terms and values: dodatkowe urządzenie zużywające gaz, zabezpieczenie nadciśnieniowe, CCF wording, O₂ 1,2% obj., H₂S up to 4000 ppm as a process concentration, the SIF chain, and the TRAS citation form used in W2 05.

### Could not verify

- The NE 43:2021 text itself: it is paywalled, so neither the mA levels nor the control-system margin could be checked against it.
- The HSE archive PDF: it returns 403 to the tool, so I confirmed its identity only through the search index title. The content was checked in the IChemE copy.
- DGUV T 023 Table 1 layout: I read it only through the summariser, which transposed it, so the column attribution is an inference.
- IEC 61511-1 clause 3.2.52.1: confirmed only in the secondary source.
- Whether SVLFG TI 4 has an edition newer than XI/2015: none found.

