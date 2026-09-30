# Fact-check 2 — W3 (30.09.2026)

Final report of fact-checker 2 (prompt: factcheck-prompts.md, CHECKER 2).

Fact-check of W3, checker 2: pages 03 and 04. No files were edited.

The calculations and nearly all citations check out. There are **two major issues**, both on the 04 slide "Wiatr": the 2022 restructuring of the IEC 61400-12 series is described wrongly. There are also 12 minor issues.

## Issues

| # | File | Slide | Quoted text | Problem | Sev. | Evidence | Proposed Polish text |
|---|---|---|---|---|---|---|---|
| 1 | 04 | Wiatr (notes) | "pomiary krzywej mocy, łącznie z anemometrią gondolową, zebrano w jednej normie, więc nie cytujemy już osobnej części 12-2" | False. The 2022 revision split the series. **IEC 61400-12-2:2022 ed. 2.0** (nacelle anemometry, 5.09.2022) is current. Measurement content was moved to separate standards. | major | https://webstore.iec.ch/en/publication/68500 | "W 2022 r. serię IEC 61400-12 przebudowano: krzywą mocy opisuje IEC 61400-12-1:2022, wariant z anemometrem gondolowym IEC 61400-12-2:2022, a wzorcowanie i klasyfikację anemometrów IEC 61400-50-1:2022." |
| 2 | 04 | Wiatr | "zastąpiła … IEC 61400-12-2:2013 (anemometria gondolowa). Załączniki normatywne: F … K" | The "cancels and replaces" sentence is shared boilerplate, also in 12-2:2022 and 50-1:2022. The 12-1:2022 Introduction says cup/sonic calibration, classification and uncertainty "are given in IEC 61400-50-1". In the contents, annexes F, I, J and K are one page each (pp. 116, 123–125). The substance is in **IEC 61400-50-1:2022 ed. 1.0** (16.11.2022), clauses 6–9. Add it to the Źródła. | major | iTeh 12-1 sample (already cited); https://cdn.standards.iteh.ai/samples/105556/722392eb3aa44751a32a7172b86f7ced/IEC-61400-50-1-2022.pdf ; https://webstore.iec.ch/en/publication/69216 | "IEC 61400-12-1:2022 (wyd. 3.0 z 5.09.2022, z poprawką z 05.2025) powstała w przebudowie serii, która zastąpiła IEC 61400-12-1:2017 i IEC 61400-12-2:2013. Wzorcowanie w tunelu, klasyfikację i ocenę anemometrów czaszowych i ultradźwiękowych oraz ich porównanie na miejscu opisuje teraz IEC 61400-50-1:2022 (wyd. 1.0, rozdz. 6–9); w IEC 61400-12-1:2022 zostały jednostronicowe zał. F, I, J, K." |
| 3 | 03 | Wzorcowanie i spójność pomiarowa | "tłumaczenie własne; początek definicji jak w Vademecum" / "często błędnie nazywaną „samokalibracją” … ze sprawdzeniem wzorcowania" | The Vademecum has the full official Polish definition, and the own translation drops "wraz z ich niepewnościami" for the indications. Vademecum wording of Note 2: "…często mylnie nazywaną „samowzorcowaniem”, ani z weryfikacją wzorcowania". | minor | GUM Vademecum 2022 (cited) | Quote the Vademecum verbatim: „działanie, które w określonych warunkach, w pierwszym kroku ustala zależność pomiędzy odwzorowywanymi przez wzorzec pomiarowy wartościami wielkości wraz z ich niepewnościami pomiaru, a odpowiadającymi im wskazaniami wraz z ich niepewnościami, natomiast w drugim kroku wykorzystuje tę informację do ustalenia zależności pozwalającej uzyskać wynik pomiaru na podstawie wskazania”; „…z adiustacją układu pomiarowego, często mylnie nazywaną „samowzorcowaniem”, ani z weryfikacją wzorcowania”. |
| 4 | 03 | GUM w czterech krokach; Źródła 2 | "z poprawką Amd.1:2026" | In PN usage an Amendment is a "zmiana"; "poprawka" means a corrigendum. BIPM title: "AMENDMENT 1: Nonlinearity in measurement models". | minor | https://www.bipm.org/en/committees/jc/jcgm/publications | "ze zmianą 1 (JCGM 100:2008/Amd.1:2026, nieliniowość modeli pomiaru)" |
| 5 | 03 | GUM w czterech krokach; Źródła 6 | ENAC copy of EA-4/02 | EA's own site hosts M:2022 rev03 (4.04.2022). | minor | https://european-accreditation.org/wp-content/uploads/2018/10/EA-4-02.pdf | Cite the EA URL and drop "kopia udostępniona przez ENAC". |
| 6 | 03 | Dryft | "potwierdzić deklarowaną niepewność (4.2)" | 4.2 b) says "support the validation of the required or declared measurement uncertainty". 4.2 a) refers to "the time the equipment is actually used". | minor | https://www.oiml.org/en/files/pdf_d/d010-e22.pdf | "wzorcowanie ma m.in. oszacować odchyłkę od wartości odniesienia i jej niepewność w chwili użycia przyrządu oraz wesprzeć walidację wymaganej lub deklarowanej niepewności (4.2)" |
| 7 | 03 | Wzorcowanie | DA-06 3.1.1 shown with two routes | 3.1.1 lists four routes. Routes 3 and 4 fall outside CIPM MRA / ILAC MRA; route 4 needs the evidence set out in 3.1.2 (verified-facts W03). | minor | DA-06 wyd. 9 | Add: "Pkt 3.1.1 dopuszcza też wzorcowanie poza tymi porozumieniami (przypadki 3 i 4), dla przypadku 4 z dodatkowymi dowodami (pkt 3.1.2)." |
| 8 | 04 | Temperatura | "Zamiast czujnika na tylnej powierzchni można wyznaczyć … (IEC 60904-5, powołana w IEC 61724-1:2021)" | Only the normative reference can be checked. The "instead of" role is not in the sample. | minor | iTeh 61724-1 sample | "IEC 61724-1:2021 powołuje normatywnie IEC 60904-5 (równoważna temperatura ogniwa z napięcia obwodu otwartego); sposób jej użycia — sprawdzić w tekście normy." |
| 9 | 04 | Prąd | fluxgate "ograniczone pasmo" | Tang: "constrained bandwidth in low-frequency options"; elsewhere the paper says "ample bandwidth". | minor | https://link.springer.com/article/10.1007/s42452-024-06059-x | "w wersjach niskoczęstotliwościowych ograniczone pasmo; większy pobór prądu" |
| 10 | 04 | Źródła 11 | "Tang C. i in. (2024) … Discover Applied Sciences" | Volume and article number are missing. | minor | same | "Tang C., Liang J., Zhu Q., Lu X., Shu J., Jiang C. (2024). Review of the current transducer techniques. *Discover Applied Sciences* 6: 351." |
| 11 | 04 | Od wymagań | Row "czas i dostępność": Podstawa "IEA PVPS T13-03" | T13-03 says nothing about UTC or timestamps (WebFetch search of the PDF). | minor | T13-03 PDF | Podstawa: "część 1 (UTC); IEA PVPS T13-03 (dostępność)" |
| 12 | 04 | Od wymagań | "wymagania klasy: tabl. 1" (row sourced to T13-03) | Ambiguous: T13-03 also has a Table 1 ("Parameters to be measured in real time"). | minor | T13-03 PDF | "wymagania klasy: tabl. 1 IEC 61724-1:2021" |
| 13 | 04 | Drgania, BMS i detektory gazu | "tlen 0–100%, gazy toksyczne 0–1000 ppm" in the column "Na co uważać" | Supported only by HSE 2004. It is a measuring range, not a caveat, and it has no attribution. | minor | https://www.hse.gov.uk/pubns/gasdetector.pdf | "zakresy wg HSE (2004): tlen 0–100%, gazy toksyczne 0–1000 ppm; starzenie ([część 3])" |
| 14 | 04 | Promieniowanie | "„półprzewodnikowy” oznacza tu piranometr z fotodiodą" | Reda does not define the term. This is a textbook gloss without a label. | minor | Reda PDF | Add "(zasada podręcznikowa)". |
| 15 | 04 | Temperatura; Prąd | "Dlatego temperaturę modułu mierzy się razem…"; IEC 61557-12, IEC 62053-22, IEC 60904-5 given without editions | The causal sentence is an own inference with no label. The standards have no edition (they are undated references in IEC 61724-1). | minor | — | Add "(ocena własna)" and "(powołania niedatowane w IEC 61724-1:2021)". |

