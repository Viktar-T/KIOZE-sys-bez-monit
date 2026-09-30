#!/usr/bin/env python3
"""Build the consolidated bibliography of 06-podsumowanie.mdx from the topic pages (exact copies)."""
import re, sys
D = "/mnt/user-data/outputs/lecture/wyklad-03-architektura-monitoringu/"
PAGES = {
    "01": "01-cele-architektura-i-czas.mdx",
    "02": "02-tor-pomiarowy.mdx",
    "03": "03-niepewnosc-i-wzorcowanie.mdx",
    "04": "04-czujniki-i-monitoring-pv.mdx",
    "05": "05-uszkodzenia-toru-i-przyklad-biogazowy.mdx",
}
entries = {}
for k, f in PAGES.items():
    src = open(D + f, encoding="utf-8").read()
    tail = src.split("</SlideContainer>")[-1].split("## Źródła", 1)[1]
    entries[k] = [re.sub(r"^\d+\.\s+", "", l) for l in tail.strip().splitlines() if re.match(r"^\d+\.\s", l)]

# (group, page, unique substring)
SEL = [
 ("Architektura i czas", [
  ("01", "IEC 62264-1:2013 Enterprise-control"),
  ("01", "ANSI/ISA-95.00.01-2025"),
  ("01", "Guide to Operational Technology"),
  ("01", "Energy Storage Management Systems"),
  ("01", "Overcoming Communications Outages"),
  ("01", "ENERCON GmbH"),
  ("01", "PRC-002-5 Disturbance"),
  ("01", "PRC-028-1 Disturbance"),
  ("01", "RFC 5905"),
  ("01", "IEC 61588:2021"),
  ("01", "Macii D., Rinaldi S."),
  ("01", "Final Report on the August 14, 2003"),
 ]),
 ("Tor pomiarowy", [
  ("02", "International vocabulary of metrology"),
  ("02", "IEC 60381-1:1982"),
  ("02", "HART Technology Detail"),
  ("02", "A Basic Guide to the HART Protocol"),
  ("02", "Outdoor PV System Monitoring"),
  ("02", "Using SCADA Data for Wind Turbine"),
 ]),
 ("Metrologia", [
  ("03", "JCGM 100:2008 Evaluation of measurement data"),
  ("03", "Ewaluacja danych pomiarowych"),
  ("03", "Vademecum"),
  ("03", "EA-4/02 M:2022"),
  ("03", "DA-06 Polityka"),
  ("03", "ILAC-G24:2022"),
  ("03", "Regulatory Guide 1.105"),
 ]),
 ("Czujniki i monitoring PV", [
  ("04", "IEC 61724-1:2021 Photovoltaic system performance"),
  ("04", "Analytical Monitoring of Grid-connected"),
  ("04", "Method to Calculate Uncertainties"),
  ("04", "ISO 9060:2018 Solar energy"),
  ("04", "IEC 60904-2:2023"),
  ("04", "Effect of pyranometer soiling"),
  ("04", "IEA-PVPS T13-28:2024"),
  ("04", "IEC 61400-12-1:2022"),
  ("04", "IEC 61400-50-1:2022"),
  ("04", "Anemometer Calibration Procedure"),
  ("04", "Available Technologies for Wind Energy in Cold Climates"),
  ("04", "IEC 62619:2022"),
  ("04", "flammable gas detectors"),
 ]),
 ("Uszkodzenia i przypadki", [
  ("05", "PDS Data Handbook"),
  ("05", "NE 43 has been revised"),
  ("05", "What does NAMUR NE 43"),
  ("05", "Self-monitoring and diagnostics"),
  ("05", "IEC 62040-3:2021"),
  ("05", "Buncefield: Why did it happen"),
  ("05", "BP Texas City"),
 ]),
 ("Biogaz", [
  ("05", "TRAS 120"),
  ("05", "Technische Information 4"),
  ("05", "Merkblatt T 023"),
  ("05", "Merkblatt T 021"),
  ("05", "Technische Grundlage"),
  ("05", "Biogashandbuch Bayern"),
  ("05", "Process Safety Time Analysis"),
  ("05", "Basisdaten Bioenergie"),
 ]),
 ("Prawo", [
  ("01", "Prawo o miarach"),
  ("01", "Dyrektywa 2014/32/UE"),
 ]),
]
out = ["## Źródła", "", "Wybór najważniejszych źródeł wykładu, pogrupowany tematycznie. Pełne listy źródeł znajdują się na końcu każdej części.", ""]
missing = []
for group, items in SEL:
    out += [f"### {group}", ""]
    n = 0
    for page, key in items:
        hits = [e for e in entries[page] if key in e]
        if len(hits) != 1:
            missing.append((page, key, len(hits)))
            continue
        n += 1
        out.append(f"{n}. {hits[0]}")
    out.append("")
if missing:
    print("MISSING/AMBIGUOUS:", missing, file=sys.stderr)
    sys.exit(1)
p = D + "06-podsumowanie.mdx"
s = open(p, encoding="utf-8").read()
i = s.index("\n## Źródła")
s = s[:i + 1] + "\n".join(out).rstrip() + "\n"
open(p, "w", encoding="utf-8").write(s)
print("entries:", sum(len(i) for _, i in SEL))
