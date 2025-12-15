---
title: "Zajęcia 02 — Stacja ładowania hulajnóg + PV"
course: "Systemy bezpieczeństwa i monitorowania instalacji OZE"
version: "1.2"
section: "B-karty"
duration_min: 90
level: "Średnia"
tags: ["pv","stacja-hulajnog","monitoring","bezpieczenstwo"]
links:
  data:
    - "/cwiczenia/dane/zaj02_pv-stacja-hulajnog.csv"
  key:
    - "/docs/cwiczenia/klucze/zaj02_klucz"
---

# Zajęcia 02 — Stacja ładowania hulajnóg + PV

## Szybki start (5 min)
1. Otwórz: [Dane CSV](/cwiczenia/dane/zaj02_pv-stacja-hulajnog.csv)
2. Otwórz plik CSV w arkuszu lub narzędziu analitycznym.
3. Zrób wykresy: `moc_DC[kW](t)` i `moc_AC[kW](t)`
4. Policz sprawność: η = P_AC / P_DC × 100% i zaznacz wiersze z `alarm=TAK`
5. Oddaj sprawozdanie + arkusz zgodnie z sekcją „Co oddać (format)”

## Cele
- Zrozumieć parametry PV: nasłonecznienie, napięcie/prąd DC, moc AC/DC
- Obliczyć sprawność inwertera η = P_AC / P_DC
- Zidentyfikować przerwy w pracy i możliwe przyczyny
- Zrozumieć wpływ temperatury na moc

## Czas: 90 min (P/R/W: 30/30/30)

## Urządzenia i czujniki
- PV: pyranometr [W/m2], napięcie DC [V], prąd DC [A], temp. modułu [°C]
- Inwerter (SOFAR 2200TL-G3): moc AC [kW], status, alarmy
- Stacja: status gniazd, licznik energii

## Materiały
- [Dane CSV](/cwiczenia/dane/zaj02_pv-stacja-hulajnog.csv)
- [Dokumentacja urządzenia](/docs/cwiczenia/karty/urzadzenia/pv-stacja-hulajnog)
- [Klucz odpowiedzi](/docs/cwiczenia/klucze/zaj02_klucz)

## Słownik kolumn (data dictionary)
| Kolumna | Znaczenie | Jednostka | Typowy zakres | Uwagi |
|---|---|---|---|---|
| `czas` | znacznik czasu pomiaru | - | kilka dni; 08:00–17:30 (co 15 min) | format `YYYY-MM-DD HH:MM` |
| `naslonecznienie[W/m2]` | natężenie promieniowania | W/m2 | 0–900 | wpływa na produkcję |
| `napiecie_DC[V]` | napięcie po stronie DC | V | 250–450 | zależne od MPPT |
| `prad_DC[A]` | prąd po stronie DC | A | 0–10 | rośnie z nasłonecznieniem |
| `moc_DC[kW]` | moc DC (wejście inwertera) | kW | 0–4,0 | zwykle > `moc_AC` |
| `moc_AC[kW]` | moc AC (wyjście inwertera) | kW | 0–3,5 | użyj do energii |
| `temp_modulu[C]` | temperatura modułu | °C | 15–65 | wysoka temp. obniża uzysk |
| `alarm` | znacznik anomalii | TAK/NIE | - | w tym ćwiczeniu traktuj jako „wymaga komentarza” |
| `przyczyna` | etykieta przyczyny/anomalii | - | OK / ... | przy `alarm=TAK` wskazuje typ zdarzenia |
| `severity` | istotność zdarzenia | - | OK/INFO/WARN/ALARM | ułatwia priorytetyzację |
| `status_inwertera` | stan pracy inwertera | - | ON/LIMITING/FAULT/STANDBY | powiąż ze spadkami mocy AC |
| `energia_AC[kWh]` | energia w interwale | kWh | 0–1 | energia dla danego kroku czasu |

