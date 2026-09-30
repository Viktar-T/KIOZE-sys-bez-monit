# Accepted fixes — W1 rewrite (29.09.2026)

Files: `/mnt/user-data/outputs/lecture/wyklad-01-zagrozenia-ramy-prawne/`. Sources of the findings: `factcheck-1.md` (F1, page 01), `factcheck-2.md` (F2, pages 02–03), `factcheck-3.md` (F3, pages 04–06 and index). Result of triage: 0 critical, 3 major (all accepted after the coordinator opened the source: Energy Institute releases of 11.06.2026 and 12.06.2025, Feng et al. 2018 on frontiersin.org, WECC 2025), about 35 minor (accepted, some modified), 4 rejected (below).

Applied by the coordinator with `fixtool/apply_fixes.py`, which asserts that each old text occurs exactly once in its file (57 replacements, all matched). Pre-fix copies: `fixtool/pre-fix/`.


## 01-zagrozenia-w-instalacjach-oze.mdx

1. **F1 major: TRIR values from two reports read as a trend (EI 11.06.2026: hours +5%, TRIR +4% to 3.48; EI 12.06.2025: 79 mln h, TRIR 2.93, 99 LWDI) — checked by coordinator**
   - Old: - Najbardziej systematyczną publiczną statystyką są dane **G+** (Global Offshore Wind Health and Safety Organisation), publikowane przez Energy Institute: zgłoszenia firm członkowskich z jawnym mianownikiem, czyli przepracowanymi godzinami. Obejmują tylko morskie farmy wiatrowe i tylko członków G+.
     - Dane za 2025 r. (publikacja 11.06.2026): 69,2 mln przepracowanych godzin, TRIR (Total Recordable Injury Rate — wskaźnik wszystkich rejestrowanych urazów) 3,48, brak wypadków śmiertelnych.
     - Dane za 2024 r.: 1 wypadek śmiertelny, TRIR 2,93; najczęstszą przyczyną urazów było ręczne przenoszenie ładunków (121 zdarzeń).
     - Kolejne raporty przeliczają rok poprzedni: raport za 2025 r. podaje dla 2024 r. 95 urazów z utratą dni pracy, a raport za 2024 r. — 99. Porównujemy więc liczby w obrębie jednego raportu.
   - New: - Najbardziej systematyczną publiczną statystyką są dane **G+** (Global Offshore Wind Health and Safety Organisation), publikowane przez Energy Institute (ocena własna): zgłoszenia firm członkowskich z jawnym mianownikiem, czyli przepracowanymi godzinami. Obejmują tylko morskie farmy wiatrowe i tylko członków G+.
     - Raport za 2025 r. (11.06.2026): 69,2 mln przepracowanych godzin (o 5% więcej niż w 2024 r.), TRIR (Total Recordable Injury Rate — wskaźnik wszystkich rejestrowanych urazów) 3,48, czyli o 4% więcej niż w 2024 r., brak wypadków śmiertelnych.
     - Raport za 2024 r. (12.06.2025): 79 mln godzin, 1 wypadek śmiertelny, TRIR 2,93; najczęstszą przyczyną urazów było ręczne przenoszenie ładunków (121 zdarzeń).
     - Kolejne raporty przeliczają rok poprzedni: dla 2024 r. raport za 2024 r. podaje 99 urazów z utratą dni pracy, a raport za 2025 r. — 95. Dlatego TRIR 3,48 nie porównujemy z 2,93, tylko ze zmianą podaną w tym samym raporcie (+4%).
2. **F1 major: Feng 2018 — first venting at 100–110 °C, before the large internal short (checked by coordinator on frontiersin.org)**
   - Old:   B --> C["ok. 130 °C: topnienie separatora PE"]
   - New:   B --> V["ok. 100–110 °C: pierwsze odgazowanie, pary rozpuszczalników elektrolitu"]
       V --> C["ok. 130 °C: topnienie separatora PE"]
3. **F1 major (cont.): main venting node renamed**
   - Old:   E --> F["Odgazowanie: H₂, CO, CH₄, C₂H₄, HF"]
   - New:   E --> F["Dalsze odgazowanie: H₂, CO, CH₄, C₂H₄, HF"]
