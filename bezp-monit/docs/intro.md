---
sidebar_position: 1
title: Wprowadzenie do kursu
---

# Systemy bezpieczeństwa i monitorowania instalacji OZE

## O kursie

Kurs dotyczy bezpieczeństwa i monitorowania instalacji odnawialnych źródeł energii: fotowoltaiki, energetyki wiatrowej, bateryjnych magazynów energii (BESS) i biogazowni. Pokazuje, skąd biorą się zagrożenia, jak ocenia się ryzyko, jak zbudować monitoring, któremu można ufać, i czym różni się on od funkcji ochronnych, które automatycznie zapobiegają awariom i wypadkom.

Materiał opiera się na normach, przepisach UE i Polski oraz raportach z dochodzeń po rzeczywistych awariach. Stan prawny i wydania norm podajemy według stanu z września 2026 r.; przepisy i normy się zmieniają, dlatego przy każdej informacji podajemy źródło.

Kurs jest przeznaczony dla studentów 5. semestru kierunku Odnawialne źródła energii. Nie wymaga umiejętności programowania.

## Struktura kursu

| Forma | Liczba godzin | Organizacja |
|---|---|---|
| Wykład | 20 h | 10 wykładów po 90 min |
| Ćwiczenia | 10 h | 5 zajęć po 90 min: analiza danych z instalacji OZE w arkuszu kalkulacyjnym |

## Plan wykładów

| Nr | Wykład | Najważniejsze zagadnienia | Status |
|---|---|---|---|
| W1 | [Zagrożenia w instalacjach OZE, ramy prawne i warstwy ochrony](./wyklady-bezp/wyklad-01-zagrozenia-ramy-prawne/index.md) | zagrożenia w PV, energetyce wiatrowej, BESS i biogazowniach; zagrożenie i ryzyko; prawo UE i Polski; normy; monitoring a warstwy ochrony | dostępny |
| W2 | [Analiza ryzyka — HAZID, HAZOP, FMEA, FTA, LOPA i SIL](./wyklady-bezp/wyklad-02-analiza-ryzyka/index.md) | proces zarządzania ryzykiem; HAZID i HAZOP; FMEA; drzewa niezdatności i zdarzeń; bow-tie; LOPA; poziomy SIL | dostępny |
| W3 | [Architektura monitoringu i tor pomiarowy](./wyklady-bezp/wyklad-03-architektura-monitoringu/index.md) | cele i poziomy architektury monitoringu; czas i synchronizacja; tor pomiarowy od czujnika do zapisu; niepewność pomiaru i wzorcowanie; czujniki OZE i klasy monitoringu PV; uszkodzenia toru i przykład biogazowy | dostępny |
| W4 | Komunikacja w instalacjach OZE — Modbus, SunSpec, OPC UA, MQTT, IEC 61850 i IEC 60870-5-104 | protokoły komunikacyjne; telemetria dla operatora sieci; typowe błędy integracji | w przygotowaniu |
| W5 | Jakość danych, wskaźniki KPI, zarządzanie alarmami i wykrywanie anomalii | jakość danych; wskaźniki eksploatacyjne (np. PR, dostępność); zarządzanie alarmami; wykrywanie anomalii | w przygotowaniu |
| W6 | Fotowoltaika — bezpieczeństwo elektryczne i pożarowe, monitoring wydajności | bezpieczeństwo po stronie DC; łuk elektryczny; wyłączanie dla ratowników; pożary; badania okresowe; monitoring wydajności | w przygotowaniu |
| W7 | Energetyka wiatrowa — system bezpieczeństwa, hamulce, oblodzenie i monitorowanie stanu | system sterowania i ochrony turbiny; hamowanie; pożar gondoli; oblodzenie; monitorowanie stanu (CMS); praca na wysokości | w przygotowaniu |
| W8 | Magazyny energii (BESS) — BMS, niekontrolowany wzrost temperatury i detekcja gazów | system zarządzania baterią (BMS); niekontrolowany wzrost temperatury; detekcja gazów i wentylacja; macierz przyczynowo-skutkowa | w przygotowaniu |
| W9 | Biogazownie — ochrona przeciwwybuchowa, detekcja gazów i bezpieczeństwo procesowe | strefy zagrożenia wybuchem i dokument zabezpieczenia przed wybuchem; detektory gazów; bezpieczeństwo procesowe | w przygotowaniu |
| W10 | Cyberbezpieczeństwo OT i bezpieczna eksploatacja | cyberbezpieczeństwo systemów sterowania (IEC 62443); obowiązki NIS2/KSC; blokowanie i oznaczanie źródeł energii (LOTO); pozwolenia na pracę; plany awaryjne | w przygotowaniu |

Wykłady W3–W10 są w przygotowaniu; ich zakres może się jeszcze nieznacznie zmienić.

## Cele kształcenia

Po ukończeniu kursu student potrafi:

