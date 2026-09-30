---
title: "W2: Analiza ryzyka — HAZID, HAZOP, FMEA, FTA, LOPA i SIL"
sidebar_position: 2
---

# W2: Analiza ryzyka — HAZID, HAZOP, FMEA, FTA, LOPA i SIL

## Przegląd i cele kształcenia

Wykład pokazuje, jak w instalacjach OZE systematycznie wyszukuje się scenariusze awarii i ocenia, ile ochrony potrzeba. Omawiamy proces zarządzania ryzykiem według ISO 31000:2018, metody opisane w IEC 31010:2019 — HAZOP (Hazard and Operability Study — badanie zagrożeń i zdolności do działania), FMEA (Failure Modes and Effects Analysis — analiza rodzajów i skutków uszkodzeń) i FMECA (Failure Modes, Effects and Criticality Analysis — analiza rodzajów, skutków i krytyczności uszkodzeń), FTA (Fault Tree Analysis — analiza drzewa niezdatności), ETA (Event Tree Analysis — analiza drzewa zdarzeń), bow-tie i LOPA (Layer of Protection Analysis — analiza warstw ochrony) — a także HAZID (Hazard Identification — identyfikacja zagrożeń; ISO 17776) i dobór SIL (Safety Integrity Level — poziom nienaruszalności bezpieczeństwa; IEC 61508, IEC 61511). Przykłady dotyczą biogazowni, magazynów energii BESS (Battery Energy Storage System — bateryjny magazyn energii), turbin wiatrowych i instalacji fotowoltaicznych (PV).

Po wykładzie student potrafi:

1. wskazać miejsce metod w procesie ISO 31000, dobrać metodę do etapu projektu i pytania (IEC 31010) oraz wyjaśnić, skąd biorą się kryteria tolerowalności ryzyka i obowiązek oceny ryzyka zawodowego w polskim prawie pracy;
2. przeprowadzić badanie HAZOP prostego węzła ze słowami przewodnimi IEC 61882 i zapisać wynik w arkuszu;
3. zbudować arkusz FMEA, obliczyć RPN (Risk Priority Number — liczba priorytetu ryzyka) i wyjaśnić, dlaczego RPN może błędnie szeregować rodzaje uszkodzeń;
4. zbudować i obliczyć proste drzewo niezdatności, w tym wpływ uszkodzeń spowodowanych wspólną przyczyną (model współczynnika β);
5. przeprowadzić prostą analizę LOPA, wyznaczyć wymagany RRF (Risk Reduction Factor — współczynnik zmniejszenia ryzyka) i SIL oraz obliczyć średnie prawdopodobieństwo niebezpiecznego uszkodzenia na żądanie (PFDavg) funkcji jednokanałowej (1oo1) i dwukanałowej (1oo2);
6. wyjaśnić, jak wyniki analiz stają się wymaganiami dla monitoringu i zabezpieczeń: alarmów, blokad, przyrządowych funkcji bezpieczeństwa, testów sprawdzających, monitorowania stanu i pomiarów.

## Plan wykładu (90 min)

| Część | Czas |
|---|---|
| [Proces zarządzania ryzykiem i kryteria](./01-proces-zarzadzania-ryzykiem.mdx) | 15 min |
| [HAZID i HAZOP](./02-hazid-i-hazop.mdx) | 20 min |
| [FMEA i FMECA](./03-fmea-i-fmeca.mdx) | 15 min |
| [FTA, ETA i bow-tie](./04-fta-eta-i-bow-tie.mdx) | 16 min |
| [LOPA i SIL](./05-lopa-i-sil.mdx) | 19 min |
| [Podsumowanie i quiz](./06-podsumowanie.mdx) | 5 min |
| **Razem** | **90 min** |

## Najważniejsze źródła

