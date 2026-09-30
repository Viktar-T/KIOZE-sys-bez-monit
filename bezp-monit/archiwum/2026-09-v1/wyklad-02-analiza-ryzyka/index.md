---
title: "W2: Analiza ryzyka — HAZID, HAZOP, FMEA, FTA, LOPA i SIL"
sidebar_position: 2
---

# W2: Analiza ryzyka — HAZID, HAZOP, FMEA, FTA, LOPA i SIL

## Przegląd i cele kształcenia

Wykład pokazuje, jak w instalacjach OZE systematycznie wyszukuje się scenariusze awarii i ocenia, ile ochrony potrzeba. Omawiamy proces zarządzania ryzykiem według ISO 31000:2018 oraz metody opisane w IEC 31010:2019: HAZID i HAZOP, FMEA/FMECA, analizę drzewa niezdatności i drzewa zdarzeń, bow-tie, analizę warstw ochrony (LOPA) i dobór poziomu nienaruszalności bezpieczeństwa (SIL). Przykłady dotyczą biogazowni, bateryjnych magazynów energii (BESS, Battery Energy Storage System), turbin wiatrowych i instalacji fotowoltaicznych (PV).

Po wykładzie student potrafi:

1. wskazać miejsce metod HAZID, HAZOP, FMEA, FTA, ETA, bow-tie i LOPA w procesie ISO 31000 oraz dobrać metodę do etapu projektu i pytania, na które ma odpowiedzieć (IEC 31010:2019);
2. przeprowadzić badanie HAZOP prostego węzła instalacji ze słowami przewodnimi IEC 61882:2016 i zapisać wynik w arkuszu;
3. zbudować arkusz FMEA, obliczyć liczbę priorytetu ryzyka (RPN) i wyjaśnić, dlaczego RPN może błędnie szeregować rodzaje uszkodzeń;
4. zbudować i obliczyć proste drzewo niezdatności, w tym wpływ uszkodzeń spowodowanych wspólną przyczyną (model współczynnika β);
5. przeprowadzić prostą analizę LOPA, wyznaczyć wymagany współczynnik redukcji ryzyka i SIL oraz obliczyć średnie prawdopodobieństwo niebezpiecznego uszkodzenia na żądanie (PFDavg) jednokanałowej funkcji bezpieczeństwa (1oo1);
6. wyjaśnić, jak wyniki analiz przekładają się na wymagania dla monitoringu i zabezpieczeń: alarmy, blokady, przyrządowe funkcje bezpieczeństwa, testy sprawdzające i monitorowanie stanu.

## Plan wykładu (90 min)

| Część | Czas |
|---|---|
| [Proces zarządzania ryzykiem i kryteria](./01-proces-zarzadzania-ryzykiem.mdx) | 14 min |
| [HAZID i HAZOP](./02-hazid-i-hazop.mdx) | 20 min |
| [FMEA i FMECA](./03-fmea-i-fmeca.mdx) | 16 min |
| [FTA, ETA i bow-tie](./04-fta-eta-i-bow-tie.mdx) | 16 min |
| [LOPA i SIL](./05-lopa-i-sil.mdx) | 19 min |
| [Podsumowanie i quiz](./06-podsumowanie.mdx) | 5 min |
| **Razem** | **90 min** |

## Najważniejsze źródła

1. Vesely W.E., Goldberg F.F., Roberts N.H., Haasl D.F. (1981). *Fault Tree Handbook* (NUREG-0492). U.S. Nuclear Regulatory Commission. [https://www.nrc.gov/docs/ML1007/ML100780465.pdf](https://www.nrc.gov/docs/ML1007/ML100780465.pdf)
2. Stamatelatos M., Vesely W. i in. (2002). *Fault Tree Handbook with Aerospace Applications*, wersja 1.1. NASA Office of Safety and Mission Assurance. [https://extapps.ksc.nasa.gov/Reliability/Documents/Fault_Tree_Handbook_with_Aerospace_Applications_August_2002.pdf](https://extapps.ksc.nasa.gov/Reliability/Documents/Fault_Tree_Handbook_with_Aerospace_Applications_August_2002.pdf)
3. Chambers C., Wilday J., Turner S. (2009). *A review of Layers of Protection Analysis (LOPA) analyses of overfill of fuel storage tanks* (RR716). Health and Safety Laboratory dla HSE. [https://www.hse.gov.uk/research/rrpdf/rr716.pdf](https://www.hse.gov.uk/research/rrpdf/rr716.pdf)
4. Shafiee M., Dinmohammadi F. (2014). An FMEA-based risk assessment approach for wind turbine systems: a comparative study of onshore and offshore. *Energies* 7(2): 619–642. [https://doi.org/10.3390/en7020619](https://doi.org/10.3390/en7020619)
5. Kommission für Anlagensicherheit (2019). *TRAS 120 — Sicherheitstechnische Anforderungen an Biogasanlagen* (Lesefassung). [https://www.kas-bmu.de/files/publikationen/TRAS/TRAS%20(endgueltige%20Fassung)/LesefassTRAS120.pdf](https://www.kas-bmu.de/files/publikationen/TRAS/TRAS%20(endgueltige%20Fassung)/LesefassTRAS120.pdf)
6. King A.G. (2014). SIL determination and high demand mode. IChemE Hazards 24, Symposium Series 159. [https://www.icheme.org/media/8914/xxiv-paper-18.pdf](https://www.icheme.org/media/8914/xxiv-paper-18.pdf)

## Powiązania

- Poprzedni wykład: [W1: Zagrożenia w instalacjach OZE, ramy prawne i warstwy ochrony](../wyklad-01-zagrozenia-ramy-prawne/index.md) — definicje zagrożenia i ryzyka, przepisy, normy i idea warstw ochrony.
- Następny wykład: W3 — architektura monitoringu i tor pomiarowy (wymagania z analiz ryzyka stają się wymaganiami dla pomiarów).
- Dalej: W5 — zarządzanie alarmami; W7 — monitorowanie stanu turbin (CMS); W8 — BESS i macierz przyczynowo-skutkowa; W9 — bezpieczeństwo procesowe biogazowni.