## Zagrożenia i środki
| Ryzyko | P×S | Środki |
|---|---|---|
| Napięcie DC > 60 V | ŚR×WYS | Rękawice elektroizolacyjne, LOTO, praca bez napięcia |
| Przegrzanie modułów | NIS×ŚR | Monitoring temp., wentylacja, zacienienie kontrolowane |

## Wprowadzenie (5–10 min)
Analiza dobowej krzywej mocy PV i sprawności inwertera w danych wielodniowych. Zależność P_AC od nasłonecznienia i temperatury modułu.

## Instrukcja krok po kroku
1. Otwórz plik CSV w arkuszu.
2. Utwórz wykresy P_DC(t) i P_AC(t).
3. Policz η_inwertera = P_AC / P_DC.
4. Zaznacz punkty z `alarm=TAK` i opisz kontekst.
5. Dla `alarm=TAK` odczytaj `przyczyna`, `severity` i `status_inwertera` oraz porównaj je z `moc_AC[kW]`.
6. Porównaj `temp_modulu[C]` z mocą — wskaż wpływ przegrzania.
7. Zapisz hipotezy przyczyn spadków mocy (zachmurzenie, MPPT, zacienienie, ograniczenie AC).

## Co oddać (format)
- Sprawozdanie (PDF): opis instalacji + wykresy + obliczenia + wnioski BHP
- Arkusz (XLSX/ODS): dane + obliczenia sprawności + wykresy
- Nazewnictwo plików: `zaj02_<nazwisko>_<imie>.pdf` oraz `zaj02_<nazwisko>_<imie>.xlsx`

## Szablon sprawozdania (proponowany układ)
1. **Cel ćwiczenia** (2–4 zdania)
2. **Opis instalacji i sygnałów** (co mierzymy i po co)
3. **Dane**
4. **Wykresy**: `moc_DC(t)`, `moc_AC(t)`, opcjonalnie `temp_modulu(t)`
5. **Sprawność**: tabela z min. 3 punktami czasu + krótka interpretacja
6. **Anomalie**: wiersze z `alarm=TAK` + hipoteza przyczyny + proponowane działania
7. **Wnioski BHP / plan reakcji** (co zrobić i w jakiej kolejności)

## Zadania P/R/W
- P: Wykres P(t) i obliczenia η dla trzech godzin.
- R: Trend η i identyfikacja interwałów nieciągłości pracy.
- W: Diagnoza przerwy w pracy i plan reakcji (procedury, komunikacja).

## Kontrola zrozumienia (5 pytań ABC, 2 otwarte)
1) Co podnosi P_AC: A) temp. modułu, B) nasłonecznienie, C) spadek napięcia?  
2) Kiedy stosować LOTO? A) Zawsze przy pracy na DC, B) Nigdy, C) Tylko przy AC.  
3) Co oznacza `alarm=TAK`? A) Anomalia, B) Komentarz, C) Brak danych.  
4) MPPT służy do: A) chłodzenia, B) max mocy, C) bezpieczeństwa.  
5) Co wpływa na sprawność inwertera? A) Obciążenie, B) Kolor modułów, C) RPM.  
Otwarte: Wyjaśnij wpływ temp. na moc; Podaj 2 źródła spadku η.

## Kryteria zaliczenia
| Kryterium | Punkty | Warunek |
|---|---|---|
| Wykresy P(t) | 3 | Czytelność, etykiety |
| Obliczenia η | 4 | Poprawność i interpretacja |
| Diagnoza przerwy | 3 | Spójny plan reakcji |

## Rubryka (0–3)
| Dokładność | Bezpieczeństwo | Interpretacja | Współpraca |
|---|---|---|---|

## Wyniki oczekiwane (skrót)
- η stabilna ~85–95%; spadki mocy zgodne z nasłonecznieniem i temp.

## Słowniczek
MPPT, PR, CF, LOTO, DC arc

---
Powrót: [/docs/cwiczenia/plan/01-plan-semestru](/docs/cwiczenia/plan/01-plan-semestru)