1. rozpoznać i sklasyfikować zagrożenia w instalacjach fotowoltaicznych, wiatrowych, magazynach energii i biogazowniach oraz wskazać przepisy i normy, które ich dotyczą;
2. przeprowadzić podstawową analizę ryzyka (HAZOP, FMEA, analiza drzewa niezdatności, LOPA) i wyznaczyć wymagany poziom nienaruszalności bezpieczeństwa (SIL);
3. zaprojektować architekturę monitoringu i tor pomiarowy instalacji OZE oraz dobrać sposób komunikacji;
4. ocenić jakość danych, obliczyć wskaźniki eksploatacyjne i zaproponować racjonalny zestaw alarmów;
5. rozróżnić funkcje monitoringu i funkcje ochronne oraz wskazać zabezpieczenia wymagane w instalacjach PV, turbinach wiatrowych, magazynach energii i biogazowniach;
6. stosować zasady bezpiecznej eksploatacji (LOTO, pozwolenia na pracę, plany awaryjne) i podstawowe zasady cyberbezpieczeństwa systemów sterowania.

## Wymagania wstępne

- Podstawy elektrotechniki: obwody prądu stałego i przemiennego, moc, sprawność.
- Podstawowa wiedza o technologiach OZE: fotowoltaika, energetyka wiatrowa, magazyny energii, biogaz.
- Podstawy rachunku prawdopodobieństwa i statystyki: prawdopodobieństwo zdarzeń, średnia, odchylenie standardowe.
- Obsługa arkusza kalkulacyjnego (Microsoft Excel lub LibreOffice Calc): formuły i wykresy.

## Ćwiczenia

Na każdych zajęciach analizujesz syntetyczny zbiór danych (plik CSV) z jednej instalacji: liczysz wskaźniki, wykrywasz stany alarmowe i proponujesz działania z uwzględnieniem zasad BHP. Wynikiem jest sprawozdanie (PDF) i arkusz z obliczeniami. Harmonogram i zasady oceny: [Plan semestru](./cwiczenia/plan/01-plan-semestru.md); opis materiałów: [Ćwiczenia — wprowadzenie](./cwiczenia/index.md).

| Zadanie | Instalacja | Powiązane wykłady |
|---|---|---|
| [Zadanie 1](./cwiczenia/karty/zadanie-01-pv-stacja-hulajnog.md) | Monitoring instalacji PV (stacja ładowania hulajnóg) | W3, W5, W6 |
| [Zadanie 2](./cwiczenia/karty/zadanie-02-vawt-magazyn.md) | Turbina wiatrowa VAWT z magazynem energii | W5, W7, W8 |
| [Zadanie 3](./cwiczenia/karty/zadanie-03-biogazownia-mala.md) | Mała biogazownia: monitoring i bezpieczeństwo | W2, W9 |
| [Zadanie 4](./cwiczenia/karty/zadanie-04-pompa-ciepla.md) | Pompa ciepła: monitoring i bezpieczeństwo | W5 |
| [Zadanie 5](./cwiczenia/karty/zadanie-05-bess.md) | BESS: SOC/SOH, cykle i bezpieczeństwo | W5, W8 |

## Zaliczenie

- **Ćwiczenia**: pięć zadań, łącznie 56 pkt; zaliczenie od 34 pkt (60%). Szczegóły w [Planie semestru](./cwiczenia/plan/01-plan-semestru.md).
- **Wykład**: zasady zaliczenia poda prowadzący.

:::note[Do uzupełnienia]
Zasady zaliczenia wykładu i sposób wyznaczania oceny końcowej z przedmiotu zostaną podane przez prowadzącego.
:::

## Jak korzystać z materiałów

- Każdy wykład składa się z kilku części. Na stronie części można czytać slajdy po kolei albo uruchomić tryb prezentacji przyciskiem „▶ Prezentacja”.
- Przy każdym slajdzie można rozwinąć notatki prowadzącego z dodatkowymi wyjaśnieniami.
- Przy slajdach podano źródło liczb, przepisów i norm, a każda część kończy się sekcją „Źródła” z odnośnikami.
- Przykłady oznaczone „Przykład ilustracyjny — dane umowne” służą do ćwiczenia obliczeń i nie opisują rzeczywistych instalacji.
- Każdy wykład kończy się quizem „Sprawdź się”.

## Rozpoczęcie nauki

Zacznij od [W1: Zagrożenia w instalacjach OZE, ramy prawne i warstwy ochrony](./wyklady-bezp/wyklad-01-zagrozenia-ramy-prawne/index.md), a następnie przejdź do [W2: Analiza ryzyka — HAZID, HAZOP, FMEA, FTA, LOPA i SIL](./wyklady-bezp/wyklad-02-analiza-ryzyka/index.md).

## Kontakt

- **Prowadzący**: [Imię i nazwisko prowadzącego]
- **Email**: [adres email]
- **Konsultacje**: [Dni i godziny konsultacji]
- **Platforma**: Materiały dostępne na tej stronie oraz [inna platforma jeśli używana]
