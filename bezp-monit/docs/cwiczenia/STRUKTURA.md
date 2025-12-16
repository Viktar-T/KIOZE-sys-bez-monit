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
│       │   ├── zadanie-01-pv-stacja-hulajnog.md   # ✅ Utworzone
│       │   ├── zadanie-02-vawt-magazyn.md
│       │   ├── zadanie-03-biogazownia-mala.md
│       │   ├── zadanie-04-pompa-ciepla.md
│       │   ├── zadanie-05-bess.md
│       │   │
│       │   └── urzadzenia/              # 🔧 Dokumentacja urządzeń
│       │       ├── _category_.json
│       │       ├── pv-stacja-hulajnog.md       # ✅ Utworzone
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
│       │   ├── zad01_klucz.md                  # ✅ Utworzone
│       │   ├── zad02_klucz.md                  # ✅ Utworzone
│       │   ├── zad03_klucz.md                  # ✅ Utworzone
│       │   ├── zad04_klucz.md                  # ✅ Utworzone
│       │   ├── zad05_klucz.md                  # ✅ Utworzone
│       │   └── (kolejne klucze w przygotowaniu)
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
│       │   ├── zad01_pv-stacja-hulajnog.csv
│       │   ├── zad02_vawt-magazyn.csv
│       │   ├── zad03_biogazownia-mala.csv
│       │   ├── zad04_pompa-ciepla.csv
│       │   ├── zad05_bess.csv
│       │   │
        └── img/                         # 🖼️ Obrazy i diagramy
            └── (placeholders do dodania)

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

### ✅ Sekcja D - Dane CSV (5 plików)
- [x] `static/cwiczenia/dane/zad01_pv-stacja-hulajnog.csv`
- [x] `static/cwiczenia/dane/zad02_vawt-magazyn.csv`
- [x] `static/cwiczenia/dane/zad03_biogazownia-mala.csv`
- [x] `static/cwiczenia/dane/zad04_pompa-ciepla.csv`
- [x] `static/cwiczenia/dane/zad05_bess.csv`

### ✅ Sekcja E - Klucze odpowiedzi (5 kluczy)
- [x] `docs/cwiczenia/klucze/zad01_klucz.md`
- [x] `docs/cwiczenia/klucze/zad02_klucz.md`
- [x] `docs/cwiczenia/klucze/zad03_klucz.md`
- [x] `docs/cwiczenia/klucze/zad04_klucz.md`
- [x] `docs/cwiczenia/klucze/zad05_klucz.md`

### ⏳ Do utworzenia (treści merytoryczne)

#### Sekcja B - Karty ćwiczeń (5 kart)
- [x] `docs/cwiczenia/karty/zadanie-01-pv-stacja-hulajnog.md`
- [x] `docs/cwiczenia/karty/zadanie-02-vawt-magazyn.md`
- [x] `docs/cwiczenia/karty/zadanie-03-biogazownia-mala.md`
- [x] `docs/cwiczenia/karty/zadanie-04-pompa-ciepla.md`
- [x] `docs/cwiczenia/karty/zadanie-05-bess.md`

#### Sekcja B - Dokumentacja urządzeń (5 kart)
- [x] `docs/cwiczenia/karty/urzadzenia/pv-stacja-hulajnog.md`
- [x] `docs/cwiczenia/karty/urzadzenia/pv-wiatr-hybryda.md`
- [x] `docs/cwiczenia/karty/urzadzenia/biogazownia-mala.md`
- [x] `docs/cwiczenia/karty/urzadzenia/pompa-ciepla.md`
- [x] `docs/cwiczenia/karty/urzadzenia/bess.md`

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
 - Prefiksy: `zadXX_` (dane do zadań)

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
