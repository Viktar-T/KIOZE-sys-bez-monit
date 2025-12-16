---
title: "Zadanie 2 — Turbina wiatrowa VAWT z magazynem energii"
course: "Systemy bezpieczeństwa i monitorowania instalacji OZE"
version: "1.0"
section: "B-karty"
duration_min: 90
level: "Średnia"
tags: ["vawt","wiatr","magazyn-energii","bess","monitoring","bezpieczenstwo"]
links:
  data:
    - "/cwiczenia/dane/zad02_vawt-magazyn.csv"
  key:
    - "/docs/cwiczenia/klucze/zad02_klucz"
---

# Zadanie 2 — Turbina wiatrowa VAWT z magazynem energii

## Szybki start (5 min)
1. Otwórz: [Dane CSV](/cwiczenia/dane/zad02_vawt-magazyn.csv)
2. Przygotuj 3 wykresy na wspólnej osi czasu (30-min interwał):  
   - `moc_AC[kW](t)` + zaznaczone punkty `alarm=TAK`  
   - `predkosc_wiatru[m/s](t)`  
   - `SOC[%](t)` (oddzielny wykres)
3. Zrób wykres zależności `moc_AC[kW]` vs `predkosc_wiatru[m/s]` (krzywa mocy).
4. Policz Cₚ = P / (0.5 × ρ × A × v³) dla min. 5 punktów (filtr: v ≥ 3 m/s) i zaznacz wiersze z `alarm=TAK`.
5. Oddaj sprawozdanie + arkusz zgodnie z sekcją „Co oddać (format)”.

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
- [Dane CSV](/cwiczenia/dane/zad02_vawt-magazyn.csv)
- [Dokumentacja urządzenia](/docs/cwiczenia/karty/urzadzenia/vawt-magazyn)
- [Klucz odpowiedzi](/docs/cwiczenia/klucze/zad02_klucz)

## Założenia do obliczeń
- Interwał próbkowania: **co 30 min** (zgodnie z CSV).  
- Do Cₚ używamy **`moc_AC[kW]`** (wyjście falownika).  
- Konwersja: `P[W] = moc_AC[kW] × 1000`.  
- Stałe: `ρ = 1,225 kg/m³`, `A = 18 m²`.  
- Licz Cₚ tylko dla `predkosc_wiatru >= 3 m/s`, żeby uniknąć dzielenia przez ~0.  
- Oczekiwany zakres dydaktyczny: `0,10–0,45` (wartości powyżej ~0,6 traktuj jako artefakt lub błąd).

## Słownik kolumn (data dictionary)
| Kolumna | Znaczenie | Jednostka | Typowy zakres | Uwagi |
|---|---|---|---|---|
| `czas` | znacznik czasu pomiaru | - | kilka dni; co 30 min | format `YYYY-MM-DD HH:MM` |
| `predkosc_wiatru[m/s]` | prędkość wiatru | m/s | 0–25 | cut-in: 2.5, znamionowa: 11, cut-out: 25 |
| `kierunek_wiatru[deg]` | kierunek wiatru | ° | 0–360 | 0=N, 90=E, 180=S, 270=W |
| `obroty[rpm]` | prędkość obrotowa wirnika | rpm | 0–160 | zakres roboczy: 30–160 rpm |
| `napiecie_DC[V]` | napięcie szyny DC | V | 300–450 | wyjście z generatora PMSG |
| `prad_DC[A]` | prąd DC | A | 0–35 | zależny od mocy i napięcia |
| `moc_turbiny[kW]` | moc wyjściowa turbiny | kW | 0–10 | moc znamionowa: 10 kW |
| `moc_AC[kW]` | moc AC (wyjście falownika) | kW | 0–8 | używaj do Cₚ i krzywej mocy |
| `SOC[%]` | stan naładowania baterii | % | 10–95 | progi bezpieczeństwa |
| `SOH[%]` | stan zdrowia baterii | % | 85–100 | degradacja w czasie |
| `temp_baterii[C]` | temperatura pakietu baterii | °C | 10–45 | optymalna: 20–35°C |
| `temp_generatora[C]` | temperatura generatora PMSG | °C | 20–80 | alarm > 70°C |
| `alarm` | znacznik anomalii | TAK/NIE | - | wymaga komentarza |
| `przyczyna` | etykieta przyczyny/anomalii | - | OK / ... | przy `alarm=TAK` wskazuje typ zdarzenia |
| `severity` | istotność zdarzenia | - | OK/INFO/WARN/ALARM | priorytetyzacja |
| `status_turbiny` | stan pracy turbiny | - | RUNNING/BRAKING/STOPPED/FAULT | powiąż ze spadkami mocy |
| `energia_AC[kWh]` | energia w interwale | kWh | 0–4.0 | energia dla danego kroku czasu |

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
2. Utwórz wykresy na jednej osi czasu: `moc_AC[kW](t)` + markery `alarm=TAK`, oraz `predkosc_wiatru[m/s](t)` (druga oś Y).
3. Utwórz wykres zależności `moc_AC[kW]` vs `predkosc_wiatru[m/s]` (krzywa mocy).
4. Oblicz Cₚ dla min. 5 punktów (v ≥ 3 m/s) według: `Cₚ = (moc_AC[kW]*1000) / (0.5 × 1.225 × 18 × v³)`.
5. Utwórz wykres `SOC[%](t)` — zidentyfikuj cykle ładowania/rozładowania.
6. Policz dla każdego dnia: `suma(energia_AC[kWh])` oraz `ΔSOC = SOC_koniec - SOC_start`; oceń spójność (czy duża produkcja podnosi SOC).
7. Zaznacz punkty z `alarm=TAK`; dla każdego alarmu odczytaj `przyczyna`, `severity`, `status_turbiny` i opisz, co widać na wykresach (v, P, SOC, T_bat, T_gen).
8. Porównaj `temp_baterii[C]` i `temp_generatora[C]` z progami alarmowymi; zapisz hipotezy przyczyn (nadprędkość, niski SOC, przegrzanie, awaria).

## Co oddać (format)
- Sprawozdanie (PDF): opis instalacji + wykresy + obliczenia + wnioski BHP.
- Arkusz (XLSX/ODS): dane + obliczenia Cₚ (min. 5 punktów) + wykresy + bilans dobowy `energia_AC` i `ΔSOC`.
- Tabela anomalii (w sprawozdaniu lub arkuszu): czas, `przyczyna`, `severity`, `status_turbiny`, opis na wykresach, proponowana reakcja.
- Nazewnictwo plików: `zad02_<nazwisko>_<imie>.pdf` oraz `zad02_<nazwisko>_<imie>.xlsx`

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

## Kryteria zaliczenia (10 pkt)
| Kryterium | Punkty | Warunek |
|---|---|---|
| Wykresy P(t), v(t), SOC(t), P(v) | 3 | Czytelność, jednostki, oznaczenie alarmów |
| Obliczenia Cₚ | 4 | ≥5 punktów, poprawny wzór (kW→W, ρ, A), filtr v≥3 m/s, interpretacja zakresu |
| Diagnoza anomalii | 2 | Min. 2 zdarzenia: opis na wykresach + `przyczyna/severity/status` |
| Bilans energii/SOC | 1 | Suma `energia_AC` per dzień + ΔSOC i krótka interpretacja |

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

