#!/usr/bin/env python3
"""Calculation checks for lecture W3 "Architektura monitoringu i tor pomiarowy" — writer C.

Pages: 05-uszkodzenia-toru-i-przyklad-biogazowy.mdx, 06-podsumowanie.mdx (slides + quiz), index.md.
Every number shown on these pages that results from arithmetic is recomputed here and compared
with the value written on the page (`on_page`). Started from _lecture-kit/tools/calc_template.py.

Fixed illustrative numbers from plan.md (shared with writers A and B):
  fill-level budget u_c = 0.678 %, U = 1.36 % ~ 1.4 % (k = 2), drift share 72.5 %;
  ADC 12 bit on 0-20 mA, 0-5000 ppm -> 1.53 ppm per LSB;
  30 s peak of 1000 ppm in a 600 s window -> 50 ppm;
  biogas holder: 500 kW, eta 0.40, 55 % CH4, Hu 9.97 kWh/m3 -> 228 m3/h; 1000 m3; trip 90 %.

Run: python3 calc_C.py
"""
import math
import sys

FAILS = []


def check(label, computed, on_page, rel=1e-3, abs_tol=0.0):
    """Compare a computed value with the value written on the page (relative or absolute tolerance)."""
    ok = math.isclose(computed, on_page, rel_tol=rel, abs_tol=abs_tol)
    print(f"[{'OK ' if ok else 'FAIL'}] {label}: computed={computed:.6g}  page={on_page:.6g}")
    if not ok:
        FAILS.append(label)


def check_true(label, condition):
    print(f"[{'OK ' if condition else 'FAIL'}] {label}")
    if not condition:
        FAILS.append(label)


def section(title):
    print("\n=== " + title + " ===")


FT = 0.3048  # m per foot (exact definition)

# ---------------------------------------------------------------------------
section("05 — Jak zawodzi tor pomiarowy (SINTEF PDS Data Handbook 2021, failure_diagnostics 3.2, 4.2)")
dc = {"pressure": 65, "level": 70, "temperature": 70, "flow": 65}      # % (SINTEF, as on the slide)
lam_du = {"pressure": 0.48, "level": 1.9, "temperature": 0.1, "flow": 1.4}  # per 1e6 h
check("undetected share, pressure/flow transmitter [%] (100 - DC)", 100 - dc["pressure"], 35, abs_tol=1e-9)
check("undetected share, level/temperature transmitter [%] (100 - DC)", 100 - dc["level"], 30, abs_tol=1e-9)
check_true("level transmitter has the highest lambda_DU of the four", max(lam_du, key=lam_du.get) == "level")
check("lambda_DU level / pressure ('ok. 4 razy')", lam_du["level"] / lam_du["pressure"], 4, abs_tol=0.1)

# ---------------------------------------------------------------------------
section("05 — Sygnalizacja uszkodzeń: NAMUR NE 43 (levels wg literatury branżowej) on the 250 ohm resistor")
R = 250.0  # ohm, HART/measuring resistor from part 2
check("3.8 mA x 250 ohm [V]", 3.8e-3 * R, 0.95)
check("20.5 mA x 250 ohm [V]", 20.5e-3 * R, 5.125)
check("3.6 mA x 250 ohm [V]", 3.6e-3 * R, 0.9)
check("21 mA x 250 ohm [V]", 21e-3 * R, 5.25)
check("4 mA x 250 ohm [V] (1-5 V range, part 2)", 4e-3 * R, 1.0)
check("20 mA x 250 ohm [V] (1-5 V range, part 2)", 20e-3 * R, 5.0)

# ---------------------------------------------------------------------------
section("05 — Buncefield i Texas City (HSE 2011; CSB 2007; values as published, conversions checked)")
t_flat = 3 * 60 + 5        # 03:05 ATG flatlined (para 11)
t_spill = 5 * 60 + 37      # 05:37 petrol spills from roof vents (para 12)
check("03:05 -> 05:37 [min]", t_spill - t_flat, 152, abs_tol=1e-9)
check_true("'ponad dwie i pół godziny' (notes): 152 min > 150 min", t_spill - t_flat > 150)
# Texas City: metric values as printed in the CSB report (checked, not recomputed on the slide)
check("5 ft -> 1.5 m", 5 * FT, 1.5, abs_tol=0.05)
check("9 ft -> 2.7 m", 9 * FT, 2.7, abs_tol=0.05)
check("170 ft -> 52 m", 170 * FT, 52, abs_tol=0.5)
check("158 ft -> 48 m", 158 * FT, 48, abs_tol=0.5)
check("7.9 ft -> 2.4 m", 7.9 * FT, 2.4, abs_tol=0.05)

