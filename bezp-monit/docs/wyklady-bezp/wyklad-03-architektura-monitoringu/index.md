---
title: "W3: Architektura monitoringu i tor pomiarowy"
sidebar_position: 3
---

# W3: Architektura monitoringu i tor pomiarowy

## Przegląd i cele kształcenia

Wykład pokazuje, jak jest zbudowany system monitoringu instalacji OZE: od czujników przez sterowniki i SCADA (Supervisory Control and Data Acquisition — system nadzoru i akwizycji danych) po archiwum danych i chmurę, ze wspólną skalą czasu i torem pomiarowym od czujnika do zapisu. Omawiamy, na ile można ufać jego danym — niepewność pomiaru, wzorcowanie, dryft i typowe uszkodzenia toru — oraz czujniki stosowane w fotowoltaice, energetyce wiatrowej, magazynach energii i biogazowniach. Na koniec wymagania z analiz HAZOP (Hazard and Operability Study — badanie zagrożeń i zdolności do działania) i LOPA (Layer of Protection Analysis — analiza warstw ochrony) zbiornika biogazu z W2 zamieniamy w specyfikację toru pomiarowego.

Po wykładzie student potrafi:

1. wyjaśnić cele monitoringu instalacji OZE, przyporządkować elementy systemu (czujniki, sterowniki, SCADA, archiwum danych, portal) do poziomów modelu IEC 62264 i wskazać, co musi działać lokalnie po utracie łącza;
2. wyjaśnić, dlaczego dane z wielu źródeł wymagają wspólnej skali czasu UTC (Coordinated Universal Time — uniwersalny czas koordynowany), i dobrać sposób synchronizacji zegarów — NTP (Network Time Protocol), PTP (Precision Time Protocol) lub odbiornik GNSS (Global Navigation Satellite System — globalny system nawigacji satelitarnej) — do wymaganej dokładności znaczników czasu;
3. opisać tor pomiarowy od czujnika do zapisu oraz obliczyć bilans pętli 4–20 mA, rozdzielczość przetwornika analogowo-cyfrowego (A/C) i wpływ próbkowania, uśredniania i czasu odpowiedzi na zarejestrowany sygnał;
4. rozróżnić dokładność i niepewność pomiaru, obliczyć niepewność złożoną i rozszerzoną prostego toru pomiarowego według przewodnika GUM (JCGM 100:2008) oraz wyjaśnić rolę wzorcowania, spójności pomiarowej i dryftu;
5. dobrać czujniki i klasę systemu monitoringu fotowoltaiki (PV) do celu pomiarów (IEC 61724-1:2021) i opisać zasady działania czujników stosowanych w energetyce wiatrowej, magazynach energii i biogazowniach;
6. rozpoznać typowe uszkodzenia toru pomiarowego i sposoby ich wykrywania oraz przełożyć wymagania z analiz HAZOP i LOPA zbiornika biogazu na specyfikację toru pomiarowego.

## Plan wykładu (90 min)

| Część | Czas |
|---|---|
| [Cele, architektura i czas](./01-cele-architektura-i-czas.mdx) | 20 min |
| [Tor pomiarowy od czujnika do zapisu](./02-tor-pomiarowy.mdx) | 18 min |
| [Niepewność pomiaru, wzorcowanie i dryft](./03-niepewnosc-i-wzorcowanie.mdx) | 14 min |
| [Czujniki w instalacjach OZE i klasy monitoringu PV](./04-czujniki-i-monitoring-pv.mdx) | 15 min |
| [Uszkodzenia toru pomiarowego i przykład biogazowy](./05-uszkodzenia-toru-i-przyklad-biogazowy.mdx) | 18 min |
| [Podsumowanie i quiz](./06-podsumowanie.mdx) | 5 min |
| **Razem** | **90 min** |

## Najważniejsze źródła

