# Fact-check 1: W2 pages 01 and 02 (29.09.2026)

Files 01 and 02 were checked, not edited. Sources were read with WebFetch because curl is blocked (403). `calc_A.py` passes, and I recomputed its values.

**Summary:** no critical or major errors. There are 13 minor issues: modality, attribution and hedging.

Evidence URLs:
- [IEC61882] https://cdn.standards.iteh.ai/samples/20730/64bc0f1bde424e8083959f2d3c4567a2/IEC-61882-2016.pdf
- [TRAS] https://www.kas-bmu.de/files/publikationen/TRAS/TRAS%20(endgueltige%20Fassung)/LesefassTRAS120.pdf
- [Stanley] https://www.icheme.org/media/16956/hazards-28-paper-50.pdf
- [ISO31000] https://webstore.ansi.org/preview-pages/ISO/preview_ISO+31000-2018.pdf
- [Cox] https://pubmed.ncbi.nlm.nih.gov/18419665/
- [Uadiale] https://publications.iafss.org/publications/fss/11/983/view/fss_11-983.pdf
- [SVLFG] https://cdn.svlfg.de/fiona8-blobs/public/svlfgonpremiseproduction/45b79757c1f38081/ce7f71d90169/ti04-sicherheitsregeln-biogasanlagen.pdf
- [IEC31010] https://www.assp.org/docs/default-source/standards-documents/preview/31010_2019_wms_preview.pdf?sfvrsn=75159747_2
- [Jenkins] https://www.icheme.org/media/9063/xxiii-paper-67.pdf

## Issues