## Verified OK

- **VIM:** 2.13 (+ Note 1), 2.16 (+ Note 1), 2.26 (Notes 1 and 4), 2.41, 4.21 and 4.26 are faithful.
- **Polish wording:** the Vademecum 2022 text for 2.13 matches exactly. The legal-metrology dictionary (GUM 2015, translation of OIML V 1:2013) gives 0.05 "największy dopuszczalny błąd pomiaru" and 2.09 legalizacja. The Polish GUM title (2019) is correct.
- **GUM:** clauses 4.2, 4.3.1, 4.3.7 (Eq. 7), 5.1.2, 5.1.3, 6.2.1, 6.3.3 (ISO-hosted HTML) and F.2.2.1 are correct. The BIPM list shows JCGM 100:2008/Amd.1:2026, and VIM 3 is the only VIM listed.
- **EA-4/02 M:2022 5.1:** "shall", k = 2, about 95%.
- **Uncertainty budget, recomputed:**
  - u_i = 0,2887 / 0,200 / 0,5774 / 0,0577 / 0,0088
  - u_c = 0,6783 and U = 1,357
  - variance shares 18,1 / 8,7 / 72,5 / 0,7 / 0,02%
  - drift ±0,5% gives U = 0,917 ≈ 0,9%
  - 3276,8 codes
