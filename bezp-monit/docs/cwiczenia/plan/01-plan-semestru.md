---
title: "Plan semestru — ćwiczenia laboratoryjne"
description: "Harmonogram 10 spotkań laboratoryjnych z systemów monitorowania i bezpieczeństwa instalacji OZE"
course: "Systemy bezpieczeństwa i monitorowania instalacji OZE"
version: "1.0"
section: "A-plan"
duration_min: 90
tags: ["plan-zajec", "harmonogram", "laboratoria"]
---

# 📅 Plan semestru — ćwiczenia laboratoryjne

## Parametryzacja kursu

- **Czas na zajęcia**: 90 min (`CZAS_ZAJEC = 90`)
- **Wielkość grupy**: 3–4 osoby (`ROZMIAR_GRUPY = 3-4`)
- **Poziom trudności**: domyślnie średni (`TRUDNOSC = Średnia`)
- **Liczba spotkań**: 10 (łącznie 15 godzin)
- **Liczba urządzeń**: 5 (PV stacja hulajnóg, PV+Wiatr hybryda, Biogazownia, Pompa ciepła, BESS)

## 🎯 Cele ogólne kursu

Po zakończeniu całego cyklu ćwiczeń laboratoryjnych student:

1. **Rozumie** różne typy czujników i metody akwizycji danych w instalacjach OZE
2. **Potrafi** odczytać i zinterpretować dane pomiarowe z systemów monitorowania
3. **Identyfikuje** zagrożenia bezpieczeństwa charakterystyczne dla każdego typu instalacji
4. **Umie** zastosować podstawowe metody analizy trendów i wykrywania anomalii
5. **Projektuje** progi alarmowe i procedury reakcji na incydenty
6. **Weryfikuje** jakość danych pomiarowych i identyfikuje błędy systematyczne

---

## 📊 Plan zajęć — tabela zbiorcza

| Nr | Tytuł zajęć | Urządzenie | Główne cele dydaktyczne | Produkty końcowe | Punkty oceny |
|---|---|---|---|---|---|
| **1** | **Wprowadzenie i przegląd urządzeń** | Wszystkie 5 | • Poznanie wszystkich urządzeń i ich parametrów<br />• Test wstępny (5 pytań)<br />• Omówienie zasad BHP | • Zapełniony formularz BHP<br />• Test wstępny (0 pkt)<br />• Notatki z przeglądu urządzeń | 5 pkt |
| **2** | **Monitoring instalacji PV (Stacja ładowania hulajnóg)** | PV Stacja | • Analiza krzywej mocy DC/AC<br />• Obliczanie sprawności systemu<br />• Identyfikacja przerwy w pracy | • Wykres P(t)<br />• Obliczenia sprawności<br />• Raport anomalii | 10 pkt |
| **3** | **Monitoring hybrydy PV+Wiatr** | PV+Wiatr Hybryda | • Porównanie źródeł energii<br />• Bilans energetyczny<br />• Analiza synchronizacji | • Wykresy porównawcze<br />• Tabela bilansu<br />• Ocena uzupełniania źródeł | 12 pkt |
| **4** | **Monitoring biogazowni** | Biogazownia | • Analiza składu gazów<br />• Wykrywanie toksyczności H₂S<br />• Kontrola temperatury fermentacji | • Tabela składu gazów<br />• Wykres alarmów H₂S<br />• Protokół BHP | 12 pkt |
| **5** | **Monitoring pompy ciepła** | Pompa ciepła | • Obliczanie COP<br />• Identyfikacja nadmiernego odszraniania<br />• Analiza krzywej grzania | • Wykres COP vs T<br />• Wykres różnicy ciśnień<br />• Identyfikacja optymalnego zakresu | 12 pkt |
| **6** | **Monitoring magazynu energii BESS** | BESS | • Analiza cykli ładowania/rozładowania<br />• Monitoring SOH<br />• Identyfikacja nierównowagi cel | • Wykres SOC(t)<br />• Analiza degradacji<br />• Raport bezpieczeństwa | 12 pkt |
| **7** | **Analiza trendów i progi alarmowe** | Dane łączone | • Średnie ruchome<br />• Obliczanie progu statystycznego<br />• Validacja alertów | • Wykresy trendów<br />• Tabela progów<br />• Raport false positives | 15 pkt |
| **8** | **Bezpieczeństwo i incydenty** | Symulacje | • Identyfikacja krytycznych alarmów<br />• Plan reakcji na incydent<br />• Raportowanie | • Protokół incydentu<br />• Plan reakcji<br />• Checklist kontrolna | 15 pkt |
| **9** | **Kalibracja i walidacja danych** | Wszystkie 5 | • Wykrywanie dryftu czujników<br />• Kompensacja błędów systematycznych<br />• Walidacja zakresów | • Wykres dryftu<br />• Tabela kompensacji<br />• Protokół kalibracji | 10 pkt |
| **10** | **Post-test i mini-projekt** | Dowolne | • Test końcowy (5 pytań)<br />• Prezentacja mini-projektu<br />• Ewaluacja | • Test końcowy (10 pkt)<br />• Raport projektu (25 pkt)<br />• Prezentacja (10 pkt) | 45 pkt |
| **SUMA** | - | - | - | - | **150 pkt** |

