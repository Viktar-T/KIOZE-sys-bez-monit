# Accepted fixes — Lecture W1 (apply all; files in /mnt/user-data/outputs/lectures/wyklad-01-zagrozenia-ramy-prawne/)

> Kit note (29.09.2026): paths below refer to the 2026-09 session (`/home/claude/lectures_work/`, `/mnt/user-data/outputs/lectures/`). The research notes are now in `_lecture-kit/research/W01-W02/`.

General rules:
- Keep the style and format of WRITING_SPEC.md (/home/claude/lectures_work/WRITING_SPEC.md).
- Polish only.
- Keep slide titles unique and plain.
- Update each slide's "Źródło:" line and each page's "## Źródła" list when you add or remove a source.
- For any NEW source URL, open it first (WebFetch) and confirm that it supports the text. If a URL cannot be confirmed, do not add the claim; keep the old text, or hedge it and report back.
- Do not touch the Polish-law content the coordinator verified in ISAP/RCL except where listed below: Prawo budowlane, Dz.U. 2025 poz. 1847, WT, the RCL draft, NDS, DZPW, UDT.

## 01-zagrozenia-w-instalacjach-oze.mdx

1. **Water on PV (CRITICAL).** Replace the bullet "Według straży pożarnych i ubezpieczycieli (Niemcy, 2013) instalację PV można gasić wodą z odległości 1–5 m, jak inne urządzenia elektryczne." with a correct statement:
   - German fire-service recommendation AGBF/DFV (2023), referring to DIN VDE 0132, low voltage: minimum distance for water is 1 m with a spray jet (prąd rozproszony) and 5 m with a solid jet (prąd zwarty).
   - Other guidelines give larger distances (Ramali et al. 2022 review: e.g. UL ≥ 6 m fog; CAL FIRE 10 m).
   - In Poland, PSP procedures apply.
   - Find and verify the official AGBF/DFV document URL on agbf.de or feuerwehrverband.de. If you cannot, cite Ramali et al. 2022 (PMC copy https://pmc.ncbi.nlm.nih.gov/articles/PMC9134713/) for DIN VDE 0132 distances, if it states them.
   - Update the instructor note if it repeats the 1–5 m claim.
2. **Methane flammability limits.** Table and notes: use "DGW 4,4% obj., GGW 17% obj. (wartości wg ISO/IEC 80079-20-1 stosowane w UE w ochronie przeciwwybuchowej i przy kalibracji detektorów; 100% DGW = 4,4% obj.); starsze źródła, np. ICSC 0291 (2000), podają 5–15% obj." Source: GisChem data sheet of BG RCI/BGHM for methane, https://www.gischem.de/download/01_0-000074-82-8-000000_2_1_1255.PDF — verify that it shows UEG 4,4 / OEG 17 Vol.-%. Optionally add biogas ≈ 6–22% obj. from SVLFG TI 4, but only if verified. Update the instructor note, which says "od pięciu do piętnastu procent".
3. **G+ slide.**
   - Replace "Jedyną audytowaną, publiczną statystyką wypadków jest G+ …" with "Najbardziej systematyczną publiczną statystyką jest G+ …: dane zgłaszane przez firmy członkowskie, z jawnym mianownikiem (przepracowane godziny)".
   - Adjust the notes ("Wiarygodne dane ma G+ …") in the same way.
4. **UBA bullet.** Replace it with: "UBA (2019): przy kontrolach od lat stwierdzano istotne braki w zabezpieczeniach w ok. 70% skontrolowanych biogazowni (w 2018 r. w Niemczech działało ok. 9000 instalacji). Odpowiedzią była TRAS 120 (ogłoszona 21.01.2019)." First check the wording on the UBA page.
5. **BESS cases table.**
   - Czajków: "kilkukrotne ponowne zapłony"; instead of "bez poszkodowanych" write "komunikaty PSP nie informują o poszkodowanych".
   - Notes: "pierwszy dobrze udokumentowany przypadek w Polsce" → "dobrze udokumentowany w komunikatach PSP przypadek z Polski".
   - Moss Landing: "pożar w trakcie testu pojemności (WECC wskazuje wysoki SOC podczas testów jako czynnik ryzyka)".
   - 2026 bullet: "zapaliła się część uszkodzonych modułów pozostawionych w budynku (EPA: ok. 1300)". Remove "wciąż naładowanych".
   - Keep the lesson bullet: "Energia zostaje …" becomes "Uszkodzone moduły pozostają zagrożeniem długo po pożarze …", without claiming a charge state.
   - McMicken cause: "wg DNV GL: wada wewnętrzna ogniwa (osadzanie litu, dendryty); inne raporty (UL FSRI, Exponent) i producent ogniw oceniają przyczynę inaczej". Cite the UL executive summary, https://collateral-library-production.s3.amazonaws.com/uploads/asset_file/attachment/31718/Executive_Summary_for_DNVGL_APS_Report_Responses.pdf; verify first that it says the reports disagree.
6. **Vineyard Wind.** Replace "prowadzi własne dochodzenie. Przyczyna nie została opublikowana." with "BSEE wszczęło własne dochodzenie; jego wyników nie opublikowano (stan IX 2026)." Do not add the GE claim.
7. **Thermal runaway diagram and bullets (Feng 2018).**
   - "ponad 700 °C" → "ponad 800 °C" (in the mermaid label and the notes). Verify against Feng.
   - "jednego badanego ogniwa NCM" → "jednego ogniwa 20 Ah z katodą NCM/LMO (Feng i in., 2018)".
8. **20 mA bullet.** Give the context: "Nawet po pokryciu modułów pianą gaśniczą napięcie mogło wywołać prąd przez ciało powyżej 20 mA (Bosco i in., 2015, za Ramali i in., 2022)." Verify in the PMC copy.
9. **"Jak czytać statystyki" slide.**
   - "globalny wskaźnik awarii sieciowych BESS" → "wskaźnik awarii wielkoskalowych magazynów BESS (grid-scale)". Keep "liczony na zainstalowaną GWh" only if you can verify it in EPRI or in https://www.energy-storage.news/battery-storage-failure-incident-rate-dropped-97-between-2018-and-2023/; otherwise drop the denominator phrase.
   - PSP events: "wzrosły ze 145 (2020) do 808 (2024, dane do 10.11.2024)". Verify on the Globenergia page.
10. **LFP/NCM table (Shen et al. 2023).** Remove the row "Temperatura wyzwolenia procesu" (it could not be verified), unless you can verify it in Table 3 of the paper. Keep the verified rows.
11. **BRE notes.** "woda dostawała się przez dławnice skierowane do góry" → "w 7 przypadkach woda dostała się przez dławnice skierowane do góry".

## 02-pojecia-podstawowe.mdx

12. **"Hierarchia zmniejszania ryzyka".** Replace "(zalecenie WECC po Moss Landing)" with "(kierunek branży opisany przez WECC po Moss Landing: odejście od magazynów w dużych halach)". Fix the notes ("WECC zalecił kontenery …") in the same way.
13. **PN-EN ISO 12100.** Note that PN-EN ISO 12100-1:2005 (quoted by CIOP-PIB) is withdrawn and that the current standard is PN-EN ISO 12100:2012. Verify on the PKN catalogue if possible; otherwise write "obecnie obowiązuje PN-EN ISO 12100 (wersja z 2012 r.)" only if confirmed.

## 03-ramy-prawne-ue-i-polska.mdx

14. **RfG thresholds (major).** Replace the bullet on type thresholds with the Polish thresholds:
    - moduły wytwarzania energii typ A from 0,8 kW to < 200 kW; typ B from 200 kW; typ C from 10 MW; typ D from 75 MW or connected at ≥ 110 kV (decision of the President of URE of 16.07.2018);
    - the RfG maxima for Continental Europe (1/50/75 MW) as context;
    - verify on https://www.pse.pl/kodeksy/rfg (or other pse.pl/ure.gov.pl pages);
    - if verified, add "nowe wymogi ogólnego stosowania PSE (zatw. 15.05.2025) stosuje się dla typów B–D od 1.12.2025, dla typu A od 1.01.2027".
    Update the notes ("Kodeks RfG obejmuje go jednak jako jednostkę typu A" stays correct). Also fix the table row "RfG (UE) 2016/631 | jednostki wytwórcze od 0,8 kW, typy A–D" → "moduły wytwarzania energii od 0,8 kW, typy A–D".
15. **KSC.**
    - "wniosek o wpis do rejestru" → "wniosek o wpis do wykazu podmiotów kluczowych i ważnych".
    - "audyt do 3.04.2028" → "pierwszy audyt (tylko podmioty kluczowe) do 3.04.2028".
    - Apply the same in the notes and on the BHP slide.
16. **NCCS.** Replace "terminy do 2031" with "wdrażanie etapami w kolejnych latach", unless you verify a better official timeline.
17. **Omnibus IV.** Replace "nadal projekt" with "projekt; 9.06.2026 wstępne porozumienie Rady i Parlamentu Europejskiego, formalnie nieprzyjęty (IX 2026)". Verify on consilium.europa.eu and cite it.
18. **Source 13.** "Bellini N." → "Bellino N.".
19. **Notes on "Prawo budowlane" and "Projekt nowych WT".** Replace the causal claims "To bezpośredni wniosek z wypadków takich jak McMicken." and "Wiele z tych wymagań to wnioski z pożarów, …" with wording like "Wymóg jest zbieżny z wnioskami z dochodzeń po pożarach, takich jak McMicken".
20. **"Kto za co odpowiada", PSP row.** Change the basis to "Prawo budowlane art. 29, 33 i 56 ust. 1, RM 2012".

## 04-normy.mdx

21. **UL 9540A.** The 6th edition was published 13.03.2026. Verify at https://www.shopulstandards.com/ProductDetail.aspx?productId=UL9540A_6_S_20260313 and update the text, the "Źródło" line and the bibliography. The notes mention "nowe wydania mają UL 9540A i NFPA 855", which is fine.
22. **IEC 62351.** "części wydawane w latach 2023–2026" → "części z lat 2007–2026, m.in. nowe wydania z lat 2023–2026".
23. **IEC 61511.** "wyd. 3 nieopublikowane do VII 2026" → "wyd. 3 nieopublikowane (stan IX 2026); pakiet SER z 10.07.2026 zawiera wyd. 2016+AMD1:2017". In the notes, "wciąż obowiązują" → "są aktualne", because standards are voluntary. Rename bibliography item 21 to "IEC 61511 SER (pakiet z 10.07.2026, zawiera wyd. 2016+AMD1:2017)".

## 05-monitoring-a-warstwy-ochrony.mdx

24. **CHIS6.** "HSE: w normalnej pracy nie więcej niż 1 alarm na 10 min na operatora" → "HSE (CHIS6): długoterminowa średnia w normalnej pracy — nie więcej niż 1 alarm na 10 min".
25. **Alarm credit.** Rewrite as: "Reakcję operatora na alarm można zaliczyć z PFD nie mniejszym niż 0,1 (czyli redukcja ryzyka najwyżej 10) tylko gdy …". Add: "exida zaleca PFD ≥ 0,5, jeśli system alarmowy nie został zracjonalizowany, a jego działanie nie jest mierzone". Verify in exida.
26. **BPCS credit.** "IEC 61511-1:2016 (pkt 9.3) pozwala przyjąć dla warstwy w BPCS zmniejszenie ryzyka ≤ 10" → add "dla BPCS niezaprojektowanego według IEC 61511". Keep it hedged "wg Derbyshire".
27. **McMicken layer table.**
    - Row "Detekcja gazu, wentylacja, odciążenie wybuchowe | brak" → "Detekcja gazu i wentylacja | brak".
    - Row "BMS i monitoring": DNV GL shows that the protection system opened DC breakers and AC contactors at 16:55:20. Write: "zarejestrował spadek napięcia …; system ochrony otworzył wyłączniki DC i styczniki AC ok. 16:55:20" | "odłączenie nie zatrzymało zwarcia wewnętrznego w ogniwie". Verify in the DNV GL report.
    - Bullet "Monitoring zadziałał poprawnie, ale jego dane posłużyły do analizy po zdarzeniu" → "Monitoring i odłączenie zadziałały, ale ani pomiar, ani odłączenie nie zatrzymują zwarcia wewnętrznego w ogniwie; dane posłużyły do analizy po zdarzeniu."
    - Notes "środek gazowy nie chłodzi ogniw" → "środek gazowy gasi płomień, ale nie chłodzi ogniw na tyle, by zatrzymać niekontrolowany wzrost temperatury".
28. **Swiss-cheese notes.** "Model Reasona powstał w medycynie" → "Model powstał w badaniach awarii złożonych systemów technicznych (Reason, 1990); w artykule z BMJ (2000) autor zastosował go w medycynie."
29. **"Jak monitoring wspiera bezpieczeństwo".** The sentence "W instalacjach bez stałej obsługi reakcja zdalnego operatora bywa powolna, dlatego główny ciężar spoczywa na automatyce." is the author's assessment. Label it "(ocena własna)" and remove NREL from that slide's source line unless NREL supports something else on the slide.
30. **DNV-SE-0439.** Replace the dbassetservices.com URL everywhere in W1 with the official page https://www.dnv.com/energy/standards-guidelines/dnv-se-0439-certification-of-condition-monitoring/ (verify it) and cite it as "DNV, DNV-SE-0439 Certification of condition monitoring, wyd. 06.2016 (zm. 10.2021)".
31. **SAFEChE.** "SAChE" → "SAFEChE" everywhere in W1 (index.md, 05, 06).

## 06-podsumowanie.mdx

32. **Takeaway bullet.** "w PV prąd stały, którego nie da się wyłączyć w dzień" → "w PV napięcie DC z oświetlonych modułów, którego nie usuwa rozłącznik przy falowniku".
33. **Quiz Q9.** Rewrite the correct option and the explanation: "Wewnętrznego zwarcia w ogniwie nie zatrzyma ani pomiar, ani odłączenie baterii; zabrakło niezależnych warstw: barier termicznych, detekcji gazu z wentylacją i procedury wejścia." The other options must stay clearly wrong.
34. **Quiz Q10.** "w 2024 r. 808 zdarzeń" → "do 10.11.2024 odnotowano 808 zdarzeń".
35. **Quiz Q3 explanation.** Remove "(ok. 260 °C)" unless verified.
36. **Summary bibliography.** Keep it consistent with the changes (DNV-SE-0439, UL 9540A ed. 6 if listed, etc.).

## After editing
- Update /home/claude/lectures_work/w1_claims.md for every changed or new claim.
- Re-run the MDX compile check on all W1 files (as in WRITING_SPEC.md, e.g. /tmp/mdxcheck) and fix any errors.
- Report back (≤ 400 words):
  - each fix: done / changed differently (why) / not done (why);
  - every new URL you verified.
