# Writer brief — W1 rewrite (29.09.2026)

This is the exact prompt given to the three writer agents (template W of `03-agent-prompts.md`, split into three parts that run in parallel). Section "COMMON" is identical for all three; each writer then got one "ASSIGNMENT" section (A, B or C).

---

## COMMON

Rewrite Lecture 1 of a Polish university course as Docusaurus MDX pages. The lecture already exists (written earlier today); you write a NEW version from scratch to a stricter standard. Treat the existing pages as a draft and as source material, never as the result. You are one of three writers working in parallel on disjoint pages of the same lecture; stay strictly inside your assignment.

Today is 29.09.2026. Law: "stan prawny: wrzesień 2026". Standards catalogues: state on 29.09.2026.

### Read first (in this order)
1. /home/claude/repo/_lecture-kit/01-writing-spec.md — the full writing specification. Follow it strictly (evidence rules, language, format, quality gates). It prescribes the W2 forms listed below.
2. /home/claude/repo/_lecture-kit/05-feedback-and-lessons.md — lessons from earlier fact-checks; avoid every listed error.
3. /home/claude/repo/_lecture-kit/course-ledger.md — terms (§3) and key numbers (§4) that W2 already relies on: keep the same Polish terms and values; forward references (§5).
4. /home/claude/repo/_lecture-kit/verified-facts/pl-law-2026-09.md AND /home/claude/repo/_lecture-kit/verified-facts/pl-law-2026-09-W01.md — authoritative for Polish law, the EU acts read in EUR-Lex, and the methane data (GESTIS). If notes or old pages disagree with them, they win; report the conflict.
5. /home/claude/work/W01/plan.md — the APPROVED page plan (the lecturer approved it). Slide titles, slide order, minutes per slide and content points are fixed. Adapt wording, not structure. If the evidence does not support a point, drop or hedge it and report.
6. /home/claude/repo/CLAUDE.md and the components /home/claude/repo/bezp-monit/src/components/SlideComponents.jsx and InteractiveQuiz.jsx. Where CLAUDE.md and the kit differ, the kit wins (no emoji, one notes block per slide).
7. Model of form, tone and density (W2, written to the current spec): /home/claude/repo/bezp-monit/docs/wyklady-bezp/wyklad-02-analiza-ryzyka/ — look at index.md, 01-proces-zarzadzania-ryzykiem.mdx and 06-podsumowanie.mdx.

### Source material from the old W1 (not the result)
- Old pages: /home/claude/repo/bezp-monit/docs/wyklady-bezp/wyklad-01-zagrozenia-ramy-prawne/ (your pages only, plus index.md for context).
- Old claims ledger: /home/claude/repo/_lecture-kit/lectures/W01/claims.md — status of every claim of the old pages. You may reuse a claim of the old pages only if it is VERIFIED (or ADDED+VERIFIED) there or in the notes or in verified-facts; copy the URL exactly. Some Polish-law rows there are marked SECONDARY/UNVERIFIED but were later verified: verified-facts is authoritative.
- Old fix list: /home/claude/repo/_lecture-kit/lectures/W01/fixes.md — errors found by fact-checkers in the old W1. Never reintroduce them; where the old page text is the corrected form, it is safe wording.
- Do NOT copy the old form defects: quiz inside a slide; bibliography not in the W2 form; `<Example title="Przykład…">` instead of the bold label; percent with a space; numbers in the index plan table titles.

### Evidence rules (short form; the spec is binding)
- Facts only from items marked VERIFIED in your notes, verified-facts, or VERIFIED rows of the old claims ledger. SECONDARY → only with a visible hedge ("według …", "wg doniesień branżowych") and the link. UNVERIFIED/LISTED → omit, or phrase as something to check.
- No facts from memory (textbook fundamentals excepted). No invented statistics, incidents, quotations or "typical values".
- Small gap checks with WebSearch/WebFetch are allowed on official/standards-body/regulator/peer-reviewed sources only; record them as ADDED+VERIFIED. WebFetch cannot open isap.sejm.gov.pl, api.sejm.gov.pl or legislacja.gov.pl: for Polish law use only verified-facts.
- Every fact slide ends with a `Źródło:` line before the notes. Every URL on your pages must be in your claims ledger. Copy URLs exactly; never construct one.
- Law: distinguish obowiązuje / przyjęty, jeszcze niestosowany / projekt (drafts: "projekt" + draft date). Standards: always the edition; "są aktualne", never "obowiązują".
- Own judgements: "(ocena własna)". No causal claims the source does not make.