---

## 📝 Szczegółowy opis zajęć

### **Zajęcia 1: Wprowadzenie i przegląd urządzeń** (5 pkt)
**Długość**: 90 min

#### Cele szczegółowe
- Poznanie wszystkich 5 urządzeń laboratoryjnych i ich parametrów
- Zrozumienie podstawowych zasad monitorowania instalacji OZE
- Przegląd zagrożeń bezpieczeństwa charakterystycznych dla każdego typu
- Wykonanie testu wstępnego

#### Produkty końcowe
- [x] Uzupełniony formularz BHP dla każdego urządzenia
- [x] Test wstępny (5 pytań) — wynik **nie wlicza się do oceny**
- [x] Krótkie notatki z przeglądu każdego urządzenia (max 3 zdania/urządzenie)

#### Kryteria oceny
| Kryterium | Punkty | Opis |
|---|---|---|
| Formularz BHP | 2 | Kompletność i poprawność |
| Notatki | 3 | Zwięzłość, trafność obserwacji |

#### Materiały
- [Karta zajęć](/docs/cwiczenia/karty/zajecia-01-wprowadzenie)
- [Formularz BHP](/docs/cwiczenia/szablony/checklista-bhp)
- [Dane](/cwiczenia/dane/zaj01_wprowadzenie.csv)
- [Dokumentacja urządzeń](/docs/cwiczenia/karty/urzadzenia/)

---

### **Zajęcia 2: Monitoring instalacji PV** (10 pkt)
**Długość**: 90 min | **Urządzenie**: Stacja ładowania hulajnóg + panele PV

#### Cele szczegółowe
- **P (30 min)**: Odczyty parametrów DC/AC, podstawowe wykresy mocy
- **R (30 min)**: Obliczanie sprawności inwertera, identyfikacja trendu dziennego
- **W (30 min)**: Diagnoza przyczyny przerwy w produkcji, plan reakcji

#### Produkty końcowe
- [x] Wykres P(t) dla mocy DC i AC
- [x] Obliczenia sprawności η = P_AC / P_DC [%]
- [x] Identyfikacja momentów z `alarm=TAK` i hipoteza przyczyny
- [x] Raport z proponowanymi działaniami (P, R) lub plan reakcji (W)

#### Kryteria oceny
| Kryterium | P | R | W |
|---|---|---|---|
| Poprawność wykresu | 2 | 1 | - |
| Obliczenia sprawności | 2 | 2 | 1 |
| Identyfikacja anomalii | 1 | 2 | 3 |
| Raport/plan reakcji | - | 1 | 2 |
| **SUMA** | **5** | **6** | **6** |

#### Materiały
- [Karta zajęć](/docs/cwiczenia/karty/zajecia-02-pv-stacja-hulajnog)
- [Dokumentacja urządzenia](/docs/cwiczenia/karty/urzadzenia/pv-stacja-hulajnog)
- [Dane](/cwiczenia/dane/zaj02_pv-stacja-hulajnog.csv)
- [Klucz odpowiedzi](/docs/cwiczenia/klucze/zaj02_klucz)

---

### **Zajęcia 3: Monitoring hybrydy PV+Wiatr** (12 pkt)
**Długość**: 90 min | **Urządzenie**: Instalacja hybrydowa PV + turbina wiatrowa

