---
title: "Zajęcia 01 — Wprowadzenie i przegląd urządzeń"
description: "Poznanie wszystkich urządzeń laboratoryjnych, zasad BHP i podstaw monitorowania"
course: "Systemy bezpieczeństwa i monitorowania instalacji OZE"
version: "1.0"
section: "B-karty"
duration_min: 90
level: "Podstawowy"
tags: ["wprowadzenie", "urządzenia", "bhp"]
links:
  data:
    - "/cwiczenia/dane/zaj01_wprowadzenie.csv"
  key:
    - "/docs/cwiczenia/klucze/zaj01_klucz"
---

# Zajęcia 01 — Wprowadzenie i przegląd urządzeń

## Cele uczenia

Po zakończeniu zajęć student:

1. **Zna** wszystkie 5 urządzeń laboratoryjnych i ich podstawowe parametry
2. **Rozumie** zasady bezpieczeństwa charakterystyczne dla każdego typu instalacji OZE
3. **Potrafi** odczytać podstawowe dane pomiarowe z formularzy CSV
4. **Identyfikuje** główne zagrożenia bezpieczeństwa dla różnych typów urządzeń
5. **Wypełnia** poprawnie listę kontrolną BHP

## Parametryzacja

- **Czas zajęć**: 90 min
- **Wielkość grupy**: 3–4 osoby
- **Poziom trudności**: Podstawowy

## Urządzenia i czujniki

### 1. Stacja ładowania hulajnóg + Panele PV
**Parametry monitorowane**: nasłonecznienie [W/m²], napięcie/prąd DC [V/A], moc AC/DC [kW], temperatura modułu [°C]

### 2. Instalacja hybrydowa PV + turbina wiatrowa
**Parametry monitorowane**: prędkość/kierunek wiatru [m/s, deg], RPM turbiny, moc sumaryczna [kW]

### 3. Mała biogazownia
**Parametry monitorowane**: temperatura fermentacji [°C], pH, skład gazów CH₄/CO₂/H₂S [%, ppm], ciśnienie [bar]

### 4. Pompa ciepła
**Parametry monitorowane**: temperatury zasilania/powrotu/zewnętrzna [°C], COP, ciśnienia [bar], moc sprężarki [kW]

### 5. Magazyn energii BESS
**Parametry monitorowane**: SOC/SOH [%], napięcie/prąd [V/A], temperatura [°C], liczba cykli

## Materiały

- [Checklista BHP](/docs/cwiczenia/szablony/checklista-bhp)
- [Dane do przeglądu](/cwiczenia/dane/zaj01_wprowadzenie.csv)
- Kalkulator, kartka, długopis

## Zagrożenia i środki bezpieczeństwa

| Urządzenie | Zagrożenie | Prawdopodobieństwo × Skutek | Środek zapobiegawczy |
|---|---|---|---|
| PV/BESS | Porażenie napięciem DC &gt; 60 V | ŚREDNIE × WYSOKIE | Rękawice elektroizolacyjne, procedura LOTO |
| PV | Przegrzanie modułów (temp &gt; 60°C) | NISKIE × ŚREDNIE | Monitoring temperatury, wentylacja |
| Wiatr | Uraz przez elementy wirujące | ŚREDNIE × BARDZO WYSOKIE | Turbina ZATRZYMANA, strefy bezpieczeństwa |
| Biogazownia | Intoksykacja H₂S (&gt; 100 ppm) | ŚREDNIE × BARDZO WYSOKIE | Detektory, respirator, wentylacja wymuszona |
| Biogazownia | Wybuch CH₄ (&gt; 2% w powietrzu) | NISKIE × KATASTROFICZNY | Detektory, system alarmowy, braki zapłonu |
| Pompa ciepła | Uraz ciśnieniowy | NISKIE × WYSOKIE | Kontrola ciśnienia, PPE |
| BESS | Thermal runaway, pożar | NISKIE × KATASTROFICZNY | Monitoring temperatury, procedury ewakuacji |

:::caution 🚨 Krytyczne
Przed rozpoczęciem jakiegokolwiek ćwiczenia **WYMAGANE** jest pełne wypełnienie checklisty BHP i zatwierdzenie przez opiekuna.
:::

---

## Wprowadzenie (10 min)

### Kim jesteśmy i po co tu jesteśmy?

