# Notatki — ćwiczenia 02

## Co dziś jest trudne dla studenta (UX / użyteczność)

### 1) Plan i karta zajęć dublują treść, ale niespójnie

W `01-plan-semestru.md` masz opis P/R/W, ale jest tam sporo “roboczych” fragmentów:

* literówki: fajlu, ze zburem, miesąć
* niejasne: ?tydzień, miesąć, ...? To obniża zaufanie studenta i utrudnia start, bo nie wiadomo “czy to już obowiązuje”.

### 2) Brakuje “Start here” i jednoznacznego przepływu

Student ma 4 linki (karta, urządzenie, dane, klucz), ale nigdzie nie jest powiedziane:

* w jakiej kolejności je otworzyć,
* co jest obowiązkowe, a co “dla chętnych”,
* co oddać jako wynik (format, nazwa pliku, minimalny zakres).

### 3) Dane są poprawne, ale “pułapkowe” w typowych narzędziach

CSV ma:

* separator `;` (ok)
* przecinek jako separator dziesiętny w kolumnach typu 1,8 (bardzo częsty problem w Excel/Sheets w zależności od locale) Karta wspomina separator ;, ale nie ostrzega o przecinku dziesiętnym ani nie mówi jak sobie z tym poradzić w Excel/Sheets.

### 4) Dokumentacja urządzenia jest bardzo krótka (za mało, by pomóc w analizie)

`pv-stacja-hulajnog.md` ma sygnały/zakresy/progi, ale brakuje:

* mapowania “kolumna w CSV → znaczenie → jednostka → typowe zakresy → typowe anomalie”,
* krótkiego opisu inwertera i interpretacji moc_DC vs moc_AC (np. clipping/ograniczenie, wpływ temperatury).

### 5) Kryteria oceny są rozjechane między planem a kartą

W planie masz tabelę P/R/W z punktami (sumy wyglądają jakby P=5, R=6, W=6), ale całe zajęcia są “10 pkt”.

W karcie masz inną tabelę (3+4+3=10). Student (i prowadzący) nie wie, która rubryka jest “prawdziwa”.

### 6) Klucz odpowiedzi ma liczby niespójne z danymi CSV

W `zaj02_klucz.md` są przykłady typu P_DC ~4.14 kW, P_AC ~3.57 kW, oraz η≈86%. W realnym `zaj02_pv-stacja-hulajnog.csv` maksima są bliżej moc_DC ~3.72 i moc_AC ~3.21, a η wychodzi ~86% (to akurat spójne), ale konkretne wartości szczytów nie. To rodzi frustrację: “robię dobrze, a nie wychodzi jak w kluczu”.

### 7) Brakuje gotowca sprawozdania

Student ma “sprawozdanie/raport”, ale bez szablonu:

* jakie sekcje,
* jakie minimalne wykresy,
* jak nazwać pliki,
* ile zdań, jakie tabele.

## Jak to ulepszyć dla łatwiejszego użycia (konkretne propozycje)

### A) Uczyń kartę zajęć jedynym “źródłem prawdy”, a plan skróć

[W planie] zostaw tylko:

1. Cele w 2-3 punktach
2. Produkty końcowe
3. Linki do materiałów
4. Krótki opis P/R/W (bez operacyjnych instrukcji)

[W karcie zajęć] trzymaj całą instrukcję krok-po-kroku i ocenianie.

To usuwa dublowanie i niespójności.

### B) Dodaj sekcję „Szybki start (5 min)” na górze karty zajęć

Proponowana struktura (dla studenta):

1. Krok 1: pobierz CSV
2. Krok 2: zaimportuj (separator ;, liczby z przecinkiem)
3. Krok 3: zrób 2 wykresy (DC i AC)
4. Krok 4: policz η i zaznacz alarm=TAK
5. Krok 5: oddaj sprawozdanie (PDF) + arkusz

