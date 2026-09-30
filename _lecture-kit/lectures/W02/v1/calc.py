#!/usr/bin/env python3
"""Calculation checks for Lecture W2 (Analiza ryzyka: HAZID, HAZOP, FMEA, FTA, LOPA, SIL).

Every number displayed in the W2 pages that results from arithmetic is recomputed here.
Run:  python3 /home/claude/lectures_work/w2_calc.py
Each check prints the value and asserts it against the value written in the MDX pages
(tolerance given per check). The script exits with an error if any check fails.
"""
import itertools
import math
import statistics

FAILS = []


def check(label, value, expected, rel=1e-3, abs_tol=0.0):
    ok = math.isclose(value, expected, rel_tol=rel, abs_tol=abs_tol)
    flag = "OK " if ok else "FAIL"
    print(f"[{flag}] {label}: computed={value:.6g}  page={expected:.6g}")
    if not ok:
        FAILS.append(label)


def section(title):
    print("\n=== " + title + " ===")


# ---------------------------------------------------------------------------
section("01 Risk matrix 5x5 (Przyklad ilustracyjny): index sum rule")
# Frequency categories F1..F5 (per year): F1 < 1e-4, F2 1e-4..1e-3, F3 1e-3..1e-2,
# F4 1e-2..1e-1, F5 >= 1e-1.  Consequence categories C1..C5 (each ~ one order of magnitude).
# Rule used on the slide: i + j >= 8 -> N (nietolerowane); 6..7 -> T (tolerowane, ALARP); <= 5 -> A.


def cell(i, j):
    s = i + j
    if s >= 8:
        return "N"
    if s >= 6:
        return "T"
    return "A"


print("      C1 C2 C3 C4 C5")
matrix = {}
for i in range(5, 0, -1):
    row = [cell(i, j) for j in range(1, 6)]
    matrix[i] = row
    print(f"F{i}:   " + "  ".join(row))
# Expected rows as written on the slide (F5 at top)
expected_rows = {
    5: ["T", "T", "N", "N", "N"],
    4: ["A", "T", "T", "N", "N"],
    3: ["A", "A", "T", "T", "N"],
    2: ["A", "A", "A", "T", "T"],
    1: ["A", "A", "A", "A", "T"],
}
for i in range(1, 6):
    if matrix[i] != expected_rows[i]:
        FAILS.append(f"matrix row F{i}")
        print(f"[FAIL] matrix row F{i}: {matrix[i]} vs page {expected_rows[i]}")
    else:
        print(f"[OK ] matrix row F{i}")
# Range-compression demo (fix 2): F2 x C4 and F3 x C4 (one fatality) share category T,
# although their frequency bands differ by one decade (~10x).
assert cell(2, 4) == "T" and cell(3, 4) == "T"
print("[OK ] F2xC4 and F3xC4 both land in 'T' (range compression)")
check("frequency ratio F3 vs F2 (log-midpoints 10^-2.5 vs 10^-3.5)", 10 ** (-2.5) / 10 ** (-3.5), 10.0)
# Equivalence demo: F4 x C2 (uraz z absencja) and F2 x C4 (ofiara smiertelna) are both T
# -> the matrix treats them as equivalent although the harm is of a different kind.
assert cell(4, 2) == "T" and cell(2, 4) == "T"
print("[OK ] F4xC2 and F2xC4 both land in 'T' (treated as equivalent, different kind of harm)")
# Calibration note (fix 1): F1 x C4 (one fatality, up to 1e-4/yr) is category A,
# while R2P2 broadly-acceptable individual risk is <= 1e-6/yr -> factor 100 gap at the F1 upper bound.
assert cell(1, 4) == "A"
print("[OK ] F1xC4 is 'A' (matrix not calibrated to R2P2)")
check("F1 upper bound / R2P2 broadly acceptable", 1e-4 / 1e-6, 100.0)

