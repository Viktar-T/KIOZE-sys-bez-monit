---
title: "Zbiory danych syntetycznych"
description: "Opis i dostępność zbiorów danych CSV dla ćwiczeń laboratoryjnych"
---

## 📊 Dostępność danych

Wszystkie zbiory danych syntetycznych są dostępne w katalogu `/cwiczenia/dane/` i zostały wygenerowane zgodnie z realistycznymi zakresami pomiarowymi urządzeń dostępnych na katedrze.

## 🔗 Mapowanie: Karta ćwiczeń → Plik CSV

| Karta ćwiczeń | Plik CSV | Zakresy danych | Liczba wierszy | Anomalie |
|---|---|---|---|---|
| **Zajęcia 1: Wprowadzenie** | `zaj01_wprowadzenie.csv` | Ogólne dane z wszystkich urządzeń | 40 | Różne typy alarmów |
| **Zajęcia 2: PV (Stacja hulajnóg)** | `zaj02_pv-stacja-hulajnog.csv` | PV: 0-900 W/m², 200-500V, 0-15A, 0-5kW | 60 | Przeciążenie DC, przegrzanie |
| **Zajęcia 3: PV + Wiatr (Hybryda)** | `zaj03_pv-wiatr-hybryda.csv` | Wiatr: 0-15 m/s, PV: 0-800 W/m², moc sumaryczna | 80 | Nadprędkość turbiny |
| **Zajęcia 4: Biogazownia** | `zaj04_biogazownia-mala.csv` | CH₄: 50-65%, CO₂: 35-45%, H₂S: 0-250 ppm, temp: 35-40°C | 60 | Wysokie H₂S, spadek temp. |
| **Zajęcia 5: Pompa ciepła** | `zaj05_pompa-ciepla.csv` | T: 20-55°C, COP: 2.5-4.5, moc: 2-8kW | 60 | Niskie/niskie ciśnienie |
| **Zajęcia 6: BESS** | `zaj06_bess.csv` | SOC: 20-95%, SOH: 85-100%, temp: 15-35°C | 80 | Nierównowaga cel, nadtemp. |
| **Zajęcia 7: Analiza trendów** | `zaj07_analiza-trendow.csv` | Dane łączone z różnych źródeł | 120 | Wielokrotne anomali |
| **Zajęcia 8: Bezpieczeństwo** | `zaj08_bezpieczenstwo-i-incydenty.csv` | Symulacje incydentów | 40 | Krytyczne alarmy |
| **Zajęcia 9: Kalibracja** | `zaj09_kalibracja-i-walidacja.csv` | Dane z błędami systematycznymi | 80 | Dryft czujników |
| **Zajęcia 10: Post-test** | `zaj10_posttest-miniprojekt.csv` | Dane testowe | 30 | Wszystkie typy |
| **📱 Urządzenie: PV Stacja** | `urz_pv-stacja-hulajnog.csv` | Szeroki zakres czasowy | 120 | Różne anomalie |
| **💨 Urządzenie: PV+Wiatr** | `urz_pv-wiatr-hybryda.csv` | Różne warunki pogodowe | 120 | Skrajne wartości |
| **🦠 Urządzenie: Biogazownia** | `urz_biogazownia-mala.csv` | Cykle fermentacyjne | 120 | Skoki gazów |
| **🔥 Urządzenie: Pompa** | `urz_pompa-ciepla.csv` | Różne tryby pracy | 120 | Spadki COP |
| **🔋 Urządzenie: BESS** | `urz_bess.csv` | Cykle ładowania/rozładowania | 120 | Degradacja SOH |

## 📋 Format danych CSV

### Separator i kodowanie
- **Separator**: średnik `;`
- **Kodowanie**: UTF-8
- **Nagłówki**: polski język z jednostkami w nawiasach kwadratowych

### Przykład struktury

```csv
czas;naslonecznienie[W/m2];napiecie_DC[V];prad_DC[A];moc_AC[kW];temp_modulu[C];alarm
2025-04-01 08:00;120;320;2.1;0.45;18;NIE
2025-04-01 08:05;350;410;3.8;1.12;22;NIE
```

### Charakterystyka danych

#### **Realistyczny szum**
Wszystkie dane zawierają naturalny szum pomiarowy (σ = 2-5% wartości nominalnej) symulujący niedoskonałości czujników.

#### **Trendy czasowe**
- **PV/Wiatr**: Dobowe cykle słoneczne/wietrzne
- **Biogaz**: Wolne zmiany związane z cyklem fermentacyjnym
- **BESS**: Procesy ładowania/rozładowania
- **Pompa ciepła**: Sezonowe wahania temperatury

#### **Anomalie**
Każdy plik zawiera **1-2 wiersze z `alarm=TAK`** oraz kilka wierszy z wartościami podejrzanymi (powyżej/poniżej progów, wymagające uwagi).

### 🔍 Spójność fizyczna

Dane są fizycznie spójne:
- **Moc elektryczna**: `moc ≈ napiecie × prad × sprawnosc`
- **COP pompy**: zakres 2.0-4.5 (realistyczne dla pomp ciepła)
- **SOC BESS**: zakres 10-95% (progi bezpieczeństwa)
- **Temperatury**: odpowiednie dla każdego typu instalacji
- **Składy gazów**: CH₄ + CO₂ + inne ≈ 100%

## 📥 Jak korzystać z danych?

### 1. Pobieranie plików
Dane dostępne są w formie plików CSV w sekcji `/cwiczenia/dane/`. Kliknij nazwę pliku aby pobrać.

### 2. Import do arkusza kalkulacyjnego
- **LibreOffice Calc / Excel**: Otwórz plik CSV → Import tekstu → Separator: średnik, kodowanie: UTF-8
- **Google Sheets**: Przeciągnij plik do przeglądarki → automatyczne formatowanie

### 3. Podstawowa analiza
Każda karta ćwiczeń zawiera instrukcje krok po kroku dotyczące:
- Które kolumny użyć
- Jak stworzyć wykres
- Jakie obliczenia wykonać

## ⚠️ Uwaga

Wszystkie dane są **syntetyczne** — wygenerowane komputerowo dla celów dydaktycznych. Nie pochodzą z rzeczywistych instalacji, ale są realistyczne pod względem zakresów, trendów i anomalii.

:::tip Wskazówka praktyczna
Po wykonaniu zadania porównaj swoje wyniki z **Kluczem odpowiedzi** w sekcji `/cwiczenia/klucze/`
:::

## 🔗 Szybkie linki

- [Plan zajęć](/docs/cwiczenia/plan/01-plan-semestru)
- [Karty ćwiczeń](/docs/cwiczenia/karty/)
- [Klucze odpowiedzi](/docs/cwiczenia/klucze/)

---

**Ostatnia aktualizacja**: 2025-10-31
