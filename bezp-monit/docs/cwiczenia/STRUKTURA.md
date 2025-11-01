---
title: "Struktura katalogów — ćwiczenia laboratoryjne"
description: "Wizualizacja i opis struktury katalogów dla materiałów ćwiczeń"
---

# 🌳 Struktura katalogów — ćwiczenia laboratoryjne

## 📂 Drzewo katalogów

```
bezp-monit/
├── docs/
│   └── cwiczenia/                       # ⟵ Główny dział "Ćwiczenia"
│       ├── index.md                     # Wprowadzenie do działu
│       ├── dane.md                      # Opis zbiorów danych CSV
│       ├── STRUKTURA.md                 # Ten plik
│       ├── _category_.json              # Konfiguracja kategorii
│       │
│       ├── plan/                        # 📅 Plan semestru
│       │   ├── _category_.json
│       │   └── 01-plan-semestru.md      # ✅ Utworzone
│       │
│       ├── karty/                       # 📋 Karty ćwiczeń
│       │   ├── _category_.json
│       │   ├── zajecia-01-wprowadzenie.md         # ✅ Utworzone
│       │   ├── zajecia-02-pv-stacja-hulajnog.md   # ⏳ Do utworzenia
│       │   ├── zajecia-03-pv-wiatr-hybryda.md
│       │   ├── zajecia-04-biogazownia-mala.md
│       │   ├── zajecia-05-pompa-ciepla.md
│       │   ├── zajecia-06-bess.md
│       │   ├── zajecia-07-analiza-trendow-i-progi.md
│       │   ├── zajecia-08-bezpieczenstwo-i-incydenty.md
│       │   ├── zajecia-09-kalibracja-i-walidacja-danych.md
│       │   ├── zajecia-10-posttest-i-miniprojekt.md
│       │   │
│       │   └── urzadzenia/              # 🔧 Dokumentacja urządzeń
│       │       ├── _category_.json
│       │       ├── pv-stacja-hulajnog.md       # ⏳ Do utworzenia
│       │       ├── pv-wiatr-hybryda.md
│       │       ├── biogazownia-mala.md
│       │       ├── pompa-ciepla.md
│       │       └── bess.md
│       │
│       ├── szablony/                    # 📝 Szablony i formularze
│       │   ├── _category_.json
│       │   ├── checklista-bhp.md                # ✅ Utworzone
│       │   ├── formularz-raportu-incydentu.md    # ✅ Utworzone
│       │   └── karta-oceny.md                    # ✅ Utworzone
│       │
│       ├── klucze/                      # ✅ Klucze odpowiedzi
│       │   ├── _category_.json
│       │   ├── zaj01_klucz.md                  # ✅ Utworzone
│       │   ├── zaj02_klucz.md                  # ✅ Utworzone
│       │   ├── zaj03_klucz.md                  # ✅ Utworzone
│       │   ├── zaj04_klucz.md                  # ✅ Utworzone
│       │   ├── zaj05_klucz.md                  # ✅ Utworzone
│       │   ├── zaj06_klucz.md                  # ✅ Utworzone
│       │   ├── zaj07_klucz.md                  # ✅ Utworzone
│       │   ├── zaj08_klucz.md                  # ✅ Utworzone
│       │   ├── zaj09_klucz.md                  # ✅ Utworzone
│       │   └── zaj10_klucz.md                  # ✅ Utworzone
│       │
│       └── rubryki/                     # 📊 Rubryki oceniania
│           ├── _category_.json
│           ├── rubryka-oceny-standard.md      # ✅ Utworzone
│           └── kryteria-zaliczenia.md         # ✅ Utworzone
│
└── static/
    └── cwiczenia/                       # 📦 Zasoby publiczne
        ├── README.md                    # Opis katalogu
        │
        ├── dane/                        # 💾 Zbiory danych CSV
        │   ├── zaj01_wprowadzenie.csv
        │   ├── zaj02_pv-stacja-hulajnog.csv
        │   ├── zaj03_pv-wiatr-hybryda.csv
        │   ├── zaj04_biogazownia-mala.csv
        │   ├── zaj05_pompa-ciepla.csv
        │   ├── zaj06_bess.csv
        │   ├── zaj07_analiza-trendow.csv
        │   ├── zaj08_bezpieczenstwo-i-incydenty.csv
        │   ├── zaj09_kalibracja-i-walidacja.csv
        │   ├── zaj10_posttest-miniprojekt.csv
        │   ├── urz_pv-stacja-hulajnog.csv
        │   ├── urz_pv-wiatr-hybryda.csv
        │   ├── urz_biogazownia-mala.csv
        │   ├── urz_pompa-ciepla.csv
        │   └── urz_bess.csv
        │
        └── img/                         # 🖼️ Obrazy i diagramy
            └── (placeholders do dodania)
```

