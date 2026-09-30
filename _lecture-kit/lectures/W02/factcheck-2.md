# Fact-check 2: W2 pages 03 and 04, 29.09.2026

I read both files in full and did not edit them. Sources were read with WebFetch (shell egress was blocked). All arithmetic was recomputed in Python. **Result: no critical issues, 1 major issue, 16 minor issues.**

## Issues

| # | File | Slide | Quoted text | Problem | Sev. | Evidence | Proposed Polish text |
|---|---|---|---|---|---|---|---|
| 1 | 03 | Przykład z OZE: FMEA turbin wiatrowych | „Wieża jest pierwsza z powodu najwyższej oceny występowania (O = 5), a nie ciężkości” | True only onshore. Offshore, the gearbox, blades and generator also have O = 5, so the tower is first only because of S = 4. | major | [Shafiee, Table 7](https://mdpi-res.com/d_attachment/energies/energies-07-00619/article_deploy/energies-07-00619.pdf) | „Na lądzie wieża jest pierwsza dzięki ocenie występowania (O = 5), a nie ciężkości: przekładnia ma S = 4, ale O = 3. Na morzu O = 5 mają też przekładnia, łopaty i generator, a wieżę wyróżnia S = 4.” |
| 2 | 03 | Ranking FMEA a dane z eksploatacji (+ notes) | „najwięcej awarii na MW rocznie ma układ zmiany kąta łopat, potem sterowanie i przekształtnik” | The paper's ranking is: rotor system incl. pitch 1st, control 2nd, drive train (onshore) or lifting gear (offshore) 3rd, converter 4th. The paper calls pitch, control and converter "critical". | minor | [WES 11:1553](https://wes.copernicus.org/articles/11/1553/2026/) | „najwięcej awarii na MW rocznie ma układ wirnika (z układem zmiany kąta łopat), potem sterowanie; za krytyczne autorzy uznają układ zmiany kąta łopat, sterowanie i przekształtnik” |
| 3 | 03 | Ranking FMEA a dane z eksploatacji | „5,8 razy rzadziej niż układ łopat” | The 1,076 rate is pitch/hydraulics. Blades are a separate category (0,520). | minor | [Carroll, Fig. 3](https://strathprints.strath.ac.uk/54141/1/Carroll_etal_WE_2015_Failure_rate_repair_time_and_unscheduled_O_and_M_cost_analysis_of_offshore.pdf) | „…niż układ zmiany kąta łopat i hydraulika” |
| 4 | 03 | Ranking FMEA a dane z eksploatacji | Colli „(wg streszczenia artykułu)” | The result is in the Conclusions, not the abstract. | minor | [ScienceDirect](https://www.sciencedirect.com/science/article/abs/pii/S1364032115005262) | „(wg wniosków artykułu)” |
| 5 | 03 | Priorytet działania i macierz krytyczności | „Krytyczność łączy ciężkość z co najmniej jedną inną cechą” | The source (3.1.15) says criticality measures "**normally** combine…". The slide drops the source's modality. | minor | [IEC 60812 sample](https://cdn.standards.iteh.ai/samples/21903/331059ef02794b548d049d58b18e456f/IEC-60812-2018.pdf) | „Miary krytyczności zwykle łączą ciężkość skutku z co najmniej jedną inną cechą (3.1.15).” |
| 6 | 03 | FMEA według IEC 60812:2018 | „W praktyce arkusz uzupełnia się o oceny S, O, D … IEC 60812 mówi o ciężkości i prawdopodobieństwie” | The standard itself lists "SOD severity, occurrence and detectability" (3.2) and uses them for RPN (B.4.2). | minor | same | „Do szeregowania stosuje się oceny S, O i D (ang. detectability; wyższa ocena = trudniejsze wykrycie); IEC 60812 używa ich w metodzie RPN (zał. B.4), w definicjach mówi o ciężkości i prawdopodobieństwie i nie narzuca skal.” |
| 7 | 03 | FMEA według IEC 60812:2018 (+ notes) | „W typowym arkuszu kolumny układa się w tej kolejności”; notes „Kolejność kroków … wyznacza układ kolumn” | No source, and not labelled as the writer's own judgement (the ledger marks it INFERENCE). | minor | ledger row 10 | Delete it, or add „(ocena własna)”. In the notes: „…układ kolumn arkusza bywa różny.” |
| 8 | 03 | Skale S, O, D… | D 10: „brak metody wykrywania” | The source says "No known monitoring methods available". | minor | [Tavner 2010](https://eprints.whiterose.ac.uk/id/eprint/83340/9/2010%20Tavner%2C%20Higgins%2C%20Arabian%2C%20Long%2C%20Feng-FMEA%20%28EWEC2010%29.pdf) | „brak znanych metod monitorowania” |
| 9 | 03 | Od FMEA do utrzymania ruchu i monitoringu | „Niesprawny czujnik gazu milczy, więc monitoring procesu go nie pokaże” | Over-generalised, and it matters for safety: self-diagnostics report some detector failures. Only undetected failures are hidden (3.1.11). | minor | IEC 60300-3-11, 3.1.11 | „Uszkodzenie czujnika gazu, którego nie wykrywa jego autodiagnostyka, jest ukryte: czujnik milczy, a monitoring procesu tego nie pokaże (ocena własna).” |
| 10 | 03 | Od FMEA… | „przypisuje ogniwom 3 z 26” | EPRI's category is "Cell/Module". W1 page 01 has the same wording. | minor | [EPRI](https://restservice.epri.com/publicdownload/000000003002030360/0/Product) | „ogniwom lub modułom” (change W1 too, or leave both) |
| 11 | 04 | Analiza drzewa niezdatności: pojęcia | 3.9 „którego nie rozwija się dalej” | The source says "**cannot** be further developed". The slide's wording blurs the difference from 3.12, the undeveloped event. | minor | [IEC 61025 sample](https://cdn.standards.iteh.ai/samples/12812/5a2b487cba2344309309a9d4fc72b2b9/IEC-61025-2006.pdf) | „którego nie można dalej rozwinąć” |
| 12 | 04 | same | „zdarzenie „domowe”” | NUREG-0492 Table IV-1 calls it "External Event" (house symbol). | minor | [NUREG-0492](https://www.nrc.gov/docs/ML1007/ML100780465.pdf) | „zdarzenie zewnętrzne (symbol domku)” |
| 13 | 04 | same (notes) | „28% to prawdopodobieństwo warunkowe” | The paper calls it the "top-event probability" from a fuzzy Bayesian network, a "model-derived risk index for a defined reference scenario". | minor | [Yuan 2026](https://www.mdpi.com/2227-9717/14/4/674) | „…to wskaźnik z modelu (rozmyta sieć bayesowska, oceny ekspertów) dla scenariusza odniesienia, a nie częstość na rok.” |
| 14 | 04 | Uszkodzenia spowodowane wspólną przyczyną (notes) | „poprawia bezpieczeństwo stokrotnie” | With q = 0,02 the naive gain is 50×, so this contradicts the slide's own numbers. | minor | own calculation | „…tyle, ile wynika z mnożenia — tu 50-krotnie.” |
| 15 | 04 | Bow-tie: bariery i czynniki degradacji | Content cited directly to „(CCPS … i Energy Institute, 2018)” | The book was not read. Everything was checked only in Johnson et al. 2018, and only the barrier-count bullet is hedged. | minor | [Johnson 2018](https://www.icheme.org/media/16937/hazards-28-paper-31.pdf) | „(CCPS … i Energy Institute, 2018; wg Johnsona i in., 2018)” |
| 16 | 04 | Bow-tie dla zbiornika biogazu | Overpressure device as a barrier before „niekontrolowane uwolnienie biogazu” | When it operates it releases biogas itself (TRAS 2.6.3(3)). It is a barrier against rupture of the holder. | minor | [TRAS 120](https://www.kas-bmu.de/files/publikationen/TRAS/TRAS%20(endgueltige%20Fassung)/LesefassTRAS120.pdf) | Add: „Zadziałanie zabezpieczenia nadciśnieniowego też uwalnia biogaz, ale w przewidzianym miejscu; barierą jest ono wobec rozerwania zbiornika (ocena własna).” |
| 17 | 04 | Źródła 20 | „ze zmianą z 27.02.2019” | The Lesefassung says "mit **Korrektur** vom 27. Februar 2019". | minor | same | „z korektą z 27.02.2019” |

## Verified OK

- **Calculations** (all match):
  - RPN 1–10: 1000/120; 60, 72 and 120 each from 24 combinations; no value in (900, 1000); mean 166,375; median 105; 501 > 100.
  - Tavner scales: 64/39, mean 37,81, median 22,5, maximum 200.
  - The two 120 examples; Shafiee RPNs and ranks; 84 → 12.
  - FTA: G1 0,07831; +2,16%; 0,496/0,6 (+20,97%); G2 0,005398; P_T 4,227 × 10⁻⁴; cut-set sum 4,32 × 10⁻⁴; V share 92,59%; second fan ×12,70.
  - β table: all cells (73,5% shown as 73%); ×5,81; 5,726 × 10⁻⁴ (+35,5%).
  - ETA: 0,077887, 2,1136 × 10⁻⁴ ×2, sum 0,07831.
  - Carroll: 8,3 sum; Fig. 3 data-table sums 1,076/0,999/0,633/0,185; ratio 5,82.
- **IEC 60812:2018:** ed. 3.0, 10.08.2018, TC 56, replaces 2006, stability 2029. Scope sentence; 3.1.1, 3.1.2, 3.1.13; steps 5.3.2–5.3.9 in order; B.2, B.3, B.4.3; Foreword e) and f).
- **Tavner:** 5 authors; all scale values and labels; MIL-STD-1629A "with some amendment"; exponential scales; gearbox dominates R80.1/R80.2 and the hydraulic converter R80.3 (27,0 against 26,0); the "under-estimates field failure rates" sentence.
- **Shafiee:** full Table 7, D ∈ {1, 4, 7}, same CMS on and offshore.
- **Liu 2013** (75 papers, 1992–2012); **Bowles** bibliography.
- **AIAG/VDA:** June 2019; errata-only second printing; DFMEA, PFMEA, FMEA-MSR; 7 steps; S > O > D; H/M/L.
- **Carroll:** about 350 turbines, "1768 turbine years"; 231 h and €230 000 appear only in the figures, and costs are "materials only", so the hedge is adequate.
- **Walgern:** >1000 turbines, >4200 years, 3,3/4,3; the paper confirms that failure definitions differ from Carroll's.
- **Hacke:** 43–70% of "service requests".
- **IEC 60300-3-11:** ed. 2.0 current; Figure 1; 3.1.9, 3.1.11, 3.1.22; 7.4, 7.5.2–7.5.4.
- **Rosewater 2020:** 7 authors, STPA, the 5–30 min wording "in some cases".
- **Hernandez & Paglioni:** H₂ sensor, smoke sensor and chiller at risk level 1.
- **EPRI:** 3/26, consistent with W1.
- **DNVGL-SE-0439 4.1:** wording verbatim; current edition 2016-06 amended 2021-10.
- **FTA references:** IEC 61025 ed. 2.0, 3.7 and 3.12; NASA 2.1 and 7.5; García Márquez (BDD, importance measures); Kang; Yuan (four "necessary components").
- **McMicken:** DNV GL (cell failure, CF #4, about 3 h, 20:02 and 20:04); UL 2021 both sentences.
- **β, NTNU:** 37 questions, 0,5–5% and 1–10%.
- **Rosewater & Williams:** calibration, drift, DC current.
- **ETA references:** IEC 62502 scope; IEC 61511-3 Annexes B and F; Bain 2012.
- **Bow-tie references:** Johnson (top event, degradation/escalation factors, criteria, detect–decide–act, non-barriers, 1–5 and 1–3/max 5); IEC 31010 B.4.2.
- **TRAS 120:** 2.1(6), 2.1(14), 2.4(7), 2.4(8), 2.6.3(3) correct. Confirmed by a targeted fetch after a first fetch misnumbered them.
- **Scarponi:** LOC3, about 100 m at 14 kPa, about 25 m at ½ LFL, no frequencies.
- **Bibliographic data:** all checked via Crossref or the article pages.
- **W1 consistency:**
  - All W1 links resolve.
  - Thermal runaway, DGW and Ex are handled by link. The BESS, BMS, SCADA and CMS expansions are identical to W1.
  - The IPL criteria are referenced, not redefined.
  - The McMicken timeline matches W1.

## Could not verify

- **Bowles 2003 content:** the abstract is not accessible.
- **Casson Moreno 2018 content:** doi.org and Crossref rate-limited me (HTTP 429). Only the bibliographic data were confirmed.
- **Yuan top gate:** not quoted verbatim as "AND"; it is implied by "necessary components".
- **IEC 60812 text:** 5.3.1, B.3.2 and the worksheet annex are not in the sample.
- **PN-EN Polish terms:** not checked on PKN for „obsługa ukierunkowana na niezawodność”, „minimalny przekrój” or „analiza muszki”.
- **DNV-SE-0439 as amended in 2021:** needs a login.
- **Johnson 2018 internal inconsistency:** the paper also says consequence pathways "often have more barriers". The slide reports its 1–3/max 5 rule correctly.
