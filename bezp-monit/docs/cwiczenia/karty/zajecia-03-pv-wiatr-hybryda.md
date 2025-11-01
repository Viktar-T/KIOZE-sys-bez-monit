---
title: "Zajęcia 03 — Hybryda PV + Wiatr: monitoring i bilans"
course: "Systemy bezpieczeństwa i monitorowania instalacji OZE"
version: "1.0"
section: "B-karty"
duration_min: 90
level: "Średnia"
tags: ["pv","wiatr","hybryda","bilans","bezpieczenstwo"]
links:
  data:
    - "/cwiczenia/dane/zaj03_pv-wiatr-hybryda.csv"
  key:
    - "/docs/cwiczenia/klucze/zaj03_klucz"
---

# Zajęcia 03 — Hybryda PV + Wiatr

## Cele
- Porównać profile mocy PV i wiatru
- Obliczyć bilans: P_sum = P_PV + P_Wiatr
- Zidentyfikować nadprędkość turbiny i progi bezpieczeństwa

## Czas: 90 min (P/R/W: 30/30/30)

## Urządzenia i czujniki
- PV: jak w Zaj. 02; Wiatr: prędkość [m/s], kierunek [deg], RPM, status hamulca

## Materiały
- [Dane CSV](/cwiczenia/dane/zaj03_pv-wiatr-hybryda.csv)
- [Klucz odpowiedzi](/docs/cwiczenia/klucze/zaj03_klucz)

## Zagrożenia i środki
| Ryzyko | P×S | Środki |
|---|---|---|
| Nadprędkość turbiny | ŚR×B.WYS | Hamulec, strefy bezpieczeństwa, blokada dostępu |

## Instrukcja (skrót)
1. Utwórz wykresy P_PV(t), P_Wiatr(t), P_sum(t).
2. Oblicz udział źródeł w P_sum.
3. Oceń interwały nadprędkości (m/s, RPM) i działania BHP.

## Zadania P/R/W
- P: Wykresy i P_sum.
- R: Wskaźnik pokrycia zapotrzebowania, komentarz.
- W: Polityka progów nadprędkości i procedura reakcji.

## Kontrola zrozumienia
5×ABC + 2 otwarte (próg nadprędkości, hamowanie, bilans).

## Kryteria zaliczenia (skrót)
Wykresy (3), Bilans (4), Progi i procedura (3).

---
Powrót: [/docs/cwiczenia/plan/01-plan-semestru](/docs/cwiczenia/plan/01-plan-semestru)

