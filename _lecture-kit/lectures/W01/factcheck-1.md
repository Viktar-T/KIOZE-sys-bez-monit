# Fact-check F1 — W1 page 01 (29.09.2026)

## F1: fact-check of page 01 (`/mnt/user-data/outputs/lecture/wyklad-01-zagrozenia-ramy-prawne/01-zagrozenia-w-instalacjach-oze.mdx`)

The page is in good shape: there are no critical errors, 2 major issues and 11 minor ones. I edited no files.

### Issues

| file | slide | quoted text | problem | sev. | evidence | proposed Polish text |
|---|---|---|---|---|---|---|
| 01 | Wiatr: skąd brać wiarygodne dane | "TRIR 3,48" … "TRIR 2,93" | The slide puts TRIR figures from two reports next to each other, so it reads as a rise of about 19%. The EI 2026 release says TRIR "rose slightly by 4% to 3.48", which puts 2024 at about 3,35. It says hours worked were "+5%" on 2024, which gives about 66 mln, while the 2025 release gave 79 mln. The slide shows only the lost-work-day correction (95 vs 99). | major | energyinst.org …offshore-wind-safety-improves… ; …unprecedented-growth… | „Raport za 2025 r.: 69,2 mln godzin (+5% wobec 2024 r.), TRIR 3,48 (+4%), brak wypadków śmiertelnych. Raport za 2024 r. podawał dla 2024 r. 79 mln godzin, TRIR 2,93 i 99 urazów z utratą dni pracy (raport za 2025 r.: 95). Kolejne raporty przeliczają rok poprzedni, więc 3,48 nie porównujemy z 2,93.” |
| 01 | BESS: przebieg niekontrolowanego wzrostu temperatury | mermaid `E --> F["Odgazowanie…"]` | The diagram shows gas release only after 250 °C or more. Feng 2018 reports the first venting at 100–110 °C (electrolyte vapour), a second at about 250 °C and a third after thermal runaway. This matters for safety: gas can build up before any flame (McMicken). | major | https://doi.org/10.3389/fenrg.2018.00126 | Add the node `B --> V["ok. 100–110 °C: pierwsze odgazowanie (pary elektrolitu)"]` and a bullet: „Odgazowanie zaczyna się przed dużym zwarciem wewnętrznym (ok. 100–110 °C); najwięcej gazów palnych powstaje podczas niekontrolowanego wzrostu temperatury (Feng i in., 2018).” |
| 01 | same | "Zwarcie wewnętrzne wyzwala proces" | Feng says the internal short "is critical to trigger the oxidation-reduction reaction" and "is not the major heat source". Self-heating starts earlier (78,2 °C), so "wyzwala proces" contradicts the diagram. | minor | Feng | „Duże zwarcie wewnętrzne wyzwala reakcje redoks katoda–anoda; to one, a nie samo zwarcie, są głównym źródłem ciepła (Feng i in., 2018).” |
| 01 | Wiatr: główne zagrożenia | "EU-OSHA … proponuje windę w wieżach od 60 m i drugą drogę ewakuacji" | Wrong attribution. The ≥ 60 m lift is from an ad hoc working group of Member State authorities and industry (Table 4). The second escape route is cited from Kensche (2006). EU-OSHA only reports both. | minor | osha.europa.eu PDF | „Przegląd EU-OSHA (2013) przytacza zalecenie grupy roboczej władz państw UE i przemysłu (winda w wieżach od 60 m) oraz propozycję drugiej drogi ewakuacji z literatury.” |
| 01 | PV: co mówią dane o pożarach | "wyniki pośrednie projektu"; "75 z dużymi szkodami" | The release is titled "Results of Expert Workshop" (24.01.2013) and does not call the results interim. It also does not say whether the 75 large-damage cases are among the 120 PV-caused fires or the 350 fires involving PV. The notes assume the 120. | minor | ise.fraunhofer.de 2013 | Reservation column: „wyniki warsztatu eksperckiego (24.01.2013); 350 pożarów z udziałem PV, 120 spowodowanych przez PV, 75 z dużymi szkodami (komunikat nie precyzuje grupy)” |
| 01 | Jak czytać statystyki wypadków (slide + notes) | "PSP zastrzega, że to obecność PV…" | I could not verify that PSP makes this reservation: Globenergia timed out on 5 attempts. Gramwzielone states the caveat in its own words. The verified PSP-side statement is Bednarczyk's. | minor | ppoz.pl Bednarczyk; gramwzielone | „To zdarzenia z obecnością PV na miejscu, a nie pożary spowodowane przez PV: rejestr PSP nie ma kategorii »przyczyna: PV« (Bednarczyk, 2022).” |
| 01 | Wiatr: główne zagrożenia | "federalny urząd USA ds. bezpieczeństwa na morzu" | BSEE oversees offshore energy on the Outer Continental Shelf. General maritime safety is the US Coast Guard's job. | minor | bsee.gov | „federalny urząd USA nadzorujący bezpieczeństwo i ochronę środowiska w morskiej energetyce” |
| 01 | PV: napięcie DC i łuk elektryczny | link "[KG PSP, 2022]" | The page is a republication by KP PSP Wołomin (file `SZP_PV_KG_PSP_21_03_2022`). I found no copy hosted by KG PSP. The title and date are correct. | minor | gov.pl/web/kppsp-wolomin/… | „[KG PSP, 2022 — udostępnione przez KP PSP Wołomin]” |
| 01 | PV DC (notes) | "wyłączamy bezpiecznik i obwód za nim jest martwy" | This teaches that switching off makes a circuit dead, without checking for absence of voltage. | minor (safety) | — | „…po wyłączeniu wyłącznika obwód za nim traci zasilanie (przed pracą i tak sprawdzamy brak napięcia).” |
| 01 | Wiatr: skąd brać wiarygodne dane | "Najbardziej systematyczną publiczną statystyką są dane G+" | This is an evaluation that no source makes. | minor | — | Add „(ocena własna)”. |
| 01 | Źródła, item 9 | "Ramali i in. (2022)… Fire Technology. Springer." | No initials, volume or pages. | minor | link.springer.com | „Ramali M.R., Mohd Nizam Ong N.A.F., Md Said M.S., Mohamed Yusoff H., Baharudin M.R., Tharima A.F., Akashah F.W., Mohd Tohir M.Z. (2022). A Review on Safety Practices for Firefighters During Photovoltaic (PV) Fire. *Fire Technology* 59(1): 247–270 (online 23.05.2022).” |
| 01 | Źródła, item 6 | "Sepanski A., Reil F., Vaaßen W., Schmidt H. (2015). Bewertung…" | The author list is cut short without "i in." and the title is shortened. | minor | Leitfaden PDF | „Sepanski A., Reil F., Vaaßen W., Schmidt H. i in. (2015). *Leitfaden: Bewertung des Brandrisikos in Photovoltaik-Anlagen und Erstellung von Sicherheitskonzepten zur Risikominimierung*, 2. wyd. (VII 2015).” |
| 01 | Źródła, items 23 and 46 | Feng: no volume. TRAS 120 credited to "KAS". | TRAS 120 was announced by the federal environment ministry (BMU) in the Bundesanzeiger on 21.01.2019; KAS hosts the reading version. | minor | Crossref; TRAS PDF | Feng: „*Frontiers in Energy Research* 6: 126.” TRAS: „BMU (2019). TRAS 120… (BAnz 21.01.2019; wersja do czytania: KAS).” |