# ---------------------------------------------------------------------------
section("03 RPN statistics, scales 1..10 (own calculation, as in fmea notes)")
rpns = [s * o * d for s, o, d in itertools.product(range(1, 11), repeat=3)]
distinct = sorted(set(rpns))
check("number of S,O,D combinations", len(rpns), 1000)
check("number of distinct RPN values", len(distinct), 120)
counts = {v: rpns.count(v) for v in distinct}
maxcount = max(counts.values())
most = sorted(v for v, c in counts.items() if c == maxcount)
print("most degenerate RPN values:", most, "each from", maxcount, "triples")
assert most == [60, 72, 120] and maxcount == 24
check("mean RPN", statistics.mean(rpns), 166.375, rel=1e-6)  # page shows 166,4
check("median RPN", statistics.median(rpns), 105)
check("largest RPN below 1000", max(v for v in distinct if v < 1000), 900)
check("distinct RPN values <= 100", len([v for v in distinct if v <= 100]), 46)
share_over_100 = sum(1 for r in rpns if r > 100) / len(rpns)
print(f"share of combinations with RPN > 100: {share_over_100:.3f}")
assert share_over_100 > 0.5

section("03 RPN example: same RPN, very different severity (Przyklad ilustracyjny)")
rpn_a = 10 * 3 * 4  # H2 sensor in BESS container fails to detect gas
rpn_b = 2 * 10 * 6  # PV soiling -> yield loss
check("RPN mode A (S=10,O=3,D=4)", rpn_a, 120)
check("RPN mode B (S=2,O=10,D=6)", rpn_b, 120)
check("number of triples giving RPN=120", counts[120], 24)
# second pair: nuisance outranks safety-critical
check("RPN S=9,O=2,D=3", 9 * 2 * 3, 54)
check("RPN S=3,O=6,D=4", 3 * 6 * 4, 72)

section("03 Tavner / Shafiee wind scales S{1..4} O{1,2,3,5} D{1,4,7,10}")
w = [s * o * d for s in (1, 2, 3, 4) for o in (1, 2, 3, 5) for d in (1, 4, 7, 10)]
check("wind-scale combinations", len(w), 64)
check("wind-scale distinct RPNs", len(set(w)), 39)
check("wind-scale max RPN", max(w), 200)

section("03 Shafiee & Dinmohammadi (2014) Table 7 rows: RPN = Sf*S*Sd")
rows = {
    "onshore tower": (5, 3, 7, 105), "onshore gearbox": (3, 4, 7, 84),
    "onshore blades": (5, 2, 7, 70), "onshore generator": (3, 3, 7, 63),
    "onshore converter": (2, 4, 7, 56),
    "offshore tower": (5, 4, 7, 140), "offshore gearbox": (5, 3, 7, 105),
    "offshore blades": (5, 3, 7, 105), "offshore generator": (5, 2, 7, 70),
    "offshore converter": (3, 4, 7, 84),
}
for k, (o, s, d, rpn) in rows.items():
    check(k, o * s * d, rpn)
check("onshore gearbox with D=1 (CMS illustration)", 3 * 4 * 1, 12)
check("reduction factor D 7->1", 84 / 12, 7)

section("03 Carroll et al. (2016) offshore failure rates (failures/turbine/yr)")
check("pitch/hydraulic vs tower/foundation ratio", 1.076 / 0.185, 5.82, rel=2e-3)
# Failure-rate breakdown (fix 13): 6.2 minor + 1.1 major repair + 0.3 major replacement + 0.7 no cost data
check("Carroll 6.2+1.1+0.3+0.7 = 8.3", 6.2 + 1.1 + 0.3 + 0.7, 8.3, rel=1e-9)

# ---------------------------------------------------------------------------
section("04 FTA example (Przyklad ilustracyjny): BESS container")
A, B, C = 0.01, 0.02, 0.05  # G1 inputs: cell defect, overcharge with BMS protection failure, cooling failure
q = 0.02                    # each gas detector failed on demand (D1, D2)
V = 0.005                   # emergency ventilation fails to start on demand


def p_or(*ps):
    prod = 1.0
    for p in ps:
        prod *= (1 - p)
    return 1 - prod


G1_exact = p_or(A, B, C)
G1_rare = A + B + C
check("G1 OR exact", G1_exact, 0.07831, rel=1e-4)
check("G1 OR rare-event", G1_rare, 0.08)
check("G1 overestimate %", (G1_rare / G1_exact - 1) * 100, 2.16, rel=5e-3)
# Large probabilities: 0.1, 0.2, 0.3
big_exact = p_or(0.1, 0.2, 0.3)
check("OR exact p=0.1,0.2,0.3", big_exact, 0.496)
check("OR rare-event p=0.1,0.2,0.3", 0.6, 0.6)
check("overestimate % for big p", (0.6 / big_exact - 1) * 100, 21.0, rel=5e-3)

