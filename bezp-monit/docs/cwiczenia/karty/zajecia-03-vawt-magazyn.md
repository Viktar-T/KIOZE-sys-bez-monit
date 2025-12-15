---
title: "Zajęcia 03 — Turbina wiatrowa VAWT z magazynem energii"
course: "Systemy bezpieczeństwa i monitorowania instalacji OZE"
version: "1.0"
section: "B-karty"
duration_min: 90
level: "Średnia"
tags: ["vawt","wiatr","magazyn-energii","bess","monitoring","bezpieczenstwo"]
links:
  data:
    - "/cwiczenia/dane/zaj03_vawt-magazyn.csv"
  key:
    - "/docs/cwiczenia/klucze/zaj03_klucz"
---

# Zajęcia 03 — Turbina wiatrowa VAWT z magazynem energii

## Szybki start (5 min)
1. Otwórz: [Dane CSV](/cwiczenia/dane/zaj03_vawt-magazyn.csv)
2. Otwórz plik CSV w arkuszu lub narzędziu analitycznym.
3. Zrób wykresy: `moc_turbiny[kW](t)` i `predkosc_wiatru[m/s](t)`
4. Policz współczynnik mocy: Cₚ = P / (0.5 × ρ × A × v³) i zaznacz wiersze z `alarm=TAK`
5. Oddaj sprawozdanie + arkusz zgodnie z sekcją „Co oddać (format)"

## Cele
- Zrozumieć parametry turbiny VAWT: prędkość wiatru, obroty, moc wyjściowa
- Obliczyć współczynnik mocy Cₚ i porównać z wartością teoretyczną
- Analizować współpracę turbiny z magazynem energii (SOC, cykle ładowania)
- Zidentyfikować stany alarmowe: nadprędkość, niski SOC, przegrzanie baterii

## Czas: 90 min (P/R/W: 30/30/30)

## Urządzenia i czujniki
- Turbina VAWT 10 kW: anemometr [m/s], tachometr [rpm], moc DC [kW]
- Generator PMSG: napięcie DC [V], prąd DC [A], temperatura [°C]
- Magazyn LiFePO₄ 20 kWh: SOC [%], SOH [%], temperatura [°C], prąd [A]
- Falownik: moc AC [kW], status, alarmy

## Materiały
- [Dane CSV](/cwiczenia/dane/zaj03_vawt-magazyn.csv)
- [Dokumentacja urządzenia](/docs/cwiczenia/karty/urzadzenia/vawt-magazyn)
- [Klucz odpowiedzi](/docs/cwiczenia/klucze/zaj03_klucz)

## Słownik kolumn (data dictionary)
| Kolumna | Znaczenie | Jednostka | Typowy zakres | Uwagi |
|---|---|---|---|---|
| `czas` | znacznik czasu pomiaru | - | kilka dni; 00:00–23:45 (co 15 min) | format `YYYY-MM-DD HH:MM` |
| `predkosc_wiatru[m/s]` | prędkość wiatru | m/s | 0–25 | cut-in: 2.5, znamionowa: 11, cut-out: 25 |
| `kierunek_wiatru[deg]` | kierunek wiatru | ° | 0–360 | 0=N, 90=E, 180=S, 270=W |
| `obroty[rpm]` | prędkość obrotowa wirnika | rpm | 0–160 | zakres roboczy: 30–160 rpm |
| `napiecie_DC[V]` | napięcie szyny DC | V | 300–450 | wyjście z generatora PMSG |
| `prad_DC[A]` | prąd DC | A | 0–35 | zależny od mocy i napięcia |
| `moc_turbiny[kW]` | moc wyjściowa turbiny | kW | 0–10 | moc znamionowa: 10 kW |
| `moc_AC[kW]` | moc AC (wyjście falownika) | kW | 0–10 | do sieci lub odbiorników |
| `SOC[%]` | stan naładowania baterii | % | 10–95 | progi bezpieczeństwa |
| `SOH[%]` | stan zdrowia baterii | % | 85–100 | degradacja w czasie |
| `temp_baterii[C]` | temperatura pakietu baterii | °C | 10–45 | optymalna: 20–35°C |
| `temp_generatora[C]` | temperatura generatora PMSG | °C | 20–80 | alarm > 70°C |
| `alarm` | znacznik anomalii | TAK/NIE | - | wymaga komentarza |
| `przyczyna` | etykieta przyczyny/anomalii | - | OK / ... | przy `alarm=TAK` wskazuje typ zdarzenia |
| `severity` | istotność zdarzenia | - | OK/INFO/WARN/ALARM | priorytetyzacja |
| `status_turbiny` | stan pracy turbiny | - | RUNNING/BRAKING/STOPPED/FAULT | powiąż ze spadkami mocy |
| `energia_AC[kWh]` | energia w interwale | kWh | 0–2.5 | energia dla danego kroku czasu |

