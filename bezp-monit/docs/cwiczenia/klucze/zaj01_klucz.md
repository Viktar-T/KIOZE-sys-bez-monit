---
title: "Klucz odpowiedzi — Zajęcia 01"
description: "Wzorcowe odpowiedzi do zadań z Zajęć 01 - Wprowadzenie"
section: "E-klucze"
---

# Klucz odpowiedzi — Zajęcia 01: Wprowadzenie i przegląd urządzeń

## Test wstępny — odpowiedzi

### Pytania zamknięte
1. **B** — Battery Energy Storage System
2. **A** — < 10 ppm (PEL dla H₂S = 10 ppm)
3. **B** — 60 V (próg bezpieczeństwa DC)
4. **A** — State of Charge
5. **B** — 2.0-4.5 (typowo dla pompy powietrze-woda)

### Pytania otwarte
**6.** Główne zagrożenia biogazowni:
- Intoksykacja H₂S (toksyczność, próg PEL = 10 ppm)
- Wybuch metanu (wybuchowość CH₄ w stężeniu > 2% w powietrzu)
- Spadek temperatury fermentacji prowadzący do zatrzymania procesu

**7.** Cel monitorowania instalacji OZE (przykładowa odpowiedź):
"Systemy monitorowania mają za zadanie **śledzenie parametrów** urządzeń w czasie rzeczywistym, **wykrywanie anomalii** i alarmów, oraz **optymalizację** wydajności. W kontekście bezpieczeństwa monitoring pozwala na **wczesne ostrzeżenie** przed niebezpiecznymi sytuacjami (np. przegrzaniem BESS, toksycznością H₂S) i umożliwia **natychmiastową reakcję** operatorów."

---

## Zadania P/R/W — odpowiedzi

### Poziom P

**Zadanie P1: Tabela parametrów** (przykład)
| Urządzenie | Parametr 1 | Zakres wartości | Parametr 2 | Zakres wartości |
|---|---|---|---|---|
| PV | Nasłonecznienie | 0 - 915 W/m² | Temperatura modułu | 15 - 60°C |
| WIATR | Prędkość wiatru | 0 - 20 m/s | RPM | 0 - 168 |
| BIOGAZ | Temperatura | 29 - 40°C | CH₄ | 39 - 65% |
| BESS | SOC | 8 - 95% | Temperatura | 15 - 40°C |
| POMPA | COP | 0.0 - 4.7 | Temperatura zasilania | -2 - 53°C |

**Zadanie P2: Identyfikacja alarmów**
| Nr wiersza | Urządzenie | Parametr 1 | Wartość 1 | Przyczyna alarmu (hipoteza) |
|---|---|---|---|---|
| 16 | WIATR | predkosc_wiatru | 18.2 m/s | Nadprędkość turbiny |
| 21 | BESS | SOC | 95% | Pełne naładowanie (próg górny) |

---

### Poziom R

**Zadanie R1: Analiza trendów** (przykład dla PV nasłonecznienie)

**Wykres**: wykres liniowy nasłonecznienie vs czas pokazuje **trend dobowy** (wzrost 6:00-12:00, plateau 12:00-14:00, spadek 14:00-20:00)

**Średnia ruchoma** (okno 3 punkty): np. (350+485+720)/3 = 518 W/m²

**WNIOSEK**: Urządzenie działa w ramach normy; zaobserwowano naturalny cykl dobowy bez anomalii.

**Zadanie R2: Ranking ryzyka**
| Urządzenie | Główne zagrożenie | Skutek (1-5) | Prawdopodobieństwo (1-5) | Ryzyko = P×S |
|---|---|---|---|---|
| Biogazownia (H₂S) | Intoksykacja | 5 | 2 | **10** |
| Wiatr (wirujące) | Uraz mechaniczny | 5 | 2 | **10** |
| PV/BESS (DC napięcie) | Porażenie prądem | 4 | 2 | **8** |
| BESS (thermal) | Thermal runaway | 5 | 1 | **5** |
| Pompa (ciśnienie) | Uraz ciśnieniowy | 3 | 1 | **3** |

**USZEREGOWANIE**: Biogazownia = Wiatr (10) > PV/BESS (8) > BESS (5) > Pompa (3)

---

### Poziom W

**Zadanie W1: Projekt systemu alarmowego** (przykład dla BESS)

**Progi alarmowe:**
- **Ostrzeżenie**: SOC > 90% lub temp > 32°C → Powiadom operatora, wzmożony monitoring
- **Krytyczny**: SOC > 95% lub temp > 35°C → Awaryjne przerwanie ładowania, procedura LOTO, ewakuacja obszaru

