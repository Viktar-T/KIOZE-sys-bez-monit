# Writer brief — W2 rewrite (29.09.2026)

This is the exact prompt given to the three writer agents (template W of `03-agent-prompts.md`, split into three parts that run in parallel). Section "COMMON" is identical for all three; each writer then got one "ASSIGNMENT" section (A, B or C).

---

## COMMON

Rewrite Lecture 2 of a Polish university course as Docusaurus MDX pages. The lecture already exists (written earlier today, "v1"); you write a NEW version from scratch to a stricter standard. Treat the v1 pages as a draft and as source material, never as the result. You are one of three writers working in parallel on disjoint pages of the same lecture; stay strictly inside your assignment.

Lecture: "W2: Analiza ryzyka — HAZID, HAZOP, FMEA, FTA, LOPA i SIL" (sidebar_position 2). Folder name: `wyklad-02-analiza-ryzyka`.
Today is 29.09.2026. Law: "stan prawny: wrzesień 2026". Standards catalogues: state on 29.09.2026.
Audience: 5th-semester engineering students of Renewable Energy (OZE) at ZUT Szczecin. Energy engineers, not computer scientists.

### Read first (in this order)
1. /home/claude/repo/_lecture-kit/01-writing-spec.md — the full writing specification. Follow it strictly (evidence rules, language, format, quality gates).
2. /home/claude/repo/_lecture-kit/05-feedback-and-lessons.md — lessons from earlier fact-checks; avoid every listed error (many of them were found in W2 v1).
3. /home/claude/repo/_lecture-kit/course-ledger.md — terms (§3), key numbers (§4), forward references (§5). Then /home/claude/repo/_lecture-kit/lectures/W01/ledger-update.md §2–§4: W1 was rewritten today (v2) and that file lists W1's new terms and corrected sources/numbers.
4. /home/claude/repo/_lecture-kit/verified-facts/pl-law-2026-09.md, pl-law-2026-09-W01.md AND pl-law-2026-09-W02.md — authoritative for Polish law, EU acts read in EUR-Lex, methane data (GESTIS) and the PKN catalogue entries. If notes or v1 pages disagree with them, they win; report the conflict.
5. /home/claude/work/W02/plan.md — the APPROVED page plan (the lecturer approved it). Slide titles, slide order, minutes per slide and content points are fixed. Adapt wording, not structure. If the evidence does not support a point, drop or hedge it and report.
6. /home/claude/repo/CLAUDE.md and the components /home/claude/repo/bezp-monit/src/components/SlideComponents.jsx and InteractiveQuiz.jsx. Where CLAUDE.md and the kit differ, the kit wins (no emoji, one notes block per slide).
7. W1 v2 — the prerequisite lecture and the model of form, tone and density (written today to the current spec): /home/claude/repo/bezp-monit/docs/wyklady-bezp/wyklad-01-zagrozenia-ramy-prawne/ — read index.md, 02-pojecia-podstawowe.mdx and 05-monitoring-a-warstwy-ochrony.mdx completely (W2 builds on them), skim the rest.

### Source material from W2 v1 (not the result)
- v1 pages: /home/claude/repo/bezp-monit/docs/wyklady-bezp/wyklad-02-analiza-ryzyka/ (your pages, plus index.md for context).
- v1 claims ledger: /home/claude/repo/_lecture-kit/lectures/W02/claims.md — status of every v1 claim. You may reuse a v1 claim only if it is VERIFIED (or ADDED+VERIFIED) there or in the notes or in verified-facts; copy the URL exactly. The NEW notes in /home/claude/research/W02/ override the old notes and the v1 ledger where they disagree.
- v1 fix list: /home/claude/repo/_lecture-kit/lectures/W02/fixes.md — errors found by fact-checkers in v1. Never reintroduce them; where the v1 page text is the corrected form, it is safe wording.
- v1 calc script: /home/claude/repo/_lecture-kit/lectures/W02/calc.py — only to see how v1 computed things. You write NEW calc code and recompute every number yourself.
- Do NOT copy the v1 form defects: percent with a space ("4,4 % obj."); label variants such as "**Przykład ilustracyjny** — …"; "obowiązuje" for a standard (write "jest aktualna/aktualne"); redefinitions of terms W1 now defines (see "Depth rule").