### Form (W2 form, as the spec prescribes)
- Front matter: keep the page title and sidebar_position of the old page (see your assignment).
- `<LearningObjective>` (one sentence) at the top of each topic page; `<SlideContainer>` with the slides; after `</SlideContainer>` a `## Źródła` numbered list.
- Bibliography entry form: `1. Autor A., Autor B. (2018). *Tytuł*. Czasopismo lub wydawca. [https://…](https://…)`; organisation as author: `EPRI (2024). *Tytuł*. [https://…](https://…)`; standards: `IEC (2022). *IEC 62682:2022 Management of alarm systems for the process industries*. [https://…](https://…)`. The link text is the URL itself (as in W2).
- Illustrative examples with assumed numbers: a paragraph starting with the bold label `**Przykład ilustracyjny — dane umowne.**` exactly (no `<Example>` component for these). Every such number is asserted in your calc file.
- Percent without a space ("4,4% obj.", "48%"); other units with a space ("30 kWh"); decimal comma; "×"; no emoji; no exclamation marks; no English sentences.
- Slide titles exactly as in plan.md (they are anchors); plain text.
- One `<InstructorNotes>` per slide: starts with "Czas: ~N min" (N exactly as in plan.md), then 60–150 words of spoken Polish, not a repeat of the bullets; where useful one question to the students and one typical misconception. The "Czas" values of a page must sum to that page's minutes in plan.md.
- 4–7 bullets per slide; tables at most about 6 rows × 5 columns; one idea per slide; blank line after every opening tag and before every closing tag.
- Import only the components you use. Components other than SlideContainer, Slide, InstructorNotes, LearningObjective, Example, InteractiveQuiz only with an explicit `title` without emoji.
- Acronyms: expand at first use on each page (students also read single pages) in the form "HAZOP (Hazard and Operability Study — badanie zagrożeń i zdolności do działania)"; afterwards use one term consistently.
- Links: other W1 pages as `./0N-….mdx`; W2 only as `../wyklad-02-analiza-ryzyka/index.md`; W3–W10 as plain text ("w W8"), never links.

### Shared terminology (all three writers use exactly these)
- zagrożenie, sytuacja zagrożenia, zdarzenie niebezpieczne, szkoda, ryzyko, ryzyko tolerowane, ryzyko resztkowe (defined on 02).
- niekontrolowany wzrost temperatury (ang. thermal runaway) — defined on 01.
- BESS (Battery Energy Storage System — bateryjny magazyn energii); BMS (Battery Management System — system zarządzania baterią); EMS (Energy Management System — system zarządzania energią); SCADA (Supervisory Control and Data Acquisition — system nadzoru i akwizycji danych); CMS (Condition Monitoring System — system monitorowania stanu); OT (Operational Technology — technika operacyjna, czyli systemy sterowania i automatyki).
- BPCS (Basic Process Control System — podstawowy system sterowania procesem); SIS (Safety Instrumented System — przyrządowy system bezpieczeństwa); SIF (Safety Instrumented Function — przyrządowa funkcja bezpieczeństwa); IPL (Independent Protection Layer — niezależna warstwa ochrony): skuteczna, niezależna, audytowalna; PFD (Probability of Failure on Demand — prawdopodobieństwo niezadziałania na żądanie); RRF (Risk Reduction Factor — współczynnik zmniejszenia ryzyka); SIL (Safety Integrity Level — poziom nienaruszalności bezpieczeństwa).
- DGW/GGW (dolna/górna granica wybuchowości, ang. LEL/UEL): methane 4,4% obj. / 17% obj., 100% DGW = 4,4% obj. (IFA GESTIS / CHEMSAFE, see verified-facts W01); older sources 5–15% only as "starsze źródła".
- H₂S: NDS 7 mg/m³, NDSCh 14 mg/m³ (Dz.U. 2026 poz. 447); IOELV 5 ppm / 10 ppm; IDLH 100 ppm. Process concentrations in the gas stream are not compared with NDS.
- ZZR / ZDR: zakład o zwiększonym / dużym ryzyku wystąpienia poważnej awarii przemysłowej.
- "stan prawny: wrzesień 2026".

