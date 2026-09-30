#!/usr/bin/env python3
"""Calculation checks for lecture W3, writer B (pages 03 and 04).

Every number shown on 03-niepewnosc-i-wzorcowanie.mdx and 04-czujniki-i-monitoring-pv.mdx
that results from arithmetic is recomputed here and compared with the value written on the page
(`on_page`). The script exits with an error if any check fails.

Run: python3 /home/claude/work/W03/calc_B.py
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


def section(title):
    print("\n=== " + title + " ===")


# ---------------------------------------------------------------------------
section("03 — Przykład: budżet niepewności pomiaru napełnienia (Przykład ilustracyjny — dane umowne)")
# Fixed illustrative numbers from plan.md (all in % of span, sensitivity coefficients = 1)
mpe_transmitter = 0.5      # ±0,5% MPE, rectangular -> a/sqrt(3)  (GUM 4.3.7)
U_cert, k_cert = 0.4, 2    # certificate U = 0,4% (k = 2) -> U/k   (EA-4/02 5.1)
drift = 1.0                # ±1,0% per year between calibrations, rectangular
card = 0.1                 # ±0,1% input card, rectangular
codes_4_20 = 0.8 * 2 ** 12  # 12 bit on 0–20 mA: 4–20 mA uses 16/20 of 4096 codes
q = 100 / codes_4_20       # quantisation step in % of span

check("codes on 4–20 mA (12 bit on 0–20 mA)", codes_4_20, 3276.8)
check("q = 100%/3276,8 [% of span]", q, 0.0305, abs_tol=5e-5)

u_tr = mpe_transmitter / math.sqrt(3)
u_cal = U_cert / k_cert
u_dr = drift / math.sqrt(3)
u_card = card / math.sqrt(3)
u_q = q / math.sqrt(12)    # GUM F.2.2.1

check("u przetwornik [%]", u_tr, 0.289, abs_tol=5e-4)
check("u wzorcowanie [%]", u_cal, 0.200, abs_tol=5e-4)
check("u dryft [%]", u_dr, 0.577, abs_tol=5e-4)
check("u karta [%]", u_card, 0.058, abs_tol=5e-4)
check("u kwantyzacja [%]", u_q, 0.0088, abs_tol=5e-5)

var = [u_tr ** 2, u_cal ** 2, u_dr ** 2, u_card ** 2, u_q ** 2]
u_c = math.sqrt(sum(var))
U = 2 * u_c
check("u_c [%] (KaTeX 0,678)", u_c, 0.678, abs_tol=5e-4)
check("u_c [%] (text 0,68)", u_c, 0.68, abs_tol=5e-3)
check("U = 2 u_c [%] (1,36)", U, 1.36, abs_tol=5e-3)
check("U rounded [%] (1,4)", U, 1.4, abs_tol=0.05)
# the KaTeX line shows U = 2 x 0,678 = 1,356 -> 1,36 (consistent with the unrounded value)
check("U from displayed u_c 2 x 0,678", 2 * 0.678, 1.36, abs_tol=5e-3)

shares = [100 * v / sum(var) for v in var]
check("share przetwornik [%]", shares[0], 18.1, abs_tol=0.05)
check("share wzorcowanie [%]", shares[1], 8.7, abs_tol=0.05)
check("share dryft [%]", shares[2], 72.5, abs_tol=0.05)
check("share karta [%]", shares[3], 0.7, abs_tol=0.05)
check("share kwantyzacja [%] (≈ 0)", shares[4], 0.0, abs_tol=0.05)
print(f"  karta + kwantyzacja = {shares[3] + shares[4]:.2f}% of variance (page: mniej niż 1%)")
assert shares[3] + shares[4] < 1.0
check("sum of displayed shares = 100", 72.5 + 18.1 + 8.7 + 0.7, 100.0, abs_tol=1e-9)
print("  'prawie trzy czwarte wariancji to dryft':", round(shares[2], 1), "% (between 70 and 75)")
assert 70 < shares[2] < 75

# Notes question: drift reduced to ±0,5% -> U ≈ 0,9%
u_dr_half = 0.5 / math.sqrt(3)
u_c_half = math.sqrt(u_tr ** 2 + u_cal ** 2 + u_dr_half ** 2 + u_card ** 2 + u_q ** 2)
check("notes: U with drift ±0,5% [%] (≈ 0,9)", 2 * u_c_half, 0.9, abs_tol=0.05)

# ---------------------------------------------------------------------------
section("03 — Przykład: budżet … — Reda (NREL 2011) Table 3, thermopile pyranometer (published U95 values)")
reda_rows = {"calibration": 3, "zenith": 2, "azimuth": 1, "spectral": 1, "tilt": 0.2,
             "nonlinearity": 0.5, "temperature": 1, "aging per year": 0.2}
check("Reda Table 3 sum (printed 8,9%)", sum(reda_rows.values()), 8.9, abs_tol=1e-9)
check("Reda Table 3: largest item is calibration = 3%", max(reda_rows.values()), 3.0, abs_tol=1e-9)
# RSS 4,1% is the value printed in the report; it is quoted, NOT asserted.
# Recomputation of the rounded rows gives 4,04% (coordinator_checks C1) — reported value kept on the slide.
print(f"  info: RSS of rounded rows = {math.sqrt(sum(v * v for v in reda_rows.values())):.3f}% "
      "(report prints 4,1%; quoted, not recomputed on the slide)")

# ---------------------------------------------------------------------------
section("03 — Dryft i odstępy między wzorcowaniami (published values, no arithmetic)")
print("  Reda ageing 0,2%/rok; Pindado ~450 dni; DGUV T 021 50%; T13-03 2 lata / 1 rok — quoted, no arithmetic")

# ---------------------------------------------------------------------------
section("04 — Promieniowanie: piranometry … — Reda (NREL 2011) Table 10 (published U95 values)")
U95 = {"thermopile_const": 4.1, "thermopile_Fz": 2.6, "semi_const": 8.0, "semi_Fz": 4.0}
ratio = U95["semi_const"] / U95["thermopile_const"]
check("notes: semiconductor vs thermopile at constant R, 'prawie dwa razy'", ratio, 1.95, abs_tol=0.01)
assert 1.8 < ratio < 2.0
assert U95["thermopile_Fz"] < U95["thermopile_const"] and U95["semi_Fz"] < U95["semi_const"]
print("  F(z) reduces U95 for both sensors (notes: 'wyraźnie zmniejsza niepewność obu')")

# ---------------------------------------------------------------------------
section("04 — Temperatura modułu i otoczenia (Przykład ilustracyjny — dane umowne; Sandia module model)")
# Coefficients copied from pv_monitoring.md 5.4 (Sandia PVPMC): glass/cell/polymer sheet, open rack
a, b = -3.56, -0.0750
E, T_a = 800.0, 20.0       # assumed: W/m², °C


def t_module(ws):
    return E * math.exp(a + b * ws) + T_a


Tm1 = t_module(1.0)
Tm5 = t_module(5.0)
check("T_m at WS = 1 m/s [°C]", Tm1, 41.1, abs_tol=0.05)
check("T_m at WS = 5 m/s [°C]", Tm5, 35.6, abs_tol=0.05)
check("difference due to wind [°C] (ok. 5,5)", Tm1 - Tm5, 5.5, abs_tol=0.05)
check("difference from displayed values 41,1 − 35,6", 41.1 - 35.6, 5.5, abs_tol=1e-9)
print("  notes: 'o ponad pięć stopni' ->", round(Tm1 - Tm5, 2), "> 5")
assert Tm1 - Tm5 > 5

# ---------------------------------------------------------------------------
section("04 — Od wymagań do projektu monitoringu PV (T13-03 intervals, no conversion)")
print("  1 s sampling, 5–15 min averages, 1–2 weeks cleaning, 2 years / 1 year recalibration, 99% / 95% — quoted")

# ---------------------------------------------------------------------------
print()
if FAILS:
    print("FAILED:", ", ".join(FAILS))
    sys.exit(1)
print("ALL CHECKS PASSED")
