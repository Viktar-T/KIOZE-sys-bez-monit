# Fact-check 3 — W2 pages 05, 06, index.md (29.09.2026)

Scope: 05, 06 (quiz checked against 01–05) and index.md. Sources were opened with WebFetch. Every calculation was recomputed in Python and matches the pages.

## Issues

| # | File | Slide | Quoted text | Problem | Sev. | Evidence | Proposed Polish text |
|---|---|---|---|---|---|---|---|
| 1 | 05 | PFDavg funkcji 1oo1 i interwał testów (slide + notes) | „wyłącznik pływakowy, 19,3 × 10⁻⁶ /h … PFD ≈ 0,085”; notes: „ma PFD około 0,085” | The slide omits RR716's own conclusion: the figure „would appear to be too low” (the whole system counts) and „a PFD of less than 0.1 cannot be claimed”. As written, 0,085 looks like a creditable value, which contradicts W1 (not lower than 0,1). The device is a „float / displacer tank level device”, not a switch. | major | https://www.hse.gov.uk/research/rrpdf/rr716.pdf (§6.5.2) | „Dane rzeczywiste (RR716, pkt 6.5.2): pływakowy lub wypornościowy czujnik poziomu alarmu HH, 19,3 × 10⁻⁶ /h, czyli ok. 0,17 /rok; przy teście raz w roku PFD ≈ 0,17/2 ≈ 0,085. RR716 zaznacza jednak, że trzeba uwzględnić cały układ (alarm, okablowanie), więc ta wartość jest zbyt niska, a dla warstwy bez SIL nie można przyjąć PFD mniejszego niż 0,1.” Notes: add the same caveat. |
| 2 | 05 | Przykład LOPA: nadciśnienie… / luka i wymagany SIL | „Alarm i operator, wariant B … \| tak \| 0,1” | The page first teaches that an alarm with an operator gives 0,19 (RR716 §2.5.1), then uses 0,1 in variant B without comment. With 0,19 the result is f = 1,9 × 10⁻⁴, RRF 38, still SIL 1. | minor | RR716 §2.5.1 | Cell: „0,1 (wartość graniczna z W1; przy 0,19 wg RR716: f = 1,9 × 10⁻⁴ /rok, RRF = 38, nadal SIL 1)” |
| 3 | 05 | Typowe wartości IEF i PFD | „Błąd operatora przy czynności rutynowej” | SAFEChE says only „Operator failure 10⁻²/opportunity”. „Routine” does not appear on the page, so the qualifier is added (lesson 11). | minor | https://safeche.engin.umich.edu/tutorials/lopa-tutorial | „Błąd operatora \| IEF \| 10⁻² na okazję (…)” |
| 4 | 05 | Typowe wartości IEF i PFD | „firmy brały prawdopodobieństwa błędu człowieka z tablicy F.3 normy bez uzasadnienia” | RR716 (§2.3.x company A, §5.3.x company D) refers to the first edition of BS EN 61511-3. Placed right after the 2016 F.3 bullet, it reads as the 2016 table. | minor | RR716 §2.3.1, §5.3.1 | „RR716: firmy (m.in. A i D) brały prawdopodobieństwa błędu człowieka z tablicy F.3 pierwszego wydania normy (BS EN 61511-3) bez uzasadnienia.” |
| 5 | 05 | Typowe wartości IEF i PFD | „Dla BPCS niezgodnego z normą … nie pozwalało przyjąć … mniejszej niż 10⁻⁵ /h” | The source limits this to a BPCS „that places a demand on a protection layer” (Chambers & Pearson: „as an initiating event”). The qualifier is missing. | minor | RR716 footnote; https://www.icheme.org/media/9286/xxii-paper-75.pdf | „Dla BPCS niezgodnego z normą, który jest zdarzeniem inicjującym (stawia żądanie warstwie ochrony), pierwsze wydanie IEC 61511 nie pozwalało…” |
| 6 | 05 | SIL: tryby pracy i miary | „tryb ciągły — funkcja działa jak ciągła funkcja sterowania” | King 2014: „is operating as a continuous control function”. „jak” reads as a comparison; the source says „jako”. | minor | https://www.icheme.org/media/8914/xxiv-paper-18.pdf | „…tryb ciągły — funkcja bezpieczeństwa działa jako ciągła funkcja sterowania.” |
| 7 | 05 | Redundancja 1oo2 i współczynnik β | „Umowne wartości z tabeli leżą w zakresie dla czujników.” | The table includes β = 0, which lies outside 1–10%. | minor | NTNU ch. 10 | „Niezerowe wartości β z tabeli (0,02–0,10) leżą w zakresie dla czujników; β = 0 to przypadek odniesienia.” |
| 8 | 05 | Maszyny i turbiny wiatrowe: PL i SIL | „(IFA, instytut … niemieckiego ubezpieczyciela DGUV, opisuje ją jako graf ryzyka)” | IFA 2/2017e is based on the 2015 edition, not the 2023 Annex A. DGUV is the umbrella association of the accident insurers, not an insurer. | minor | https://www.dguv.de/medien/ifa/en/pub/rep/pdf/reports-2019/report0217e/rep0217e.pdf | „(IFA, instytut niemieckiego ustawowego ubezpieczenia wypadkowego DGUV, opisuje tę metodę dla wydania z 2015 r. jako graf ryzyka)” |
| 9 | 05 | Maszyny i turbiny wiatrowe: PL i SIL | „Miarą jest więc częstość niebezpiecznych uszkodzeń na godzinę” | ISO 13849-1 uses „probability of dangerous failure per hour”; bullet 3 of the same slide says „prawdopodobieństwo”. | minor | ISO 13849-1:2023 sample (Introduction) | „Miarą jest więc średnie prawdopodobieństwo niebezpiecznego uszkodzenia na godzinę (PFH), a nie PFDavg.” |
| 10 | 05 | Warstwy ochrony w LOPA: typowe błędy | „BPCS … dostaje najwyżej RRF 10” | The recap drops W1's qualifier (a BPCS not designed to IEC 61511). | minor | W1 05, line 106 | „…BPCS niezaprojektowany według IEC 61511 dostaje najwyżej RRF 10…” |
| 11 | 06 | Która metoda do jakiego pytania | HAZOP: „…i czy zabezpieczenia wystarczą?” | Conflicts with the 05 notes („LOPA odpowiada na pytanie, które zostawia HAZOP…”) and duplicates the LOPA row. Page 01: „co je zatrzyma?”. | minor | 01 l. 98; 05 l. 37 | „Jakie odchylenia od zamierzenia projektowego są możliwe i co je zatrzyma?” |
| 12 | 06 | Od analizy do projektu monitoringu… | „musi mieć przyczynę, oczekiwaną reakcję operatora i czas na nią” | The cited source (Dunn & Sands) documents „the consequence, response time, and operator action”. „Przyczyna” is not in it. | minor | https://www.isa.org/intech-home/2020/march-april/features/alarm-management-questions-that-everyone-asks | „…musi mieć udokumentowany skutek braku reakcji, działanie operatora i czas na reakcję (racjonalizacja wg ISA-18.2, za Dunnem i Sandsem, 2020)…” |
| 13 | 06 | notes, slide 2 | „quiz z dziesięcioma pytaniami, w tym trzema obliczeniowymi” | Q5 (RPN), Q6, Q8 and Q9 all require calculation, which makes four. | minor | 06 quiz | „…w tym czterema wymagającymi obliczeń…” |
| 14 | index | Przegląd i cele kształcenia | „metody opisane w IEC 31010:2019: HAZID (…) … oraz dobór SIL” | IEC 31010:2019 Annex B contains neither HAZID nor SIL. | minor | ASSP IEC 31010 preview (ToC) | „…metody opisane w IEC 31010:2019 (HAZOP, FMEA i FMECA, FTA, ETA, bow-tie, LOPA), a także HAZID (ISO 17776) i dobór SIL (IEC 61508, IEC 61511)…” (keep the expansions) |