G3_ind = q * q
check("G3 = D1 AND D2 (independent)", G3_ind, 4e-4)
G2_ind = p_or(G3_ind, V)
check("G2 = G3 OR V exact", G2_ind, 0.005398, rel=1e-3)
T_exact = G1_exact * G2_ind
check("T exact (independent)", T_exact, 4.23e-4, rel=2e-3)
# minimal cut sets: {A,V},{B,V},{C,V},{A,D1,D2},{B,D1,D2},{C,D1,D2}
mcs = [A * V, B * V, C * V, A * q * q, B * q * q, C * q * q]
T_mcs = sum(mcs)
check("T rare-event (sum of MCS)", T_mcs, 4.32e-4, rel=1e-3)
fv_V = (A * V + B * V + C * V) / T_mcs
check("share of cut sets containing V", fv_V * 100, 92.6, rel=2e-3)
check("share of cut sets containing D1,D2", (1 - fv_V) * 100, 7.4, rel=5e-3)

section("04 CCF beta-factor on the detector pair D1,D2 (q = 0.02)")
beta_rows = {}
for beta in (0.0, 0.02, 0.05, 0.10):
    ind = ((1 - beta) * q) ** 2
    ccf = beta * q
    tot = ind + ccf
    beta_rows[beta] = (ind, ccf, tot)
    print(f"beta={beta:.2f}: independent={ind:.3e} CCF={ccf:.3e} total={tot:.3e} "
          f"CCF share={ccf / tot * 100:.0f}%  factor vs beta=0: {tot / 4e-4:.1f}")
check("beta=0.02 total", beta_rows[0.02][2], 7.84e-4, rel=2e-3)
check("beta=0.02 CCF share %", beta_rows[0.02][1] / beta_rows[0.02][2] * 100, 51, rel=1e-2)
check("beta=0.05 total", beta_rows[0.05][2], 1.36e-3, rel=2e-3)
check("beta=0.05 CCF share %", beta_rows[0.05][1] / beta_rows[0.05][2] * 100, 73.5, rel=2e-3)
check("beta=0.10 total", beta_rows[0.10][2], 2.32e-3, rel=2e-3)
check("beta=0.10 CCF share %", beta_rows[0.10][1] / beta_rows[0.10][2] * 100, 86, rel=1e-2)
check("beta=0.10 factor vs independent", beta_rows[0.10][2] / G3_ind, 5.8, rel=1e-2)
G2_ccf = p_or(beta_rows[0.10][2], V)
T_ccf = G1_exact * G2_ccf
check("T exact with beta=0.10", T_ccf, 5.73e-4, rel=2e-3)
check("T increase % with beta=0.10", (T_ccf / T_exact - 1) * 100, 35, rel=2e-2)

section("04 ETA (Przyklad ilustracyjny) starting from FTA G1")
f_IE = 0.08       # /yr, rare-event value of G1
p_rem_fail = 0.0054  # gas removal fails (G2, independent, rounded)
p_ign = 0.5       # assumed ignition probability (umowne)
out_safe = f_IE * (1 - p_rem_fail)
out_noign = f_IE * p_rem_fail * (1 - p_ign)
out_defl = f_IE * p_rem_fail * p_ign
check("ETA safe removal", out_safe, 0.0796, rel=1e-3)
check("ETA accumulation, no ignition", out_noign, 2.16e-4, rel=1e-3)
check("ETA deflagration", out_defl, 2.16e-4, rel=1e-3)
check("ETA sum = f_IE", out_safe + out_noign + out_defl, 0.08, rel=1e-9)

# ---------------------------------------------------------------------------
section("05 LOPA helper numbers")
check("1e-5/h x 8760 h (BPCS floor)", 1e-5 * 8760, 0.0876)
check("RR716 alarm+operator 1-(0.9*0.9)", 1 - 0.9 * 0.9, 0.19)
lam_float = 19.3e-6 * 8760
check("RR716 float switch 19.3e-6/h -> /yr", lam_float, 0.169, rel=2e-3)
check("RR716 float switch PFD, annual test (lambda*T/2)", lam_float / 2, 0.0845, rel=2e-3)

