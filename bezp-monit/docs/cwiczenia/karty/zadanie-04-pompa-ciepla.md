---
title: "Zadanie 4 — Pompa ciepła: monitoring i bezpieczeństwo"
course: "Systemy bezpieczeństwa i monitorowania instalacji OZE"
version: "1.1"
section: "B-karty"
duration_min: 90
level: "Średnia"
tags: ["pompa-ciepla","COP","bezpieczenstwo"]
links:
  data:
    - "/cwiczenia/dane/zad04_pompa-ciepla.csv"
  key:
    - "/docs/cwiczenia/klucze/zad04_klucz"
---

# Zadanie 4 — Pompa ciepła: monitoring i bezpieczeństwo

## Szybki start (5 min)
1. Otwórz: [Dane CSV](/cwiczenia/dane/zad04_pompa-ciepla.csv)
2. Wykresy (1h interwał):  
   - `COP(t)` (linia), zaznacz `alarm=TAK`  
   - `temp_zewnetrzna[C](t)` oraz `temp_zasilania/powrotu[C](t)`  
   - `cisnienie_wysokie[bar]` i `cisnienie_niskie[bar]` (druga oś Y)
3. Oblicz średnie dobowe COP i moc grzewczą.  
4. Zaznacz epizody `ODSRZANIANIE` oraz `COP_NISKI`.  
5. Oddaj sprawozdanie + arkusz wg sekcji “Co oddać”.

## Cele
- Obliczyć COP i zależność COP(T_zewn).
- Rozpoznać epizody odszraniania i wpływ na COP oraz ciśnienia.
- Przygotować progi alarmowe i reakcje operacyjne.

## Czas: 90 min (P/R/W: 30/30/30)

## Materiały
- [Dane CSV](/cwiczenia/dane/zad04_pompa-ciepla.csv)
- [Dokumentacja urządzenia](/docs/cwiczenia/karty/urzadzenia/pompa-ciepla)
- [Klucz odpowiedzi](/docs/cwiczenia/klucze/zad04_klucz)

## Założenia do obliczeń
- Interwał: **1 h**.  
- COP = `moc_grzewcza[kW] / moc_sprezarki[kW]`.  
- Progi dydaktyczne: `COP_warn = 1.5`, `COP_alarm = 1.0`; `cisnienie_wysokie > 26 bar` (WARN), `cisnienie_niskie < 1.5 bar` (WARN/ALARM); status `DEFROST` w trakcie odszraniania.
- Średnie dobowe licz dla COP i moc_grzewcza.

## Słownik kolumn
| Kolumna | Znaczenie | Jednostka | Typowy zakres | Uwagi |
|---|---|---|---|---|
| `czas` | znacznik czasu | - | 2 dni; 1 h | `YYYY-MM-DD HH:MM` |
| `temp_zasilania[C]` | temp. wody na zasilaniu | °C | 29–52 | rośnie przy zapotrzebowaniu |
| `temp_powrotu[C]` | temp. wody na powrocie | °C | 24–46 | |
| `temp_zewnetrzna[C]` | temp. powietrza zewn. | °C | -12–22 | wpływa na COP |
| `przeplyw[l/min]` | przepływ w obiegu | l/min | 14–14 | stały obieg grzewczy |
| `cisnienie_wysokie[bar]` | ciśnienie tłoczenia | bar | 20.0–25.5 | >26 → WARN |
| `cisnienie_niskie[bar]` | ciśnienie ssania | bar | 2.8–4.4 | &lt;1.5 → WARN/ALARM |
| `moc_sprezarki[kW]` | moc elektryczna sprężarki | kW | 1.9–2.5 | wejście do COP |
| `moc_grzewcza[kW]` | moc oddawana do wody | kW | 2.16–9.43 | = COP × moc_sprezarki |
| `COP` | współczynnik wydajności | - | 0.9–4.2 | spada przy mrozach/defrost |
| `alarm` | flaga incydentu | TAK/NIE | - | koreluje z `przyczyna` |
| `przyczyna` | etykieta incydentu | - | OK / ODSRZANIANIE / COP_NISKI / CISNIENIE_NISKIE |
| `severity` | istotność | - | OK/INFO/WARN/ALARM | |
| `status_hp` | stan pracy HP | - | NORMAL/DEFROST/LIMIT/STOP | |

## Zagrożenia (skrót)
- Wysokie ciśnienia czynnika; PPE; praca przy odłączonym zasilaniu.
- Praca w mrozie: ryzyko oblodzenia parownika, defrost.

## Instrukcja krok po kroku
1. Wczytaj CSV.  
2. Wyznacz COP = `moc_grzewcza / moc_sprezarki` (sprawdź zgodność z kolumną).  
3. Wykresy: COP(t), temp_zewn/t_zas/t_powr, ciśnienia hi/lo. Oznacz `alarm=TAK`.  
4. Średnie dobowe COP i moc_grzewcza.  
5. Zidentyfikuj epizody `ODSRZANIANIE` (status DEFROST) i `COP_NISKI` (status LIMIT/STOP).  
6. Zaproponuj progi i działania (wentylacja parownika, odszranianie, źródło rezerwowe).

## Co oddać (format)
- Sprawozdanie (PDF): opis instalacji + wykresy + średnie dobowe + incydenty + rekomendacje.
- Arkusz (XLSX/ODS): obliczenia COP, średnie dobowe, oznaczone alarmy.
- Nazewnictwo: `zad04_<nazwisko>_<imie>.pdf` oraz `zad04_<nazwisko>_<imie>.xlsx`.

## Zadania P/R/W
- P: Wykres COP(t), średnie dobowe COP, zestawienie ciśnień.
- R: Analiza zależności COP(T_zewn), identyfikacja odszraniania/defrost.
- W: Progi i działania (COP_min, ciśnienia, cut-off, źródło rezerwowe).

## Kryteria zaliczenia (12 pkt)
| Kryterium | Punkty | Warunek |
|---|---|---|
| Wykresy COP/temperatury/ciśnienia | 4 | Oznaczone alarmy i czytelne podpisy |
| Średnie dobowe i interpretacja COP | 4 | Poprawne obliczenia, trend vs T_zewn |
| Plan reakcji / progi | 4 | COP_min, defrost, ciśnienia, działania operacyjne |

## ---
Powrót: [/docs/cwiczenia/plan/01-plan-semestru](/docs/cwiczenia/plan/01-plan-semestru)
