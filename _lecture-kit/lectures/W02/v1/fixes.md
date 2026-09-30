# Accepted fixes — Lecture W2 (apply all; files in /mnt/user-data/outputs/lectures/wyklad-02-analiza-ryzyka/)

> Kit note (29.09.2026): paths below refer to the 2026-09 session (`/home/claude/lectures_work/`, `/mnt/user-data/outputs/lectures/`). The research notes are now in `_lecture-kit/research/W01-W02/`.

General rules:
- Keep the style and format of WRITING_SPEC.md (/home/claude/lectures_work/WRITING_SPEC.md): Polish only; slide titles unique and plain.
- When a source is added or removed, update the slide's "Źródło:" line and the page's "## Źródła" list.
- Open every NEW URL (WebFetch) and confirm it supports the text. If you cannot, do not add the claim; report it.
- Every changed number must be recomputed in /home/claude/lectures_work/w2_calc.py (update the asserts) and the script must end with ALL CHECKS PASSED.

## 01-proces-zarzadzania-ryzykiem.mdx
1. Matrix slide notes: add that the illustrative matrix is NOT calibrated to R2P2. Cell F1 × C4 (one fatality, up to 10⁻⁴/yr) is category A, while R2P2 treats ≤ 10⁻⁶/yr individual risk as broadly acceptable. Calibration requires converting scenario frequency into individual risk.
2. "Ograniczenia" slide: the range-compression example is wrong. Use "F2 × C4 i F3 × C4 (jedna ofiara) mają tę samą kategorię T, choć częstości różnią się ok. 10 razy", or whichever pair actually shows compression in the page's own matrix (check the matrix). Present F4 × C2 vs F2 × C4 as "matryca traktuje je jako równoważne, choć szkody są innego rodzaju". Recompute from the matrix on the page.
3. Cox notes: remove the claim that Cox said the matrix is "a communication tool" and the causal "Dlatego IEC 31010…". Write instead: "Cox wykazał, że matryca ma słabą rozdzielczość i może błędnie szeregować ryzyka; należy jej używać ostrożnie, opisując założenia. IEC 31010 zalicza ją do technik rejestrowania i raportowania (B.10.3)."
4. R2P2 attribution: "Według R2P2 (HSE 2001; te same wartości w dokumencie dyskusyjnym z 1999 r., cyt. Foster 2000)". The societal value is an intolerability limit: "wypadek z ≥ 50 ofiarami częstszy niż 1/5000 na rok uznaje się za nietolerowany". Give the Foster reference a year (2000, IRPA-10) instead of "b.d.".
5. Baybutt 2015 reference: add "J. Loss Prev. Process Ind. 38: 163–168. https://doi.org/10.1016/j.jlp.2015.09.010" (verify via doi.org or ScienceDirect).

## 02-hazid-i-hazop.mdx
6. **IEC 61882 terms (major).**
   - 3.1.1 *characteristic* = qualitative or quantitative property. Polish: **cecha** (e.g. ciśnienie, napięcie).
   - 3.1.5 *property* = constituent of a part which serves to identify the part's essential features (replaced "element" in 2016). Polish: **właściwość** (e.g. materiał, czynność).
   - Rewrite so that: Odchylenie = słowo przewodnie + cecha (np. WIĘCEJ + ciśnienie biogazu).
   - Fix the definitions slide, the principle bullet (4.2), the flowchart labels ("Wybierz właściwość i cechę, np. biogaz – ciśnienie"), the worked examples ("właściwość: skład gazu" → "cecha: skład gazu") and any notes and quiz items in 06 that use "właściwość" for pressure etc.
   - Verify the wording in the IEC 61882:2016 sample/redline URLs already cited.
