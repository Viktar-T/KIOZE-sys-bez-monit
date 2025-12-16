---
title: "Klucz odpowiedzi — Zadanie 5: Monitoring magazynu energii BESS"
section: "E-klucze"
version: "1.1"
---

# Klucz — Zadanie 5: Monitoring magazynu energii BESS (12 pkt)

## Dane (CSV)
- Plik: `/cwiczenia/dane/zad05_bess.csv`, interwał 1h, **48 wierszy** (2025-05-15 00:00 – 2025-05-16 23:00).
- Kolumny: `czas, SOC[%], SOH[%], napiecie_pakietu[V], prad[A], temp[C], napiecie_cel_min[V], napiecie_cel_max[V], liczba_cykli, alarm, przyczyna, severity, status_bess`.

### Progi dydaktyczne (spójne z kartą)
- SOC_warn: poniżej 15%, SOC_alarm: 10%
- temp_warn: 35°C, temp_alarm: 45°C
- deltaU_warn: 0.10 V, deltaU_alarm: 0.20 V, gdzie `deltaU = napiecie_cel_max - napiecie_cel_min`

## P/R/W

### P (Wykresy, cykle) – 4 pkt
- Wykres `SOC(t)` pokazuje cykle:
  - 2025-05-15 00:00–12:00: ładowanie **25% → 95%** (`status_bess=CHARGE`, `prad[A]` dodatni)
  - 2025-05-15 13:00–2025-05-16 04:00: rozładowanie **92% → 10%** (`status_bess=DISCHARGE`, `prad[A]` ujemny)
  - 2025-05-16 05:00–13:00: ponowne ładowanie **25% → 95%**
  - 2025-05-16 14:00–23:00: rozładowanie **92% → 32%**
- Wykres `temp(t)` rośnie w trakcie obciążenia i ma epizod alarmowy.

### R (Degradacja SOH, interpretacja) – 4 pkt
- Trend SOH (w 2 dni): **98% → 95%** (spadek widoczny wieczorem 2025-05-16).
- `liczba_cykli` rośnie: **452 → 499**.
- Wniosek: spadek SOH jest skorelowany z narastającą liczbą cykli oraz epizodami pracy przy wyższej temperaturze.

### W (Incydenty, reakcja) – 4 pkt
- Incydent 1: **NISKI_SOC**
  - 2025-05-16 04:00: `SOC=10%`, `alarm=TAK`, `przyczyna=NISKI_SOC`, `severity=WARN`, `status_bess=LIMIT`.
  - Działanie: ograniczyć rozładowanie, przejść na tryb oszczędny, zaplanować ładowanie.
- Incydent 2: **NADTEMP_NIEROWNOSC**
  - 2025-05-16 20:00: `temp=52°C`, `napiecie_cel_min=4.00V`, `napiecie_cel_max=4.30V`.
  - `deltaU=0.30V` (powyżej progu 0.20 V), `alarm=TAK`, `severity=ALARM`, `status_bess=LIMIT`.
  - Działanie: ograniczyć prąd (derating), uruchomić balancing BMS, sprawdzić moduł o najwyższym napięciu, chłodzenie/odcięcie, gotowość do ewakuacji przy ryzyku runaway.

## Tabela alarmów (z pliku)
| Czas | alarm | przyczyna | severity | status_bess | SOC | temp | deltaU |
|---|---|---|---|---|---:|---:|---:|
| 2025-05-16 04:00 | TAK | NISKI_SOC | WARN | LIMIT | 10 | 18 | 0.08 |
| 2025-05-16 20:00 | TAK | NADTEMP_NIEROWNOSC | ALARM | LIMIT | 52 | 52 | 0.30 |

**Słowniczek**: SOC, SOH, C-rate, BMS (Battery Management System), cell balancing, thermal runaway
