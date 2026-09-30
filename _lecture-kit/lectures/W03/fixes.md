# Accepted fixes — W3 (30.09.2026)

Files: `/mnt/user-data/outputs/lecture/wyklad-03-architektura-monitoringu/`. Sources of the findings: `factcheck-1.md` (F1: index, 01, 02), `factcheck-2.md` (F2: 03, 04), `factcheck-3.md` (F3: 05, 06). Prompts: `factcheck-prompts.md`.

Result of triage: 0 critical. 4 major, all accepted after the coordinator opened the sources: F1 #1 (the cited PRC-002-3 was Draft 1 of 2018; current is PRC-002-5, NERC Board 8.10.2024, FERC 20.02.2025, R10 unchanged); F1 #2 (Macii & Rinaldi attribute the six synchronisation classes to IEC 61850-5:2013 — the page said the opposite); F2 #1–#2 (2022 restructuring of IEC 61400-12: 12-2:2022 ed. 2.0 is current, anemometer classification and calibration moved to IEC 61400-50-1:2022 — IEC webstore and the 50-1 sample opened). 38 minor findings, all accepted (modified wording: F1 #7, F1 #12, F3 #9, F3 #11 — CSB p. 23 and Appendix S opened by the coordinator); F2's optional improvement (IEC 61724-1 Introduction) added; none rejected. The coordinator added 5 fixes of their own: PLC expansion as in W1/W2 (21–22), density of 02 slide 1 (26–28), VIM 4.21 "przyrostowa" (38). Consequences were applied wherever the same wording appeared (PRC-002-5 on 01 and in the 06 quiz; "zmiana 1" of GUM on 02, 03 and index; Buncefield para 99 in the 06 quiz; T13-03 label in all bibliographies).

Applied by the coordinator with `fixtool/apply_fixes.py`, which asserts that each old text occurs exactly the expected number of times (79 fixes, all matched). The consolidated bibliography of 06 was then regenerated from the topic pages with `fixtool/build_bib.py` (55 entries, exact copies). Pre-fix copies: `fixtool/pre-fix/`. calc_A.py got the 22 mA check (fix 25). After the fixes: calc.py ALL CHECKS PASSED (calc_A, calc_B, calc_C), LINT OK (no WARN), MDX CHECK OK (63 KaTeX, 4 mermaid), all instructor notes 60–150 words.



## 01-cele-architektura-i-czas.mdx

1. **F1 major (coordinator opened PRC-002-5): the cited PRC-002-3 URL is Draft 1 (2018); current version PRC-002-5 (Board 8.10.2024, FERC 20.02.2025), R10 unchanged**
   - Old: standardy NERC (Ameryka Północna) PRC-002-3 (wymaganie R10) i PRC-028-1 (R6)
   - New: standardy NERC (Ameryka Północna) PRC-002-5 (wymaganie R10) i PRC-028-1 (R6)

