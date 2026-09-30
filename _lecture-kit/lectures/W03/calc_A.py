#!/usr/bin/env python3
"""Calculation checks for lecture W3 — writer A (pages 01 and 02).

Every number shown on 01-cele-architektura-i-czas.mdx and 02-tor-pomiarowy.mdx that results
from arithmetic is recomputed here and compared with the value written on the page (`on_page`).
Fixed illustrative numbers: plan.md, "Fixed illustrative numbers" (shared with writers B and C).

Run: python3 calc_A.py
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


def check_true(label, cond):
    print(f"[{'OK ' if cond else 'FAIL'}] {label}")
    if not cond:
        FAILS.append(label)


def section(title):
    print("\n=== " + title + " ===")


# ---------------------------------------------------------------------------
section("01 Cele, architektura i czas — all slides")
# Page 01 shows only sourced values (NERC ±2 ms, ±1 ms, ±100 ms; Macii & Rinaldi ±100 ns;
# T13-03 99% / 95%; ENERCON 30 000 terminals, 5800 WECs, > 10 GW; IERS -37 s) and no derived
# numbers and no unit conversions. Consistency checks only:
check_true("T13-03: low-quality threshold (95%) below target availability (99%)", 95 < 99)
check_true("PRC-028-1: inverter-level tolerance (100 ms) looser than device tolerance (1 ms)", 100 > 1)
check_true("PRC-028-1 device tolerance (1 ms) tighter than PRC-002-3 (2 ms)", 1 < 2)
check_true("PRC-028-1: NERC Board 8.10.2024 before FERC 20.02.2025", (2024, 10, 8) < (2025, 2, 20))

# ---------------------------------------------------------------------------
section("02 Tor pomiarowy — slide 'Bilans napięć w pętli 4–20 mA' (Przykład ilustracyjny — dane umowne)")
U_zas = 24.0          # V, supply (assumed)
U_p_min = 10.5        # V, transmitter minimum (assumed)
I_max = 0.020         # A
R_max = (U_zas - U_p_min) / I_max
check("R_max [Ω]", R_max, 675)
check("voltage left for the rest of the loop [V] (notes: 13,5 V)", U_zas - U_p_min, 13.5)
rho = 0.0175          # Ω·mm²/m, copper
L_total = 2 * 500     # m, two wires of 500 m
A = 0.5               # mm²
R_k = rho * L_total / A
check("cable resistance R_k [Ω]", R_k, 35)
check("cable drop at 20 mA [V]", I_max * R_k, 0.7)
R_m = 250.0           # Ω, measuring resistor
for i_mA, u_page in [(4, 1), (12, 3), (20, 5)]:
    check(f"{i_mA} mA on 250 Ω [V]", i_mA / 1000 * R_m, u_page)
R_load = R_m + R_k
check("total load [Ω]", R_load, 285)
check_true("285 Ω < 675 Ω (budget met)", R_load < R_max)
check("margin [Ω]", R_max - R_load, 390)
U_trans = U_zas - I_max * R_load
check("voltage at transmitter at 20 mA [V]", U_trans, 18.3)
check_true("18,3 V ≥ 10,5 V", U_trans >= U_p_min)
check("broken wire: current 0 A -> 0 V on resistor", 0.0 * R_m, 0.0, abs_tol=1e-12)
check_true("0 V outside 1–5 V", not (1 <= 0.0 <= 5))
# Notes: a second and a third 250 Ω receiver in series
check("two receivers + cable [Ω] (notes: 535)", 2 * R_m + R_k, 535)
check_true("535 Ω < 675 Ω (OK)", 2 * R_m + R_k < R_max)
check("three receivers + cable [Ω] (notes: 785)", 3 * R_m + R_k, 785)
check_true("785 Ω > 675 Ω (too much)", 3 * R_m + R_k > R_max)
# TI HART resistor range 230–600 Ω contains 250 Ω (VERIFIED-SECONDARY value, consistency only)
check_true("250 Ω inside TI range 230–600 Ω", 230 <= R_m <= 600)

# ---------------------------------------------------------------------------
section("02 Tor pomiarowy — slide 'HART: cyfrowa informacja w pętli analogowej'")
# TI: FSK is a 1 mA peak-to-peak sinusoid (±0,5 mA); zero mean over whole periods (textbook).
n = 1000
mean_fsk = sum(0.5 * math.sin(2 * math.pi * 1200 * k / (1200 * n)) for k in range(n)) / n
check("mean of one period of the FSK sinusoid [mA]", mean_fsk, 0.0, abs_tol=1e-9)

# ---------------------------------------------------------------------------
section("02 Tor pomiarowy — slide 'Przetwornik A/C, rozdzielczość i zakres' (Przykład ilustracyjny — dane umowne)")
N = 12
codes_total = 2 ** N
check("number of codes, 12 bit (notes: 4096)", codes_total, 4096)
FS_mA = 20.0
q_uA = FS_mA / codes_total * 1000
check("q = 20 mA / 4096 [µA]", q_uA, 4.88, rel=2e-3)
codes_4_20 = 16 / 20 * codes_total
check("codes in 4–20 mA", codes_4_20, 3276.8)
check("share of codes used (notes: cztery piąte)", 16 / 20, 0.8)
span_ppm = 5000.0
lsb_ppm = span_ppm / codes_4_20
check("1 LSB [ppm]", lsb_ppm, 1.53, rel=3e-3)
u_q = lsb_ppm / math.sqrt(12)
check("u = LSB/sqrt(12) [ppm] (slide shows 1,53/sqrt(12))", 1.53 / math.sqrt(12), 0.44, rel=1e-2)
check("u from unrounded LSB [ppm]", u_q, 0.44, rel=1e-2)
check("1/sqrt(12) (GUM F.2.2.1: 0,29)", 1 / math.sqrt(12), 0.29, rel=1e-2)
check("ratio LSB/u = sqrt(12) (notes: ponad trzy razy)", lsb_ppm / u_q, 3.46, rel=2e-3)
check_true("sqrt(12) > 3", math.sqrt(12) > 3)
check("notes: 'około półtora ppm'", lsb_ppm, 1.5, rel=0.03)
codes_16 = 16 / 20 * 2 ** 16
check("codes in 4–20 mA, 16 bit", codes_16, 52428.8)
check("1 LSB, 16 bit [ppm]", span_ppm / codes_16, 0.095, rel=5e-3)
# Consistency with page 03 budget (writer B): quantisation 100%/3276,8 = 0,0305% of span, u = 0,0088%
check("quantisation step in % of span (page 03: 0,0305%)", 100 / codes_4_20, 0.0305, rel=2e-3)
check("quantisation u in % of span (page 03: 0,0088%)", 100 / codes_4_20 / math.sqrt(12), 0.0088, rel=1e-2)
# Raw biogas H2S 100–4000 ppm (W2) inside 0–5000 ppm range
check_true("100–4000 ppm inside 0–5000 ppm", 0 <= 100 and 4000 <= span_ppm)
# Saturation: range 0–1000 ppm clips at 1000 ppm
def reading(true_ppm, span):
    return min(max(true_ppm, 0.0), span)
check("0–1000 ppm range, true 3000 ppm -> reading [ppm]", reading(3000, 1000), 1000)

# ---------------------------------------------------------------------------
section("02 Tor pomiarowy — slide 'Próbkowanie i aliasing' (Przykład ilustracyjny — dane umowne)")


def alias(f, fs):
    """Apparent frequency of a component f sampled at fs (folded into 0..fs/2)."""
    r = f % fs
    return min(r, fs - r)


check("50 Hz sampled at 49 Hz -> [Hz]", alias(50, 49), 1)
check("50 Hz sampled at 50 Hz -> [Hz]", alias(50, 50), 0, abs_tol=1e-12)
check("50 Hz sampled at 1 Hz -> [Hz]", alias(50, 1), 0, abs_tol=1e-12)
# The offset for fs = 50 Hz depends on the sampling phase: all samples equal sin(phase)
for phase in (0.0, math.pi / 6, math.pi / 2):
    samples = [math.sin(2 * math.pi * 50 * k / 50 + phase) for k in range(10)]
    check(f"fs = 50 Hz, phase {phase:.3f}: samples constant", max(samples) - min(samples), 0.0, abs_tol=1e-9)
# Notes: 1-s block average contains 50 full periods of 50 Hz -> mean 0
check("periods of 50 Hz in 1 s (notes: 50)", 50 * 1.0, 50)
m = 5000
avg = sum(math.sin(2 * math.pi * 50 * (k / m) + 0.3) for k in range(m)) / m
check("1-s average of 50 Hz sinusoid", avg, 0.0, abs_tol=1e-9)

# ---------------------------------------------------------------------------
section("02 Tor pomiarowy — slide 'Uśrednianie, filtracja i czas odpowiedzi' (Przykład ilustracyjny — dane umowne)")
peak, d_peak, T_win = 1000.0, 30.0, 600.0
mean10 = peak * d_peak / T_win
check("10-min mean of a 30-s 1000 ppm peak [ppm]", mean10, 50)
check_true("50 ppm below the 500 ppm threshold", mean10 < 500)
# per-second check of the same average
series = [1000.0 if s < 30 else 0.0 for s in range(600)]
check("10-min mean from a 1-s series [ppm]", sum(series) / len(series), 50)
t90 = 30.0
tau = t90 / math.log(10)
check("tau = t90 / ln 10 [s]", tau, 13, rel=0.01)
check("first order: 90% reached at t90", 1 - math.exp(-t90 / tau), 0.90)
frac = 1 - math.exp(-10 / tau)
check("10-s puff reaches [%]", 100 * frac, 54, abs_tol=0.5)
check("10-s puff with rounded tau = 13 s [%]", 100 * (1 - math.exp(-10 / 13)), 54, abs_tol=0.5)

# ---------------------------------------------------------------------------
section("02 Tor pomiarowy — slide 'Zapis danych i kompresja' (Przykład ilustracyjny — dane umowne)")
deadband = 50.0
# slow ramp of 40 ppm (e.g. 100 -> 140 ppm over 1000 samples), deadband recording
stored = [100.0]
for k in range(1, 1001):
    v = 100.0 + 40.0 * k / 1000
    if abs(v - stored[-1]) > deadband:
        stored.append(v)
check("stored points after a 40 ppm ramp with a 50 ppm deadband (only the first)", len(stored), 1)
check_true("40 ppm < 50 ppm deadband", 40 < deadband)

# ---------------------------------------------------------------------------
section("02 Bilans napięć w pętli 4–20 mA — fix 25: budget at the NE 43 failure current (22 mA)")
R_max_22 = (24 - 10.5) / 0.022
check("R_max at 22 mA [Ω]", R_max_22, 614, abs_tol=0.5)
check("13,5 V numerator", 24 - 10.5, 13.5)
check_true("285 Ω < 614 Ω", 285 < R_max_22)

# ---------------------------------------------------------------------------
print()
if FAILS:
    print("FAILED:", ", ".join(FAILS))
    sys.exit(1)
print("ALL CHECKS PASSED")