| # | File | Slide | Quoted text | Problem | Sev. | Evid. | Proposed Polish text |
|---|---|---|---|---|---|---|---|
| 1 | 02 | Zespół i przebieg badania HAZOP (slide + notes) | „wspierany przez protokolanta”; notes „Norma wymaga … protokolanta” | 4.1: the leader is "preferably assisted by a recorder". Nothing makes a recorder required. | minor | IEC61882 | Slide: „…prowadzący, najlepiej wspierany przez protokolanta; badanie opiera się na specjalistach z różnych dziedzin.” Notes: „Norma przewiduje prowadzącego, najlepiej z protokolantem, oraz specjalistów z różnych dziedzin.” |
| 2 | 02 | Słowa przewodnie; also Przykład HAZOP: ciśnienie and Od wyników (Blokada) | „wymaga, by pochodnia miała pierwszeństwo” | 2.1(14) says "Die Zusätzliche Gasverbrauchseinrichtung muss Vorrang…". 1.4(28) defines that device as "Fackel oder Gasbrenner", and 2.6.3(3) also says "(zusätzlichen) Gasverbrauchseinrichtungen". | minor | TRAS | „…by dodatkowe urządzenie do spalania biogazu (np. pochodnia) miało pierwszeństwo przed zadziałaniem zabezpieczenia nadciśnieniowego.” |
| 3 | 01 | Kryteria tolerowalności ryzyka | „wskazują np. 10⁻⁵ /rok albo ostrożniej 10⁻⁶ /rok” | 10⁻⁵ is the midpoint of the ALARP zone. 10⁻⁶ is for companies that "prefer to aim for the broadly acceptable risk line to reduce the onus on demonstrating ALARP", not an extra margin of caution. The order-of-magnitude cut is "generally considered appropriate". | minor | Stanley §5.4 | „Stanley i in. (2018) przytaczają praktykę obniżania granicy nietolerowanej dla pracowników o rząd wielkości (do 10⁻⁴ /rok) i proponują cel w środku obszaru ALARP, 10⁻⁵ /rok; firmy, które chcą ograniczyć ciężar wykazywania ALARP, mogą przyjąć 10⁻⁶ /rok.” |
| 4 | 01 | Kryteria tolerowalności ryzyka | „ustala organizacja lub regulator … (ISO 31000:2018, 6.3.4)” | ISO 31000 is addressed to the organization, so "regulator" cannot be attributed to 6.3.4. | minor | ISO31000 | „Kryteria ryzyka organizacja określa przed oceną ryzyka (ISO 31000:2018, 6.3.4); wartości liczbowe może też narzucać regulator (ocena własna).” |
| 5 | 01 | Ograniczenia matrycy ryzyka | „i nadaje tę samą ocenę”; „wyższe ryzyko trafia do niższej kategorii” | The source's modality is lost. Cox says matrices "can assign identical ratings"; Baybutt 2016 says reversals "may occur". | minor | Cox; RF §3 | „…i może nadać tę samą ocenę…” / „Baybutt (2016) opisuje możliwe odwrócenie rankingu: wyższe ryzyko może trafić do niższej kategorii, a niższe do wyższej.” |
| 6 | 02 | HAZID i SWIFT na etapie koncepcji | „wyładowania wymieniane jako pierwsza przyczyna zapłonu” | The ranking comes from CWIF statistics compiled "through press reports", and the authors call the records poor. The hedge is only in the notes, but spec §2 requires a visible hedge. | minor | Uadiale | „turbiny wiatrowe: wyładowania na pierwszym miejscu wśród przyczyn zapłonu w zestawieniu doniesień prasowych (CWIF), za Uadiale i in. 2014” |
| 7 | 02 | Od wyników HAZOP do wymagań (table, O₂ row) | „kontrola dozowania powietrza (SVLFG TI 4)” | TI 4 limits the dosing pump but does not require O₂ measurement. Its only O₂ figure is a start-up criterion (CH₄ > 30%, O₂ < 3%). | minor | SVLFG | „kontrola dozowania powietrza (ocena własna na podstawie SVLFG TI 4)” |
| 8 | 02 | Od wyników HAZOP do wymagań (notes) | „osobnych urządzeń … niezależnych od pomiaru ruchowego” | 2.6.3(3) only says "separat von der Gasfüllstandsmessung". "Niezależnych" suggests IPL independence. | minor | TRAS | „TRAS wymaga, by urządzenia sygnalizujące minimum i maksimum były wykonane oddzielnie od pomiaru napełnienia, a minimum i maksimum zgłaszał system ochronny.” |
| 9 | 01 | Ocena ryzyka w polskim prawie (notes + slide) | notes „Metody żaden przepis nie narzuca”; slide „ani liczbowych kryteriów” | VF-W02 establishes method-neutrality only for KP and rozp. ogólne BHP, and says nothing on numerical criteria. | minor | VF-W02 | Notes: „Metody nie narzuca ani Kodeks pracy, ani rozporządzenie ogólne BHP.” Slide: „…nie wskazują metody oceny; liczbowych kryteriów w nich nie znaleźliśmy (sprawdź tekst jednolity w ISAP).” |
| 10 | 01 | Proces ISO 31000 i miejsce metod | „Połączenie rodzin z krokami ISO 31000 to ocena własna.” | IEC 31010 has Table A.3 "Applicability of techniques to the ISO 31000 process", which the slide does not mention. | minor | IEC31010 | „IEC 31010 podaje zastosowanie technik w procesie ISO 31000 (tabl. A.3); uproszczone przypisanie na schemacie to ocena własna.” |
| 11 | 01 | Matryca ryzyka: budowa (notes) | „reguła sumy indeksów … odpowiada mnożeniu … w skali logarytmicznej” | This holds only if C1–C5 are also spaced by a constant factor, and here they are verbal categories. | minor | textbook | „…odpowiada mnożeniu częstości przez skutek, jeśli kolejne kategorie skutków różnią się o stały czynnik; tu przyjmujemy to umownie.” |
| 12 | 02 | Słowa przewodnie IEC 61882 (notes) | „co najmniej pięć instalacji, które wybuchły przy pierwszym uruchomieniu” | After "powietrze w przewodach" the sentence implies air as the cause. Jenkins: plants "are reported to have exploded"; commissioning standards were not followed (pressure testing, inert-gas purging, hot-work permits), and welding was implicated. | minor | Jenkins | „Według przeglądu Jenkinsa i współautorów co najmniej pięć instalacji miało wybuchnąć przy pierwszym uruchomieniu; autorzy wskazują na niestosowanie zasad rozruchu, m.in. przedmuchu gazem obojętnym i zezwoleń na prace niebezpieczne pożarowo.” |
| 13 | 02 | HAZOP: zamierzenie projektowe i odchylenie | „[właściwość] pozwala określić jej istotne cechy” | "Cecha" is the defined term for characteristic (3.1.1, lesson 17); using it for "features" blurs the distinction the slide teaches. | minor | IEC61882 | „…składnik części, który pozwala opisać jej zasadnicze znamiona (ang. essential features), np. materiał, czynność, urządzenie.” |

## Verified OK

- **R2P2:**
  - "Only for very limited categories of risk" (para 3).
  - Paras 130/132/133/136 match the coordinator's first-hand read, including "guideline", "rarely bite" and 1/5000 = 2 × 10⁻⁴.
