# Visualisation ideas for the slides of W1 and W2

Starting points for `/wizualizacje-propozycje` (the skill still designs two options per slide and checks every number against the slide). Also saved in the claude.ai project as `claude/plan-wizualizacji-W1-W2.md`.

Written 29.09.2026. The ideas cover all 81 `<Slide>` blocks (W1: 41, W2: 40). ★ = working example in the draft lecture `docs/wyklady-bezp/wyklad-99-test-wizualizacji/`. The components are in `bezp-monit/src/components/viz/`.

## Principles (research)
- **Assertion–evidence:** one sentence stating the conclusion, then the visual as evidence. Garner & Alley 2013, n=110 engineering students: comprehension 9.4 vs 6.7, fewer misconceptions.
- **Mayer's principles:**
  - labels on the diagram (spatial contiguity, d≈1.1)
  - show each part at the moment it is discussed (temporal contiguity, d≈1.2)
  - no decoration (coherence, d≈0.9)
  - build the diagram in steps (segmenting, d≈0.8)
  - introduce symbols first (pre-training, d≈0.75)
- **Simulations with guiding prompts:** g≈0.6 (SRI 2014). Add interactivity only where a parameter changes the conclusion.
- **Mermaid:** version 11.17 is installed; 12.0 came out on 10.09.2026 with breaking changes, so keep the `^11.17.2` override. Newer diagram types are available: `ishikawa`, `quadrantChart`, `sankey`, `xychart`, `gantt`, `venn-beta`, `radar-beta`, `treemap-beta`. Do not set `theme` in a diagram's frontmatter, because it turns off dark mode.

## W1.1 Zagrożenia
- Skala OZE ★ StatTiles
- Mapa zagrożeń (2 slides) ★ HazardHeatmap
- PV: napięcie DC — string schematic with an "open the isolator" toggle; AC vs DC current plot
- PV: dane o pożarach ★ Waffle (PL) + DE/UK funnels
- Wiatr: zagrożenia — turbine hotspots + ice-throw slider d = 1.5(D+H)
- Wiatr: dane — source-reliability pyramid; G+ TRIR bars with bar width = hours worked
- BESS thermal runaway ★ ThermalRunaway
- BESS: gazy — LFP/NCM bars; ★ Mermaid sankey EPRI 81→26→3
- BESS: 3 incidents — squares sized by capacity + timeline
- Biogaz CH₄/H₂S ★ GasScales
- Statystyki ★ RateToggle

## W1.2 Pojęcia
- Hazard → situation → event → harm storyboard
- Two meanings of risk (P×S vs outcomes around a goal)
- Hierarchia środków ★ HierarchyFunnel
- ALARP ★ AlarpCarrot

## W1.3 Ramy prawne
- Legal map as mindmap / act × actor matrix + status chips
- NLF chevron chain
- Product law in gantt (★ legal gantt)
- Ex zones 0/1/2 cross-section
- Seveso calculator (m³ → t)
- RfG types A–D on a log axis
- Building law: log kWh axis with 30/300/2000
- WT gap timeline
- Draft WT: annotated building, each item tagged monitoring or protection
- NDS on log bars + UDT p·V region
- Responsibility swimlane

## W1.4 Normy
- Levels IEC → EN → PN-EN
- Edition timelines with replacements
- Functional-safety family tree
- Alarm-rate gauge + IEC 62443 zones sketch

## W1.5 Monitoring a warstwy
- One sensor, two paths on a log time axis
- Onion ★ OnionLayers
- Swiss cheese with a "shared PLC" toggle
- IPL: three padlocks + checklist
- 4×2 technology table on a time axis
- McMicken ★ SwissCheese
- Monitoring as a foundation + "all green" SCADA mock

## W1.6
- Recap cards with glyphs
- Quiz with a score per lecture part

## W2.1
- Recap: onion + questions
- ISO 31000 Fig. 4 as a "Jesteś tutaj" mini-map
- Method choice ★ quadrantChart
- Criteria: log risk ladder + F–N plot
- Matrix and Cox ★ RiskMatrix

## W2.2 HAZID/HAZOP
- Phases with an information wedge
- HAZID flip cards
- Guide word + parameter combinator
- Guide word × parameter grid
- Nested study loops
- Annotated worksheet → LOPA
- P&ID of the gas holder with row highlighting (2 slides)
- Sankey of recommendations → requirements

## W2.3 FMEA
- System tree ↑FMEA ↓FTA
- S/O/D rulers to scale
- RPN ★ RpnHistogram
- Sort by RPN vs AP
- Onshore → offshore slope chart
- FMEA rank vs field data
- P-F curve

## W2.4 FTA/ETA/bow-tie
- IEC 61025 symbol legend
- FTA + quantification + β ★ FaultTree
- ETA ★ EventTree
- Generic bow-tie anatomy
- Biogas bow-tie ★ BowTie

## W2.5 LOPA/SIL
- LOPA ★ LopaWaterfall (3 slides)
- IPL filter funnel
- Log dot plot of IEF/PFD values + OR tree for alarm+operator
- SIL/RRF/PFH rulers
- PFDavg ★ PfdSawtooth
- 1oo2 β ★ BetaBars
- Parallel PL a–e vs SIL rulers

## W2.6
- Method pipeline
- Course "metro map"

## Changes that help every slide
1. `<Claim>` (done)
2. SVG technology icons instead of emoji
3. Status chips for legal acts
4. `<Sources>` with a muted source line
5. Optional `<Step>` in presentation mode
6. SVG separator + progress bar
