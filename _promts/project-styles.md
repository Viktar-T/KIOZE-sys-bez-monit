# Instrukcje stylów dla LLM (projekt Docusaurus / OZE)

## Cel
Niniejszy dokument definiuje jednoznaczne zasady stylowania, których LLM MUSI przestrzegać przy generowaniu treści (MD/MDX) i komponentów React dla projektu OZE.

## Podstawy (MUST)
- Twórz treści po polsku, w tonie akademickim (5. semestr OZE), z właściwą terminologią.
- W MDX używaj wyłącznie globalnych klas z `src/css/custom.css` (np. `slide-card`, `instructor-notes`).
- W komponentach React stosuj CSS Modules (`*.module.css`) i import `styles` (np. `styles.featureCard`).
- Korzystaj ze zmiennych Infima (`var(--ifm-...)`) dla kolorów/obramowań/akcentów.
- Zapewnij kompatybilność z trybem ciemnym – jeżeli dodajesz niestandardowe tła/obramowania, przewidź wariant `[data-theme='dark']`.
- Zachowaj responsywność (co najmniej breakpoint ≤ 768 px), opieraj układy na flex/grid.

## Ograniczenia formatowania (MUST)
- Używaj sensownego Markdownu: nagłówki `##`/`###`, listy wypunktowane `-`, kod z trzema backtickami.
- W treści nie umieszczaj HTML, jeśli istnieje równoważna klasa globalna.
- Nie nadpisuj inline styli (np. `style="..."`).
- Nie powielaj klas istniejących w `custom.css` ani nie twórz nowych globalnych klas.

## Globalne klasy do użycia w MDX (SHOULD)
- Układy i karty:
  - `two-column-layout`, `column` — układ 2‑kolumnowy.
  - `feature-grid`, `feature-card` — siatka i karta funkcji.
  - `card-grid`, `tool-card` — siatka kart narzędzi.
- Tytuły i nagłówki (czytelność):
  - Wbudowane poprawki do `.markdown h2` — nie obcinać tytułów.
- Progres i formularze:
  - `progress-section`, `progress-item`, `progress-label`, `progress-bar`, `progress-fill`.
  - `form-group`, `radio-label`.
- Komponenty slajdów:
  - Kontener: `slide-container`, `slide-card`, `slide-title`, `slide-content`.
  - Warianty: `slide-info`, `slide-tip`, `slide-warning`, `slide-danger`, `slide-success`.
  - Bloki: `key-points-box` (+ `-title`, `-content`), `supporting-details-box` (+ `-title`, `-content`), `warning-box`, `success-box`, `info-box`.
  - Nawigacja/progres: `slide-navigation`, `slide-nav-button`, `slide-progress`, `slide-progress-bar`, `slide-progress-fill`, `slide-progress-text`.
  - Separatory: `slide-separator`, `visual-separator`.
- Notatki prowadzącego:
  - Kontener: `instructor-notes` (na `<details>`),
  - Nagłówek: `instructor-notes-summary`,
  - Treść: `instructor-notes-content`.

## Zasady użycia (DO / DON’T)
- DO: łączyć klasy globalne z semantyką slajdów (np. `slide-card slide-tip`).
- DO: używać list max. 5–7 punktów na slajd; każdy slajd z jedną tezą.
- DO: w komponentach React używać klas z `*.module.css` przez `styles.<className>`.
- DON’T: stosować nieznanych klas globalnych; trzymaj się katalogu powyżej.
- DON’T: stosować stylów inline i niestandardowych atrybutów HTML dla wyglądu.
- DON’T: obcinać tytułów; upewnij się, że tekst się zawija.

## Wzorce wyjścia (MDX)
Przykład slajdu „wskazówka” z kluczowymi punktami:
```mdx
<div className="slide-card slide-tip">
  <div className="slide-title">Dobór oprogramowania dla instalacji PV</div>
  <div className="slide-content">
    <div className="key-points-box">
      <div className="key-points-title">Najważniejsze kryteria</div>
      <div className="key-points-content">
        <ul>
          <li>Modele produkcji energii i dane meteorologiczne</li>
          <li>Modelowanie zacienienia i geometrii</li>
          <li>Biblioteki komponentów (moduły, inwertery)</li>
          <li>Walidacja wyników i raportowanie</li>
        </ul>
      </div>
    </div>
  </div>
</div>
```

Notatki prowadzącego w `<details>`:
```mdx
<details className="instructor-notes">
  <summary className="instructor-notes-summary">Uwagi metodyczne</summary>
  <div className="instructor-notes-content">
    <ul>
      <li>Porównaj wyniki z danymi pomiarowymi (PVGIS / lokalne stacje).</li>
      <li>Omów wpływ zacienienia godzinowego na uzysk roczny.</li>
    </ul>
  </div>
</details>
```

Układ 2-kolumnowy dla porównań:
```mdx
<div className="two-column-layout">
  <div className="column">
    <strong>Podejście A (narzędzie 1)</strong>
    <ul>
      <li>Model uproszczony</li>
      <li>Szybkie obliczenia</li>
    </ul>
  </div>
  <div className="column">
    <strong>Podejście B (narzędzie 2)</strong>
    <ul>
      <li>Model szczegółowy</li>
      <li>Lepsza dokładność</li>
    </ul>
  </div>
</div>
```

## Wzorce wyjścia (React + CSS Modules)
Plik: `src/components/HomepageFeatures/styles.module.css` zawiera m.in. `.featureCard` i `.featureSvg`.
Użycie:
```jsx
import styles from './styles.module.css';

export function FeatureCard({children, href}) {
  return (
    <a className={styles.featureCard} href={href}>
      {children}
    </a>
  );
}
```

## Kolory i zmienne (Infima)
- Główna paleta jest ustawiona w `:root` (jasny) i `[data-theme='dark']` (ciemny) w `src/css/custom.css`.
- Używaj `var(--ifm-color-primary)` i pochodnych zamiast stałych HEX w komponentach.
- Dla wyróżnień (np. paski progresu) używaj istniejących klas (`progress-fill`) zamiast nadpisywać kolory inline.

## Tryb ciemny (MUST)
- Każdy nowy element z niestandardowym tłem/obramowaniem wymaga wariantu `[data-theme='dark']`.
- Unikaj obrazów/ikon bez wersji ciemnej; jeśli to konieczne, zadbaj o kontrast (min. WCAG AA).

## Responsywność (SHOULD)
- Zachowuj czytelność kart/slajdów poniżej 768 px (patrz sekcja media query w `custom.css`).
- W siatkach stosuj `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));` (już dostępne w `feature-grid`/`card-grid`).

## Integracja z konfiguracją Docusaurus
- `docusaurus.config.js` -> `theme.customCss: './src/css/custom.css'` – jedyne miejsce na globalne style.
- Motywy Prism: jasny (`github`), ciemny (`dracula`). Nie modyfikuj z poziomu treści.

## Checklista przed publikacją (MUST)
- Tekst po polsku, ton akademicki, precyzyjna terminologia OZE.
- Brak styli inline i nieznanych klas; użyto wyłącznie klas z listy.
- Tytuły nieobcięte (zawijają się), treść czytelna w jasnym i ciemnym trybie.
- Układ responsywny; brak przepełnień w widoku mobilnym.
- W MDX: klasy globalne; w React: CSS Modules z `styles`.

---
Jeśli konieczne są nowe wzorce wizualne, zaproponuj wariant zgodny z obecnym schematem (semantyczna nazwa + odpowiednik w `[data-theme='dark']`, wsparcie responsywności) i dodaj go do `src/css/custom.css` – nie twórz jednorazowych styli w treści MDX.
