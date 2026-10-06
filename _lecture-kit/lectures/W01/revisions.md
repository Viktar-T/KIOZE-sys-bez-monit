# Revisions — W1

## 2026-10-01 — wizualizacje: Zagrożenia w instalacjach OZE

- Change: s1 „Skala OZE w Polsce”: wariant A z `docs/propozycje` (wniosek `Claim` + kafelki `StatTiles` z paskiem udziału 48%) zamiast tabeli wskaźników; wszystkie wartości, daty i źródła tabeli są w kafelkach, więc tabela została usunięta, nie przeniesiona do „Dla chętnych”. Punkt 2: „w tej tabeli” → „w tym zestawieniu” (tabeli już nie ma). Notatki: jedno zdanie, jak używać kafelków; „z tej tabeli” → „z tych danych”; „Czas” bez zmian (~2 min). Slajdy s2–s7: bez decyzji wykładowcy, bez zmian. Wybory: `_wizualizacje/choices/wyklad-01-zagrozenia-ramy-prawne/01-zagrozenia-w-instalacjach-oze.yml`.
- Sources added: none (kafelki cytują źródła z linii „Źródło:” slajdu).
- Affects other lectures: no
- Proposed ledger update: none

- 2026-10-01, druga zmiana s1 (uwagi wykładowcy: „zachowaj oryginalną treść slajdu w Dla chętnych”): pierwotna tabela wskaźników wróciła bez zmian w bloku `<Extra title="tabela wskaźników">` przed linią „Źródło:” (ukryty w trybie prezentacji). Notatki i „Czas” bez zmian.

Proposed kit update (for the lecturer; shared files not edited):

- `bezp-monit/src/components/review/index.jsx`, „Kopiuj wybory”: slajdy bez decyzji dostają `wizualizacja: bez zmian`, tak samo jak slajdy, dla których wykładowca świadomie wybrał „bez zmian”. Krok zastosowania nie odróżni ich, a `/wizualizacje-zastosuj` usuwa wtedy nowe komponenty proponowane dla tych slajdów. Propozycja: dla slajdów bez decyzji wypisywać `wizualizacja: brak decyzji` (albo je pomijać) i dopisać tę wartość do `_wizualizacje/review-page.md`. Tym razem nowe komponenty `PvStringIsolator`, `WindTurbineHazards`, `ReportRestatement` (s4, s6, s7) zostały zachowane, bo te slajdy nie miały decyzji.