1. Vesely W.E., Goldberg F.F., Roberts N.H., Haasl D.F. (1981). *Fault Tree Handbook* (NUREG-0492). U.S. Nuclear Regulatory Commission. [https://www.nrc.gov/docs/ML1007/ML100780465.pdf](https://www.nrc.gov/docs/ML1007/ML100780465.pdf)
2. Stamatelatos M., Vesely W. i in. (2002). *Fault Tree Handbook with Aerospace Applications*, wersja 1.1. NASA Office of Safety and Mission Assurance. [https://extapps.ksc.nasa.gov/Reliability/Documents/Fault_Tree_Handbook_with_Aerospace_Applications_August_2002.pdf](https://extapps.ksc.nasa.gov/Reliability/Documents/Fault_Tree_Handbook_with_Aerospace_Applications_August_2002.pdf)
3. Health and Safety Executive (2001). *Reducing risks, protecting people: HSE's decision-making process* (R2P2). HSE Books; kopia dokumentu HSE udostępniona na GOV.UK. [https://assets.publishing.service.gov.uk/media/6634988fcf3b5081b14f30cd/IQ8.10.J_Document_9_Health_and_Safety_Executive__Reducing_risks__protecting_people__HSE_s_decision-making_process__2001.pdf](https://assets.publishing.service.gov.uk/media/6634988fcf3b5081b14f30cd/IQ8.10.J_Document_9_Health_and_Safety_Executive__Reducing_risks__protecting_people__HSE_s_decision-making_process__2001.pdf)
4. Chambers C., Wilday J., Turner S. (2009). *A review of Layers of Protection Analysis (LOPA) analyses of overfill of fuel storage tanks* (RR716). Health and Safety Laboratory dla HSE. [https://www.hse.gov.uk/research/rrpdf/rr716.pdf](https://www.hse.gov.uk/research/rrpdf/rr716.pdf)
5. Shafiee M., Dinmohammadi F. (2014). An FMEA-based risk assessment approach for wind turbine systems: a comparative study of onshore and offshore. *Energies* 7(2): 619–642. [https://doi.org/10.3390/en7020619](https://doi.org/10.3390/en7020619)
6. Kommission für Anlagensicherheit (2019). *TRAS 120 — Sicherheitstechnische Anforderungen an Biogasanlagen* (Lesefassung). [https://www.kas-bmu.de/files/publikationen/TRAS/TRAS%20(endgueltige%20Fassung)/LesefassTRAS120.pdf](https://www.kas-bmu.de/files/publikationen/TRAS/TRAS%20(endgueltige%20Fassung)/LesefassTRAS120.pdf)

## Powiązania

- Poprzedni wykład: [W1: Zagrożenia w instalacjach OZE, ramy prawne i warstwy ochrony](../wyklad-01-zagrozenia-ramy-prawne/index.md) — pojęcia zagrożenia i ryzyka, ALARP, kryteria niezależnej warstwy ochrony i model warstw ochrony, które w tym wykładzie przeliczamy na częstości i prawdopodobieństwa.
- Następny wykład: [W3: Architektura monitoringu i tor pomiarowy](../wyklad-03-architektura-monitoringu/index.md) — wymagania z analiz ryzyka (co mierzyć, gdzie i z jaką dokładnością) stają się wymaganiami dla toru pomiarowego.
- Dalej:
  - W5: Jakość danych, wskaźniki KPI, zarządzanie alarmami i wykrywanie anomalii — racjonalizacja listy alarmów, która wynika z HAZOP i LOPA;
  - W7: Energetyka wiatrowa — system bezpieczeństwa, hamulce, oblodzenie i monitorowanie stanu — FMEA turbin, zakres CMS, PL i SIL funkcji ochronnych turbiny;
  - W8: Magazyny energii (BESS) — BMS, niekontrolowany wzrost temperatury i detekcja gazów — drzewo niezdatności dla gazów w kontenerze i macierz przyczynowo-skutkowa;
  - W9: Biogazownie — ochrona przeciwwybuchowa, detekcja gazów i bezpieczeństwo procesowe — przykłady HAZOP, bow-tie i LOPA zbiornika biogazu wrócą tam jako punkt wyjścia do bezpieczeństwa procesowego biogazowni, razem z doborem detektorów i nastaw;
  - W10: Cyberbezpieczeństwo OT i bezpieczna eksploatacja — zarządzanie zmianą i badanie zdarzeń jako powrót do analizy ryzyka.