7. **HAZOP Polish name.** Use "badanie zagrożeń i zdolności do działania", the PN-EN 61882 title, if you can verify it (e.g. PKN or library catalogue). Otherwise keep the current term and report.
8. **Methane.** Wherever "5–15 % obj." appears (HAZID list, HAZOP row), use "DGW 4,4 % obj., GGW 17 % obj. (wartości stosowane w UE w ochronie przeciwwybuchowej, ISO/IEC 80079-20-1; za GisChem BG RCI); starsze źródła (ICSC) podają 5–15 % obj.". Verify the GisChem PDF: https://www.gischem.de/download/01_0-000074-82-8-000000_2_1_1255.PDF.
9. **Rhadereistedt (major).** It is the SAME event as the 2005 case in Jenkins et al. 2012.
   - Slide: "8.11.2005 w Rhadereistedt (Dolna Saksonia) przy napełnianiu zbiornika wstępnego kosubstratami bogatymi w białko uwolnił się H₂S; zginęły 4 osoby (UBA 2006). Jenkins i in. (2012), za doniesieniami prasowymi, podają, że zabezpieczenia były wyłączone."
   - Notes: remove "Podobne zdarzenie z tego samego roku…" and say that UBA describes the same event.
   - Cite UBA 2006: https://www.umweltbundesamt.de/system/files/medien/publikation/long/3097.pdf.
10. **TRAS 120, 3.7.** The adsorber-monitoring clause concerns preventing ignition (2.6.3(6)). Do not present it as an H₂S safeguard. Reword the HAZOP row: existing safeguard = monitoring of the desulphurisation unit (with the clause as verified); recommendation = stationary H₂S detection…; say that the H₂S-protection reading is the author's interpretation.

## 03-fmea-i-fmeca.mdx
11. **Shafiee 2014 D values.**
    - Remove "D = 7 dla każdego podzespołu". Write: "Pięć pokazanych podzespołów ma D = 7; w pełnej tabeli D przyjmuje wartości 1, 4 lub 7. Autorzy przyjmują tę samą ocenę D dla danego podzespołu na lądzie i na morzu, więc D nie różnicuje porównania ląd–morze, ale różnicuje ranking podzespołów."
    - Fix the notes ("wykrywalność ma wszędzie wartość 7… monitoring nie wpływa na kolejność") accordingly.
12. **Tower.** In the notes, "ekspert może słusznie przypisać wieży wysoką ciężkość" → "wieża jest pierwsza z powodu najwyższej oceny występowania (Sf = 5), a nie ciężkości (S = 3); skala O kończy się na p > 0,10, więc nie odróżnia 0,2 od 1 awarii/rok".
13. **Carroll.** "poważna wymiana to około 298 h naprawy i około 230 000 EUR" → "poważna wymiana przekładni to średnio ok. 231 h naprawy i ok. 230 000 EUR kosztów materiałów".
    - Failure-rate sum: "8,3 (6,2…, 1,1…, 0,3…)" — add "oraz 0,7 awarii bez danych o koszcie", or correct it to match Carroll exactly.
    - Verify both in the Strathprints PDF.
14. **Tavner.** "przekładnia dominuje RPN podzespołów" → "w koncepcjach DFIG i BDFIG największy udział w RPN ma przekładnia, w koncepcji z przekładnią hydrauliczną — przekształtnik hydrauliczny" (verify naming in Tavner et al.).
15. **RPN 105.** In the notes, "trzy różne podzespoły mają RPN 105…" → "w rankingu morskim przekładnia i łopaty mają RPN 105 i tę samą rangę 2".
16. **IEC 60812.** "Kroki (5.3), które wyznaczają kolejność kolumn arkusza" → "Kroki (5.3.2–5.3.9); w typowym arkuszu kolumny układa się w tej kolejności".
17. **EPRI / Hernandez & Paglioni.**
    - "EPRI: ogniwa i moduły to 11 %" → "EPRI (2024): ogniwom przypisano 3 z 26 incydentów o ustalonej przyczynie (11 %)".
    - Hernandez & Paglioni: a conference paper on second-life batteries using 4-level risk categories, not RPN. Describe it accurately.
