---
title: "Klucz odpowiedzi — Zadanie 2"
description: "Wzorcowe odpowiedzi - Turbina wiatrowa VAWT z magazynem energii"
section: "E-klucze"
---

# Klucz odpowiedzi — Zadanie 2: Turbina wiatrowa VAWT z magazynem energii

## Zadania P/R/W

### Poziom P

**P1: Wykres P(t) i v(t)**
- Wykres liniowy, dwie osie Y: `moc_turbiny[kW]` (niebieski) i `predkosc_wiatru[m/s]` (zielony)
- Dane obejmują **3 dni** z różnymi warunkami wiatrowymi
- Widoczna zależność: moc rośnie z prędkością wiatru (proporcjonalnie do v³)
- Maks. moc w danych: **7.27 kW** przy v = 13 m/s

**P2: Obliczenia współczynnika mocy Cₚ**
- **Wzór**: Cₚ = P / (0.5 × ρ × A × v³), gdzie ρ = 1.225 kg/m³, A = 18 m²
- **Przykład (z CSV) v = 8 m/s, P = 1.69 kW**: Cₚ = 1690 / (0.5 × 1.225 × 18 × 8³) = 1690 / 5645 = **0.30**
- **Przykład (z CSV) v = 10 m/s, P = 3.31 kW**: Cₚ = 3310 / (0.5 × 1.225 × 18 × 10³) = 3310 / 11025 = **0.30**
- **Przykład (z CSV) v = 12 m/s, P = 5.72 kW**: Cₚ = 5720 / (0.5 × 1.225 × 18 × 12³) = 5720 / 19051 = **0.30**
- **Uwaga interpretacyjna**: dla v < 3 m/s Cₚ może być niestabilny (dzielenie przez małe v³). Typowy Cₚ dla VAWT: 0.25–0.35.

**P3: Wykres SOC(t)**
- Wykres liniowy `SOC[%](t)` pokazujący cykle ładowania/rozładowania
- Dzień 1: SOC ~58–62% (start 60%, koniec 61%)
- Dzień 2: SOC ~57–60% (start 60%, koniec 57%)
- Dzień 3: SOC ~14–36% (start 16%, minimum 14%, koniec 36%)
- Spadek SOC w nocy na Dniu 3 (02:30–04:30) jest skorelowany z alarmami `NISKI_SOC`

**P4: Identyfikacja alarmów**
W pliku występuje **10 wierszy z `alarm=TAK`** (w tym kilka powtórzeń `NISKI_SOC`):

| Dzień | Czas | `przyczyna` | `severity` | `status_turbiny` | Kontekst |
|---|---|---|---|---|---|
| 2025-05-01 | 12:30 | PRZEGRZANIE_BATERII | ALARM | RUNNING | temp_baterii=46°C |
| 2025-05-01 | 16:30 | PRZEGRZANIE_GENERATORA | WARN | RUNNING | temp_generatora=72°C |
| 2025-05-02 | 09:00 | NIEROWNOSC_CEL | WARN | RUNNING | odchyłka BMS (ostrzeżenie) |
| 2025-05-02 | 15:00 | NADPREDKOSC | ALARM | BRAKING | v=26 m/s, obroty=160 rpm, P→0 |
| 2025-05-03 | 02:30 | NISKI_SOC | WARN | RUNNING | SOC=14% (niski stan) |
| 2025-05-03 | 03:00 | NISKI_SOC | WARN | RUNNING | SOC=14% (kontynuacja) |
| 2025-05-03 | 03:30 | NISKI_SOC | WARN | RUNNING | SOC=14% (kontynuacja) |
| 2025-05-03 | 04:00 | NISKI_SOC | WARN | RUNNING | SOC=14% (kontynuacja) |
| 2025-05-03 | 04:30 | NISKI_SOC | WARN | RUNNING | SOC=14% (kontynuacja) |
| 2025-05-03 | 17:00 | AWARIA_BMS | ALARM | FAULT | dane P/U/I=0, stan awaryjny |

---

### Poziom R

**R1: Analiza cykli ładowania/rozładowania**