#### Cele szczegółowe
- **P (30 min)**: Odczyty z PV i wiatru, wykresy mocy dla obu źródeł
- **R (30 min)**: Bilans energetyczny P_sum = P_PV + P_wiatr, analiza uzupełniania
- **W (30 min)**: Optymalizacja progu alarmowego nadprędkości turbiny

#### Produkty końcowe
- [x] Wykresy P(t) dla PV i wiatru (osobne serii lub zestawione)
- [x] Wykres P_sum(t) oraz tabela bilansu wybranych godzin
- [x] Analiza pokrycia (np. ile % zapotrzebowania pokrywa PV, ile wiatr)
- [x] Raport (R) lub optymalizacja progu (W)

#### Kryteria oceny
| Kryterium | P | R | W |
|---|---|---|---|
| Poprawność wykresów | 3 | 2 | 1 |
| Obliczenia bilansu | 1 | 3 | 2 |
| Analiza uzupełniania | - | 2 | 2 |
| Optymalizacja/raport | - | 1 | 3 |
| **SUMA** | **4** | **8** | **8** |

#### Materiały
- [Karta zajęć](/docs/cwiczenia/karty/zajecia-03-pv-wiatr-hybryda)
- [Dokumentacja urządzenia](/docs/cwiczenia/karty/urzadzenia/pv-wiatr-hybryda)
- [Dane](/cwiczenia/dane/zaj03_pv-wiatr-hybryda.csv)
- [Klucz odpowiedzi](/docs/cwiczenia/klucze/zaj03_klucz)

---

### **Zajęcia 4: Monitoring biogazowni** (12 pkt)
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
- [Karta zajęć](/docs/cwiczenia/karty/zajecia-04-biogazownia-mala)
- [Dokumentacja urządzenia](/docs/cwiczenia/karty/urzadzenia/biogazownia-mala)
- [Dane](/cwiczenia/dane/zaj04_biogazownia-mala.csv)
- [Formularz raportu](/docs/cwiczenia/szablony/formularz-raportu-incydentu)
- [Klucz odpowiedzi](/docs/cwiczenia/klucze/zaj04_klucz)

---

### **Zajęcia 5: Monitoring pompy ciepła** (12 pkt)
**Długość**: 90 min | **Urządzenie**: Pompa ciepła (Heat Pump)

#### Cele szczegółowe
- **P (30 min)**: Odczyty temperatur, COP, podstawowe wykresy
- **R (30 min)**: Analiza zależności COP(T), identyfikacja nadmiernego odszraniania
- **W (30 min)**: Optymalizacja zakresu roboczego, identyfikacja przyczyn degradacji COP

#### Produkty końcowe
- [x] Wykres COP(T_zewn) pokazujący zakres pracy
- [x] Wykres różnicy ciśnień lub częstotliwości odszraniania
- [x] Tabela wartości progowych (COP_min, T_max_odszerani)
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
- [Karta zajęć](/docs/cwiczenia/karty/zajecia-05-pompa-ciepla)
- [Dokumentacja urządzenia](/docs/cwiczenia/karty/urzadzenia/pompa-ciepla)
- [Dane](/cwiczenia/dane/zaj05_pompa-ciepla.csv)
- [Klucz odpowiedzi](/docs/cwiczenia/klucze/zaj05_klucz)

---

### **Zajęcia 6: Monitoring magazynu energii BESS** (12 pkt)
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
| Kryterium | P | R | W |
|---|---|---|---|
| Wykres SOC(t) | 3 | 2 | 1 |
| Analiza degradacji | 1 | 3 | 2 |
| Identyfikacja anomalii | 1 | 2 | 3 |
| Raport/plan | - | 1 | 2 |
| **SUMA** | **5** | **8** | **8** |

#### Materiały
- [Karta zajęć](/docs/cwiczenia/karty/zajecia-06-bess)
- [Dokumentacja urządzenia](/docs/cwiczenia/karty/urzadzenia/bess)
- [Dane](/cwiczenia/dane/zaj06_bess.csv)
- [Klucz odpowiedzi](/docs/cwiczenia/klucze/zaj06_klucz)

---

### **Zajęcia 7: Analiza trendów i progi alarmowe** (15 pkt)
**Długość**: 90 min | **Dane**: Łączne z różnych źródeł

