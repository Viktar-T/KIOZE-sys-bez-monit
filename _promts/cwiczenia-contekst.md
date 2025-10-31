# &#x20;Generowanie pakietu **ćwiczeń laboratoryjnych** dla kursu „Systemy bezpieczeństwa i monitorowania instalacji OZE”

## Rola i cel

Jesteś **instruktorem-dydaktykiem** oraz **projektantem kursów**. Twoim zadaniem jest **zaprojektować kompletny pakiet ćwiczeń** dla studentów kierunków energetycznych **bez zaplecza IT**. Kurs w języku polskim.

## Kontekst

* Nazwa przedmiotu: **Systemy bezpieczeństwa i monitorowania instalacji OZE**.
* Grupa docelowa: studenci 2–3 roku, **brak doświadczenia programistycznego**.
* Format: zajęcia laboratoryjne/warsztatowe.
* Źródła danych: na katedrze dostępne są **urządzenia pracujące ciągle**, generujące dane pomiarowe.
* Urządzenia (używaj tych nazw w materiałach):

  1. **Stacja ładowania hulajnóg + panele PV**
  2. **Instalacja hybrydowa: PV + turbina wiatrowa**
  3. **Mała biogazownia**
  4. **Pompa ciepła (Heat Pump)**
  5. **Magazyn energii BESS** (Battery Energy Storage System)
* Wizja prowadzącego: **pierwsze zajęcia** — przegląd wszystkich urządzeń + omówienie dokumentacji; **kolejne zajęcia** — praca z każdym urządzeniem po kolei.

## Wynik, jaki masz wygenerować

Wygeneruj **spójny pakiet dydaktyczny** obejmujący:

1. **Plan semestru** (8–10 spotkań, 90 min każde; dopuszczalny margines): temat, cele, urządzenia, produkty końcowe.
2. **Karty ćwiczeń** (po jednej na każde spotkanie + osobne karty per urządzenie), zgodnie z poniższym **szablonem karty ćwiczenia**.
3. **Szablony do druku**: lista kontrolna BHP, formularz raportu incydentu, karta oceny.
4. **Proste zbiory danych (syntetyczne)** do zadań – wklej jako **bloki kodu CSV** (20–200 wierszy, **realistyczne zakresy**), z nagłówkami po polsku.
5. **Klucze odpowiedzi/rozwiązania**: wzorcowe wyniki tabel, wartości progowe, przykładowe interpretacje.
6. **Rubryki oceniania** (0–3 pkt na kryterium) i **kryteria zaliczenia**.
7. **Materiał wprowadzający** na 1. zajęcia: prezentacja urządzeń, mapy sygnałów i czujników, źródła dokumentacji, słowniczek.

> **Uwaga**: Całość ma być w **języku polskim**, gotowa do użycia na zajęciach, z minimalną technologią (arkusz kalkulacyjny/GUI; **bez** programowania, chyba że opcjonalnie). Każde ćwiczenie ma być **samodzielne** (self-contained).

## Ograniczenia i założenia

* **Bez kodowania** jako wymaganie. Jeśli proponujesz element „dla chętnych”, ogranicz się do pseudokodu lub prostych funkcji w arkuszu (np. `ŚREDNIA.RUCHOMA`).
* **Brak internetu** w trakcie zajęć: wszystko ma być w materiałach (dane, instrukcje, definicje).
* **Skupienie na bezpieczeństwie**: identyfikacja zagrożeń, progi alarmowe, procedury reakcji.
* **Zrozumiały język** — unikaj żargonu IT/OT, wprowadzaj pojęcia stopniowo.
* **Dydaktyka warstwowa**: Poziom **Podstawowy (P)** → **Rozszerzony (R)** → **Wyzwanie (W)**.
* **Dostępność**: czytelny układ, krok po kroku, piktogramy/ikony ASCII, duże czcionki w nagłówkach.

## Zakres treści (ramy merytoryczne)

### Wspólne mierzone wielkości i alarmy (używaj w ćwiczeniach)