4. **F1 minor: Feng — the internal short triggers the redox reactions; it is not the main heat source; add staged venting**
   - Old: - **Zwarcie wewnętrzne wyzwala proces**, a głównym źródłem ciepła są reakcje powyżej temperatury krytycznej (Feng i in., 2018).
   - New: - **Duże zwarcie wewnętrzne wyzwala reakcje katoda–anoda**; to one, a nie samo zwarcie, są głównym źródłem ciepła (Feng i in., 2018).
     - Gazy wydzielają się etapami: pierwsze odgazowanie (pary rozpuszczalników elektrolitu) następuje już przy ok. 100–110 °C, czyli przed dużym zwarciem wewnętrznym; kolejne przy ok. 250 °C i po rozpoczęciu reakcji katoda–anoda (Feng i in., 2018).
5. **F1 minor: EU-OSHA only reports the lift (working group) and second escape route (literature)**
   - Old: - **Praca na wysokości i ratownictwo**: wielokrotne wchodzenie po drabinach, ciasne przestrzenie; EU-OSHA (Europejska Agencja Bezpieczeństwa i Zdrowia w Pracy) proponuje windę w wieżach od 60 m i drugą drogę ewakuacji.
   - New: - **Praca na wysokości i ratownictwo**: wielokrotne wchodzenie po drabinach, ciasne przestrzenie. Przegląd EU-OSHA (Europejskiej Agencji Bezpieczeństwa i Zdrowia w Pracy, 2013) przytacza zalecenie grupy roboczej władz państw UE i przemysłu (winda w wieżach od 60 m) oraz propozycję drugiej drogi ewakuacji z literatury.
6. **F1 minor: BSEE remit**
   - Old: federalny urząd USA ds. bezpieczeństwa na morzu
   - New: federalny urząd USA nadzorujący bezpieczeństwo i ochronę środowiska w morskiej energetyce
7. **F1 minor (modified): Fraunhofer 2013 release = expert-workshop results; add 350 fires involving PV (notes VERIFIED); the release itself says 0.006% of systems caused a fire with large damage, so the 75 stay as PV-caused**
   - Old: | ok. 1,3 mln instalacji; 120 pożarów spowodowanych przez PV; 75 z dużymi szkodami (ok. 0,006% instalacji) | wyniki pośrednie projektu |
   - New: | ok. 1,3 mln instalacji; 350 pożarów z udziałem PV, w tym 120 spowodowanych przez PV; 75 z dużymi szkodami (ok. 0,006% instalacji) | wyniki warsztatu eksperckiego (2013) |
