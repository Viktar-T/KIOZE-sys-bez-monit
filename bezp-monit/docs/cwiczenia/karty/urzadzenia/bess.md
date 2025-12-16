---
title: "Urządzenie — Magazyn energii BESS"
course: "Systemy bezpieczeństwa i monitorowania instalacji OZE"
version: "1.1"
section: "B-karty"
tags: ["urzadzenie","bess","soc","soh"]
---

# BESS — dokumentacja

## Mapa sygnałów i czujników
- SOC [%], SOH [%]
- Napięcie pakietu [V], prąd [A]
- Temp. ogniw/pakietu [°C]
- Napięcie celi min/max [V] (do deltaU)
- Liczba cykli, status pracy (CHARGE/DISCHARGE/LIMIT)

## Zakresy i progi
- SOC: 10–95% (progi ostrzegawcze: poniżej 15%, alarm: 10%)
- Temp.: 18–52 °C (progi dydaktyczne: WARN 35°C, ALARM 45°C)
- Napięcie cel: min/max w danych ok. 3.50–4.30 V
- Nierównowaga cel: `deltaU = napiecie_cel_max - napiecie_cel_min`, progi: WARN 0.10 V, ALARM 0.20 V

## Procedury BHP
- Monitoring temp., procedura ewakuacji i odcięcia ładowania
- Przy ALARM: ograniczenie prądu (derating), aktywacja balancing BMS, odcięcie, obserwacja po zdarzeniu
