# Syllabus 2026/27 — scope and boundaries of W1–W10

Course: "Systemy bezpieczeństwa i monitorowania instalacji OZE", ZUT Szczecin, OZE, semester 5, 10 lectures × 90 min.

This file is **fixed**. A lecture chat does not change the scope of other lectures. If a lecture chat finds that a topic fits better elsewhere, it writes that into its final report and into `course-ledger.md` → "Open items"; the lecturer decides.

How to read each section:
- **Must cover**: the core. Every item appears in the lecture.
- **Promised earlier**: sentences in earlier lectures that point to this lecture ("…w W5"). The lecture must deliver them. The full list is in `course-ledger.md` → "Forward references".
- **Reuse, do not repeat**: content already taught. Refer back with a file link (for example `[W1, część 5](../wyklad-01-zagrozenia-ramy-prawne/05-monitoring-a-warstwy-ochrony.mdx)`), recap in at most one slide, then go deeper.
- **Not here**: belongs to another lecture. Mention it in one sentence at most, as plain text ("w W10").
- **Starting points for research**: names of standards, bodies and documents to look at first. They are **not verified facts**. Editions, dates and content must be checked by the researchers like everything else.
- **Exercises**: the exercise cards in `bezp-monit/docs/cwiczenia/karty/` that use this lecture. Read them, use the same context and definitions where they are correct, and report errors in a card instead of copying them (known problems: `course-ledger.md` §7).
- **Check on the writing date**: time-sensitive items.

Every lecture: about 36–40 slides, 5 topic pages plus a summary page with a quiz (5–7 pages in total is fine), times summing to 90 min, 2–4 mermaid diagrams, examples from PV, wind, BESS and biogas where they fit.

---

## W1 ✅ Zagrożenia w instalacjach OZE, ramy prawne i warstwy ochrony

Folder `wyklad-01-zagrozenia-ramy-prawne` (written 29.09.2026). Hazards and incidents for PV, wind, BESS and biogas; definitions (Guide 51, ISO 12100, ISO 31000, ALARP); EU and Polish law; map of standards; monitoring versus protection layers, IPL criteria. Details: `course-ledger.md`.

## W2 ✅ Analiza ryzyka — HAZID, HAZOP, FMEA, FTA, LOPA i SIL

Folder `wyklad-02-analiza-ryzyka` (written 29.09.2026). ISO 31000 process, IEC 31010 method selection, risk matrix and its limits, HAZID/SWIFT, HAZOP (IEC 61882), FMEA/FMECA (IEC 60812, RPN, AP), FTA/ETA/bow-tie, CCF and β, LOPA, SIL, PFDavg 1oo1/1oo2, PL (ISO 13849-1).

---

## W3 Architektura monitoringu i tor pomiarowy

- Title: `W3: Architektura monitoringu i tor pomiarowy`
- Folder: `wyklad-03-architektura-monitoringu`, `sidebar_position: 3`
- **Must cover**
  - Purposes of monitoring in OZE plants: performance, condition, safety-related information, grid and regulatory reporting, billing. Link back to "monitoring ≠ protection" (W1).
  - Architecture levels: field (sensors, actuators), control (PLC/RTU, inverter and turbine controllers, BMS), supervisory (SCADA/HMI, historian), enterprise/cloud (portals, analytics), interfaces to the grid operator. A reference model (ISA-95/IEC 62264 levels; the Purdue model only as a structural picture — security zones are W10).
  - Edge versus cloud processing; local autonomy when the link is down.
  - Time: timestamps, clock synchronisation (NTP, PTP/IEC 61588), sequence-of-events recording; why time errors break analyses and investigations.
  - The measurement chain (tor pomiarowy): sensor → conditioning → transmission (4–20 mA, HART, digital) → A/D conversion → processing → storage. Sampling, aliasing, resolution, averaging and filtering.
  - Metrology: accuracy versus uncertainty (GUM), calibration and traceability, drift, measurement-chain uncertainty budget (one worked, recomputed example).
  - Sensors used in OZE: irradiance (pyranometer classes, reference cells), module and ambient temperature, DC/AC electrical quantities (CTs, shunts, Hall sensors, meters), wind speed and direction (cup, sonic), vibration (principle only; CMS is W7), BMS cell measurements (principle only; W8), gas detectors (principle only; W8/W9).
  - Monitoring system classes for PV (IEC 61724-1 classes A/B/C: sensors, sampling and recording intervals) as a worked example of "requirements → monitoring design".
  - Failure modes of the measurement chain and signal diagnostics (for example out-of-range signalling of 4–20 mA loops, NAMUR NE 43), power supply of the monitoring system (UPS), link to FMEA (W2).
  - Worked example that delivers the W2 promise: for the biogas gas holder from W2 (HAZOP, LOPA), which quantities to measure (fill level, O₂, H₂S, CH₄), where, with what accuracy and response time, and how that becomes a measurement-chain specification. Detector selection, set points and calibration stay in W9.
