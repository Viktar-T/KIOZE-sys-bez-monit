# Claims ledger — W1: Zagrożenia w instalacjach OZE, ramy prawne i warstwy ochrony

> Kit note (29.09.2026): some rows about Polish law are marked SECONDARY, UNVERIFIED or ISAP-LISTING. They were later read in ISAP/RCL and the slides were corrected; `_lecture-kit/verified-facts/` is authoritative. Paths below refer to the 2026-09 session (`/home/claude/lectures_work/`, `/mnt/user-data/outputs/lectures/`).

Stan: 29.09.2026 (zaktualizowano po poprawkach FIXES_W1 tego samego dnia). Output: `/mnt/user-data/outputs/lectures/wyklad-01-zagrozenia-ramy-prawne/`.
Arithmetic: `/home/claude/lectures_work/w1_checks.py` (all asserts pass). Structure/URL lint: `/home/claude/lectures_work/w1_lint.py` (LINT OK).

Status codes:
- **VERIFIED**: marked VERIFIED in the research notes.
- **SECONDARY**: marked SECONDARY / VERIFIED-SECONDARY in the notes; shown on the slide with a visible hedge ("wg …") and link.
- **ADDED+VERIFIED**: I opened the official/standards-body page myself on 29.09.2026 (WebFetch).
- **ISAP-LISTING**: title and Dz.U. number seen as an official isap.sejm.gov.pl search-result listing (ISAP blocks fetching); text not opened; slide says "sprawdź w ISAP".
- **INFERENCE**: synthesis stated in the notes' "Inferences" from verified facts; framed as teaching synthesis.
- **TEXTBOOK**: uncontroversial fundamental.
- **ILLUSTRATIVE**: assumed numbers, labelled "Przykład ilustracyjny — dane umowne"; arithmetic in w1_checks.py.
- **UNVERIFIED → hedged**: UNVERIFIED in notes; stated only as "sprawdź …" or omitted.

## 01-zagrozenia-w-instalacjach-oze.mdx