## 📋 Status implementacji

### ✅ Utworzono (podstawowa struktura)

#### Katalogi
- [x] `docs/cwiczenia/` — główny katalog
- [x] `docs/cwiczenia/plan/`
- [x] `docs/cwiczenia/karty/`
- [x] `docs/cwiczenia/karty/urzadzenia/`
- [x] `docs/cwiczenia/szablony/`
- [x] `docs/cwiczenia/klucze/`
- [x] `docs/cwiczenia/rubryki/`
- [x] `static/cwiczenia/`
- [x] `static/cwiczenia/dane/`
- [x] `static/cwiczenia/img/`

#### Pliki konfiguracyjne
- [x] Wszystkie `_category_.json` dla podkatalogów
- [x] `docs/cwiczenia/index.md` — wprowadzenie
- [x] `docs/cwiczenia/dane.md` — opis zbiorów danych
- [x] `docs/cwiczenia/STRUKTURA.md` — ten plik
- [x] `static/cwiczenia/README.md` — opis katalogu

### ✅ Sekcja A - Plan semestru
- [x] `docs/cwiczenia/plan/01-plan-semestru.md`

### ✅ Sekcja C - Szablony
- [x] `docs/cwiczenia/szablony/checklista-bhp.md`
- [x] `docs/cwiczenia/szablony/formularz-raportu-incydentu.md`
- [x] `docs/cwiczenia/szablony/karta-oceny.md`

### ✅ Sekcja D - Dane CSV (15 plików)
- [x] `static/cwiczenia/dane/zaj01_wprowadzenie.csv`
- [x] `static/cwiczenia/dane/zaj02_pv-stacja-hulajnog.csv`
- [x] `static/cwiczenia/dane/zaj03_pv-wiatr-hybryda.csv`
- [x] `static/cwiczenia/dane/zaj04_biogazownia-mala.csv`
- [x] `static/cwiczenia/dane/zaj05_pompa-ciepla.csv`
- [x] `static/cwiczenia/dane/zaj06_bess.csv`
- [x] `static/cwiczenia/dane/zaj07_analiza-trendow.csv`
- [x] `static/cwiczenia/dane/zaj08_bezpieczenstwo-i-incydenty.csv`
- [x] `static/cwiczenia/dane/zaj09_kalibracja-i-walidacja.csv`
- [x] `static/cwiczenia/dane/zaj10_posttest-miniprojekt.csv`
- [x] `static/cwiczenia/dane/urz_pv-stacja-hulajnog.csv`
- [x] `static/cwiczenia/dane/urz_pv-wiatr-hybryda.csv`
- [x] `static/cwiczenia/dane/urz_biogazownia-mala.csv`
- [x] `static/cwiczenia/dane/urz_pompa-ciepla.csv`
- [x] `static/cwiczenia/dane/urz_bess.csv`

### ✅ Sekcja E - Klucze odpowiedzi (10 kluczy)
- [x] `docs/cwiczenia/klucze/zaj01_klucz.md`
- [x] `docs/cwiczenia/klucze/zaj02_klucz.md`
- [x] `docs/cwiczenia/klucze/zaj03_klucz.md`
- [x] `docs/cwiczenia/klucze/zaj04_klucz.md`
- [x] `docs/cwiczenia/klucze/zaj05_klucz.md`
- [x] `docs/cwiczenia/klucze/zaj06_klucz.md`
- [x] `docs/cwiczenia/klucze/zaj07_klucz.md`
- [x] `docs/cwiczenia/klucze/zaj08_klucz.md`
- [x] `docs/cwiczenia/klucze/zaj09_klucz.md`
- [x] `docs/cwiczenia/klucze/zaj10_klucz.md`

