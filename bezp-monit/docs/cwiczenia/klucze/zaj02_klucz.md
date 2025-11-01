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
- Trend: wzrost 08:00-12:00, plateau 12:00-13:00, spadek 13:00-17:00
- Szczyt DC: ~4.14 kW, szczyt AC: ~3.57 kW (12:00)

**P2: Obliczenia sprawności**
- **Sprawność inwertera**: η = P_AC / P_DC × 100%
- **Przykład 12:00**: η = 3.57 / 4.14 × 100% = **86.2%**
- **Przykład 10:00**: η = 3.23 / 3.74 × 100% = **86.4%**
- **WNIOSEK**: Sprawność stabilna ~86%, typowa dla inwertera PV

**P3: Identyfikacja alarmów**
- W pliku występują co najmniej dwa wiersze z `alarm=TAK` powiązane z przegrzaniem modułu:
  - 11:30 — `temp_modulu ≈ 61°C` → przekroczenie progu temperatury modułu
  - 12:15 — `temp_modulu ≈ 62°C` → przekroczenie progu temperatury modułu
- Rekomendacja: obniżyć obciążenie/przegląd chłodzenia, sprawdzić zacienienie i parametry MPPT

---

### Poziom R

**R1: Analiza trendu dziennego**
- **Trend**: Krzywa gaussa skorygowana (szybki wzrost, plateau, szybki spadek)
- **Czas szczytu**: 12:00-13:00 (zachmurzenie symulowane przez lekki spadek)
- **Współczynnik CF (Capacity Factor)**: CF = Energia_rzeczywista / Energia_maksymalna
  - Energia: suma P(t)×∆t ≈ 15 kWh (całodobowa)
  - CF ≈ **62%** (typowe dla PV w klimacie umiarkowanym)

**R2: Raport z działaniami**
- **Działania zalecane**:
  1. Monitoring sprawności η (cel: > 85%)
  2. Inspekcja wizualna modułów (zabrudzenie, pęknięcia)
  3. Kalibracja pyranometru co 12 miesięcy

---

### Poziom W

**W1: Diagnoza przerwy w produkcji** (przykład)
- **Hipoteza 1**: Zacienienie przez sąsiednią zabudowę/drzewa
- **Hipoteza 2**: Awaria inwertera (brak sygnału AC)
- **Hipoteza 3**: Zabrudzenie modułów (soiling loss ~5%)

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

**Wersja**: 1.0 | **Data**: 2025-10-31