| file | slide title | claim (short) | source URL | status |
|---|---|---|---|---|
| 01 | Skala OZE w Polsce | KSE total 77 331 MW; wind+other RES 37 106 MW (31.12.2025); ≈48% | https://www.pse.pl/dane-systemowe/funkcjonowanie-kse/raporty-roczne-z-funkcjonowania-kse-za-rok | VERIFIED (48% computed) |
| 01 | Skala OZE w Polsce | +5,3 GW in 2025 (31 823 → 37 106 MW) | same PSE | VERIFIED (computed) |
| 01 | Skala OZE w Polsce | 1 636 673 micro-installations, ~13,9 GW, 99,9% PV (end 2025) | https://www.ure.gov.pl/pl/urzad/informacje-ogolne/aktualnosci/13173,Raport-URE-w-Polsce-mamy-juz-ponad-16-mln-mikroinstalacji-OZE.html | VERIFIED |
| 01 | Skala OZE w Polsce | 209 agricultural biogas plants, 188,8 MWe (28.05.2026) | https://www.gov.pl/web/kowr/aktualna-sytuacja-na-rynku-biogazu-rolniczego-w-polsce-06-2026 | VERIFIED |
| 01 | Skala OZE w Polsce | Baltic Power first power 10.07.2026, up to 1,2 GW | https://balticpower.pl/aktualnosci/morska-farma-wiatrowa-baltic-power-po-raz-pierwszy-wyprodukowa%C5%82a-i-dostarczy%C5%82a-energi%C4%99-z-morza-dla-polskiej-sieci-energetycznej/ | VERIFIED (company source; labelled "inwestor") |
| 01 | Mapa zagrożeń: energia, ogień, gazy | PV DC cannot be switched off; arcs at DC connectors/isolators | Fraunhofer 2013; BRE 2018 | VERIFIED |
| 01 | Mapa zagrożeń: energia, ogień, gazy | Wind: arcs/shock in turbine; nacelle fire at height | EU-OSHA 2013 PDF; Uadiale 2014 | VERIFIED |
| 01 | Mapa zagrożeń: energia, ogień, gazy | BESS: electricity, short circuit, gas, fire, explosion hazards (IEC 62485-5 scope); HF/CO/HCN; deflagration | https://webstore.iec.ch/en/publication/29086 ; DNV GL 2020 | VERIFIED |
| 01 | Mapa zagrożeń: energia, ogień, gazy | Biogas: CH4 explosion, H2S toxic, O2 deficiency; releases/fires/explosions | ICSC 0291/0165; Casson Moreno 2016 | VERIFIED |
| 01 | Mapa zagrożeń: ludzie, otoczenie, cyber | Blade failure, ice throw; ladders, rescue | BSEE; IEA Task 19; EU-OSHA | VERIFIED |
| 01 | Mapa zagrożeń: ludzie, otoczenie, cyber | Falling burning parts (Podławki 200 m zone); BESS evacuation (Czajków 65 people) | KP PSP Kętrzyn; KW PSP Poznań | VERIFIED |
| 01 | Mapa zagrożeń: ludzie, otoczenie, cyber | Biogas over/under-pressure; releases to environment (TRAS 120) | https://www.kas-bmu.de/files/publikationen/TRAS/TRAS%20(endgueltige%20Fassung)/LesefassTRAS120.pdf | VERIFIED |
| 01 | Mapa zagrożeń: ludzie, otoczenie, cyber | PV "spadające moduły podczas akcji gaśniczej", "prace na dachu"; cyber cells | notes (pv_bess Q2 inference; eu_legal Q5 inference) | INFERENCE |
| 01 | PV: napięcie DC i łuk elektryczny | No single isolation point; energised in light | https://doi.org/10.1007/s10694-022-01269-4 | VERIFIED |
| 01 | PV: napięcie DC i łuk elektryczny | 1000–1500 V DC; even with foam 0,5–10 cm on modules, >20 mA through skin (Bosco 2015 via Ramali) | https://pmc.ncbi.nlm.nih.gov/articles/PMC9134713/ (PMC copy of https://doi.org/10.1007/s10694-022-01269-4) | ADDED+VERIFIED (FIXES_W1, 29.09.2026) (secondary citation, hedged "Bosco i in., 2015, za Ramali i in., 2022") |
| 01 | PV: napięcie DC i łuk elektryczny | DC arc no current zero; series vs parallel arcs; OCPD blind to series arc | — | TEXTBOOK (notes inference) |
| 01 | PV: napięcie DC i łuk elektryczny | IEC 63027:2023 scope: detection/optional interruption, series arcs, ≤1500 V DC | https://webstore.iec.ch/en/publication/27362 | VERIFIED |
| 01 | PV: napięcie DC i łuk elektryczny | AGBF/DFV (2023-04), DIN VDE 0132:2018-07: low voltage N-1-5 = 1 m spray jet, 5 m solid jet | https://www.agbf.de/downloads-fachausschuss-vorbeugender-brand-und-gefahrenschutz/28-fa-vbg-oeffentlich-empfehlungen?download=397%3A2023-04-photovoltaikanlagen | ADDED+VERIFIED (FIXES_W1, 29.09.2026) (old Fraunhofer 2013 "1–5 m" claim removed) |
| 01 | PV: napięcie DC i łuk elektryczny | Other guidelines larger: UL ≥ 6 m (20 ft) with fog pattern; CAL FIRE 10 m (33 ft) | https://pmc.ncbi.nlm.nih.gov/articles/PMC9134713/ (Table 7) | ADDED+VERIFIED (FIXES_W1, 29.09.2026) |
| 01 | PV: napięcie DC i łuk elektryczny | "W Polsce obowiązują procedury PSP" | — | jurisdiction statement (no specific procedure cited) |
| 01 | PV: co mówią dane o pożarach | DE: ~1,3 mln systems; 120 PV-caused; 75 large damage; 0,006% | https://www.ise.fraunhofer.de/en/press-media/press-releases/2013/fire-protection-in-photovoltaic-systems.html | VERIFIED (0,006% recomputed) |
| 01 | PV: co mówią dane o pożarach | Leitfaden 2015: ~1/3 components, planning, installation | https://www.ise.fraunhofer.de/content/dam/ise/de/downloads/pdf/Leitfaden_Brandrisiko_in_PV-Anlagen_V02.pdf | VERIFIED |
| 01 | PV: co mówią dane o pożarach | UK: 80 fires, 58 PV-caused; DC isolators most frequent; poor installation main identified root cause; 28 unknown | BRE 2018 PDF | VERIFIED ("ok. 30%" deliberately not quoted: 26–28/80 = 32,5–35%) |
| 01 | PV: co mówią dane o pożarach (notes) | 7 incidents: water ingress into DC isolators, all with upward-facing glands | BRE 2018 PDF, s. 24 | VERIFIED, re-read 29.09.2026 |
| 01 | PV: co mówią dane o pożarach | PL 2018–2021: 411 events, 128 PV-caused; 28,9 / 21,1 / 34,3%; no PSP category | https://www.ppoz.pl/czytelnia/ratownictwo-i-ochrona-ludnosci/Fotowoltaika-pod-lupa/idn:2751 | VERIFIED (shares sum to 100%) |
| 01 | PV: co mówią dane o pożarach | DE/UK: fires start at DC connection points | notes inference over DE/UK data | INFERENCE |
| 01 | Wiatr: główne zagrożenia | Vineyard Wind 13.07.2024: BSEE suspension, risk analysis; BSEE opened own investigation, results unpublished (IX 2026); GE claim not added | https://www.bsee.gov/newsroom/latest-news/statements-and-releases/press-releases/bsee-issues-new-order-to-vineyard-wind | VERIFIED |
| 01 | Wiatr: główne zagrożenia | External firefighting "very slim" | Uadiale 2014 PDF | VERIFIED (qualitative only; CWIF counts not used) |
| 01 | Wiatr: główne zagrożenia | Podławki 6.08.2023, ~100 m, 200 m zone | https://www.gov.pl/web/kppsp-ketrzyn/pozar-turbiny-wiatrowej | VERIFIED |
| 01 | Wiatr: główne zagrożenia | Blade damage causes; US study: lightning blade damage every 8,4 yr per turbine | https://doi.org/10.3390/en14185974 | VERIFIED (review citing field study; hedged "za przeglądem") |
| 01 | Wiatr: główne zagrożenia | d = 1,5(D+H), authors call it rough guess; Task 19 recommends site-specific QRA | Seifert 2003 PDF; IEA Task 19 2022 | VERIFIED |
| 01 | Wiatr: główne zagrożenia | D=150, H=120 → 405 m | — | ILLUSTRATIVE (w1_checks.py) |
| 01 | Wiatr: główne zagrożenia | EU-OSHA: lift for towers ≥60 m, secondary escape; arcs/shock | EU-OSHA 2013 PDF | VERIFIED |
| 01 | Wiatr: skąd brać wiarygodne dane | G+ = "najbardziej systematyczna" (not "jedyna audytowana") public statistic: member-reported data with explicit denominator (hours worked) | EI releases 2025, 2026 | VERIFIED (wording per FIXES_W1 #3) |
| 01 | Wiatr: skąd brać wiarygodne dane | G+ 2025: 69,2 mln h, TRIR 3,48, no fatalities | https://www.energyinst.org/exploring-energy/resources/news-centre/media-releases/offshore-wind-safety-improves-despite-strong-sector-expansion | VERIFIED |
| 01 | Wiatr: skąd brać wiarygodne dane | G+ 2024: 1 fatality, TRIR 2,93, manual handling 121 | https://www.energyinst.org/exploring-energy/resources/news-centre/media-releases/unprecedented-growth-in-offshore-wind-accompanied-by-a-rise-in-injury-rates | VERIFIED |
| 01 | Wiatr: skąd brać wiarygodne dane | Restated baselines (95 vs 99 LWI) | both EI releases | VERIFIED (facts) / INFERENCE (cause not stated) |
| 01 | Wiatr: skąd brać wiarygodne dane | "1370 accidents since 1970" traces to CWIF press clippings | EU-OSHA 2013 PDF | VERIFIED |
| 01 | Wiatr: skąd brać wiarygodne dane | 5–8 turbine fires/yr 2021–2025 (KG PSP via press) | https://www.gramwzielone.pl/trendy/20356707/pozary-fotowoltaiki-elektrykow-i-elektrowni-wiatrowych-jaka-jest-ich-skala-w-polsce | SECONDARY (hedged "wg danych KG PSP cytowanych przez") |
| 01 | BESS: przebieg niekontrolowanego wzrostu temperatury | ~80 (T1 78,2) / ~130 (PE) / ~190 (192, ceramic separator) / ≥250 °C / 800 °C or higher; ISC is trigger; cell = 20 Ah pouch, NCM111+LMO 1:1 cathode | https://www.frontiersin.org/articles/10.3389/fenrg.2018.00126/full (DOI https://doi.org/10.3389/fenrg.2018.00126) | ADDED+VERIFIED (FIXES_W1, 29.09.2026) (">700" corrected to ">800 °C") |
| 01 | BESS: przebieg niekontrolowanego wzrostu temperatury | Vent gases H2, CO, CH4, C2H4, HF | Shen 2023; Larsson 2017; DNV GL 2020 | VERIFIED |
| 01 | BESS: przebieg niekontrolowanego wzrostu temperatury | Clean agents ineffective on TR | DNV GL 2020 | VERIFIED |
| 01 | BESS: gazy, chemia ogniw i źródła awarii | 0,569 vs 1,814–2,752 L/Ah; LFP H2-rich; LFL ranking LFP highest; LFP "superior thermal stability" (abstract) | https://doi.org/10.3390/electronics12071603 ; abstract read on https://www.mdpi.com/2079-9292/12/7/1603 | VERIFIED; trigger-temperature row (LFP ~260 / NCM ~190–220 °C) REMOVED — Table 3 not readable (image) |
| 01 | BESS: gazy, chemia ogniw i źródła awarii | HF 20–200 mg/Wh | https://doi.org/10.1038/s41598-017-09784-z | VERIFIED (title confirmed ADDED+VERIFIED on nature.com) |
| 01 | BESS: gazy, chemia ogniw i źródła awarii | 5 kWh module → 100–1000 g HF | — | ILLUSTRATIVE |
| 01 | BESS: gazy, chemia ogniw i źródła awarii | EPRI: 81 incidents, 26 classified, 3 (11%) cells; 72% early life | https://restservice.epri.com/publicdownload/000000003002030360/0/Product | VERIFIED |
| 01 | BESS: McMicken, Moss Landing, Czajków | McMicken 2 MW/2 MWh NMC; smoke ~17:00; door + deflagration ~3 h; 4 firefighters seriously injured; cause "wg DNV GL": cell defect (Li plating, dendrites) | DNV GL 2020; APS; FSRI | VERIFIED (FSRI count of 4 used per notes; FEMA "8" not used) |
| 01 | BESS: McMicken, Moss Landing, Czajków | Other reports (UL FSRI, Exponent) differ from DNV GL, e.g. on root cause | https://collateral-library-production.s3.amazonaws.com/uploads/asset_file/attachment/31718/Executive_Summary_for_DNVGL_APS_Report_Responses.pdf | ADDED+VERIFIED (FIXES_W1, 29.09.2026) (UL 2021: "different findings that highlight disagreement (for example on root cause)"); cell manufacturer's position NOT verified → omitted |
| 01 | BESS: McMicken, Moss Landing, Czajków | Moss Landing 300 MW/1200 MWh NMC, repurposed turbine building; fire during capacity test, WECC names high SOC during capacity tests as risk factor (p. 14); sprinklers ineffective; roof breakthrough; cause undetermined | https://www.wecc.org/sites/default/files/documents/progress_report/2025/Moss%20Landing%20BESS%20Fire%20Report%20Final%2012.22.25.pdf | VERIFIED |
| 01 | BESS: McMicken, Moss Landing, Czajków | ~56 000 of ~100 000 modules burned; 18.09.2026 ~1300 damaged modules in the fire-impacted building burned; charge state NOT claimed | https://www.epa.gov/ca/moss-landing-vistra-battery-fire-updates | VERIFIED, re-read 29.09.2026 ("wciąż naładowanych" removed) |
| 01 | BESS: McMicken, Moss Landing, Czajków | Czajków 7.05.2026: ~2 MW(h), ~107 500 cells, up to 24 units, 65 evacuated, "kilkukrotnie" re-ignitions; PSP releases do not mention injured persons; cause unpublished | KW PSP Poznań; KP PSP Ostrzeszów | VERIFIED; re-read 29.09.2026 ("kilkukrotnie dochodziło do ponownego zapalenia" in KP PSP Ostrzeszów; no mention of injured in either page) |
| 01 | Biogazownia: metan i siarkowodór | CH4 LEL 4,4 / UEL 17 vol% (100% DGW = 4,4% obj.) | https://www.gischem.de/download/01_0-000074-82-8-000000_2_1_1255.PDF | ADDED+VERIFIED (FIXES_W1, 29.09.2026) ("Untere Explosionsgrenze: 4,4 Vol.-% / Obere Explosionsgrenze: 17 Vol.-%"); attribution to ISO/IEC 80079-20-1 and "stosowane w UE przy kalibracji detektorów" NOT verified (GisChem cites no standard) → omitted |
| 01 | Biogazownia: metan i siarkowodór | Older sources: ICSC 0291 (2000) 5–15 vol%; rel. density 0,6; O2 deficiency | ICSC 0291 | VERIFIED |
| 01 | Biogazownia: metan i siarkowodór | Biogas (60% CH4, 38% CO2) explosion range ~6–22 vol% | https://cdn.svlfg.de/fiona8-blobs/public/svlfgonpremiseproduction/45b79757c1f38081/ce7f71d90169/ti04-sicherheitsregeln-biogasanlagen.pdf | ADDED+VERIFIED (FIXES_W1, 29.09.2026) (SVLFG TI 4, 11.2015) |
| 01 | Biogazownia: metan i siarkowodór | H2S IOELV 5/10 ppm; IDLH 100 ppm; density 1,19; olfactory paralysis | ICSC 0165; NIOSH; 2009/161/EU | VERIFIED |
| 01 | Biogazownia: metan i siarkowodór | Polish NDS/NDSCh for H2S | https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20180001286 | UNVERIFIED → hedged ("sprawdź w ISAP"); values not stated |
| 01 | Biogazownia: metan i siarkowodór | Rhadereistedt XI 2005, pre-pit, protein co-substrates, 4 deaths | https://www.umweltbundesamt.de/system/files/medien/publikation/long/3097.pdf | VERIFIED |
| 01 | Biogazownia: metan i siarkowodór | Casson Moreno: 169 accidents 1995–2014; ~12% major; >5× 2007–2011 | https://doi.org/10.1016/j.renene.2015.10.017 | VERIFIED (abstract) |
| 01 | Biogazownia: metan i siarkowodór | UBA (page 01.02.2019): inspections found significant safety defects for years in ~70% of inspected plants (2007–2016); ~9000 plants in 2018; TRAS 120 announced 21.01.2019 | https://www.umweltbundesamt.de/themen/biogasanlagen-neue-technische-regel-soll-sicherheit | VERIFIED, re-read 29.09.2026 ("etwa 70 Prozent dieser Anlagen" = inspected plants) |
| 01 | Biogazownia: metan i siarkowodór (notes) | ~91% of PL agricultural biogas feedstock is waste | KOWR 2026 | VERIFIED |
| 01 | Jak czytać statystyki wypadków | EPRI: global grid-scale BESS failure rate −97% 2018–2023 | EPRI 2024 | VERIFIED; denominator phrase "na zainstalowaną GWh" REMOVED (EPRI text gives none; Energy-Storage.News says per GW deployed, not GWh) |
| 01 | Jak czytać statystyki wypadków | PSP "fotowoltaika" in report: 145 (2020) → 808 (2024, full year); presence ≠ cause | https://globenergia.pl/ile-instalacji-fotowoltaicznych-plonie-w-polsce-w-ciagu-roku-mamy-dane/ | SECONDARY (hedged); re-read 29.09.2026: "2024 r. – 808 zdarzeń", the partial figure is "2025 r. (do 10.11.) – 759" → FIXES_W1 #9b/#34 ("808 do 10.11.2024") NOT applied |
| 01 | Jak czytać statystyki wypadków | 50 vs 40 per 100 tys., ×4 events, −20% rate | — | ILLUSTRATIVE |

## 02-pojecia-podstawowe.mdx

| file | slide title | claim (short) | source URL | status |
|---|---|---|---|---|
| 02 | Zagrożenie, sytuacja zagrożenia, szkoda | Guide 51:2014 definitions: harm, hazard, hazardous event, hazardous situation | https://cdn.standards.iteh.ai/samples/53940/eed8e9480a434fd2810d25c5cd95458e/ISO-IEC-Guide-51-2014.pdf | ADDED+VERIFIED (notes had these as UNVERIFIED; I read the official sample) |
| 02 | Zagrożenie, sytuacja zagrożenia, szkoda | ISO 12100:2010 harm = physical injury or damage to health (people only) | https://cdn.standards.iteh.ai/samples/51528/510735adf40846879b3a026ecf6956a2/ISO-12100-2010.pdf | ADDED+VERIFIED |
| 02 | Zagrożenie, sytuacja zagrożenia, szkoda | PN-EN ISO 12100-1:2005 "zagrożenie" wording (via CIOP-PIB) | http://archiwum.ciop.pl/20840.html | VERIFIED |
| 02 | Zagrożenie, sytuacja zagrożenia, szkoda | That edition is outdated: ISO withdrew ISO 12100-1:2003 and replaced it with ISO 12100:2010; current PN edition → "sprawdź w katalogu PKN" | https://www.iso.org/standard/51528.html | ADDED+VERIFIED (FIXES_W1, 29.09.2026) (ISO level); PN-EN ISO 12100:2012 NOT verified (sklep.pkn.pl unreachable: SSL/robots) → year not stated |
| 02 | Zagrożenie, sytuacja zagrożenia, szkoda | PV examples column | — | ILLUSTRATIVE |
| 02 | Ryzyko w dwóch ujęciach | Risk = combination of probability and severity of harm (Guide 51, ISO 12100) | Guide 51 and ISO 12100 samples | ADDED+VERIFIED |
| 02 | Ryzyko w dwóch ujęciach | ISO 31000: risk = effect of uncertainty on objectives | https://www.iso.org/news/ref2263.html | VERIFIED ("positive deviations" claim removed: could not verify) |
| 02 | Ryzyko w dwóch ujęciach | Residual risk; tolerable risk (Guide 51 3.15, acceptable = tolerable synonyms); safety = freedom from risk which is not tolerable | Guide 51 sample; ISO 12100 sample; CIOP | ADDED+VERIFIED / VERIFIED |
| 02 | Ryzyko w dwóch ujęciach | ISO 31000 ed. 3 at CD stage | https://www.iso.org/standard/88574.html | VERIFIED |
| 02 | Hierarchia zmniejszania ryzyka | ISO 12100 3-step method, mandatory sequence | https://www.cencenelec.eu/media/CEN-CENELEC/Areas%20of%20Work/CENELEC%20sectors/Mechanical%20and%20Machines/Documents/Quicklinks/eniso12100relationmachinerydirective.pdf ; ISO 12100 sample | ADDED+VERIFIED (CEN/TC 114 chair document; ISO sample) |
| 02 | Hierarchia zmniejszania ryzyka | Protective measures also implemented by user (organisation, training, PPE) | ISO 12100 sample | ADDED+VERIFIED |
| 02 | Hierarchia zmniejszania ryzyka | 89/391: priority of collective over individual measures | https://osha.europa.eu/en/legislation/directives/the-osh-framework-directive/1 | ADDED+VERIFIED |
| 02 | Hierarchia zmniejszania ryzyka | OZE examples: WECC describes industry shift to outdoor containerised BESS, away from warehouse-style halls (not a WECC recommendation); McMicken entry procedure | WECC 2025 (pp. 2, 15); DNV GL 2020 | VERIFIED sources, re-read 29.09.2026 / ILLUSTRATIVE mapping |
| 02 | Ryzyko tolerowane i ALARP | TOR three regions; R2P2 (2001) | https://www.hse.gov.uk/foi/internalops/hid_circs/permissioning/spc_perm_37/ | VERIFIED |
| 02 | Ryzyko tolerowane i ALARP | ALARP = weigh risk vs trouble/time/money; gross disproportion; Edwards v NCB 1949; not zero risk | https://www.hse.gov.uk/enforce/expert/alarpglance.htm | VERIFIED |
| 02 | Ryzyko tolerowane i ALARP | Criteria as individual risk of death per year; numbers deferred to W2 | SPC/Permissioning/37 | VERIFIED (numeric bounds deliberately not shown) |
| 02 | Ryzyko tolerowane i ALARP | Biogas risk profile "typical of ALARP zone" | Casson Moreno 2016 | VERIFIED |

## 03-ramy-prawne-ue-i-polska.mdx

| file | slide title | claim (short) | source URL | status |
|---|---|---|---|---|
| 03 | Mapa ram prawnych | Who is obliged: product law→manufacturer; OSH→employer; Seveso→operator above thresholds; cyber→entities/manufacturers; RfG→owner + system operators | eu_legal notes Q0 inference | INFERENCE (from verified scopes) |
| 03 | Nowe ramy prawne, znak CE i normy zharmonizowane | Harmonised standards voluntary; presumption of conformity (Blue Guide 1.1.3) | https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX%3A52022XC0629%2804%29 | VERIFIED |
| 03 | Nowe ramy prawne, znak CE i normy zharmonizowane | OJ publication precondition for presumption | https://single-market-economy.ec.europa.eu/single-market/goods/european-standards/harmonised-standards_en | VERIFIED |
| 03 | Nowe ramy prawne, znak CE i normy zharmonizowane | EN 18031-1/-2/-3:2024 cited with restrictions (ID 2025/138) | https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=OJ:L_202500138 | VERIFIED |
| 03 | Nowe ramy prawne, znak CE i normy zharmonizowane | Omnibus IV COM(2025) 503/504 of 21.05.2025 = proposal; provisional Council–EP agreement 9.06.2026 (digital DoC, digital instructions, common specifications); needs endorsement and formal adoption | https://single-market-economy.ec.europa.eu/publications/digitalisation-and-alignment-common-specifications_en ; https://www.consilium.europa.eu/en/press/press-releases/2026/06/09/simplification-council-and-parliament-strike-deal-to-help-growing-businesses-thrive-and-accelerate-digitalisation/ | ADDED+VERIFIED (FIXES_W1, 29.09.2026); "formalnie nieprzyjęty (IX 2026)": no formal adoption found in a search on 29.09.2026 |
| 03 | Nowe ramy prawne, znak CE i normy zharmonizowane | "CE mostly manufacturer's self-declaration" (notes of lecturer) | — | TEXTBOOK |
| 03 | Prawo produktowe: co musi spełnić wyrób | LVD applies 20.04.2016 | https://eur-lex.europa.eu/legal-content/PL/TXT/?uri=CELEX:32014L0035 | VERIFIED |
| 03 | Prawo produktowe: co musi spełnić wyrób | RED DA 2022/30 applies 1.08.2025 | https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32023R2444 | VERIFIED |
| 03 | Prawo produktowe: co musi spełnić wyrób | MD end of validity 19.01.2027; MR applies 20.01.2027 | EUR-Lex 2006/42; Commission machinery page | VERIFIED |
| 03 | Prawo produktowe: co musi spełnić wyrób | Wind turbines CE-marked as machinery "w praktyce branżowej" | eu_legal Q2 inference | INFERENCE (hedged) |
| 03 | Prawo produktowe: co musi spełnić wyrób | ATEX 2014/34 and PED in force (no dates given) | ATEX harmonised list | VERIFIED (in force via harmonised list; application dates UNVERIFIED → omitted) |
| 03 | Prawo produktowe: co musi spełnić wyrób | Batteries Reg. applies 18.02.2024 phased; due diligence 18.08.2027 | https://environment.ec.europa.eu/topics/waste-and-recycling/batteries_en ; https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32025R1561 | VERIFIED |
| 03 | Prawo produktowe: co musi spełnić wyrób | Art. 12 BESS safety documentation per Annex V (TÜV SÜD) | https://www.energy-storage.news/one-year-on-eu-batteries-regulation-and-ce-marking-impacting-energy-storage-systems/ | SECONDARY (hedged "wg TÜV SÜD"); label/passport dates UNVERIFIED → "sprawdź w EUR-Lex" |
| 03 | Prawo produktowe: co musi spełnić wyrób | CPR 2024/3110 applies 8.01.2026; old CPR repealed 2039 | https://single-market-economy.ec.europa.eu/sectors/construction/construction-products-regulation-cpr/cpr-2024-revision_en | VERIFIED |
| 03 | Prawo pracy: obowiązki pracodawcy i operatora | 89/391: evaluate all risks; prevention principles | https://osha.europa.eu/en/legislation/directives/the-osh-framework-directive/1 | ADDED+VERIFIED (notes: UNVERIFIED) |
| 03 | Prawo pracy: obowiązki pracodawcy i operatora | 1999/92 Art. 7 zones, Art. 8 explosion protection document; zone 0/1/2 definitions | https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:31999L0092 | VERIFIED |
| 03 | Prawo pracy: obowiązki pracodawcy i operatora | 2009/104: suitability; inspection by competent persons, recorded | https://osha.europa.eu/en/legislation/directives/3 | ADDED+VERIFIED |
| 03 | Prawo pracy: obowiązki pracodawcy i operatora | 98/24: employer assesses chemical risks | https://osha.europa.eu/en/legislation/directives/75 | ADDED+VERIFIED |
| 03 | Prawo pracy: obowiązki pracodawcy i operatora | H2S IOELV 5 ppm (7 mg/m³) / 10 ppm (14 mg/m³) | https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32009L0161 | VERIFIED |
| 03 | Seveso III a biogazownie i BESS | Applies from 1.06.2015; P2 10/50 t; entry 18 50/200 t incl. upgraded biogas (Note 19); H2 5/50 t; no BESS named entry | https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32012L0018 | VERIFIED ("raw biogas under P2" = notes takeaway; shown as "np.") |
| 03 | Seveso III a biogazownie i BESS | 1,22 kg/m³ → 10 t ≈ 8200 m³; 3000 m³ ≈ 3,7 t | — | ILLUSTRATIVE (textbook densities 0,717 / 1,977 kg/m³) |
| 03 | Cyberbezpieczeństwo i przyłączenie do sieci | NIS2 medium/large entities; KSC in force 3.04.2026; "wniosek o wpis do wykazu" by 3.10.2026; SZBI by 3.04.2027; first audit (podmiot kluczowy only) by 3.04.2028 (also on BHP slide and in notes) | https://digital-strategy.ec.europa.eu/en/policies/nis2-directive ; https://www.gov.pl/web/baza-wiedzy/nowelizacja-ustawy-o-krajowym-systemie-cyberbezpieczenstwa | VERIFIED (Dz.U. 2026 poz. 252 from ISAP search listing in notes) |
| 03 | Cyberbezpieczeństwo i przyłączenie do sieci | CRA: reporting 11.09.2026 (24 h / 72 h); main 11.12.2027 | https://digital-strategy.ec.europa.eu/en/policies/cra-summary | VERIFIED |
| 03 | Cyberbezpieczeństwo i przyłączenie do sieci | NCCS in force 13.06.2024; "wdrażanie etapami w kolejnych latach" | https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX%3A02024R1366-20250914 | VERIFIED (text contains staged deadlines up to 13.06.2031; wording per FIXES_W1 #16) |
| 03 | Cyberbezpieczeństwo i przyłączenie do sieci | RfG applies 27.04.2019; power-generating modules; Type A ≥0,8 kW; D also ≥110 kV; CE maxima B 1 MW, C 50 MW, D 75 MW | https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0631 | VERIFIED |
| 03 | Cyberbezpieczeństwo i przyłączenie do sieci | PL thresholds (URE decision 16.07.2018): B 0,2 MW, C 10 MW, D 75 MW | https://www.pse.pl/kodeksy/rfg | ADDED+VERIFIED (FIXES_W1, 29.09.2026) (A lower bound and 110 kV rule from RfG, not stated on the PSE page) |
| 03 | Cyberbezpieczeństwo i przyłączenie do sieci | Wymogi 2025 approved by URE President 15.05.2025; apply to B–D with connection conditions issued from 1.12.2025, type A from 1.01.2027 (conditions or notification) | https://www.pse.pl/kodeksy/rfg | ADDED+VERIFIED (FIXES_W1, 29.09.2026) |
| 03 | Cyberbezpieczeństwo i przyłączenie do sieci | RfG revision: draft feedback 8.07–25.08.2026; adoption planned Q4 2026 | https://ec.europa.eu/info/law/better-regulation/have-your-say/initiatives/14165-Revision-of-the-Network-Code-on-Requirements-for-Grid-Connection-of-Generators_en | VERIFIED |
| 03 | Prawo budowlane: PV i magazyny energii | PV >6,5 kW: rzeczoznawca + PSP notification; art. 56 ust. 1a repealed; now art. 56 ust. 1 pkt 2 | https://lexlege.pl/prawo-budowlane/art-56/ ; https://www.gov.pl/web/kppsp-lancut/zgloszenie-instalacji-fotowoltaicznej-o-mocy-powyzej-65-kw | SECONDARY (hedged "wg lexlege.pl — sprawdź w ISAP") |
| 03 | Prawo budowlane: PV i magazyny energii | Dz.U. 2025 poz. 1847 in force 7.01.2026; BESS thresholds 30 / 300 / 2000 kWh | PIIB Podlaska; elektro.info; PSME; Gramwzielone | SECONDARY (4 consistent sources; hedged) |
| 03 | Prawo budowlane: PV i magazyny energii | Definition applies from 20.09.2026 | Gramwzielone 2026 | SECONDARY (single source; hedged) |
| 03 | Warunki techniczne i ochrona ppoż. w IX 2026 | Old WT lapsed 19/20.09.2026; transitional 18 months (Dz.U. 2026 poz. 1161, in force 2.09.2026) to ~20.03.2028 | prawo.pl 18.09.2026; Inżynier Budownictwa 22.09.2026 | SECONDARY (hedged; scope conflict mentioned) |
| 03 | Warunki techniczne i ochrona ppoż. w IX 2026 | New WT = RCL 12398903, consultation 13.06.2025 | https://www.gov.pl/web/rozwoj-technologia/konsultacje-projektu-rozporzadzenia-w-sprawie-warunkow-technicznych-jakim-powinny-odpowiadac-budynki-i-usytuowanie | VERIFIED |
| 03 | Warunki techniczne i ochrona ppoż. w IX 2026 | Not signed by 22.09.2026 | prawo.pl; Inżynier Budownictwa | SECONDARY (hedged) |
| 03 | Warunki techniczne i ochrona ppoż. w IX 2026 | Draft (9.06.2025) BESS: disconnect, gas detection 10%/30% DGW, no basement | https://kanalelektryczny.pl/rygorystyczne-wymagania-pozarowe-dla-magazynow-energii-nowy-projekt-warunkow-technicznych/ | SECONDARY (hedged; "projekt, nie prawo") |
| 03 | Warunki techniczne i ochrona ppoż. w IX 2026 | MSWiA 5.08.2023, Dz.U. 2023 poz. 1563 (project agreement) | https://www.gov.pl/web/kgpsp/zmiany-w-przepisach-z-zakresu-ochrony-przeciwpozarowej | VERIFIED |
| 03 | Warunki techniczne i ochrona ppoż. w IX 2026 | MSWiA 7.06.2010, Dz.U. 2010 nr 109 poz. 719 | https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20101090719 | ISAP-LISTING (notes: UNVERIFIED; confirmed by search listing + MSWiA BIP listing; "sprawdź tekst jednolity") |
| 03 | Warunki techniczne i ochrona ppoż. w IX 2026 | CNBOP-PIB + PSME guideline for end 2026 | Gramwzielone 7.07.2026 | SECONDARY (hedged) |
| 03 | BHP, kwalifikacje i dozór techniczny | MG 8.07.2010, Dz.U. 2010 nr 138 poz. 931 (explosive atmosphere, BHP) | https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20101380931 | ISAP-LISTING (title seen; link to DZPW practice = INFERENCE; "treść paragrafów sprawdź w ISAP") |
| 03 | BHP, kwalifikacje i dozór techniczny | NDS reg. Dz.U. 2018 poz. 1286; amended Dz.U. 2024 poz. 1017 | ISAP links in notes | VERIFIED titles via ISAP listings (values not stated) |
| 03 | BHP, kwalifikacje i dozór techniczny | MKiŚ 1.07.2022, Dz.U. 2022 poz. 1392: eksploatacja/dozór (§ 4); groups 1–3 names | https://www.ure.gov.pl/download/9/12973/1392.pdf | ADDED+VERIFIED (notes: UNVERIFIED; E/D letters and validity period NOT stated — regulation text uses no letters) |
| 03 | BHP, kwalifikacje i dozór techniczny | RM 7.12.2012, Dz.U. 2012 poz. 1468 (UDT device types) | https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=wdu20120001468 | ISAP-LISTING (examples phrased "sprawdź w załączniku") |
| 03 | Kto za co odpowiada | Responsibility matrix; PSP basis = Prawo budowlane art. 29, 33 i 56 ust. 1, RM 2012 | notes inferences + pl_law_verified_isap.md | INFERENCE / ISAP-verified by coordinator |
| 03 | Prawo budowlane; Projekt nowych WT (notes) | Causal claims replaced by "zbieżny z wnioskami z dochodzeń po pożarach, takich jak McMicken" | DNV GL 2020 | wording (no causal claim) |
| 03 | Prawo produktowe (bibliography) | Author name Bellino N. (TÜV SÜD), 20.11.2025 | https://www.energy-storage.news/one-year-on-eu-batteries-regulation-and-ce-marking-impacting-energy-storage-systems/ | ADDED+VERIFIED (FIXES_W1, 29.09.2026) |
| 03 | Kto za co odpowiada | art. 62 periodic inspections as owner duty | https://lexlege.pl/prawo-budowlane/art-62/ | SECONDARY |

## 04-normy.mdx

| file | slide title | claim (short) | source URL | status |
|---|---|---|---|---|
| 04 | Normy a prawo | Standards voluntary; harmonised → presumption | Blue Guide 2022; Commission page | VERIFIED |
| 04 | Normy a prawo | EN 1127-1:2011 withdrawn 1.02.2022; EN 1127-1:2019 harmonised (ATEX) | ATEX list page | VERIFIED |
| 04 | Normy a prawo | "Obligatory only when a regulation refers to it" | — | spec-mandated principle (ustawa o normalizacji art. 5 UNVERIFIED → not cited) |
| 04 | Normy dla fotowoltaiki i energetyki wiatrowej | IEC 60364-7-712:2025 ed. 3 (21.10.2025) scope incl. storage, island | https://webstore.iec.ch/en/publication/65748 | VERIFIED |
| 04 | Normy dla fotowoltaiki i energetyki wiatrowej | IEC 62548-1:2023 AMD1 15.12.2025 | https://webstore.iec.ch/en/publication/98955 | VERIFIED |
| 04 | Normy dla fotowoltaiki i energetyki wiatrowej | IEC 61400-1 AMD1 18.12.2025; IEC 61400-24 AMD1 13.11.2024 | webstore 86420, 80793 | VERIFIED |
| 04 | Normy dla fotowoltaiki i energetyki wiatrowej | ISO 20816-21:2025 replaced ISO 10816-21:2015 | https://www.iso.org/standard/84280.html | VERIFIED |
| 04 | Normy dla fotowoltaiki i energetyki wiatrowej | IEC 62109-1 ed. 2 PRV 4.09.2026 (FDIS) | https://webstore.iec.ch/en/publication/116681 | VERIFIED |
| 04 | Normy dla fotowoltaiki i energetyki wiatrowej | IEC TS 61400-30:2023 = general design safety, not FS | https://webstore.iec.ch/en/publication/31267 | VERIFIED |
| 04 | Normy dla magazynów energii i atmosfer wybuchowych | IEC 62933-5-1:2024 (IS, replaced TS 2017); 62933-5-2:2025 ed. 2 (9.12.2025); IEC 62619:2022 | webstore 72239, 68297, 64073 | VERIFIED |
| 04 | Normy dla magazynów energii i atmosfer wybuchowych | IEC 60079-10-1:2020; 60079-14:2024 ed. 6 (30.08.2024); 60079-29-0:2025 replaced 29-1 and 29-4 (27.11.2025) | webstore 63327, 66049, 77173 | VERIFIED |
| 04 | Normy dla magazynów energii i atmosfer wybuchowych | UL 9540A ed. 6 (13.03.2026); NFPA 855 2026 ed.; ISO/IEC 80079-20-1:2017 replaced IEC 60079-20-1 | https://www.shopulstandards.com/ProductDetail.aspx?productId=UL9540A_6_S_20260313 ; NFPA page; webstore 26577 | ADDED+VERIFIED (FIXES_W1, 29.09.2026) (UL ed. 6) / PARTIALLY VERIFIED (NFPA 855) |
| 04 | Bezpieczeństwo funkcjonalne i ryzyko | IEC 61508:2010 ed. 2 current; IEC 61511 ed. 3 unpublished (IX 2026); SER package of 10.07.2026 contains 2016+AMD1:2017; notes "są aktualne" (not "obowiązują") | webstore 5515, 5527 | VERIFIED |
| 04 | Bezpieczeństwo funkcjonalne i ryzyko | ISO 13849-1:2023 ed. 4; IEC 62061 AMD2 20.03.2026; ISO 31000 CD; IEC 31010:2019 | iso.org 73481; webstore 92835; iso.org 88574; webstore 59809 | VERIFIED |
| 04 | Bezpieczeństwo funkcjonalne i ryzyko | Guide 51 confirmed 2025; ISO 12100 to be revised; Guide 73 withdrawn → ISO 31073:2022 | iso.org 53940, 51528, 44651 | VERIFIED |
| 04 | Bezpieczeństwo funkcjonalne i ryzyko | Definition of functional safety; SIL assigned to function | — | TEXTBOOK |
| 04 | Alarmy i cyberbezpieczeństwo OT | IEC 62682:2022 ed. 2 (8.12.2022); ISA-18.2-2016; EEMUA 191 ed. 4 (2024) | webstore 65543; isa.org; eemua.org | VERIFIED |
| 04 | Alarmy i cyberbezpieczeństwo OT | IEC 62443-2-1:2024 (7.08.2024); 3-3:2013; 4-2:2019 | webstore 62883, 7033, 34421 | VERIFIED |
| 04 | Alarmy i cyberbezpieczeństwo OT | IEC 62351 SER (30.07.2026): parts dated 2007–2026, incl. new editions 2023–2026 | https://webstore.iec.ch/en/publication/6912 | ADDED+VERIFIED (FIXES_W1, 29.09.2026) |

## 05-monitoring-a-warstwy-ochrony.mdx

| file | slide title | claim (short) | source URL | status |
|---|---|---|---|---|
| 05 | Monitoring a funkcja ochronna | Comparison table protection vs monitoring | notes (monitoring Q8 inference) + UMich, RR716, DNVGL-SE-0439 | INFERENCE (labelled "zestawienie na podstawie") |
| 05 | Monitoring a funkcja ochronna | CMS not a substitute for independent safety systems; no intervention in safety/control system | https://www.dnv.com/energy/standards-guidelines/dnv-se-0439-certification-of-condition-monitoring/ (official page: DNV-SE-0439, ed. 06.2016, amended 10.2021) | VERIFIED (content read earlier in the 2016 text; official page confirms title and dates only; dbassetservices.com URL removed everywhere) |
| 05 | Warstwy ochrony w modelu cebuli | 9 CCPS layers (source name corrected to SAFEChE in index, 05, 06) | https://safeche.engin.umich.edu/tutorials/lopa-tutorial | VERIFIED |
| 05 | Warstwy ochrony w modelu cebuli | IEC 61511-1 Fig. 9 groups; monitoring with BPCS | https://engineering.purdue.edu/P2SAC/presentations/documents/Safety_Life_Cycle_Per_IEC_ISA_61511_1.pdf | SECONDARY (hedged "wg prezentacji Purdue P2SAC") |
| 05 | Model sera szwajcarskiego | Holes, alignment, active failures vs latent conditions, system approach | https://doi.org/10.1136/bmj.320.7237.768 | VERIFIED |
| 05 | Model sera szwajcarskiego (notes) | Model originates in research on failures of complex technical systems (Reason, 1990, Human Error, ch. 7 "Latent errors and systems disasters"); BMJ 2000 applies it to medicine | https://doi.org/10.1017/CBO9781139062367 | ADDED+VERIFIED (FIXES_W1, 29.09.2026) (publisher page: reliability of hazardous technologies; ch. 7 title from cambridge.org) |
| 05 | Model sera szwajcarskiego | Shared PLC → common cause, fails independence | https://www.hse.gov.uk/research/rrpdf/rr716.pdf | VERIFIED |
| 05 | Kiedy warstwa jest warstwą ochrony | IPL criteria effective / independent / auditable | UMich SAChE | VERIFIED |
| 05 | Kiedy warstwa jest warstwą ochrony | BPCS credit ≤10 (PFD ≥0,1) for a BPCS not intended to conform to IEC 61511; max one BPCS layer when BPCS initiating (IEC 61511-1:2016 cl. 9.3) | https://www.icheme.org/media/11752/hazards-26-paper-15-iec-61511-functional-safety-in-the-process-industry-the-long-awaited-iec-61511-edition-2-and-what-it-means-for-the-process-industry.pdf | SECONDARY (hedged "wg Derbyshire"; sub-clause not given) |
| 05 | Kiedy warstwa jest warstwą ochrony | Alarm = requires timely operator response (ISA-18.2) | https://www.isa.org/intech-home/2020/march-april/features/alarm-management-questions-that-everyone-asks | VERIFIED |
| 05 | Kiedy warstwa jest warstwą ochrony | Operator response credit: PFD not less than 0,1 (RRF ≤ 10) with independence, time, formal auditable procedures | RR716 (VERIFIED); exida 2012 | VERIFIED + SECONDARY |
| 05 | Kiedy warstwa jest warstwą ochrony | exida: PFD ≥ 0,5 if alarm system not rationalised and/or performance not proven against ISA-18.2 metrics | https://www.exida.com/articles/UsingAlarmsasaLayerofProtection.pdf | ADDED+VERIFIED (FIXES_W1, 29.09.2026) (text says "and / or" → slide uses "lub") |
| 05 | Kiedy warstwa jest warstwą ochrony | HSE CHIS6: long-term average alarm rate in normal operation ≤ 1 per 10 min (no "per operator") | https://www.hse.gov.uk/pubns/chis6.pdf | VERIFIED, re-read 29.09.2026 |
| 05 | Kiedy warstwa jest warstwą ochrony | 0,1 × 0,01 = 0,001 → RRF 1000 | — | ILLUSTRATIVE |
| 05 | Monitoring i ochrona w technologiach OZE | IEC 61724-1 monitoring; IEC TS 62446-3 thermography | webstore 65561, 28628 | VERIFIED |
| 05 | Monitoring i ochrona w technologiach OZE | RCMU in inverters (IEC 62109-2) | https://www.osti.gov/servlets/purl/1313068 | SECONDARY (hedged "wg Sandia"); insulation check before connection UNVERIFIED → omitted |
| 05 | Monitoring i ochrona w technologiach OZE | IEC 63027; EN 50549-1 interface protection with island detection | webstore 27362; EN 50549-1 sample | VERIFIED |
| 05 | Monitoring i ochrona w technologiach OZE | Wind: independent safety system, e.g. overspeed (DNV-ST-0438) | DNV-ST-0438 page; DNVGL-SE-0439 | VERIFIED (existence/scope) + TEXTBOOK example (overspeed); clause details deferred to W7 |
| 05 | Monitoring i ochrona w technologiach OZE | BESS: BMS disconnect on V/I/T; gas detection + ventilation/venting; thermal barriers | DNV GL 2020 (recommendations) | VERIFIED (barriers, ventilation, gas monitoring) + TEXTBOOK (BMS limits) |
| 05 | Monitoring i ochrona w technologiach OZE | Biogas: mechanical over/under-pressure (TRAS 120); gas detection (IEC 60079-29-0) | TRAS 120; webstore 77173 | VERIFIED; biogas monitoring examples = INFERENCE |
| 05 | McMicken 2019 warstwa po warstwie | Cell voltage 4,06 → 3,82 V at 16:54:30; five contributing factors; Novec as designed; no barriers/ventilation/ERP procedures | DNV GL 2020 | VERIFIED |
| 05 | McMicken 2019 warstwa po warstwie | 16:55:20 smoke alarms → fire protection system opened BMS DC breakers, inverter AC contactors, main AC breaker; TR continued to propagate; clean agents do not cool cells | DNV GL 2020 (Table 1) | ADDED+VERIFIED (FIXES_W1, 29.09.2026) |
| 05 | McMicken 2019 warstwa po warstwie | Row renamed "Detekcja gazu i wentylacja" (explosion venting dropped from the row) | FSRI 2020 | VERIFIED |
| 05 | McMicken 2019 warstwa po warstwie | No continuous gas monitoring, no deflagration venting; 4 seriously injured | https://fsri.org/research-update/report-four-firefighters-injured-lithium-ion-battery-energy-storage-system | VERIFIED |
| 05 | Jak monitoring wspiera bezpieczeństwo | TS 62446-3 purpose incl. preventive maintenance for fire safety; CMS in maintenance plan | webstore 28628; DNVGL-SE-0439 | VERIFIED |
| 05 | Jak monitoring wspiera bezpieczeństwo | IEC 61511 ed. 2: proof test after repair | Derbyshire 2016 | SECONDARY (hedged) |
| 05 | Jak monitoring wspiera bezpieczeństwo | IEC 62682:2022 clause 16 alarm-rate metrics | https://cdn.standards.iteh.ai/samples/103485/6f7b44e368fc4f4d93216f716a51771a/IEC-62682-2022.pdf | VERIFIED |
| 05 | Jak monitoring wspiera bezpieczeństwo | "SCADA all green" limit; slow remote response in unattended plants | — | INFERENCE, labelled "(ocena własna)"; NREL 2018 removed from slide source line and page bibliography (no other use on page) |

## 06-podsumowanie.mdx

| file | slide title | claim (short) | source URL | status |
|---|---|---|---|---|
| 06 | Najważniejsze wnioski | Recap of claims above | internal links to parts 1–5 | as above |
| 06 | Najważniejsze wnioski | PV: DC voltage from illuminated modules, not removed by the inverter-side isolator | Ramali 2022 | VERIFIED (wording per FIXES_W1 #32) |
| 06 | Sprawdź się | 10 quiz questions restating verified content (DC in daylight; BRE DC isolators; Shen LFP/NCM; Guide 51; ISO 12100 3-step; 1999/92 employer; RfG revision draft; IPL criteria; McMicken; PSP presence ≠ cause) | internal links | as above |
| 06 | Sprawdź się | Q3: "(ok. 260 °C)" removed; explanation uses "lepsza stabilność termiczna" (Shen abstract); distractor changed to "NCM są stabilniejsze termicznie niż LFP" | Shen 2023 abstract | VERIFIED |
| 06 | Sprawdź się | Q9: measurement and disconnection (16:55:20) cannot stop an internal cell short; missing thermal barriers, gas detection with ventilation, entry procedure | DNV GL 2020 | VERIFIED |
| 06 | Sprawdź się | Q10: "w 2024 r. 808 zdarzeń" kept (808 is the full-year 2024 figure; 759 is 2025 to 10.11) | Globenergia | SECONDARY; FIXES_W1 #34 not applied |

## Deliberately omitted or hedged (not stated as fact)

- Polish NDS/NDSCh values for H2S, CO, CO2 (ISAP/CIOP unreadable) → "sprawdź w ISAP".
- Methane 4,4/17 vol% now stated from GisChem (BG RCI/BGHM); attribution to ISO/IEC 80079-20-1 and to detector calibration practice still unverified → not stated.
- Shen 2023 trigger temperatures (LFP ~260 °C, NCM ~190–220 °C): Table 3 not readable → removed from slide and quiz.
- McMicken: position of the cell manufacturer (LG Chem) on the root cause → not verified, not stated.
- EPRI 97% decline: denominator (GWh vs GW) → not stated.
- PN-EN ISO 12100:2012 as the current Polish edition (PKN catalogue unreachable) → "sprawdź w katalogu PKN".
- R2P2 numeric boundaries (10⁻³ / 10⁻⁴ / 10⁻⁶ per year) → deferred to W2.
- Guide 51 "protective measure" note list, ISO 31000 "positive deviations" note → not used.
- IEC 62109-2 insulation-resistance threshold; EN 50308; IEC 61400-1 protection-function clause text; TRAS 120 flare / PLT details; DGUV %LEL alarm thresholds → not used.
- Batteries Reg. labelling (18.08.2026) and passport (18.02.2027) dates → "sprawdź w EUR-Lex".
- Świadectwa kwalifikacyjne "E/D" letters and 5-year validity → not stated (regulation text uses eksploatacja/dozór; validity not specified in text read).
- UDT list of RES devices → only "sprawdź w załączniku".
- Ooltgensplaat 2013, Châteaulin 2020, Beijing 2021 capacities, Korean ESS fires, FEMA "8 firefighters", CalMatters "1200 modules", German "430 fires", Fraunhofer "44,1%" (PSP) → not used.
- Ustawa wiatrakowa 700 m / 2025 veto; ME draft on DSO control of micro-installations (RCL 12410651) → not used on slides (secondary / out of scope for W1 time).
- PSP "312 fires in buildings with PV in 2025" (secondary) → not used.
