---
sidebar_position: 2
title: "W1: Architektura systemów monitoringu w OZE — kompendium"
---

# W1: Architektura systemów monitoringu w OZE — kompendium

## Przegląd i cele kształcenia

Wykład systematyzuje podstawy architektury monitoringu instalacji OZE, obejmując warstwy edge–fog–cloud, typy danych i źródła, kluczowe metryki (KPI) dla różnych technologii oraz filozofię alarmowania i eskalacji.

Po ukończeniu wykładu student potrafi:

1. Scharakteryzować warstwy architektury monitoringu (edge, fog, cloud) oraz ich odpowiedzialności.
2. Rozróżniać typy danych (ciągłe, zdarzeniowe) i mapować je do źródeł (inwertery, BMS, SCADA, IIoT).
3. Dobrać i obliczać podstawowe KPI: PR (PV), Availability, Capacity Factor (wiatr), SoH/SoC (BESS), OEE (biogaz).
4. Projektować filozofię alarmowania z priorytetami i ścieżkami eskalacji.

## Struktura materiału

1. [Wprowadzenie i rola monitoringu](./01-wstep-rola.mdx)
2. [Warstwy architektury: edge–fog–cloud](./02-warstwy-architektury.mdx)
3. [Typy danych i źródła](./03-typy-danych-zrodla.mdx)
4. [KPI dla PV, wiatru, BESS i biogazu](./04-kpi.mdx)
5. [Filozofia alarmowania i eskalacji](./05-alarmowanie.mdx)
6. [Podsumowanie i wskazówki praktyczne](./06-podsumowanie.mdx)

## Literatura skrócona

- IEC 61850 (przegląd, profile domenowe)
- IEC 62443 (cyberbezpieczeństwo systemów automatyki)
- Dokumentacja: InfluxDB 2.x, Grafana 10.x, MQTT (Eclipse Mosquitto)