# ---------------------------------------------------------------------------
section("05 — Zbiornik biogazu: od HAZOP i LOPA do specyfikacji (TRAS 120 1.5.2.2.1; W2 O2 check)")
check("H2S 0.4 % obj. = 4000 ppm", 0.4 / 100 * 1e6, 4000)
check_true("range 0-5000 ppm covers 4000 ppm", 5000 >= 4000)
x_o2 = 0.06 * 0.2095 / 1.06   # 6 % air dosing (SVLFG TI 4), air 20.95 % O2 — same formula as W2 page 02
check("O2 from 6 % air dosing [% obj.] ('ok. 1,2% obj.')", 100 * x_o2, 1.2, abs_tol=0.05)
check_true("1.2 % obj. lies in the TRAS 0-2 % obj. band", 0 <= 100 * x_o2 <= 2)

# ---------------------------------------------------------------------------
section("05 — Przykład: ile czasu daje zbiornik biogazu (Przykład ilustracyjny — dane umowne)")
P_el = 500.0      # kW (assumed)
eta_el = 0.40     # (assumed)
x_ch4 = 0.55      # CH4 in biogas (assumed, inside TRAS 45-75 %)
Hu = 9.97         # kWh/m3, lower heating value of methane, normal conditions (textbook)
V_use = 1000.0    # m3 usable volume (assumed)
P_fuel = P_el / eta_el
check("fuel power [kW]", P_fuel, 1250)
V_ch4 = P_fuel / Hu
check("methane flow [m3/h] ('125,4')", V_ch4, 125.4, abs_tol=0.05)
V_bg = V_ch4 / x_ch4
check("biogas flow [m3/h] ('ok. 228')", V_bg, 228, abs_tol=0.5)
check("KaTeX: 500/(0.40*9.97*0.55)", 500 / (0.40 * 9.97 * 0.55), 228, abs_tol=0.5)
dV = (1.00 - 0.90) * V_use
check("volume between trip 90 % and relief ~100 % [m3]", dV, 100)
t_margin_h = dV / V_bg
check("margin 100/228 [h] ('≈ 0,44 h' in notes of the research; slide shows min)", t_margin_h, 0.44, abs_tol=0.005)
t_margin = t_margin_h * 60
check("margin [min] ('ok. 26 min')", t_margin, 26, abs_tol=0.5)
U_pct = 1.36  # % of span, k = 2 (budget of part 3; 'U ≈ 1,4%')
check("U rounded ('1,4%')", U_pct, 1.4, abs_tol=0.05)
dV_U = U_pct / 100 * V_use
check("U as volume [m3] ('13,6 m³')", dV_U, 13.6, abs_tol=0.05)
check("U as volume rounded ('ok. 14 m³')", dV_U, 14, abs_tol=0.5)
t_U = dV_U / V_bg * 60
check("U as time [min] ('ok. 3,6 min')", t_U, 3.6, abs_tol=0.05)
# note: 14 m3 exactly would give 3.68 min; the slide therefore states 13,6 m3 and 3,6 min
dV_5 = 0.05 * V_use
check("5 % of span as volume [m3]", dV_5, 50)
t_5 = dV_5 / V_bg * 60
check("5 % of span as time [min] ('ok. 13 min')", t_5, 13, abs_tol=0.5)
check_true("13 min is about half of the 26 min margin ('połowę zapasu')", abs(t_5 / t_margin - 0.5) < 0.01)

# ---------------------------------------------------------------------------
section("05 — Pomiary składu gazu i czas odpowiedzi (Przykład ilustracyjny — dane umowne)")


def line_volume_l(d_mm, L_m):
    return math.pi * (d_mm / 1000) ** 2 / 4 * L_m * 1000  # litres


V1 = line_volume_l(4, 20)
check("line 4 mm x 20 m volume [l] ('0,25 l')", V1, 0.25, abs_tol=0.005)
t1 = V1 / 1.0 * 60  # s at 1 l/min
check("transport time 4 mm, 20 m, 1 l/min [s] ('ok. 15 s')", t1, 15, abs_tol=0.5)
V2 = line_volume_l(6, 50)
check("line 6 mm x 50 m volume [l] ('1,41 l')", V2, 1.41, abs_tol=0.005)
t2 = V2 / 0.5 * 60
check("transport time 6 mm, 50 m, 0.5 l/min [s] ('ok. 170 s')", t2, 170, abs_tol=0.5)
check("transport time 6 mm, 50 m [min] ('≈ 2,8 min')", t2 / 60, 2.8, abs_tol=0.05)