Systemy monitorowania i bezpieczeństwa to kluczowy element każdej instalacji OZE. Podczas tych zajęć poznacie **pięć rzeczywistych urządzeń** dostępnych na katedrze i nauczycie się:

- **Co** mierzymy w każdej instalacji
- **Jak** interpretować dane pomiarowe
- **Kiedy** podejmować działania w razie anomalii
- **Dlaczego** bezpieczeństwo jest priorytetem

### Schemat ogólny systemu monitorowania

```
┌─────────────┐
│ CZUJNIKI    │ → Pomiary temperatury, napięcia, przepływu, gazów...
└─────┬───────┘
      │
      ▼
┌─────────────┐
│ AKWIZYCJA   │ → Próbkowanie, normalizacja, buforowanie
└─────┬───────┘
      │
      ▼
┌─────────────┐
│ KOMUNIKACJA │ → Modbus, MQTT, Ethernet...
└─────┬───────┘
      │
      ▼
┌─────────────┐
│ SKŁADOWANIE │ → InfluxDB, CSV, baza danych
└─────┬───────┘
      │
      ▼
┌─────────────┐
│ WIZUALIZACJA│ → Grafana, arkusze kalkulacyjne, raporty
└─────┬───────┘
      │
      ▼
┌─────────────┐
│ ANALITYKA   │ → Trendy, alarmy, prognozy
└─────────────┘
```

---

## Instrukcja krok po kroku

### Faza 1: Przygotowanie (20 min)

1. **Przeczytaj** checklistę BHP (10 min)
   - Zapoznaj się z wymogami bezpieczeństwa
   - Zidentyfikuj wymagane środki ochrony osobistej (PPE)
   - Zadaj pytania opiekunowi, jeśli masz wątpliwości

2. **Omówcie w grupie** zasady BHP dla każdego urządzenia (5 min)
   - Każdy członek grupy przygotowuje miniprezentację dla jednego urządzenia
   - Wymieńcie najważniejsze zagrożenia i środki

3. **Wypełnijcie** checklistę BHP (5 min)
   - Uzupełnijcie sekcje 1-5 (przygotowanie, PPE, urządzenia)
   - Zweryfikujcie wszystkie krytyczne punkty (⚠️)
   - Podpiszcie i przekażcie opiekunowi do akceptacji

### Faza 2: Przegląd urządzeń (30 min)

4. **Przejdźcie** do stacji PV (5 min)
   - **OBSERWUJCIE**: odczyty rzeczywiste (jeśli urządzenie aktywne) lub obrazy z monitorowania
   - **ZAWSZCZ**: Nosicie okulary ochronne i rękawice
   - **ZANOTUJCIE**: Zakres nasłonecznienia, napięcie DC, spodziewane maksima

5. **Przejdźcie** do instalacji hybrydowej PV+Wiatr (5 min)
   - **OBSERWUJCIE**: Wskaźniki prędkości wiatru, synchronizację źródeł
   - **PAMIĘTAJCIE**: Turbina **MUSI** być zatrzymana i zabezpieczona
   - **ZANOTUJCIE**: Typowe zakresy prędkości wiatru, moc sumaryczna

6. **Przejdźcie** do biogazowni (5 min)
   - **OBSERWUJCIE**: Wskaźniki składu gazów, temperaturę reaktora
   - **PAMIĘTAJCIE**: Wymagany respirator/detektor H₂S
   - **ZANOTUJCIE**: Normalne stężenia CH₄, CO₂, H₂S, progi alarmowe

7. **Przejdźcie** do pompy ciepła (5 min)
   - **OBSERWUJCIE**: Wskaźniki COP, ciśnień, temperatur zasilania/powrotu
   - **ZANOTUJCIE**: Typowe wartości COP, zakres ciśnień

8. **Przejdźcie** do BESS (5 min)
   - **OBSERWUJCIE**: SOC, SOH, temperaturę ogniw
   - **ZANOTUJCIE**: Zakresy SOC (10-95%), temperatura pracy (15-35°C), progi alarmowe

9. **Wróćcie** do sali i **omówcie** w grupie obserwacje (5 min)

### Faza 3: Analiza danych CSV (25 min)

10. **Otwórzcie** plik `zaj01_wprowadzenie.csv` w arkuszu kalkulacyjnym