8. **F1 minor: KG PSP document is a republication by KP PSP Wołomin**
   - Old: [KG PSP, 2022](https://www.gov.pl/web/kppsp-wolomin/
   - New: [KG PSP, 2022, publikacja KP PSP Wołomin](https://www.gov.pl/web/kppsp-wolomin/
9. **F1 minor (safety): do not teach that a switched-off circuit is dead without testing**
   - Old: W instalacji domowej wyłączamy bezpiecznik i obwód za nim jest martwy.
   - New: W instalacji domowej po wyłączeniu wyłącznika obwód za nim traci zasilanie, a przed pracą i tak sprawdzamy brak napięcia.
10. **F1 minor: WECC region is not only the western USA**
   - Old: WECC — Western Electricity Coordinating Council (organizacja niezawodności sieci zachodnich USA)
   - New: WECC — Western Electricity Coordinating Council (organizacja odpowiedzialna za niezawodność systemu elektroenergetycznego zachodniej części Ameryki Północnej)
11. **F1 minor: bibliography — Ramali authors, volume, pages**
   - Old: Ramali i in. (2022). A Review on Safety Practices for Firefighters During Photovoltaic (PV) Fire. *Fire Technology*. Springer.
   - New: Ramali M.R., Mohd Nizam Ong N.A.F., Md Said M.S. i in. (2022). A Review on Safety Practices for Firefighters During Photovoltaic (PV) Fire. *Fire Technology* 59(1): 247–270. Springer.
12. **F1 minor: bibliography — Sepanski full title, i in.**
   - Old: Sepanski A., Reil F., Vaaßen W., Schmidt H. (2015). *Bewertung des Brandrisikos in Photovoltaik-Anlagen — Leitfaden*, wyd. 2.
   - New: Sepanski A., Reil F., Vaaßen W., Schmidt H. i in. (2015). *Leitfaden: Bewertung des Brandrisikos in Photovoltaik-Anlagen und Erstellung von Sicherheitskonzepten zur Risikominimierung*, wyd. 2.
13. **F1 minor: bibliography — Feng volume**
   - Old: With LiNixCoyMnzO2 Cathode. *Frontiers in Energy Research*. [https://doi.org/10.3389/fenrg.2018.00126]
   - New: With LiNixCoyMnzO2 Cathode. *Frontiers in Energy Research* 6: 126. [https://doi.org/10.3389/fenrg.2018.00126]

## 02-pojecia-podstawowe.mdx

14. **F2 major: WECC does not link the containerised trend to Moss Landing (quote checked by coordinator)**
   - Old: | 1 | BESS (Battery Energy Storage System — bateryjny magazyn energii) w kontenerach na zewnątrz, z odstępami, zamiast jednej hali (kierunek branży opisany przez WECC, Western Electricity Coordinating Council, po pożarze w Moss Landing) |
   - New: | 1 | BESS (Battery Energy Storage System — bateryjny magazyn energii) w kontenerach na zewnątrz, z odstępami, zamiast jednej hali; według WECC (Western Electricity Coordinating Council, 2025) większość nowych BESS ma taką konstrukcję, co odzwierciedla wnioski z wcześniejszych awarii |
15. **F2 major (cont.): notes overstated 'wnioski z dochodzeń'**
   - Old: Przykłady w tabeli są ilustracyjne, ale nawiązują do wniosków z dochodzeń.
   - New: Przykłady w tabeli są ilustracyjne, ale nawiązują do raportów po pożarach magazynów.
16. **F2 minor: R2P2 numerical criteria also for multiple-fatality accidents**
   - Old: - HSE wyraża kryteria liczbowe jako indywidualne ryzyko śmierci na rok; wartości
   - New: - HSE proponuje kryteria liczbowe tylko dla nielicznych kategorii ryzyka: indywidualnego ryzyka śmierci na rok i wypadków z wieloma ofiarami; wartości
17. **F2 minor: Casson Moreno wording**
   - Old: oceniają profil ryzyka biogazowni jako typowy dla obszaru ALARP.
   - New: oceniają profil ryzyka sektora biogazu jako nie do pominięcia, typowy dla obszaru ALARP.
18. **F2 minor: R2P2 URL is a GOV.UK copy**
   - Old: *Reducing risks, protecting people: HSE's decision-making process* (R2P2). HSE Books. [
   - New: *Reducing risks, protecting people: HSE's decision-making process* (R2P2). HSE Books; kopia dokumentu HSE udostępniona na GOV.UK. [

## 03-ramy-prawne-ue-i-polska.mdx

19. **F2 minor: harmonised standards also from ETSI**
   - Old: norma EN (europejska, opracowana przez europejskie komitety normalizacyjne CEN lub CENELEC)
   - New: norma EN (europejska, opracowana przez europejskie organizacje normalizacyjne CEN, CENELEC lub ETSI)
20. **F2 minor: Seveso table — tables 1/2 of the regulation; upgraded biogas 'may' be classified (note 19)**
   - Old: | P2: gazy łatwopalne kategorii 1 lub 2 (np. surowy biogaz) | 10 t | 50 t |
   - New: | Tabela 1, P2: gazy łatwopalne kategorii 1 lub 2 (np. surowy biogaz) | 10 t | 50 t |
21. **F2 minor (cont.)**
   - Old: | Poz. 18: łatwopalne gazy ciekłe kategorii 1 lub 2 i gaz ziemny; także biogaz uszlachetniony do jakości gazu ziemnego, z najwyżej 1% tlenu (objaśnienie 19) | 50 t | 200 t |
   - New: | Tabela 2, poz. 18: łatwopalne gazy ciekłe kategorii 1 lub 2 i gaz ziemny; biogaz uszlachetniony do jakości gazu ziemnego, z najwyżej 1% tlenu, można zaliczyć do tej pozycji (objaśnienie 19) | 50 t | 200 t |
22. **F2 minor (cont.)**
   - Old: | Poz. 15: wodór | 5 t | 50 t |
   - New: | Tabela 2, poz. 15: wodór | 5 t | 50 t |
23. **F2 minor: hydrogen threshold lower only for the lower tier**
   - Old: Pytanie do sali: dlaczego próg dla wodoru jest niższy niż dla gazów łatwopalnych ogółem?
   - New: Pytanie do sali: dlaczego próg ZZR dla wodoru (5 t) jest niższy niż dla gazów łatwopalnych ogółem (10 t)?
24. **F2 minor: art. 35 covers only the listed fines (verified-facts W01)**
   - Old: Kary pieniężne: najwcześniej od 3.04.2028.
   - New: Kary pieniężne z art. 73 ust. 1–4, art. 73a–73c i art. 76b: najwcześniej od 3.04.2028 (art. 35 nowelizacji).
25. **F2 minor: Polish type D threshold equals the EU maximum**
   - Old: Polskie progi typów są niższe niż maksima unijne, dla Europy kontynentalnej 1, 50 i 75 MW.
   - New: Polskie progi typów B i C (0,2 i 10 MW) są niższe niż maksima unijne dla Europy kontynentalnej (1 i 50 MW); próg typu D (75 MW) jest równy maksimum.
26. **F2 minor + coordinator: KSC answer — first test is being an annex-1 entity; RfG covers new modules**
   - Old: Nie, bo nie jest średnim ani dużym przedsiębiorcą; RfG obejmuje jednak jego instalację jako moduł typu A.
   - New: Nie: osoba prywatna nie jest podmiotem z załącznika 1 (przedsiębiorstwem energetycznym z koncesją na wytwarzanie) ani średnim lub dużym przedsiębiorcą. Nową instalację 8 kW RfG obejmuje jednak jako moduł typu A.
27. **F2 minor: RCL shows 'Notyfikacja' as the last completed stage; standstill end not confirmed**
   - Old: Projekt Rządowego Centrum Legislacji (RCL) nr 12412604 przeszedł notyfikację (2.09.2026); etap „skierowanie projektu do podpisu ministra” nie ma daty.
   - New: Projekt nr 12412604 na stronie Rządowego Centrum Legislacji (RCL): ostatni zakończony etap to „Notyfikacja” (ostatnia zmiana 2.09.2026); etap „Skierowanie projektu do podpisu ministra” nie ma daty.
28. **F2 minor (cont., notes)**
   - Old: Nowe rozporządzenie przeszło notyfikację, ale według strony RCL nie trafiło jeszcze do podpisu.
   - New: Według strony RCL ostatnim zakończonym etapem prac nad nowym rozporządzeniem jest notyfikacja; projekt nie trafił jeszcze do podpisu.
29. **F2 minor: draft § 305 ust. 3 — detection and interruption**
   - Old: monitorowanie stanu izolacji po stronie DC (prądu stałego) i wykrywanie łuku DC,
   - New: monitorowanie stanu izolacji po stronie DC (prądu stałego) oraz wykrywanie i przerywanie łuku DC,
30. **F2 minor: responsibility table — PSP basis; employer basis incomplete**
   - Old: | PSP, UDT, OSD, OSP, URE | PSP: zawiadomienia, akcje ratownicze; UDT: dozór; operatorzy i URE: wymagania przyłączeniowe |
   - New: | PSP, UDT, OSD, OSP, URE | PSP: przyjmuje zawiadomienia wraz z planem dla ekip ratowniczych; UDT: dozór; operatorzy i URE: wymagania przyłączeniowe |
31. **F2 minor (cont.)**
   - Old: | 89/391, 1999/92, MG 2010, KSC, POŚ art. 248 |
   - New: | 89/391, 1999/92, 2009/104, MG 2010, rozp. NDS 2018, KSC, POŚ art. 248 |

## 04-normy.mdx

32. **F2/F3 minor: ETSI; consistency with 03**
   - Old: EN (normy europejskie, opracowywane przez europejskie komitety normalizacyjne CEN i CENELEC)
   - New: EN (normy europejskie, opracowywane przez europejskie organizacje normalizacyjne CEN, CENELEC i ETSI)
33. **F3 minor: definition of a harmonised standard (Reg. 1025/2012); OJ publication is the condition for presumption**
   - Old: - **Norma zharmonizowana** (norma europejska EN, której odniesienie opublikowano w Dzienniku Urzędowym UE) daje domniemanie zgodności z wymaganiami zasadniczymi aktu UE, ale jej stosowanie też jest dobrowolne (Blue Guide 2022).
   - New: - **Norma zharmonizowana** (norma europejska EN przyjęta na zlecenie Komisji Europejskiej) daje domniemanie zgodności z wymaganiami zasadniczymi aktu UE po opublikowaniu jej odniesienia w Dzienniku Urzędowym UE, ale jej stosowanie też jest dobrowolne (Blue Guide 2022).
34. **F3 minor: legal basis is the OJ reference; the Commission list is a summary**
   - Old: Na wykazie, który Komisja Europejska prowadzi dla tej dyrektywy.
   - New: W Dzienniku Urzędowym UE, w decyzjach wykonawczych Komisji; pomocniczo w zestawieniu, które Komisja prowadzi dla tej dyrektywy.
35. **F3 minor: IEC 60364-7-712 scope ends at the connection to the rest of the installation**
   - Old: instalacje elektryczne PV od modułów do punktu przyłączenia
   - New: instalacje elektryczne PV od modułów do punktu połączenia z pozostałą częścią instalacji
36. **F3 minor (modified): functional-safety definition incl. other risk reduction measures; textbook concept of the IEC 61508 series, no unverified clause number**
   - Old: - **Bezpieczeństwo funkcjonalne** to część bezpieczeństwa zależna od poprawnego działania układów sterowania i zabezpieczeń, czyli systemów elektrycznych, elektronicznych i programowalnych związanych z bezpieczeństwem.
   - New: - **Bezpieczeństwo funkcjonalne** to część ogólnego bezpieczeństwa, która zależy od poprawnego działania systemów elektrycznych, elektronicznych i programowalnych związanych z bezpieczeństwem oraz innych środków zmniejszania ryzyka (pojęcie z serii IEC 61508).

## 05-monitoring-a-warstwy-ochrony.mdx

37. **F3 minor: SAFEChE credits CCPS only for the IPL criteria**
   - Old: - Kolejność warstw według CCPS (Center for Chemical Process Safety), za materiałami SAFEChE (University of Michigan). Każda następna warstwa działa, gdy poprzednia zawiedzie.
   - New: - Kolejność warstw za samouczkiem LOPA SAFEChE (University of Michigan); model cebuli opisuje też CCPS (Center for Chemical Process Safety, 2015). Każda następna warstwa działa, gdy poprzednia zawiedzie.
38. **F3 minor: bibliography descriptor**
   - Old: *LOPA tutorial* (warstwy ochrony według CCPS i kryteria IPL).
   - New: *LOPA tutorial* (model warstw ochrony; kryteria IPL według CCPS).
39. **F3 minor: IEC 61511-1 3.2.3 Note 2 says 'typically may implement'**
   - Old: Według uwagi 2 do tej definicji BPCS zwykle realizuje sterowanie, **monitoring i alarmy**.
   - New: Według uwagi 2 do tej definicji BPCS zwykle może realizować różne funkcje, np. sterowanie procesem, **monitoring i alarmy**.
40. **F3 minor (cont., notes)**
   - Old: Norma o przyrządowych systemach bezpieczeństwa mówi to wprost: monitoring i alarmy to typowe funkcje podstawowego systemu sterowania.
   - New: Norma o przyrządowych systemach bezpieczeństwa wymienia monitoring i alarmy wśród funkcji, które zwykle może realizować podstawowy system sterowania.
41. **F3 minor (modified): DNV GL gives 'no means to ventilate'; the lack of continuous remotely readable gas monitoring is from UL FSRI (notes, VERIFIED)**
   - Old: | Detekcja gazu i wentylacja | brak | nagromadzenie palnych gazów |
   - New: | Detekcja gazu i wentylacja | brak możliwości wentylacji gazów (DNV GL); brak ciągłego monitorowania gazów z odczytem zdalnym (UL FSRI) | nagromadzenie palnych gazów |
42. **F3 minor: EN 50549-1 amended by A1:2023 (evs.ee checked by coordinator)**
   - Old: zabezpieczenie sieciowe z wykrywaniem pracy wyspowej (EN 50549-1:2019)
   - New: zabezpieczenie sieciowe z wykrywaniem pracy wyspowej (EN 50549-1:2019+A1:2023)
43. **F3 minor (cont., source line)**
   - Old: [EN 50549-1:2019, próbka](https://cdn.standards.iteh.ai/samples/63319/b79e8a132ea843cd83cd14550c14978a/SIST-EN-50549-1-2019.pdf);
   - New: [EN 50549-1:2019, próbka](https://cdn.standards.iteh.ai/samples/63319/b79e8a132ea843cd83cd14550c14978a/SIST-EN-50549-1-2019.pdf); [EVS, EN 50549-1:2019+A1:2023](https://www.evs.ee/en/evs-en-50549-1-2019-a1-2023);
44. **F3 minor (cont., bibliography)**
   - Old: 19. CENELEC (2019). *EN 50549-1:2019 Requirements for generating plants to be connected in parallel with distribution networks — Part 1*, próbka (SIST).
   - New: 19. CENELEC (2019, zm. A1:2023). *EN 50549-1:2019+A1:2023 Requirements for generating plants to be connected in parallel with distribution networks — Part 1: Connection to a LV distribution network — Generating plants up to and including Type B*. Wersja skonsolidowana: [https://www.evs.ee/en/evs-en-50549-1-2019-a1-2023](https://www.evs.ee/en/evs-en-50549-1-2019-a1-2023); próbka wyd. 2019 (SIST):
45. **F3 minor: Sandia thresholds are for transformerless inverters**
   - Old: monitorowanie prądu różnicowego w falowniku (IEC 62109-2:2011, wg Sandia)
   - New: monitorowanie prądu różnicowego w falownikach beztransformatorowych (IEC 62109-2:2011, wg Sandia)
46. **F3 minor: draft § 311 says 'BMS or other protective means'**
   - Old: BMS ma stale monitorować napięcie, prąd i temperaturę, ale też sam awaryjnie odłączać baterię;
   - New: BMS lub inne środki ochrony mają stale monitorować napięcie, prąd i temperaturę, ale też same awaryjnie odłączać baterię;
47. **F3 minor: InTech 2020 does not name the ISA-18.2 edition**
   - Old: (ANSI/ISA-18.2-2016, wg ISA InTech)
   - New: (ISA-18.2, wg ISA InTech 2020)
48. **F3 minor: bypass — IEC 61511-1 3.2.4 Note 1 example**
   - Old: - **Granice**: działanie SIS zablokowane obejściem (ang. bypass) może nadal pokazywać operatorowi pomiary i alarmy (IEC 61511-1:2016, 3.2.4).
   - New: - **Granice**: przy obejściu (ang. bypass) sygnał wejściowy może być odcięty od logiki wyłączającej, a operator nadal widzi pomiar i alarm (IEC 61511-1:2016, 3.2.4, uwaga 1).

## 06-podsumowanie.mdx

49. **F3 minor: the three criteria are those of an IPL**
   - Old: **Monitoring nie jest warstwą ochrony.** Warstwa ochrony musi być skuteczna, niezależna i audytowalna.
   - New: **Monitoring nie jest warstwą ochrony.** Niezależna warstwa ochrony (IPL) musi być skuteczna, niezależna i audytowalna.
50. **F2 minor (consistency with fix 21): quiz Q7 explanation**
   - Old: a 50 t i 200 t to progi pozycji 18, obejmującej m.in. gaz ziemny i biogaz uszlachetniony.
   - New: a 50 t i 200 t to progi pozycji 18, obejmującej m.in. gaz ziemny; do tej pozycji można zaliczyć biogaz uszlachetniony.
51. **F3 minor (consistency with fix 41): quiz Q10 option**
   - Old: zabrakło niezależnych warstw: barier termicznych, detekcji gazu z wentylacją i procedury wejścia
   - New: zabrakło niezależnych warstw: barier termicznych, wentylacji gazów i procedury wejścia
52. **F1/F3 minor: bibliography — Ramali**
   - Old: Ramali i in. (2022). A Review on Safety Practices for Firefighters During Photovoltaic (PV) Fire. *Fire Technology*. Springer.
   - New: Ramali M.R., Mohd Nizam Ong N.A.F., Md Said M.S. i in. (2022). A Review on Safety Practices for Firefighters During Photovoltaic (PV) Fire. *Fire Technology* 59(1): 247–270. Springer.
53. **F1 minor: bibliography — Sepanski**
   - Old: Sepanski A., Reil F., Vaaßen W., Schmidt H. (2015). *Bewertung des Brandrisikos in Photovoltaik-Anlagen — Leitfaden*, wyd. 2.
   - New: Sepanski A., Reil F., Vaaßen W., Schmidt H. i in. (2015). *Leitfaden: Bewertung des Brandrisikos in Photovoltaik-Anlagen und Erstellung von Sicherheitskonzepten zur Risikominimierung*, wyd. 2.
54. **F1 minor: bibliography — Feng**
   - Old: With LiNixCoyMnzO2 Cathode. *Frontiers in Energy Research*. [https://doi.org/10.3389/fenrg.2018.00126]
   - New: With LiNixCoyMnzO2 Cathode. *Frontiers in Energy Research* 6: 126. [https://doi.org/10.3389/fenrg.2018.00126]
55. **F2 minor: bibliography — R2P2 copy**
   - Old: *Reducing risks, protecting people: HSE's decision-making process* (R2P2). HSE Books. [
   - New: *Reducing risks, protecting people: HSE's decision-making process* (R2P2). HSE Books; kopia dokumentu HSE udostępniona na GOV.UK. [
56. **F3 minor: bibliography — SAFEChE descriptor**
   - Old: *LOPA tutorial* (warstwy ochrony według CCPS i kryteria IPL).
   - New: *LOPA tutorial* (model warstw ochrony; kryteria IPL według CCPS).

## index.md

57. **F3 minor: SAFEChE descriptor**
   - Old: *LOPA tutorial* (warstwy ochrony według CCPS i kryteria IPL).
   - New: *LOPA tutorial* (model warstw ochrony; kryteria IPL według CCPS).

## Coordinator follow-up after the fixes

58. **Lint WARN: notes of "Cyberbezpieczeństwo i przyłączenie do sieci" had 169 words after fixes 25–26.** Removed "Tu przenikają się dwa tematy." and the time-bound sentence "W dniu przygotowania tych materiałów, 29 września, zostały do niego cztery dni." (and its check in calc_B.py / calc.py); "2026 roku" → "2026 r."; "przy zakłóceniach w sieci" → "przy zakłóceniach"; "RfG obejmuje jednak jako" → "RfG obejmuje jako". Now 146 words.

## Rejected or not applied

1. F1: 'PSP zastrzega' could not be verified (Globenergia timed out) — Rejected: F3 opened Globenergia and confirmed that it quotes the PSP press office; the slide keeps 'dane PSP cytowane przez Globenergia'.
2. F1: TRAS 120 author should be BMU (BAnz 21.01.2019) — Rejected: KAS drafted TRAS 120 and hosts the reading version; W2 cites it as 'Kommission für Anlagensicherheit (2019)'. Kept for consistency with W2; the BAnz date is already on the slide.
3. F1: Fraunhofer — unclear whether the 75 large-damage fires are among the 120 PV-caused ones — Partly rejected: the release states that '0.006 percent of the photovoltaic systems caused a fire resulting in large damage' (notes, VERIFIED), so the 75 are PV-caused. Accepted only the 'interim results' wording and the 350 fires involving PV (fix 7).
4. F3 optional: IEC 62446-1 ed. 2 in preparation (E DIN EN IEC 62446-1:2026-01) — Not added: only a German draft; the IEC edition on the slide is current.
