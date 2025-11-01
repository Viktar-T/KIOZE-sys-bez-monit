---
title: "Zajęcia 02 — Stacja ładowania hulajnóg + PV"
course: "Systemy bezpieczeństwa i monitorowania instalacji OZE"
version: "1.0"
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

## Cele (taksonomia Blooma)
- Zrozumieć parametry PV: nasłonecznienie, napięcie/prąd DC, moc AC/DC
- Obliczyć sprawność inwertera η = P_AC / (U_DC×I_DC×η_strat)
- Zidentyfikować przerwy w pracy i możliwe przyczyny
- Przełożyć obserwacje na wnioski BHP (przegrzanie, DC arc)

## Czas: 90 min (P/R/W: 30/30/30)

## Urządzenia i czujniki
- PV: pyranometr [W/m2], napięcie DC [V], prąd DC [A], temp. modułu [°C]
- Inwerter: moc AC [kW], status, alarmy
- Stacja: status gniazd, licznik energii

## Materiały
- [Dane CSV](/cwiczenia/dane/zaj02_pv-stacja-hulajnog.csv)
- [Klucz odpowiedzi](/docs/cwiczenia/klucze/zaj02_klucz)
- [Checklista BHP](/docs/cwiczenia/szablony/checklista-bhp)

## Zagrożenia i środki
| Ryzyko | P×S | Środki |
|---|---|---|
| Napięcie DC > 60 V | ŚR×WYS | Rękawice elektroizolacyjne, LOTO, praca bez napięcia |
| Przegrzanie modułów | NIS×ŚR | Monitoring temp., wentylacja, zacienienie kontrolowane |

## Wprowadzenie (5–10 min)
Analiza dobowej krzywej mocy PV i sprawności inwertera. Zależność P_AC od nasłonecznienia i temperatury modułu.

## Instrukcja krok po kroku
1. Otwórz plik CSV w arkuszu; separator „;”.
2. Utwórz wykresy P_DC(t) i P_AC(t).
3. Policz η_inwertera = P_AC / (U_DC×I_DC).
4. Zaznacz punkty z `alarm=TAK` i opisz kontekst.
5. Porównaj temp. modułu z mocą — wskaż wpływ przegrzania.
6. Zapisz hipotezy przyczyn spadków mocy (zachmurzenie, MPPT, zacienienie).

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
- η stabilna 80–90%; spadki mocy zgodne z nasłonecznieniem i temp.

## Słowniczek
MPPT, PR, CF, LOTO, DC arc

---
Powrót: [/docs/cwiczenia/plan/01-plan-semestru](/docs/cwiczenia/plan/01-plan-semestru)