18. **AIAG-VDA AP.** Soften any absolute claim ("rzadkie… nie przegra") to "zwykle".

## 04-fta-eta-i-bow-tie.mdx
19. Márquez et al. 2016: "ogólne drzewo niezdatności turbiny wiatrowej rozwiązywane metodą BDD z miarami ważności", not "turbiny lądowe".
20. Rosewater & Williams 2015: drop it from the CCF bullet, or say accurately "(R&W 2015 opisują błędy kalibracji i szybki dryf pomiaru napięć ogniw w BMS)". The CCF causes listed for gas detectors (shared supply, same calibration) are then the author's examples; mark them "(przykłady)".
21. McMicken cause disputed: "defekt ogniwa zapoczątkował…" → "wg DNV GL (2020) proces zapoczątkowała wada ogniwa; przyczyna źródłowa jest sporna (UL 2021)".
22. FTA notes on venting: "zamkniętą przestrzeń dzięki odciążeniu wybuchowemu … przerwać tę gałąź" → "np. usunąć materiał palny dzięki wentylacji; odciążenie wybuchowe ogranicza skutki (nadciśnienie), ale nie zapobiega deflagracji".
23. Bow-tie barriers: "od 1 do 3, najwyżej 5 barier na ścieżkę" → "zwykle 1–5 barier na ścieżkę zagrożenia; po stronie skutków 1–3, najwyżej 5 (Johnson i in. 2018)". Verify in the Johnson et al. paper.
24. Scarponi: "natychmiastowe rozerwanie … prowadzi do wybuchu chmury gazu o zasięgu szkód około 100 m" → "rozerwanie komory może (przy opóźnionym zapłonie) prowadzić do wybuchu chmury gazu o zasięgu szkód ok. 100 m; zasięg pożaru błyskawicznego to ok. 25 m" (verify 25 m in Scarponi; if not verifiable, omit that part).
25. PFD term: use the PN term — "PFDavg — średnie prawdopodobieństwo niebezpiecznego uszkodzenia na żądanie". Apply everywhere PFD is expanded in 04 and 05.
26. UL reference title: "UL, Executive Summary of the Underwriters Laboratories and UL Responses on BESS Incidents and Safety (2021)" (verify the title in the PDF).

## 05-lopa-i-sil.mdx
27. **LOPA example (major).** Change the tolerable frequency so the required RRF is not on a band boundary. Use f_tol = 5×10⁻⁶/rok (organisational assumption):
    - Variant A: f = 10⁻³/rok → RRF = 200 → required PFDavg ≤ 5×10⁻³ → SIL 2.
    - Variant B: f = 10⁻⁴/rok → RRF = 20 → PFDavg ≤ 5×10⁻² → SIL 1.
    - Check of variant A: 1oo1 with λDU = 2×10⁻⁶/h tested yearly gives PFDavg = 8,76×10⁻³. That is in the SIL 2 band but does NOT meet ≤ 5×10⁻³ (f = 8,76×10⁻⁶ > 5×10⁻⁶). Tested every 6 months: 4,38×10⁻³ → f = 4,38×10⁻⁶ ≤ 5×10⁻⁶ OK. Teaching point: "przedział SIL to za mało — liczy się wymagane PFDavg".
    - Sensitivity: an unjustified ignition probability of 0,1 would cut the variant A RRF to 20 (SIL 1).
    - Update the slides, notes, w2_calc.py asserts and any quiz item in 06 that depends on these numbers.
28. **LOPA scenario consequence (major).** The mechanical relief device itself releases biogas when it acts (TRAS 2.6.3(3)).
    - Redefine the consequence as "rozerwanie membranowego zbiornika gazu i nagłe uwolnienie całej zawartości → pożar lub wybuch chmury gazu z możliwą ofiarą śmiertelną".
    - Add: "wypływ przez zabezpieczenie nadciśnieniowe w wyznaczonym miejscu to osobny scenariusz (strefa Ex przy wylocie)".
    - Enabling condition: state "zachowawczo przyjmujemy, że każda awaria pętli prowadzi do przepełnienia (bez modyfikatora warunkowego, np. postoju kogeneracji)".
