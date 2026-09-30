# Accepted fixes — W2 rewrite (29.09.2026)

Files: `/mnt/user-data/outputs/lecture/wyklad-02-analiza-ryzyka/`. Sources of the findings: `factcheck-1.md` (F1, pages 01–02), `factcheck-2.md` (F2, pages 03–04), `factcheck-3.md` (F3, pages 05, 06 and index). Prompts: `factcheck-prompts.md`.

Result of triage: 0 critical; 2 major, both accepted after the coordinator checked the source (F2: Shafiee & Dinmohammadi Table 7 values as shown on the slide — offshore the tower is first because of S, not O; F3: HSE RR716 §6.5.2 opened by the coordinator — the float/displacer device figure "would appear to be too low" and "a PFD of less than 0.1 cannot be claimed"); 42 minor, all accepted (6 with modified wording: F1 #9, F1 #13, F2 #10, F2 #16, F3 #2, F3 #12); none rejected. The coordinator added 6 fixes of their own (matrix wording without colours, the CIOP-PIB page read over https with the three- or five-level scale, the W9 line in index.md). Consequences were applied on other pages where the same wording appeared (TRAS 120 "korekta 2019" on 02, 04, 05, 06; Stanley on 05; quiz Q2 on 06).

Applied by the coordinator with `fixtool/apply_fixes.py`, which asserts that each old text occurs exactly the expected number of times (62 replacements, all matched), then one follow-up edit to fix 44 (notes shortened to 150 words). Pre-fix copies: `fixtool/pre-fix/`. calc.py got two new checks (fixes 39 and 45). After the fixes: calc.py ALL CHECKS PASSED (227 checks), LINT OK (1 WARN: 5 × 6 matrix table, accepted), MDX CHECK OK.


## 01-proces-zarzadzania-ryzykiem.mdx

1. **F1 minor: ISO 31000 6.3.4 addresses the organization; 'regulator' is own judgement**
   - Old: - Kryteria ryzyka ustala organizacja lub regulator na etapie kontekstu, przed analizą (ISO 31000:2018, 6.3.4); ewaluacja porównuje z nimi wynik (6.4.4).
   - New: - Kryteria ryzyka organizacja określa przed oceną ryzyka, na etapie kontekstu (ISO 31000:2018, 6.3.4); ewaluacja porównuje z nimi wynik (6.4.4). Wartości liczbowe może też narzucać regulator (ocena własna).

2. **F1 minor: Stanley 2018 §5.4: 10⁻⁵ = middle of ALARP region; 10⁻⁶ for firms aiming at the broadly acceptable line; order-of-magnitude cut is cited practice**
   - Old: - Cel dla jednego scenariusza w LOPA ustala się niżej niż granicę dla osoby, bo ta sama osoba jest narażona także na inne ryzyka: Stanley i in. (2018) obniżają granicę dla pracowników o rząd wielkości i wskazują np. 10⁻⁵ /rok albo ostrożniej 10⁻⁶ /rok. Wrócimy do tego w [części 5](./05-lopa-i-sil.mdx).
   - New: - Cel dla jednego scenariusza w LOPA ustala się niżej niż granicę dla osoby, bo ta sama osoba jest narażona także na inne ryzyka. Stanley i in. (2018) przytaczają praktykę obniżania granicy nietolerowanej dla pracowników o rząd wielkości (do 10⁻⁴ /rok) i proponują cel w środku obszaru ALARP, 10⁻⁵ /rok; firmy, które chcą ograniczyć ciężar wykazywania ALARP, mogą przyjąć 10⁻⁶ /rok. Wrócimy do tego w [części 5](./05-lopa-i-sil.mdx).

3. **F1 minor: Cox: matrices 'can assign identical ratings' (modality)**
   - Old: i nadaje tę samą ocenę ilościowo bardzo różnym ryzykom (kompresja zakresu).
   - New: i może nadać tę samą ocenę ilościowo bardzo różnym ryzykom (kompresja zakresu).

4. **F1 minor: Baybutt 2016: reversals 'may occur' (modality)**
   - Old: - Baybutt (2016) opisuje odwrócenie rankingu: wyższe ryzyko trafia do niższej kategorii, a niższe do wyższej.
   - New: - Baybutt (2016) opisuje możliwe odwrócenie rankingu: wyższe ryzyko może trafić do niższej kategorii, a niższe do wyższej.

5. **F1 minor (modified): verified-facts W02 support 'no method' for both acts; numerical criteria: only the provisions read (art. 226, § 39a)**
   - Old: - Ani Kodeks pracy, ani rozporządzenie ogólne BHP nie wskazują metody oceny ani liczbowych kryteriów ryzyka.
   - New: - Ani Kodeks pracy, ani rozporządzenie ogólne BHP nie wskazują metody oceny; art. 226 i § 39a nie podają też liczbowych kryteriów ryzyka.

6. **F1 minor: notes: scope of 'no method' to the two acts**
   - Old: Metody żaden przepis nie narzuca, a norma PN-N-18002 jest dobrowolna.
   - New: Metody nie narzuca ani Kodeks pracy, ani rozporządzenie ogólne BHP, a norma PN-N-18002 jest dobrowolna.

7. **F1 minor: IEC 31010:2019 has Table A.3 on applicability of techniques to the ISO 31000 process**
   - Old: Połączenie rodzin z krokami ISO 31000 to ocena własna.
   - New: Zastosowanie technik w krokach procesu ISO 31000 IEC 31010 zestawia w tabl. A.3; uproszczone przypisanie na schemacie to ocena własna.

8. **F1 minor + coordinator: sum-of-indices = log multiplication only for constant-factor consequence classes; the table has letters, not colours**
   - Old: Kolory w komórkach to decyzja organizacji; tu przyjąłem regułę sumy indeksów, która odpowiada mnożeniu częstości przez skutek w skali logarytmicznej.
   - New: Kategorie w komórkach to decyzja organizacji; tu przyjąłem regułę sumy indeksów, która odpowiada mnożeniu częstości przez skutek w skali logarytmicznej, o ile kolejne kategorie skutków różnią się o stały czynnik — w przykładzie przyjmujemy to umownie.

9. **coordinator: no colours in the matrix table**
   - Old: mają ten sam kolor, choć społecznie oceniamy je zupełnie inaczej.
   - New: mają tę samą kategorię, choć społecznie oceniamy je zupełnie inaczej.

10. **coordinator: no colours in the matrix table**
   - Old: Typowe nieporozumienie: ryzyko w zielonym polu nie wymaga działań.
   - New: Typowe nieporozumienie: ryzyko w kategorii A nie wymaga żadnych działań.

11. **coordinator (checked the CIOP-PIB page 29.09.2026): CIOP-PIB page: PN-N-18002:2000 recommended a three- or five-level scale**
   - Old: trzy stopnie ciężkości następstw i trzy stopnie prawdopodobieństwa dają ryzyko małe, średnie lub duże.
   - New: trzy stopnie ciężkości następstw i trzy stopnie prawdopodobieństwa dają ryzyko małe, średnie lub duże (wydanie z 2000 r. zalecało skalę trój- albo pięciostopniową).

12. **F1 note + coordinator: CIOP-PIB page works over https (spec §5: external links https)** (all 3 occurrences)
   - Old: http://archiwum.ciop.pl/22111.html
   - New: https://archiwum.ciop.pl/22111.html


## 02-hazid-i-hazop.mdx

13. **F1 minor: IEC 61882 4.1: leader 'preferably assisted by a recorder'**
   - Old: - Zespół (4.1): badanie prowadzi przeszkolony i doświadczony prowadzący, wspierany przez protokolanta i specjalistów z różnych dziedzin.
   - New: - Zespół (4.1): badanie prowadzi przeszkolony i doświadczony prowadzący, najlepiej wspierany przez protokolanta; badanie opiera się na specjalistach z różnych dziedzin.

14. **F1 minor: notes: recorder not required**
   - Old: Norma wymaga prowadzącego, który zna metodę, protokolanta i specjalistów z różnych dziedzin.
   - New: Norma przewiduje prowadzącego, który zna metodę, najlepiej z protokolantem, oraz specjalistów z różnych dziedzin.

15. **F1 minor: TRAS 2.1(14)/1.4(28): 'zusätzliche Gasverbrauchseinrichtung' = flare or gas burner**
   - Old: wymaga, by pochodnia miała pierwszeństwo przed zadziałaniem zabezpieczenia nadciśnieniowego.
   - New: wymaga, by dodatkowe urządzenie zużywające gaz (np. pochodnia) miało pierwszeństwo przed zadziałaniem zabezpieczenia nadciśnieniowego.

16. **F1 minor: same, on 'Od wyników HAZOP do wymagań'**
   - Old: - **Blokada**: automatyczne włączenie pochodni przed wypływem biogazu
   - New: - **Blokada**: automatyczne włączenie dodatkowego urządzenia zużywającego gaz (np. pochodni) przed wypływem biogazu

17. **F1 minor: Uadiale: CWIF statistics compiled from press reports — visible hedge**
   - Old: | turbiny wiatrowe: wyładowania wymieniane jako pierwsza przyczyna zapłonu (Uadiale i in. 2014) |
   - New: | turbiny wiatrowe: wyładowania na pierwszym miejscu wśród przyczyn zapłonu w zestawieniu doniesień prasowych (CWIF), wg Uadiale i in. 2014 |

18. **F1 minor: SVLFG TI 4 limits the air pump but does not require O₂ measurement**
   - Old: kontrola dozowania powietrza (SVLFG TI 4) |
   - New: kontrola dozowania powietrza (ocena własna na podstawie SVLFG TI 4) |

19. **F1 minor: TRAS 2.6.3(3): 'separat von der Gasfüllstandsmessung', not 'independent'**
   - Old: Zwróćcie uwagę na napełnienie: TRAS wymaga osobnych urządzeń dla minimum i maksimum, niezależnych od pomiaru ruchowego.
   - New: Zwróćcie uwagę na napełnienie: TRAS wymaga, by urządzenia sygnalizujące minimum i maksimum były wykonane oddzielnie od pomiaru napełnienia, a minimum i maksimum zgłaszał system ochronny.

20. **F1 minor: Jenkins: plants 'are reported to have exploded'; causes: commissioning practice**
   - Old: Przegląd Jenkinsa i współautorów opisuje co najmniej pięć instalacji, które wybuchły przy pierwszym uruchomieniu.
   - New: Według przeglądu Jenkinsa i współautorów co najmniej pięć instalacji miało wybuchnąć przy pierwszym uruchomieniu; autorzy wskazują na niestosowanie zasad rozruchu, m.in. przedmuchu gazem obojętnym i zezwoleń na prace niebezpieczne pożarowo.

21. **F1 minor (modified wording): 'cecha' is the defined term for characteristic (lesson 17); 'essential features' rendered differently**
   - Old: składnik części, który pozwala określić jej istotne cechy, np. materiał, czynność, urządzenie.
   - New: składnik części, który pozwala rozpoznać jej zasadnicze aspekty (ang. essential features), np. materiał, czynność, urządzenie.

22. **F2 minor (applied to all pages): TRAS 120 Lesefassung: 'mit Korrektur vom 27. Februar 2019'** (all 2 occurrences)
   - Old: zm. 2019
   - New: korekta 2019


## 03-fmea-i-fmeca.mdx

23. **F2 MAJOR (checked by coordinator in the slide's own Table 7 values): offshore: gearbox, blades, generator also have O = 5; the tower is first because of S = 4**
   - Old: - Wieża jest pierwsza z powodu najwyższej oceny występowania (O = 5), a nie ciężkości: na lądzie wieża ma S = 3, a przekładnia S = 4.
   - New: - Na lądzie wieża jest pierwsza dzięki ocenie występowania (O = 5), a nie ciężkości: przekładnia ma S = 4, ale O = 3. Na morzu O = 5 mają też przekładnia, łopaty i generator, a wieżę wyróżnia S = 4.

24. **F2 minor: Walgern 2026 ranking per MW: rotor system incl. pitch first, then control; pitch, control, converter called critical**
   - Old: najwięcej awarii na MW rocznie ma układ zmiany kąta łopat, potem sterowanie i przekształtnik.
   - New: najwięcej awarii na MW rocznie ma układ wirnika (z układem zmiany kąta łopat), potem sterowanie; za krytyczne autorzy uznają układ zmiany kąta łopat, sterowanie i przekształtnik.

25. **F2 minor: notes, same**
   - Old: Nowy zbiór danych z 2026 roku, obejmujący też farmy lądowe, również stawia układ zmiany kąta łopat na pierwszym miejscu.
   - New: Nowy zbiór danych z 2026 roku, obejmujący też farmy lądowe, również stawia na pierwszym miejscu układ wirnika z układem zmiany kąta łopat.

26. **F2 minor: Carroll: 1,076 is pitch/hydraulics; blades are a separate category**
   - Old: czyli ok. 5,8 razy rzadziej niż układ łopat (obliczenia własne).
   - New: czyli ok. 5,8 razy rzadziej niż układ zmiany kąta łopat i hydraulika (obliczenia własne).

27. **F2 minor: Colli: result in the Conclusions**
   - Old: (wg streszczenia artykułu)
   - New: (wg wniosków artykułu)

28. **F2 minor: IEC 60812 3.1.15: criticality measures 'normally combine'**
   - Old: Krytyczność łączy ciężkość z co najmniej jedną inną cechą rodzaju uszkodzenia.
   - New: Miary krytyczności zwykle łączą ciężkość skutku z co najmniej jedną inną cechą rodzaju uszkodzenia (3.1.15).

29. **F2 minor: IEC 60812 3.2 lists SOD (severity, occurrence, detectability) and uses them in the RPN method (B.4)**
   - Old: - W praktyce arkusz uzupełnia się o oceny: S — ciężkość (ang. severity), O — występowanie (ang. occurrence) i D — wykrywalność (ang. detection; wyższa ocena oznacza trudniejsze wykrycie). IEC 60812 mówi o ciężkości i prawdopodobieństwie (ang. likelihood) i nie narzuca skal.
   - New: - Do szeregowania stosuje się oceny: S — ciężkość (ang. severity), O — występowanie (ang. occurrence) i D — wykrywalność (ang. detectability; wyższa ocena oznacza trudniejsze wykrycie). IEC 60812 używa ich w metodzie RPN (zał. B.4), w definicjach mówi o ciężkości i prawdopodobieństwie (ang. likelihood) i nie narzuca skal.

30. **F2 minor: column order is the writer's inference**
   - Old:  W typowym arkuszu kolumny układa się w tej kolejności.
   - New:  W typowym arkuszu kolumny układa się w tej kolejności (ocena własna).

31. **F2 minor: notes, same**
   - Old: Kolejność kroków w normie wyznacza układ kolumn arkusza, więc warto ją zapamiętać.
   - New: Kolejność kroków w normie dobrze oddaje logikę arkusza, choć układ kolumn bywa różny.

32. **F2 minor: Tavner D = 10: 'No known monitoring methods available'**
   - Old: 10 wykrycie prawie niemożliwe: brak metody wykrywania
   - New: 10 wykrycie prawie niemożliwe: brak znanych metod monitorowania

33. **F2 minor (safety wording): only failures not revealed by self-diagnostics are hidden (IEC 60300-3-11 3.1.11)**
   - Old: Niesprawny czujnik gazu milczy, więc monitoring procesu go nie pokaże (ocena własna).
   - New: Uszkodzenie czujnika gazu, którego nie wykrywa jego autodiagnostyka, jest ukryte: czujnik milczy, a monitoring procesu tego nie pokaże (ocena własna).

34. **F2 minor (safety wording): notes, same**
   - Old: Jeśli uszkodzenie jest ukryte, jak niesprawny czujnik gazu, monitoring procesu go nie pokaże, bo czujnik po prostu milczy.
   - New: Jeśli uszkodzenie jest ukryte, na przykład uszkodzenie czujnika gazu niewykryte przez jego autodiagnostykę, monitoring procesu go nie pokaże, bo czujnik po prostu milczy.

35. **F2 minor (modified): EPRI category is 'Cell/Module' (W1 page 01 says 'ogniwom' — reported in ledger-update)**
   - Old: przypisuje ogniwom 3 z 26 incydentów o ustalonej przyczynie (11%;
   - New: przypisuje kategorii ogniwo lub moduł (ang. Cell/Module) 3 z 26 incydentów o ustalonej przyczynie (11%;


## 04-fta-eta-i-bow-tie.mdx

36. **F2 minor: IEC 61025 3.9: 'cannot be further developed'**
   - Old: zdarzenie lub stan, którego nie rozwija się dalej.
   - New: zdarzenie lub stan, którego nie można dalej rozwinąć.

37. **F2 minor: NUREG-0492 Table IV-1: 'External Event' (house symbol)**
   - Old: zdarzenie „domowe”
   - New: zdarzenie zewnętrzne (symbol domku)

38. **F2 minor: Yuan 2026: top-event probability of a fuzzy BN = model-derived risk index for a reference scenario**
   - Old: Ich wynik 28% to prawdopodobieństwo warunkowe z ocen ekspertów, a nie częstość na rok.
   - New: Ich wynik 28% to wskaźnik z modelu (rozmyta sieć bayesowska, oceny ekspertów) dla scenariusza odniesienia, a nie częstość na rok.

39. **F2 minor: with q = 0,02 the naive gain is 1/q = 50, not 100**
   - Old: Typowe nieporozumienie: druga sztuka tego samego czujnika zawsze poprawia bezpieczeństwo stokrotnie.
   - New: Typowe nieporozumienie: druga sztuka tego samego czujnika zawsze poprawia wynik tyle, ile wynika z mnożenia, tu 50-krotnie.

40. **F2 minor: CCPS/EI book not read; content checked in Johnson et al. 2018**
   - Old: (CCPS — Center for Chemical Process Safety, i Energy Institute, 2018).
   - New: (CCPS — Center for Chemical Process Safety, i Energy Institute, 2018; wg Johnsona i in., 2018).

41. **F2 minor: the overpressure device itself releases biogas (TRAS 2.6.3(3)); it is a barrier against rupture**
   - Old: przed zadziałaniem zabezpieczenia podciśnieniowego trzeba ograniczyć, a w razie potrzeby zatrzymać pobór gazu (2.4(8)).
   - New: przed zadziałaniem zabezpieczenia podciśnieniowego trzeba ograniczyć, a w razie potrzeby zatrzymać pobór gazu (2.4(8)).
     - Zadziałanie zabezpieczenia nadciśnieniowego też uwalnia biogaz, ale w przewidzianym miejscu; barierą jest ono wobec rozerwania zbiornika (ocena własna).

42. **F2 minor: TRAS 120 Lesefassung: 'Korrektur'**
   - Old: wersja 12/2018 ze zmianą z 27.02.2019
   - New: wersja 12/2018 z korektą z 27.02.2019


## 05-lopa-i-sil.mdx

43. **F3 MAJOR (RR716 §6.5.2 opened by coordinator): RR716 adds: the whole system incl. alarm and cabling must be considered, the figure appears too low, PFD < 0,1 cannot be claimed; device = float/displacer level device**
   - Old: - Dane rzeczywiste (RR716, pkt 6.5.2): wyłącznik pływakowy, 19,3 × 10⁻⁶ /h, czyli ok. 0,17 /rok; przy teście raz w roku PFD ≈ 0,17/2 ≈ 0,085.
   - New: - Dane rzeczywiste (RR716, pkt 6.5.2): pływakowy lub wypornościowy czujnik poziomu w alarmie HH, 19,3 × 10⁻⁶ /h, czyli ok. 0,17 /rok; przy teście raz w roku PFD ≈ 0,17/2 ≈ 0,085. RR716 zaznacza jednak, że czujnika nie wolno oceniać w oderwaniu od całego układu (alarm, okablowanie), więc ta wartość wydaje się zbyt niska, a dla tej warstwy nie można przyjąć PFD mniejszego niż 0,1.

44. **F3 MAJOR (notes): notes, same**
   - Old: Przykład z raportu HSE jest prawdziwy: wyłącznik pływakowy o intensywności niebezpiecznych uszkodzeń około 0,17 na rok, testowany raz w roku, ma PFD około 0,085.
   - New: Przykład z raportu HSE jest prawdziwy: pływakowy czujnik poziomu o intensywności niebezpiecznych uszkodzeń około 0,17 na rok, testowany raz w roku, daje PFD około 0,085. Autorzy dodają jednak, że liczy się cały układ z alarmem i okablowaniem, więc PFD poniżej 0,1 nie wolno przyjąć; to ta sama granica co w W1.

45. **F3 minor (modified): variant B uses 0,1 although the page shows RR716's 0,19; state the result with 0,19**
   - Old: czyli przedział **SIL 1**. Różnica wynika wyłącznie z organizacji pracy.
   - New: czyli przedział **SIL 1**. Różnica wynika wyłącznie z organizacji pracy. Przy PFD warstwy alarmowej 0,19 (RR716, slajd o typowych błędach) byłoby $f = 1{,}9 \times 10^{-4}$ /rok i $RRF = 38$, nadal SIL 1.

46. **F3 minor: SAFEChE: 'Operator failure 10⁻²/opportunity' — no 'routine'**
   - Old: | Błąd operatora przy czynności rutynowej | IEF |
   - New: | Błąd operatora | IEF |

47. **F3 minor: RR716 (companies A, D) refers to the first edition BS EN 61511-3 Table F.3**
   - Old: - RR716: firmy brały prawdopodobieństwa błędu człowieka z tablicy F.3 normy bez uzasadnienia.
   - New: - RR716: firmy (m.in. A i D) brały prawdopodobieństwa błędu człowieka z tablicy F.3 pierwszego wydania normy (BS EN 61511-3) bez uzasadnienia.

48. **F3 minor: RR716 footnote: limit applies to a BPCS that places a demand on a protection layer**
   - Old: - Dla BPCS niezgodnego z normą pierwsze wydanie IEC 61511 nie pozwalało
   - New: - Dla BPCS niezgodnego z normą, który jest zdarzeniem inicjującym (stawia żądanie warstwie ochrony), pierwsze wydanie IEC 61511 nie pozwalało

49. **F3 minor: King 2014: 'operating as a continuous control function'**
   - Old: **tryb ciągły** — funkcja działa jak ciągła funkcja sterowania.
   - New: **tryb ciągły** — funkcja bezpieczeństwa działa jako ciągła funkcja sterowania.

50. **F3 minor: β = 0 is outside the 1–10% range**
   - Old: Umowne wartości z tabeli leżą w zakresie dla czujników.
   - New: Niezerowe wartości β z tabeli (0,02–0,10) leżą w zakresie dla czujników; β = 0 to przypadek odniesienia.

51. **F3 minor: IFA report based on the 2015 edition; DGUV = umbrella association of statutory accident insurance**
   - Old: (IFA, instytut bezpieczeństwa pracy niemieckiego ubezpieczyciela DGUV, opisuje ją jako graf ryzyka)
   - New: (IFA, instytut niemieckiego ustawowego ubezpieczenia wypadkowego DGUV, opisuje tę metodę dla wydania z 2015 r. jako graf ryzyka)

52. **F3 minor: ISO 13849-1 wording: probability of dangerous failure per hour**
   - Old: Miarą jest więc częstość niebezpiecznych uszkodzeń na godzinę, a nie PFDavg.
   - New: Miarą jest więc średnie prawdopodobieństwo niebezpiecznego uszkodzenia na godzinę (w terminologii ISO 13849-1), a nie PFDavg.

53. **F3 minor: W1 part 5 qualifier: BPCS not designed to IEC 61511**
   - Old: BPCS (Basic Process Control System — podstawowy system sterowania procesem) dostaje najwyżej RRF 10
   - New: BPCS (Basic Process Control System — podstawowy system sterowania procesem) niezaprojektowany według IEC 61511 dostaje najwyżej RRF 10

54. **F1 minor (consequence on 05): Stanley: 10⁻⁵ middle of ALARP region, 10⁻⁶ for firms aiming at the broadly acceptable line**
   - Old: Mieści się między celami dla pojedynczego scenariusza LOPA, które Stanley i in. (2018) wyprowadzają z granic R2P2: 10⁻⁵ /rok i 10⁻⁶ /rok
   - New: Mieści się między celami dla pojedynczego scenariusza LOPA, które omawiają Stanley i in. (2018): 10⁻⁵ /rok (środek obszaru ALARP) i 10⁻⁶ /rok

55. **F2 minor (applied to all pages): TRAS 120: 'Korrektur'**
   - Old: 2018, zm. 2019
   - New: 2018, korekta 2019


## 06-podsumowanie.mdx

56. **F3 minor: HAZOP row duplicated the LOPA question; align with 01**
   - Old: | HAZOP | Jakie odchylenia od zamierzenia projektowego są możliwe i czy zabezpieczenia wystarczą? |
   - New: | HAZOP | Jakie odchylenia od zamierzenia projektowego są możliwe i co je zatrzyma? |

57. **F3 minor (modified): Dunn & Sands: rationalization documents consequence, response time and operator action**
   - Old: - **Lista alarmów i racjonalizacja**: każdy alarm z HAZOP lub LOPA musi mieć przyczynę, oczekiwaną reakcję operatora i czas na nią (definicja alarmu:
   - New: - **Lista alarmów i racjonalizacja**: dla każdego alarmu z HAZOP lub LOPA dokumentuje się skutek braku reakcji, działanie operatora i czas na reakcję (za Dunnem i Sandsem, 2020; definicja alarmu:

58. **F3 minor: four quiz questions need calculation (Q5, Q6, Q8, Q9)**
   - Old: w tym trzema obliczeniowymi
   - New: w tym czterema wymagającymi obliczeń

59. **F1 minor (consequence in the quiz): quiz Q2 explanation aligned with fix 5**
   - Old: Ani Kodeks pracy, ani rozporządzenie w sprawie ogólnych przepisów BHP nie wskazują metody oceny ani liczbowych kryteriów ryzyka.
   - New: Ani Kodeks pracy, ani rozporządzenie w sprawie ogólnych przepisów BHP nie wskazują metody oceny; art. 226 i § 39a nie podają też liczbowych kryteriów ryzyka.

60. **F2 minor (applied to all pages): TRAS 120: 'Korrektur'**
   - Old: (2018, zm. 2019)
   - New: (2018, korekta 2019)


## index.md

61. **F3 minor: IEC 31010:2019 Annex B contains neither HAZID nor SIL**
   - Old: Omawiamy proces zarządzania ryzykiem według ISO 31000:2018 i metody opisane w IEC 31010:2019: HAZID (Hazard Identification — identyfikacja zagrożeń), HAZOP (Hazard and Operability Study — badanie zagrożeń i zdolności do działania), FMEA (Failure Modes and Effects Analysis — analiza rodzajów i skutków uszkodzeń) i FMECA (Failure Modes, Effects and Criticality Analysis — analiza rodzajów, skutków i krytyczności uszkodzeń), FTA (Fault Tree Analysis — analiza drzewa niezdatności), ETA (Event Tree Analysis — analiza drzewa zdarzeń), bow-tie, LOPA (Layer of Protection Analysis — analiza warstw ochrony) oraz dobór SIL (Safety Integrity Level — poziom nienaruszalności bezpieczeństwa).
   - New: Omawiamy proces zarządzania ryzykiem według ISO 31000:2018, metody opisane w IEC 31010:2019 — HAZOP (Hazard and Operability Study — badanie zagrożeń i zdolności do działania), FMEA (Failure Modes and Effects Analysis — analiza rodzajów i skutków uszkodzeń) i FMECA (Failure Modes, Effects and Criticality Analysis — analiza rodzajów, skutków i krytyczności uszkodzeń), FTA (Fault Tree Analysis — analiza drzewa niezdatności), ETA (Event Tree Analysis — analiza drzewa zdarzeń), bow-tie i LOPA (Layer of Protection Analysis — analiza warstw ochrony) — a także HAZID (Hazard Identification — identyfikacja zagrożeń; ISO 17776) i dobór SIL (Safety Integrity Level — poziom nienaruszalności bezpieczeństwa; IEC 61508, IEC 61511).

62. **coordinator: W9 line: redundant parenthesis; forward reference kept in substance**
   - Old:   - W9: Biogazownie — ochrona przeciwwybuchowa, detekcja gazów i bezpieczeństwo procesowe (W9 — bezpieczeństwo procesowe biogazowni) — przykłady HAZOP, bow-tie i LOPA zbiornika biogazu wrócą tam razem z doborem detektorów i nastaw;
   - New:   - W9: Biogazownie — ochrona przeciwwybuchowa, detekcja gazów i bezpieczeństwo procesowe — przykłady HAZOP, bow-tie i LOPA zbiornika biogazu wrócą tam jako punkt wyjścia do bezpieczeństwa procesowego biogazowni, razem z doborem detektorów i nastaw;
