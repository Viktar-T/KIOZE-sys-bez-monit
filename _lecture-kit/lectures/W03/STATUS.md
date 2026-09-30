# STATUS — W3: Architektura monitoringu i tor pomiarowy (30.09.2026)

Lecture: W3: Architektura monitoringu i tor pomiarowy (sidebar_position 3)
Folder: bezp-monit/docs/wyklady-bezp/wyklad-03-architektura-monitoringu/ (does not exist on the computer, checked 30.09.2026 04:45 UTC)
Mode: **no stops** (lecturer's prompt). Git: commit only if W1/W2 are committed; never push.
Snapshot: _tmp/repo-src-W03.tar.gz (30.09.2026 04:45 UTC, 511 files), extracted to /home/claude/repo.

## Phase 0 notes
- Device tools OK (connected folder KIOZE-sys-bez-monit); built-in browser tools present.
- git (--no-optional-locks): the whole kit (_lecture-kit/), W1/W2 v2 pages, archiwum are UNTRACKED; many unrelated modified files (_promts, cwiczenia, line endings). → **No commit in Phase 7** (pipeline Phase 0 step 4; lecturer's prompt). List files instead.
- A first plain `git status` (before reading A.7) left `.git/index.lock` (the Linux shell cannot unlink). Moved aside to `.git/claude-stale-index-2.lock` (rename works, no deletion). An older `.git/claude-stale-index.lock` (29.09) exists too. Both are empty files; lecturer can delete them. From now on only `git --no-optional-locks`.
- W3 folder absent on the computer; wyklady-bezp has wyklad-01…, wyklad-02…, wyklad-99-test-wizualizacji.
- Read completely: all W1 pages (7 files) and all W2 pages (7 files); records W01 + W02: STATUS, plan, claims, calc, fixes, factcheck-1…3; W01/W02 ledger-update; verified-facts (3 files); kit README, pipeline, environment, spec, feedback, ledger, agent prompts, tools README; CLAUDE.md; exercise card Zadanie 1.

## Decision D1 (preflight, no stops): also apply W01/ledger-update.md
The lecturer asked to apply W02/ledger-update.md. The shared files show that the **W01** ledger update was not applied either (course-ledger §1 still says W1 "41 slides, 36 fixes"; 05-feedback §3 "(none yet)"; terms SOE and bypass defined in W1 v2 05 missing from §3 — both matter for W3). Applying only W02 would leave the ledger inconsistent and W3 could redefine W1 terms. Decision: apply W01's update first, then W02's (W02 wins where they overlap). Reported in the final report.
Not changed (fixed files, per pipeline rules): `00-syllabus.md` (W1/W2 summaries), kit `README.md` — both still say "41 slides / 36 fixes" (W1) and "40 slides / 41 fixes" (W2); reported.

## Forward references for W3 (course-ledger §5, updated by W01/W02 ledger-update)
| Promise | Made in |
|---|---|
| "od W3 do W5 … jak zbudować monitoring, któremu można ufać: W3 — architektura i tor pomiarowy, W4 — komunikacja, W5 — jakość danych i alarmy" | W1 `05` "Jak monitoring wspiera bezpieczeństwo" (notes); W1 `06` "Co dalej: od opisu zagrożeń do analizy ryzyka" |
| "jakie wielkości mierzyć (napełnienie, O₂, H₂S, CH₄), gdzie i z jaką dokładnością — tor pomiarowy w W3" (W2 table: quantity, place, purpose; deliberately no accuracy) | W2 `02` "Od wyników HAZOP do wymagań" |
| "co mierzyć, gdzie i z jaką dokładnością, żeby alarmy i funkcje działały zgodnie z założeniami analiz — W3" (notes: required PFDavg and response time determine quality and independence of sensors) | W2 `06` "Od analizy do projektu monitoringu i zabezpieczeń" |
| W2 index "Następny wykład: W3 … wymagania z analiz ryzyka (co mierzyć, gdzie i z jaką dokładnością) stają się wymaganiami dla toru pomiarowego" | W2 `index.md` Powiązania |
Lecturer's note: detector selection and set points stay in W9 (W2 02 also says "Dobór detektorów i progi alarmowe omówimy w W9").

## W1/W2 content W3 builds on (link back, do not redefine)
- W1 `05`: monitoring vs protective function (table), BPCS (IEC 61511-1 3.2.3 Note 2 "typically may implement … monitoring and alarms"), onion model, IPL criteria, alarm definition (ISA-18.2), **SOE** (rejestracja sekwencji zdarzeń, McMicken BMS data second by second), **bypass** (IEC 61511-1 3.2.4 Note 1), "zielony ekran" limit, IEC 61724-1:2021 named as PV performance monitoring, CMS not a safety system (DNV-SE-0439).
- W1 `04`: IEC 61724-1:2021 listed; IEC 60079-29-0:2025 detectors; standards voluntary; editions.
- W2 `02`: biogas holder HAZOP (ciśnienie, skład), measurement table (napełnienie: continuous operational measurement + separate min/max signalling devices reported by a protective system — TRAS 2.6.3(3); ciśnienie/podciśnienie; O₂ in biogas on compressor pressure side — TRAS 2.4(8); H₂S in process gas before/after desulphurisation; H₂S in air; CH₄), O₂ from 6% air ≈ 1,2% obj., H₂S raw biogas 100–4000 ppm (process, not NDS), OSHA odour loss 100–150 ppm.
- W2 `03`: hidden failure of a gas sensor not revealed by self-diagnostics; P-F interval; RCM; FMEA-MSR; D rating = monitoring.
- W2 `04`: CCF examples "wspólne zasilanie, ta sama błędna kalibracja"; Rosewater & Williams 2015 (BMS voltage calibration, drift); β.
- W2 `05`: LOPA biogas holder, SIF = independent fill-level measurement → safety PLC → flare start (TRAS 2.6.3(3)); PFDavg, T₁, 1oo1/1oo2; alarm + operator 0,19.
- W2 `06`: SIF specification (function, set points, response time, PFDavg, T₁); proof tests.

## Phases
- [x] Phase 0 preflight (reading done; shared files W01+W02 ledger-update applied and written to the computer, md5 verified)
- [x] Phase 1 research (8 researchers + round 2 with 2 researchers; coordinator checks in browser/WebFetch)
- [x] Phase 2 outline — plan.md (6 pages, 39 slides, 90 min, 4 mermaid); no stops → not sent for approval, in final report
- [x] Phase 3 writing — 3 writers in parallel (A 01–02, B 03–04, C 05–06+index), ~05:28–05:48 UTC. Gates: calc_A/B/C ALL CHECKS PASSED; LINT OK (39 slides, 90 min, 4 mermaid, no WARN); MDX CHECK OK (61 KaTeX, 4 mermaid). Coordinator read all pages. Coordinator notes for fixes: PLC expansion must match W1/W2 ("programowalny sterownik logiczny"); 02 slide 1 too dense; 03 notes PCA sentence
- [x] Phase 4 fact-check — 3 checkers (F1 index/01/02, F2 03/04, F3 05/06); 0 critical, 4 major (all accepted after the coordinator opened the sources: PRC-002-3 draft → PRC-002-5; Macii & Rinaldi classes = IEC 61850-5:2013; IEC 61400-12 restructuring 2022 incl. 12-2:2022 and 50-1:2022), 38 minor (all accepted, 4 modified) + 1 optional; coordinator 5 own fixes; 79 replacements via fixtool/apply_fixes.py; 06 bibliography regenerated (55 entries); gates after fixes: calc ALL PASSED, LINT OK, MDX CHECK OK
- [x] Phase 5 build/render — W2 index Powiązania W3 line linked; intro.md W3 row linked, topics adjusted, status "dostępny" (install folder); BUILD OK (no warnings); RENDER CHECK OK (all 7 pages, mermaid 4/4, KaTeX 0 errors, no wide tables, homepage card); screenshots 03 and 05 looked at; server stopped
- [x] Phase 6 records — course-ledger (W3 status/structure/cited titles, 15 term rows, 10 key-number rows, W3 forward refs delivered, 7 new forward refs W4–W10, open items), 05-feedback §3 (+11 W3 lessons), sources-used regenerated (361 URLs), verified-facts/pl-law-2026-09-W03.md, records in lectures/W03/
- [x] Phase 7 install — computer files checked before writing: W2 index.md and intro.md unchanged since the snapshot (md5 of the pre-edit text = computer), shared kit files = preflight versions; written from install-final/ and md5-verified; NO commit (W1/W2 v2 pages and the whole _lecture-kit are untracked; many unrelated changes) — files to commit listed in the final report; never pushed
- [ ] Phase 8 report

## Phase 1 plan — research topics (8 researchers in parallel, template R; notes in /home/claude/research/W03/)
1. architecture.md — purposes of monitoring; levels (IEC 62264/ISA-95; Purdue as structure only); field/control/supervisory/enterprise; SCADA, HMI, historian; PV plant, wind farm, BESS (BMS/EMS/PCS), biogas PLC examples; edge vs cloud, local autonomy, store-and-forward; interface to grid operator (one line; W4).
2. time_sync.md — timestamps, UTC vs local time/DST, NTP (RFC 5905), PTP (IEEE 1588-2019 / IEC 61588), GNSS/IRIG-B, accuracy classes, SOE resolution; investigations hampered by unsynchronised time (2003 blackout Task Force report etc.).
3. measurement_chain.md — sensor → conditioning → 4–20 mA / HART / digital → A/D → processing → storage; live zero, loop power; IEC 60381-1; resolution/quantisation; sampling theorem, aliasing, anti-alias filters; averaging and filtering.
4. metrology_uncertainty.md — JCGM 100 (GUM), JCGM 200 (VIM) definitions + Polish terms (GUM PL editions); accuracy vs uncertainty; Type A/B, combined, expanded (k = 2); rectangular a/√3; calibration (wzorcowanie), traceability (spójność pomiarowa), drift; EA-4/02, ILAC P10; GUM (Główny Urząd Miar), PCA; NRC RG 1.105 set-point/uncertainty concept; legal metrology MID 2014/32/EU (one sentence).
5. pv_monitoring.md — IEC 61724-1 (current edition, classes A/B/C: sensors, sampling and recording intervals, accuracy); ISO 9060:2018 pyranometer classes; reference cells (IEC 60904-2); module/ambient temperature; IEA PVPS T13 and NREL/Sandia monitoring guidance; irradiance uncertainty studies; link to Zadanie 1 (15-min data).
6. sensors_oze.md — wind speed/direction (cup vs sonic; IEC 61400-12-1:2022 classification; nacelle anemometry, icing); DC/AC electrical quantities (CT/VT IEC 61869 classes, shunts, Hall sensors, meters IEC 62053, MID classes); vibration (principle only); BMS cell measurements (principle only); gas detector principles (catalytic, IR, electrochemical, PID; limits; t90) — principle only.
7. failure_diagnostics.md — measurement-chain failure modes; NAMUR NE 43, NE 107; stuck/frozen values; plausibility and redundancy; diagnostics coverage; UPS for monitoring (IEC 62040); link to FMEA/hidden failures; cases: Buncefield (MIIB 2008: stuck ATG, inoperable high-level switch), Texas City (CSB 2007: level transmitter).
8. biogas_measurements.md — worked example for the W2 gas holder: fill level of membrane holders, pressure (mbar range), O₂/H₂S/CH₄ in biogas (analysers, extractive sampling, transport delay), H₂S/CH₄ in air (principle), process safety time and response-time budget (IEC 61511 definitions), accuracy and set-point margin concept; sources TRAS 120, SVLFG TI 4, DGUV/KTBL/FNR, peer-reviewed. No detector selection or set points (W9).
Coordinator in the browser: Prawo o miarach (ISAP t.j.) + any other Polish point the notes need.

## Phase 1 results (30.09.2026)
Notes in /home/claude/research/W03/: architecture, time_sync, measurement_chain, metrology_uncertainty, pv_monitoring, sensors_oze, failure_diagnostics, biogas_measurements (round 1); pv_monitoring_gaps, gaps_round2 (round 2).

Coverage of "Must cover":
| Item | Evidence | Handling |
|---|---|---|
| Purposes of monitoring | IEA PVPS T13-03:2014, NREL O&M 3rd ed. 2018, IEC 61724-1:2021 intro, Maldonado-Correa 2020 (wind SCADA) VERIFIED; no single source lists all 5 purposes | list as synthesis "(ocena własna)" with sources per purpose |
| Architecture levels | IEC 62264-1:2013 (current, IEC webstore), ANSI/ISA-95.00.01-2025 (new), ISA-95 level names, NIST SP 800-82r3 (Purdue picture; SCADA/HMI/PLC/RTU/IED/historian definitions) VERIFIED; BESS BMS/EMS: DOE ESHB 2020 ch. 15 VERIFIED | teach; biogas PLC architecture has no source → generic |
| Edge vs cloud, local autonomy | NREL/CP-5K00-76022 comms outages VERIFIED; T13-03 availability; ENERCON/KA-SAT 2022 press release VERIFIED-SECONDARY; no source for logger buffering | autonomy principle as "(ocena własna)" building on W1 05 (safety functions independent); ENERCON hedged |
| Time | RFC 5905, IEC 61588:2021, IEEE 1588-2019, IEC/IEEE 61850-9-3:2016, Macii & Rinaldi (accuracy classes), NERC PRC-002-3 / PRC-028-1, 2003 blackout Task Force reports VERIFIED | teach |
| Measurement chain | VIM 3.10 etc., IEC 60381-1 (edition only), FieldComm HART, GUM F.2.2.1 VERIFIED; 4–20 mA physics, sampling, filtering TEXTBOOK | teach + illustrative calcs |
| Metrology | VIM/GUM (EN + Polish GUM guide 2019, Vademecum 2022, VIML PL), EA-4/02 M:2022, PCA DA-06 **wyd. 9 (2025)** (coordinator), OIML D 10/ILAC-G24:2022, RG 1.105 Rev. 4, Reda NREL 2011 Tables 3/10 (coordinator re-read: values are U95; RSS printed 4,1% vs 4,04% recomputed from rounded rows) VERIFIED | worked budget = illustrative chain (dane umowne) + Reda as real data (no recomputation of Reda RSS) |
| Sensors | ISO 9060:2018 edition VERIFIED, class limits only SECONDARY (Hukseflux); Reda; Sandia temperature models; IEC 61400-12-1:2022, MEASNET, IEA Wind Task 19; DC sensing review; IEC 62619:2022; HSE gas detectors 2004; OSHA SHIB 2024; CT classes only vendor (ABB) | principles; class limits hedged or omitted |
| IEC 61724-1 classes | Ed. 2 2021: **Class A and B only, Class C eliminated** (Foreword VERIFIED); table titles VERIFIED; Table 1 values only SECONDARY (manufacturers); T13-03 (1 s sampling, 5–15 min averaging, ≥99% availability) VERIFIED | teach A/B, say C was removed in 2021; syllabus "A/B/C" outdated → report |
| Failure modes, diagnostics, UPS | NE 43 (2021-07-26) and NE 107 (2025-07-15) editions VERIFIED, mA values only distributor/"literatura branżowa"; SINTEF PDS 2021 (DC 65–70%), Buncefield MIIB, CSB Texas City, IEC 62040-3 edition VERIFIED | teach; NE 43 values hedged |
| Biogas gas-holder example | TRAS 120 2.6.3(3), 2.4(8), 1.5.2.2.1, 2.6.3(6); BMWFJ 2012; LfU Bayern 2024; SVLFG TI 4; DGUV T 021/T 023 (2023) VERIFIED; PST only secondary (Beharrysingh; TAMU); no source for accuracy, pressure, t90 | spec table: sourced columns + "(ocena własna)" columns; illustrative fill-time calc |
| Legal metrology (one sentence) | Prawo o miarach t.j. Dz.U. 2022 poz. 2063 (ELI, browser); MID 2014/32/EU (EUR-Lex) | verified-facts/pl-law-2026-09-W03.md |

Coordinator verification added: verified-facts/pl-law-2026-09-W03.md (Prawo o miarach, MID, PCA DA-06 wyd. 9). Not done (optional): FNR Leitfaden p. 70–71 (membrane holder pressure) — the gas-space pressure row will say "zakres wg danych producenta" instead of a number.

Decision D2 (no stops): IEC 61724-1:2021 has only Classes A and B (Class C removed in ed. 2). W3 teaches A/B and mentions the removal; the syllabus line "classes A/B/C" is outdated — reported, syllabus not edited.
Decision D3 (no stops): the "one worked, recomputed uncertainty budget" is an illustrative 4–20 mA fill-level chain (dane umowne, GUM formulas), because no open source gives a complete, recomputable budget for an OZE chain (Reda's printed RSS differs from the recomputation of its rounded rows). Reda Table 3/10 are shown as real published values.

## Phase 2 (30.09.2026)
plan.md: 01 Cele, architektura i czas (20 min, 9) | 02 Tor pomiarowy od czujnika do zapisu (18, 8) | 03 Niepewność pomiaru, wzorcowanie i dryft (14, 6) | 04 Czujniki w instalacjach OZE i klasy monitoringu PV (15, 7) | 05 Uszkodzenia toru pomiarowego i przykład biogazowy (18, 7) | 06 Podsumowanie i quiz (5, 2 + 10 questions). Mermaid: IEC 62264 levels (01), chain (02), traceability (03), fill-level SIF timing (05).
Fixed illustrative numbers for all writers are listed in plan.md (loop 675/35/285 Ω; ADC 1,53 ppm; 50 ppm mean; U = 1,4%; 228 m³/h, 26 min, 3,6 min; 15 s / 170 s).
Coordinator checks added: research/W03/coordinator_checks.md (Reda tables re-read; JCGM editions incl. GUM Amd.1:2026, no VIM4; PCA DA-06 wyd. 9; MID).
Phase 3 plan: 3 writers in parallel as for W2 — A: 01+02; B: 03+04; C: 05+06+index (C round 2: align quiz and consolidated bibliography with A/B pages).

## Phase 7 — files that would be committed (explicit paths; not committed)
- bezp-monit/docs/wyklady-bezp/wyklad-03-architektura-monitoringu/ (index.md, 01-cele-architektura-i-czas.mdx, 02-tor-pomiarowy.mdx, 03-niepewnosc-i-wzorcowanie.mdx, 04-czujniki-i-monitoring-pv.mdx, 05-uszkodzenia-toru-i-przyklad-biogazowy.mdx, 06-podsumowanie.mdx)
- bezp-monit/docs/wyklady-bezp/wyklad-02-analiza-ryzyka/index.md (Powiązania: W3 line linked)
- bezp-monit/docs/intro.md (W3 row)
- _lecture-kit/course-ledger.md, _lecture-kit/05-feedback-and-lessons.md, _lecture-kit/sources-used.md, _lecture-kit/verified-facts/pl-law-2026-09-W03.md
- _lecture-kit/research/W03/ (11 notes), _lecture-kit/lectures/W03/ (STATUS, plan, writer-brief, claims + claims-A/B/C, calc.py + calc_A/B/C, fixes, factcheck-1..3, factcheck-prompts, fixtool/)
Prerequisite: commit W1 and W2 v2 and the kit first (they are untracked), otherwise the W3 commit links to uncommitted pages.
Stale lock files to delete by hand: .git/claude-stale-index.lock (29.09) and .git/claude-stale-index-2.lock (30.09).
