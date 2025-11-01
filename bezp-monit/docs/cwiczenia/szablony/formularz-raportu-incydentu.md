---
title: "Formularz raportu incydentu — ćwiczenia laboratoryjne"
description: "Dokumentacja zdarzeń bezpieczeństwa i nieprawidłowości w laboratorium OZE"
course: "Systemy bezpieczeństwa i monitorowania instalacji OZE"
version: "1.0"
section: "C-szablony"
tags: ["bhp", "inzydent", "raport", "dokumentacja"]
---

# 📋 Formularz raportu incydentu — ćwiczenia laboratoryjne

## ⚠️ INSTRUKCJA WYPEŁNIANIA

Ten formularz jest **OBOWIĄZKOWY** do wypełnienia, jeśli podczas ćwiczeń laboratoryjnych wystąpił **jakikolwiek incydent** związany z bezpieczeństwem, niezależnie od jego skali (od drobnych nieprawidłowości do poważnych wypadków).

**Incydent** definiujemy jako:
- Każde odstępstwo od normy lub procedury bezpieczeństwa
- Wykrycie anomalii w danych pomiarowych mogących wskazywać na zagrożenie
- Alarm systemu bezpieczeństwa (pożarowy, toksyczności, elektryczny, mechaniczny)
- Awaria urządzenia lub przyrządów pomiarowych
- Uraz, zranienie lub dyskomfort uczestników
- Nieprawidłowe działanie systemów ochronnych

**Wypełnij formularz natychmiast po wystąpieniu incydentu** lub najpóźniej do końca sesji laboratoryjnej.

---

## 1️⃣ INFORMACJE PODSTAWOWE

**Numer incydentu**: _____________ (wypełnia opiekun)  
**Data**: _____________ **Godzina**: _____________ **Miejsce**: Laboratorium OZE, stanowisko: _____________

**Typ ćwiczenia**: ⬜ Wprowadzenie ⬜ PV Stacja ⬜ PV+Wiatr ⬜ Biogazownia ⬜ Pompa ciepła ⬜ BESS ⬜ Inne: _____________

**Osoba zgłaszająca**:  
- **Nazwisko**: _____________ **Imię**: _____________  
- **Funkcja**: ⬜ Student ⬜ Opiekun ⬜ Członek personelu technicznego ⬜ Inne: _____________

**Świadkowie (jeśli dotyczy)**:  
1. _____________  2. _____________  3. _____________

---

## 2️⃣ KATEGORYZACJA INCYDENTU

### 2.1 Typ zdarzenia (zaznacz wszystkie, które dotyczą)
- [ ] **⚡ Elektryczny** (porażenie, iskrzenie, przegrzanie instalacji, zwarcie)
- [ ] **🔥 Pożarowy** (iskirowanie, zadymienie, otwarty płomień, thermal runaway)
- [ ] **☠️ Toksyczność/Chemiczny** (wyciek H₂S/CH₄, wdychanie szkodliwych oparów, kontakt z chemikaliami)
- [ ] **💥 Ciśnieniowy/Mecha niczny** (eksplozja, rozerwanie, nadmierne ciśnienie, zranienie przez elementy ruchome)
- [ ] **🌡️ Termiczny** (oparzenie, przegrzanie, odmrożenie)
- [ ] **📉 Jakość danych** (nielogiczne odczyty, brak danych, wadliwy czujnik, dryft)
- [ ] **📊 Procesowy** (odchylenie od normy, alarm systemowy, nietypowe zachowanie)
- [ ] **👤 Bezpieczeństwo osobowe** (uraz, zranienie, dyskomfort, lęk)
- [ ] **🛠️ Sprzętowy** (awaria przyrządów, uszkodzenie materiałów)
- [ ] **⚠️ Inne**: _____________________________________