**Procedura reakcji**:
```
Jeśli alarm OSTRZEŻENIE:
  1. Operator sprawdza odczyty wizualnie
  2. Wzmożony monitoring (co 1 min zamiast 5 min)
  3. Notatka w systemie
  
Jeśli alarm KRYTYCZNY:
  1. Nacisnąć przycisk EMERGENCY STOP
  2. Rozpocząć procedurę LOTO
  3. Ewakuować obszar w promieniu 10 m
  4. Powiadomić służby (112 jeśli temperatura > 40°C)
```

**Zadanie W2: Analiza integracji SCADA** (przykład)

**Automatyczne łączenie danych:**
- PV + Wiatr → Bilans sumaryczny mocy
- Biogazownia + BESS → Automatyczne ładowanie BESS przy nadmiarze mocy
- Pompa + PV → Optymalizacja COP przy szczytach PV

**Integracja alarmów:**
- Alarm niskiej produkcji PV przy wysokim zapotrzebowaniu → Automatyczne włączenie BESS
- Alarm toksyczności H₂S → Automatyka wentylacji, alarm ogólny całego systemu, możliwa ewakuacja

**Ryzyka braku integracji:**
- Opóźnienie reakcji na incydenty wielopunktowe
- Brak optymalizacji systemowej (ryzyko blackout przy braku synchronizacji źródeł)
- Trudność w diagnostyce przyczyn złożonych (np. kaskada awarii PV → BESS → obciążenie sieci)

---

## Kontrola zrozumienia — odpowiedzi

### Pytania zamknięte
1. **B** — Stężenie H₂S (bezpośrednie zagrożenie toksycznością)
2. **A** — Lock-Out, Tag-Out
3. **B** — 35°C
4. **C** — Elementy wirujące
5. **B** — `alarm=TAK`

### Pytania otwarte
**1.** Różnice bezpieczeństwa PV vs BESS:
- **PV**: Ryzyko porażenia prądem DC (60-600 V), uszkodzenia mechaniczne paneli
- **BESS**: Ryzyko thermal runaway i pożaru, wyciek elektrolitu, nierównowaga cel

**2.** Test wstępny nie wlicza się do oceny, ponieważ służy **diagnostyce** poziomu wiedzy studentów na początku kursu, pozwala prowadzącemu dostosować tempo zajęć i nie penalizuje braku przygotowania.

---

## Słowniczek — definicje rozszerzone

- **SOC (State of Charge)**: Stan naładowania baterii, wyrażony w procentach (0-100%). Wartości krytyczne: < 10% (głębokie rozładowanie, degradacja), > 95% (przeładowanie, ryzyko explosion).
- **SOH (State of Health)**: Stan zdrowia baterii, wskaźnik degradacji (typowo 85-100%). SOH < 80% wskazuje na znaczącą degradację wymagającą wymiany.
- **COP (Coefficient of Performance)**: Współczynnik wydajności pompy ciepła = Q_heat / P_elec. Typowo 2-4.5 dla powietrze-woda, > 6 dla grunt-woda.
- **H₂S**: Siarkowodór, gaz toksyczny o charakterystycznym zapachu jaj zepsutych. PEL = 10 ppm, IDLH (Immediately Dangerous) = 100 ppm.
- **LOTO (Lock-Out, Tag-Out)**: Procedura bezpieczeństwa wymagająca **fizycznego zablokowania** urządzenia (lock), **oznakowania** (tag z datą, osobą), i **dokumentacji** przed pracami konserwacyjnymi.
- **PPE (Personal Protective Equipment)**: Środki ochrony osobistej obowiązkowe w laboratorium: okulary, rękawice (elektroizolacyjne dla DC, chemiczne dla gazów), respirator (dla H₂S), obuwie zamknięte.
- **Thermal runaway**: Niekontrolowane przegrzanie baterii prowadzące do reakcji łańcuchowej, eksplozji i pożaru. Możliwe przyczyny: nadmierne ładowanie, wadliwa BMS, uszkodzenie mechaniczne.
- **PEL (Permissible Exposure Limit)**: Dopuszczalna granica ekspozycji na substancję niebezpieczną dla pracownika w czasie 8h/dobę. H₂S PEL = 10 ppm.
- **Edge computing**: Przetwarzanie danych blisko źródła (przy urządzeniu) zamiast w chmurze, obniża opóźnienia i wymagania łączności.
- **SCADA (Supervisory Control and Data Acquisition)**: System nadzoru i kontroli w przemyśle umożliwiający zdalne monitorowanie i sterowanie urządzeniami przez HMI (Human-Machine Interface).

---

**Opracowano**: 2025-10-31  
**Wersja**: 1.0