2. **F1 major (consequence): source lines on the UTC and synchronisation slides point to the current PRC-002-5**
   - Old: [NERC, PRC-002-3](https://www.nerc.com/globalassets/standards/projects/2015-09/prc-002-3---clean.pdf); [NERC, PRC-028-1](https://www.nerc.com/globalassets/standards/reliability-standards/prc/prc-028-1.pdf)
   - New: [NERC, PRC-002-5](https://www.nerc.com/globalassets/standards/reliability-standards/prc/prc-002-5.pdf); [NERC, PRC-028-1](https://www.nerc.com/globalassets/standards/reliability-standards/prc/prc-028-1.pdf)

3. **F1 major (consequence): PRC-002-5 and PRC-028-1 were adopted and approved on the same dates**
   - Old: PRC-002-3 (R10) — zegary rejestracji sekwencji zdarzeń i zakłóceń w granicach ±2 ms od UTC; PRC-028-1 dla źródeł przyłączonych przez falowniki (przyjęty przez zarząd NERC 8.10.2024, zatwierdzony przez FERC, federalnego regulatora energetyki USA, 20.02.2025) — ±100 ms dla danych z poziomu falownika i ±1 ms dla pozostałych urządzeń.
   - New: PRC-002-5 (R10) — zegary rejestracji sekwencji zdarzeń i zakłóceń w granicach ±2 ms od UTC; PRC-028-1 dla źródeł przyłączonych przez falowniki — ±100 ms dla danych z poziomu falownika i ±1 ms dla pozostałych urządzeń. Oba standardy przyjął zarząd NERC 8.10.2024, a FERC, federalny regulator energetyki USA, zatwierdził je 20.02.2025.

4. **F1 major (coordinator opened the manuscript): Macii & Rinaldi, Table 1 caption: classes 'specified in the IEC Standard 61850-5:2013'**
   - Old: - Macii i Rinaldi dzielą wymagania na klasy od 1 µs (pomiary fazorów) przez 1 ms (znakowanie szybkich zdarzeń) do ponad 1 s; to klasyfikacja autorów, a nie oznaczenia IEC 61850-5.
   - New: - Macii i Rinaldi, powołując się na IEC 61850-5:2013, podają sześć klas dokładności synchronizacji: od 1 µs (pomiary fazorów) przez 1 ms (znakowanie szybkich zdarzeń) do ponad 1 s (tekstu normy nie sprawdzaliśmy).

5. **F1 minor: RFC 5905 speaks of precision ('precise within'), not accuracy**
   - Old: RFC 5905: od kilkudziesięciu µs (serwery pierwotne) do kilkudziesięciu ms (interwał odpytywania do 36 h)
   - New: RFC 5905 podaje precyzję (ang. precise within) od kilkudziesięciu µs (serwery pierwotne) do kilkudziesięciu ms (interwał odpytywania do 36 h)

6. **F1 major (consequence) + F1 minor #3: Interim Report sentence is quoted in the guidelines of the PRC-002-3 draft; ±2 ms already in PRC-002-2; current PRC-002-5**
   - Old: cytowany w uzasadnieniu standardu NERC PRC-002-3:
   - New: cytowany w wytycznych do projektu standardu NERC PRC-002-3 (2018):

7. **F1 minor #3: ±2 ms (R10) was already in PRC-002-2; current version PRC-002-5**
   - Old: - Dalsze wymagania NERC: PRC-018-1 włączono do PRC-002-2 (13.11.2014), potem PRC-002-3 (±2 ms od UTC), a dla źródeł falownikowych PRC-028-1 (2024/2025; ±1 ms i ±100 ms). Ta droga jest zbieżna z rekomendacją 28 (ocena własna).
   - New: - Dalsze wymagania NERC: PRC-018-1 włączono do PRC-002-2 (13.11.2014), który zawierał już wymaganie R10 (±2 ms od UTC); obecna wersja to PRC-002-5, a dla źródeł falownikowych dodano PRC-028-1 (oba zatwierdzone przez FERC 20.02.2025; ±1 ms i ±100 ms). Ta droga jest zbieżna z rekomendacją 28 (ocena własna).

8. **F1 major (consequence): blackout slide source: the draft (for the quote) and the current version**
   - Old: [NERC, PRC-002-3](https://www.nerc.com/globalassets/standards/projects/2015-09/prc-002-3---clean.pdf); [Task Force
   - New: [NERC, projekt PRC-002-3, 2018](https://www.nerc.com/globalassets/standards/projects/2015-09/prc-002-3---clean.pdf); [NERC, PRC-002-5](https://www.nerc.com/globalassets/standards/reliability-standards/prc/prc-002-5.pdf); [Task Force

9. **F1 major (consequence): bibliography: current version first, the 2018 draft as the source of the quoted guideline**
   - Old: 16. NERC (2018). *PRC-002-3 Disturbance Monitoring and Reporting Requirements* (projekt 2015-09, tekst czysty). [https://www.nerc.com/globalassets/standards/projects/2015-09/prc-002-3---clean.pdf](https://www.nerc.com/globalassets/standards/projects/2015-09/prc-002-3---clean.pdf)
   - New: 16. NERC (2024). *PRC-002-5 Disturbance Monitoring and Reporting Requirements* (przyjęty przez zarząd NERC 8.10.2024, zatwierdzony przez FERC 20.02.2025). [https://www.nerc.com/globalassets/standards/reliability-standards/prc/prc-002-5.pdf](https://www.nerc.com/globalassets/standards/reliability-standards/prc/prc-002-5.pdf); projekt PRC-002-3 z wytycznymi (2018, projekt 2015-09): [https://www.nerc.com/globalassets/standards/projects/2015-09/prc-002-3---clean.pdf](https://www.nerc.com/globalassets/standards/projects/2015-09/prc-002-3---clean.pdf)

10. **F1 minor #4 (coordinator opened the IRIS record): journal identified: IEEE Instrumentation & Measurement Magazine 25(6): 11–18 (2022), DOI 10.1109/MIM.2022.9847197**
   - Old: 22. Macii D., Rinaldi S. (b.d., ok. 2022). *Time Synchronization for Smart Grids Applications: Requirements and Uncertainty Issues* (manuskrypt przyjęty do druku; czasopisma nie sprawdzono). Repozytorium IRIS Uniwersytetu w Trydencie. [
   - New: 22. Macii D., Rinaldi S. (2022). Time Synchronization for Smart Grids Applications: Requirements and Uncertainty Issues. *IEEE Instrumentation & Measurement Magazine* 25(6): 11–18. [https://doi.org/10.1109/MIM.2022.9847197](https://doi.org/10.1109/MIM.2022.9847197); manuskrypt przyjęty do druku (repozytorium IRIS Uniwersytetu w Trydencie): [

11. **F1 minor #5 (coordinator opened the NIST glossary): the historian paraphrase described the control centre; NIST glossary definition of data historian**
   - Old: | archiwum danych procesowych (ang. historian) | przechowuje i rejestruje informacje zebrane w obiektach terenowych | dane 10-minutowe turbin |
   - New: | archiwum danych procesowych (ang. historian) | scentralizowana baza danych wspierająca analizę danych metodami statystycznego sterowania procesem (słownik NIST) | dane 10-minutowe turbin |

12. **F1 minor #5 (source): add the NIST glossary entry for data historian**
   - Old: Źródło: [NIST SP 800-82r3](https://doi.org/10.6028/NIST.SP.800-82r3); [NIST CSRC, słownik: RTU](https://csrc.nist.gov/glossary/term/remote_terminal_unit)
   - New: Źródło: [NIST SP 800-82r3](https://doi.org/10.6028/NIST.SP.800-82r3); [NIST CSRC, słownik: RTU](https://csrc.nist.gov/glossary/term/remote_terminal_unit); [NIST CSRC, słownik: data historian](https://csrc.nist.gov/glossary/term/data_historian)

13. **F1 minor #5 (bibliography): add the data historian glossary URL to entry 12**
   - Old: 12. NIST (b.d.). *CSRC Glossary: remote terminal unit (RTU)*. [https://csrc.nist.gov/glossary/term/remote_terminal_unit](https://csrc.nist.gov/glossary/term/remote_terminal_unit)
   - New: 12. NIST (b.d.). *CSRC Glossary: remote terminal unit (RTU)*. [https://csrc.nist.gov/glossary/term/remote_terminal_unit](https://csrc.nist.gov/glossary/term/remote_terminal_unit); *data historian*: [https://csrc.nist.gov/glossary/term/data_historian](https://csrc.nist.gov/glossary/term/data_historian)

14. **F1 minor #6: T13-03 Table 1 = parameters measured in real time (adapted from IEC 61724); 'durations of system outage'**
   - Old: - PV: minimalny zestaw parametrów wg IEA PVPS T13-03:2014 (tabl. 1) obejmuje także czas trwania przerw.
   - New: - PV: tabl. 1 raportu IEA PVPS T13-03:2014 (parametry mierzone w czasie rzeczywistym, wg IEC 61724) obejmuje także czas trwania przestojów systemu.

15. **F1 minor #7: BMS belongs to level 2 as on the diagram; SOC/SOH are BMS estimates**
   - Old: | BESS | BMS: stan naładowania, stan zdrowia, temperatura ogniw | lokalny EMS: zarządzanie urządzeniami, sterowanie PCS, komunikacja |
   - New: | BESS | pomiary ogniw: napięcie, prąd, temperatura (ocena własna) | BMS (m.in. stan naładowania, stan zdrowia, temperatura ogniw); lokalny EMS: zarządzanie urządzeniami, sterowanie PCS, komunikacja |

16. **F1 minor #9: the release says 'no risk to the WECs' and 'no SCADA monitoring', not that the turbines kept producing**
   - Old: - Wniosek (ocena własna): utrata łącza monitoringu nie zatrzymała bezpiecznej pracy, bo sterowanie i zabezpieczenia działają lokalnie, a kanał operatora sieci był oddzielny; opóźniła jednak diagnostykę i serwis zdalny.
   - New: - Wniosek (ocena własna): według producenta utrata łącza monitoringu nie stworzyła zagrożenia dla turbin, bo sterowanie i zabezpieczenia działają lokalnie, a kanał operatora sieci był oddzielny; zabrakło jednak zdalnego monitoringu, diagnostyki i serwisu.

17. **F1 minor #9 (notes): same point in the notes**
   - Old: Typowe nieporozumienie: brak łączności oznacza postój instalacji. Tu instalacja pracowała, tylko nikt z zewnątrz jej nie widział.
   - New: Typowe nieporozumienie: brak łączności oznacza zagrożenie albo postój instalacji. Według komunikatu turbiny nie były zagrożone, a operatorzy sieci mieli do nich dostęp; zabrakło zdalnego monitoringu SCADA i serwisu.

18. **F1 minor #10: Maldonado-Correa: conditional economic argument, not causal**
   - Old: turbin wiatrowych służą też do monitorowania stanu, bo nie wymagają dodatkowych czujników ani sprzętu akwizycji (przegląd Maldonado-Correa i in., 2020).
   - New: turbin wiatrowych są atrakcyjną ekonomicznie podstawą monitorowania stanu, bo nie wymagają dodatkowych czujników ani sprzętu akwizycji (przegląd Maldonado-Correa i in., 2020).

19. **F1 minor #13: IEC/IEEE 61850-9-3:2016 stability date 2026**
   - Old: Precision time protocol profile for power utility automation*, wyd. 1.0. [
   - New: Precision time protocol profile for power utility automation*, wyd. 1.0 (data stabilności 2026 — przed zajęciami sprawdzić). [

20. **F1 minor #14: one label for T13-03 in all bibliographies**
   - Old: Performance Analysis* (IEA PVPS T13-03:2014). IEA PVPS.
   - New: Performance Analysis* (Report IEA-PVPS T13-03:2014). IEA PVPS.

21. **coordinator: PLC expansion as in W1 and W2**
   - Old: PLC (Programmable Logic Controller — sterownik programowalny)
   - New: PLC (Programmable Logic Controller — programowalny sterownik logiczny)

22. **coordinator (notes): PLC term in the notes**
   - Old: Sterownik programowalny wykonuje program:
   - New: Sterownik PLC wykonuje program:


## 02-tor-pomiarowy.mdx

23. **F1 minor #14: one label for T13-03 in all bibliographies**
   - Old: Performance Analysis* (IEA PVPS T13-03:2014). IEA PVPS.
   - New: Performance Analysis* (Report IEA-PVPS T13-03:2014). IEA PVPS.

24. **F1 minor #11: define k so that the alias falls in 0…f_s/2**
   - Old: gdzie $k$ jest liczbą całkowitą — to **aliasing**.
   - New: gdzie $k$ jest liczbą całkowitą dobraną tak, by wynik leżał w przedziale od 0 do $f_s/2$ — to **aliasing**.

25. **F1 minor #12: loop budget must hold for the NE 43 high failure current (≥ 21 mA); 22 mA gives ≈ 614 Ω**
   - Old: - Minimalne napięcie i dopuszczalne obciążenie konkretnego przetwornika podaje jego karta katalogowa; tu przyjęto je umownie.
   - New: - Minimalne napięcie i dopuszczalne obciążenie konkretnego przetwornika podaje jego karta katalogowa; tu przyjęto je umownie. Budżet sprawdza się dla największego prądu: przy sygnale uszkodzenia ≥ 21 mA ([część 5](./05-uszkodzenia-toru-i-przyklad-biogazowy.mdx)), np. 22 mA, $R_{max} = 13{,}5\ \mathrm{V} / 0{,}022\ \mathrm{A} \approx 614\ \Omega$, nadal więcej niż 285 Ω (ocena własna).

26. **coordinator (slide density): slide 1 too long for one screen: the terminology note moves to the notes**
   - Old: - Polskie nazwy to powszechne terminy techniczne: polskiego VIM (PKN-ISO/IEC Guide 99:2010) nie ma w wolnym dostępie, dlatego podajemy terminy angielskie. ⏎ - Kolejne slajdy omawiają bloki schematu: pętla 4–20 mA i protokół HART (Highway Addressable Remote Transducer), przetwornik analogowo-cyfrowy, próbkowanie, uśrednianie, zapis. ⏎
   - New: (deleted)

27. **coordinator (notes): terminology note in the notes**
   - Old: Słownik VIM daje nam wspólny język. Czujnik
   - New: Słownik VIM daje nam wspólny język. Polskie nazwy to powszechne terminy techniczne: polskiego wydania VIM (PKN-ISO/IEC Guide 99:2010) nie ma w wolnym dostępie, dlatego przy każdym podaję termin angielski. Czujnik

28. **coordinator (consequence of 26): HART expanded at first use in text**
   - Old: - Protokół **HART** nakłada
   - New: - Protokół **HART** (Highway Addressable Remote Transducer) nakłada

29. **F2 minor #4: an Amendment is 'zmiana' in PN usage**
   - Old: zał. F; w 2026 r. wydano poprawkę JCGM 100:2008/Amd.1:2026.
   - New: zał. F; w 2026 r. wydano zmianę 1 (JCGM 100:2008/Amd.1:2026, nieliniowość modeli pomiaru).


## 03-niepewnosc-i-wzorcowanie.mdx

30. **F2 minor #4: an Amendment is 'zmiana'**
   - Old: to JCGM 100:2008, z poprawką Amd.1:2026.
   - New: to JCGM 100:2008 ze zmianą 1 (JCGM 100:2008/Amd.1:2026, nieliniowość modeli pomiaru).

31. **F2 minor #4 (bibliography): an Amendment is 'zmiana'**
   - Old: , wyd. 1, z poprawką Amd.1:2026. BIPM.
   - New: , wyd. 1, ze zmianą 1 (Amd.1:2026). BIPM.

32. **F2 minor #5 (coordinator opened the EA PDF: EA-4/02 M:2022 rev03, 4.04.2022): cite EA's own copy**
   - Old: (dokument EA, European co-operation for Accreditation — europejska współpraca w dziedzinie akredytacji; kopia udostępniona przez hiszpańską jednostkę akredytującą ENAC), pkt 5.1
   - New: (dokument EA, European co-operation for Accreditation — europejska współpraca w dziedzinie akredytacji; rev03 z 4.04.2022), pkt 5.1

33. **F2 minor #5 (source line): EA URL**
   - Old: [EA-4/02 M:2022, kopia ENAC](https://www.enac.es/documents/7020/635abf3f-262a-4b3b-952f-10336cdfae9e)
   - New: [EA-4/02 M:2022](https://european-accreditation.org/wp-content/uploads/2018/10/EA-4-02.pdf)

34. **F2 minor #5 (bibliography): EA URL**
   - Old: 6. EA (2022). *EA-4/02 M:2022 Evaluation of the Uncertainty of Measurement in Calibration*. European co-operation for Accreditation (kopia udostępniona przez ENAC). [https://www.enac.es/documents/7020/635abf3f-262a-4b3b-952f-10336cdfae9e](https://www.enac.es/documents/7020/635abf3f-262a-4b3b-952f-10336cdfae9e)
   - New: 6. EA (2022). *EA-4/02 M:2022 Evaluation of the Uncertainty of Measurement in Calibration*, rev03 (4.04.2022). European co-operation for Accreditation. [https://european-accreditation.org/wp-content/uploads/2018/10/EA-4-02.pdf](https://european-accreditation.org/wp-content/uploads/2018/10/EA-4-02.pdf)

35. **F2 minor #3 (coordinator opened the Vademecum): use the official Polish wording of VIM 2.39 and its Note 2 (Vademecum 2022)**
   - Old: - **Wzorcowanie** (ang. calibration, VIM 2.39): działanie, które w określonych warunkach w pierwszym kroku ustala zależność między wartościami odtwarzanymi przez wzorzec pomiarowy (z ich niepewnościami) a wskazaniami przyrządu, a w drugim kroku wykorzystuje ją do uzyskiwania wyniku pomiaru ze wskazania (tłumaczenie własne; początek definicji jak w Vademecum Głównego Urzędu Miar). ⏎ - Wg VIM (uwaga 2 do 2.39) wzorcowania nie należy mylić z adiustacją układu pomiarowego (regulacją, często błędnie nazywaną „samokalibracją”) ani ze sprawdzeniem wzorcowania.
   - New: - **Wzorcowanie** (ang. calibration, VIM 2.39): „działanie, które w określonych warunkach, w pierwszym kroku ustala zależność pomiędzy odwzorowywanymi przez wzorzec pomiarowy wartościami wielkości wraz z ich niepewnościami pomiaru, a odpowiadającymi im wskazaniami wraz z ich niepewnościami, natomiast w drugim kroku wykorzystuje tę informację do ustalenia zależności pozwalającej uzyskać wynik pomiaru na podstawie wskazania” (brzmienie wg Vademecum Głównego Urzędu Miar, 2022). ⏎ - Uwaga 2 do 2.39: „Wzorcowania nie należy mylić z adiustacją układu pomiarowego, często mylnie nazywaną »samowzorcowaniem«, ani z weryfikacją wzorcowania”.

36. **F2 minor #6: ILAC-G24 4.2 a) and b) wording**
   - Old: ponowne wzorcowanie ma m.in. oszacować odchyłkę od wartości odniesienia i potwierdzić deklarowaną niepewność (4.2).
   - New: ponowne wzorcowanie ma m.in. oszacować odchyłkę od wartości odniesienia i jej niepewność w chwili użycia przyrządu oraz wesprzeć walidację wymaganej lub deklarowanej niepewności (4.2).

37. **F2 minor #7 (verified-facts W03, DA-06 3.1.1–3.1.2): 3.1.1 lists four routes; route 4 needs evidence (3.1.2)**
   - Old: których jednostka akredytująca jest sygnatariuszem porozumień o wzajemnym uznawaniu EA MLA lub ILAC MRA.
   - New: których jednostka akredytująca jest sygnatariuszem porozumień o wzajemnym uznawaniu EA MLA lub ILAC MRA. Pkt 3.1.1 dopuszcza też wzorcowanie poza tymi porozumieniami; dla laboratorium spoza ILAC MRA pkt 3.1.2 wymaga m.in. miarodajnych dowodów zasadności takiego wyboru i audytów dostawcy.

38. **F2 could-not-verify note (literal translation): VIM 4.21 'incremental' = 'przyrostowa'**
   - Old: ciągła lub skokowa zmiana wskazania w czasie
   - New: ciągła lub przyrostowa zmiana wskazania w czasie


## 04-czujniki-i-monitoring-pv.mdx

39. **F2 major #1–#2 (coordinator opened IEC webstore 68500, 69216 and the 50-1 sample): 2022 restructuring: 12-1 power curve, 12-2:2022 nacelle anemometry (current), 50-1:2022 wind measurement incl. anemometer classification, calibration, in-situ comparison**
   - Old: - IEC 61400-12-1:2022 (wyd. 3.0 z 5.09.2022, z poprawką z 05.2025) zastąpiła IEC 61400-12-1:2017 i IEC 61400-12-2:2013 (anemometria gondolowa). Załączniki normatywne: F — wzorcowanie anemometrów w tunelu aerodynamicznym; I — klasyfikacja anemometrii czaszowej i ultradźwiękowej; J — jej ocena; K — porównanie anemometrów na miejscu pomiaru.
   - New: - W 2022 r. serię IEC 61400-12 przebudowano: IEC 61400-12-1:2022 (wyd. 3.0 z 5.09.2022, z poprawką z 05.2025) opisuje pomiar krzywej mocy, IEC 61400-12-2:2022 (wyd. 2.0) wariant z anemometrem na gondoli, a IEC 61400-50-1:2022 (wyd. 1.0 z 16.11.2022) pomiar wiatru. Razem zastąpiły IEC 61400-12-1:2017 i IEC 61400-12-2:2013. ⏎ - IEC 61400-50-1:2022 opisuje klasyfikację i ocenę anemometrów czaszowych i ultradźwiękowych (rozdz. 6–7), wzorcowanie w tunelu aerodynamicznym z analizą niepewności (rozdz. 8) i porównanie anemometrów na miejscu pomiaru (rozdz. 9).

40. **F2 major (notes): the notes said the series was merged — it was split**
   - Old: W 2022 roku pomiary krzywej mocy, łącznie z anemometrią gondolową, zebrano w jednej normie, więc nie cytujemy już osobnej części 12-2.
   - New: W 2022 roku serię norm przebudowano: krzywa mocy, wariant z anemometrem na gondoli i sam pomiar wiatru mają teraz osobne części, a klasyfikacja i wzorcowanie anemometrów trafiły do IEC 61400-50-1.

41. **F2 major (source line): sources for 12-2:2022 and 50-1:2022**
   - Old: [IEC 61400-12-1:2022, próbka normy](https://cdn.standards.iteh.ai/samples/105156/3a4f433b403c4d9bababf32e1b9b13f3/IEC-61400-12-1-2022.pdf); [MEASNET
   - New: [IEC 61400-12-1:2022, próbka normy](https://cdn.standards.iteh.ai/samples/105156/3a4f433b403c4d9bababf32e1b9b13f3/IEC-61400-12-1-2022.pdf); [IEC 61400-12-2:2022](https://webstore.iec.ch/en/publication/68500); [IEC 61400-50-1:2022](https://webstore.iec.ch/en/publication/69216); [IEC 61400-50-1:2022, próbka normy](https://cdn.standards.iteh.ai/samples/105556/722392eb3aa44751a32a7172b86f7ced/IEC-61400-50-1-2022.pdf); [MEASNET

42. **F2 major (bibliography): entries 23–24 for 12-2:2022 and 50-1:2022**
   - Old: 22. Lindig S., Louwen A., Moser D., Topic M. (2020). Outdoor PV System Monitoring—Input Data Quality, Data Imputation and Filtering Approaches. *Energies* 13(19): 5099. [https://doi.org/10.3390/en13195099](https://doi.org/10.3390/en13195099) ⏎
   - New: 22. Lindig S., Louwen A., Moser D., Topic M. (2020). Outdoor PV System Monitoring—Input Data Quality, Data Imputation and Filtering Approaches. *Energies* 13(19): 5099. [https://doi.org/10.3390/en13195099](https://doi.org/10.3390/en13195099) ⏎ 23. IEC (2022). *IEC 61400-12-2:2022 Wind energy generation systems — Part 12-2: Power performance of electricity producing wind turbines based on nacelle anemometry*, wyd. 2.0. [https://webstore.iec.ch/en/publication/68500](https://webstore.iec.ch/en/publication/68500) ⏎ 24. IEC (2022). *IEC 61400-50-1:2022 Wind energy generation systems — Part 50-1: Wind measurement — Application of meteorological mast, nacelle and spinner mounted instruments*, wyd. 1.0. [https://webstore.iec.ch/en/publication/69216](https://webstore.iec.ch/en/publication/69216); próbka normy (iTeh): [https://cdn.standards.iteh.ai/samples/105556/722392eb3aa44751a32a7172b86f7ced/IEC-61400-50-1-2022.pdf](https://cdn.standards.iteh.ai/samples/105556/722392eb3aa44751a32a7172b86f7ced/IEC-61400-50-1-2022.pdf) ⏎

43. **F2 minor #8: only the normative reference to IEC 60904-5 is verifiable**
   - Old: Zamiast czujnika na tylnej powierzchni można wyznaczyć równoważną temperaturę ogniwa z napięcia obwodu otwartego (IEC 60904-5, powołana w IEC 61724-1:2021).
   - New: IEC 61724-1:2021 powołuje normatywnie IEC 60904-5 (równoważna temperatura ogniwa wyznaczana z napięcia obwodu otwartego); sposób jej użycia trzeba sprawdzić w tekście normy.

44. **F2 minor #9: Tang: constrained bandwidth in low-frequency options**
   - Old: | mały dryft zera i duża dokładność; ograniczone pasmo, większy pobór prądu |
   - New: | mały dryft zera i duża dokładność; w wersjach niskoczęstotliwościowych ograniczone pasmo; większy pobór prądu |

45. **F2 minor #10: full author list, volume and article number**
   - Old: 11. Tang C. i in. (2024). Review of the current transducer techniques. *Discover Applied Sciences*. [
   - New: 11. Tang C., Liang J., Zhu Q., Lu X., Shu J., Jiang C. (2024). Review of the current transducer techniques. *Discover Applied Sciences* 6: 351. [

46. **F2 minor #12: Table 1 of IEC 61724-1, not of T13-03**
   - Old: | próbkowanie i zapis | próbkowanie co 1 s lub częściej, zapis średnich co 5–15 min; wymagania klasy: tabl. 1 | IEA PVPS T13-03 |
   - New: | próbkowanie i zapis | próbkowanie co 1 s lub częściej, zapis średnich co 5–15 min; wymagania klasy: tabl. 1 IEC 61724-1:2021 | IEA PVPS T13-03; tekst normy |

47. **F2 minor #11: T13-03 says nothing about UTC**
   - Old: dostępność danych co najmniej 99%, poniżej 95% — system akwizycji niskiej jakości | IEA PVPS T13-03 |
   - New: dostępność danych co najmniej 99%, poniżej 95% — system akwizycji niskiej jakości | część 1 (UTC); IEA PVPS T13-03 (dostępność) |

48. **F2 minor #13: ranges attributed to HSE 2004**
   - Old: | tlen 0–100%, gazy toksyczne 0–1000 ppm; starzenie ([część 3](./03-niepewnosc-i-wzorcowanie.mdx)) |
   - New: | zakresy wg HSE (2004): tlen 0–100%, gazy toksyczne 0–1000 ppm; starzenie ([część 3](./03-niepewnosc-i-wzorcowanie.mdx)) |

49. **F2 minor #14: the gloss is not in Reda**
   - Old: („półprzewodnikowy” oznacza tu piranometr z fotodiodą, a nie ogniwo referencyjne):
   - New: („półprzewodnikowy” oznacza tu piranometr z fotodiodą, a nie ogniwo referencyjne — zasada podręcznikowa):

50. **F2 minor #15: own inference labelled**
   - Old: Dlatego temperaturę modułu mierzy się razem z temperaturą otoczenia i prędkością wiatru.
   - New: Dlatego temperaturę modułu warto mierzyć razem z temperaturą otoczenia i prędkością wiatru (ocena własna).

51. **F2 minor #15: undated normative references**
   - Old: IEC 61724-1:2021 powołuje normatywnie IEC 61557-12 (urządzenia
   - New: IEC 61724-1:2021 powołuje normatywnie (bez daty wydania) IEC 61557-12 (urządzenia

52. **F2 optional (verified by checker 2 in the IEC sample): primary support from the Introduction of IEC 61724-1**
   - Old: Tak opisuje je producent czujników (Hukseflux); tego zdania nie cytujemy z tekstu normy.
   - New: Tak opisuje je producent czujników (Hukseflux); tego zdania nie cytujemy z tekstu normy. Sam wstęp normy mówi, że większe systemy PV powinny mieć więcej punktów monitoringu i czujniki o większej dokładności (tłumaczenie własne).


## 05-uszkodzenia-toru-i-przyklad-biogazowy.mdx

53. **F3 minor #1: para 99 adopts the lesson of the Baker report on Texas City**
   - Old: Wniosek raportu (pkt 99): systemy ochrony bezpieczeństwa procesowego nie powinny polegać na reakcji operatora na alarmy, a zabezpieczenie przed przepełnieniem powinno być niezależne od zwykłego monitoringu ruchowego.
   - New: Raport (pkt 99) przywołuje wniosek raportu Bakera po Texas City — systemy ochrony bezpieczeństwa procesowego nie powinny polegać na reakcji operatora na alarmy, a zabezpieczenie przed przepełnieniem powinno być niezależne od zwykłego monitoringu ruchowego — i stwierdza, że tę lekcję trzeba wyciągnąć także z Buncefield.

54. **F3 minor #2: DC partly from expert judgement and certificates; automatic tests incl. external diagnostics**
   - Old: - Dane SINTEF dla przetworników z norweskiego przemysłu naftowego i gazowego: **pokrycie diagnostyczne** (DC, ang. diagnostic coverage), czyli udział uszkodzeń niebezpiecznych wykrywanych automatycznie, wynosi 65% dla przetworników ciśnienia i przepływu oraz 70% dla poziomu i temperatury.
   - New: - Wg SINTEF (λDU z danych eksploatacyjnych norweskiego przemysłu naftowego i gazowego; DC ustalone m.in. na podstawie ocen ekspertów i certyfikatów) **pokrycie diagnostyczne** (DC, ang. diagnostic coverage), czyli udział uszkodzeń niebezpiecznych wykrywanych przez testy automatyczne (autodiagnostyka urządzenia i diagnostyka zewnętrzna), wynosi 65% dla przetworników ciśnienia i przepływu oraz 70% dla poziomu i temperatury.

55. **F3 minor #2 (notes): automatic diagnostics, not only self-diagnostics**
   - Old: autodiagnostyka przetwornika wykrywa około dwóch trzecich uszkodzeń niebezpiecznych
   - New: diagnostyka automatyczna wykrywa około dwóch trzecich uszkodzeń niebezpiecznych

56. **F3 minor #3: the 2025 NAMUR item is an abstract, not a change list**
   - Old: Wydanie z 2025 r. ujednolica ich kolory i symbole na ekranach i diodach.
   - New: Zalecenie (wyd. 2025) określa jednolite kolory i symbole sygnałów statusu na ekranach i diodach LED.

57. **F3 minor #4: the standard expands UPS as uninterruptible power systems; PN title 'Systemy bezprzerwowego zasilania (UPS)'**
   - Old: UPS (Uninterruptible Power Supply — zasilacz bezprzerwowy); tak brzmi tytuł normy.
   - New: UPS (ang. uninterruptible power system — system bezprzerwowego zasilania); tak brzmi tytuł normy.

58. **F3 minor #4 (source): official IEC page**
   - Old: [IEC 62040-3:2021, próbka normy](https://cdn.standards.iteh.ai/samples/100462/e539fa74c78f44208501e78afde62152/IEC-62040-3-2021.pdf)
   - New: [IEC 62040-3:2021, próbka normy](https://cdn.standards.iteh.ai/samples/100462/e539fa74c78f44208501e78afde62152/IEC-62040-3-2021.pdf); [IEC, IEC 62040-3:2021](https://webstore.iec.ch/en/publication/60140)

59. **F3 minor #4 (bibliography): official IEC page**
   - Old: próbka normy (iTeh). [https://cdn.standards.iteh.ai/samples/100462/e539fa74c78f44208501e78afde62152/IEC-62040-3-2021.pdf](https://cdn.standards.iteh.ai/samples/100462/e539fa74c78f44208501e78afde62152/IEC-62040-3-2021.pdf)
   - New: próbka normy (iTeh). [https://cdn.standards.iteh.ai/samples/100462/e539fa74c78f44208501e78afde62152/IEC-62040-3-2021.pdf](https://cdn.standards.iteh.ai/samples/100462/e539fa74c78f44208501e78afde62152/IEC-62040-3-2021.pdf); strona IEC: [https://webstore.iec.ch/en/publication/60140](https://webstore.iec.ch/en/publication/60140)

60. **F3 minor #5: the alarm-and-record sentence is TRAS 2.6.3(4)**
   - Old: | TRAS 120 (alarm i rejestracja); reszta: ocena własna |
   - New: | TRAS 120, 2.6.3(4) (alarm i rejestracja); reszta: ocena własna |

61. **F3 minor #6 (coordinator opened FNR Basisdaten, p. 51): source for the methane energy content**
   - Old: wartość opałowa metanu ok. 9,97 kWh/m³ w warunkach normalnych;
   - New: wartość opałowa metanu ok. 9,97 kWh/m³ w warunkach normalnych (FNR, Basisdaten Bioenergie Deutschland 2024, s. 51);

62. **F3 minor #6: label sentence**
   - Old: wartość opałowa metanu to stała z tablic,
   - New: wartość opałowa metanu pochodzi z tablic FNR,

63. **F3 minor #6 (source line): FNR link**
   - Old: [Beharrysingh i in., 2018](https://oaktrust.library.tamu.edu/server/api/core/bitstreams/5553932f-d7dc-46c4-afdd-aa09a086fe66/content); obliczenia własne
   - New: [Beharrysingh i in., 2018](https://oaktrust.library.tamu.edu/server/api/core/bitstreams/5553932f-d7dc-46c4-afdd-aa09a086fe66/content); [FNR, Basisdaten Bioenergie 2024](https://www.fnr.de/fileadmin/Projekte/2023/Mediathek/Broschuere_Basisdaten_Bioenergie_2023_web.pdf); obliczenia własne

64. **F3 minor #6 (bibliography): entry 17 FNR**
   - Old: 16. Beharrysingh A., Hernandez M., Ng C., Maher C. (2018). Process Safety Time Analysis for Upstream Facilities. 21st Annual International Symposium, Mary Kay O'Connor Process Safety Center, Texas A&M University. [https://oaktrust.library.tamu.edu/server/api/core/bitstreams/5553932f-d7dc-46c4-afdd-aa09a086fe66/content](https://oaktrust.library.tamu.edu/server/api/core/bitstreams/5553932f-d7dc-46c4-afdd-aa09a086fe66/content) ⏎
   - New: 16. Beharrysingh A., Hernandez M., Ng C., Maher C. (2018). Process Safety Time Analysis for Upstream Facilities. 21st Annual International Symposium, Mary Kay O'Connor Process Safety Center, Texas A&M University. [https://oaktrust.library.tamu.edu/server/api/core/bitstreams/5553932f-d7dc-46c4-afdd-aa09a086fe66/content](https://oaktrust.library.tamu.edu/server/api/core/bitstreams/5553932f-d7dc-46c4-afdd-aa09a086fe66/content) ⏎ 17. FNR (2023). *Basisdaten Bioenergie Deutschland 2024*. Fachagentur Nachwachsende Rohstoffe e.V. [https://www.fnr.de/fileadmin/Projekte/2023/Mediathek/Broschuere_Basisdaten_Bioenergie_2023_web.pdf](https://www.fnr.de/fileadmin/Projekte/2023/Mediathek/Broschuere_Basisdaten_Bioenergie_2023_web.pdf) ⏎

65. **F3 minor #7: edition and clause as quoted**
   - Old: definicja IEC 61511-1 w brzmieniu cytowanym przez Beharrysingha i in. (2018)
   - New: definicja IEC 61511-1:2016 (3.2.52.1) w brzmieniu cytowanym przez Beharrysingha i in. (2018)

66. **F3 minor #8: Buncefield: the independent switch existed but was inoperable — independence plus proven function**
   - Old: a niezależność urządzenia maksimum jest ważniejsza niż jego precyzja (Buncefield).
   - New: a niezależność i potwierdzona testami sprawność urządzenia maksimum są ważniejsze niż jego precyzja (por. Buncefield: niezależny wyłącznik był niesprawny).

67. **F3 minor #9: 'too slow' contradicts the slide's own numbers; TRAS 2.4(8) condition**
   - Old: ale jest zbyt wolna i pośrednia, by być główną warstwą ochrony zbiornika. Tę rolę pełni pomiar napełnienia z ograniczeniem poboru gazu, a pomiar O₂ jest rozwiązaniem TRAS 120 (2.4(8)) dla instalacji istniejących.
   - New: ale jest pośrednia i zależy od sprawności linii poboru (kondensat, adsorpcja, cykl przełączania), więc nie powinna być główną warstwą ochrony zbiornika. Tę rolę pełni pomiar napełnienia z ograniczeniem poboru gazu. Pomiar O₂ TRAS 120 (2.4(8)) wymaga w instalacjach istniejących, w których nie zapewniono ograniczenia poboru gazu przed zadziałaniem zabezpieczenia podciśnieniowego.

68. **F3 minor #9 (notes): same point in the notes**
   - Old: Dla sterowania dozowaniem powietrza to nie problem, dla ochrony zbiornika tak, dlatego główną ochronę daje napełnienie, a nie skład gazu.
   - New: Dla sterowania dozowaniem powietrza to nie problem; dla ochrony zbiornika ważniejsze jest, że pomiar jest pośredni i zależy od linii poboru, dlatego główną ochronę daje napełnienie, a nie skład gazu.

69. **F3 minor #10: one Polish term for t_x: czas odpowiedzi**
   - Old: rozróżnia **czas ustalania wskazania** $t_x$ (niem. Einstellzeit)
   - New: rozróżnia **czas odpowiedzi** $t_x$ (niem. Einstellzeit; por. czas odpowiedzi na skok, [część 2](./02-tor-pomiarowy.mdx))

70. **F3 minor #10: one Polish term for t_x**
   - Old: transport gazu, czas ustalania wskazania i czas, po którym środek ochronny zaczyna działać (T 023).
   - New: transport gazu, czas odpowiedzi i czas, po którym środek ochronny zaczyna działać (T 023).

71. **F3 minor #10 (notes): one Polish term for t_x**
   - Old: Do tego dochodzi czas ustalania wskazania analizatora,
   - New: Do tego dochodzi czas odpowiedzi analizatora,

72. **F3 minor #11 (coordinator opened CSB p. 23 and Appendix S): Texas City: calibration for SG 0,8 and a declining indication, not only the range**
   - Old: W Texas City zakres pomiarowy obejmował normalną pracę, a nie awarię.
   - New: W Texas City zakres obejmował tylko dolną część kolumny, a przetwornik był wzorcowany dla gęstości względnej 0,8 (CSB, dodatek S); wg CSB wskazanie pokazywało spadek poziomu, gdy kolumna była przepełniana.


## 06-podsumowanie.mdx

73. **F1 major (consequence): current NERC version**
   - Old: PRC-002-3 (R10) wymaga ±2 ms od UTC
   - New: PRC-002-5 (R10) wymaga ±2 ms od UTC

74. **F3 minor #13: all three local-autonomy rules are own judgement**
   - Old: Funkcje chroniące ludzi i urządzenia działają lokalnie i nie zależą od łącza ani od chmury — to kryterium niezależności warstwy ochrony z W1. Buforowanie danych i komunikat „brak danych” zamiast „0 kW” to zasady projektowe (ocena własna), które trzeba wpisać do specyfikacji, bo w przejrzanych źródłach nie znaleźliśmy ich jako wymagania.
   - New: Wszystkie trzy to zasady projektowe z części 1 (ocena własna). Lokalne działanie funkcji chroniących ludzi i urządzenia wynika z kryterium niezależności warstwy ochrony z W1. Buforowanie danych i komunikat „brak danych” zamiast „0 kW” trzeba wpisać do specyfikacji, bo w przejrzanych źródłach nie znaleźliśmy ich jako wymagania.

75. **F3 minor #13 (summary): mark the rules as own judgement**
   - Old: a portal pokazuje „brak danych”, a nie „0” ([część 1](./01-cele-architektura-i-czas.mdx)).
   - New: a portal pokazuje „brak danych”, a nie „0” (zasady projektowe — ocena własna; [część 1](./01-cele-architektura-i-czas.mdx)).

76. **F3 minor #1 (quiz Q9): para 99 adopts the Baker lesson**
   - Old: Raport z 2011 r. (pkt 99): systemy ochrony bezpieczeństwa procesowego nie powinny polegać na reakcji operatora na alarmy, a zabezpieczenie przed przepełnieniem powinno być niezależne od zwykłego monitoringu ruchowego.
   - New: Raport z 2011 r. (pkt 99) przywołuje wniosek raportu Bakera po Texas City: systemy ochrony bezpieczeństwa procesowego nie powinny polegać na reakcji operatora na alarmy, a zabezpieczenie przed przepełnieniem powinno być niezależne od zwykłego monitoringu ruchowego; tę lekcję trzeba wyciągnąć także z Buncefield.

77. **F3 minor #12 (quiz Q10): 13,6 m³ as on page 05**
   - Old: (U ≈ 1,4% zakresu, czyli ok. 14 m³)
   - New: (U ≈ 1,4% zakresu, czyli ok. 13,6 m³)

78. **F3 minor #8 (quiz Q10): own judgement; independence plus proven function**
   - Old: — ta niezależność jest ważniejsza niż precyzja pomiaru.
   - New: — ta niezależność, potwierdzona testami, jest ważniejsza niż precyzja pomiaru (ocena własna).


## index.md

79. **F2 minor #4: an Amendment is 'zmiana'**
   - Old: , wyd. 1, z poprawką Amd.1:2026. BIPM.
   - New: , wyd. 1, ze zmianą 1 (Amd.1:2026). BIPM.