- **Promised earlier**: W2 → "co mierzyć (napełnienie, O₂, H₂S, CH₄), gdzie i z jaką dokładnością — tor pomiarowy w W3"; W2 summary → accuracy so that alarms and functions work as the analyses assume; W1 part 5 → "od W3 do W5 … jak zbudować monitoring, któremu można …".
- **Reuse, do not repeat**: W1 part 5 (monitoring versus protection, IPL criteria), W2 HAZOP/LOPA outputs as the source of measurement requirements.
- **Not here**: protocols and fieldbuses beyond the physical signal (W4); data quality, KPIs, alarms (W5); technology-specific diagnostics (W6–W9); gas-detector selection and set points (W8/W9); cyber (W10); billing and legal metrology (MID 2014/32/EU, Prawo o miarach) — one sentence at most.
- **Exercises**: Zadanie 1 (PV monitoring) — sensor choice, logging intervals.
- **Starting points for research**: IEC 61724-1:2021; ISO 9060:2018; JCGM 100:2008 (GUM) and JCGM 200:2012 (VIM), free at BIPM; IEC 61400-12-1:2022 (anemometry context); IEC 62264/ISA-95; IEC 61588; NAMUR NE 43; NREL/Sandia and IEA PVPS Task 13 reports on PV monitoring; peer-reviewed work on sensor uncertainty in PV monitoring.
- **Check on the writing date**: current editions of IEC 61724-1 and ISO 9060.

## W4 Komunikacja w instalacjach OZE — Modbus, SunSpec, OPC UA, MQTT, IEC 61850 i IEC 60870-5-104

- Title: `W4: Komunikacja w instalacjach OZE — Modbus, SunSpec, OPC UA, MQTT, IEC 61850 i IEC 60870-5-104`
- Folder: `wyklad-04-komunikacja`, `sidebar_position: 4`
- **Must cover**
  - Layers in OT communication; physical media used in OZE plants (RS-485, Ethernet, fibre, cellular); polling versus publish/subscribe; determinism and latency where they matter (protection versus monitoring).
  - Modbus RTU/TCP: data model, polling, register maps, no built-in security. SunSpec information models on top of Modbus for inverters and storage.
  - OPC UA (IEC 62541): information modelling, client/server and pub/sub, built-in security.
  - MQTT (OASIS MQTT 5.0; ISO/IEC 20922 for 3.1.1): broker, topics, QoS, retained messages; Sparkplug as a payload convention.
  - IEC 61850 (data model, MMS, GOOSE, sampled values; IEC 61850-7-420 for DER; IEC 61400-25 for wind) and IEC 60870-5-104 for telecontrol.
  - Telemetry and control towards the grid operator in Poland: what OSD/OSP require (IRiESD, PSE requirements, RfG-based connection requirements from W1), remote limitation/disconnection of generation. Check the status of any 2026 regulation on remote monitoring and control of micro-installations on RCL.
  - Gateways and protocol conversion; typical integration errors with safety impact (scaling, units, byte order, stale values, time stamps) — link to W3 and W5.
  - Protocol security in one or two slides as a bridge (TLS, OPC UA security modes, IEC 62351); the full treatment is W10.