### 2.2 Ciężkość incydentu (ocena wstępna)
- [ ] **🟢 NIEKRYTYCZNY** — Nie wymaga natychmiastowej interwencji; można kontynuować pracę
- [ ] **🟡 UMIARKOWANY** — Wymaga uwagi; wstrzymanie pracy do wyjaśnienia; możliwa modyfikacja procedury
- [ ] **🟠 KRYTYCZNY** — Wymaga natychmiastowej interwencji; przerwanie sesji laboratoryjnej
- [ ] **🔴 CATASTROFICZNY** — Wymaga ewakuacji; powiadomienie służb ratowniczych; poważny uraz/ryzyko życia

### 2.3 Zasięg incydentu
- [ ] **Lokalny** — dotyczy tylko jednego elementu/układu
- [ ] **Regionalny** — dotyczy większego obszaru stanowiska
- [ ] **Globalny** — dotyczy całego laboratorium lub sąsiednich obszarów

---

## 3️⃣ OPIS INCYDENTU

### 3.1 Sekwencja zdarzeń (w porządku chronologicznym)

**Co się stało (krótki opis)**:
_____________________________________
_____________________________________
_____________________________________
_____________________________________

**Moment początkowy** (godzina): _____________  
**Moment końcowy/zażegnania** (godzina): _____________  
**Czas trwania**: _____________ minut

### 3.2 Szczegółowy opis (krok po kroku)

**KROK 1**: _____________________________________
_____________________________________

**KROK 2**: _____________________________________
_____________________________________

**KROK 3**: _____________________________________
_____________________________________

**KROK 4**: _____________________________________
_____________________________________

**KROK 5**: _____________________________________
_____________________________________

### 3.3 Przyczyny bezpośrednie (co spowodowało incydent?)
1. _____________________________________
2. _____________________________________
3. _____________________________________

### 3.4 Przyczyny pośrednie/root cause (dlaczego doszło do incydentu?)
1. _____________________________________
2. _____________________________________
3. _____________________________________

---

## 4️⃣ WYKRYTE ZAGROŻENIA

### 4.1 Parametry pomiarowe (przed, w trakcie, po)

| Parametr | Jedn. | Wartość norma | Wartość przed | Wartość w trakcie | Wartość po | Status |
|---|---|---|---|---|---|---|
| Temperatura | °C | _____________ | _____________ | _____________ | _____________ | ⬜ OK ⬜ NOK |
| Ciśnienie | bar/Pa | _____________ | _____________ | _____________ | _____________ | ⬜ OK ⬜ NOK |
| Napięcie DC | V | _____________ | _____________ | _____________ | _____________ | ⬜ OK ⬜ NOK |
| Prąd DC | A | _____________ | _____________ | _____________ | _____________ | ⬜ OK ⬜ NOK |
| H₂S | ppm | < 10 | _____________ | _____________ | _____________ | ⬜ OK ⬜ NOK |
| CH₄ | % | < 2 | _____________ | _____________ | _____________ | ⬜ OK ⬜ NOK |
| Inne: | | _____________ | _____________ | _____________ | _____________ | ⬜ OK ⬜ NOK |

### 4.2 Alarmy systemowe

**Czy system wykrył zdarzenie alarmowe?** ⬜ TAK ⬜ NIE

**Jeśli TAK, kody/grupy alarmów**:
1. _____________  
2. _____________  
3. _____________

**Czas opóźnienia** (od momentu początku incydentu do alertu): _____________ minut  
**Czy alarm był uzasadniony?** ⬜ TAK ⬜ NIE ⬜ NIE DOTYCZY  
**Uzasadnienie**: _____________________________________

---

## 5️⃣ DZIAŁANIA PODEJMOWANE PODCZAS INCYDENTU

### 5.1 Reakcja natychmiastowa

**KTO wykrył incydent**: _____________  
**Co ZROBIŁ/a**: _____________________________________
_____________________________________

**Kto zareagował jako pierwszy**: _____________  
**Co zrobił**: _____________________________________
_____________________________________

### 5.2 Procedury bezpieczeństwa

**Czy uruchomiono procedurę ewakuacji?** ⬜ TAK ⬜ NIE  
**Jeśli TAK, liczba osób ewakuowanych**: _____________