section("05 LOPA worked example (Przyklad ilustracyjny): biogas gas holder overpressure")
IEF = 0.1        # /yr, BPCS loop failure (generic)
PFD_relief = 0.01
PFD_flare_BPCS = 1.0  # flare started by the same (failed) BPCS -> not an IPL
f_tol = 5e-6     # /yr, assumed organisational criterion (fix 27: chosen so RRF is not on a band boundary)
# Variant A: unattended plant, no operator credit
fA = IEF * PFD_flare_BPCS * PFD_relief * 1.0
check("variant A mitigated frequency without SIF", fA, 1e-3)
RRF_A = fA / f_tol
check("variant A required RRF", RRF_A, 200)
check("variant A required PFDavg", 1 / RRF_A, 5e-3)
# Variant B: staffed plant, independent alarm + operator PFD 0.1
fB = IEF * PFD_relief * 0.1
check("variant B mitigated frequency without SIF", fB, 1e-4)
RRF_B = fB / f_tol
check("variant B required RRF", RRF_B, 20)
check("variant B required PFDavg", 1 / RRF_B, 5e-2)
# Sensitivity: unjustified ignition modifier 0.1 applied to variant A
fA_mod = fA * 0.1
check("variant A with P_ign=0.1", fA_mod, 1e-4)
check("variant A with P_ign=0.1 required RRF", fA_mod / f_tol, 20)


def sil_low_demand(pfd):
    if 1e-5 <= pfd < 1e-4:
        return 4
    if 1e-4 <= pfd < 1e-3:
        return 3
    if 1e-3 <= pfd < 1e-2:
        return 2
    if 1e-2 <= pfd < 1e-1:
        return 1
    return 0


section("05 LOPA example: required SIL bands and check of the 1oo1 SIF (f_tol = 5e-6/yr)")
# Required PFDavg values must NOT sit on a band boundary (fix 27)
for label, pfd_req, sil_exp in (("variant A", 1 / RRF_A, 2), ("variant B", 1 / RRF_B, 1),
                                ("variant A with P_ign=0.1", f_tol / fA_mod, 1)):
    assert sil_low_demand(pfd_req) == sil_exp, label
    assert all(not math.isclose(pfd_req, b) for b in (1e-4, 1e-3, 1e-2, 1e-1)), label + " on boundary"
    print(f"[OK ] {label}: required PFDavg {pfd_req:g} -> SIL {sil_exp} band, not on a boundary")
# Check of variant A: 1oo1, lambda_DU = 2e-6/h
lam_ex = 2e-6
pfd_1y = lam_ex * 8760 / 2
pfd_6m = lam_ex * 4380 / 2
check("variant A SIF PFDavg, annual test", pfd_1y, 8.76e-3)
check("variant A f with annual-test SIF", fA * pfd_1y, 8.76e-6, rel=1e-3)
assert sil_low_demand(pfd_1y) == 2          # inside the SIL 2 band ...
assert fA * pfd_1y > f_tol                  # ... but does NOT meet f_tol = 5e-6/yr
assert pfd_1y > 1 / RRF_A                   # PFDavg 8.76e-3 > required 5e-3
print("[OK ] annual test: PFDavg in SIL 2 band but f = 8.76e-6 > 5e-6 (requirement NOT met)")
check("variant A SIF PFDavg, 6-month test", pfd_6m, 4.38e-3)
check("variant A f with 6-month-test SIF", fA * pfd_6m, 4.38e-6, rel=1e-3)
assert fA * pfd_6m <= f_tol and pfd_6m <= 1 / RRF_A
print("[OK ] 6-month test: f = 4.38e-6 <= 5e-6 (requirement met)")


section("05 PFDavg 1oo1 = lambda_DU * T1 / 2")
lamDU = 2e-6
T1 = 8760.0
pfd1 = lamDU * T1 / 2
check("1oo1 PFDavg, T1 = 1 yr", pfd1, 8.76e-3)
assert sil_low_demand(pfd1) == 2
pfd_half = lamDU * (T1 / 2) / 2
check("1oo1 PFDavg, T1 = 6 months", pfd_half, 4.38e-3)
assert sil_low_demand(pfd_half) == 2
pfd_2y = lamDU * (2 * T1) / 2
check("1oo1 PFDavg, T1 = 2 yr", pfd_2y, 1.752e-2)
assert sil_low_demand(pfd_2y) == 1
check("lambda_DU*T1", lamDU * T1, 0.01752)
# adding lambda_DD = 1e-6/h with MTTR = 8 h
pfd_dd = lamDU * T1 / 2 + 1e-6 * 8
check("1oo1 with lambda_DD*MTTR", pfd_dd, 8.768e-3)

