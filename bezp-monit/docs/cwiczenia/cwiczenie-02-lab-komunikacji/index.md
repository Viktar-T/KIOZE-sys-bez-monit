---
sidebar_position: 2
title: "Ć2: Laboratorium komunikacji — Modbus, OPC UA, MQTT"
---

# Ć2: Laboratorium komunikacji — Modbus, OPC UA, MQTT

## Cel zajęć

Skonfigurować przepływ danych od symulatora urządzenia (Modbus) przez bramkę OPC UA/MQTT do konsumenta (np. InfluxDB/Grafana). Celem jest zbudowanie 3 alarmów z priorytetami i potwierdzaniem oraz przygotowanie mini‑dashboardu (trend + tabela zdarzeń).

## Rezultaty (deliverables)

1. Działająca komunikacja: Modbus → OPC UA/MQTT → TSDB → dashboard.
2. Trzy reguły alarmowe (P1, P2, P3) z potwierdzaniem i eskalacją.
3. Dashboard: wykres trendu i tabela zdarzeń (SOE) z filtrami.
4. Krótki raport (1–2 strony): parametry komunikacji, QoS, opóźnienia, wnioski.

## Narzędzia

- Symulator Modbus (np. `mbserver`/Node‑RED/`modbus-tk`).
- Broker MQTT (Eclipse Mosquitto) lub serwer OPC UA (open62541/Prosys trial).
- InfluxDB 2.x + Grafana 10.x (lokalnie lub kontenery). 

## Przygotowanie środowiska (przykład docker‑compose)

```yaml
version: "3.8"
services:
  mosquitto:
    image: eclipse-mosquitto:2
    ports: ["1883:1883"]
  influxdb:
    image: influxdb:2
    ports: ["8086:8086"]
  grafana:
    image: grafana/grafana:10.4.0
    ports: ["3000:3000"]
```

## Zadania krok po kroku

### 1) Symulator i mapowanie

- Uruchom symulator Modbus z rejestrami: `40001` (moc), `40002` (napięcie), `40003` (temperatura), `40010` (status błędu).
- Zbuduj bramkę: Modbus→MQTT (np. Node‑RED) lub Modbus→OPC UA; ustal nazwę topiców/namespace.

### 2) Integracja z magazynem danych i dashboardem

- Skonfiguruj most MQTT→InfluxDB (Telegraf) lub bezpośrednie zapisy do InfluxDB API.
- W Grafanie przygotuj: panel trendu `moc`, `napięcie`, `temperatura`; panel tabela SOE.

### 3) Alarmy (P1/P2/P3) i potwierdzanie

- P1: `temperatura > 80°C` przez ≥ 60 s (eskalacja SMS/email symulowana).
- P2: `moc < 0.5 × moc_ref` przez ≥ 10 min.
- P3: `status_błędu != 0` (informacyjny z przypisaniem do serwisu).
- Dodaj mechanizm potwierdzania (ack) i loguj `ack_timestamp`, `ack_user`.

### 4) Testy i raport

- Wygeneruj zdarzenia (zmiany rejestrów) i zmierz opóźnienia end‑to‑end.
- Zapisz wyniki: zrzuty ekranu dashboardu, konfiguracje (provisioning), czasy T_detect/MTTA.

## Kryteria oceny

- Komunikacja działa i jest odporna na restart (store‑and‑forward/QoS) — 30%
- Poprawnie działające 3 alarmy z potwierdzaniem — 30%
- Czytelny dashboard i tabela SOE — 25%
- Raport techniczny (parametry, QoS, wnioski) — 15%

## Wskazówki i dobre praktyki

- Używaj QoS 1 w MQTT dla alarmów; stosuj retained messages dla statusów.
- Standaryzuj nazwy topiców/tagów; dodaj `quality_flag` przy błędach komunikacji.
- Provisioning Grafany i Telegrafa trzymaj w repo (konfiguracja jako kod).