1. JCGM (2008). *JCGM 100:2008 Evaluation of measurement data — Guide to the expression of uncertainty in measurement (GUM)*, wyd. 1, ze zmianą 1 (Amd.1:2026). BIPM. [https://www.bipm.org/documents/20126/2071204/JCGM_100_2008_E.pdf](https://www.bipm.org/documents/20126/2071204/JCGM_100_2008_E.pdf)
2. JCGM (2012). *International vocabulary of metrology — Basic and general concepts and associated terms (VIM)*, wyd. 3, JCGM 200:2012. BIPM. [https://jcgm.bipm.org/vim/en/index.html](https://jcgm.bipm.org/vim/en/index.html)
3. Stouffer K., Pease M., Tang C., Zimmerman T., Pillitteri V., Lightman S., Hahn A., Saravia S., Sherule A., Thompson M. (2023). *Guide to Operational Technology (OT) Security* (NIST SP 800-82r3). NIST. [https://doi.org/10.6028/NIST.SP.800-82r3](https://doi.org/10.6028/NIST.SP.800-82r3)
4. Woyte A., Richter M., Moser D., Reich N., Green M., Mau S., Beyer H.G. (2014). *Analytical Monitoring of Grid-connected Photovoltaic Systems: Good Practices for Monitoring and Performance Analysis* (Report IEA-PVPS T13-03:2014). IEA PVPS. [https://iea-pvps.org/wp-content/uploads/2020/01/IEA-PVPS_T13-D2_3_Analytical_Monitoring_of_PV_Systems_Final.pdf](https://iea-pvps.org/wp-content/uploads/2020/01/IEA-PVPS_T13-D2_3_Analytical_Monitoring_of_PV_Systems_Final.pdf)
5. Reda I. (2011). *Method to Calculate Uncertainties in Measuring Shortwave Solar Irradiance Using Thermopile and Semiconductor Solar Radiometers* (NREL/TP-3B10-52194). National Renewable Energy Laboratory. [https://docs.nlr.gov/docs/fy11osti/52194.pdf](https://docs.nlr.gov/docs/fy11osti/52194.pdf)
6. Kommission für Anlagensicherheit (2019). *TRAS 120 — Sicherheitstechnische Anforderungen an Biogasanlagen* (Lesefassung). [https://www.kas-bmu.de/files/publikationen/TRAS/TRAS%20(endgueltige%20Fassung)/LesefassTRAS120.pdf](https://www.kas-bmu.de/files/publikationen/TRAS/TRAS%20(endgueltige%20Fassung)/LesefassTRAS120.pdf)

## Powiązania

- Poprzedni wykład: [W2: Analiza ryzyka — HAZID, HAZOP, FMEA, FTA, LOPA i SIL](../wyklad-02-analiza-ryzyka/index.md) — tabela pomiarów z HAZOP i przyrządowa funkcja bezpieczeństwa z LOPA dla zbiornika biogazu stają się tu specyfikacją toru pomiarowego.
- Wcześniej: [W1: Zagrożenia w instalacjach OZE, ramy prawne i warstwy ochrony](../wyklad-01-zagrozenia-ramy-prawne/index.md) — rozróżnienie monitoringu i funkcji ochronnej, na którym opiera się cały ten wykład.
- Następny wykład: W4: Komunikacja w instalacjach OZE — Modbus, SunSpec, OPC UA, MQTT, IEC 61850 i IEC 60870-5-104 — jak dane z toru pomiarowego trafiają przez protokoły i bramy do sterowników, SCADA i chmury.
- Dalej:
  - W5: Jakość danych, wskaźniki KPI, zarządzanie alarmami i wykrywanie anomalii — jakość danych i alarmy;
  - W6: Fotowoltaika — bezpieczeństwo elektryczne i pożarowe, monitoring wydajności — monitoring wydajności PV;
  - W7: Energetyka wiatrowa — system bezpieczeństwa, hamulce, oblodzenie i monitorowanie stanu — monitorowanie stanu i diagnostyka drgań;
  - W8: Magazyny energii (BESS) — BMS, niekontrolowany wzrost temperatury i detekcja gazów — pomiary w BMS i detekcja gazów;
  - W9: Biogazownie — ochrona przeciwwybuchowa, detekcja gazów i bezpieczeństwo procesowe — dobór detektorów i nastaw w biogazowni;
  - W10: Cyberbezpieczeństwo OT i bezpieczna eksploatacja — strefy modelu Purdue i cyberbezpieczeństwo.