11. **Przeanalizujcie** strukturę danych (5 min)
    - Jaka jest liczba wierszy?
    - Jakie kolumny są dostępne?
    - Które wartości są w formacie liczbowym, które tekstowym?

12. **Wykonajcie** podstawową analizę statystyczną (10 min)
    - Obliczcie **min**, **max**, **średnią** dla wybranych parametrów:
      - PV: nasłonecznienie
      - WIATR: prędkość wiatru
      - BIOGAZ: temperatura fermentacji
      - BESS: SOC
      - POMPA: COP

13. **Zidentyfikujcie** wiersze z `alarm=TAK` (10 min)
    - Ile ich jest?
    - Dla jakich urządzeń?
    - Jakie wartości parametrów wywołały alarm?
    - **ZANOTUJCIE**: Hipoteza co do przyczyny

### Faza 4: Test wstępny (10 min)

14. **Wypełnijcie** test wstępny (pytania poniżej)
    - Użyjcie kartek papieru lub arkusza
    - Odpowiedzcie na wszystkie pytania
    - **WYNIK NIE WLICZA SIĘ DO OCENY** — służy do diagnostyki

15. **Omówcie** wyniki z opiekunem (5 min)

---

## Zadania P/R/W

### 🟢 Poziom P (PODSTAWOWY) — obowiązkowy

#### Zadanie P1: Tabela parametrów
Utwórzcie tabelę z parametrami dla **3 wybranych urządzeń**:

| Urządzenie | Parametr 1 | Zakres wartości | Parametr 2 | Zakres wartości |
|---|---|---|---|---|
| PV | Nasłonecznienie | _____ - _____ W/m² | Temperatura modułu | _____ - _____ °C |
| ... | ... | ... | ... | ... |

#### Zadanie P2: Identyfikacja alarmów
W pliku `zaj01_wprowadzenie.csv` znajdźcie **wszystkie wiersze z alarmem**. Wypełnijcie tabelę:

| Nr wiersza | Urządzenie | Parametr 1 | Wartość 1 | Przyczyna alarmu (hipoteza) |
|---|---|---|---|---|
| ... | ... | ... | ... | ... |

### 🟡 Poziom R (ROZSZERZONY) — dla chętnych

#### Zadanie R1: Analiza trendów
Dla **jednego urządzenia** z danymi czasowymi wykonajcie:
- Wykres **parametr(t)** — wykres liniowy
- Zidentyfikujcie **trend** (wzrost/spadek/całkowity brak)
- Obliczcie **średnią ruchomą** (okno 3 punktów)
- **WNIOSEK**: Czy urządzenie działa w ramach normy?

#### Zadanie R2: Porównanie bezpieczeństwa
Przygotujcie **ranking ryzyka** dla 5 urządzeń:

| Urządzenie | Główne zagrożenie | Skutek (1-5) | Prawdopodobieństwo (1-5) | Ryzyko = P×S |
|---|---|---|---|---|
| ... | ... | ... | ... | ... |

**SORTOWANIE**: Od najwyższego ryzyka do najniższego

### 🔴 Poziom W (WYZWANIE) — dla ambitnych

#### Zadanie W1: Projekt systemu alarmowego
Dla **wybranego urządzenia** zaprojektujcie **mini system alarmowy**:

1. **Zdefiniujcie 2 progi alarmowe**:
   - Prog **Ostrzeżenie** (średni priorytet)
   - Prog **Krytyczny** (wysoki priorytet)

2. **Uzasadnijcie** wybór progów:
   - Krótka analiza literaturowa lub specyfikacji

3. **Zaplanujcie procedurę reakcji**:
   - Co robić przy ostrzeżeniu?
   - Co robić przy alarmie krytycznym?
   - Kto ma być powiadomiony?

4. **Przedstawcie** plan w formie **schematu blokowego ASCII**

#### Zadanie W2: Analiza integracji systemów
Wyobraźcie sobie, że wszystkie 5 urządzeń jest zintegrowane w **jeden system monitorowania SCADA**. Opiszcie:

- **Jakie** dane łączą się automatycznie?
- **Które** alarmy wymagają integracji między urządzeniami?
- **Jakie** ryzyka niesie brak integracji?

---

## Test wstępny (diagnostyczny)

### Pytania zamknięte (5 pytań, wybierz A, B lub C)