## Verified OK

- **LOPA foundations:**
  - Willey 2014: „one cause - one consequence pair” and the equation.
  - CCPS 2001 (October 2001) and CCPS 2015 (DOI).
  - IEC 31010 B.4.4 and B.10.3.
  - IEC 61511-3 Annex F, with the titles of Tables F.3 and F.4.
- **RR716** (Chambers, Wilday, Turner, HSL 2009), confirmed point by point:
  - §3.5.2 shared PLC; §2.2 company A (company C §4.7); §6.2; §3.4 conditional modifier.
  - Ignition 0,09/0,08 unrealistic (§3.4/§6.4); IE splitting (§2.3.5).
  - §2.5.1: 0,1 OR 0,1 = 0,19 „may be reasonable as a minimum value”.
  - §2.6 quote; executive summary: no sensitivity study „in the majority”.
  - §2.4: 0,1 conservative for kerosene; §6.5.2: 19,3 × 10⁻⁶ /h; footnote 10⁻⁵ /h.
  - Human error probabilities from F.3 (companies A and D).
- **Other LOPA sources:**
  - Chambers & Pearson 2011: Colin, Jeffrey; SS 156; shared valve; „one failure in eleven years”.
  - SAFEChE: all six values, citing Crowl & Louvar 2019.
  - Stanley §5.4: 10⁻⁵ and 10⁻⁶ /rok for LOPA.
  - TRAS 120 2.1(6), 2.1(14), 2.6.3(3) and the edition line.