### Your outputs
- Pages: /mnt/user-data/outputs/lecture/wyklad-01-zagrozenia-ramy-prawne/<your files> (create the folder if needed; do not touch the other writers' files).
- Claims ledger: /home/claude/work/W01/claims-<A|B|C>.md — markdown table: file | slide title | claim (short) | source URL | status (VERIFIED / SECONDARY / ADDED+VERIFIED / INFERENCE / TEXTBOOK / ILLUSTRATIVE / UNVERIFIED→hedged). One row per claim, including every URL on your pages.
- Calculation checks: /home/claude/work/W01/calc_<A|B|C>.py — start from /home/claude/repo/_lecture-kit/tools/calc_template.py; assert every displayed number that results from arithmetic (shares, sums, conversions, illustrative examples, dates computed from deadlines). Sections named after the page and slide.

### Quality gates (run them; fix until they pass for YOUR files)
- `python3 /home/claude/work/W01/calc_<A|B|C>.py` → no FAIL.
- `python3 /home/claude/repo/_lecture-kit/tools/lint_lecture.py /mnt/user-data/outputs/lecture/wyklad-01-zagrozenia-ramy-prawne --notes /home/claude/research/W01-W02 /home/claude/research/W01 /home/claude/repo/_lecture-kit/verified-facts --claims /home/claude/work/W01/claims-A.md /home/claude/work/W01/claims-B.md /home/claude/work/W01/claims-C.md` → fix every ERROR and WARN that concerns your files. Errors caused by files that do not exist yet or belong to another writer are expected while the others work; ignore them.
- `node /tmp/lecture-tools/check_mdx.mjs <your files>` → MDX CHECK OK.

### Final message to the coordinator (≤ 400 words)
Files and slides per page; minutes per page; claims hedged or left out on purpose (and why); items the lecturer must verify; deviations from plan.md; any check you could not run.

---

## ASSIGNMENT A — pages 01 and 02 (16 slides, 35 min)

Files:
- `01-zagrozenia-w-instalacjach-oze.mdx` — title "Zagrożenia w instalacjach OZE", sidebar_position 1, 26 min, 12 slides.
- `02-pojecia-podstawowe.mdx` — title "Pojęcia podstawowe: zagrożenie i ryzyko", sidebar_position 2, 9 min, 4 slides.
Slides and content: plan.md, sections "01-…" and "02-…". Mermaid 1 (thermal-runaway stages, Feng 2018) is on your slide "BESS: przebieg niekontrolowanego wzrostu temperatury".

Notes — read these completely:
- /home/claude/research/W01-W02/pv_bess_hazards.md
- /home/claude/research/W01-W02/wind_biogas_hazards_pl_fleet.md
- /home/claude/research/W01-W02/standards_terminology.md (Guide 51, ISO 12100, ISO 31000 definitions; R2P2; Edwards v NCB)
- /home/claude/research/W01/incidents_update.md (Moss Landing update to 25.09.2026, Vineyard Wind, McMicken, Czajków, G+ 2025)
- /home/claude/research/W01/pl_data_update.md (PSE/URE/KOWR figures, PSP statistics, KG PSP PV guideline 2022)
Search (grep) as needed: /home/claude/research/W01-W02/risk_framework_hazid_hazop.md (R2P2, ISO 31000, SVLFG, Casson Moreno), /home/claude/research/W01-W02/eu_legal_framework.md (89/391 hierarchy, EU-OSHA), /home/claude/research/W01/standards_recheck.md (ISO 12100 and ISO 31000 revision status).

Specific points:
- PV DC wording (lesson 2): the DC voltage of illuminated modules is not removed by the isolator at the inverter. Firefighting: distances depend on voltage and jet type and differ between guidelines — give no distances; for Polish practice name the KG PSP document "Standardowe zasady postępowania podczas zdarzeń w obrębie instalacji fotowoltaicznych" (2022) as in pl_data_update; detection, disconnection and firefighting details → "w W6".
- Wind: drop the old 1,5 × (D + H) ice-throw formula; say that ice throw/fall is assessed site-specifically (IEA Wind Task 19, as in the notes) and that distances are in W7. Vineyard Wind: only what incidents_update supports (BSEE order; state whether BSEE findings are published as of IX 2026 exactly as the notes say).
- Moss Landing: root cause not published (CPUC investigation ongoing, as in incidents_update); the September 2026 events exactly as the notes give them (dates, EPA page update date).
- "Jak czytać statystyki wypadków": the PSP "obecność instalacji PV" numbers are presence, not cause; different units are not one series; hedge trade-press numbers; illustrative example 100/200 000 vs 400/1 000 000 → 50 vs 40 na 100 tys., −20%.
- Page 02: Guide 51:2014 definitions with PV examples (examples labelled as illustrative where they are yours); ISO 12100 limits harm to people; ISO 31000:2018 (ed. 3 status as in standards_recheck); three-step hierarchy with 89/391; R2P2 regions and ALARP, gross disproportion (Edwards v NCB 1949); numbers of the risk criteria are in W2 → link `../wyklad-02-analiza-ryzyka/index.md` or plain "w W2". Current Polish PN-EN edition of ISO 12100 is NOT verified: do not give a PN-EN year; at most "aktualne polskie wydanie sprawdź w katalogu PKN".
- Forward reference to deliver (keep the wording): on "Mapa zagrożeń: ludzie, otoczenie, cyber" — "zagrożenia cyber dotyczą wszystkich technologii (szerzej w W10)".
- calc_A.py: 48% (37 106/77 331), +5,3 GW, 0,006% (Fraunhofer 75/1,3 mln, if you use it), BRE and Bednarczyk shares (sum 100%), HF 5 kWh → 100–1000 g, 50 vs 40 per 100 tys. and −20%, H₂S 7 mg/m³ ≈ 5 ppm (25 °C, 24,45 L/mol, M = 34,08 g/mol), EPRI 3/26 ≈ 11%, CH₄ 100% DGW = 4,4% obj. conversions if shown.

## ASSIGNMENT B — pages 03 and 04 (14 slides, 31 min)

Files:
- `03-ramy-prawne-ue-i-polska.mdx` — title "Ramy prawne UE i Polski", sidebar_position 3, 22 min, 10 slides.
- `04-normy.mdx` — title "Normy: mapa i aktualne wydania", sidebar_position 4, 9 min, 4 slides.
Slides and content: plan.md, sections "03-…" and "04-…". Mermaid 2 (map of legal frameworks) is on "Mapa ram prawnych".

Notes — read these completely:
- /home/claude/research/W01-W02/eu_legal_framework.md
- /home/claude/research/W01-W02/pl_legal_framework.md
- /home/claude/research/W01-W02/standards_terminology.md
- /home/claude/research/W01/eu_law_recheck.md
- /home/claude/research/W01/standards_recheck.md
- /home/claude/research/W01/pl_data_update.md
- both verified-facts files (again: authoritative).

Specific points:
- Every Polish legal statement must come from verified-facts (act, Dz.U. position, article, date, ISAP/ELI/RCL link). Anything else about Polish law: omit or "sprawdź w ISAP".
- Product law slide: Batteries Regulation art. 12 and Annex V (thermal propagation, gas emission), art. 13 label (18.08.2026 or 18 months after the implementing act, whichever is later — say it precisely), passport 18.02.2027, due diligence 18.08.2027 (2025/1561); RED DA 2022/30 from 1.08.2025, repealed from 11.12.2027 by 2026/339; Machinery Regulation 2023/1230 from 20.01.2027; CPR 2024/3110 from 8.01.2026 (only as far as eu_law_recheck supports each date).
- Seveso slide: thresholds from verified-facts (P2 10/50 Mg; poz. 18 50/200 Mg with objaśnienie 19; wodór 5/50 Mg); ZZR/ZDR; art. 248 POŚ; BESS is not a named entry. Illustrative example (biogas 60% CH₄/40% CO₂ at 1,22 kg/m³ → 10 t ≈ 8200 m³; 3000 m³ ≈ 3,7 t) with the caveat that the summation rule and the real composition decide; labelled exactly as required.
- KSC slide: key/important entities (art. 5), annex 1 electricity generators holding a generation concession; wykaz application per the minister's schedule — gov.pl gives self-registration until 3.10.2026 (as in verified-facts/pl_data_update, attributed to gov.pl); chapter-3 duties incl. SZBI within 12 months → 3.04.2027; first audit of key entities within 24 months → 3.04.2028; fines from 3.04.2028. CRA: reporting from 11.09.2026 (24 h / 72 h), full application 11.12.2027. NCCS 2024/1366. RfG 2016/631, Polish type thresholds (URE decision 16.07.2018), revision = draft with the consultation dates and planned adoption only as eu_law_recheck supports.
- WT slide: old WT stopped applying 19.09.2026 ("uznany za uchylony" wording only if verified-facts has it), transitional regime (art. 102a–102c, 18 months) exactly as verified-facts; new WT unpublished as of 29.09.2026 (ELI search), RCL project 12412604 after notification (2.09.2026), not signed → **projekt** (6.08.2026) with its PV and BESS requirements named without numbers ("szczegóły w W6 i W8"). The old separate slide "Projekt nowych WT: wymagania dla PV i BESS" is dropped: its content goes here in short form. CNBOP-PIB/PSME BESS guideline: only "nie został opublikowany (stan 29.09.2026)" if the notes support it.
- Do not mention the EU "Omnibus IV" proposal.
- "Kto za co odpowiada": add the owner's fire-protection duties (ustawa o ochronie ppoż. art. 4 ust. 1, t.j. Dz.U. 2025 poz. 188) and the Seveso operator.
- 04: editions exactly as standards_recheck (catalogue state 29.09.2026). The merged slide "Normy wspólne dla wszystkich technologii" replaces the old slides "Bezpieczeństwo funkcjonalne i ryzyko" and "Alarmy i cyberbezpieczeństwo OT" (≤ 6 table rows; group standards per row). Define functional safety; name SIL only.
- Forward references to deliver (keep the wording, in slide text or notes): on "Normy dla fotowoltaiki i energetyki wiatrowej" — IEC 60364-7-712:2025 covers storage coupled to PV and island operation, "łączy tematy W6 i W8"; on "Normy wspólne dla wszystkich technologii" — "Alarmy omówimy w W5", "IEC 62351 zabezpiecza protokoły komunikacyjne energetyki, które poznacie w W4", "cyberbezpieczeństwo OT w W10".
- calc_B.py: biogas density 0,6 × 0,717 + 0,4 × 1,977 ≈ 1,22 kg/m³, 10 t → m³, 3000 m³ → t; KSC dates (3.04.2026 + 12 months, + 24 months, + 2 years); any other arithmetic you show.

## ASSIGNMENT C — pages 05, 06 and index.md (10 slides + quiz, 24 min + index)

Files:
- `05-monitoring-a-warstwy-ochrony.mdx` — title "Monitoring a warstwy ochrony", sidebar_position 5, 19 min, 8 slides.
- `06-podsumowanie.mdx` — title "Podsumowanie i quiz", sidebar_position 6, 5 min, 2 slides, then `## Sprawdź się` with the quiz after `</SlideContainer>`, then `## Źródła` consolidated and grouped by theme (### subheadings as in W2).
- `index.md` — title "W1: Zagrożenia w instalacjach OZE, ramy prawne i warstwy ochrony", sidebar_position 1; per spec and plan.md (6 outcomes; plan table with titles WITHOUT numbers: 01 26 min, 02 9 min, 03 22 min, 04 9 min, 05 19 min, 06 5 min = 90 min; numbered "Najważniejsze źródła" 5–6 entries in the bibliography form; "Powiązania": next lecture linked `[W2: Analiza ryzyka — HAZID, HAZOP, FMEA, FTA, LOPA i SIL](../wyklad-02-analiza-ryzyka/index.md)` with one sentence, then W3–W10 plain text with their titles as in the old index/intro).
Slides and content: plan.md, sections "index.md", "05-…", "06-…". Mermaid 3 (layers of protection, onion model, CCPS order) is on "Warstwy ochrony w modelu cebuli".

Notes — read these completely:
- /home/claude/research/W01-W02/monitoring_vs_protection.md
- /home/claude/research/W01-W02/fta_lopa_sil.md (SAFEChE, HSE RR716, Derbyshire, CCPS values)
- /home/claude/research/W01/coordinator_checks.md (IEC 61511-1:2016 3.2.3 BPCS Note 2, clause 9.3 title, Figure 9 title — read in the official sample)
- /home/claude/research/W01/incidents_update.md (McMicken; Carnegie Road, Liverpool 2020 with the MFRS report)
Search (grep) as needed: /home/claude/research/W01-W02/pv_bess_hazards.md (McMicken timeline and factors), /home/claude/research/W01-W02/standards_terminology.md (ISA-18.2, IEC 62682, Reason).

Specific points:
- IPL criteria (skuteczna, niezależna, audytowalna — CCPS via SAFEChE); BPCS credit ≤ 10 (IEC 61511-1 cl. 9.3 via Derbyshire, hedged as the notes require); alarm definition (ISA-18.2); alarm + operator: PFD not lower than 0,1 under stated conditions (lesson 12); exida 0,5; HSE CHIS6 long-term average ≤ 1 alarm per 10 min in normal operation (lesson 11). Illustrative example 0,1 × 0,01 = 0,001 → RRF 1000, and why it is invalid with a common controller; LOPA arithmetic belongs to W2 (link to W2 index or plain "w W2").
- New active slide "Ćwiczenie: monitoring czy warstwa ochrony": six cases exactly as in plan.md; the answers with reasoning go into the instructor notes, labelled "(ocena własna)" where they go beyond the sources.
- McMicken: DNV GL timeline and five factors as in the notes; state that root-cause findings were disputed between investigators (lesson 14); Carnegie Road: one sentence in the notes only with the official MFRS report URL from incidents_update.
- Draft WT codifies the split (BMS monitors and disconnects; gas detector alarms, controls ventilation, disconnects) — **projekt** (6.08.2026), only as far as verified-facts supports.
- Forward references to deliver (keep the wording): in the table of "Monitoring i ochrona w technologiach OZE" the independent turbine safety system (e.g. overspeed; DNV-ST-0438; W7), and in its notes "Szczegóły każdej technologii omówimy w W6, W7, W8 i W9"; in the notes of "Jak monitoring wspiera bezpieczeństwo": "od W3 do W5 … jak zbudować monitoring, któremu można ufać" (W3 architecture and measurement chain, W4 communication, W5 data quality and alarms).
- 06: two slides as in plan.md (six takeaways; bridge to W2 and the course arc W3–W10 as plain text). Quiz: 10 questions from plan.md; double-quoted JS strings, Polish quotes „…” inside, no backticks; each explanation adds reasoning, not only the answer.
  IMPORTANT: pages 01–04 are being written in parallel by two other writers. Draft the quiz now from plan.md and the notes, using the exact numbers and wording of the notes/verified-facts. The coordinator will send you the finished pages 01–04 afterwards; you will then align every quiz fact exactly with the slides and build the consolidated `## Źródła` of 06 from all pages. Until then, put the 05 sources into the 06 bibliography and leave the other groups for the second round.
- calc_C.py: PFD 0,1 × 0,01 = 0,001 → RRF 1000; any other arithmetic you show; minutes of the index plan table (sum 90).