# ---------------------------------------------------------------------------
section("06 — Monitoring, któremu można ufać (numbers repeated from parts 2, 3, 5)")
check("30 s peak 1000 ppm in 600 s -> mean [ppm] ('50 ppm')", 1000 * 30 / 600, 50)
u = [0.5 / math.sqrt(3), 0.4 / 2, 1.0 / math.sqrt(3), 0.1 / math.sqrt(3), (100 / 3276.8) / math.sqrt(12)]
uc = math.sqrt(sum(x ** 2 for x in u))
check("budget u_c [% of span] ('0,678%')", uc, 0.678, abs_tol=0.0005)
check("budget U = 2 u_c [% of span] ('1,36%')", 2 * uc, 1.36, abs_tol=0.005)
check("drift share of variance [%] ('72,5%')", 100 * u[2] ** 2 / uc ** 2, 72.5, abs_tol=0.05)
check("margin [min] ('ok. 26 min')", t_margin, 26, abs_tol=0.5)
check("U as time [min] ('ok. 3,6 min')", t_U, 3.6, abs_tol=0.05)

# ---------------------------------------------------------------------------
section("06 — Quiz")
# Q4: 0 mA on a 4-20 mA transmitter for 0-100 %
check("Q4: 0 mA as % of span (distractor '−25%')", (0 - 4) / 16 * 100, -25)
check("Q4: 0 mA x 250 ohm [V]", 0 * R, 0.0, abs_tol=1e-12)
# Q5: ADC
q = 20e-3 / 2 ** 12
check("Q5: q = 20 mA / 4096 [µA] ('4,88 µA')", q * 1e6, 4.88, abs_tol=0.005)
codes = 16e-3 / q
check("Q5: codes on 4-20 mA ('3276,8')", codes, 3276.8)
check("Q5: 16/20 x 4096 ('3276,8 kodu')", 16 / 20 * 4096, 3276.8)
lsb_ppm = 5000 / codes
check("Q5: ppm per LSB ('ok. 1,53 ppm', correct)", lsb_ppm, 1.53, abs_tol=0.005)
check("Q5: q/sqrt(12) [ppm] ('0,44 ppm')", lsb_ppm / math.sqrt(12), 0.44, abs_tol=0.005)
check("Q5: distractor 5000/4096 [ppm] ('ok. 1,22 ppm')", 5000 / 4096, 1.22, abs_tol=0.005)
check("Q5: distractor 5000/16384 [ppm] ('ok. 0,31 ppm')", 5000 / 16384, 0.31, abs_tol=0.005)
check_true("Q5: correct answer differs from all distractors",
           all(abs(lsb_ppm - d) > 0.2 for d in (5000 / 4096, 5000 / 16384, 4.88)))
# Q6: averaging
check("Q6: 1000 ppm x 30 s / 600 s [ppm]", 1000 * 30 / 600, 50)
# Q7: rectangular MPE
check("Q7: 0,5/sqrt(3) [%] ('ok. 0,29%')", 0.5 / math.sqrt(3), 0.29, abs_tol=0.005)
check("Q7: 0,5/sqrt(3) [%] ('0,289%')", 0.5 / math.sqrt(3), 0.289, abs_tol=0.0005)
check("Q7: distractor a/2 ('0,25%')", 0.5 / 2, 0.25)
check("Q7: u_c ('0,678%')", uc, 0.678, abs_tol=0.0005)
check("Q7: U = 2 x 0,678 ('1,36%')", 2 * 0.678, 1.36, abs_tol=0.005)
# Q10: fill margin
check("Q10: 100 m3 / 228 m3/h [h] ('0,44 h')", 100 / 228, 0.44, abs_tol=0.005)
check("Q10: 100 m3 / 228 m3/h [min] ('ok. 26 min')", 100 / 228 * 60, 26, abs_tol=0.5)
check("Q10: distractor full volume 1000/228 [h] ('ok. 4,4 h')", 1000 / 228, 4.4, abs_tol=0.05)
check("Q10: U 14 m3 -> ok. 3,6 min (13,6 m3 on the slide)", 13.6 / V_bg * 60, 3.6, abs_tol=0.05)
check("Q10: 5 % -> ok. 13 min", 50 / V_bg * 60, 13, abs_tol=0.5)

# ---------------------------------------------------------------------------
section("index.md — plan table")
plan = {"01": 20, "02": 18, "03": 14, "04": 15, "05": 18, "06": 5}
check("plan sums to 90 min", sum(plan.values()), 90)
notes_05 = [2.5, 2, 2.5, 2.5, 3, 3, 2.5]
check("page 05: Czas values sum to 18 min", sum(notes_05), plan["05"])
notes_06 = [2.5, 2.5]
check("page 06: Czas values sum to 5 min", sum(notes_06), plan["06"])

# ---------------------------------------------------------------------------
print()
if FAILS:
    print("FAILED:", ", ".join(FAILS))
    sys.exit(1)
print("ALL CHECKS PASSED")
