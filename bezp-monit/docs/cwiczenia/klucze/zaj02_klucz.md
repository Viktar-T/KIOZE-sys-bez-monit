---
title: "Klucz odpowiedzi — Zajęcia 02"
description: "Wzorcowe odpowiedzi - Monitoring instalacji PV"
section: "E-klucze"
---

# Klucz odpowiedzi — Zajęcia 02: Monitoring instalacji PV

## Zadania P/R/W

### Poziom P

**P1: Wykres P(t)**
- Wykres liniowy, dwie serii: `moc_DC[kW]` (niebieski) i `moc_AC[kW]` (czerwony)
- Dane obejmują **3 dni** (2025-04-20, 21, 22), każdy z charakterystycznym profilem dobowym
- Trend dzienny: wzrost 08:00–11:00, plateau, spadek do 17:30
- Szczyt DC: ~2,58 kW (dzień 3, 10:30), szczyt AC: ~2,20 kW (dzień 1, 11:15)

**P2: Obliczenia sprawności**
- **Sprawność inwertera**: η = P_AC / P_DC × 100%
- **Przykład 2025-04-20 11:15**: η = 2,20 / 2,55 × 100% = **86,3%**
- **Przykład 2025-04-21 10:30**: η = 2,00 / 2,33 × 100% = **85,8%**
- **Przykład 2025-04-22 10:15**: η = 2,16 / 2,51 × 100% = **86,1%**
- **WNIOSEK**: Sprawność stabilna ~85–87%, typowa dla inwertera PV

**P3: Identyfikacja alarmów**
W pliku występuje **7 wierszy z `alarm=TAK`** różnych typów:

| Dzień | Czas | `przyczyna` | `severity` | `status_inwertera` | Kontekst |
|---|---|---|---|---|---|
| 2025-04-20 | 11:30 | OVER_TEMP | WARN | ON | temp_modulu=61°C |
| 2025-04-20 | 12:15 | OVER_TEMP | WARN | LIMITING | temp_modulu=62°C, inwerter ogranicza moc |
| 2025-04-21 | 10:45 | ZACIENIENIE | INFO | ON | nagły spadek nasłonecznienia do 300 W/m² |
| 2025-04-21 | 13:00 | AWARIA_CZUJNIKA_TEMP | INFO | ON | temp_modulu=0°C (nierealistyczne) |
| 2025-04-22 | 10:30 | OGRANICZENIE_AC | WARN | LIMITING | moc_AC ≪ moc_DC (1,60 vs 2,58 kW) |
| 2025-04-22 | 10:45 | OGRANICZENIE_AC | WARN | LIMITING | kontynuacja ograniczenia |
| 2025-04-22 | 14:30 | AWARIA_INWERTERA | ALARM | FAULT | moc_AC=0 mimo moc_DC=0,76 kW |

- **Rekomendacje**: monitoring temp., przegląd chłodzenia, kalibracja czujnika temp., diagnostyka inwertera

---

### Poziom R

**R1: Analiza trendu dziennego**
- **Trend**: Krzywa gaussa skorygowana (szybki wzrost, plateau, szybki spadek)
- **Czas szczytu**: okolice 10:30–11:30 (zależnie od dnia)
- **Łączna energia (3 dni)**: ~28,4 kWh (suma kolumny `energia_AC[kWh]`)
- **Średnia dzienna**: ~9,5 kWh
- **Współczynnik CF (Capacity Factor)**: CF = Energia_rzeczywista / Energia_maksymalna
  - CF ≈ **45–50%** (dla okna 08:00–17:30 i P_max ~2,2 kW)

**R2: Raport z działaniami**
- **Działania zalecane**:
  1. Monitoring sprawności η (cel: > 85%)
  2. Inspekcja wizualna modułów (zabrudzenie, pęknięcia)

---

### Poziom W

**W1: Diagnoza przerwy w produkcji** (przykład)
- **Hipoteza 1**: Zacienienie przez sąsiednią zabudowę/drzewa (widoczne 2025-04-21 10:45)
- **Hipoteza 2**: Awaria inwertera — `status_inwertera=FAULT` (widoczne 2025-04-22 14:30, moc_AC=0)
- **Hipoteza 3**: Ograniczenie mocy AC przez inwerter (widoczne 2025-04-22 10:30–10:45)
- **Hipoteza 4**: Przegrzanie modułów (widoczne 2025-04-20 11:30, 12:15)

**Plan reakcji**:
1. **Natychmiast**: Sprawdzenie odczytów SCADA, wizualna inspekcja
2. **Krótkie**: Test MPPT (Maximum Power Point Tracking)
3. **Długie**: Mycie modułów, inspekcja IR termograficzna

---

## Słowniczek

- **MPPT** — Maximum Power Point Tracking, śledzenie punktu maksymalnej mocy
- **CF** — Capacity Factor, współczynnik wykorzystania mocy zainstalowanej
- **Soiling loss** — Straty przez zabrudzenie modułów (typowo 2-5%)
- **PR (Performance Ratio)** — Wskaźnik wydajności względnej instalacji
- **Hotspot** — Lokalne przegrzanie modułu prowadzące do degradacji

---

**Wersja**: 1.2 | **Data**: 2025-12-15