**1. Co oznacza skrót BESS?**
- A) Battery Emergency Stop System
- B) Battery Energy Storage System
- C) Binary Energy Storage System

**2. Jaki jest bezpieczny poziom H₂S w powietrzu dla pracy (PEL - Permissible Exposure Limit)?**
- A) &lt; 10 ppm
- B) &lt; 50 ppm
- C) &lt; 100 ppm

**3. W instalacji PV, napięcie DC powyżej jakiej wartości wymaga szczególnych środków bezpieczeństwa?**
- A) 30 V
- B) 60 V
- C) 120 V

**4. Co oznacza skrót SOC w kontekście BESS?**
- A) State of Charge
- B) System of Control
- C) Safety Operation Code

**5. Jaki zakres COP jest typowy dla pompy ciepła powietrze-woda?**
- A) 0.5-1.5
- B) 2.0-4.5
- C) 5.0-8.0

### Pytania otwarte (2 pytania)

**6. Wymień 3 główne zagrożenia bezpieczeństwa w małej biogazowni:**
_____________________________________
_____________________________________

**7. Opisz w 2-3 zdaniach, co według Ciebie jest celem monitorowania instalacji OZE:**
_____________________________________
_____________________________________

---

## Kontrola zrozumienia

### Pytania zamknięte (ABC)

1. **Który parametr jest kluczowy dla bezpieczeństwa w biogazowni?**
   - A) Temperatura
   - B) Stężenie H₂S
   - C) pH

2. **Co oznacza skrót LOTO?**
   - A) Lock-Out, Tag-Out
   - B) Loss of Time Operation
   - C) Low-Over Temperature Operation

3. **Jaki jest maksymalny próg alarmowy dla temperatury BESS?**
   - A) 30°C
   - B) 35°C
   - C) 40°C

4. **Co jest głównym zagrożeniem w turbinie wiatrowej podczas pracy?**
   - A) Hałas
   - B) Wibracje
   - C) Elementy wirujące

5. **W jaki sposób oznacza się alarm w plikach CSV dla tego kursu?**
   - A) `alarm=1`
   - B) `alarm=TAK`
   - C) `ALARM=TRUE`

### Pytania otwarte

1. **Wymień 2 różnice między monitoringiem PV a BESS pod względem bezpieczeństwa:**
_____________________________________

2. **Jaką rolę pełni test wstępny i dlaczego jego wynik nie wlicza się do oceny?**
_____________________________________

---

## Kryteria zaliczenia

| Kryterium | Punkty | Warunek zaliczenia |
|---|---|---|
| **Formularz BHP** | 2 | Uzupełniony poprawnie, wszystkie krytyczne punkty zaznaczone |
| **Notatki z przeglądu** | 3 | Trafne obserwacje, poprawna terminologia |
| **Identyfikacja alarmów** | 0 | Bonus (nie wliczane do oceny podstawowej) |
| **MINIMUM DO ZALICZENIA** | **3/5** | **60%** |

---

## Rubryka oceniania (0-3 pkt)

| Kryterium | 0 pkt | 1 pkt | 2 pkt | 3 pkt |
|---|---|---|---|---|
| **Dokładność** | Błędy w &gt;50% zadaniach | Błędy w 30-50% | Błędy w &lt;30% | Wykonano bezbłędnie |
| **Bezpieczeństwo** | Ignorowanie procedur BHP | Częściowe przestrzeganie | Dobre przestrzeganie | Wzorowe zachowanie |
| **Interpretacja** | Brak wniosków | Naiwne wnioski | Poprawne wnioski | Trafna analiza |
| **Współpraca** | Pasywność, brak zaangażowania | Minimalne zaangażowanie | Dobre zaangażowanie | Wzorowa współpraca |

---

## Wyniki oczekiwane

### Poziom P — odpowiedzi wzorcowe

**Tabela parametrów** (przykład dla PV):
| Urządzenie | Parametr 1 | Zakres wartości | Parametr 2 | Zakres wartości |
|---|---|---|---|---|
| PV | Nasłonecznienie | 0 - 915 W/m² | Temperatura modułu | 15 - 60°C |

**Identyfikacja alarmów** (z pliku `zaj01_wprowadzenie.csv`):
| Nr wiersza | Urządzenie | Parametr 1 | Wartość 1 | Przyczyna alarmu (hipoteza) |
|---|---|---|---|---|
| 16 | WIATR | Predkosc_wiatru | 18.2 m/s | Nadprędkość turbiny |
| 21 | BESS | SOC | 95% | Pełne naładowanie (próg górny) |