| Data | Okres | Trend SOC | Energia `energia_AC[kWh]` | Komentarz |
|---|---|---|---:|---|
| 2025-05-01 | 00:00–06:00 | 60→59 (spadek) | 2.56 | produkcja niska, słabszy wiatr |
| 2025-05-01 | 06:00–12:00 | 58→60 (wzrost) | 15.36 | wyraźnie większa produkcja |
| 2025-05-01 | 12:00–18:00 | 60→62 (wzrost) | 20.66 | najwyższa produkcja w ciągu doby |
| 2025-05-01 | 18:00–24:00 | 61→61 (stabilnie) | 1.18 | niska produkcja |
| 2025-05-02 | 00:00–06:00 | 60→59 (spadek) | 2.56 | analogiczny profil nocny |
| 2025-05-02 | 06:00–12:00 | 58→60 (wzrost) | 15.36 | poranny wzrost produkcji |
| 2025-05-02 | 12:00–18:00 | 60→58 (spadek) | 17.20 | spadek SOC mimo produkcji (pobór/tryb pracy) |
| 2025-05-02 | 18:00–24:00 | 57→57 (stabilnie) | 1.18 | niska produkcja |
| 2025-05-03 | 00:00–06:00 | 16→15 (spadek) | 2.56 | bardzo niski SOC; później alarmy `NISKI_SOC` |
| 2025-05-03 | 06:00–12:00 | 15→26 (wzrost) | 15.36 | odbudowa SOC przy większej produkcji |
| 2025-05-03 | 12:00–18:00 | 27→36 (wzrost) | 19.51 | kontynuacja ładowania |
| 2025-05-03 | 18:00–24:00 | 36→36 (stabilnie) | 1.18 | niska produkcja |

**R2: Bilans energetyczny (3 dni)**
- **Energia wyprodukowana**: **114.67 kWh** (suma `energia_AC[kWh]`)
- **Suma dzienna**:
  - 2025-05-01: 39.76 kWh
  - 2025-05-02: 36.30 kWh
  - 2025-05-03: 38.61 kWh
- **Średnia dzienna**: ~38.22 kWh
- **Capacity Factor**: CF = 38.22 / (10 × 24) = **15.9%**

**R3: Korelacja moc vs prędkość wiatru**
- Zależność sześcienna P ∝ v³ widoczna do v ≈ 11 m/s
- Powyżej v = 11 m/s moc stabilizuje się (ograniczenie przez generator)
- Przy v > 25 m/s turbina przechodzi w tryb hamowania (P → 0)

---

### Poziom W

**W1: Diagnoza stanu alarmowego NADPREDKOSC**

**Hipoteza**: Poryw wiatru przekroczył prędkość odcięcia (25 m/s)

**Analiza**:
- v = 26 m/s (wiersz 2025-05-02 15:00)
- `status_turbiny = BRAKING`, `moc_turbiny = 0 kW` (ochrona przed nadprędkością)
- Po spadku wiatru turbina może wrócić do `RUNNING` po spełnieniu warunków bezpieczeństwa

**Plan reakcji**:
1. **Natychmiast**: Weryfikacja statusu hamulca (SCADA), sprawdzenie czy turbina zatrzymana
2. **Po ustąpieniu wiatru**: Inspekcja wizualna łopat i mechanizmu hamulca
3. **Przed restartem**: Test hamulca mechanicznego, reset alarmów w SCADA

**W2: Diagnoza PRZEGRZANIE_BATERII**

**Hipoteza**: Intensywne ładowanie przy wysokiej temperaturze otoczenia

**Analiza**:
- czas alarmu: 2025-05-01 12:30 (`PRZEGRZANIE_BATERII`)
- temp_baterii = 46°C (próg: 45°C)
- SOC w momencie alarmu: 60%
- `status_turbiny = RUNNING`, moc i wiatr na poziomie roboczym

**Plan reakcji**:
1. **Natychmiast**: Ograniczenie prądu ładowania przez BMS (automatyczne)
2. **Krótkoterminowo**: Sprawdzenie wentylacji szafy baterii
3. **Długoterminowo**: Rozważenie dodatkowego chłodzenia aktywnego

---

## Słowniczek

- **VAWT** — Vertical Axis Wind Turbine, turbina o osi pionowej
- **Cₚ** — Współczynnik mocy (Power Coefficient), max teoretyczny: 0.593 (limit Betz'a)
- **TSR** — Tip Speed Ratio, stosunek prędkości końcówki łopaty do prędkości wiatru
- **MPPT** — Maximum Power Point Tracking, śledzenie optymalnego TSR
- **PMSG** — Permanent Magnet Synchronous Generator
- **SOC** — State of Charge, stan naładowania baterii [%]
- **SOH** — State of Health, stan zdrowia baterii [%]
- **BMS** — Battery Management System
- **LiFePO₄** — Litowo-żelazowo-fosforanowa chemia baterii (bezpieczna, długowieczna)
- **Cut-in** — Prędkość startu turbiny (2.5 m/s)
- **Cut-out** — Prędkość odcięcia, automatyczne zatrzymanie (25 m/s)
- **Dump load** — Rezystor zrzutowy do rozpraszania nadmiaru energii

---

**Wersja**: 1.0 | **Data**: 2025-12-15
