---
title: "Klucz odpowiedzi — Zadanie 4: Monitoring pompy ciepła"
section: "E-klucze"
version: "1.1"
---

# Klucz — Zadanie 4: Monitoring pompy ciepła (12 pkt)

## Dane (CSV)
- Plik: `/cwiczenia/dane/zad04_pompa-ciepla.csv`, interwał 1h, **48 wierszy** (2025-05-10 00:00 – 2025-05-11 23:00).
- Kolumny: `czas, temp_zasilania[C], temp_powrotu[C], temp_zewnetrzna[C], przeplyw[l/min], cisnienie_wysokie[bar], cisnienie_niskie[bar], moc_sprezarki[kW], moc_grzewcza[kW], COP, alarm, przyczyna, severity, status_hp`.
- Progi dydaktyczne: `COP_warn = 1.5`, `COP_alarm = 1.0`; `cisnienie_wysokie > 26 bar` (WARN), `cisnienie_niskie < 1.5 bar` (WARN/ALARM); defrost = `przyczyna=ODSRZANIANIE`.

### Podsumowanie dobowych zakresów (przykład)
- **Dzień 1 (2025-05-10)**: COP ~2.7–4.2, avg ≈ **3.5**; temp_zewn 10→22°C; brak alarmów. Ciśnienia 20.5–24.0 bar / 3.9–4.4 bar.
- **Dzień 2 (2025-05-11)**: COP spada 2.6→0.9, avg ≈ **1.6**; temp_zewn 10→-12°C; alarmy `ODSRZANIANIE` (06:00) i `COP_NISKI` od 12:00; status LIMIT/STOP przy niskim COP. Ciśnienia hi rosną do 25.5 bar, low spada do 2.8 bar (bez alarmu ciśnień).

## Odpowiedzi P/R/W
### P (Wykresy, średnie) – 4 pkt
- Wykres `COP(t)` z markerami `alarm=TAK` (defrost 06:00, COP_NISKI od 12:00).
- Wykresy temperatur: `temp_zewnetrzna` spada do -12°C, `temp_zasilania/powrotu` stabilne 29–52 / 24–46.
- Wykresy ciśnień hi/lo: hi 20.0–25.5 bar, lo 2.8–4.4 bar; hi pozostaje poniżej progu 26 bar, lo pozostaje powyżej progu 1.5 bar.
- Średnie dobowe COP: D1 ≈ 3.5, D2 ≈ 1.6. Średnia dobowej mocy grzewczej: D1 ~8.4 kW, D2 ~3.5 kW (tendencja spadkowa z mrozem).

### R (Analiza incydentów) – 4 pkt
- `ODSRZANIANIE` 2025-05-11 06:00 (severity WARN, status DEFROST) przy `temp_zewnetrzna=4°C`, COP=1.9.
- `COP_NISKI` 2025-05-11 12:00–23:00 (severity WARN→ALARM, status LIMIT→STOP), COP spada 1.6→0.9 wraz ze spadkiem T_zewn -2→-12°C.
- Brak alarmów ciśnieniowych (hi poniżej 26 bar, lo powyżej 2.8 bar), ale trend hi rośnie przy mrozie (25.5 bar).
- Wniosek: degradacja COP głównie od niskiej T_zewn i częstych odszraniania/ograniczeń, nie od ciśnień.

### W (Plan reakcji) – 4 pkt
- Operacyjne: aktywować źródło rezerwowe przy `COP` poniżej 1.5 lub `status_hp=STOP`; skrócić cykle/siłę odszraniania; poprawić przepływ powietrza (odlodzenie parownika).
- Progi: `COP_min = 1.5 (WARN)`, `COP_alarm = 1.0`; `cisnienie_wysokie_warn = 26 bar`; `cisnienie_niskie_warn = 1.5 bar`; cut-off przy T_zewn poniżej -10°C.
- Monitoring: loguj status DEFROST/LIMIT/STOP, porównuj COP wyliczony vs. z kolumny w celu walidacji.

## Tabela alarmów (z pliku)
| Okres | alarm | przyczyna | severity | status_hp | COP | Uwagi |
|---|---|---|---|---|---|---|
| 2025-05-11 06:00 | TAK | ODSRZANIANIE | WARN | DEFROST | 1.90 | krótki defrost |
| 2025-05-11 12:00–17:00 | TAK | COP_NISKI | WARN/ALARM | LIMIT | 1.60→1.10 | spadek T_zewn -2→-7°C |
| 2025-05-11 18:00–23:00 | TAK | COP_NISKI | ALARM | STOP | 1.00→0.90 | T_zewn -8→-12°C |

## Słowniczek (skrót)
- COP = Q_out / P_in; defrost = cykl odszraniania parownika; LIMIT/STOP = ograniczenie/wyłączenie sprężarki.
- Dydaktyczne progi: COP_warn 1.5, COP_alarm 1.0; ciśnienie_hi_warn 26 bar; ciśnienie_lo_warn 1.5 bar.
