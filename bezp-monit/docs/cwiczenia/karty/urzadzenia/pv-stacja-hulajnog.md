---
title: "Urządzenie — Stacja ładowania hulajnóg + PV"
course: "Systemy bezpieczeństwa i monitorowania instalacji OZE"
version: "1.2"
section: "B-karty"
tags: ["urzadzenie","pv","stacja-hulajnog"]
---

# Stacja ładowania hulajnóg + PV — dokumentacja

 Inwerter: SOFAR 2200TL-G3 (1-fazowy, on-grid, 1 MPPT / 1 string)

 Opis instalacji: [**"PV-Stacja hulajnog"**](https://docs-plat-edu-bad.vercel.app/docs/laboratories-and-equipment/photovoltaic/1.1-pv-hulajnogi-outside-r06)

## Mapa sygnałów i czujników
- Nasłonecznienie [W/m2]
- Napięcie DC [V], Prąd DC [A]
- Moc AC [kW], status inwertera
- Temp. modułu [°C]

## Interpretacja sygnałów (skrót)
- `moc_DC[kW]` to moc po stronie DC (wejście inwertera), a `moc_AC[kW]` to moc po stronie AC (wyjście).
- Zwykle `moc_AC < moc_DC` (straty konwersji, sprawność inwertera).
- Wysoka `temp_modulu[C]` może obniżać uzysk (spadek mocy) i generować alarm.

## Słownik kolumn (CSV)
| Kolumna | Znaczenie | Jednostka | Typowy zakres |
|---|---|---|---|
| `czas` | znacznik czasu pomiaru | - | kilka dni; 08:00–17:30 (co 15 min) |
| `naslonecznienie[W/m2]` | natężenie promieniowania | W/m2 | 0–920 |
| `napiecie_DC[V]` | napięcie DC | V | 250–450 |
| `prad_DC[A]` | prąd DC | A | 0–6 |
| `moc_DC[kW]` | moc DC (wejście inwertera) | kW | 0–2,6 |
| `moc_AC[kW]` | moc AC (wyjście inwertera) | kW | 0–2,2 |
| `temp_modulu[C]` | temperatura modułu | °C | 15–65 |
| `alarm` | znacznik anomalii | TAK/NIE | - |
| `przyczyna` | etykieta przyczyny/anomalii | - | OK / OVER_TEMP / ZACIENIENIE / ... |
| `severity` | istotność zdarzenia | - | OK / INFO / WARN / ALARM |
| `status_inwertera` | stan pracy inwertera | - | ON / LIMITING / FAULT / STANDBY |
| `energia_AC[kWh]` | energia w interwale | kWh | 0–0,55 |

## Zakresy operacyjne
- Nasłonecznienie: 0–920 W/m²
- U_DC: 250–450 V, I_DC: 0–6 A
- moc_DC: 0–2,6 kW, moc_AC: 0–2,2 kW
- Temp. modułu: 15–65 °C
- Energia dzienna: ~9–10 kWh (przy dobrym nasłonecznieniu)

## Progi alarmowe (przykład)
- Temp. modułu > 60 °C → `OVER_TEMP` (severity: WARN)
- Ograniczenie mocy AC przez inwerter → `OGRANICZENIE_AC` (severity: WARN, status: LIMITING)
- Awaria inwertera → `AWARIA_INWERTERA` (severity: ALARM, status: FAULT)
- Zacienienie modułów → `ZACIENIENIE` (severity: INFO)
- Awaria czujnika temperatury → `AWARIA_CZUJNIKA_TEMP` (severity: INFO)

## Procedury BHP
- LOTO przy pracach na DC
- PPE: rękawice elektroizolacyjne, okulary

## Uwaga o danych
Dane w katalogu `/cwiczenia/dane/` są **syntetyczne** (dydaktyczne). Zakresy mocy w plikach CSV mogą być dobrane pod ćwiczenie i nie muszą odpowiadać mocy znamionowej konkretnego modelu inwertera.
