---
title: "Zadanie 3 — Mała biogazownia: monitoring i bezpieczeństwo"
course: "Systemy bezpieczeństwa i monitorowania instalacji OZE"
version: "1.1"
section: "B-karty"
duration_min: 90
level: "Średnia"
tags: ["biogaz","H2S","bezpieczenstwo","monitoring"]
links:
  data:
    - "/cwiczenia/dane/zad03_biogazownia-mala.csv"
  key:
    - "/docs/cwiczenia/klucze/zad03_klucz"
---

# Zadanie 3 — Mała biogazownia: monitoring i bezpieczeństwo

## Szybki start (5 min)
1. Otwórz: [Dane CSV](/cwiczenia/dane/zad03_biogazownia-mala.csv)
2. Wykresy na jednej osi czasu (1h interwał):  
   - `H2S[ppm](t)` + markery `alarm=TAK`  
   - `CH4[%](t)` i `CO2[%](t)` (druga oś Y)  
   - `temp_reaktora[C](t)` (osobny wykres)
3. Oblicz średnie dobowe: CH₄, CO₂, H₂S, przepływ.  
4. Zaznacz progi: `H2S > 100 ppm` (ALARM), `pH < 6.8` (WARN), `temp_reaktora < 34°C` (WARN).  
5. Oddaj sprawozdanie + arkusz zgodnie z sekcją „Co oddać”.

## Cele
- Analiza składu gazów (CH₄, CO₂, H₂S) i parametrów procesu (T, pH, redox, ciśnienie, przepływ).
- Wykrywanie toksyczności H₂S i obniżenia jakości fermentacji.
- Przygotowanie planu reakcji (wentylacja, ewakuacja, korekta procesu).

## Czas: 90 min (P/R/W: 30/30/30)

## Urządzenia i czujniki
- Analizator gazów: CH₄, CO₂, H₂S
- Czujniki procesu: temperatura reaktora, pH, redox, ciśnienie, przepływ biogazu

## Materiały
- [Dane CSV](/cwiczenia/dane/zad03_biogazownia-mala.csv)
- [Dokumentacja urządzenia](/docs/cwiczenia/karty/urzadzenia/biogazownia-mala)
- [Klucz odpowiedzi](/docs/cwiczenia/klucze/zad03_klucz)
- [Formularz raportu incydentu](/docs/cwiczenia/szablony/formularz-raportu-incydentu)

## Założenia do obliczeń
- Interwał: **1 h** (w pliku).  
- Progi dydaktyczne: `H2S_warn = 30 ppm`, `H2S_alarm = 100 ppm`; `pH_warn = 6.8`; `temp_reaktora_warn = 34°C`.  
- Średnie dobowe licz dla CH₄/CO₂/H₂S/przepływu (osobno dla każdego dnia).  
- Przy `alarm=TAK` analizuj `przyczyna`, `severity`, `status_reaktora`.

## Słownik kolumn (data dictionary)
| Kolumna | Znaczenie | Jednostka | Typowy zakres | Uwagi |
|---|---|---|---|---|
| `czas` | znacznik czasu pomiaru | - | kilka dni; co 1 h | format `YYYY-MM-DD HH:MM` |
| `temp_reaktora[C]` | temperatura reaktora | °C | 33–37 | optymalna ~37°C |
| `pH` | kwasowość treści | - | 6.5–7.2 | poniżej 6.8 → spadek metanogenezy |
| `redox[mV]` | potencjał redoks | mV | -390 – -330 | bardziej ujemny = warunki beztlenowe |
| `cisnienie[bar]` | ciśnienie biogazu | bar | 0.10–0.17 | wzrost przy większej produkcji |
| `przeplyw_biogazu[l/min]` | przepływ gazu | l/min | 24–43 | koreluje z CH₄% |
| `CH4[%]` | udział metanu | % | 52–64 | kluczowy dla wartości opałowej |
| `CO2[%]` | udział CO₂ | % | 33–41 | odwrotnie do CH₄ |
| `H2S[ppm]` | siarkowodór | ppm | 18–145 | >100 ppm → ALARM (toksyczność, korozja) |
| `alarm` | znacznik anomalii | TAK/NIE | - | wymaga komentarza |
| `przyczyna` | etykieta przyczyny/anomalii | - | OK / H2S_WYSOKIE / TEMP_NISKA / PH_NISKIE / ... |
| `severity` | istotność | - | OK/INFO/WARN/ALARM | priorytetyzacja |
| `status_reaktora` | stan pracy | - | STABLE/WARN/ALARM/VENT | powiąż z `przyczyna` |