### Depth rule: W1 is the prerequisite — link back, do not redefine
W1 defines these; use the same Polish terms and link to the W1 PAGE (not to an #anchor — W1 may be edited in parallel): zagrożenie, sytuacja zagrożenia, zdarzenie niebezpieczne, szkoda, ryzyko (dwa ujęcia), ryzyko tolerowane, ryzyko resztkowe, hierarchia zmniejszania ryzyka, ALARP, trzy obszary, rażąca dysproporcja → `[W1, część 2](../wyklad-01-zagrozenia-ramy-prawne/02-pojecia-podstawowe.mdx)`; monitoring a funkcja ochronna, model cebuli, model sera szwajcarskiego, kryteria IPL (skuteczna, niezależna, audytowalna), BPCS ≤ 10, definicja alarmu, alarm + operator PFD nie mniejsze niż 0,1, CHIS6, SIS/SIF, RRF (named) → `[W1, część 5](../wyklad-01-zagrozenia-ramy-prawne/05-monitoring-a-warstwy-ochrony.mdx)`; bezpieczeństwo funkcjonalne, SIL named → `[W1, część 4](../wyklad-01-zagrozenia-ramy-prawne/04-normy.mdx)`; DGW/GGW metanu, H₂S NDS/NDSCh, McMicken, EPRI → `[W1, część 1](../wyklad-01-zagrozenia-ramy-prawne/01-zagrozenia-w-instalacjach-oze.mdx)`; ZZR/ZDR, DZPW, prawo pracy → `[W1, część 3](../wyklad-01-zagrozenia-ramy-prawne/03-ramy-prawne-ue-i-polska.mdx)`. A one-line recap is fine ("przypomnienie z W1: …"), a new definition is not. Everything W2 itself introduces (HAZID … PL) is defined here, at first use, with a bold term.
Topics owned by later lectures get at most one sentence, as plain text ("w W3"), never a link: measurement chain and accuracy (W3), alarm rationalisation (W5), turbine safety system, PL/SIL resolution for turbines and CMS details (W7), cause-and-effect matrix (W8), gas-detector selection, set points, Ex zones (W9), management of change, permits, incident investigation (W10).

### Evidence rules (short form; the spec is binding)
- Facts only from items marked VERIFIED in your notes, in verified-facts, or VERIFIED rows of the v1 claims ledger. SECONDARY / VERIFIED-SECONDARY → only with a visible hedge ("według …", "wg …") and the link. UNVERIFIED/LISTED → omit, or phrase as something to check.
- No facts from memory (textbook fundamentals such as AND/OR probability rules or λT/2 excepted). No invented statistics, incidents, quotations or "typical values".
- Small gap checks with WebSearch/WebFetch are allowed on official/standards-body/regulator/peer-reviewed sources only; record them as ADDED+VERIFIED. WebFetch cannot open isap.sejm.gov.pl, api.sejm.gov.pl or legislacja.gov.pl: for Polish law use only verified-facts.
- Every fact slide ends with a `Źródło:` line before the notes. Every URL on your pages must be in your claims ledger. Copy URLs exactly; never construct one.
- Law: distinguish obowiązuje / przyjęty, jeszcze niestosowany / projekt. Standards: always the edition; "jest aktualna", never "obowiązuje". Keep the modality of the source ("should" ≠ "musi"; "may" ≠ "realizuje").
- Own judgements and teaching mappings: "(ocena własna)". No causal claims the source does not make (lesson 13).
- Quote clause numbers of standards only where the notes verified them; otherwise name the standard without the clause.

### Form (spec §5, W2 form)
- Front matter of each topic page: `title` and `sidebar_position` exactly as in your assignment.
- `<LearningObjective>` (one sentence) at the top of each topic page; `<SlideContainer>` with the slides; after `</SlideContainer>` a `## Źródła` numbered list.
- Bibliography entry form: `1. Autor A., Autor B. (2018). *Tytuł*. Czasopismo lub wydawca. [https://…](https://…)`; organisation as author: `EPRI (2024). *Tytuł*. [https://…](https://…)`; standards: `IEC (2016). *IEC 61882:2016 Hazard and operability studies (HAZOP studies) — Application guide*. [https://…](https://…)`. The link text is the URL itself.
- Illustrative examples with assumed numbers: a paragraph starting with the bold label `**Przykład ilustracyjny — dane umowne.**` exactly (period inside the bold), then one sentence on what the example is built from. No other variants, no `<Example>` component for these. Every such number is asserted in your calc file. A table assembled only from sourced facts is labelled "zestawienie dydaktyczne (ocena własna)", not as an illustrative example.
- Percent without a space ("4,4% obj.", "11%", "0,5–5%"); other units with a space ("30 kWh", "8760 h", "10⁻⁶ /rok" or "10⁻⁶ na rok"); decimal comma; "×"; KaTeX with `{,}` for the decimal comma (`0{,}01`); no `$` for currency; no emoji; no exclamation marks; no English sentences (English terms only in the acronym expansion or as "ang. …").
- Slide titles exactly as in plan.md (they are anchors); plain text; `type` one of info/tip/warning/danger/success/default.
- One `<InstructorNotes>` per slide: starts with "Czas: ~N min" (N exactly as in plan.md, e.g. "Czas: ~2,5 min"), then 60–150 words of natural spoken Polish, not a repeat of the bullets; where useful one question to the students and one typical misconception. The "Czas" values of a page must sum to that page's minutes in plan.md.
- 4–7 bullets per slide; tables at most about 6 rows × 5 columns; one idea per slide; blank line after every opening tag and before every closing tag; blank lines around tables, lists, mermaid fences.
- Mermaid: `flowchart TD`/`LR`, ≤ 12 nodes, labels in `["…"]`, raw characters (no HTML entities), no parentheses outside quotes.
- Import only the components you use. Components other than SlideContainer, Slide, InstructorNotes, LearningObjective, Example, InteractiveQuiz only with an explicit `title` without emoji.
- Acronyms: expand at first use on each page (students also read single pages) in the form "HAZOP (Hazard and Operability Study — badanie zagrożeń i zdolności do działania)"; afterwards use one term consistently.
- Links: other W2 pages as `./0N-….mdx`; W1 pages as `../wyklad-01-zagrozenia-ramy-prawne/0N-….mdx` (page level, no #anchors); W3–W10 as plain text ("w W8"), never links.

### Shared terminology (all three writers use exactly these)
- ISO 31000 process: ustalenie zakresu, kontekstu i kryteriów; **ocena ryzyka** = identyfikacja ryzyka + analiza ryzyka + ewaluacja ryzyka; postępowanie z ryzykiem; monitorowanie i przegląd; komunikacja i konsultacje; rejestrowanie i raportowanie; kryteria ryzyka.
- HAZID (Hazard Identification — identyfikacja zagrożeń); SWIFT (Structured What-If Technique — ustrukturyzowana technika „co, jeśli”); rejestr zagrożeń.
- HAZOP (Hazard and Operability Study — badanie zagrożeń i zdolności do działania); część (węzeł), zamierzenie projektowe, właściwość (ang. property), cecha (ang. characteristic), słowo przewodnie, odchylenie = słowo przewodnie + cecha. Guide words in capitals, exactly the v1 forms: BRAK/NIE, WIĘCEJ, MNIEJ, ORAZ, CZĘŚĆ, ODWROTNIE, INNY NIŻ; time/sequence: WCZEŚNIEJ, PÓŹNIEJ, PRZED, PO; one form throughout (English in brackets only in the table).
- FMEA (Failure Modes and Effects Analysis — analiza rodzajów i skutków uszkodzeń); FMECA (Failure Modes, Effects and Criticality Analysis — analiza rodzajów, skutków i krytyczności uszkodzeń); rodzaj uszkodzenia, skutek uszkodzenia; S — ciężkość (ang. severity), O — występowanie (ang. occurrence), D — wykrywalność (ang. detection; wyższa ocena = trudniej wykryć); RPN (Risk Priority Number — liczba priorytetu ryzyka) = S × O × D; AP (Action Priority — priorytet działania) H/M/L; macierz krytyczności.
- FTA (Fault Tree Analysis — analiza drzewa niezdatności); zdarzenie szczytowe, zdarzenie pośrednie, zdarzenie podstawowe, zdarzenie nierozwinięte; bramka AND, bramka OR; minimalny przekrój (ang. minimal cut set); przybliżenie rzadkich zdarzeń.
- CCF (Common Cause Failure — uszkodzenie spowodowane wspólną przyczyną); model współczynnika β.
- ETA (Event Tree Analysis — analiza drzewa zdarzeń); zdarzenie inicjujące.
- bow-tie (analiza muszki, ang. bow-tie); zdarzenie szczytowe (in bow-tie = zdarzenie niebezpieczne from W1); zagrożenie → przyczyny (ang. threats); bariery zapobiegawcze; bariery ograniczające skutki; czynniki degradacji i środki kontroli czynników degradacji.
- LOPA (Layer of Protection Analysis — analiza warstw ochrony); IEF (Initiating Event Frequency — częstość zdarzenia inicjującego); IPL (Independent Protection Layer — niezależna warstwa ochrony); PFD (Probability of Failure on Demand — prawdopodobieństwo niezadziałania na żądanie); RRF (Risk Reduction Factor — współczynnik zmniejszenia ryzyka); modyfikator warunkowy (ang. conditional modifier); f_tol — docelowa (tolerowana) częstość scenariusza.
- BPCS (Basic Process Control System — podstawowy system sterowania procesem); SIS (Safety Instrumented System — przyrządowy system bezpieczeństwa); SIF (Safety Instrumented Function — przyrządowa funkcja bezpieczeństwa).
- SIL (Safety Integrity Level — poziom nienaruszalności bezpieczeństwa); PFDavg — średnie prawdopodobieństwo niebezpiecznego uszkodzenia na żądanie; PFH — średnia częstość niebezpiecznych uszkodzeń na godzinę; tryb niskiego zapotrzebowania; tryb wysokiego zapotrzebowania; tryb ciągły; 1oo1, 1oo2 ("jeden z jednego", "jeden z dwóch"); test sprawdzający (ang. proof test), interwał testów sprawdzających T₁; λDU, λDD; MTTR, MRT.
- PL (Performance Level — poziom zapewnienia bezpieczeństwa); PLr — wymagany poziom zapewnienia bezpieczeństwa; kategoria.
- macierz przyczynowo-skutkowa (only named; W8).
- Methane: DGW 4,4% obj., GGW 17% obj. (IFA GESTIS / CHEMSAFE and GisChem, as W1 v2; older sources 5–15% only as "starsze źródła"). H₂S in workplace air: NDS 7 mg/m³, NDSCh 14 mg/m³ (Dz.U. 2026 poz. 447) — link W1 part 1; H₂S in the biogas stream is a process concentration and is never compared with NDS (lesson 20).
- BESS, BMS, SCADA, CMS expansions exactly as W1 (ledger-update §2).
- "stan prawny: wrzesień 2026".

### Notes — where things are
Old notes (v1 research, still valid unless the new notes correct them): /home/claude/repo/_lecture-kit/research/W01-W02/
New notes (today, gap research; they override the old ones): /home/claude/research/W02/
Each assignment lists which files to read completely and which to search.

### Your outputs
- Pages: /mnt/user-data/outputs/lecture/wyklad-02-analiza-ryzyka/<your files> (create the folder if needed; do not touch the other writers' files).
- Claims ledger: /home/claude/work/W02/claims-<A|B|C>.md — markdown table: file | slide title | claim (short) | source URL | status (VERIFIED / VERIFIED-SECONDARY / SECONDARY / ADDED+VERIFIED / INFERENCE / TEXTBOOK / ILLUSTRATIVE / UNVERIFIED→hedged). One row per claim, including every URL on your pages. Where the status comes from a note, add the note file and finding number in the claim cell (e.g. "risk_criteria_matrix Q3 #12").
- Calculation checks: /home/claude/work/W02/calc_<A|B|C>.py — start from /home/claude/repo/_lecture-kit/tools/calc_template.py; assert every displayed number that results from arithmetic (products, sums, ratios, shares, conversions, illustrative examples, quiz numbers). Sections named after the page and slide. Use exactly the values written on the page as `on_page`.

### Quality gates (run them; fix until they pass for YOUR files)
- `python3 /home/claude/work/W02/calc_<A|B|C>.py` → ALL CHECKS PASSED.
- `python3 /home/claude/repo/_lecture-kit/tools/lint_lecture.py /mnt/user-data/outputs/lecture/wyklad-02-analiza-ryzyka --notes /home/claude/repo/_lecture-kit/research/W01-W02 /home/claude/research/W02 /home/claude/repo/_lecture-kit/verified-facts --claims /home/claude/work/W02/claims-A.md /home/claude/work/W02/claims-B.md /home/claude/work/W02/claims-C.md` → fix every PROBLEM and WARN that concerns your files. Problems caused by files that do not exist yet or belong to another writer are expected while the others work; ignore them.
- `node /tmp/lecture-tools/check_mdx.mjs <your files>` → MDX CHECK OK.
- Self-check before reporting: `grep -n " %" <your files>` finds no percent with a space; `grep -n "Przykład ilustracyjny" <your files>` shows only the exact bold label; `grep -n "obowiązuj" <your files>` is used only for law, never for a standard.

### Final message to the coordinator (≤ 400 words)
Files and slides per page; minutes per page; claims hedged or left out on purpose (and why); items the lecturer must verify; deviations from plan.md; any check you could not run.

---

## ASSIGNMENT A — pages 01 and 02 (15 slides, 35 min)

Files:
- `01-proces-zarzadzania-ryzykiem.mdx` — title "Proces zarządzania ryzykiem i kryteria", sidebar_position 1, 15 min, 7 slides.
- `02-hazid-i-hazop.mdx` — title "HAZID i HAZOP", sidebar_position 2, 20 min, 8 slides.
Slides and content: plan.md, sections "01-…" and "02-…". Mermaid 1 (ISO 31000 process with the method families) is on "Proces ISO 31000 i miejsce metod"; mermaid 2 (HAZOP examination loop) is on "Zespół i przebieg badania HAZOP".

Notes — read these completely:
- /home/claude/repo/_lecture-kit/research/W01-W02/risk_framework_hazid_hazop.md
- /home/claude/research/W02/risk_criteria_matrix.md
- /home/claude/research/W02/coordinator_checks.md (R2P2 read first-hand: this closes gap 1 of risk_criteria_matrix — cite "HSE R2P2 (2001), pkt 130, 132, 136" with the GOV.UK copy URL given there)
- /home/claude/research/W02/biogas_hazop_measurements.md
- /home/claude/research/W02/standards_status.md (Q1–Q4, Q14, Q18 and "Changes in the last two years")
Search (grep) as needed: /home/claude/repo/_lecture-kit/research/W01-W02/standards_terminology.md (ISO 31000/Guide 51 wording, IEC 61882 terms), /home/claude/repo/_lecture-kit/research/W01-W02/wind_biogas_hazards_pl_fleet.md (biogas, SVLFG, Casson Moreno, Rhadereistedt).

Specific points:
- 01 "Od opisu zagrożeń do analizy ryzyka": no definitions; recap W1's scenario chain with a link; which method looks at which link = teaching mapping "(ocena własna)"; three questions for today.
- 01 "Proces ISO 31000 i miejsce metod": ISO 31000:2018 is guidance, "jest aktualna"; edition 3 at CD stage (as standards_status Q2 says, with date); mapping of method families to process steps = IEC 31010 Annex B families + "(ocena własna)" where it goes beyond. Notes: one sentence "zarządzanie zmianą i badanie zdarzeń zamykają pętlę i wracają do analizy ryzyka — w W10".
- 01 "Ocena ryzyka w polskim prawie" (new): only what verified-facts W02 (and pl-law-2026-09 for DZPW § 7) contains: KP art. 207 § 1, art. 226 (t.j. Dz.U. 2026 poz. 1245) with the ISAP link; rozp. ogólne BHP § 2 pkt 7 (definition of ryzyko zawodowe, quote it) and § 39a ust. 1 and 3 (what the documentation must contain); DZPW prepared on the basis of a risk assessment (rozp. MG z 8.07.2010, § 7) — link W1 part 3; neither act prescribes a method; PN-N-18002:2011 = Polish standard, voluntary, current in the PKN shop, general guidance for occupational risk assessment; the 3 × 3 scheme only as "CIOP-PIB opisuje dla wydania z 2000 r. …" if risk_criteria_matrix Q7 supports it. Do NOT claim that Poland has no numerical risk criteria in general: say only that the acts above do not set a method or numerical criteria. Point (ocena własna): occupational risk assessment looks at the workstation; the methods of this lecture analyse the installation; their results feed both. "stan prawny: wrzesień 2026".
- 01 "Kryteria tolerowalności ryzyka": criteria are set before the analysis (ISO 31000 6.3.4). R2P2 exactly as coordinator_checks §1: 10⁻⁶ /rok = "wytyczna" for the boundary broadly acceptable/tolerable (pkt 130); 10⁻³ /rok workers and 10⁻⁴ /rok public as the upper limit HSE took from its nuclear tolerability document, and "these limits rarely bite" (pkt 132–133); ≥ 50 deaths in one event with frequency > 1/5000 per year intolerable (pkt 136). Netherlands 10⁻⁶ /rok (Bkl art. 5.7; RIVM/IPLO, as the notes support). One bullet: a target for a single LOPA scenario is set below the limit for a person (Stanley et al. 2018) — used in part 5. ALARP only by link to W1 part 2.
- 01 matrix slides: the v1 5 × 5 people-only matrix (F1–F5 frequency decades, C1–C5, rule Fi + Cj ≥ 8 → N, 6–7 → T, else A) — assert every cell and each pair you mention in calc_A.py. State that this illustrative matrix is not calibrated to R2P2 (and show one cell where it disagrees, recomputed). Limitations: IEC 31010:2019 B.10.3 (risk matrix listed under recording and reporting techniques, if the notes confirm), Cox 2008 (quote only what the notes verified; attribute each point), Baybutt — titles and verified points only.
- 02 HAZID/SWIFT: ISO 17776:2016 (confirmed 2022 per standards_status Q3); offshore origin — using it for OZE is an interpretation (ocena własna). Checklist table as "zestawienie dydaktyczne (ocena własna)" with methane DGW/GGW (GESTIS/CHEMSAFE, GisChem — same values as W1; link W1 part 1).
- 02 HAZOP terms: IEC 61882:2016 (ed. 2; "jest aktualna"); PN-EN 61882:2016-07 is an English-language version with the Polish title "Badania zagrożeń i zdolności do działania (badania HAZOP) — Przewodnik zastosowań"; PN-IEC 61882:2005 (Polish version) withdrawn and replaced (verified-facts W02). "cecha" = characteristic; "właściwość" = property (our translation; lesson 17).
- 02 examples (biogas holder): TRAS 120 clause numbers exactly as biogas_hazop_measurements confirms (it warns that the extraction was once inconsistent — use only clauses marked VERIFIED); SVLFG TI 4: use only the VERIFIED items (the "O₂ < 3% przy CH₄ > 30%" criterion and the 20 mbar liquid seal have unverified context → omit); O₂ from air dosing: compute the O₂ fraction from the verified air limit in calc_A.py and state your formula; H₂S in raw biogas = process concentration (ppm in the gas), never compared with NDS; odour: only what OSHA says as in the notes; Rhadereistedt 2005: only what UBA/Jenkins support (no exact date).
- 02 "Od wyników HAZOP do wymagań" (keep the title): deliver these forward references in the slide text, wording kept: "jakie wielkości mierzyć (napełnienie, O₂, H₂S, CH₄), gdzie i z jaką dokładnością — tor pomiarowy w W3" and "racjonalizację alarmów opisuje IEC 62682:2022 (rozdz. 9) — W5". The measurement table: which quantity, where, why (from biogas_hazop_measurements "Inferences", labelled "(ocena własna)" where inferred); no accuracy values (not in the sources — that is the point of W3). Alarm definition only by link to W1 part 5. Detector selection and set points "w W9".
- calc_A.py: matrix cells and pairs; any cell compared with R2P2; O₂ from air dosing; any other arithmetic you show.

## ASSIGNMENT B — pages 03 and 04 (14 slides, 31 min)

Files:
- `03-fmea-i-fmeca.mdx` — title "FMEA i FMECA", sidebar_position 3, 15 min, 7 slides.
- `04-fta-eta-i-bow-tie.mdx` — title "FTA, ETA i bow-tie", sidebar_position 4, 16 min, 7 slides.
Slides and content: plan.md, sections "03-…" and "04-…". Mermaid 3 (BESS gas fault tree) is on "Przykład drzewa: gazy w kontenerze BESS"; mermaid 4 (bow-tie of the biogas holder, LR, ≤ 12 nodes) on "Bow-tie dla zbiornika biogazu".

Notes — read these completely:
- /home/claude/repo/_lecture-kit/research/W01-W02/fmea_fmeca.md
- /home/claude/research/W02/fmea_update.md (read its CORRECTION C1/C2 first: gearbox 231 h, not 298 h)
- /home/claude/repo/_lecture-kit/research/W01-W02/fta_lopa_sil.md (FTA, ETA, bow-tie, CCF parts)
- /home/claude/research/W02/ccf_fta_eta_bess.md
Search (grep) as needed: /home/claude/research/W02/standards_status.md (Q5–Q8, Q15, Q17), /home/claude/research/W02/biogas_hazop_measurements.md (Q5 bow-tie/Scarponi/Casson Moreno; TRAS 120 2.1(6), 2.1(14), 2.6.3(3)), /home/claude/repo/_lecture-kit/research/W01-W02/pv_bess_hazards.md (McMicken), /home/claude/repo/_lecture-kit/research/W01-W02/risk_framework_hazid_hazop.md (bow-tie, IEC 31010 B.4.2).

Specific points:
- 03: IEC 60812:2018 (ed. 3, "jest aktualna"); scales are not imposed by the standard; Tavner 2010 / Shafiee & Dinmohammadi 2014 scales; RPN combinatorics (1–10 scales: 1000 combinations, 120 distinct values, 60/72/120 each from 24 combinations, none between 900 and 1000, mean 166,4, median 105 — compute ALL in calc_B.py by enumeration, and the same for the Tavner scales); RPN tie example; do not attribute wording to Bowles 2003 (abstract not read). AIAG & VDA 2019: 1st edition (2nd printing, errata only); drop any "new edition announced" statement; AP H/M/L principle only (tables not reproduced).
- 03 Shafiee Table 7: recompute every RPN and rank in calc_B.py. Carroll 2016: 8,3 = 6,2 + 1,1 + 0,3 + 0,7 (no cost data), subsystem rates and ratio; gearbox major replacement 231 h and ≈230 000 EUR (VERIFIED-SECONDARY: figures only — hedge "wg wykresów w artykule"). Walgern et al. 2026: only what fmea_update KQ6 verified; do not compare absolute rates with Carroll (different failure definitions). PV: Colli 2015, Hacke 2018 with the hedges in the notes.
- 03 "Od FMEA do utrzymania ruchu i monitoringu": IEC 60300-3-11:2009 at clause level only as fmea_update KQ5 verified (do not quote the decision logic or "no scheduled maintenance" as the standard's words); BESS: Sandia/PNNL 2020 uses STPA (not FMEA) — the 5–30 min vent-gas lead "in some cases" exactly as verified; EPRI 2024 cells 3 of 26 classified (11%) with link to W1 part 1; CMS is not a substitute for independent safety systems (DNVGL-SE-0439:2016, clause as verified; official DNV page URL; current edition 2016-06 amended 2021-10).
- 04 FTA: IEC 61025:2006 (ed. 2, "jest aktualna"); NUREG-0492 and NASA 2002 handbooks; OZE applications only as verified (drop any that are not).
- 04 BESS tree: v1 structure (T = AND of G1 and G2; G1 = OR of A 0,01, B 0,02, C 0,05; G2 = OR of G3 and V 0,005; G3 = AND of D1, D2 0,02 each). Compute exactly and by cut-set sum; rare-event errors (also 0,1/0,2/0,3); V share. McMicken link: DNV GL 2020 (use the W1 v2 McMicken URL, the `.pdf?la=en&sc_lang=en&hash=…` form in W1 index.md) and that the root cause was disputed (UL 2021) — exactly as ccf_fta_eta_bess Q6 words it; structure "relates to" the case, it is not a model of it.
- 04 CCF: β ranges only as verified (0,5–5% logic; 1–10% sensors/final elements, IEC 61508-6 Annex D via NTNU / Lundteigen & Rausand); no Annex D table values. β table for a pair q = 0,02 (β = 0; 0,02; 0,05; 0,10) and P_T with β = 0,10 — all in calc_B.py. Rosewater & Williams 2015 only if verified in the new notes.
- 04 ETA: IEC 62502:2010; IEC 61511-3:2016 Annex B (semi-quantitative ETA) only as far as Q8 verified. Ignition probability 0,5 is an assumption (no BESS-specific published value found) — say so. Use f_IE = 0,07831 /rok consistently (or show the rounding explicitly) and check that the outcome frequencies sum to f_IE. "Bez zapłonu" is not safe: McMicken explosion when the door was opened, wording exactly as Q6 verified.
- 04 bow-tie: CCPS & EI 2018; IEC 31010 B.4.2 if verified; barrier criteria by link to W1 part 5 (same three words, no redefinition); training, MOC and audits support barriers but are not barriers; biogas bow-tie with a degradation factor (frozen liquid seal) and its control TRAS 120 2.1(6) if verified; Scarponi et al. 2015 distances with their conditions; SCADA shows barrier state but is not a barrier; "W9 rozszerzy ten przykład" as plain text.
- calc_B.py: all RPN combinatorics; Shafiee table; Carroll sum and ratio; gearbox D 7 → 1 (84 → 12); FTA exact/cut-set/rare-event; β table and P_T; ETA outcomes and sum; anything else you show.

## ASSIGNMENT C — pages 05, 06 and index.md (11 slides + quiz, 24 min + index)

Files:
- `05-lopa-i-sil.mdx` — title "LOPA i SIL", sidebar_position 5, 19 min, 9 slides.
- `06-podsumowanie.mdx` — title "Podsumowanie i quiz", sidebar_position 6, 5 min, 2 slides, then `## Sprawdź się` with the quiz after `</SlideContainer>`, then `## Źródła` consolidated and grouped by theme (### subheadings as in v1 06 and W1 v2 06).
- `index.md` — title "W2: Analiza ryzyka — HAZID, HAZOP, FMEA, FTA, LOPA i SIL", sidebar_position 2; per spec and plan.md "index.md": first paragraph 2–3 sentences; 6 outcomes; plan table with titles WITHOUT numbers (01 15 min, 02 20, 03 15, 04 16, 05 19, 06 5 = 90 min); numbered "Najważniejsze źródła" (6 entries in the bibliography form, as plan.md lists); "Powiązania": previous lecture linked `[W1: Zagrożenia w instalacjach OZE, ramy prawne i warstwy ochrony](../wyklad-01-zagrozenia-ramy-prawne/index.md)` with one sentence on what is reused; "Następny wykład: W3: Architektura monitoringu i tor pomiarowy — …" as PLAIN TEXT (the coordinator links it at install time if W3 exists); "Dalej:" list W5, W7, W8, **W9 — bezpieczeństwo procesowe biogazowni** (keep this wording: it is a forward reference), W10, each with the exact title as in W1 index.md and a few words on what W2 feeds into it.
Slides and content: plan.md, sections "index.md", "05-…", "06-…". No mermaid on your pages is required.

Notes — read these completely:
- /home/claude/repo/_lecture-kit/research/W01-W02/fta_lopa_sil.md
- /home/claude/research/W02/lopa_sil_pl.md
- /home/claude/research/W02/risk_criteria_matrix.md (Q1–Q3 for f_tol and RR716 pitfalls)
- /home/claude/research/W02/ccf_fta_eta_bess.md (Q1–Q3 for β and the 1oo2 formula)
- /home/claude/repo/_lecture-kit/research/W01-W02/monitoring_vs_protection.md
Search (grep) as needed: /home/claude/research/W02/standards_status.md (Q9–Q14, Q17), /home/claude/research/W02/biogas_hazop_measurements.md (TRAS 120 2.1(14), 2.6.3(3)), /home/claude/research/W02/coordinator_checks.md (R2P2), /home/claude/research/W02/fmea_update.md (KQ8 DNV-SE-0439 edition), /home/claude/repo/_lecture-kit/research/W01/coordinator_checks.md (IEC 61511-1:2016 sample: 3.2.3, clause 9.3 title).

Specific points:
- 05 "LOPA: scenariusz i równanie": one scenario = one initiating event + one consequence; $f^C_i = IEF_i \times \prod_j PFD_{ij}$ (Willey 2014); RRF = f/f_tol; conditional modifiers only with justification (RR716); the onion model of W1 part 5 "becomes a table of frequencies and PFDs" (link).
- 05 "Warstwy ochrony w LOPA: typowe błędy" (replaces the v1 slide on IPL criteria): criteria and BPCS/alarm credits only by a one-line recap + link to W1 part 5. The content is the RR716 pitfalls exactly as lopa_sil_pl Q6 verified (cite RR716 by section, not page; the "Company A/B/C/E" labels only if the notes use them); alarm + operator as OR of sensor and human 1 − 0,9 × 0,9 = 0,19 (calc).
- 05 "Typowe wartości IEF i PFD": generic values via SAFEChE (CCPS; secondary — hedge as the ledger says) — not site data; 10⁻⁵/h × 8760 h = 0,0876 /rok ≈ 0,1 (RR716 on the edition-1 BPCS limit, as verified). IEC 61511-3 Annex F tables exist — not quoted.
- 05 LOPA example (biogas holder, v1 scenario): IEF 0,1 /rok; f_tol = 5 × 10⁻⁶ /rok = the organisation's assumption, justified by the single-scenario target range (Stanley et al. 2018, as risk_criteria_matrix Q3 verified) and R2P2 (link part 1); layers table (flare started by the same BPCS — not an IPL; mechanical relief with liquid seal — IPL 0,01, generic, must be justified, freezing; alarm + operator variant A unmanned — not an IPL; variant B independent sensor + staff + procedure — 0,1). Variant A: f = 10⁻³, RRF 200, PFDavg ≤ 5 × 10⁻³ → SIL 2; variant B: 10⁻⁴, RRF 20 → SIL 1; 1oo1 check with λDU = 2 × 10⁻⁶/h (T₁ = 1 rok → 8,76 × 10⁻³ in the SIL 2 band but f = 8,76 × 10⁻⁶ > 5 × 10⁻⁶; T₁ = 6 mies. → 4,38 × 10⁻³, f = 4,38 × 10⁻⁶) → "przedział SIL to za mało — liczy się wymagane PFDavg"; sensitivity: an unjustified ignition modifier 0,1 → RRF 20 (SIL 1). Make sure no required RRF lands exactly on a SIL band boundary (lesson 6). TRAS 120 clause numbers only as verified.
- 05 "SIL: tryby pracy i miary": SIL 1–4 bands of PFDavg and PFH (IEC 61508-1:2010 Tables 2/3 via King 2014; IEC 61511-1:2016 Tables 4/5 titles as verified in the official sample) and RRF bands; demand modes in IEC 61508 wording via King 2014 (not IEC 61511 clause numbers — not verified); SIL is a property of the whole function; architectural constraints and systematic capability named. Status: IEC 61508:2010 ed. 2 "jest aktualna", ed. 3 in progress (as standards_status Q9 says, with the expected date only as worded there); IEC 61511:2016+AMD1:2017 (the 2026 "SER" is a re-packaging, as Q10 says). Voluntary; one line on harmonised standards only if you can source it — otherwise omit.
- 05 1oo1 and 1oo2: formulas via IEC 61508-6 / Lundteigen & Rausand as verified; the table λDU = 2 × 10⁻⁶/h for 6 mies. / 1 rok / 2 lata; λDD variant (10⁻⁶/h, MTTR 8 h → 8,768 × 10⁻³); RR716 float switch 19,3 × 10⁻⁶/h only if verified; 1oo2 with β = 0; 0,02; 0,05; 0,10 and the ratios (all in calc_C.py). State which simplified formula set you use.
- 05 "Maszyny i turbiny wiatrowe: PL i SIL" (keep the title): ISO 13849-1:2023 (ed. 4) — PL, PLr, category as verified; PL a–e are defined by PFH ranges in the standard's Table 2 — do NOT give the numbers (unverified); risk graph in Annex A named only; a PL–SIL correspondence exists (clause 6.1.2) — no mapping details; IEC 62061:2021+AMD1:2024+AMD2:2026; IEC 61400-1:2019+AMD1:2025 covers control and protection functions; DNV-ST-0438 scope only — do not attribute an independence requirement to it; Machinery Regulation (EU) 2023/1230 applies from 20.01.2027 (link W1 part 3). Deliver these forward references, wording kept: in the slide text "Czy i jak IEC 61400-1 powołuje ISO 13849-1 lub IEC 62061 — do sprawdzenia w tekście normy (W7)"; in the notes "wrócimy do tego w W7" + a question on the demand mode of the turbine overspeed stop function ("to trzeba wykazać, a nie założyć").
- 06 slide 1 "Która metoda do jakiego pytania": table method | pytanie | wynik | co dalej (6 rows); notes: the methods form a chain; misconception "im bardziej ilościowo, tym lepiej".
- 06 slide 2 "Od analizy do projektu monitoringu i zabezpieczeń" (keep the title): deliver, wording kept in substance: alarm list and rationalisation (ISA-18.2; IEC 62682:2022 rozdz. 9) — W5; cause-and-effect matrix "który sygnał (gaz, temperatura, dym) uruchamia które działanie (wentylacja, odłączenie, gaszenie) — W8"; SIF specification from LOPA (function, set points, response time, PFDavg, T₁); proof tests; CMS requirements from FMEA/RCM — main bearing, gearbox, generator as mandatory CMS scope (DNVGL-SE-0439:2016) — W7; measurement chain "co mierzyć, gdzie i z jaką dokładnością, żeby alarmy i funkcje działały zgodnie z założeniami analiz — W3". In the notes: "Z HAZOP i LOPA wynika lista alarmów, którą w W5 będziemy racjonalizować"; vibration sensors "o czym w W7"; a closing question.
- 06 quiz: 10 questions from plan.md; double-quoted JS strings, Polish quotes „…” inside, no backticks; each explanation adds reasoning. IMPORTANT: pages 01–04 are being written in parallel by two other writers. Draft the quiz now from plan.md and the notes, using the exact numbers and wording of the notes/verified-facts. The coordinator will send you the finished pages 01–04 afterwards; you will then align every quiz fact exactly with the slides and build the consolidated `## Źródła` of 06 from all pages. Until then, put the 05 sources into the 06 bibliography and leave the other groups for the second round.
- calc_C.py: RR716 0,19; 10⁻⁵ × 8760; LOPA A/B, RRF, SIL band checks (with a check that no RRF sits on a boundary), 1oo1 table and check, λDD variant, float switch (if used), 1oo2 β table and ratios, common-cause share; quiz Q6 (0,07831), Q8 (IEF 0,2 × 0,01 vs 10⁻⁵ → RRF 200 → SIL 2), Q9 (λDU 10⁻⁶/h, T₁ 8760 h → 4,38 × 10⁻³); index plan minutes (sum 90).
