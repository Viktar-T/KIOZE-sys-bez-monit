---
sidebar_position: 3
title: "W2: Czujniki i akwizycja danych w OZE"
---

# W2: Czujniki i akwizycja danych w OZE

## Przegląd i cele kształcenia

Wykład omawia dobór i eksploatację czujników oraz zasady akwizycji danych w instalacjach OZE. Akcent pada na łańcuch pomiarowy (sensor → kondycjonowanie → akwizycja → synchronizacja czasu) oraz wymagania jakościowe.

Po zakończeniu wykładu student potrafi:

1. Dobrać czujniki do pomiaru prądów/napięć DC/AC, irradiancji, temperatury, wibracji, gazów, przepływu/poziomu i ciśnienia.
2. Zaprojektować kondycjonowanie sygnału oraz parametry próbkowania z uwzględnieniem aliasingu.
3. Określić procedury kalibracji i prowadzić ślad metrologiczny.
4. Zastosować synchronizację czasu (NTP/PTP) i poprawnie znacznikować dane.

## Struktura materiału

1. [Pomiary elektryczne: DC/AC, poziom stringów PV](./01-elektryczne-pomiary)
2. [Irradiancja i temperatura modułów](./02-irradiancja-temperatura)
3. [Wibracje i akustyka turbin wiatrowych](./03-wibracje-turbiny)
4. [Czujniki gazów w biogazowniach](./04-gazy-biogaz)
5. [Przepływ, poziom, ciśnienie](./05-przeplyw-poziom-cisnienie)
6. [Kondycjonowanie sygnałów](./06-kondycjonowanie-sygnalu)
7. [Kalibracja i ślad metrologiczny](./07-kalibracja-metrologia)
8. [Próbkowanie i anti‑aliasing](./08-sampling-antyaliasing)
9. [Synchronizacja czasu: NTP/PTP](./09-synchronizacja-czasu)
10. [Podsumowanie i zalecenia praktyczne](./10-podsumowanie)

## Literatura skrócona

- IEC 61010 (bezpieczeństwo aparatury), ISO 16063 (kalibracja wibrometrów)
- Dokumentacja producentów: pyranometry ISO 9060, czujniki H₂S/CH₄, przepływomierze
- InfluxDB 2.x, Grafana 10.x — integracja i weryfikacja danych pomiarowych