section("05 PFDavg 1oo2 = ((1-b) lDU T1)^2 / 3 + b lDU T1 / 2")
x = lamDU * T1
res = {}
for b in (0.0, 0.02, 0.05, 0.10):
    ind = ((1 - b) * x) ** 2 / 3
    ccf = b * x / 2
    res[b] = (ind, ccf, ind + ccf)
    print(f"beta={b:.2f}: ind={ind:.3e} ccf={ccf:.3e} total={ind + ccf:.3e} SIL={sil_low_demand(ind + ccf)}")
check("1oo2 beta=0", res[0.0][2], 1.02e-4, rel=5e-3)
check("1oo2 beta=0.02 ind", res[0.02][0], 9.83e-5, rel=2e-3)
check("1oo2 beta=0.02 ccf", res[0.02][1], 1.75e-4, rel=2e-3)
check("1oo2 beta=0.02 total", res[0.02][2], 2.73e-4, rel=2e-3)
check("1oo2 beta=0.05 total", res[0.05][2], 5.30e-4, rel=2e-3)
check("1oo2 beta=0.10 ind", res[0.10][0], 8.29e-5, rel=2e-3)
check("1oo2 beta=0.10 ccf", res[0.10][1], 8.76e-4, rel=2e-3)
check("1oo2 beta=0.10 total", res[0.10][2], 9.59e-4, rel=2e-3)
assert sil_low_demand(res[0.10][2]) == 3
check("1oo2 beta=0.10 CCF share %", res[0.10][1] / res[0.10][2] * 100, 91, rel=1e-2)
check("1oo2 beta=0.10 vs 1oo1 improvement factor", pfd1 / res[0.10][2], 9.1, rel=1e-2)
check("1oo2 beta=0 vs 1oo1 improvement factor", pfd1 / res[0.0][2], 86, rel=1e-2)

section("05 RRF bands")
for sil, lo, hi in ((1, 10, 100), (2, 100, 1000), (3, 1000, 10000)):
    print(f"SIL {sil}: RRF {lo}..{hi}  <-> PFD {1 / hi:g}..{1 / lo:g}")

# ---------------------------------------------------------------------------
section("Extra display checks (values shown in tables)")
check("CCF table beta=0.02 independent", beta_rows[0.02][0], 3.84e-4, rel=2e-3)
check("CCF table beta=0.05 independent", beta_rows[0.05][0], 3.61e-4, rel=2e-3)
check("CCF table beta=0.10 independent", beta_rows[0.10][0], 3.24e-4, rel=2e-3)
check("1oo2 beta=0.05 ind", res[0.05][0], 9.23e-5, rel=2e-3)
check("1oo2 beta=0.05 ccf", res[0.05][1], 4.38e-4, rel=2e-3)
check("ETA branch 'removal works'", 1 - p_rem_fail, 0.9946, rel=1e-6)
check("G2 rounded used in ETA", G2_ind, 0.0054, rel=1e-3)
check("1oo1 T1 = 2 yr shown as 1,75e-2", pfd_2y, 1.75e-2, rel=2e-3)

section("06 Quiz calculation questions")
# Q: OR gate exact with 0.01, 0.02, 0.05
check("quiz OR exact", p_or(0.01, 0.02, 0.05), 0.0783, rel=1e-3)
# Q: LOPA: IEF 0.2/yr, one IPL PFD 0.01, target 1e-5/yr
fq = 0.2 * 0.01
check("quiz LOPA frequency", fq, 2e-3)
check("quiz LOPA required RRF", fq / 1e-5, 200)
check("quiz LOPA required PFD", 1e-5 / fq, 5e-3)
assert sil_low_demand(5e-3) == 2
# Q: PFDavg 1oo1 lambda_DU = 1e-6/h, T1 = 1 yr
pq = 1e-6 * 8760 / 2
check("quiz PFDavg", pq, 4.38e-3)
assert sil_low_demand(pq) == 2

print("\n" + ("ALL CHECKS PASSED" if not FAILS else f"FAILED: {FAILS}"))
if FAILS:
    raise SystemExit(1)