**Czy uruchomiono wyłącznik awaryjny?** ⬜ TAK ⬜ NIE  
**Jeśli NIE, uzasadnienie**: _____________________________________

**Czy powiadomiono służby zewnętrzne (112/pogotowie)?** ⬜ TAK ⬜ NIE  
**Jeśli TAK, czas przyjazdu**: _____________ minut

### 5.3 Działania stabilizujące

**Podjęte działania** (krok po kroku):
1. _____________________________________
2. _____________________________________
3. _____________________________________
4. _____________________________________
5. _____________________________________

### 5.4 Współpraca i komunikacja

**Jak informowano pozostałych uczestników**: ⬜ Bezpośrednio ⬜ Sygnał alarmowy ⬜ Komenda słowna ⬜ Inne: _____________

**Decyzje podjęte przez**: ⬜ Studenta ⬜ Opiekuna ⬜ Zespół ⬜ Służby zewnętrzne

---

## 6️⃣ SKUTKI I KONSEKWENCJE

### 6.1 Uszkodzenia materialne

**Uszkodzone urządzenia/sprzęt**:
1. _____________________________________  **Stopień**: ⬜ Lekki ⬜ Umiarkowany ⬜ Poważny
2. _____________________________________  **Stopień**: ⬜ Lekki ⬜ Umiarkowany ⬜ Poważny
3. _____________________________________  **Stopień**: ⬜ Lekki ⬜ Umiarkowany ⬜ Poważny

**Szacunkowy koszt naprawy**: _____________ PLN  
**Okres wyłączenia urządzenia**: _____________ dni

### 6.2 Konsekwencje dla uczestników

**Urazy/zdrowie (zaznacz jeśli dotyczy)**:
- [ ] **⬜ Nie dotyczy** — brak urazów
- [ ] **⬜ Drobne zadrapanie** — nie wymaga interwencji medycznej
- [ ] **⬜ Lekki uraz** — wymaga opatrzenia, bez absencji
- [ ] **⬜ Umiarkowany uraz** — wymaga konsultacji medycznej, możliwa krótka absencja
- [ ] **⬜ Poważny uraz** — hospitalizacja, długa absencja
- [ ] **⬜ Zgon** (wskaż szczegóły poniżej)

**Jeśli występują urazy**, opisz szczegóły:
**Poszkodowany**: _____________  
**Typ urazu**: _____________________________________  
**Część ciała**: _____________________________________  
**Leczenie**: _____________________________________

**Psychiczne skutki** (lęk, stres, trauma): _____________________________________

### 6.3 Konsekwencje dla procesu dydaktycznego

**Czy sesja była przerwana?** ⬜ TAK ⬜ NIE  
**Czas przerwy**: _____________ minut

**Czy sesja została wznowiona?** ⬜ TAK ⬜ NIE  
**Jeśli NIE, uzasadnienie**: _____________________________________

---

## 7️⃣ ANALIZA PRZYCZYN

### 7.1 Czynniki ludzkie

**Błędy operatora?** ⬜ TAK ⬜ NIE  
**Jeśli TAK, szczegóły**: _____________________________________

**Nieprzestrzeganie procedury?** ⬜ TAK ⬜ NIE  
**Jeśli TAK, która procedura**: _____________________________________

**Czy osoba była przeszkolona?** ⬜ TAK ⬜ NIE ⬜ NIE DOTYCZY  
**Data ostatniego przeszkolenia BHP**: _____________

**Czy były środki ochrony osobistej (PPE)?** ⬜ TAK ⬜ NIE  
**Jeśli NIE, dlaczego**: _____________________________________

### 7.2 Czynniki techniczne

**Awarie/nieprawidłowe działanie sprzętu**:
_____________________________________
_____________________________________

**Problem z przyrządami pomiarowymi**: ⬜ TAK ⬜ NIE  
**Jeśli TAK, szczegóły**: _____________________________________