To realnie skraca onboarding.

### C) Dodaj “Data dictionary” (tabela kolumn) i typowe problemy importu

W `zajecia-02-pv-stacja-hulajnog.md` (albo w `dane.md` jako wspólny komponent) dodaj tabelę:

* Nazwa kolumny
* Opis
* Jednostka
* Typowy zakres
* Uwagi (np. “przecinek dziesiętny”, “alarm TAK/NIE”)

### D) Ujednolić ocenianie: jedna rubryka, jedna suma punktów

Wybierz jedną wersję oceniania:

* Albo “10 pkt łącznie” jak w karcie (czytelne)
* Albo P/R/W jako osobne ścieżki (wtedy w planie też powinno być “10 pkt dla P / 10 pkt dla R / 10 pkt dla W” albo jasno wytłumaczone)

Najprościej: w planie link + “ocenianie wg karty”.

### E) Napraw spójność klucza z CSV

Masz dwie opcje:

[Opcja 1: aktualizacja klucza] dopasować liczby (max/min, przykładowe godziny) do obecnego CSV.

[Opcja 2: “klucz jakościowy”] usunąć twarde liczby szczytów i zostawić:

* Jak powinny wyglądać wykresy
* Przykładowe obliczenie na konkretnym wierszu, który istnieje w CSV (np. 10:00 z pliku)

Opcja 2 jest najodporniejsza na przyszłe zmiany danych.

### F) Popraw link zewnętrzny lub dodaj lokalny skrót “opis instalacji”

W planie masz link do zewnętrznej strony. Jeśli padnie albo zmieni URL, studenci zostają bez kontekstu.

Minimum: dopisz “jeśli link nie działa, użyj dokumentacji urządzenia + zdjęć/opisu poniżej”.

Lepiej: dodać krótką lokalną sekcję “Opis instalacji” (nawet 5-10 zdań + schemat).

### G) Szablon sprawozdania (1 strona) jako osobny plik lub sekcja w karcie

Nawet jeśli nie chcesz tworzyć nowego pliku, możesz wkleić w kartę:

Struktura:

* Cel
* Dane i import (1-2 zdania)
* Wykresy
* Sprawność (tabela 3 punktów czasowych)
* Anomalie (alarm=TAK) + hipotezy
* Wnioski BHP + plan reakcji (W)

To dramatycznie poprawia “co mam oddać?”.

## Minimalny zestaw zmian, które bym zrobił w pierwszej kolejności

Jeśli chcesz szybkie “80/20”, to:

[1] W `01-plan-semestru.md`:

* usunąć robocze znaki zapytania i literówki,
* skrócić opis zajęć 2 do linków + 3-4 bulletów.

[2] W `zajecia-02-pv-stacja-hulajnog.md`:

* dodać “Szybki start”
* dodać tabelę kolumn (data dictionary)
* dopisać wskazówki importu (separator ; + liczby z przecinkiem)
* doprecyzować wymagany format oddania.

[3] W `zaj02_klucz.md`:

* dopasować liczby/przykłady do realnego CSV, albo przejść na “klucz jakościowy”.

## Pytanie doprecyzowujące (żeby dobrać najlepszy UX)

Chcesz, żeby student:

* **[A]** pracował głównie w Excel/Google Sheets,
* **[B]** w Pythonie (np. notebook),
* **[C]** dowolnie?

Od tego zależy, czy lepiej dodać instrukcję importu pod arkusze, czy gotowy snippet w Pythonie.

## Status

Zanalizowałem wszystkie pliki powiązane z Zajęcia 2: Monitoring instalacji PV i wskazałem konkretne miejsca tarcia dla studentów oraz zestaw ulepszeń.

Jeśli chcesz, przygotuję dokładną listę edycji “linia po linii” dla 2-3 plików (plan/karta/klucz). W Ask mode mogę to rozpisać, a w Code mode mogę to od razu wdrożyć.