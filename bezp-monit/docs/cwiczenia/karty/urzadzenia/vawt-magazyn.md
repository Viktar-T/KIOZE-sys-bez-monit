---
title: "Urządzenie — Turbina wiatrowa VAWT z magazynem energii"
course: "Systemy bezpieczeństwa i monitorowania instalacji OZE"
version: "1.0"
section: "B-karty"
tags: ["urzadzenie","vawt","wiatr","magazyn-energii","bess"]
---

# Turbina wiatrowa VAWT z magazynem energii — dokumentacja

## Parametry techniczne

### Aerodynamika / wirnik
| Parametr | Wartość | Uwagi |
|---|---|---|
| Moc znamionowa turbiny | 10 kW | przy prędkości znamionowej |
| Średnica wirnika (D) | 3.0 m | oś pionowa |
| Wysokość wirnika (H) | 6.0 m | - |
| Powierzchnia omiatana (A ≈ D·H) | 18 m² | - |
| Prędkość startu (cut-in) | 2.5 m/s | minimalna prędkość pracy |
| Prędkość znamionowa | 11 m/s | pełna moc |
| Prędkość odcięcia (cut-out) | 25 m/s | automatyczne hamowanie |
| Zakres obrotów | 30–160 rpm | - |
| Maks. współczynnik mocy (Cₚ,max) | ~0.30–0.35 | typowo dla VAWT |

### Generator i elektronika mocy
| Parametr | Wartość | Uwagi |
|---|---|---|
| Generator | synchroniczny PMSG, 3-fazowy | magnesy trwałe |
| Sterowanie | MPPT (utrzymanie optymalnego TSR) | - |
| Wyjście DC (szyna) | 300–450 V DC | - |
| Falownik AC | 230 V 1-faz / 400 V 3-faz, 50 Hz | zależnie od wersji |
| Sprawność toru przekształtnikowego | do ~95% | - |

### Magazyn energii (storage)
| Parametr | Wartość | Uwagi |
|---|---|---|
| Technologia | LiFePO₄ (LFP) + BMS | bezpieczna chemia |
| Pojemność energii | 20 kWh | - |
| Moc ciągła falownika (rozładowanie) | 10 kW (chwilowo 12–15 kW) | - |
| Sprawność cyklu (round-trip) | ~90–94% | - |
| Tryby pracy | off-grid / on-grid (opcja), UPS/backup (opcja) | - |

### Hałas i bezpieczeństwo
| Parametr | Wartość | Uwagi |
|---|---|---|
| Poziom hałasu | < 45 dB(A) w odległości 10 m | przy 8 m/s |
| Hamowanie | elektryczne (dump-load) + mechaniczne (hamulec tarczowy) | - |
| Prędkość przetrwania (survival) | do 60 m/s | konstrukcyjnie |

### Warunki środowiskowe
| Parametr | Wartość | Uwagi |
|---|---|---|
| Temperatura pracy | −20…+50 °C | - |
| Stopień ochrony szafy/elektroniki | IP54–IP65 | - |
| Odporność korozyjna | powłoki outdoor / opcja „marine" | - |

### Wymiary i montaż
| Parametr | Wartość | Uwagi |
|---|---|---|
| Wysokość całkowita zespołu | ~7–8 m | - |
| Masa całkowita | ~900–1400 kg | z magazynem |
| Fundament | płyta żelbetowa / kotwy | wg projektu |
| Serwis | dostęp boczny do modułów mocy i baterii | - |

### Wyposażenie standardowe
- Turbina + generator PMSG
- Szafa mocy z MPPT, zabezpieczeniami i pomiarem energii
- Magazyn LFP z BMS
- Rejestracja danych (Wi-Fi/Ethernet), podstawowe SCADA (dashboard)

## Mapa sygnałów i czujników
- Prędkość wiatru [m/s] — anemometr
- Kierunek wiatru [°] — wiatrowskaz
- Obroty wirnika [rpm] — tachometr
- Napięcie DC [V], Prąd DC [A] — pomiar na szynie DC
- Moc turbiny [kW], Moc AC [kW] — pomiar mocy
- Temperatura generatora [°C] — czujnik PT100
- SOC [%], SOH [%] — BMS baterii
- Temperatura baterii [°C] — czujnik NTC
- Status turbiny, alarmy — system SCADA