**Problem z oprogramowaniem/system monitorowania**: ⬜ TAK ⬜ NIE  
**Jeśli TAK, szczegóły**: _____________________________________

### 7.3 Czynniki środowiskowe

**Czy warunki zewnętrzne mogły przyczynić się do incydentu?** ⬜ TAK ⬜ NIE  
**Jeśli TAK, co**: ⬜ Temperatura ⬜ Wilgotność ⬜ Wibracje ⬜ Hałas ⬜ Inne: _____________

**Opis**: _____________________________________

---

## 8️⃣ DZIAŁANIA NAPRAWCZE I ZAPOBIEGAJĄCE

### 8.1 Działania natychmiastowe (już podjęte)
1. _____________________________________
2. _____________________________________
3. _____________________________________

### 8.2 Działania krótkoterminowe (do 7 dni)
1. _____________________________________
2. _____________________________________
3. _____________________________________
4. _____________________________________

### 8.3 Działania długoterminowe (profilaktyczne)
1. _____________________________________
2. _____________________________________
3. _____________________________________

### 8.4 Rekomendacje dla przyszłości
1. **Zmiana procedury**: _____________________________________
2. **Dodatkowe szkolenie**: _____________________________________
3. **Ulepszenie sprzętu**: _____________________________________
4. **Zmiana dokumentacji**: _____________________________________

---

## 9️⃣ STATUS I ZAMKNIĘCIE

### 9.1 Status incydentu
- [ ] **🟢 Zamknięty** — incydent został rozwiązany, nie wymaga dalszych działań
- [ ] **🟡 W toku** — trwają działania naprawcze, wymaga monitorowania
- [ ] **🟠 Otwarty** — wymaga zaangażowania zewnętrznych ekspertów/urzędów
- [ ] **🔴 Krytyczny** — wymaga natychmiastowej eskalacji do kierownictwa/urzędów

### 9.2 Akceptacja i zatwierdzenie

**Osoba przygotowująca raport**: _____________ **Data**: _____________ **Podpis**: _____________

**Kierownik laboratorium**: _____________ **Data**: _____________ **Podpis**: _____________

**Opiekun zajęć**: _____________ **Data**: _____________ **Podpis**: _____________

**Recenzent BHP** (jeśli wymagane): _____________ **Data**: _____________ **Podpis**: _____________

### 9.3 Plan follow-up

**Data przeglądu** (jeśli dotyczy): _____________  
**Osoba odpowiedzialna za follow-up**: _____________  

---

## 🔟 DOKUMENTY POWIĄZANE I ZAŁĄCZNIKI

### 10.1 Referencje
**Numer wcześniejszego raportu** (jeśli związany): _____________  
**Numer checklisty BHP**: _____________  
**Numer protokołu kalibracji**: _____________

### 10.2 Załączniki
- [ ] Zdjęcia incydentu/uszkodzeń
- [ ] Logi systemowe/pliki CSV z danymi
- [ ] Zapisy wideo/monitoring (jeśli dostępne)
- [ ] Wypis z dokumentacji medycznej (jeśli dotyczy)
- [ ] Inne: _____________

**Liczba załączników**: _____________  
**Lokalizacja załączników**: _____________________________________

---

## 📌 UWAGI KOŃCOWE

**Dodatkowe uwagi**: _____________________________________
_____________________________________
_____________________________________
_____________________________________

**Wnioski/lekcje do wyciągnięcia**: _____________________________________
_____________________________________
_____________________________________

---

:::caution WAŻNE
Ten formularz raportu incydentu jest **konfidencjonalnym dokumentem** bezpieczeństwa i jest przechowywany zgodnie z przepisami BHP/EHS. Kopie mogą być udostępniane wyłącznie upoważnionym osobom w celach analitycznych i edukacyjnych.
:::

---

**Wersja dokumentu**: 1.0  
**Data utworzenia**: 2025-10-31  
**Ostatnia aktualizacja**: 2025-10-31

**Kontakt w razie pytań**: _____________  
**Email**: _____________ **Telefon**: _____________
