---
title: "W99: Test wizualizacji — grafika na slajdach"
sidebar_position: 99
draft: true
---

# W99: Test wizualizacji — grafika na slajdach

## Przegląd i cele kształcenia

Strona testowa dla prowadzącego, widoczna tylko w `npm start` (szkic). Pokazuje, jak slajdy z W1 i W2 mogą wyglądać z grafiką zamiast tabel i list: wykresy z prawdziwymi danymi, schematy rysowane według konwencji z literatury i kalkulatory, w których studenci zmieniają jeden parametr. Każdy slajd odwołuje się do konkretnego slajdu z W1 lub W2 i używa tych samych liczb.

## Części

| Część | Co pokazuje | Slajdy |
|---|---|---|
| [1. Dane i liczby](./01-dane-i-liczby.mdx) | kafelki z liczbami, mapa ciepła, wykres gofrowy, krzywa temperatury, skale gazów, przełącznik mianownika, rozkład RPN | 7 |
| [2. Modele i schematy](./02-modele-i-schematy.mdx) | lejek ISO 12100, trójkąt ALARP, cebula, ser szwajcarski McMicken, bow-tie, Mermaid: Ishikawa, kwadranty, Gantt | 8 |
| [3. Kalkulatory interaktywne](./03-kalkulatory.mdx) | matryca ryzyka z pułapkami Coxa, drzewo niezdatności, drzewo zdarzeń, LOPA, PFDavg, β w 1oo2 | 6 |
| [4. Zdjęcia, filmy i materiały dla chętnych](./04-zdjecia-i-filmy.mdx) | zdjęcie z atrybucją, link zamiast kopii, film od wybranego momentu, blok niewidoczny w prezentacji | 4 |

Wszystkie slajdy działają w trybie prezentacji (▶ Prezentacja) i w trybie ciemnym.

## Zasady, na których opierają się przykłady

- **Jedno twierdzenie, jeden dowód.** Nad grafiką jedno zdanie z wnioskiem (`<Claim>`), pod nim grafika jako dowód. W badaniu z udziałem 110 studentów inżynierii taki układ dał lepsze rozumienie i mniej błędnych przekonań niż slajdy z punktorami (Garner i Alley, 2013).
- **Etykiety na rysunku.** Opis przy elemencie, którego dotyczy, a nie w legendzie czy osobnej tabeli; kolor nigdy nie jest jedynym nośnikiem znaczenia (zawsze także ikona lub tekst).
- **Budowanie krok po kroku.** Złożone rysunki (krzywa ucieczki termicznej) mają przyciski „Dalej”, żeby rysunek rósł razem z komentarzem.
- **Bez ozdobników.** Każdy element pokazuje liczbę albo mechanizm; zdjęcia i ikony dekoracyjne obniżają zrozumienie (efekt spójności, Mayer).
- **Interakcja tam, gdzie parametr zmienia wniosek.** Suwaki dla β, interwału testów i uznania warstwy, z pytaniem do sali; symulacje z podpowiedziami poprawiają wyniki nauki (metaanaliza SRI, 2014).

## Komponenty

Import w pliku MDX: `import { FaultTree } from '@site/src/components/viz';`

| Komponent | Co rysuje | Dane |
|---|---|---|
| `Claim`, `Replaces` | zdanie z wnioskiem; notka „zastępuje slajd…” | tekst |
| `StatTiles` | kafelki z liczbami, pasek udziału | `items`, `share` |
| `HazardHeatmap` | tabela jako mapa ciepła | domyślnie W1; `groups` |
| `Waffle` | wykres gofrowy 10 × 10 | `categories`, `funnel` |
| `RateToggle` | liczba zdarzeń a wskaźnik | `data` |
| `ThermalRunaway` | krzywa temperatury ogniwa krok po kroku | W1 |
| `GasScales` | CH₄ (% obj., DGW) i H₂S (ppm, skala log.) | W1, W2 |
| `RpnHistogram` | rozkład RPN dla skal 1–10 i skal Tavnera | liczone |
| `HierarchyFunnel` | metoda trzech kroków ISO 12100 | `levels` |
| `AlarpCarrot` | trójkąt HSE z suwakiem ryzyka | R2P2 |
| `OnionLayers` | model cebuli z grupami IEC 61511 | CCPS |
| `SwissCheese` | McMicken w modelu Reasona | DNV GL |
| `BowTie` | bow-tie ze stanem barier | TRAS 120 |
| `RiskMatrix` | matryca 5 × 5 i pułapki Coxa | W2 |
| `FaultTree` | drzewo niezdatności z β i drugim wentylatorem | W2 |
| `EventTree` | drzewo zdarzeń z suwakiem zapłonu | `fIE`, `pFail` |
| `LopaWaterfall` | LOPA jako schodki, luka i SIL | `ief` |
| `PfdSawtooth` | PFD(t) i interwał testów | `required` |
| `BetaBars` | 1oo2: część niezależna i wspólna | `lambda`, `hours` |

Zdjęcia i filmy: `import { Figure, MediaLink, Video, Extra } from '@site/src/components/media';`

| Komponent | Co pokazuje | Dane |
|---|---|---|
| `Figure` | zdjęcie lub rysunek z podpisem i atrybucją (plik w `img/`) | `src`, `alt`, `caption`, `author`, `license`, `licenseUrl`, `source`, `sourceUrl` |
| `MediaLink` | karta z linkiem do materiału bez wolnej licencji | `href`, `title`, `source`, `kind`, `note` |
| `Video` | film YouTube lub Vimeo wczytywany po kliknięciu, od `start` do `end` | `youtube`, `title`, `channel`, `start`, `end`, `watched` |
| `Extra` | blok „Dla chętnych”, ukryty w trybie prezentacji | `title` |

Jak dodawać grafikę, zdjęcia i filmy do prawdziwych części wykładu: `_wizualizacje/README.md` w repozytorium (poza stroną).

Komponenty nie mają zależności poza React: rysunki to SVG, kolory to zmienne CSS z wariantem ciemnym (`src/components/viz/viz.module.css`), a paletę kategorii sprawdzono pod kątem daltonizmu dla obu motywów.

## Źródła do zasad

- Garner J.K., Alley M.P., *How the design of presentation slides affects audience comprehension: a case for the assertion–evidence approach*, International Journal of Engineering Education 29(6), 2013: [PDF](https://writing.engr.psu.edu/ae_comprehension.pdf)
- Mayer R.E., *How multimedia can improve learning and instruction* (omówienie zasad i wielkości efektów), Chartered College of Teaching: [artykuł](https://my.chartered.college/impact_article/how-multimedia-can-improve-learning-and-instruction/)
- D'Angelo C. i in., *Simulations for STEM Learning: Systematic Review and Meta-Analysis*, SRI International, 2014: [PDF](https://www.sri.com/wp-content/uploads/2021/12/simulations-for-stem-learning-full-report.pdf)
- Cox L.A., *What's wrong with risk matrices?*, Risk Analysis 28(2), 2008: [PubMed](https://pubmed.ncbi.nlm.nih.gov/18419665/)