- **Promised earlier**: W1 standards page → "IEC 62351 zabezpiecza protokoły komunikacyjne energetyki, które poznacie w W4".
- **Reuse, do not repeat**: W1 legal map (RfG, NCCS, CRA dates) — refer back.
- **Not here**: architecture levels and time synchronisation basics (W3); data quality (W5); OT security programme, IEC 62443 (W10).
- **Starting points for research**: Modbus Organization specifications; SunSpec Alliance information models; OPC Foundation / IEC 62541; OASIS MQTT 5.0; IEC 61850 series incl. -7-420; IEC 61400-25; IEC 60870-5-104; IEC 62351; Commission Regulation (EU) 2017/1485 (SOGL) data exchange; PSE and OSD documents (IRiESD) on the URE/PSE/OSD websites; RCL for drafts.
- **Check on the writing date**: Polish OSD/PSE telemetry requirements and any draft regulation on remote control of micro-installations (browser + RCL, see `04-environment.md`).

## W5 Jakość danych, wskaźniki KPI, zarządzanie alarmami i wykrywanie anomalii

- Title: `W5: Jakość danych, wskaźniki KPI, zarządzanie alarmami i wykrywanie anomalii`
- Folder: `wyklad-05-dane-kpi-alarmy`, `sidebar_position: 5`
- **Must cover**
  - Data quality characteristics (e.g. completeness, accuracy, consistency, currentness — terms of the ISO/IEC 25012 model) and data validation and filtering as in IEC 61724-1; handling of missing and flagged data.
  - KPIs with exact definitions and worked, recomputed examples: PV performance ratio (incl. temperature-corrected PR), availability (time- and energy-based; IEC TS 63019 for PV, IEC 61400-26-1 for wind), capacity factor, wind power curve deviation, BESS round-trip efficiency, SOC/SOH (definitions only; BMS estimation is W8), MTBF/MTTR.
  - Alarm management: alarm definition (from W1), alarm philosophy, lifecycle and rationalization (IEC 62682:2022 / ISA-18.2), priorities, alarm KPIs (from W1: HSE CHIS6 long-term average), floods, chattering and stale alarms, shelving, alarm response procedures; link to the IPL credit for "alarm + operator" (W1, W2).
  - Anomaly detection: thresholds and rules, statistical process control, model-based normal-behaviour models (for example wind SCADA), machine learning with its limits (labels, false alarms, explainability); evaluation (false-alarm rate, detection delay, precision/recall).
  - Why monitoring analytics do not become protection layers.
- **Promised earlier**: W1 → "Alarmy omówimy w W5"; W2 → alarm rationalization (IEC 62682, cl. 9) "— W5"; W2 summary → "Z HAZOP i LOPA wynika lista alarmów, którą w W5 będziemy racjonalizować".
- **Reuse, do not repeat**: HSE CHIS6 figure, alarm definition and IPL credit rules (W1 part 5, W2 part 5).
- **Not here**: technology-specific diagnostics (W6–W9), vibration CMS (W7).
- **Exercises**: Zadania 1, 2 and 5 compute KPIs from CSV data. Read the exercise cards in `bezp-monit/docs/cwiczenia/karty/` and use the same definitions; if a card's definition is wrong, do not copy it — report it.
- **Starting points for research**: IEC 61724-1:2021; IEC TS 63019:2019; IEC 61400-26-1; IEC 61400-12-1; IEC 62682:2022; ISA-18.2-2016; EEMUA 191; HSE CHIS6; ISO/IEC 25012; peer-reviewed reviews of SCADA-based condition monitoring of wind turbines and of PV fault detection; NREL/IEA PVPS reports on PV data quality and PR.
- **Check on the writing date**: editions of IEC 61724-1, IEC TS 63019, IEC 61400-26-1.

## W6 Fotowoltaika — bezpieczeństwo elektryczne i pożarowe, monitoring wydajności

- Title: `W6: Fotowoltaika — bezpieczeństwo elektryczne i pożarowe, monitoring wydajności`
- Folder: `wyklad-06-fotowoltaika`, `sidebar_position: 6`
- **Must cover**
  - Electrical safety on the DC side: insulation monitoring, residual current monitoring in inverters (IEC 62109-2), earthing and bonding, surge and lightning protection (IEC 62305), design rules (IEC 60364-7-712:2025, IEC 62548-1).
  - DC arcs: series and parallel, why overcurrent protection misses series arcs, DC arc-fault detection and interruption per IEC 63027:2023 (in the US: AFCI per UL 1699B) and its limits (nuisance trips, detection only versus interruption).
  - Emergency disconnection for firefighters: module-level shutdown and string disconnection concepts; Polish status (draft WT § 304 < 30 V in ≤ 30 s — it is a **draft**, see `verified-facts/`), Prawo budowlane rules for PV > 6,5 kW (verified).
  - Fire: ignition causes (connectors, DC isolators, hot spots, bypass diodes), roof fire behaviour, firefighting guidance in Poland (PSP, CNBOP-PIB) and Germany (from W1 notes), roof sectors (draft WT § 306).
  - Commissioning and periodic tests: IEC 62446-1 (tests and documentation), IR thermography (IEC TS 62446-3), EL imaging; what each finds.
  - Performance monitoring and fault detection: string/inverter monitoring, PR tracking, soiling, degradation, typical fault signatures in data; link to W5 KPIs.