- **Reda:** Tables 3 and 10, 8,0/4,1 = 1,95, and the "wartości wg raportu" hedge are all correct.
- **DA-06 wyd. 9:** matches verified-facts W03.
- **ILAC-G24 / OIML D 10:** 5.1 (risk assessment and factors), 6.1 b) (drift over time or by usage), 6.2 staircase, 6.3 control chart.
- **Drift sources:** Pindado (Energies 5(5):1664–1685; ~450 days) is correct. DGUV T 021 (Oct 2023) 7.3.4 contains the 50% rule, in its passage on electrochemical sensors.
- **T13-03:** recalibration (2 years with two sensors, yearly with one), cleaning 1–2 weeks, sampling 1 s with 5–15 min averages, availability 99% / 95%, and the "first class / secondary standard" wording.
- **RG 1.105 Rev. 4 (Feb 2021):** the endorsement, the 10 CFR 50.36 sentence, 95/95 and the 4.6 drift statement are correct. The OZE rule is labelled as own judgement, errs on the conservative side and is not unsafe.
- **Irradiance:**
  - ISO 9060:2018 ed. 2 (14.11.2018): replaces the 1990 edition, confirmed 2024, 0,3 to 3–4 µm.
  - The Hukseflux class mapping is correct and hedged.
  - IEC 60904-2:2023 ed. 4.0 (19.06.2023).
- **IEC 61724-1:2021:**
  - ed. 2.0 (21.07.2021), stability date 2026.
  - 3.17, the Foreword changes, scope and Introduction.
  - Annex B and figures B.1–B.3, normative references, and the titles of Tables 1–6.
- **Soiling:** Fuke & Kottantharayil 2025 (site in Mumbai, IIT Bombay; 36–48%, 30–43%, delayed cleaning).
- **Temperature:**
  - Sandia coefficients −3,56 / −0,0750 and the T_c model are correct.
  - T_m = 41,1 / 35,6 °C (difference 5,5 °C) recomputed OK.
  - The T13-28 statements (two years in Class A, avoid module and array edges, still mentions Class C) are correct.
- **Current:** IEC 61869-2:2012 ed. 1.0 includes Interpretation Sheet 1 (01.2022). The Tang statements on shunts, Hall sensors and CTs with DC are correct.
- **Wind:**
  - IEC 61400-12-1:2022: dates, COR1 2025-05 and the titles of annexes F, I, J and K are correct.
  - MEASNET v3 (Dec 2020; ed. 2 Annex F; 4–16 m/s; Pitot tubes) and the wind-direction procedure "Version 1", May 2025 (from the MEASNET listing), are correct.
  - Task 19: all three statements are correct.
- **Gas detectors and BMS:**
  - HSE 2004: all gas statements, T90 and calibration gas.
  - IEC 62619:2022 ed. 2.0: 3.12 and 8.2.2–8.2.4.
  - OSHA: bump test and "full calibration".
- **Classes and Zadanie 1:** Lindig 2020 (three classes in the 2017 edition; 1 min / 15 min, averaged) is correct. Zadanie 1 has `temp_modulu`, no ambient temperature or wind, and records every 15 min.
- **Optional improvement:** the Introduction of IEC 61724-1 itself says "larger PV systems should have more monitoring points and higher accuracy sensors". That is a primary source that could back part of the Hukseflux-hedged statement.

## Could not verify

- **IEC 61724-1 edition 3 or a CD/CDV:** the IEC TC 82 dashboard returned 403. The webstore shows ed. 2.0 as current with no newer edition. The slide's "sprawdź przed zajęciami" hedge is enough.
- **Reda Table 3 as U95:** my fetch found no explicit statement that the Table 3 rows are U95. It is inferred from the "Total U" rows equalling the Table 10 U95 values.
- **Polish GUM text:** the Polish wording of 4.3.7 and 6.3.3, and the term "współczynnik wrażliwości", could not be read because the PDF extract was truncated.
- **Polish VIM 4.21:** PKN-ISO/IEC Guide 99 is not online. "Incremental" is rendered as "skokowa"; "przyrostowa" would be more literal.
- **IEC 61724-1 and IEC 60904-5:** the role of the IEC 60904-5 method inside IEC 61724-1 is not in the sample (issue 8).
- **OSHA title:** the page heading reads "Calibrating and Testing Direct-Reading Monitors" (SHIB 11-26-2024), while the HTML title includes "Portable Gas". The 2013 original date appears only in the obis.osha.gov listing.
