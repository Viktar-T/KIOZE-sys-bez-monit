---
title: "Zadanie 5 — BESS: SOC/SOH, cykle i bezpieczeństwo"
course: "Systemy bezpieczeństwa i monitorowania instalacji OZE"
version: "1.1"
section: "B-karty"
duration_min: 90
level: "Średnia"
tags: ["bess","soc","soh","bezpieczenstwo"]
links:
  data:
    - "/cwiczenia/dane/zad05_bess.csv"
  key:
    - "/docs/cwiczenia/klucze/zad05_klucz"
---

# Zadanie 5 — BESS: SOC/SOH, cykle i bezpieczeństwo

## Szybki start (5 min)
1. Otwórz: [Dane CSV](/cwiczenia/dane/zad05_bess.csv)
2. Wykresy (1h interwał):
   - `SOC[%](t)` + markery `alarm=TAK`
   - `SOH[%](t)` oraz `liczba_cykli(t)`
   - `temp[C](t)` i `deltaU(t) = napiecie_cel_max - napiecie_cel_min`
3. Zidentyfikuj cykle ładowania/rozładowania i epizody alarmowe.
4. Oddaj sprawozdanie + arkusz wg sekcji “Co oddać”.

## Cele
- Analiza `SOC(t)` i `SOH(t)` oraz liczby cykli.
- Identyfikacja cykli ładowania/rozładowania i ich wpływu na temperaturę.
- Wykrywanie incydentów: niski SOC, nadtemperatura, nierównowaga cel.
- Przygotowanie planu reakcji BHP/operacyjnej na zdarzenia baterii.

## Czas: 90 min (P/R/W: 30/30/30)

## Materiały
- [Dane CSV](/cwiczenia/dane/zad05_bess.csv)
- [Dokumentacja urządzenia](/docs/cwiczenia/karty/urzadzenia/bess)
- [Klucz odpowiedzi](/docs/cwiczenia/klucze/zad05_klucz)

## Założenia do obliczeń
- Interwał: **1 h**.
- `deltaU[V] = napiecie_cel_max[V] - napiecie_cel_min[V]`.
- Progi dydaktyczne (MDX-safe):
  - SOC_warn: poniżej 15%, SOC_alarm: 10%
  - temp_warn: 35°C, temp_alarm: 45°C
  - deltaU_warn: 0.10 V, deltaU_alarm: 0.20 V
- Przy `alarm=TAK` analizuj `przyczyna`, `severity`, `status_bess`.

## Słownik kolumn
| Kolumna | Znaczenie | Jednostka | Typowy zakres | Uwagi |
|---|---|---|---|---|
| `czas` | znacznik czasu | - | 2 dni; 1 h | `YYYY-MM-DD HH:MM` |
| `SOC[%]` | stan naładowania | % | 10–95 | cykle ładowania/rozładowania |
| `SOH[%]` | stan zdrowia baterii | % | 95–98 | trend spadkowy w czasie |
| `napiecie_pakietu[V]` | napięcie pakietu | V | 339.8–401.3 | koreluje z SOC |
| `prad[A]` | prąd ładowania/rozładowania | A | -22.0 – 25.0 | dodatni = ładowanie |
| `temp[C]` | temperatura ogniw/pakietu | °C | 18–52 | wzrost przy obciążeniu; anomalia powyżej 45 |
| `napiecie_cel_min[V]` | min napięcie ogniwa | V | 3.50–4.16 | do deltaU |
| `napiecie_cel_max[V]` | max napięcie ogniwa | V | 3.58–4.30 | do deltaU |
| `liczba_cykli` | licznik cykli | - | 452–499 | rośnie w czasie |
| `alarm` | flaga incydentu | TAK/NIE | - | wymaga komentarza |
| `przyczyna` | etykieta incydentu | - | OK / NISKI_SOC / NADTEMP_NIEROWNOSC | |
| `severity` | istotność | - | OK/INFO/WARN/ALARM | |
| `status_bess` | stan pracy | - | CHARGE/DISCHARGE/LIMIT | |

## Zagrożenia i środki
| Ryzyko | P×S | Środki |
|---|---|---|
| Nadtemperatura ogniw | ŚR×B.WYS | Natychmiastowe ograniczenie prądu, odcięcie ładowania, monitoring termiczny |
| Nierównowaga cel (duża deltaU) | ŚR×WYS | Balancing BMS, redukcja obciążenia, diagnostyka modułów |
| Niski SOC | NIS×ŚR | Ograniczenie rozładowania, przejście na tryb awaryjny |

## Instrukcja krok po kroku
1. Wczytaj CSV.
2. Oblicz `deltaU = napiecie_cel_max - napiecie_cel_min`.
3. Narysuj wykresy: `SOC(t)`, `SOH(t)`, `temp(t)`, `deltaU(t)` i oznacz `alarm=TAK`.
4. Wskaż cykle:
   - ładowanie: SOC rośnie, `prad[A]` dodatni
   - rozładowanie: SOC spada, `prad[A]` ujemny
5. Zidentyfikuj i opisz incydenty: niski SOC, nadtemperatura, nierównowaga cel.
6. Zaproponuj progi i działania (BMS balancing, ograniczenie prądu, odcięcie, ewakuacja).

## Co oddać (format)
- Sprawozdanie (PDF): wykresy + wnioski + tabela incydentów + plan reakcji.
- Arkusz (XLSX/ODS): dane + obliczenia `deltaU` + średnie/wnioski.
- Nazewnictwo: `zad05_<nazwisko>_<imie>.pdf` oraz `zad05_<nazwisko>_<imie>.xlsx`.

## Zadania P/R/W
- P: Wykres SOC(t), identyfikacja cykli (czas start/stop) + wykres temp(t).
- R: Trend SOH (względem czasu i liczby cykli) + interpretacja degradacji.
- W: Scenariusz reakcji na nadtemperaturę i nierównowagę cel (procedura BHP + działania BMS).

## Kryteria zaliczenia (12 pkt)
| Kryterium | Punkty | Warunek |
|---|---|---|
| Wykresy SOC/SOH/temp/deltaU | 4 | czytelne osie, oznaczone alarmy |
| Analiza cykli i degradacji | 4 | poprawna identyfikacja cykli i trendu SOH |
| Plan reakcji i progi | 4 | progi + działania adekwatne do przyczyn i severity |

---
Powrót: [/docs/cwiczenia/plan/01-plan-semestru](/docs/cwiczenia/plan/01-plan-semestru)
