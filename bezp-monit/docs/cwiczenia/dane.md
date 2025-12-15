---
title: "Zbiory danych syntetycznych"
description: "Opis i dostępność zbiorów danych CSV dla ćwiczeń laboratoryjnych"
---

## 📊 Dostępność danych

Wszystkie zbiory danych syntetycznych są dostępne w katalogu `/cwiczenia/dane/` i zostały wygenerowane zgodnie z realistycznymi zakresami pomiarowymi urządzeń dostępnych na katedrze.

## 🔗 Mapowanie: Karta ćwiczeń → Plik CSV

| Karta ćwiczeń | Plik CSV | Zakresy danych | Liczba wierszy | Anomalie |
|---|---|---|---|---|
| **Zajęcia 2: PV (Stacja hulajnóg)** | [`zaj02_pv-stacja-hulajnog.csv`](/cwiczenia/dane/zaj02_pv-stacja-hulajnog.csv) | PV: 0–920 W/m², 250–450V, 0–6A, `moc_DC` 0–2,6kW, `moc_AC` 0–2,2kW, `temp_modulu` 15–65°C | 117 (3 dni) | OVER_TEMP, ZACIENIENIE, OGRANICZENIE_AC, AWARIA_INWERTERA, AWARIA_CZUJNIKA_TEMP |
| **Zajęcia 3: VAWT + Magazyn** | [`zaj03_vawt-magazyn.csv`](/cwiczenia/dane/zaj03_vawt-magazyn.csv) | Wiatr: 0-25 m/s, moc: 0-10 kW, SOC: 10-95%, temp: 10-45°C | 120 (3 dni) | NADPREDKOSC, NISKI_SOC, PRZEGRZANIE_BATERII, PRZEGRZANIE_GENERATORA, NIEROWNOSC_CEL |
| **Zajęcia 4: Biogazownia** | [`zaj04_biogazownia-mala.csv`](/cwiczenia/dane/zaj04_biogazownia-mala.csv) | CH₄: 50-65%, CO₂: 35-45%, H₂S: 0-250 ppm, temp: 35-40°C | 60 | Wysokie H₂S, spadek temp. |
| **Zajęcia 5: Pompa ciepła** | [`zaj05_pompa-ciepla.csv`](/cwiczenia/dane/zaj05_pompa-ciepla.csv) | T: 20-55°C, COP: 2.5-4.5, moc: 2-8kW | 60 | Niskie/niskie ciśnienie |
| **Zajęcia 6: BESS** | [`zaj06_bess.csv`](/cwiczenia/dane/zaj06_bess.csv) | SOC: 20-95%, SOH: 85-100%, temp: 15-35°C | 80 | Nierównowaga cel, nadtemp. |
| **📱 Urządzenie: PV Stacja** | [`urz_pv-stacja-hulajnog.csv`](/cwiczenia/dane/urz_pv-stacja-hulajnog.csv) | Szeroki zakres czasowy | 120 | Różne anomalie |
| **💨 Urządzenie: VAWT+Magazyn** | [`urz_vawt-magazyn.csv`](/cwiczenia/dane/urz_vawt-magazyn.csv) | Różne warunki wiatrowe | 120 | Nadprędkość, niski SOC |
| **🦠 Urządzenie: Biogazownia** | [`urz_biogazownia-mala.csv`](/cwiczenia/dane/urz_biogazownia-mala.csv) | Cykle fermentacyjne | 120 | Skoki gazów |
| **🔥 Urządzenie: Pompa** | [`urz_pompa-ciepla.csv`](/cwiczenia/dane/urz_pompa-ciepla.csv) | Różne tryby pracy | 120 | Spadki COP |
| **🔋 Urządzenie: BESS** | [`urz_bess.csv`](/cwiczenia/dane/urz_bess.csv) | Cykle ładowania/rozładowania | 120 | Degradacja SOH |

## 📋 Format danych CSV

### Przykład struktury

```csv
czas;naslonecznienie[W/m2];napiecie_DC[V];prad_DC[A];moc_DC[kW];moc_AC[kW];temp_modulu[C];alarm
2025-04-01 08:00;120;320;2,1;0,67;0,58;18;NIE
2025-04-01 08:05;350;410;3,8;1,56;1,34;22;NIE
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

### 2. Podstawowa analiza
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
