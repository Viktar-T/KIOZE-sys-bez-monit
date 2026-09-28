---
title: "Plan semestru — ćwiczenia laboratoryjne"
description: "Harmonogram 5 spotkań laboratoryjnych z systemów monitorowania i bezpieczeństwa instalacji OZE"
course: "Systemy bezpieczeństwa i monitorowania instalacji OZE"
version: "1.0"
section: "A-plan"
duration_min: 90
tags: ["plan-zajec", "harmonogram", "laboratoria"]
---

# 📅 Plan semestru — ćwiczenia audytoryjne


## 📊 Plan zajęć — tabela zbiorcza

| Nr | Tytuł zajęć | Urządzenie | Główne cele dydaktyczne | Produkty końcowe | Punkty oceny |
|---|---|---|---|---|---|
| **1** | [**Monitoring instalacji PV (Stacja ładowania hulajnóg)**](#zadanie-1-monitoring-instalacji-pv-10-pkt) | PV Stacja | • Analiza krzywej mocy DC/AC<br />• Obliczanie sprawności systemu<br />• Identyfikacja przerwy w pracy | • Wykres P(t)<br />• Obliczenia sprawności<br />• Raport anomalii | 10 pkt |
| **2** | [**Turbina wiatrowa VAWT z magazynem energii**](#zadanie-2-turbina-wiatrowa-vawt-z-magazynem-10-pkt) | VAWT + BESS | • Analiza krzywej mocy turbiny<br />• Obliczanie współczynnika Cₚ<br />• Monitoring magazynu energii | • Wykres P(v)<br />• Obliczenia Cₚ<br />• Analiza SOC | 10 pkt |
| **3** | [**Monitoring biogazowni**](#zadanie-3-monitoring-biogazowni-12-pkt) | Biogazownia | • Analiza składu gazów<br />• Wykrywanie toksyczności H₂S<br />• Kontrola temperatury fermentacji | • Tabela składu gazów<br />• Wykres alarmów H₂S<br />• Protokół BHP | 12 pkt |
| **4** | [**Monitoring pompy ciepła**](#zadanie-4-monitoring-pompy-ciepła-12-pkt) | Pompa ciepła | • Obliczanie COP<br />• Identyfikacja nadmiernego odszraniania<br />• Analiza krzywej grzania | • Wykres COP vs T<br />• Wykres różnicy ciśnień<br />• Identyfikacja optymalnego zakresu | 12 pkt |
| **5** | [**Monitoring magazynu energii BESS**](#zadanie-5-monitoring-magazynu-energii-bess-12-pkt) | BESS | • Analiza cykli ładowania/rozładowania<br />• Monitoring SOH<br />• Identyfikacja nierównowagi cel | • Wykres SOC(t)<br />• Analiza degradacji<br />• Raport bezpieczeństwa | 12 pkt |
| **SUMA** | - | - | - | - | **56 pkt** |

---

## 📝 Szczegółowy opis zajęć

### **Zadanie 1: Monitoring instalacji PV** (10 pkt)
**Długość**: 90 min | **Urządzenie**: Stacja ładowania hulajnóg + panele PV

#### Cele szczegółowe
- Analiza instalacji: [**"PV-Stacja hulajnog"**](https://docs-plat-edu-bad.vercel.app/docs/laboratories-and-equipment/photovoltaic/1.1-pv-hulajnogi-outside-r06)
- Analiza danych wielodniowych (3 dni, 117 wierszy): DC/AC, nasłonecznienie, temperatura modułu
- Obliczenie sprawności inwertera: η = P_AC / P_DC [%]
- Identyfikacja różnych typów anomalii (`alarm=TAK`): OVER_TEMP, ZACIENIENIE, OGRANICZENIE_AC, AWARIA_INWERTERA
- Interpretacja kolumn `przyczyna`, `severity`, `status_inwertera` i propozycja działań

#### Produkty końcowe
- Sprawozdanie (PDF): opis instalacji + wykresy + obliczenia + wnioski BHP
- Arkusz (XLSX/ODS): dane + obliczenia sprawności + wykresy
- Nazewnictwo plików: `zad01_<nazwisko>_<imie>.pdf` oraz `zad01_<nazwisko>_<imie>.xlsx`

#### Kryteria oceny
Szczegółowa instrukcja, format oddania oraz punktacja (**10 pkt**) znajdują się w karcie zajęć.

#### Materiały
- [Karta zajęć](../karty/zadanie-01-pv-stacja-hulajnog.md)
- [Dokumentacja urządzenia](../karty/urzadzenia/pv-stacja-hulajnog.md)
- [Dane](/cwiczenia/dane/zad01_pv-stacja-hulajnog.csv)

---

### **Zadanie 2: Turbina wiatrowa VAWT z magazynem** (10 pkt)
**Długość**: 90 min | **Urządzenie**: Turbina wiatrowa VAWT 10 kW + magazyn LiFePO₄ 20 kWh

#### Cele szczegółowe
- Analiza pracy turbiny VAWT w zmiennych warunkach wiatrowych
- Obliczenie współczynnika mocy Cₚ = P / (0.5 × ρ × A × v³)
- Analiza cykli ładowania/rozładowania magazynu energii (SOC)
- Identyfikacja stanów alarmowych: nadprędkość, niski SOC, przegrzanie baterii

#### Produkty końcowe
- Sprawozdanie (PDF): opis instalacji + wykresy + obliczenia + wnioski BHP
- Arkusz (XLSX/ODS): dane + obliczenia Cₚ + wykresy
- Nazewnictwo plików: `zad02_<nazwisko>_<imie>.pdf` oraz `zad02_<nazwisko>_<imie>.xlsx`

#### Kryteria oceny
Szczegółowa instrukcja, format oddania oraz punktacja (**10 pkt**) znajdują się w karcie zajęć.

#### Materiały
- [Karta zajęć](../karty/zadanie-02-vawt-magazyn.md)
- [Dokumentacja urządzenia](../karty/urzadzenia/vawt-magazyn.md)
- [Dane](/cwiczenia/dane/zad02_vawt-magazyn.csv)
- [Opis laboratoryjny (zewnętrzny)](https://docs-plat-edu-bad.vercel.app/docs/laboratories-and-equipment/wind/2.1-wind-big-vertical-storage)

---

### **Zadanie 3: Monitoring biogazowni** (12 pkt)
**Długość**: 90 min | **Urządzenie**: Mała biogazownia

#### Cele szczegółowe
- **P (30 min)**: Odczyty składu gazów (CH₄, CO₂, H₂S), podstawowe tabele
- **R (30 min)**: Analiza trendu H₂S, identyfikacja incydentu toksyczności
- **W (30 min)**: Plan reakcji na incydent wysokiego H₂S (ewakuacja, wentylacja)

#### Produkty końcowe
- [x] Tabela składu gazów dla wybranych okresów
- [x] Wykres H₂S(t) z zaznaczonymi progami alarmowymi
- [x] Protokół BHP z oceną ryzyka
- [x] Plan reakcji na incydent (W)

#### Kryteria oceny
| Kryterium | P | R | W |
|---|---|---|---|
| Tabele i wykresy | 3 | 2 | 1 |
| Identyfikacja incydentu | 1 | 3 | 2 |
| Protokół BHP | 2 | 2 | 2 |
| Plan reakcji | - | 1 | 3 |
| **SUMA** | **6** | **8** | **8** |

#### Materiały
- [Karta zajęć](../karty/zadanie-03-biogazownia-mala.md)
- [Dokumentacja urządzenia](../karty/urzadzenia/biogazownia-mala.md)
- [Dane](/cwiczenia/dane/zad03_biogazownia-mala.csv)
- [Formularz raportu](../szablony/formularz-raportu-incydentu.md)

---

### **Zadanie 4: Monitoring pompy ciepła** (12 pkt)
**Długość**: 90 min | **Urządzenie**: Pompa ciepła (Heat Pump)

#### Cele szczegółowe
- **P (30 min)**: Odczyty temperatur, COP, podstawowe wykresy
- **R (30 min)**: Analiza zależności COP(T), identyfikacja nadmiernego odszraniania
- **W (30 min)**: Optymalizacja zakresu roboczego, identyfikacja przyczyn degradacji COP

#### Produkty końcowe
- [x] Wykres COP(T_zewn) pokazujący zakres pracy
- [x] Wykres różnicy ciśnień lub częstotliwości odszraniania
- [x] Tabela wartości progowych (COP_min, T_max_odszraniania)
- [x] Raport z wnioskami (R) lub plan optymalizacji (W)

#### Kryteria oceny
| Kryterium | P | R | W |
|---|---|---|---|
| Wykres COP(T) | 3 | 2 | 1 |
| Analiza odszraniania | 1 | 3 | 2 |
| Identyfikacja progów | 1 | 2 | 3 |
| Raport/plan | - | 1 | 2 |
| **SUMA** | **5** | **8** | **8** |

#### Materiały
- [Karta zajęć](../karty/zadanie-04-pompa-ciepla.md)
- [Dokumentacja urządzenia](../karty/urzadzenia/pompa-ciepla.md)
- [Dane](/cwiczenia/dane/zad04_pompa-ciepla.csv)

---

### **Zadanie 5: Monitoring magazynu energii BESS** (12 pkt)
**Długość**: 90 min | **Urządzenie**: Magazyn energii BESS

#### Cele szczegółowe
- **P (30 min)**: Odczyty SOC, SOH, temperatury, podstawowe wykresy
- **R (30 min)**: Analiza cykli ładowania/rozładowania, trend degradacji SOH
- **W (30 min)**: Diagnoza nierównowagi cel, plan naprawy/wymiany

#### Produkty końcowe
- [x] Wykres SOC(t) pokazujący cykl ładowania/rozładowania
- [x] Wykres SOH(t) z trendem degradacji
- [x] Identyfikacja anomalii temperaturowych i nierównowagi cel
- [x] Raport bezpieczeństwa (R) lub plan naprawy (W)

#### Kryteria oceny
| Kryterium | Punkty |
|---|---:|
| Wykresy SOC/SOH/temp/deltaU | 4 |
| Analiza cykli i degradacji | 4 |
| Plan reakcji i progi | 4 |
| **SUMA** | **12** |

#### Materiały
- [Karta zajęć](../karty/zadanie-05-bess.md)
- [Dokumentacja urządzenia](../karty/urzadzenia/bess.md)
- [Dane](/cwiczenia/dane/zad05_bess.csv)

---

## 📊 Podsumowanie punktacji i zaliczenie

### Rozkład punktów
| Komponent | Punkty | % |
|---|---|---|
| Zajęcia 1–5 | 56 | 100% |
| **SUMA** | **56** | **100%** |

### Kryteria zaliczenia
- **Minimum zaliczenia**: **34 pkt / 56** (60%)
- **Poziom P obowiązkowy** dla wszystkich zajęć 1–5

### Oceny końcowe
| Ocena | Zakres punktów | % |
|---|---|---|
| Celujący (5) | 51–56 | 90–100% |
| Bardzo dobry (4.5) | 45–50 | 80–89% |
| Dobry (4) | 40–44 | 70–79% |
| Dostateczny (3.5) | 34–39 | 60–69% |
| Niedostateczny (2) | 0–33 | < 60% |

---

## 🔗 Materiały dodatkowe

### Przydatne linki
- [Wprowadzenie do ćwiczeń](../index.md)
- [Opis zbiorów danych](../dane.md)
- [Rubryki oceniania](../rubryki/rubryka-oceny-standard.md)
- [Kryteria zaliczenia](../rubryki/kryteria-zaliczenia.md)

### Dokumentacja urządzeń
- [Stacja ładowania hulajnóg + PV](../karty/urzadzenia/pv-stacja-hulajnog.md)
- [Turbina VAWT z magazynem](../karty/urzadzenia/vawt-magazyn.md)
- [Mała biogazownia](../karty/urzadzenia/biogazownia-mala.md)
- [Pompa ciepła](../karty/urzadzenia/pompa-ciepla.md)
- [Magazyn energii BESS](../karty/urzadzenia/bess.md)

---

**Opracowano**: 2025-10-31  
**Wersja**: 1.0  
**Status**: Gotowe do użycia
