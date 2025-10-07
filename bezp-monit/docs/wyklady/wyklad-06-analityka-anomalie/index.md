---
sidebar_position: 7
title: "W6: Analityka i wykrywanie anomalii"
---

# W6: Analityka i wykrywanie anomalii

## Przegląd i cele kształcenia

Wykład obejmuje metody wykrywania anomalii w danych z instalacji OZE: od prostych progów po techniki statystyczne (CUSUM, PCA) i koncepcje modelowania nienadzorowanego (autoenkoder). Porównamy metryki jakości alarmów i wpływ opóźnień detekcji na operacje.

Po zakończeniu wykładu student potrafi:

1. Zastosować progi statyczne i adaptacyjne do sygnałów procesowych.
2. Konfigurować detektory zmian CUSUM i interpretować wyniki.
3. Zastosować redukcję wymiarowości (PCA) do identyfikacji anomalii wielowymiarowych.
4. Ocenić systemy alarmowe przy użyciu precision/recall, F1 oraz analizować opóźnienia detekcji.
5. Odnieść metody do przypadków PV/wiatr/BESS i zaprojektować eksperymenty A/B dla progów.

## Struktura materiału

1. [Progi statyczne i adaptacyjne](./01-progi.mdx)
2. [CUSUM — detekcja zmian poziomu](./02-cusum.mdx)
3. [PCA i autoenkoder — koncepcje](./03-pca-autoencoder.mdx)
4. [Korelacje wielowymiarowe](./04-korelacje.mdx)
5. [Metryki alarmów i opóźnienia detekcji](./05-metryki-opoznienia.mdx)
6. [Studia przypadków: PV, wiatr, BESS](./06-case-studies.mdx)
7. [Podsumowanie i rekomendacje](./07-podsumowanie.mdx)

## Literatura skrócona

- Montgomery, "Statistical Quality Control" (CUSUM, SPC)
- Jolliffe, "Principal Component Analysis"
- Dokumentacje: Grafana Alerting, InfluxDB Tasks