* **PV**: nasłonecznienie [W/m²], napięcie/ prąd stringów, moc AC/DC, temp. modułu, status falownika, PR/CF, alarmy: nadnapięcie DC, przegrzanie, zacienienie.
* **Wiatr**: prędkość/d kierunek wiatru, RPM, moc, status zabezpieczeń (hamulec), alarm: nadprędkość.
* **Biogazownia**: T reaktora, pH, redox, przepływ i skład biogazu (CH₄ %, CO₂ %, H₂S ppm), ciśnienie, alarmy: H₂S, nadciśnienie, spadek temp.
* **Pompa ciepła**: T zasilania/powrotu, przepływ, COP, moc sprężarki, alarmy: niskie/ wysokie ciśnienie, odszranianie.
* **BESS**: SOC, SOH, napięcie/cel, prąd, temperatura, liczba cykli, alarmy: nadtemp., nadprąd, nierównowaga cel.

### Bezpieczeństwo (BHP/EHS) — uwzględnij w każdej karcie

* **PV/BESS**: napięcia DC, łuk elektryczny; odłączniki, LOTO.
* **Wiatr**: elementy wirujące, hałas, strefy bezpieczeństwa.
* **Biogaz**: H₂S (toksyczność), metan (wybuchowość), wentylacja, detektory.
* **Pompa ciepła**: czynniki chłodnicze, ciśnienia, PPE.

## Format i styl odpowiedzi

1. **Sekcja A — Plan semestru** (tabela: nr zajęć | tytuł | urządzenie | cele | produkty | ocena).
2. **Sekcja B — Karty ćwiczeń**: generuj **jedną kartę na zajęcia** + **pięć kart tematycznych** (po jednej per urządzenie, do użycia jako alternatywy). Każda karta wg **Szablonu Karty** poniżej.
3. **Sekcja C — Szablony do druku**: checklisty BHP, formularze, rubryki.
4. **Sekcja D — Zbiory danych (CSV)**: osobny blok dla każdej karty, z opisem kolumn i realistycznymi zakresami.
5. **Sekcja E — Klucze odpowiedzi**.

## Szablon Karty Ćwiczenia (stosuj identyczny układ)

**Tytuł ćwiczenia**
**Cele (3–5, taksonomia Blooma)**
**Czas**: 90 min (P/R/W z przydziałem czasu)
**Urządzenia i czujniki** (mapa sygnałów, lista parametrów)
**Materiały**: karta BHP, dane CSV (nazwa pliku), kalkulator/arkusz
**Zagrożenia i środki**: tabela ryzyk (Prawdop.*Skutek, kolor)
**Wprowadzenie (5–10 min)**: krótkie tło merytoryczne, schemat blokowy ASCII
**Instrukcja krok po kroku** (10–15 kroków, punktowane, język prosty)
**Zadania P/R/W**:

* P: proste obliczenia, odczyty, wykres liniowy/słupkowy
* R: analiza trendu, średnia ruchoma, identyfikacja progu alarmowego
* W: diagnoza przyczyny incydentu + plan reakcji
  **Kontrola zrozumienia**: 5 pytań zamkniętych (ABC) + 2 otwarte krótkie
  **Kryteria zaliczenia** (tabela)
  **Rubryka oceniania (0–3)**: Dokładność | Bezpieczeństwo | Interpretacja | Współpraca
  **Wyniki oczekiwane (odpowiedzi wzorcowe)**
  **Słowniczek terminów (5–10 haseł)**

## Specyfikacja danych syntetycznych

* **Format**: CSV w bloku kodu, nagłówki po polsku (np. `czas;napiecie_DC[V];prad_DC[A];moc_AC[kW];temp_modulu[°C];alarm`)
* **Liczba wierszy**: 60–120/ćwiczenie (dane minutowe) lub 20–40 (dane 5-min).
* **Charakterystyka**: realistyczny szum, trend dobowy, okresowe anomalie (np. pik temp., spadek nasłonecznienia), 1–2 wiersze z `alarm=TAK`.
* **Spójność**: wartości zgodne fizycznie (moc ≈ U*I*η), COP w [2.0–4.5], SOC w [10–95%], H₂S biogazu 0–300 ppm z incydentem.

## Ocena i ewaluacja

* Dodaj **pretest** (5 pytań) na Zajęcia 1 i **posttest** (5 pytań) na Zajęcia 10.
* Każda karta zawiera **rubrykę 0–3** oraz **sumaryczne punkty** (min. 60% zaliczenie).
* Dodaj **mini-projekt końcowy**: „Projekt progu alarmowego i procedury reakcji” dla dowolnego urządzenia (z wzorem raportu).

## Dodatkowe wytyczne projektowe

