# Fact-check F3 — W1 pages 04, 05, 06 and index (29.09.2026)

I found no critical or major errors. Every standard edition and date on page 04 matches the publisher's page, and all 10 quiz answers are correct. Proposed fixes, all minor:

| file | slide | quoted text | problem | sev. | evidence | proposed Polish text |
|---|---|---|---|---|---|---|
| 05 (and descriptor on 05 #2, 06, index #6) | Warstwy ochrony w modelu cebuli | "Kolejność warstw według CCPS …, za materiałami SAFEChE" | SAFEChE credits CCPS only for the IPL criteria. Its 9-layer figure cites an ESC consultancy page (Spencer), not CCPS. The CCPS 2015 page says only that the book "explains the onion skin model". | minor | safeche.engin.umich.edu/tutorials/lopa-tutorial; ccps.aiche.org/…/guidelines-initiating-events… | "Kolejność warstw za samouczkiem LOPA SAFEChE (University of Michigan); model cebuli opisuje też CCPS (2015)." Descriptor: "(model warstw ochrony; kryteria IPL według CCPS)" |
| 05 | Monitoring a funkcja ochronna | "BPCS zwykle realizuje sterowanie, monitoring i alarmy" | Note 2 reads "typically **may** implement various functions such as…". The slide makes it stronger than the source. | minor | IEC 61511-1:2016 sample (iTeh) | "Według uwagi 2 do tej definicji BPCS może realizować różne funkcje, np. sterowanie procesem, monitoring i alarmy." |
| 05 (+06 Q10 option 3) | McMicken 2019 warstwa po warstwie | "Detekcja gazu i wentylacja \| brak" | The DNV GL factor is "off-gases concentrated without a means to ventilate". The report never states that gas detection was missing; it only recommends gas meters for future sites (p. 32). | minor | aps.com McMicken report | Row: "Wentylacja gazów \| brak możliwości wentylacji (DNV GL); raport zaleca detektory gazów palnych \| nagromadzenie palnych gazów". Q10: "…zabrakło barier termicznych, wentylacji gazów i procedury wejścia" |
| 05 | Monitoring i ochrona w technologiach OZE | "EN 50549-1:2019" | Amendment EN 50549-1:2019/A1:2023 exists (consolidated +A1:2023, 12.2023), so the edition is not current. | minor | evs.ee/en/evs-en-50549-1-2019-a1-2023 | "EN 50549-1:2019+A1:2023" |
| 05 | same | "monitorowanie prądu różnicowego w falowniku (IEC 62109-2:2011, wg Sandia)" | Sandia gives the residual-current thresholds for transformerless (non-isolated) inverters; the slide drops that qualifier. | minor | osti.gov/servlets/purl/1313068 | "monitorowanie prądu różnicowego w falownikach beztransformatorowych (IEC 62109-2:2011, wg Sandia)" |
| 05 | same | "BMS ma stale monitorować … ale też sam awaryjnie odłączać" | Draft § 311 says "BMS or other protective means" (verified-facts). | minor | verified-facts pl-law-2026-09.md | "BMS lub inne środki ochrony mają stale monitorować napięcie, prąd i temperaturę oraz reagować awaryjnym odłączeniem baterii" |
| 05 | Kiedy warstwa jest warstwą ochrony | "(ANSI/ISA-18.2-2016, wg ISA InTech)" | InTech 2020 quotes ISA-18.2 without naming an edition; "2016" is an inference. | minor | isa.org/intech-home/2020/march-april/… | "(ISA-18.2, wg ISA InTech 2020)" |
| 05 | Jak monitoring wspiera bezpieczeństwo | "działanie SIS zablokowane obejściem … może nadal pokazywać operatorowi pomiary i alarmy (3.2.4)" | The source is an example in Note 1 (input blocked from the trip logic while still shown to the operator). The slide's subject is garbled. | minor | IEC 61511-1 sample | "Przy obejściu (ang. bypass) sygnał wejściowy może być odcięty od logiki wyłączającej, a operator nadal widzi pomiar i alarm (IEC 61511-1:2016, 3.2.4, uwaga 1)." |
| 04 | Normy wspólne dla wszystkich technologii | definition of functional safety | No source is given. It equates control systems with safety-related systems and omits "other risk reduction measures" (IEC 61508-4, 3.1.12). | minor | IEC 61508-4:2010 3.1.12 (text not openable) | "Bezpieczeństwo funkcjonalne to część ogólnego bezpieczeństwa urządzenia i jego układu sterowania, która zależy od poprawnego działania systemów elektrycznych, elektronicznych i programowalnych związanych z bezpieczeństwem oraz innych środków zmniejszania ryzyka (IEC 61508-4:2010, 3.1.12)." |
| 04 | Normy a prawo | "Norma zharmonizowana (norma europejska EN, której odniesienie opublikowano w Dz.Urz. UE)" | By definition a harmonised standard is an EN adopted on a Commission request (Reg. 1025/2012 art. 2(1)(c)). Publication in the OJ is the condition for presumption, not the definition; page 03 has this right. | minor | eur-lex CELEX:32012R1025 | "Norma zharmonizowana (norma europejska EN przyjęta na zlecenie Komisji) daje domniemanie zgodności z wymaganiami zasadniczymi po opublikowaniu jej odniesienia w Dzienniku Urzędowym UE, ale jej stosowanie też jest dobrowolne (Blue Guide 2022)." |
| 04 | Normy a prawo (notes) | "Na wykazie, który Komisja Europejska prowadzi" | The summary list is informative only. The legal basis is the OJ reference (for EN 1127-1: Decision 2020/260). | minor | ATEX page (list 17.9.2025) | "W Dzienniku Urzędowym UE (decyzje wykonawcze Komisji); pomocniczo w zestawieniu, które Komisja prowadzi dla tej dyrektywy." |
| 04 | Normy dla fotowoltaiki i energetyki wiatrowej | "od modułów do punktu przyłączenia" | IEC's scope is "up to the connection point to other parts of the installation"; "punkt przyłączenia" reads as the grid connection point. | minor | webstore.iec.ch/en/publication/65748 | "instalacje elektryczne PV od modułów do punktu połączenia z pozostałą częścią instalacji" |
| 06 | Najważniejsze wnioski | "Warstwa ochrony musi być skuteczna, niezależna i audytowalna." | These are the IPL criteria from page 05. The onion-model layers (BPCS, alarm) are protection layers even without meeting all three. | minor | SAFEChE | "Niezależna warstwa ochrony (IPL) musi być skuteczna, niezależna i audytowalna." |
| 06 | Źródła #7 | "Ramali i in. (2022)" | Author initials and volume/pages are missing. | minor | pmc.ncbi.nlm.nih.gov/articles/PMC9134713 | "Ramali M.R., Mohd Nizam Ong N.A.F., Md Said M.S. i in. (2022). … *Fire Technology* 59(1): 247–270." |

### Verified OK
- **Page 04, IEC Webstore:** all editions and dates confirmed on the publisher pages:
  - IEC 60364-7-712 ed. 3, 21.10.2025; scope includes batteries and island mode.
  - IEC 62548-1 AMD1, 15.12.2025; base scope is DC wiring, protection, switching, earthing.
  - IEC 63027:2023; IEC 61400-1 AMD1, 18.12.2025; IEC 61400-24 AMD1, 13.11.2024.
  - IEC 62446-1:2016+AMD1:2018; IEC 61730-1/-2:2023 ed. 3; IEC 61724-1:2021.
  - IEC 62109-1 ed. 2 PRV, voting 4.09–16.10.2026; IEC TS 61400-30 (general design principles).
  - IEC 62933-5-1:2024 (replaced TS 2017); IEC 62933-5-2 ed. 2, 9.12.2025; IEC 62619:2022.
  - IEC 60079-10-1:2020; IEC 60079-14 ed. 6, 30.08.2024; IEC 60079-29-0, 27.11.2025 (replaces -29-1 and -29-4); IEC 62485-5:2020.
  - ISO/IEC 80079-20-1:2017 replaced IEC 60079-20-1.
  - IEC 61508-1:2010; IEC 61511 SER 10.07.2026 (contains 2016+AMD1:2017, no ed. 3); IEC 62061 AMD2, 20.03.2026.
  - IEC 62682:2022; IEC 62443-2-1 ed. 2, 7.08.2024; IEC 62443-3-3:2013; IEC 62443-4-2:2019.
  - IEC 62351 SER 30.07.2026: parts from 2007 to 2026, incl. -7:2025 and -8:2026.
- **Page 04, other publishers:**
  - ISO: ISO 20816-21:2025 (replaced 10816-21); ISO 13849-1:2023; ISO 12100 "to be revised"; ISO/DIS 12100.3 voting closed 15.09.2026; Guide 51 confirmed; ISO 31000 at 90.92; ISO/CD 31000 comment period closed 1.03.2026; Guide 73 withdrawn 2.11.2023, replaced by ISO 31073.
  - DNV-ST-0438: 2016-04, amended 2021-11.
  - DIN Media: 61508-4 draft based on 65A/1166/CDV:2025.
  - ISA: 18.2-2016 is still current. EEMUA 191: ed. 4, 2024.
  - UL 9540A: ed. 6, 13.03.2026. NFPA 855: 2026 edition exists.
  - ATEX list: EN 1127-1:2011 withdrawn 1.02.2022 (Decision 2020/260); EN 1127-1:2019 is listed.
  - Draft WT § 305 ust. 3 matches verified-facts; EN IEC 63027:2023 exists, so "zapewne" is defensible.
- **Page 05:**
  - IEC 61511-1: 3.2.3, 3.2.4, Fig. 9 title and the 9.3 heading.
  - Derbyshire: BPCS ≤ 10 (9.3.4), at most one BPCS layer when BPCS is the initiator, proof test after repair.
  - DNVGL-SE-0439 (2016) §4.1: not a substitute, no intervention, maintenance plan.
  - Reason 2000 quotations; RR716 on the shared PLC; exida "no less than 0.5"; CHIS6 (no "per operator").
  - IEC 62682 16.3.3/16.3.4; IEC TS 62446-3 scope; Sandia thresholds; TRAS 120 2.4(7), published 21.01.2019.
  - McMicken: 16:54:30 (4,06 → 3,82 V), 16:55:20 (BMS DC breakers, inverter AC contactors), Novec 1230 "as designed", five factors, dendrites; UL 2021 on disagreement; FSRI times.
  - Carnegie Road: "explosion occurred prior to the arrival of responding fire crews".
  - 0,1 × 0,01 = 0,001, RRF 1000. Slide times 9 / 19 / 5; total 90 min.
  - The exercise answers are labelled "ocena własna" and nothing in them is unsafe.
- **Page 06:**
  - All 10 correctAnswer indices are right, each question has exactly one correct option, and numbers and hedges match pages 01–05.
  - Q3 "PSP zastrzega" is confirmed: Globenergia quotes the PSP press office.
  - EPRI 3/26 (11%) and 72% confirmed; the six takeaways are consistent with the pages.
- **index.md:** source entries confirmed (BRE P100874-1004 Issue 2.9, 11.05.2018; EPRI/TWAICE/PNNL, May 2024; DNV GL 18.07.2020); titles of W2–W10 match the syllabus; the outcomes fit the content.

### Could not verify
- **Purdue P2SAC "sterowanie i monitoring" group:** the PDF's text layer has PREVENTION, MITIGATION, emergency response and "Monitoring Systems (process alarms)" but no "Control and monitoring" label. Check the slide image.
- **DNV-SE-0439 current text (amended 2021-10):** it needs a Veracity login. The wording was confirmed only in the 2016 edition on a third-party mirror.
- **CCPS 2015 book content** and **Reason 1990 chapter origin:** the books are not accessible.
- **BSTG 2007:** it supports the conditions, but I found no numeric "0.1" in it; the number rests on RR716 and exida.
- **Other:**
  - PN-EN IEC 63027: PKN catalogue not reachable.
  - NFPA 855 issue and effective dates: the page renders only metadata.
  - Legal basis for "wiążąca, gdy przepis się odwoła" (ustawa o normalizacji): ISAP not reachable.
  - Official MFRS location of the Carnegie report: only the Cherwell council copy was found, and the bibliography labels it as such.
- **Optional:** IEC 62446-1 ed. 2 is in preparation (draft E DIN EN IEC 62446-1:2026-01), so the lecturer might add "nowe wydanie w przygotowaniu".
