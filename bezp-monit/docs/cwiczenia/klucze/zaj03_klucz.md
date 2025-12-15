---
title: "Klucz odpowiedzi — Zajęcia 03"
description: "Wzorcowe odpowiedzi - Turbina wiatrowa VAWT z magazynem energii"
section: "E-klucze"
---

# Klucz odpowiedzi — Zajęcia 03: Turbina wiatrowa VAWT z magazynem energii

## Zadania P/R/W

### Poziom P

**P1: Wykres P(t) i v(t)**
- Wykres liniowy, dwie osie Y: `moc_turbiny[kW]` (niebieski) i `predkosc_wiatru[m/s]` (zielony)
- Dane obejmują **3 dni** z różnymi warunkami wiatrowymi
- Widoczna zależność: moc rośnie z prędkością wiatru (proporcjonalnie do v³)
- Szczyt mocy: ~9.5 kW przy v ≈ 11 m/s (prędkość znamionowa)

**P2: Obliczenia współczynnika mocy Cₚ**
- **Wzór**: Cₚ = P / (0.5 × ρ × A × v³), gdzie ρ = 1.225 kg/m³, A = 18 m²
- **Przykład v = 8 m/s, P = 2.8 kW**: Cₚ = 2800 / (0.5 × 1.225 × 18 × 8³) = 2800 / 5645 = **0.50** → wartość zawyżona, sprawdzić dane
- **Przykład v = 10 m/s, P = 5.5 kW**: Cₚ = 5500 / (0.5 × 1.225 × 18 × 10³) = 5500 / 11025 = **0.50** → j.w.
- **Przykład v = 11 m/s, P = 9.2 kW**: Cₚ = 9200 / (0.5 × 1.225 × 18 × 11³) = 9200 / 14676 = **0.63** → powyżej limitu Betz'a
- **UWAGA**: Dane syntetyczne mogą zawierać uproszczenia. Typowy Cₚ dla VAWT: 0.25–0.35

**P3: Wykres SOC(t)**
- Wykres liniowy `SOC[%](t)` pokazujący cykle ładowania/rozładowania
- SOC oscyluje między ~30% (noc, brak wiatru) a ~90% (dzień, silny wiatr)
- Widoczne plateau przy SOC ≈ 95% (ograniczenie ładowania przez BMS)

**P4: Identyfikacja alarmów**
W pliku występuje **6 wierszy z `alarm=TAK`** różnych typów:

| Dzień | Czas | `przyczyna` | `severity` | `status_turbiny` | Kontekst |
|---|---|---|---|---|---|
| Dzień 1 | 14:30 | NADPREDKOSC | ALARM | BRAKING | v=26 m/s, obroty=158 rpm |
| Dzień 1 | 14:45 | NADPREDKOSC | ALARM | BRAKING | v=27 m/s, kontynuacja |
| Dzień 2 | 03:15 | NISKI_SOC | WARN | RUNNING | SOC=12%, brak wiatru nocą |
| Dzień 2 | 16:00 | PRZEGRZANIE_GENERATORA | WARN | RUNNING | temp_generatora=72°C |
| Dzień 3 | 10:45 | PRZEGRZANIE_BATERII | ALARM | RUNNING | temp_baterii=47°C |
| Dzień 3 | 22:00 | NIEROWNOSC_CEL | WARN | RUNNING | BMS wykrył nierównowagę napięć |

---

### Poziom R

**R1: Analiza cykli ładowania/rozładowania**

| Okres | Trend SOC | Przyczyna | Bilans energii |
|---|---|---|---|
| 00:00–06:00 | Spadek (80→45%) | Brak wiatru, pobór nocny | −7 kWh |
| 06:00–12:00 | Wzrost (45→85%) | Silny wiatr poranny | +8 kWh |
| 12:00–18:00 | Stabilny (85–90%) | Wiatr umiarkowany, pobór dzienny | ±0 kWh |
| 18:00–24:00 | Spadek (90→60%) | Słabnący wiatr, pobór wieczorny | −6 kWh |

**R2: Bilans energetyczny (3 dni)**
- **Energia wyprodukowana**: ~85 kWh (suma `energia_AC[kWh]`)
- **Średnia dzienna**: ~28 kWh
- **Capacity Factor**: CF = 28 / (10 × 24) = **11.7%** (niski — zmienne warunki wiatrowe)

**R3: Korelacja moc vs prędkość wiatru**
- Zależność sześcienna P ∝ v³ widoczna do v ≈ 11 m/s
- Powyżej v = 11 m/s moc stabilizuje się (ograniczenie przez generator)
- Przy v > 25 m/s turbina przechodzi w tryb hamowania (P → 0)

---

### Poziom W

**W1: Diagnoza stanu alarmowego NADPREDKOSC**

**Hipoteza**: Poryw wiatru przekroczył prędkość odcięcia (25 m/s)

**Analiza**:
- v = 26–27 m/s przez 30 min (14:30–15:00)
- System automatycznie aktywował hamowanie elektryczne + mechaniczne
- Obroty spadły z 158 rpm do 0 rpm w ciągu 2 min

**Plan reakcji**:
1. **Natychmiast**: Weryfikacja statusu hamulca (SCADA), sprawdzenie czy turbina zatrzymana
2. **Po ustąpieniu wiatru**: Inspekcja wizualna łopat i mechanizmu hamulca
3. **Przed restartem**: Test hamulca mechanicznego, reset alarmów w SCADA

**W2: Diagnoza PRZEGRZANIE_BATERII**

**Hipoteza**: Intensywne ładowanie przy wysokiej temperaturze otoczenia

**Analiza**:
- temp_baterii = 47°C (próg: 45°C)
- SOC w momencie alarmu: 88% (intensywne ładowanie)
- Temperatura otoczenia: prawdopodobnie > 30°C

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