## Zagrożenia i środki
| Ryzyko | P×S | Środki |
|---|---|---|
| Nadprędkość wirnika (v > 25 m/s) | ŚR×WYS | Automatyczne hamowanie, monitoring wiatru, procedura odcięcia |
| Napięcie DC > 450 V | ŚR×WYS | Rękawice elektroizolacyjne, LOTO, praca bez napięcia |
| Przegrzanie baterii (T > 45°C) | NIS×WYS | Monitoring temp., wentylacja, odłączenie ładowania |
| Hałas przy wysokich obrotach | NIS×ŚR | Ochronniki słuchu przy pracach serwisowych |
| Ruchome elementy wirnika | ŚR×WYS | Strefa bezpieczeństwa, blokada wirnika przy serwisie |

## Wprowadzenie (5–10 min)
Analiza pracy turbiny VAWT w zmiennych warunkach wiatrowych. Zależność mocy od prędkości wiatru (krzywa mocy). Współpraca z magazynem energii — bilans ładowania/rozładowania.

## Instrukcja krok po kroku
1. Otwórz plik CSV w arkuszu.
2. Utwórz wykres `moc_turbiny[kW](t)` i `predkosc_wiatru[m/s](t)` (dwie osie Y).
3. Oblicz współczynnik mocy Cₚ dla wybranych punktów: Cₚ = P / (0.5 × 1.225 × 18 × v³).
4. Utwórz wykres `SOC[%](t)` — zidentyfikuj cykle ładowania/rozładowania.
5. Zaznacz punkty z `alarm=TAK` i opisz kontekst.
6. Dla `alarm=TAK` odczytaj `przyczyna`, `severity` i `status_turbiny`.
7. Porównaj `temp_baterii[C]` i `temp_generatora[C]` z progami alarmowymi.
8. Zapisz hipotezy przyczyn anomalii (nadprędkość, niski SOC, przegrzanie).

## Co oddać (format)
- Sprawozdanie (PDF): opis instalacji + wykresy + obliczenia + wnioski BHP
- Arkusz (XLSX/ODS): dane + obliczenia Cₚ + wykresy
- Nazewnictwo plików: `zaj03_<nazwisko>_<imie>.pdf` oraz `zaj03_<nazwisko>_<imie>.xlsx`

## Szablon sprawozdania (proponowany układ)
1. **Cel ćwiczenia** (2–4 zdania)
2. **Opis instalacji i sygnałów** (co mierzymy i po co)
3. **Dane**
4. **Wykresy**: `moc_turbiny(t)`, `predkosc_wiatru(t)`, `SOC(t)`
5. **Współczynnik mocy**: tabela z min. 3 punktami czasu + krótka interpretacja
6. **Anomalie**: wiersze z `alarm=TAK` + hipoteza przyczyny + proponowane działania
7. **Wnioski BHP / plan reakcji** (co zrobić i w jakiej kolejności)

## Zadania P/R/W
- P: Wykres P(v) i obliczenia Cₚ dla trzech punktów prędkości wiatru.
- R: Analiza cykli ładowania/rozładowania magazynu, bilans energetyczny.
- W: Diagnoza stanu alarmowego i plan reakcji (procedury, komunikacja).

## Kontrola zrozumienia (5 pytań ABC, 2 otwarte)
1) Co podnosi moc turbiny: A) temperatura, B) prędkość wiatru, C) ciśnienie atmosferyczne?  
2) Kiedy turbina VAWT przechodzi w tryb hamowania? A) v < 2.5 m/s, B) v > 25 m/s, C) SOC > 95%.  
3) Co oznacza Cₚ = 0.30? A) 30% mocy wiatru zamienione na elektryczność, B) 30% sprawności baterii, C) 30% SOC.  
4) TSR (Tip Speed Ratio) służy do: A) chłodzenia, B) optymalizacji MPPT, C) pomiaru SOH.  
5) Co wpływa na żywotność baterii LiFePO₄? A) Głębokość rozładowania, B) Kolor obudowy, C) Kierunek wiatru.  
Otwarte: Wyjaśnij wpływ prędkości wiatru na moc (zależność sześcienna); Podaj 2 przyczyny spadku Cₚ.

## Kryteria zaliczenia
| Kryterium | Punkty | Warunek |
|---|---|---|
| Wykresy P(t), v(t), SOC(t) | 3 | Czytelność, etykiety |
| Obliczenia Cₚ | 4 | Poprawność i interpretacja |
| Diagnoza anomalii | 3 | Spójny plan reakcji |

## Rubryka (0–3)
| Dokładność | Bezpieczeństwo | Interpretacja | Współpraca |
|---|---|---|---|

## Wyniki oczekiwane (skrót)
- Cₚ w zakresie 0.25–0.35; moc rośnie z v³ do prędkości znamionowej
- SOC oscyluje między 30–90% w cyklach dobowych

## Słowniczek
VAWT, MPPT, TSR, Cₚ, SOC, SOH, PMSG, LiFePO₄, BMS, cut-in, cut-out

---
Powrót: [/docs/cwiczenia/plan/01-plan-semestru](/docs/cwiczenia/plan/01-plan-semestru)