#### Cele szczegółowe
- **P (30 min)**: Obliczanie średnich ruchomych, podstawowe wykresy trendów
- **R (30 min)**: Obliczanie progów statystycznych (średnia ± 2σ), validacja alertów
- **W (30 min)**: Optymalizacja progów w celu minimalizacji false positives/negatives

#### Produkty końcowe
- [x] Wykresy z naniesioną średnią ruchomą (okno 5-10 punktów)
- [x] Wykres z zaznaczonymi progami statystycznymi
- [x] Tabela progów dla wybranych parametrów
- [x] Raport false positives (R) lub optymalizacja (W)

#### Kryteria oceny
| Kryterium | P | R | W |
|---|---|---|---|
| Średnie ruchome | 3 | 2 | 1 |
| Obliczenia progów | 2 | 3 | 2 |
| Validacja alertów | - | 3 | 2 |
| Raport/optymalizacja | - | 1 | 3 |
| **SUMA** | **5** | **9** | **8** |

#### Materiały
- [Karta zajęć](/docs/cwiczenia/karty/zajecia-07-analiza-trendow-i-progi)
- [Dane](/cwiczenia/dane/zaj07_analiza-trendow.csv)
- [Klucz odpowiedzi](/docs/cwiczenia/klucze/zaj07_klucz)

---

### **Zajęcia 8: Bezpieczeństwo i incydenty** (15 pkt)
**Długość**: 90 min | **Format**: Symulacje incydentów

#### Cele szczegółowe
- **P (30 min)**: Identyfikacja krytycznych alarmów w symulacji
- **R (30 min)**: Plan reakcji na incydent (checklista kroków)
- **W (30 min)**: Raport incydentu z analizą root cause i planem zapobiegania

#### Produkty końcowe
- [x] Lista krytycznych alarmów uporządkowana według priorytetu
- [x] Protokół incydentu wypełniony zgodnie z symulacją
- [x] Plan reakcji (krok po kroku) dla wybranego incydentu
- [x] Analiza root cause (W)

#### Kryteria oceny
| Kryterium | P | R | W |
|---|---|---|---|
| Identyfikacja alarmów | 3 | 2 | 1 |
| Protokół incydentu | 2 | 3 | 2 |
| Plan reakcji | - | 4 | 2 |
| Analiza root cause | - | - | 4 |
| **SUMA** | **5** | **9** | **9** |

#### Materiały
- [Karta zajęć](/docs/cwiczenia/karty/zajecia-08-bezpieczenstwo-i-incydenty)
- [Formularz raportu](/docs/cwiczenia/szablony/formularz-raportu-incydentu)
- [Dane](/cwiczenia/dane/zaj08_bezpieczenstwo-i-incydenty.csv)
- [Klucz odpowiedzi](/docs/cwiczenia/klucze/zaj08_klucz)

---

### **Zajęcia 9: Kalibracja i walidacja danych** (10 pkt)
**Długość**: 90 min | **Dane**: Wszystkie 5 urządzeń

#### Cele szczegółowe
- **P (30 min)**: Wykrywanie wartości odstających, podstawowe walidacje zakresów
- **R (30 min)**: Analiza dryftu czujnika, obliczanie kompensacji
- **W (30 min)**: Protokół kalibracji, plan harmonogramu kalibracji

#### Produkty końcowe
- [x] Wykres dryftu z zaznaczonym trendem
- [x] Tabela wartości odstających i ich przyczyn
- [x] Protokół kalibracji z zaproponowaną kompensacją
- [x] Harmonogram kalibracji (W)

#### Kryteria oceny
| Kryterium | P | R | W |
|---|---|---|---|
| Wykrywanie odstających | 2 | 1 | - |
| Analiza dryftu | 2 | 3 | 2 |
| Kompensacja | - | 3 | 2 |
| Protokół/harmonogram | - | - | 3 |
| **SUMA** | **4** | **7** | **7** |

#### Materiały
- [Karta zajęć](/docs/cwiczenia/karty/zajecia-09-kalibracja-i-walidacja-danych)
- [Dane](/cwiczenia/dane/zaj09_kalibracja-i-walidacja.csv)
- [Klucz odpowiedzi](/docs/cwiczenia/klucze/zaj09_klucz)