- **Calculations:** all recomputed values match, including the β table, the ratios 86/9, the 91% share, the quiz sums and the 90 min plan. No RRF lies on a SIL boundary.
- **SIL and PFDavg:**
  - SIL/PFH/RRF table vs King 2014; IEC 61511-1 Tables 4/5.
  - Standards status: IEC 61508-1 ed. 2.0; VDE draft CDV:2025; 61508 Association „early 2027”; IEC 61511:2026 SER.
  - NTNU formulas (ch. 8) and β values (ch. 10: 37 questions, ranges, IEC 62061 items).
  - MTTR = mean time to restoration and MRT = mean repair time (61508 Association slides).
  - Brissaud & Oliveira (DNV).
- **Machinery and wind:**
  - ISO 13849-1:2023: data, scope, 3.1.4–3.1.6, Annex A, IEC 62061 compatibility.
  - IEC 62061:2021: framework, non-electrical, high demand; AMD1:2024; AMD2 20.03.2026.
  - IEC 61400-1:2019 (control and protection functions); AMD1 18.12.2025.
  - DNV-ST-0438 (2016-04/2021-11) scope.
  - 2023/1230 applies from 20.01.2027 (verified-facts).
- **Page 06:**
  - Dunn & Sands alarm definition; ISA-18.2-2016 current; IEC 62682:2022 clause 9 = Rationalization.
  - Derbyshire: proof test after repair mandatory.
  - DNVGL-SE-0439 (06/2016): §4.2 scope, §4.1.
- **Quiz:** all 10 questions match slides 01–05, each has exactly one correct answer, and every correctAnswer index is right.
- **index.md:**
  - Titles match the W1 „Dalej” list (W4 and W6 omitted, which is optional); W3 is plain text.
  - Outcomes match the content; the 6 key sources resolve.
- **Forward references and W1:** every required forward reference is present verbatim. Links to W1 parts 3/4/5 resolve.
- **Formatting:** spec rules followed.

## Could not verify

- CCPS 2015 content (Wiley 403).
- Whether ISO 13849-1:2023 Annex A is still a risk graph.
- PN terms „poziom zapewnienia bezpieczeństwa” and „ograniczenia architektury” (PKN not reachable).
- IEC 62682 §9.2 items (not in the sample).
- DNV-SE-0439 2021 text.
- 2023/1230 application date via EUR-Lex (relied on verified-facts W01).