* Używaj **tabel, list numerowanych, pogrubień**; bez kodu, chyba że jako **opcjonalny dodatek**.
* Do wykresów podaj **instrukcję w arkuszu**: zakres danych, typ wykresu, etykiety osi.
* W każdej karcie dodaj **„Najczęstsze błędy i pułapki”** (3–5 punktów).
* W każdej karcie dodaj **„Powiązanie z praktyką przemysłową/SCADA”** (2–3 zdania, bez nazw konkretnych produktów).

## Tryb generowania

1. Najpierw wygeneruj **Sekcję A** (plan),
2. następnie **Sekcję B** (wszystkie karty),
3. **Sekcję C**,
4. **Sekcję D**,
5. **Sekcję E**.
   Zachowaj kolejność i jednoznaczne nagłówki.

## Parametryzacja (wstaw i opisz w dokumencie)

* **Czas na zajęcia**: 90 min (zmienne `CZAS_ZAJEC`)
* **Wielkość grupy**: 3–4 osoby (`ROZMIAR_GRUPY`)
* **Poziom trudności**: domyślnie średni (`TRUDNOSC=Średnia`)

## Kryteria jakości odpowiedzi (co sprawdzam)

* Czy materiał jest **kompletny, spójny, gotowy do wydruku**?
* Czy **język** jest prosty, polski, bez żargonu IT?
* Czy **bezpieczeństwo** jest priorytetem w każdej karcie?
* Czy dane są **realistyczne** i wspierają zadania?
* Czy rubryki i kryteria są **mierzalne**?

---

**Wygeneruj teraz cały pakiet zgodnie z powyższą specyfikacją.**

---

## Struktura katalogów i plików (Markdown) — **jak podzielić wygenerowaną treść**

> **Cel:** LLM ma wygenerować komplet materiałów w **wielu plikach .md/.csv**, zorganizowanych w logiczne foldery. Poniższe wytyczne są **obowiązkowe**.

### Drzewo katalogów (repo/projekt) — **Docusaurus‑ready**

```
bezp-monit/
├─ docusaurus.config.ts
├─ sidebars.ts
├─ docs/
│  ├─ ... (Twoje istniejące działy)
│  └─ cwiczenia/                   # ⟵ CAŁY nowy dział „Ćwiczenia” tutaj
│     ├─ _category_.json          # label: "Ćwiczenia", generated index: true
│     ├─ index.md                 # intro do działu ćwiczeń
│     ├─ dane.md                  # opis danych + mapowanie karta→CSV→zakresy
│     ├─ plan/
│     │  ├─ _category_.json
│     │  └─ 01-plan-semestru.md
│     ├─ karty/
│     │  ├─ _category_.json
│     │  ├─ zajecia-01-wprowadzenie.md
│     │  ├─ zajecia-02-pv-stacja-hulajnog.md
│     │  ├─ zajecia-03-pv-wiatr-hybryda.md
│     │  ├─ zajecia-04-biogazownia-mala.md
│     │  ├─ zajecia-05-pompa-ciepla.md
│     │  ├─ zajecia-06-bess.md
│     │  ├─ zajecia-07-analiza-trendow-i-progi.md
│     │  ├─ zajecia-08-bezpieczenstwo-i-incydenty.md
│     │  ├─ zajecia-09-kalibracja-i-walidacja-danych.md
│     │  ├─ zajecia-10-posttest-i-miniprojekt.md
│     │  └─ urzadzenia/
│     │     ├─ _category_.json
│     │     ├─ pv-stacja-hulajnog.md
│     │     ├─ pv-wiatr-hybryda.md
│     │     ├─ biogazownia-mala.md
│     │     ├─ pompa-ciepla.md
│     │     └─ bess.md
│     ├─ szablony/
│     │  ├─ _category_.json
│     │  ├─ checklista-bhp.md
│     │  ├─ formularz-raportu-incydentu.md
│     │  └─ karta-oceny.md
│     ├─ klucze/
│     │  ├─ _category_.json
│     │  ├─ zaj01_klucz.md
│     │  ├─ zaj02_klucz.md
│     │  ├─ zaj03_klucz.md
│     │  ├─ zaj04_klucz.md
│     │  ├─ zaj05_klucz.md
│     │  ├─ zaj06_klucz.md
│     │  ├─ zaj07_klucz.md
│     │  ├─ zaj08_klucz.md
│     │  ├─ zaj09_klucz.md
│     │  └─ zaj10_klucz.md
│     └─ rubryki/
│        ├─ _category_.json
│        ├─ rubryka-oceny-standard.md
│        └─ kryteria-zaliczenia.md
├─ static/
│  └─ cwiczenia/                  # zasoby do pobrania dla działu „Ćwiczenia”
│     ├─ dane/
│     │  ├─ zaj01_wprowadzenie.csv
│     │  ├─ zaj02_pv-stacja-hulajnog.csv
│     │  ├─ zaj03_pv-wiatr-hybryda.csv
│     │  ├─ zaj04_biogazownia-mala.csv
│     │  ├─ zaj05_pompa-ciepla.csv
│     │  ├─ zaj06_bess.csv
│     │  ├─ urz_pv-stacja-hulajnog.csv
│     │  ├─ urz_pv-wiatr-hybryda.csv
│     │  ├─ urz_biogazownia-mala.csv
│     │  ├─ urz_pompa-ciepla.csv
│     │  └─ urz_bess.csv
│     └─ img/
└─ src/ …
```