- **Promised earlier**: W1 standards page → IEC 60364-7-712 "łączy tematy W6 i W8"; W1 part 5 → "Szczegóły każdej technologii omówimy w W6, W7, W8 i W9".
- **Reuse, do not repeat**: W1 PV fire statistics (Fraunhofer ISE, BRE, PSP) and PV DC basics — one recap slide at most.
- **Not here**: PV-coupled storage safety (W8); grid-code details (W1/W4).
- **Exercises**: Zadanie 1 (PV station).
- **Starting points for research**: IEC 60364-7-712:2025; IEC 62548-1:2023 (+AMD1:2025); IEC 63027:2023; IEC 62109-1/-2; IEC 62446-1; IEC TS 62446-3; IEC 62305; EN 50549-1; BRE/UK government PV fire reports; Fraunhofer ISE/TÜV Rheinland; CNBOP-PIB and KG PSP publications; NREL/Sandia PV O&M best practices; IEA PVPS Task 13.
- **Check on the writing date**: IEC 62109-1 ed. 2 (FDIS in IX 2026), status of the new WT (RCL), PSP guidance.

## W7 Energetyka wiatrowa — system bezpieczeństwa, hamulce, oblodzenie i monitorowanie stanu

- Title: `W7: Energetyka wiatrowa — system bezpieczeństwa, hamulce, oblodzenie i monitorowanie stanu`
- Folder: `wyklad-07-energetyka-wiatrowa`, `sidebar_position: 7`
- **Must cover**
  - Control and protection system of a turbine (IEC 61400-1:2019+AMD1 control and protection functions, DNV-ST-0438): safety chain, overspeed, emergency stop, vibration trip, grid loss; independence from the controller.
  - Braking: aerodynamic (pitch, independent per blade as redundancy) and mechanical brake; yaw; what happens on overspeed.
  - Functional safety in wind: how IEC 61400-1 refers to ISO 13849-1 / IEC 62061, PL and SIL for turbine safety functions, demand mode of the stop function (W2 promised this — verify in the standard text, do not guess).
  - Nacelle fire: ignition sources, detection and suppression, why external firefighting is rarely possible (W1).
  - Lightning protection (IEC 61400-24).
  - Icing: detection methods, ice throw/fall risk and safety distances (IEA Wind TCP Task 19 recommendations), operating strategies.
  - Condition monitoring (CMS): drive-train vibration (ISO 20816-21:2025, VDI 3834), certification scope (DNV-SE-0439: main bearing, gearbox, generator), oil and debris monitoring, blade and tower monitoring, SCADA-based condition monitoring; CMS is not a safety system.
  - Work at height and rescue; service lifts and hoists — check whether and how they fall under technical inspection (UDT). The device categories in `verified-facts/` are general; their application to turbine lifts must be verified.
- **Promised earlier**: W1 part 5 table (DNV-ST-0438; W7); W2 part 5 (IEC 61400-1 → ISO 13849-1/IEC 62061 "do sprawdzenia w tekście normy (W7)"; "wrócimy do tego w W7"); W2 summary (DNVGL-SE-0439:2016 CMS scope — W7; vibration sensors "o czym w W7").
- **Reuse, do not repeat**: W1 wind hazards and G+ statistics; W2 wind-turbine FMEA (Tavner, Shafiee, Carroll).
- **Not here**: availability KPIs (W5), communication IEC 61400-25 (W4).
- **Exercises**: Zadanie 2 (VAWT with storage).
- **Starting points for research**: IEC 61400-1:2019 + AMD1; DNV-ST-0438; DNV-SE-0439 (official DNV page); IEC 61400-24:2019 + AMD1; ISO 20816-21:2025; VDI 3834; IEA Wind TCP Task 19; VdS 3523 and CFPA-E guidance on wind-turbine fire protection; G+ Global Offshore Wind good-practice guidelines; peer-reviewed reviews of wind-turbine CMS; Polish wind-investment act (ISAP via browser).
- **Check on the writing date**: IEC 61400-1 amendments, Polish wind-siting rules.