- **Netherlands:** RIVM: grenswaarde 10⁻⁶ for "(zeer) kwetsbare gebouwen en kwetsbare locaties (artikel 5.7)". IPLO agrees.
- **ISO 31000:**
  - Clause titles 6.2–6.7 and 6.4.1–6.4.4.
  - iso.org: "not a certifiable" standard, stage 90.92 "to be revised".
  - ISO/CD 31000, ed. 3, comment period closed 2026-03-01.
- **IEC 31010:2019:**
  - Ed. 2.0 (stability 2027); cl. 1 scope; cl. 7; Tables A.1 and A.2.
  - Annex B numbers are correct (B.5.6 = ETA, B.5.7 = FTA; B.10.3 matrix).
  - HAZID is not a listed technique.
- **ISO 17776:2016:**
  - Ed. 2, confirmed 2022, offshore production installations.
  - Annex F = HAZID guidewords; 4.6 checklists.
  - 6.3.2, 7.3.1 and 8.3.2 are each "Hazard identification".
- **Polish law and PKN** (against VF-W02 and VF):
  - KP art. 207 § 1 and art. 226 (quote verbatim); Dz.U. 2026 poz. 1245.
  - § 2 pkt 7 verbatim; § 39a ust. 1 and ust. 3; MG 2010 § 7; Dz.U. references.
  - PN-N-18002:2011 title and current status; PN-EN 61882:2016-07 and PN-IEC 61882:2005 status.
- **CIOP-PIB:** 3 × 3 scheme for the 2000 edition. The link is http, while spec §5 asks for https.
- **Cox 2008:** all points match the abstract.
- **Matrix:** all 25 cells, 10 A / 9 T / 6 N, the "do 100 razy" argument and the pairs on "Ograniczenia" are correct.
- **IEC 61882:2016:**
  - Ed. 2.0 current (stability 2028).
  - Definitions 3.1.1 (pressure, temperature, voltage), 3.1.4, 3.1.5 (redline element → property), 3.1.6, 3.1.11.
  - 4.1, 4.2 ("undesirable (or desirable)"); 6.2–6.5; 6.5.6 "Follow-up and responsibilities".
  - Annex A and Annex B; excluded variants; Tables 1 and 2.
- **TRAS 120:**
  - 12/2018, BAnz AT 21.01.2019 B4, amendment 2019; no newer version.
  - 1.5.1 names no method.
  - 2.1(6), 2.1(14), 2.3(6), 2.4(3), 2.4(7), 2.4(8) (O₂ on "Druckseite des Biogasverdichters"), 2.6.3(3) (full text) and 2.6.3(6) are all correctly used.
  - 2.4(3): the first fetch returned only its first sentence, so the lecturer should check it once by eye.
- **SVLFG TI 4 (November 2015):** ≤ 6%, pump sizing, Rückschlagventil, H₂S 0,01–0,4 Vol%.
- **Calculations:** O₂ 1,186% ≈ 1,2%; 100–4000 ppm.
- **H₂S and methane:**
  - OSHA 100–150 ppm.
  - ICSC 0165 (1,19; odour "may be absent above the OEL").
  - ICSC 0291 5–15%.
  - GisChem 4,4/17%, the same as W1.
- **Incidents:** UBA 2006 (Rhadereistedt); Jenkins 2012 (2005 event); DNV GL 2020 ("off-gases concentrated without a means to ventilate").
- **Other sources:** IEC 63027:2023; EU-OSHA; Salm 2017; Severi 2022; IEC 62682:2022 cl. 9 "Rationalization".
- **W1 consistency:** all W1 links resolve. W1 terms are given by link only and none is redefined.

## Could not verify

- **R2P2 paras 130–136, first-hand:** WebFetch truncates at about para 98.
- **ISO 31000 6.3.4 and 6.4.4 text:** the preview has the table of contents only (#4).
- **IEC 61882 5.3 wording:** not in any preview I could open (RF §7 records it as partly verified).
- **IEC 31010 Table A.3 content** (#10).
- **Baybutt 2015, 2016, 2018 abstracts and volume/pages:** Wiley returned 403 and api.crossref.org returned 429 (not retried).
- **Polish law and PKN:**
  - "No numerical criteria" (#9) is not in verified-facts.
  - The ISAP ID WDU20101380931 is reused from W1 and not in verified-facts.
  - The PKN URLs for PN-EN 61882:2016-07 and PN-IEC 61882:2005 come from search results; sklep.pkn.pl cannot be fetched.
- **Polish guide-word renderings** against the withdrawn PN-IEC 61882:2005: no access to the text.
- **GESTIS page:** empty to WebFetch (JavaScript). I relied on VF-W01, and GisChem confirms the values.
