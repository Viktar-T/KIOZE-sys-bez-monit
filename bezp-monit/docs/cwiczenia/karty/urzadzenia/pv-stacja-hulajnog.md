---
title: "Urządzenie — Stacja ładowania hulajnóg + PV"
course: "Systemy bezpieczeństwa i monitorowania instalacji OZE"
version: "1.0"
section: "B-karty"
tags: ["urzadzenie","pv","stacja-hulajnog"]
---

# Stacja ładowania hulajnóg + PV — dokumentacja

## Mapa sygnałów i czujników
- Nasłonecznienie [W/m2]
- Napięcie DC [V], Prąd DC [A]
- Moc AC [kW], status inwertera
- Temp. modułu [°C]

## Zakresy operacyjne
- Nasłonecznienie: 0–900 W/m2
- U_DC: 200–500 V, I_DC: 0–15 A
- Temp. modułu: 15–60 °C

## Progi alarmowe (przykład)
- Temp. modułu > 60 °C → OSTRZEŻENIE
- Różnica P_DC vs P_AC > 30% → DIAGNOSTYKA

## Procedury BHP
- LOTO przy pracach na DC
- PPE: rękawice elektroizolacyjne, okulary

## Dane
- [Zbiór danych (urzadzenie)](/cwiczenia/dane/urz_pv-stacja-hulajnog.csv)

