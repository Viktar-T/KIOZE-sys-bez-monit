---
title: "Klucz odpowiedzi — Zajęcia 03"
description: "Wzorcowe odpowiedzi - Monitoring hybrydy PV+Wiatr"
section: "E-klucze"
---

# Klucz odpowiedzi — Zajęcia 03: Monitoring hybrydy PV+Wiatr

## Zadania P/R/W

### Poziom P

**P1: Wykresy mocy PV i wiatru**
- Wykres liniowy, dwie serii: `moc_PV[kW]` (pomarańczowy) i `moc_wiatru[kW]` (niebieski)
- **Wiatr dominuje** w nocy/wcześnie rano (PV=0)
- **PV dominuje** w godzinach południowych (12:00-16:00)
- **Komplementarność**: Wiatr uzupełnia PV gdy brakuje słońca

---

### Poziom R

**R1: Bilans energetyczny P_sum = P_PV + P_wiatr**

| Czas | P_PV | P_wiatr | P_sum | %PV | %Wiatr |
|---|---|---|---|---|---|
| 06:00 | 0.00 | 1.20 | 1.20 | 0% | 100% |
| 09:00 | 2.45 | 25.3 | 27.75 | 9% | 91% |
| 12:00 | 3.44 | 39.8 | 43.24 | 8% | 92% |
| 16:00 | 0.00 | 11.8 | 11.8 | 0% | 100% |

**Analiza uzupełniania**:
- **PV**: Dostarcza energię w godzinach 08:00-18:00 (szczyt 12:00)
- **Wiatr**: Dostarcza energię w godzinach 06:00-20:00 (szczyt 12:00)
- **Uzupełnianie**: Turbulencje wiatrowe kompensują braki PV (noce, zachmurzenie)

---

### Poziom W

**W1: Optymalizacja progu nadprędkości**

**Alarm występuje** w wierszu 10:30 (RPM=128, próg=120)

**Analiza**:
- **Próg obecny**: 120 RPM
- **RPM w alarmie**: 128 (przekroczenie 6.7%)
- **Optymalizacja**: Proponuję **125 RPM** (kompromis między bezpieczeństwem a stratami energii)

**Uzasadnienie**:
- RPM 120-125: Minimalny wzrost ryzyka, ~5% strata energii
- RPM &gt; 125: Znaczne ryzyko uszkodzenia układu, nieopłacalne

**Plan reakcji**:
1. **Ostrzeżenie** (RPM &gt; 118): Zwiększyć monitoring
2. **Alarm** (RPM &gt; 125): Awaryjne hamowanie, kontrola hamulca mechanicznego

---

## Słowniczek

- **CF wind** — Capacity Factor dla wiatru (typowo 20-40%, wyższy niż PV)
- **Cut-out speed** — Prędkość odcięcia turbiny (&gt;25 m/s)
- **Yaw control** — Sterowanie kierunkiem turbiny pod wiatr
- **Power curve** — Krzywa mocy turbiny (stała przy v &gt; 11 m/s)
- **Complementarity** — Komplementarność źródeł (niskie korelacje)

---

**Wersja**: 1.0
