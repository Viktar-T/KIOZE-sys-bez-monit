---
title: "Zbiory danych syntetycznych"
description: "Opis i dostępność zbiorów danych CSV dla ćwiczeń laboratoryjnych"
sidebar_position: 3
---

## 📊 Dostępność danych

Wszystkie zbiory danych syntetycznych są dostępne w katalogu `/cwiczenia/dane/` i zostały wygenerowane zgodnie z realistycznymi zakresami pomiarowymi urządzeń dostępnych na katedrze.

## 🔗 Mapowanie: Karta ćwiczeń → Plik CSV

| Karta ćwiczeń | Plik CSV | Zakresy danych | Liczba wierszy | Anomalie |
|---|---|---|---|---|
| **Zadanie 1: PV (Stacja hulajnóg)** | [`zad01_pv-stacja-hulajnog.csv`](/cwiczenia/dane/zad01_pv-stacja-hulajnog.csv) | PV: 0–920 W/m², 250–450V, 0–6A, `moc_DC` 0–2,6kW, `moc_AC` 0–2,2kW, `temp_modulu` 15–65°C | 117 (3 dni) | OVER_TEMP, ZACIENIENIE, OGRANICZENIE_AC, AWARIA_INWERTERA, AWARIA_CZUJNIKA_TEMP |
| **Zadanie 2: VAWT + Magazyn** | [`zad02_vawt-magazyn.csv`](/cwiczenia/dane/zad02_vawt-magazyn.csv) | Wiatr: 0-25 m/s, moc: 0-10 kW, SOC: 10-95%, temp: 10-45°C | 120 (3 dni) | NADPREDKOSC, NISKI_SOC, PRZEGRZANIE_BATERII, PRZEGRZANIE_GENERATORA, NIEROWNOSC_CEL |
| **Zadanie 3: Biogazownia** | [`zad03_biogazownia-mala.csv`](/cwiczenia/dane/zad03_biogazownia-mala.csv) | CH₄: 52–62%, CO₂: 36–41%, H₂S: 22–145 ppm, temp: 32.6–36.2°C | 62 (3 dni) | `H2S_WYSOKIE`, spadek temp./pH, status VENT w Dniu 3 |
| **Zadanie 4: Pompa ciepła** | [`zad04_pompa-ciepla.csv`](/cwiczenia/dane/zad04_pompa-ciepla.csv) | T_zewn: -12–22°C, COP: 0.9–4.2, T_zasil 29–52°C, ciśnienia 20.0–25.5/2.8–4.4 bar | 48 (2 dni) | ODSRZANIANIE, COP_NISKI (LIMIT/STOP przy mrozie) |
| **Zadanie 5: BESS** | [`zad05_bess.csv`](/cwiczenia/dane/zad05_bess.csv) | SOC: 10–95%, SOH: 95–98%, temp: 18–52°C, U_pakietu: 339.8–401.3 V | 48 (2 dni) | NISKI_SOC, NADTEMP_NIEROWNOSC (deltaU do 0.30 V) |

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
- **COP pompy**: zakres 0.9-4.2 (realistyczne dla pomp ciepła)
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

## 🔗 Szybkie linki

- [Plan zajęć](./plan/01-plan-semestru.md)
- [Karty ćwiczeń](/docs/cwiczenia/karty)

---

**Ostatnia aktualizacja**: 2025-10-31
