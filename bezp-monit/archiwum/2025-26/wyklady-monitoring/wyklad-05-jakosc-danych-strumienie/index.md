---
sidebar_position: 6
title: "W5: Jakość danych i inżynieria strumieni"
---

# W5: Jakość danych i inżynieria strumieni

## Przegląd i cele kształcenia

Wykład koncentruje się na jakości danych w monitoringu OZE oraz inżynierii strumieni: walidacji, imputacji, detekcji dryftu czujników, oknach czasowych i resamplingu, projektowaniu retencji w TSDB, brokerach i wizualizacji, a także na wersjonowaniu konfiguracji i dashboardów.

Po zakończeniu wykładu student potrafi:

1. Projektować reguły walidacji i imputacji oraz monitorować dryft czujników.
2. Stosować okna czasowe, resampling i downsampling do stabilnych KPI i alarmów.
3. Dobierać parametry TSDB (retencja, indeksy) oraz integrować brokera i Grafanę.
4. Wersjonować konfiguracje i dashboardy, zapewniając odtwarzalność analiz.

## Struktura materiału

1. [Walidacja, imputacja, dryft czujników](./01-walidacja-imputacja-dryft.mdx)
2. [Okna czasowe, resampling, downsampling](./02-okna-resampling.mdx)
3. [Bazy czasoszeregowe (TSDB)](./03-tsdb.mdx)
4. [Brokerzy i wizualizacja (MQTT, Grafana)](./04-broker-grafana.mdx)
5. [Wersjonowanie konfiguracji i dashboardów](./05-wersjonowanie.mdx)
6. [Podsumowanie i praktyczne wskazówki](./06-podsumowanie.mdx)

## Literatura skrócona

- InfluxDB 2.x i Flux/InfluxQL; TimescaleDB i hypertables
- Grafana 10.x: tempo queries, alerting, provisioning
- MQTT (Eclipse Mosquitto) i zasady QoS/retained messages