### Verified OK
- **PSE Table 1.1:** 77 331 MW total and 37 106 MW "Elektrownie wiatrowe i inne odnawialne". 2024 was 31 823 MW, so +5 283 MW (≈5,3 GW); share 48,0%. PV has no separate row.
- **URE (19.03.2026):** 1 636 673 micro-installations, "niemal 13,9 GW", 99,9% PV, 1 612 450 prosumers.
- **KOWR (3.06.2026):** 209 plants and 188,8 MW as of 28.05.2026; „Odpady stanowiły ok. 91%” of feedstock (2025).
- **Baltic Power:** first energy 10.07.2026; about 1,2 GW (76 × 15 MW).
- **Ramali:** the "no single point to isolate" quote; > 20 mA through the body even under foam, citing ref. 52 (Bosco et al. 2015, IEEE PVSC).
- **AGBF/DFV (2023-04):** distance class N-1-5 (spray 1 m, full jet 5 m) for DC ≤ 1500 V. The slide gives no distances.
- **Fraunhofer 2013:** about 1,3 mln installations, "last 20 years", 120 PV-caused fires, 75 with large damage; 75/1,3 mln = 0,0058%.
- **Leitfaden 2015:** causes split roughly into thirds.
- **BRE (Issue 2.9, 11.05.2018):** VII 2015 – II 2018; 80 fires, 58 caused by PV. DC isolators about 30% of incidents; poor installation the largest identified cause. Root causes 21 + 3 + 6 + 28 unknown = 58. Seven water-ingress cases, all through upward-facing glands; several cables in one gland; 2 under-rated isolators.
- **Bednarczyk:** 411 events, 128 caused by PV; the percentages sum to 100,0; no PV cause category.
- **Wind:**
  - BSEE ordered the suspension of production and construction, preservation of evidence and a risk analysis for personnel.
  - Uadiale: chances of external firefighting "very slim".
  - Podławki: 6.08.2023, about 100 m, 200 m zone.
  - Katsaprakakis: four damage causes; lightning damage every 8,4 years per turbine in a US study.
  - IEA Task 19 (ed. 2, 2022): site-specific assessment.
  - CWIF via EU-OSHA: 1370 accidents since 1970, from press reports or official releases, "only 9%".
  - Gramwzielone: 5–8 turbine fires a year (2021–2025).