**Uwaga (Docusaurus w istniejącym projekcie):**

* Nowe strony dodawaj wyłącznie pod `docs/cwiczenia/...`.
* Pliki CSV oraz grafiki dostępne publicznie trzymaj pod `static/cwiczenia/dane/` oraz `static/cwiczenia/img/` i linkuj jako: `[Pobierz dane](/cwiczenia/dane/zaj05_pompa-ciepla.csv)`.
* Dodaj `_category_.json` w każdym podkatalogu `docs/cwiczenia/*` dla ładnych etykiet i indeksów.
* `sidebars.ts`: sekcja dla `cwiczenia` może być **autogenerated** z folderu `docs/cwiczenia`.

**Uwaga (Docusaurus):**

* Treści merytoryczne trafiają do `docs/…`; **wszystkie CSV i inne pliki do pobrania** umieszczaj w `static/dane/…` i linkuj w treści jako: `[pobierz dane](/dane/zaj05_pompa-ciepla.csv)`.
* Obrazy umieszczaj w `static/img/…` i linkuj jako `/img/nazwa.png`.
* W folderach `docs/*` dodaj `_category_.json` by ustawić **etykietę** i **generated index** dla kategorii.
* Użyj `sidebars.ts` z trybem `autogenerated` (na cały katalog `docs`).

### Mapowanie sekcji → foldery/pliki

* **Sekcja A — Plan semestru** → `docs/cwiczenia/plan/01-plan-semestru.md`
* **Sekcja B — Karty ćwiczeń** → `docs/cwiczenia/karty/` (10 kart wg numeru zajęć) + `docs/cwiczenia/karty/urzadzenia/` (5 kart tematycznych)
* **Sekcja C — Szablony do druku** → `docs/cwiczenia/szablony/`
* **Sekcja D — Zbiory danych (CSV)** → `static/cwiczenia/dane/` (po 1 pliku na każdą kartę + 5 dla kart tematycznych)
* **Sekcja E — Klucze odpowiedzi** → `docs/cwiczenia/klucze/` (po 1 na każdą kartę)
* **Rubryki i kryteria** → `docs/cwiczenia/rubryki/`

### Konwencje nazewnictwa (ścisłe)

* **małe litery**, **myślniki** jako separatory (`pompa-ciepla`, `pv-wiatr-hybryda`).
* **Bez spacji i polskich znaków** w nazwach plików (ą→a, ć→c, ł→l, ó→o, ś→s, ż/ź→z).
* Karty zajęć numeruj prefiksem `zajXX_` lub `zajecia-XX-…` (np. `zajecia-05-pompa-ciepla.md`).
* Dane CSV numeruj analogicznie (np. `zaj05_pompa-ciepla.csv`). (ścisłe)
* **małe litery**, **myślniki** jako separatory (`pompa-ciepla`, `pv-wiatr-hybryda`).
* **Bez spacji i polskich znaków** w nazwach plików (ą→a, ć→c, ł→l, ó→o, ś→s, ż/ź→z).
* Karty zajęć numeruj prefiksem `zajXX_` lub `zajecia-XX-…` (np. `zajecia-05-pompa-ciepla.md`).
* Dane CSV numeruj analogicznie (np. `zaj05_pompa-ciepla.csv`).

### Wymagany nagłówek YAML w każdym pliku .md