## Zagrożenia i środki
| Ryzyko | P×S | Środki |
|---|---|---|
| H₂S > 100 ppm | ŚR×B.WYS | Detektor, respirator, wentylacja, zrzut gazu |
| Metan (wybuch) | NIS×KAT | Zakaz źródeł zapłonu, monitoring stężenia |
| Spadek temp. reaktora | ŚR×ŚR | Ogrzewanie, recyrkulacja, izolacja |

## Wprowadzenie (5–10 min)
Analiza składu biogazu i parametrów procesu. Wykrywanie toksyczności H₂S i spadków jakości fermentacji (pH, redox, T).

## Instrukcja krok po kroku
1. Otwórz plik CSV w arkuszu.
2. Wykresy: `H2S[ppm](t)` (oznacz `alarm=TAK`), `CH4[%](t)`/`CO2[%](t)`, `temp_reaktora[C](t)`.
3. Oblicz średnie dobowe dla CH₄, CO₂, H₂S, przepływu (osobno dla każdego dnia).
4. Wskaż punkty, gdzie `H2S > 100` (ALARM) oraz `pH < 6,8` lub `temp_reaktora < 34°C` (WARN).
5. Dla `alarm=TAK` odczytaj `przyczyna`, `severity`, `status_reaktora` i opisz kontekst na wykresach.
6. Zaproponuj działania: wentylacja, korekta pH/temp., ewakuacja przy wysokim H₂S.

## Co oddać (format)
- Sprawozdanie (PDF): opis instalacji + wykresy + progi + plan reakcji.
- Arkusz (XLSX/ODS): dane + średnie dobowe + oznaczone alarmy.
- Tabela alarmów: czas, `przyczyna`, `severity`, `status_reaktora`, opis na wykresach, reakcja.
- Nazewnictwo plików: `zad03_<nazwisko>_<imie>.pdf` oraz `zad03_<nazwisko>_<imie>.xlsx`

## Szablon sprawozdania (proponowany układ)
1. **Cel ćwiczenia** (2–4 zdania)
2. **Opis instalacji i sygnałów** (co mierzymy i po co)
3. **Dane**
4. **Wykresy**: `H2S(t)`, `CH4/CO2(t)`, `temp_reaktora(t)`
5. **Średnie dobowe**: tabela CH₄/CO₂/H₂S/przepływ
6. **Anomalie**: `alarm=TAK` + przyczyna + działania
7. **Wnioski BHP / plan reakcji**

## Zadania P/R/W
- P: Wykres H₂S(t), oznaczenie alarmów, średnia dobowa H₂S.
- R: Progi (H₂S, pH, temp.), wnioski z trendu CH₄/CO₂ i przepływu.
- W: Plan reakcji na incydent (wentylacja, korekta procesu, ewakuacja).

## Kryteria zaliczenia (12 pkt)
| Kryterium | Punkty | Warunek |
|---|---|---|
| Wykresy H₂S/CH₄/CO₂/T | 4 | Czytelność, oznaczone alarmy |
| Średnie dobowe + progi | 4 | Poprawne obliczenia i interpretacja |
| Plan reakcji | 4 | Działania adekwatne do przyczyn i severity |

## --- 
Powrót: [/docs/cwiczenia/plan/01-plan-semestru](/docs/cwiczenia/plan/01-plan-semestru)