---

### **Zajęcia 10: Post-test i mini-projekt** (45 pkt)
**Długość**: 90 min | **Format**: Test + prezentacja

#### Cele szczegółowe
- Wykonanie testu końcowego (10 pkt)
- Prezentacja mini-projektu: "Projekt progu alarmowego i procedury reakcji" (25 pkt)
- Ewaluacja kursu (10 pkt)

#### Produkty końcowe
- [x] Test końcowy uzupełniony (5 pytań zamkniętych + 5 otwartych)
- [x] Raport projektu (max 5 stron A4 lub prezentacja 10 slajdów)
- [x] Prezentacja ustna (5-7 min) + sesja Q&A
- [x] Formularz ewaluacji wypełniony

#### Kryteria oceny

**Test końcowy (10 pkt)**
| Kryterium | Punkty |
|---|---|
| Pytania zamknięte (5×1 pkt) | 5 |
| Pytania otwarte (5×1 pkt) | 5 |

**Mini-projekt (25 pkt)**
| Kryterium | Punkty |
|---|---|
| Wybór urządzenia i uzasadnienie | 3 |
| Analiza danych historycznych | 5 |
| Obliczanie progów alarmowych | 5 |
| Projekt procedury reakcji | 6 |
| Prezentacja i obrona | 6 |

**Ewaluacja (10 pkt)**
| Kryterium | Punkty |
|---|---|
| Kompletność formularza | 2 |
| Konstruktywność uwag | 3 |
| Propozycje ulepszeń | 5 |

#### Materiały
- [Karta zajęć](/docs/cwiczenia/karty/zajecia-10-posttest-i-miniprojekt)
- [Dane testowe](/cwiczenia/dane/zaj10_posttest-miniprojekt.csv)
- [Karta oceny](/docs/cwiczenia/szablony/karta-oceny)
- [Klucz odpowiedzi](/docs/cwiczenia/klucze/zaj10_klucz)

---

## 📊 Podsumowanie punktacji i zaliczenie

### Rozkład punktów
| Komponent | Punkty | % |
|---|---|---|
| Zajęcia 1–6 (ćwiczenia wprowadzające) | 63 | 42% |
| Zajęcia 7–9 (ćwiczenia zaawansowane) | 37 | 25% |
| Zajęcia 10 (test + projekt) | 50 | 33% |
| **SUMA** | **150** | **100%** |

### Kryteria zaliczenia
- **Minimum zaliczenia**: **90 pkt / 150** (60%)
- **Poziom P obowiązkowy** dla wszystkich zajęć 2–9
- **Zajęcia 10 obligatoryjne** (test + projekt)

### Oceny końcowe
| Ocena | Zakres punktów | % |
|---|---|---|
| Celujący (5) | 135–150 | 90–100% |
| Bardzo dobry (4.5) | 120–134 | 80–89% |
| Dobry (4) | 105–119 | 70–79% |
| Dostateczny (3.5) | 90–104 | 60–69% |
| Niedostateczny (2) | 0–89 | < 60% |

---

## 🔗 Materiały dodatkowe

### Przydatne linki
- [Wprowadzenie do ćwiczeń](/docs/cwiczenia/index)
- [Opis zbiorów danych](/docs/cwiczenia/dane)
- [Rubryki oceniania](/docs/cwiczenia/rubryki/rubryka-oceny-standard)
- [Kryteria zaliczenia](/docs/cwiczenia/rubryki/kryteria-zaliczenia)

### Dokumentacja urządzeń
- [Stacja ładowania hulajnóg + PV](/docs/cwiczenia/karty/urzadzenia/pv-stacja-hulajnog)
- [Instalacja hybrydowa PV+Wiatr](/docs/cwiczenia/karty/urzadzenia/pv-wiatr-hybryda)
- [Mała biogazownia](/docs/cwiczenia/karty/urzadzenia/biogazownia-mala)
- [Pompa ciepła](/docs/cwiczenia/karty/urzadzenia/pompa-ciepla)
- [Magazyn energii BESS](/docs/cwiczenia/karty/urzadzenia/bess)

---

**Opracowano**: 2025-10-31  
**Wersja**: 1.0  
**Status**: Gotowe do użycia
