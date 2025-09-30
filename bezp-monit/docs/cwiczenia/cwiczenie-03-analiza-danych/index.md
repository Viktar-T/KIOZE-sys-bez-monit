---
sidebar_position: 3
title: "Ć3: Analiza danych eksploatacyjnych — PR/CF i detekcja anomalii"
---

# Ć3: Analiza danych eksploatacyjnych — PR/CF i detekcja anomalii

## Cel zajęć

Przeprowadzenie analizy danych z instalacji PV lub wiatrowej: przygotowanie danych (czyszczenie, resampling), obliczenie KPI (PR dla PV, CF dla wiatru), implementacja prostej detekcji anomalii (progi adaptacyjne lub CUSUM) i opracowanie krótkiego raportu.

## Dane wejściowe

- Zestaw A (PV): G_POA, T_mod, P_DC, P_AC, E_AC (1 s–1 min) — min. 7 dni.
- Zestaw B (wiatr): v_wiatru, kierunek, P_AC, stany turbiny — min. 7 dni.

## Rezultaty (deliverables)

1. Notebook/skrypt z potokiem przetwarzania (czyszczenie → KPI → detekcja → wykresy).
2. Wykresy: PR lub CF vs. czas; wykryte zdarzenia/anomalie; rozkłady.
3. Raport (2–3 strony): metodologia, wyniki, wnioski, ograniczenia.

## Kroki realizacji

### 1) Wczytanie i walidacja

- Spójność timestampów i stref czasowych; brakujące wartości i duplikaty.
- Walidacja zakresów: G_POA ≥ 0, 0 ≤ PR ≤ 1.2, sensowne granice mocy.

### 2) Resampling i agregacje

- Ujednolicenie do siatki 1 min; agregacje: mean/max/p95; flagi jakości.

### 3) KPI

- PV: PR = E_rzecz / E_teor(G_POA, T_mod); okna 15 min i 1 h.
- Wiatr: CF = E_rzecz / (P_nom × czas); segmentacja wg prędkości/kierunku.

### 4) Detekcja anomalii

- Progi adaptacyjne: rolling median + k×MAD; lub CUSUM (k, h) dla PR/CF.

### 5) Wizualizacja i raport

- Wykresy trendów, heatmapy dobowych profili; tabela zdarzeń z timestampami.

## Przykładowe zapytania (InfluxDB Flux)

```flux
from(bucket: "oze")
  |> range(start: -7d)
  |> filter(fn: (r) => r._measurement == "pv")
  |> aggregateWindow(every: 1m, fn: mean)
  |> yield(name: "mean_1m")
```

## Kryteria oceny

- Poprawność przetwarzania i KPI — 40%
- Skuteczność detekcji (uzasadnione progi/parametry) — 30%
- Jakość wizualizacji i czytelność raportu — 30%

## Wskazówki

- Dokumentuj decyzje (usuwanie outlierów, wybór okna); trzymaj kod i wyniki w repo.
- Oddziel dane wejściowe od wynikowych; zapisuj metadane (wersje narzędzi, strefa czasu).