## W8 Magazyny energii (BESS) — BMS, niekontrolowany wzrost temperatury i detekcja gazów

- Title: `W8: Magazyny energii (BESS) — BMS, niekontrolowany wzrost temperatury i detekcja gazów`
- Folder: `wyklad-08-magazyny-energii`, `sidebar_position: 8`
- **Must cover**
  - BESS architecture: cell, module, rack, PCS, EMS, BMS hierarchy; container versus building installation.
  - BMS functions: measurement of voltage, current and temperature, SOC/SOH estimation, balancing, protective disconnection (IEC 62619:2022; the function list of draft WT § 311 as a Polish example — draft).
  - Thermal runaway in depth (the mechanism was in W1): early detection (off-gas detection before runaway, cell-voltage anomalies), propagation, what UL 9540A ed. 6 tests at cell/module/unit/installation level and how results are used; NFPA 855; IEC 62933-5-2:2025.
  - Gas detection and ventilation: %LEL-based alarm, ventilation and disconnection (draft WT §§ 315–316 values, marked as draft), explosion prevention and deflagration venting (NFPA 68/69 concepts), fire suppression options and their limits.
  - **Cause-and-effect matrix** (macierz przyczynowo-skutkowa): which detection (gas, temperature, smoke, BMS fault) triggers which action (alarm, ventilation, disconnection, suppression, notification of PSP); one complete worked matrix for a container BESS.
  - Emergency response and information for rescue teams (Prawo budowlane art. 33 ust. 3 plan — verified), PSP practice, lessons from investigations (reuse W1 cases, add recommendations).
  - Polish law: Prawo budowlane thresholds 30/300/2000 kWh (verified); Batteries Regulation (EU) 2023/1542 obligations for stationary BESS (safety documentation) — verify article and dates.
- **Promised earlier**: W1 standards page (W6 + W8); W2 summary → "którą detekcję … uruchamia które działanie … — W8, magazyny energii".
- **Reuse, do not repeat**: W1 thermal-runaway stages (Feng 2018), vent-gas data (Shen, Larsson), EPRI statistics, McMicken/Moss Landing/Czajków narratives; W2 BESS fault tree (gases in container).
- **Not here**: SOC/SOH as KPIs (W5), BMS communication (W4).
- **Exercises**: Zadanie 5 (BESS SOC/SOH).
- **Starting points for research**: IEC 62619:2022; IEC 62933-5-1:2024 and -5-2:2025; UL 9540 and UL 9540A ed. 6; NFPA 855 (2026); NFPA 68/69; EPRI BESS failure database; UL FSRI and DNV reports; WECC Moss Landing report; Regulation (EU) 2023/1542; peer-reviewed work on off-gas detection and early warning; CNBOP-PIB/PSP guidance.
- **Check on the writing date**: new WT status (RCL), NFPA 855 and UL 9540A editions, CNBOP-PIB guideline status.

## W9 Biogazownie — ochrona przeciwwybuchowa, detekcja gazów i bezpieczeństwo procesowe

- Title: `W9: Biogazownie — ochrona przeciwwybuchowa, detekcja gazów i bezpieczeństwo procesowe`
- Folder: `wyklad-09-biogazownie`, `sidebar_position: 9`
- **Must cover**
  - Process of a biogas plant: feedstock reception, pre-pit, digester, membrane gas holder, desulphurisation, CHP, flare, digestate, upgrading to biomethane; where hazards arise.
  - Explosion protection: ATEX 1999/92 and 2014/34, Polish MG 2010 regulation (DZPW, zones — verified), hazardous-area classification (IEC 60079-10-1:2020), equipment selection (EPL, categories), ignition sources (EN 1127-1:2019).
  - Gas detection: fixed and portable detectors, sensor principles (catalytic, infrared, electrochemical, PID) and their limits (poisoning, oxygen dependence, cross-sensitivity), IEC 60079-29-0:2025 and IEC 60079-29-2 (selection, installation, maintenance), alarm set points in %LEL and ppm (sourced), calibration and bump tests.
  - **Process gas versus workplace air**: H₂S in the biogas stream (ppm in the gas) is not the same as exposure in air (NDS/NDSCh, verified). Make the difference explicit — the old exercise mixed them up.
  - Process safety: over/under-pressure protection of gas holders, flare, H₂S control, feedstock reception hazards, confined-space entry and permits, digestate storage; TRAS 120 as the German state of the art.
  - Polish specifics: DZPW, UDT (pressure vessels — verified list), NDS (verified), Seveso thresholds (W1).