## Interpretacja sygnałów (skrót)
- `moc_turbiny[kW]` rośnie proporcjonalnie do v³ (do prędkości znamionowej)
- `Cₚ` (współczynnik mocy) = P / (0.5 × ρ × A × v³), typowo 0.25–0.35 dla VAWT
- `SOC` oscyluje w cyklach ładowania/rozładowania (30–90% w normalnej pracy)
- `temp_baterii` > 45°C → alarm, ograniczenie ładowania
- `temp_generatora` > 70°C → alarm, możliwe przegrzanie

## Słownik kolumn (CSV)
| Kolumna | Znaczenie | Jednostka | Typowy zakres |
|---|---|---|---|
| `czas` | znacznik czasu pomiaru | - | kilka dni; co 15 min |
| `predkosc_wiatru[m/s]` | prędkość wiatru | m/s | 0–25 |
| `kierunek_wiatru[deg]` | kierunek wiatru | ° | 0–360 |
| `obroty[rpm]` | prędkość obrotowa wirnika | rpm | 0–160 |
| `napiecie_DC[V]` | napięcie szyny DC | V | 300–450 |
| `prad_DC[A]` | prąd DC | A | 0–35 |
| `moc_turbiny[kW]` | moc wyjściowa turbiny | kW | 0–10 |
| `moc_AC[kW]` | moc AC (wyjście falownika) | kW | 0–10 |
| `SOC[%]` | stan naładowania baterii | % | 10–95 |
| `SOH[%]` | stan zdrowia baterii | % | 85–100 |
| `temp_baterii[C]` | temperatura pakietu baterii | °C | 10–45 |
| `temp_generatora[C]` | temperatura generatora PMSG | °C | 20–80 |
| `alarm` | znacznik anomalii | TAK/NIE | - |
| `przyczyna` | etykieta przyczyny/anomalii | - | OK / NADPREDKOSC / ... |
| `severity` | istotność zdarzenia | - | OK / INFO / WARN / ALARM |
| `status_turbiny` | stan pracy turbiny | - | RUNNING / BRAKING / STOPPED / FAULT |
| `energia_AC[kWh]` | energia w interwale | kWh | 0–2.5 |

## Zakresy operacyjne
- Prędkość wiatru: 2.5–25 m/s (praca), 0–60 m/s (przetrwanie)
- Obroty: 30–160 rpm
- U_DC: 300–450 V, I_DC: 0–35 A
- Moc turbiny: 0–10 kW, Moc AC: 0–10 kW
- SOC: 10–95%, SOH: 85–100%
- Temp. baterii: 10–45 °C (optymalna: 20–35°C)
- Temp. generatora: 20–80 °C (alarm > 70°C)

## Progi alarmowe (przykład)
- Prędkość wiatru > 25 m/s → `NADPREDKOSC` (severity: ALARM, status: BRAKING)
- SOC < 15% → `NISKI_SOC` (severity: WARN)
- SOC > 95% → `WYSOKI_SOC` (severity: INFO, ograniczenie ładowania)
- Temp. baterii > 45°C → `PRZEGRZANIE_BATERII` (severity: ALARM)
- Temp. generatora > 70°C → `PRZEGRZANIE_GENERATORA` (severity: WARN)
- Awaria BMS → `AWARIA_BMS` (severity: ALARM, status: FAULT)
- Nierównowaga cel baterii → `NIEROWNOSC_CEL` (severity: WARN)

## Procedury BHP
- LOTO przy pracach na DC i baterii
- PPE: rękawice elektroizolacyjne, okulary, ochronniki słuchu
- Strefa bezpieczeństwa wokół wirnika (min. 5 m)
- Blokada wirnika (hamulec mechaniczny) przed serwisem
- Procedura odcięcia przy nadprędkości wiatru

## Uwaga o danych
Dane w katalogu `/cwiczenia/dane/` są **syntetyczne** (dydaktyczne). Zakresy mocy w plikach CSV mogą być dobrane pod ćwiczenie i nie muszą odpowiadać mocy znamionowej konkretnego modelu.

## Dane
- [Zbiór danych (urządzenie)](/cwiczenia/dane/urz_vawt-magazyn.csv)