29. **TRAS 2.6.3(3).** Add that TRAS requires the min/max fill-level signalling to be independent of the operational level measurement and to be implemented as a protective system. The example's base design does not meet this; the SIF derived by LOPA corresponds to that requirement. Verify the wording in TRAS 120.
30. **Alarm PFD.** "Alarm z reakcją operatora: najwyżej PFD 0,1" → "PFD nie mniejsze niż 0,1 (redukcja ryzyka najwyżej 10)" (RR716 p.36).
31. **BPCS ≤ 10.** Add "dla BPCS niezaprojektowanego według IEC 61511 (wg Derbyshire, 2016)".
32. **Willey.** "(Willey 2014, za CCPS 2001)" → "(Willey 2014, za CCPS 2015)"; "musi spełniać trzy kryteria" → "musi spełniać m.in. kryteria:". Verify Willey's reference [8].
33. **Typical values slide.** The notes claim "skąd bierze się liczba 0,1 na rok…"; say instead "wartość 0,1/rok jest zgodna z ograniczeniem pierwszego wydania IEC 61511 (RR716)". In the table, "Błąd operatora przy czynności rutynowej | IEF | 10⁻²/okazję" → add "(częstość = 10⁻² × liczba okazji na rok)". Also note that the SAFEChE tutorial credits Crowl & Louvar; remove "odtwarzających wartości CCPS (2001)" unless verified.
34. **Ignition nuance.** RR716 judged 0,08–0,09 unrealistic for large petrol vapour clouds, and 0,1 as conservative for kerosene in one company's analysis. Rephrase: "wartość zależy od substancji i wielkości uwolnienia".
35. **SIL table attribution.** "IEC 61508-1:2010 tabl. 2 i 3 (wg King 2014); w IEC 61511-1:2016 tabl. 4 i 5". King cites 61511 tables 3 and 4 of the 2003 edition, so keep the 2016 numbering but do not attribute it to King.
36. **PFH term.** "PFH — średnia częstość niebezpiecznych uszkodzeń na godzinę (IEC 61508:2010)". Drop "Probability of dangerous Failure per Hour", or mark it as the older name.
37. **HFT/SC caveat.** Where PFD alone is mapped to a SIL ("ledwie SIL 3", "testowana co pół roku ma SIL 2"), add "(PFDavg w przedziale SIL …; osiągnięcie SIL wymaga też spełnienia ograniczeń architektury i zdolności systematycznej)".
38. **PLr.** "(PLr, Performance Level)" → "(PLr, required Performance Level — wymagany poziom zapewnienia bezpieczeństwa)".
39. **References.**
    - Brissaud: "Brissaud F., Oliveira L.F. (2015). Average probability of a dangerous failure on demand: Different modelling methods, similar results. arXiv:1501.06487" (verify the title at arxiv.org/abs/1501.06487).
    - DNV-SE-0439: if cited, use the official https://www.dnv.com/energy/standards-guidelines/dnv-se-0439-certification-of-condition-monitoring/.
40. **SAFEChE.** "SAChE" → "SAFEChE" everywhere in W2.

## 06-podsumowanie.mdx
41. Update any quiz question or answer affected by fixes 6 (cecha/właściwość), 27 (LOPA numbers) and 30 (alarm PFD). Keep all quiz answers correct and unambiguous, and check the calculation answers in w2_calc.py.

## After editing
- Update /home/claude/lectures_work/w2_claims.md.
- Re-run w2_calc.py (it must pass) and the MDX compile check on all W2 files.
- Report back (≤ 400 words): each fix done / changed / not done (why), plus the list of new URLs verified.
