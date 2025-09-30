---
sidebar_position: 4
title: "Ć4: BESS — monitoring (1 h) + bezpieczeństwo (1 h)"
---

# Ć4: BESS — monitoring (1 h) + bezpieczeństwo (1 h)

## Cel zajęć

Część 1 (monitoring, 1 h): Mapowanie telemetrii BMS (SoC, SoH, ΔT, napięcia cel), reguły korelacji zdarzeń oraz wizualizacja heatmap stanu pakietu. 

Część 2 (bezpieczeństwo, 1 h): Analiza zagrożeń, budowa matrycy Cause‑&‑Effect, sekwencje E‑stop oraz checklisty przeglądów.

## Rezultaty (deliverables)

1. Tabela mapowania BMS → tagi (SoC, SoH, V_cell_min/max, ΔT, prądy) + jakość/zakresy.
2. Dashboard „Heatmap pakietu” (T_cell i V_cell) + panele trendów i zdarzeń.
3. Zestaw reguł korelacyjnych (np. ΔT + prąd + wentylacja) i 2 alarmy adaptacyjne.
4. Matryca Cause‑&‑Effect (C&E) dla wybranych scenariuszy + sekwencja E‑stop.
5. Checklisty przeglądowe (miesięczna/roczna) i notatka BHP (1 strona).

## Materiały i narzędzia

- Specyfikacja BMS (interfejs, ograniczenia), przykładowe dane.
- Grafana/InfluxDB (heatmapy), narzędzie do C&E (arkusz/diagram).
- Wytyczne BHP i p‑poż. producenta BESS, normy (wybiórczo).

## Przebieg zajęć (2 × 45 min)

### Część 1 — Monitoring (45 min)

1. Mapowanie telemetrii BMS do tagów i definicje jakości.
2. Projekt paneli: heatmap T_cell/V_cell, trend SoC/SoH, zdarzenia (SOE).
3. Reguły korelacyjne: ΔT(SoC, I), T_cell vs. prędkość wentylatorów; 2 alarmy adaptacyjne.

### Część 2 — Bezpieczeństwo (45 min)

1. Scenariusze zagrożeń (dym, wyciek, ΔT>prog, awaria HVAC).
2. Matryca C&E: przyczyny → efekty (odcięcia, wentylacja, powiadomienia).
3. Sekwencja E‑stop i checklisty przeglądowe; podsumowanie i wnioski.

## Wskazówki merytoryczne

- Ustal spójne progi adaptacyjne zależne od SoC i prądu (C‑rate); dodaj histerezę.
- Heatmapy umożliwiają szybkie wykrycie outlierów cel; rozważ sortowanie po kolumnach modułów.
- C&E projektuj z redundancją czujników i jasno definiowanymi priorytetami P1–P3.

## (Opcjonalnie) Przykładowe definicje alarmów

```text
Alarm: Przegrzewanie pakietu
Warunek: ΔT_cell_95p > 12°C przez ≥ 5 min przy |I| > 0.5 C
Działanie: P1 — ograniczenie prądu, zwiększenie wentylacji, powiadomienie

Alarm: Rozjazd napięć cel
Warunek: V_cell_max − V_cell_min > 120 mV przez ≥ 10 min
Działanie: P2 — wyrównywanie (balansowanie), zgłoszenie serwisowe
```

## Kryteria oceny

- Poprawne mapowanie BMS i heatmapy — 35%
- Reguły korelacyjne i alarmy adaptacyjne — 25%
- Matryca C&E i sekwencja E‑stop — 25%
- Checklisty i notatka BHP — 15%