### ⏳ Do utworzenia (treści merytoryczne)

#### Sekcja B - Karty ćwiczeń (10 kart)
- [x] `docs/cwiczenia/karty/zajecia-01-wprowadzenie.md`
- [ ] `docs/cwiczenia/karty/zajecia-02-pv-stacja-hulajnog.md`
- [ ] `docs/cwiczenia/karty/zajecia-03-pv-wiatr-hybryda.md`
- [ ] `docs/cwiczenia/karty/zajecia-04-biogazownia-mala.md`
- [ ] `docs/cwiczenia/karty/zajecia-05-pompa-ciepla.md`
- [ ] `docs/cwiczenia/karty/zajecia-06-bess.md`
- [ ] `docs/cwiczenia/karty/zajecia-07-analiza-trendow-i-progi.md`
- [ ] `docs/cwiczenia/karty/zajecia-08-bezpieczenstwo-i-incydenty.md`
- [ ] `docs/cwiczenia/karty/zajecia-09-kalibracja-i-walidacja-danych.md`
- [ ] `docs/cwiczenia/karty/zajecia-10-posttest-i-miniprojekt.md`

#### Sekcja B - Dokumentacja urządzeń (5 kart)
- [ ] `docs/cwiczenia/karty/urzadzenia/pv-stacja-hulajnog.md`
- [ ] `docs/cwiczenia/karty/urzadzenia/pv-wiatr-hybryda.md`
- [ ] `docs/cwiczenia/karty/urzadzenia/biogazownia-mala.md`
- [ ] `docs/cwiczenia/karty/urzadzenia/pompa-ciepla.md`
- [ ] `docs/cwiczenia/karty/urzadzenia/bess.md`

### ✅ Rubryki (2 rubryki)
- [x] `docs/cwiczenia/rubryki/rubryka-oceny-standard.md`
- [x] `docs/cwiczenia/rubryki/kryteria-zaliczenia.md`

## 🔗 Konwencje nazewnictwa

### Pliki Markdown
- Małe litery, myślniki jako separatory
- Bez polskich znaków w nazwach (ą→a, ć→c, ł→l, ó→o, ś→s, ż/ź→z)
- Prefiksy numeryczne dla kolejności: `01-`, `02-`, etc.

### Pliki CSV
- Małe litery, myślniki
- Prefiksy: `zajXX_` (karty ćwiczeń) lub `urz_` (dokumentacja urządzeń)
- Separator: średnik `;`
- Kodowanie: UTF-8

### Kategorie Docusaurus
- Każdy podkatalog zawiera `_category_.json` dla właściwej organizacji w nawigacji
- Konfiguracja `collapsed: true/false` dla eksploracji

## 📝 Nagłówek YAML

Każdy plik `.md` powinien zawierać front matter YAML:

```yaml
---
title: "Tytuł dokumentu"
description: "Krótki opis"
course: "Systemy bezpieczeństwa i monitorowania instalacji OZE"
version: "1.0"
section: "B-karty"  # A-plan | B-karty | C-szablony | E-klucze | F-rubryki
duration_min: 90
level: "Średnia"
tags: ["tag1", "tag2"]
links:
  data: 
    - "/cwiczenia/dane/zaj05_pompa-ciepla.csv"
  key: 
    - "/docs/cwiczenia/klucze/zaj05_klucz"
---
```

## 🎯 Następne kroki

1. Wygenerować treści merytoryczne zgodnie z szablonem z `_promts/cwiczenia-contekst.md`
2. Utworzyć wszystkie pliki `.md` dla kart, kluczy, szablonów i rubryk
3. Wygenerować dane syntetyczne CSV zgodnie z specyfikacją
4. Dodać obrazy i diagramy do `static/cwiczenia/img/`
5. Zweryfikować odnośniki między plikami

---

**Utworzono**: 2025-10-31  
**Status**: ✅ Sekcje A, C, D, E, Rubryki gotowe | ⏳ Sekcja B (karty 02-10 + urządzenia) w przygotowaniu