````yaml
---
title: "Zajęcia 05 — Pompa ciepła: monitoring i bezpieczeństwo"
course: "Systemy bezpieczeństwa i monitorowania instalacji OZE"
version: "1.0"
section: "B-karty"          # A-plan | B-karty | C-szablony | E-klucze | F-rubryki
duration_min: 90
level: "Średnia"
tags: ["pompa-ciepla","bezpieczenstwo","monitoring"]
links:
  data: 
    - "/cwiczenia/dane/zaj05_pompa-ciepla.csv"   # publiczny URL w serwisie
  key: 
    - "/docs/cwiczenia/klucze/zaj05_klucz"      # ścieżka dokumentu (link wewnętrzny)
---
```yaml
---
title: "Zajęcia 05 — Pompa ciepła: monitoring i bezpieczeństwo"
course: "Systemy bezpieczeństwa i monitorowania instalacji OZE"
version: "1.0"
section: "B-karty"          # A-plan | B-karty | C-szablony | D-dane | E-klucze | F-rubryki
duration_min: 90
level: "Średnia"
tags: ["pompa-ciepla","bezpieczenstwo","monitoring"]
data_files:
  - "D-dane/zaj05_pompa-ciepla.csv"
outputs:
  - "E-klucze/zaj05_klucz.md"
---
````

### Format CSV (static/cwiczenia/dane)

* **Separator**: średnik `;`
* **Nagłówki po polsku** z jednostkami w nawiasach kwadratowych, np.:
  `czas;napiecie_DC[V];prad_DC[A];moc_AC[kW];temp_modulu[°C];alarm`
* **Liczba wierszy**: 60–120 (minutowo) lub 20–40 (co 5 min) na plik.
* Każdy plik CSV musi mieć **1–2 wiersze z `alarm=TAK`**.

### Jak LLM ma publikować **wiele plików** w jednej odpowiedzi

Dla **każdego pliku** wstaw osobny blok kodu z komentarzem ścieżki w **pierwszej linii**:

```markdown
<!-- path: docs/cwiczenia/karty/zajecia-05-pompa-ciepla.md -->
# Tytuł i treść pliku…
```

```csv
# path: static/cwiczenia/dane/zaj05_pompa-ciepla.csv
czas;temp_zasilania[C];temp_powrotu[C];przeplyw[l/min];moc_sprezarki[kW];COP;alarm
...
```

> Uwaga: w blokach CSV **nie** używaj polskich znaków w nazwach kolumn (poza opisem w README), zachowaj spójność z kartami ćwiczeń.

### Pliki indeksujące i wydruk

* `docs/cwiczenia/index.md` — intro do działu, jak korzystać z materiałów.
* `docs/cwiczenia/plan/01-plan-semestru.md` — plan semestru.
* `docs/cwiczenia/kompendium/pakiet-zajec.md` — **plik zbiorczy** (A→B→C→F), możliwy do konwersji do PDF.

### Kontrola spójności odnośników

* Wszystkie odnośniki w kartach kieruj jako **relative links** w obrębie `docs/cwiczenia/...` oraz do danych: `/cwiczenia/dane/...`.
* Dodaj `docs/cwiczenia/dane.md` z tabelą **mapującą**: *karta → plik CSV → zakresy wartości*.
* Wszystkie odnośniki w kartach (do danych i kluczy) muszą wskazywać **relative paths** zgodne z drzewem katalogów.
* `D-dane/README.md` musi zawierać tabelę **mapującą**: *karta → plik CSV → zakresy wartości*.

### Minimalny przykład (fragment) — karta + dane + klucz

```markdown
<!-- path: docs/cwiczenia/karty/zajecia-02-pv-stacja-hulajnog.md -->
---
title: "Zajęcia 02 — Stacja ładowania hulajnóg + PV"
section: "B-karty"
duration_min: 90
---
# Zajęcia 02 — Stacja ładowania hulajnóg + PV
(…treść karty wg szablonu…)
```

```csv
# path: static/cwiczenia/dane/zaj02_pv-stacja-hulajnog.csv
czas;naslonecznienie[W/m2];napiecie_DC[V];prad_DC[A];moc_AC[kW];temp_modulu[C];alarm
2025-04-01 08:00;120;320;2.1;0.45;18;NIE
...
```

```markdown
<!-- path: docs/cwiczenia/klucze/zaj02_klucz.md -->
---
section: "E-klucze"
---
## Klucz odpowiedzi — Zajęcia 02
(…odpowiedzi wzorcowe…)
```

> **Instrukcja dla LLM**: Po wygenerowaniu materiałów dodaj na końcu odpowiedzi **spis plików wygenerowanych** (lista ścieżek), aby ułatwić weryfikację kompletności.