- **G+ / Energy Institute figures:** 69,2 mln h, TRIR 3,48 and no deaths for 2025; 1 fatality, TRIR 2,93 and manual handling 121 for 2024; lost-work-day injuries 95 vs 99.
- **Feng:** 20 Ah cell with NCM + LMO (1:1) cathode; 78,2 / ~130 / ~192 / ≥ 250 / > 800 °C.
- **DNV GL:** clean agents "demonstrably ineffective" on thermal runaway. It names HF and HCN (p. 22, footnote 8), so HCN in the hazard map is supported.
- **Shen:** 0,569 vs 1,814–2,752 L/Ah; H₂ 50,82% for LFP; hazard ranking by flammability limit puts LFP highest.
- **Larsson:** 20–200 mg HF per Wh; 5 kWh gives 100–1000 g.
- **EPRI:** 81 events, 26 with root cause, 3 (11%) cells; integration, assembly and construction the most common category; 72% early in life; −97% 2018–2023. The text gives no denominator, and Fig. 1 plots cumulative GW deployed against incidents, so "zestawia z wielkością wdrożeń" is the correct wording.
- **McMicken:**
  - DNV GL (18.07.2020): 2 MW / 2 MWh NMC; smoke alarm 16:55:20; door opened 20:02 (about 3 h later).
  - FSRI: 4 firefighters seriously injured.
  - UL 2021: "disagreement (for example on root cause)".
- **Moss Landing:**
  - WECC report: Western Electricity Coordinating Council; details as on the slide; "does not constitute a root cause analysis".
  - EPA (updated 25.09.2026): about 56 000 of 100 000 modules burned in 2025. On 18.09.2026 about 1300 damaged modules burned, no injuries, precautionary shelter-in-place.
  - CPUC (14.07.2026): investigation ongoing.
- **Czajków:** 107,5 tys. cells, 2 MW / about 2 MWh, 24 fire units, 65 evacuated, re-ignitions, no casualties mentioned.
- **Biogas:**
  - Gas data: GisChem 4,4 / 17%; ICSC 0291 5–15% (2000); SVLFG 6–22% for 60% CH₄. ICSC 0165: 5/10 ppm, relative density 1,19, smell may not warn above the exposure limit. NIOSH IDLH 100 ppm.
  - H₂S limits: NDS 7 / NDSCh 14 mg/m³ match verified-facts; they convert to 5,02 and 10,04 ppm at 25 °C.
  - Incidents and rules: UBA 2006 on Rhadereistedt; Casson Moreno 169 accidents and "almost 12%"; UBA about 70% of inspected plants; TRAS 120 published 21.01.2019.
- **Other:**
  - The illustrative example (50 vs 40 per 100 000, ×4, −20%) is correct.
  - Slide times add up to 26 min, as in the index.
  - IEC 62485-5:2020 is current.
  - No percent sign written with a space.

### Could not verify
- **Globenergia (145 → 808, "PSP zastrzega"):** the page timed out on every attempt.
- **Vineyard Wind "no BSEE findings, IX 2026":** no BSEE publication found. The latest press (Vineyard Gazette, 6.05.2026) says the investigation is ongoing.
- **Casson Moreno "1995–2014":** not in the abstract; seen only in a ResearchGate summary. The full text returned 429.
- **Other:** GESTIS (JavaScript page), ISAP 447 and the KG PSP PDF content could not be opened; I relied on verified-facts where it covers them. The Bosco original was not opened.
- **WECC region:** also covers parts of Canada and Mexico — from my own knowledge, so "sieci zachodnich USA" is a simplification.