- **Promised earlier**: W2 index → "W9 — bezpieczeństwo procesowe biogazowni"; W1 part 5 → technology details in W9.
- **Reuse, do not repeat**: W1 methane/H₂S properties and Rhadereistedt case; W2 HAZOP, bow-tie and LOPA examples for the biogas holder (refer back, extend).
- **Not here**: heat pumps (see README "Open decisions").
- **Exercises**: Zadanie 3 (mała biogazownia).
- **Starting points for research**: Directive 1999/92/EC and 2014/34/EU; IEC 60079-10-1:2020; IEC 60079-29-0:2025; IEC 60079-29-2; EN 1127-1:2019; TRAS 120; SVLFG TI 4; DGUV/BG RCI documents; CIOP-PIB; ISAP texts (browser); peer-reviewed biogas accident analyses (Casson Moreno et al.).
- **Check on the writing date**: Ex standard editions; NDS annex (verified 2026 poz. 447).

## W10 Cyberbezpieczeństwo OT i bezpieczna eksploatacja

- Title: `W10: Cyberbezpieczeństwo OT i bezpieczna eksploatacja`
- Folder: `wyklad-10-cyberbezpieczenstwo-eksploatacja`, `sidebar_position: 10`
- **Must cover** (about 50 min cyber, 35 min safe operation, 5 min summary)
  - OT versus IT priorities; attack surface of OZE plants (remote vendor access, cloud-connected inverters, SCADA links, satellite/cellular links); real incidents only from official reports (government, CERT, regulator, operator statements).
  - IEC 62443: zones and conduits, security levels, roles (asset owner, integrator, supplier), 2-1, 3-3, 4-2; defence in depth; basic controls (asset inventory, segmentation, remote-access control, MFA, patch management, backups, logging and monitoring, incident response).
  - Obligations: NIS2 and the Polish KSC amendment (dates verified in W1 — state what applies on the lecture date), CRA reporting, NCCS; incident reporting to CSIRT.
  - Safe operation: lockout/tagout (LOTO) and the five safety rules for electrical work (EN 50110-1), prevention of unexpected start-up (ISO 14118), Polish regulation on BHP at energy equipment (polecenie, dopuszczenie — verify the current act in ISAP), permit-to-work (HSE HSG250), confined spaces (biogas), work at height and rescue (wind), stored energy in BESS and PV.
  - Emergency planning: employer duties (Kodeks pracy — verify articles), fire-safety instructions, plans for rescue teams (Prawo budowlane, verified), BESS emergency response plans (NFPA 855), drills; management of change and incident investigation as the loop back to risk analysis (W2).
- **Promised earlier**: W1 → "zagrożenia cyber … (szerzej w W10)"; W1 standards page → "cyberbezpieczeństwo OT w W10".
- **Reuse, do not repeat**: W1 legal map for NIS2/KSC/CRA/NCCS (refer back, then go into obligations); W4 protocol security.
- **Starting points for research**: IEC 62443 series; NIST SP 800-82 Rev. 3; ENISA reports; CERT Polska reports; NIS Cooperation Group documents; KSC texts (ISAP via browser); EN 50110-1; ISO 14118:2017; HSE HSG250; NFPA 855 emergency response; official incident reports (E-ISAC/SANS analysis of the December 2015 Ukraine grid attack; CISA/US-CERT alert TA17-163A on the 2016 CrashOverride/Industroyer malware; operator statements on the 2022 KA-SAT outage affecting wind-turbine remote monitoring). Vendor threat reports only as SECONDARY.
- **Check on the writing date**: KSC deadlines (the "wykaz" deadline 3.10.2026 will have passed), CRA milestones, IEC 62443 part editions.