### Poziom R — odpowiedzi wzorcowe

**Średnia ruchoma** (dla PV nasłonecznienie):
- Metodą okna 3 punktów, np: (350+485+720)/3 = 518 W/m²

**Ranking ryzyka** (przykład):
| Urządzenie | Skutek | Prawdopodobieństwo | Ryzyko = P×S |
|---|---|---|---|
| Biogazownia (H₂S) | 5 | 2 | 10 |
| Wiatr (wirujące) | 5 | 2 | 10 |
| PV (DC napięcie) | 4 | 2 | 8 |
| BESS (thermal) | 5 | 1 | 5 |
| Pompa (ciśnienie) | 3 | 1 | 3 |

### Poziom W — odpowiedzi wzorcowe

**Mini system alarmowy** (przykład dla BESS):
- **Ostrzeżenie**: SOC &gt; 90% lub temp &gt; 32°C → Powiadom operatora, wzmożony monitoring
- **Krytyczny**: SOC &gt; 95% lub temp &gt; 35°C → Awar-kta ładowania, procedura LOTO, ewakuacja obszaru

**Integracja SCADA**: Np. alarm niskiej produkcji PV przy wysokim zapotrzebowaniu → automatyka włączenia BESS

---

## Najczęstsze błędy i pułapki

1. **Ignorowanie listy BHP** - Nie rozpoczynajcie pracy bez zatwierdzonej checklisty!
2. **Pomyłka jednostek** - Pilnujcie jednostek: W/m² vs kW, °C vs K, % vs ppm
3. **Nadmierna ufność w systemy** - Zawsze weryfikujcie odczyty na urządzeniu (jeśli dostępne)
4. **Brak dokumentacji** - Zapisujcie obserwacje natychmiast, nie polegać na pamięci
5. **Pominięcie kontekstu** - Dla H₂S: 50 ppm może być bezpieczne w reaktorze, ale **nie w powietrzu sali**

---

## Powiązanie z praktyką przemysłową/SCADA

W rzeczywistych systemach monitorowania OZE dane z czujników są **automatycznie** zbierane, normalizowane i wizualizowane przez systemy klasy SCADA (np. oparte na standardach IEC 61850 lub integrowane przez Modbus/OPC UA). Zaawansowane systemy wykorzystują **wielopoziomową architekturę** (edge-fog-cloud) do agregacji danych z tysięcy urządzeń i **przeprowadzają automatyczną analitykę** (trendy, predykcja, optymalizacja). W tym kursie pracujemy z **uproszczonymi danymi CSV** symulującymi wybrane aspekty systemu SCADA dla celów edukacyjnych.

---

## Słowniczek terminów

- **SOC (State of Charge)** - Stan naładowania baterii, wyrażony w procentach (0-100%)
- **SOH (State of Health)** - Stan zdrowia baterii, wskaźnik degradacji (typowo 85-100%)
- **COP (Coefficient of Performance)** - Współczynnik wydajności pompy ciepła (stosunek mocy grzewczej do mocy elektrycznej)
- **H₂S** - Siarkowodór, gaz toksyczny występujący w biogazie, próg PEL = 10 ppm
- **LOTO (Lock-Out, Tag-Out)** - Procedura bezpieczeństwa: fizyczne zablokowanie i oznakowanie urządzenia przed pracami
- **PPE (Personal Protective Equipment)** - Środki ochrony osobistej: okulary, rękawice, respirator
- **Thermal runaway** - Niekontrolowane przegrzanie baterii prowadzące do eksplozji
- **PEL (Permissible Exposure Limit)** - Dopuszczalna granica ekspozycji na substancję niebezpieczną
- **Edge computing** - Przetwarzanie danych blisko źródła (przy urządzeniu)
- **SCADA (Supervisory Control and Data Acquisition)** - System nadzoru i kontroli w przemyśle

---

**Koniec karty ćwiczenia** | Powrót: [Plan zajęć](/docs/cwiczenia/plan/01-plan-semestru) | Następne: [Zajęcia 02](/docs/cwiczenia/karty/zajecia-02-pv-stacja-hulajnog)
