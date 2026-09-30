#!/usr/bin/env python3
"""Calculation checks for lecture W2 "Analiza ryzyka — HAZID, HAZOP, FMEA, FTA, LOPA i SIL" (rewrite 29.09.2026).

Every number shown on the pages of wyklad-02-analiza-ryzyka that results from arithmetic is
recomputed here and compared with the value written on the page (`on_page`). The script exits
with an error if any check fails. Started from _lecture-kit/tools/calc_template.py.

Part A: pages 01 and 02; part B: pages 03 and 04; part C: pages 05, 06 (quiz) and index.md.
The three parts were written by three writers in parallel and merged by the coordinator;
checks added after the fact-check are marked with the fix number of fixes.md.

Formula set used on page 05 (stated on the slides): simplified IEC 61508-6 formulas as presented by
Lundteigen & Rausand (NTNU, ch. 8), with lambda_DD = 0 and MRT = 0 unless stated otherwise:
  1oo1: PFDavg = lambda_DU * (T1/2 + MRT) + lambda_DD * MTTR  ~  lambda_DU * T1 / 2
  1oo2: PFDavg ~ ((1 - beta) * lambda_DU * T1)^2 / 3 + beta * lambda_DU * T1 / 2

Run: python3 calc.py
"""
import collections
import itertools
import math
import statistics
import sys

FAILS = []


def check(label, computed, on_page, rel=1e-3, abs_tol=0.0):
    """Compare a computed value with the value written on the page (relative or absolute tolerance)."""
    ok = math.isclose(computed, on_page, rel_tol=rel, abs_tol=abs_tol)
    print(f"[{'OK ' if ok else 'FAIL'}] {label}: computed={computed:.6g}  page={on_page:.6g}")
    if not ok:
        FAILS.append(label)


def check_eq(label, computed, on_page):
    """Exact comparison for categories and strings."""
    ok = computed == on_page
    print(f"[{'OK ' if ok else 'FAIL'}] {label}: computed={computed}  page={on_page}")
    if not ok:
        FAILS.append(label)


def check_true(label, condition):
    print(f"[{'OK ' if condition else 'FAIL'}] {label}")
    if not condition:
        FAILS.append(label)


truth = check_true


def section(title):
    print("\n=== " + title + " ===")



def part_a():
    """Part A (originally calc_A.py)."""

    # ---------------------------------------------------------------------------
    section("01 Kryteria tolerowalności ryzyka — HSE R2P2 (2001), pkt 136; Stanley i in. (2018)")
    # R2P2 pkt 136: >= 50 deaths in one event, frequency more than 1 in 5000 per year -> intolerable.
    # Page: "1/5000 na rok, czyli 2 × 10⁻⁴ /rok"
    check("R2P2 pkt 136: 1/5000 per year", 1 / 5000, 2e-4)
    # Stanley et al. 2018 (as verified in risk_criteria_matrix Q3 #3): the worker intolerable line
    # 10⁻³ /rok reduced by one order of magnitude for other occupational risks -> 10⁻⁴ /rok;
    # the midpoint (logarithmic) between 10⁻⁴ and the broadly acceptable 10⁻⁶ /rok is 10⁻⁵ /rok.
    check("Stanley: adjusted intolerable line 1e-3 / 10", 1e-3 / 10, 1e-4)
    check("Stanley: log-midpoint of 1e-4 and 1e-6", 10 ** ((math.log10(1e-4) + math.log10(1e-6)) / 2), 1e-5)

    # ---------------------------------------------------------------------------
    section("01 Matryca ryzyka: budowa — Przykład ilustracyjny — dane umowne (v1 5 × 5 matrix)")
    # Frequency classes F1..F5 [1/rok]: F1 < 1e-4; F2 1e-4 <= f < 1e-3; F3 1e-3 <= f < 1e-2;
    # F4 1e-2 <= f < 1e-1; F5 >= 1e-1. Consequence classes C1..C5 (people only).
    # Rule on the page: Fi + Cj >= 8 -> N; 6..7 -> T; <= 5 -> A.
    F_BOUNDS = {1: (0.0, 1e-4), 2: (1e-4, 1e-3), 3: (1e-3, 1e-2), 4: (1e-2, 1e-1), 5: (1e-1, math.inf)}


    def cell(i, j):
        s = i + j
        if s >= 8:
            return "N"
        if s >= 6:
            return "T"
        return "A"


    # Rows exactly as written in the table on the page (F5 at the top)
    on_page_rows = {
        5: ["T", "T", "N", "N", "N"],
        4: ["A", "T", "T", "N", "N"],
        3: ["A", "A", "T", "T", "N"],
        2: ["A", "A", "A", "T", "T"],
        1: ["A", "A", "A", "A", "T"],
    }
    for i in range(5, 0, -1):
        for j in range(1, 6):
            check_eq(f"cell F{i} x C{j}", cell(i, j), on_page_rows[i][j - 1])
    # count of categories shown in notes: "10 komórek A, 9 T, 6 N"
    flat = [cell(i, j) for i in range(1, 6) for j in range(1, 6)]
    check_eq("number of A cells", flat.count("A"), 10)
    check_eq("number of T cells", flat.count("T"), 9)
    check_eq("number of N cells", flat.count("N"), 6)
    # frequency bins are disjoint decades (each upper bound = 10 x lower bound for F2..F4)
    for i in (2, 3, 4):
        lo, hi = F_BOUNDS[i]
        check(f"F{i} bin spans one decade (hi/lo)", hi / lo, 10)

    # Not calibrated to R2P2: F1 x C4 (one fatality, up to 1e-4 /rok) is 'A', while R2P2 pkt 130 uses
    # 1e-6 /rok as the guideline boundary broadly acceptable/tolerable -> the F1 upper bound is 100 x higher.
    check_eq("F1 x C4 category", cell(1, 4), "A")
    check("F1 upper bound / R2P2 1e-6", F_BOUNDS[1][1] / 1e-6, 100)
    # Even the R2P2 upper limit for the public (1e-4 /rok, pkt 132) equals the F1 upper bound:
    check("F1 upper bound / R2P2 public limit 1e-4", F_BOUNDS[1][1] / 1e-4, 1)

    # ---------------------------------------------------------------------------
    section("01 Ograniczenia matrycy ryzyka — pairs from the page's own matrix")
    # Range compression: F2 x C4 and F3 x C4 (one fatality) both 'T' although the bins differ by a decade
    check_eq("F2 x C4", cell(2, 4), "T")
    check_eq("F3 x C4", cell(3, 4), "T")
    check("F3 vs F2 bins: ratio of lower bounds", F_BOUNDS[3][0] / F_BOUNDS[2][0], 10)
    # Different kind of harm treated as equivalent: F4 x C2 (uraz z absencją) and F2 x C4 (ofiara) both 'T'
    check_eq("F4 x C2", cell(4, 2), "T")
    check_eq("F2 x C4 (again)", cell(2, 4), "T")

    # ---------------------------------------------------------------------------
    section("02 Przykład HAZOP: skład biogazu — O₂ from air dosing (SVLFG TI 4: air <= 6% of biogas flow)")
    # Formula on the page: x_O2 = (0,06 × 0,2095) / (1 + 0,06); air = 20,95% obj. O₂ (textbook value);
    # upper estimate, before the bacteria consume oxygen.
    air_share = 0.06
    o2_in_air = 0.2095
    x_o2 = air_share * o2_in_air / (1 + air_share)
    check("O2 fraction in biogas + dosed air [% obj.]", 100 * x_o2, 1.2, abs_tol=0.05)

    section("02 Przykład HAZOP: skład biogazu — H₂S in raw biogas (SVLFG TI 4: 0,01–0,4% obj.)")
    # 1% obj. = 10 000 ppm
    check("0,01% obj. in ppm", 0.01 * 1e4, 100)
    check("0,4% obj. in ppm", 0.4 * 1e4, 4000)
    # TRAS 120 1.5.2.2.1 gives 100 ppm = 0,01 Vol.-% (consistency of the conversion used on the page)
    check("TRAS: 100 ppm in % obj.", 100 / 1e4, 0.01)

    # ---------------------------------------------------------------------------
    section("Minutes per page (plan.md): 01 = 15 min, 02 = 20 min")
    m01 = [2, 2.5, 2, 2, 2.5, 2, 2]
    m02 = [2.5, 2, 2.5, 2, 2, 3, 3, 3]
    check("page 01 minutes", sum(m01), 15)
    check_eq("page 01 slides", len(m01), 7)
    check("page 02 minutes", sum(m02), 20)
    check_eq("page 02 slides", len(m02), 8)



def part_b():
    """Part B (originally calc_B.py)."""

    def rpn_stats(s_scale, o_scale, d_scale):
        rpns = [s * o * d for s, o, d in itertools.product(s_scale, o_scale, d_scale)]
        return rpns, collections.Counter(rpns)


    def por(*p):
        """OR gate, exact, independent events."""
        return 1 - math.prod(1 - x for x in p)


    def competition_rank(values):
        """Rank 1 = highest; ties share the rank, the next rank is skipped (1, 2, 2, 4, 5)."""
        return [1 + sum(1 for w in values if w > v) for v in values]


    # ===========================================================================
    # PAGE 03 — FMEA i FMECA
    # ===========================================================================
    section("03 FMEA — slide 'Skale S, O, D na przykładzie turbin wiatrowych' (Tavner 2010 / Shafiee 2014 scales)")
    S_W, O_W, D_W = [1, 2, 3, 4], [1, 2, 3, 5], [1, 4, 7, 10]
    rw, cw = rpn_stats(S_W, O_W, D_W)
    check("wind scales: number of (S,O,D) combinations", len(rw), 64, rel=0)
    check("wind scales: distinct RPN values", len(cw), 39, rel=0)
    check("wind scales: maximum RPN 4 x 5 x 10", max(rw), 200, rel=0)
    check("wind scales: 4 * 5 * 10", 4 * 5 * 10, 200, rel=0)
    check("wind scales: mean RPN (page 37,8)", statistics.mean(rw), 37.8, abs_tol=0.05)
    check("wind scales: median RPN (page 22,5)", statistics.median(rw), 22.5, rel=0)

    section("03 FMEA — slide 'RPN i jego wady' (1..10 scales, own enumeration)")
    r10, c10 = rpn_stats(range(1, 11), range(1, 11), range(1, 11))
    check("1..10: combinations", len(r10), 1000, rel=0)
    check("1..10: distinct RPN values", len(c10), 120, rel=0)
    most = max(c10.values())
    check("1..10: max multiplicity of one RPN value", most, 24, rel=0)
    check_true("1..10: the values with 24 triples are exactly 60, 72, 120",
               sorted(v for v, n in c10.items() if n == most) == [60, 72, 120])
    check_true("1..10: no RPN value strictly between 900 and 1000", not [v for v in c10 if 900 < v < 1000])
    check("1..10: mean RPN (page 166,4)", statistics.mean(r10), 166.4, abs_tol=0.05)
    check("1..10: median RPN (page 105)", statistics.median(r10), 105, rel=0)
    over_100 = sum(1 for x in r10 if x > 100)
    check("1..10: combinations with RPN > 100 (page 501 z 1000)", over_100, 501, rel=0)
    check_true("1..10: RPN > 100 covers more than half of combinations", over_100 > 500)
    print("Przyklad ilustracyjny — dane umowne: two failure modes with the same RPN")
    check("H2 detector in BESS container 10 x 3 x 4", 10 * 3 * 4, 120, rel=0)
    check("PV soiling 2 x 10 x 6", 2 * 10 * 6, 120, rel=0)

    section("03 FMEA — slide 'Przyklad z OZE: FMEA turbin wiatrowych' (Shafiee & Dinmohammadi 2014, Table 7: O / S / D)")
    rows = ["wieza", "przekladnia", "lopaty", "generator", "przeksztaltnik"]
    onshore = {"wieza": (5, 3, 7), "przekladnia": (3, 4, 7), "lopaty": (5, 2, 7), "generator": (3, 3, 7),
               "przeksztaltnik": (2, 4, 7)}
    offshore = {"wieza": (5, 4, 7), "przekladnia": (5, 3, 7), "lopaty": (5, 3, 7), "generator": (5, 2, 7),
                "przeksztaltnik": (3, 4, 7)}
    page_on = {"wieza": (105, 1), "przekladnia": (84, 2), "lopaty": (70, 3), "generator": (63, 4), "przeksztaltnik": (56, 5)}
    page_off = {"wieza": (140, 1), "przekladnia": (105, 2), "lopaty": (105, 2), "generator": (70, 5),
                "przeksztaltnik": (84, 4)}
    for name, table, page in (("onshore", onshore, page_on), ("offshore", offshore, page_off)):
        rpns = [math.prod(table[r]) for r in rows]
        ranks = competition_rank(rpns)
        for r, rpn, rank in zip(rows, rpns, ranks):
            check(f"{name} {r} RPN", rpn, page[r][0], rel=0)
            check(f"{name} {r} rank (among the five rows shown)", rank, page[r][1], rel=0)
    check_true("all five rows shown have D = 7", all(t[r][2] == 7 for t in (onshore, offshore) for r in rows))
    check_true("D per sub-assembly identical onshore and offshore", all(onshore[r][2] == offshore[r][2] for r in rows))
    check_true("onshore tower first by O = 5 (not by S): tower S = 3 < gearbox S = 4",
               onshore["wieza"][0] == 5 and onshore["wieza"][1] == 3 and onshore["przekladnia"][1] == 4)
    check_true("tie: offshore gearbox = offshore blades = onshore tower = 105",
               math.prod(offshore["przekladnia"]) == math.prod(offshore["lopaty"]) == math.prod(onshore["wieza"]) == 105)

    section("03 FMEA — slide 'Ranking FMEA a dane z eksploatacji' (Carroll et al. 2016)")
    check("failures per turbine per year 6,2 + 1,1 + 0,3 + 0,7", 6.2 + 1.1 + 0.3 + 0.7, 8.3, rel=1e-9)
    check("pitch/hydraulics 1,076 / tower-foundation 0,185 (page 5,8)", 1.076 / 0.185, 5.8, abs_tol=0.05)

    section("03 FMEA — slide 'Od FMEA do utrzymania ruchu i monitoringu' (Przyklad ilustracyjny — dane umowne)")
    check("onshore gearbox RPN 3 x 4 x 7", 3 * 4 * 7, 84, rel=0)
    check("onshore gearbox with D = 1: 3 x 4 x 1", 3 * 4 * 1, 12, rel=0)

    # ===========================================================================
    # PAGE 04 — FTA, ETA i bow-tie
    # ===========================================================================
    section("04 FTA — slides 'Przyklad drzewa' and 'Kwantyfikacja' (Przyklad ilustracyjny — dane umowne)")
    A, B, C = 0.01, 0.02, 0.05          # G1 inputs, probabilities within a year
    D1 = D2 = 0.02                      # gas detectors, probability of failure on demand
    V = 0.005                           # emergency ventilation fails to start
    G3 = D1 * D2
    check("G3 AND 0,02 x 0,02 (page 4 x 10^-4)", G3, 4e-4, rel=1e-9)
    G1 = por(A, B, C)
    check("G1 OR exact 1 - 0,99*0,98*0,95 (page 0,07831)", G1, 0.07831, rel=1e-6)
    G1_rare = A + B + C
    check("G1 rare-event sum (page 0,08)", G1_rare, 0.08, rel=1e-9)
    check("rare-event overestimate for G1 [%] (page 2,2)", (G1_rare / G1 - 1) * 100, 2.2, abs_tol=0.05)
    big = por(0.1, 0.2, 0.3)
    check("OR exact 0,1/0,2/0,3 (page 0,496)", big, 0.496, rel=1e-9)
    check("OR sum 0,1+0,2+0,3 (page 0,6)", 0.1 + 0.2 + 0.3, 0.6, rel=1e-9)
    check("overestimate 0,6 vs 0,496 [%] (page 21)", (0.6 / big - 1) * 100, 21, abs_tol=0.5)
    G2 = por(G3, V)
    check("G2 = 1 - (1 - 4e-4)(1 - 0,005) (page 0,005398)", G2, 0.005398, rel=1e-6)
    PT = G1 * G2
    check("P_T exact 0,07831 x 0,005398 (page 4,23 x 10^-4)", PT, 4.23e-4, abs_tol=0.005e-4)
    mcs = {"AV": A * V, "BV": B * V, "CV": C * V, "AD1D2": A * D1 * D2, "BD1D2": B * D1 * D2, "CD1D2": C * D1 * D2}
    mcs_sum = sum(mcs.values())
    check("sum of minimal cut sets (page 4,32 x 10^-4)", mcs_sum, 4.32e-4, rel=1e-9)
    share_v = (mcs["AV"] + mcs["BV"] + mcs["CV"]) / mcs_sum
    check("share of cut sets with V in the cut-set sum [%] (page 92,6)", share_v * 100, 92.6, abs_tol=0.05)
    # notes: a second, independent fan (V -> V*V) cuts P_T "prawie trzynastokrotnie"
    PT_two_fans = G1 * por(G3, V * V)
    ratio_fans = PT / PT_two_fans
    check("P_T reduction factor with a second independent fan (notes: prawie 13)", ratio_fans, 12.7, abs_tol=0.05)
    check_true("ratio is below 13 ('prawie trzynastokrotnie')", 12.5 < ratio_fans < 13)

    section("04 CCF — slide 'Uszkodzenia spowodowane wspolna przyczyna' (Przyklad ilustracyjny — dane umowne)")
    q = 0.02
    page_beta = {  # beta: (independent part, common part, total, common share %)
        0.0: (4.0e-4, 0.0, 4.0e-4, 0),
        0.02: (3.84e-4, 4.0e-4, 7.84e-4, 51),
        0.05: (3.61e-4, 1.0e-3, 1.36e-3, 73),
        0.10: (3.24e-4, 2.0e-3, 2.32e-3, 86),
    }
    for beta, (ind_p, ccf_p, tot_p, share_p) in page_beta.items():
        ind = ((1 - beta) * q) ** 2
        ccf = beta * q
        tot = ind + ccf
        check(f"beta={beta}: independent part (3 significant digits on page)", ind, ind_p, rel=2e-3, abs_tol=1e-12)
        check(f"beta={beta}: common part", ccf, ccf_p, rel=1e-9, abs_tol=1e-12)
        check(f"beta={beta}: total G3", tot, tot_p, rel=2e-3)
        check(f"beta={beta}: common share [%]", 100 * ccf / tot, share_p, abs_tol=0.5)
    tot_010 = ((1 - 0.10) * q) ** 2 + 0.10 * q
    check("beta=0,10: factor vs independence (page 5,8)", tot_010 / G3, 5.8, abs_tol=0.05)
    PT_beta = G1 * por(tot_010, V)
    check("P_T with beta=0,10 (page 5,73 x 10^-4)", PT_beta, 5.73e-4, abs_tol=0.005e-4)
    check("P_T increase with beta=0,10 [%] (page 35)", (PT_beta / PT - 1) * 100, 35, abs_tol=0.5)
    check_true("illustrative beta values 0,02 / 0,05 / 0,10 lie in the 1-10% sensor range (NTNU)",
               all(0.01 <= b <= 0.10 for b in (0.02, 0.05, 0.10)))

    section("04 ETA — slide 'Analiza drzewa zdarzen' (Przyklad ilustracyjny — dane umowne)")
    f_ie = G1                    # 0,07831 /rok, G1 used as initiating-event frequency
    p_fail_removal = G2          # 0,005398
    p_ign = 0.5                  # assumption
    check("f_IE = G1 (page 0,07831)", f_ie, 0.07831, rel=1e-6)
    check("removal works 1 - 0,005398 (page 0,994602)", 1 - p_fail_removal, 0.994602, rel=1e-9)
    out_removed = f_ie * (1 - p_fail_removal)
    out_no_ign = f_ie * p_fail_removal * (1 - p_ign)
    out_defl = f_ie * p_fail_removal * p_ign
    check("outcome: gases removed (page 0,07789)", out_removed, 0.07789, abs_tol=0.000005)
    check("outcome: flammable atmosphere, no ignition (page 2,11 x 10^-4)", out_no_ign, 2.11e-4, abs_tol=0.005e-4)
    check("outcome: deflagration (page 2,11 x 10^-4)", out_defl, 2.11e-4, abs_tol=0.005e-4)
    check("sum of outcomes = f_IE (exact)", out_removed + out_no_ign + out_defl, f_ie, rel=1e-12)
    check("sum of the rounded page values 0,07789 + 2 x 2,11e-4 (page 0,07831)", 0.07789 + 2 * 2.11e-4, 0.07831,
          abs_tol=0.000005)
    check("notes: the two outcomes with failed removal sum to P_T (page 4,23 x 10^-4)", out_no_ign + out_defl, 4.23e-4,
          abs_tol=0.005e-4)

    # ---------------------------------------------------------------------------
    section("04 Uszkodzenia spowodowane wspólną przyczyną — notes after fact-check (fix 39)")
    check("naive gain of a second identical detector 1/q (q = 0,02)", 1/0.02, 50)



def part_c():
    """Part C (originally calc_C.py)."""

    HOURS_PER_YEAR = 8760


    def p_or(*ps):
        q = 1.0
        for p in ps:
            q *= (1 - p)
        return 1 - q


    def sil_low_demand(pfd):
        """SIL band for low-demand mode (IEC 61508-1:2010 Table 2 via King 2014): [1e-(n+1), 1e-n)."""
        if 1e-5 <= pfd < 1e-4:
            return 4
        if 1e-4 <= pfd < 1e-3:
            return 3
        if 1e-3 <= pfd < 1e-2:
            return 2
        if 1e-2 <= pfd < 1e-1:
            return 1
        return 0


    def on_boundary(pfd):
        return any(math.isclose(pfd, b, rel_tol=1e-9) for b in (1e-1, 1e-2, 1e-3, 1e-4, 1e-5))


    def pfd_1oo1(l_du, t1, l_dd=0.0, mttr=0.0, mrt=0.0):
        return l_du * (t1 / 2 + mrt) + l_dd * mttr


    def pfd_1oo2(l_du, t1, beta):
        ind = ((1 - beta) * l_du * t1) ** 2 / 3
        ccf = beta * l_du * t1 / 2
        return ind, ccf, ind + ccf


    # ---------------------------------------------------------------------------
    section("05 LOPA i SIL — 'Warstwy ochrony w LOPA: typowe błędy' (HSE RR716: alarm + operator as OR gate)")
    alarm_hw, operator_hep = 0.1, 0.1
    check("alarm + operator PFD = 1 - 0,9 x 0,9", p_or(alarm_hw, operator_hep), 0.19)

    # ---------------------------------------------------------------------------
    section("05 LOPA i SIL — 'Typowe wartości IEF i PFD' (RR716 / Chambers & Pearson 2011: BPCS floor 1e-5 /h)")
    bpcs_rate_h = 1e-5
    bpcs_rate_y = bpcs_rate_h * HOURS_PER_YEAR
    check("10^-5 /h x 8760 h = 0,0876 /rok", bpcs_rate_y, 0.0876)
    check("0,0876 /rok ~ 0,1 /rok (rounded, one significant digit)", round(bpcs_rate_y, 1), 0.1)
    check("one failure in ~11 years (1/0,0876)", 1 / bpcs_rate_y, 11, abs_tol=0.5)

    # ---------------------------------------------------------------------------
    section("05 LOPA i SIL — 'Przykład LOPA: nadciśnienie w zbiorniku biogazu' (Przykład ilustracyjny — dane umowne)")
    IEF = 0.1            # /rok, BPCS loop failure (generic value, SAFEChE)
    F_TOL = 5e-6         # /rok, organisation's assumption
    PFD_FLARE_BPCS = 1.0  # not an IPL (same BPCS is the initiating cause)
    PFD_RELIEF = 0.01    # mechanical overpressure relief with liquid seal (generic value, must be justified)
    PFD_ALARM_A = 1.0    # variant A: unmanned, not an IPL
    PFD_ALARM_B = 0.1    # variant B: independent sensor, staff, procedure
    # f_tol lies between the two single-scenario targets of Stanley et al. (2018): 1e-6 and 1e-5 /rok
    truth("f_tol = 5e-6 lies between 1e-6 and 1e-5 /rok", 1e-6 < F_TOL < 1e-5)
    check("log-midpoint of 1e-4 and 1e-6 = 1e-5 (Stanley et al. 2018 method)", 10 ** ((math.log10(1e-4) + math.log10(1e-6)) / 2), 1e-5)

    # ---------------------------------------------------------------------------
    section("05 LOPA i SIL — 'Przykład LOPA: luka i wymagany SIL' (Przykład ilustracyjny — dane umowne)")
    f_A = IEF * PFD_FLARE_BPCS * PFD_RELIEF * PFD_ALARM_A
    f_B = IEF * PFD_FLARE_BPCS * PFD_RELIEF * PFD_ALARM_B
    check("variant A f = 0,1 x 1 x 0,01 x 1", f_A, 1e-3)
    check("variant B f = 0,1 x 1 x 0,01 x 0,1", f_B, 1e-4)
    RRF_A = f_A / F_TOL
    RRF_B = f_B / F_TOL
    check("variant A RRF = 1e-3 / 5e-6", RRF_A, 200)
    check("variant B RRF = 1e-4 / 5e-6", RRF_B, 20)
    pfd_req_A = 1 / RRF_A
    pfd_req_B = 1 / RRF_B
    check("variant A required PFDavg = 1/200", pfd_req_A, 5e-3)
    check("variant B required PFDavg = 1/20", pfd_req_B, 5e-2)
    truth("variant A required PFDavg 5e-3 -> SIL 2 band", sil_low_demand(pfd_req_A) == 2)
    truth("variant B required PFDavg 5e-2 -> SIL 1 band", sil_low_demand(pfd_req_B) == 1)
    truth("variant A required PFDavg NOT on a SIL band boundary (lesson 6)", not on_boundary(pfd_req_A))
    truth("variant B required PFDavg NOT on a SIL band boundary (lesson 6)", not on_boundary(pfd_req_B))

    # Check of variant A with a 1oo1 SIF, lambda_DU = 2e-6 /h
    L_DU = 2e-6
    pfd_1y = pfd_1oo1(L_DU, HOURS_PER_YEAR)
    pfd_6m = pfd_1oo1(L_DU, HOURS_PER_YEAR / 2)
    check("1oo1 PFDavg, T1 = 1 rok", pfd_1y, 8.76e-3)
    check("1oo1 PFDavg, T1 = 6 mies.", pfd_6m, 4.38e-3)
    truth("PFDavg (T1 = 1 rok) 8,76e-3 is in the SIL 2 band", sil_low_demand(pfd_1y) == 2)
    f_A_1y = f_A * pfd_1y
    f_A_6m = f_A * pfd_6m
    check("variant A with SIF tested yearly: f = 1e-3 x 8,76e-3", f_A_1y, 8.76e-6)
    check("variant A with SIF tested every 6 months: f = 1e-3 x 4,38e-3", f_A_6m, 4.38e-6)
    truth("yearly test: f = 8,76e-6 > f_tol = 5e-6 (requirement NOT met)", f_A_1y > F_TOL)
    truth("6-month test: f = 4,38e-6 <= f_tol = 5e-6 (requirement met)", f_A_6m <= F_TOL)
    # Notes: maximum lambda_DU for T1 = 1 rok and T1 = 2 lata (lopa_sil_pl Q4.2)
    l_du_max_1y = 2 * pfd_req_A / HOURS_PER_YEAR
    check("max lambda_DU for PFDavg <= 5e-3 at T1 = 8760 h", l_du_max_1y, 1.14e-6, rel=5e-3)
    check("max lambda_DU for PFDavg <= 5e-3 at T1 = 17 520 h", 2 * pfd_req_A / (2 * HOURS_PER_YEAR), 5.7e-7, rel=5e-3)

    # Sensitivity: unjustified ignition modifier 0,1 in variant A
    P_IGN = 0.1
    f_A_ign = f_A * P_IGN
    check("variant A with ignition modifier 0,1: f", f_A_ign, 1e-4)
    check("variant A with ignition modifier 0,1: RRF", f_A_ign / F_TOL, 20)
    truth("variant A with ignition modifier: required PFDavg 5e-2 -> SIL 1, not on boundary",
          sil_low_demand(F_TOL / f_A_ign) == 1 and not on_boundary(F_TOL / f_A_ign))

    # ---------------------------------------------------------------------------
    section("05 LOPA i SIL — 'SIL: tryby pracy i miary' (RRF = 1/PFDavg bands)")
    for sil, (lo_pfd, hi_pfd), (rrf_lo, rrf_hi) in [
        (1, (1e-2, 1e-1), (10, 100)),
        (2, (1e-3, 1e-2), (100, 1000)),
        (3, (1e-4, 1e-3), (1000, 10000)),
        (4, (1e-5, 1e-4), (10000, 100000)),
    ]:
        check(f"SIL {sil}: RRF upper bound = 1/PFD lower bound", 1 / lo_pfd, rrf_hi)
        check(f"SIL {sil}: RRF lower bound (exclusive) = 1/PFD upper bound (exclusive)", 1 / hi_pfd, rrf_lo)
    truth("PFDavg = 0,01 lies in the SIL 1 band (notes: boundary example)", sil_low_demand(0.01) == 1)

    # ---------------------------------------------------------------------------
    section("05 LOPA i SIL — 'PFDavg funkcji 1oo1 i interwał testów' (Przykład ilustracyjny — dane umowne)")
    t_6m, t_1y, t_2y = 4380, 8760, 17520
    check("T1 = 6 mies. = 4380 h", HOURS_PER_YEAR / 2, t_6m)
    check("T1 = 2 lata = 17 520 h", 2 * HOURS_PER_YEAR, t_2y)
    check("1oo1 T1 = 6 mies.", pfd_1oo1(L_DU, t_6m), 4.38e-3)
    check("1oo1 T1 = 1 rok", pfd_1oo1(L_DU, t_1y), 8.76e-3)
    check("1oo1 T1 = 2 lata (1,752e-2 shown as 1,75e-2)", pfd_1oo1(L_DU, t_2y), 1.75e-2, rel=2e-3)
    truth("6 mies. -> SIL 2 band", sil_low_demand(pfd_1oo1(L_DU, t_6m)) == 2)
    truth("1 rok -> SIL 2 band", sil_low_demand(pfd_1oo1(L_DU, t_1y)) == 2)
    truth("2 lata -> SIL 1 band", sil_low_demand(pfd_1oo1(L_DU, t_2y)) == 1)
    pfd_dd = pfd_1oo1(L_DU, t_1y, l_dd=1e-6, mttr=8)
    check("1oo1 with lambda_DD = 1e-6 /h and MTTR = 8 h", pfd_dd, 8.768e-3, rel=1e-4)
    # RR716 section 6.5.2: float switch
    lam_float_h = 19.3e-6
    lam_float_y = lam_float_h * HOURS_PER_YEAR
    check("float switch 19,3e-6 /h x 8760 = 0,169 /rok (RR716: 1,7e-1)", lam_float_y, 0.169, rel=2e-3)
    check("float switch per year shown as ok. 0,17", lam_float_y, 0.17, rel=1e-2)
    check("float switch PFD, annual test: 0,17/2 = 0,085", 0.17 / 2, 0.085)
    check("float switch PFD, annual test from 0,169: 0,0845 ~ 0,085", lam_float_y / 2, 0.085, rel=1e-2)

    # ---------------------------------------------------------------------------
    section("05 LOPA i SIL — 'Redundancja 1oo2 i współczynnik β' (Przykład ilustracyjny — dane umowne)")
    res = {b: pfd_1oo2(L_DU, t_1y, b) for b in (0.0, 0.02, 0.05, 0.10)}
    for b, (ind, ccf, tot) in res.items():
        print(f"   beta={b:.2f}: independent={ind:.4e}  common={ccf:.4e}  total={tot:.4e}  SIL band={sil_low_demand(tot)}")
    check("beta=0    independent", res[0.0][0], 1.02e-4, rel=5e-3)
    check("beta=0    total", res[0.0][2], 1.02e-4, rel=5e-3)
    check("beta=0,02 independent", res[0.02][0], 9.83e-5, rel=2e-3)
    check("beta=0,02 common", res[0.02][1], 1.75e-4, rel=2e-3)
    check("beta=0,02 total", res[0.02][2], 2.73e-4, rel=2e-3)
    check("beta=0,05 independent", res[0.05][0], 9.23e-5, rel=2e-3)
    check("beta=0,05 common", res[0.05][1], 4.38e-4, rel=2e-3)
    check("beta=0,05 total", res[0.05][2], 5.30e-4, rel=2e-3)
    check("beta=0,10 independent", res[0.10][0], 8.29e-5, rel=2e-3)
    check("beta=0,10 common", res[0.10][1], 8.76e-4, rel=2e-3)
    check("beta=0,10 total", res[0.10][2], 9.59e-4, rel=2e-3)
    check("improvement 1oo1/1oo2 at beta=0 (ok. 86 razy)", pfd_1y / res[0.0][2], 86, abs_tol=0.5)
    check("improvement 1oo1/1oo2 at beta=0,10 (ok. 9 razy)", pfd_1y / res[0.10][2], 9, abs_tol=0.5)
    check("common-cause share at beta=0,10 [%]", 100 * res[0.10][1] / res[0.10][2], 91, abs_tol=0.5)
    truth("beta=0,10 total 9,59e-4 lies in the SIL 3 band (just below 1e-3)", sil_low_demand(res[0.10][2]) == 3)
    truth("illustrative beta values 0,02-0,10 lie in the 1-10% range for sensors/final elements (IEC 61508-6 via NTNU)",
          all(0.01 <= b <= 0.10 for b in (0.02, 0.05, 0.10)))

    # ---------------------------------------------------------------------------
    section("06 Podsumowanie — quiz calculation questions")
    # Q5: RPN tie 10/3/4 vs 2/10/6
    check("Q5 RPN 10 x 3 x 4", 10 * 3 * 4, 120)
    check("Q5 RPN 2 x 10 x 6", 2 * 10 * 6, 120)
    # Q6: OR gate exact vs rare-event sum
    q6 = p_or(0.01, 0.02, 0.05)
    check("Q6 OR exact 1 - 0,99 x 0,98 x 0,95", q6, 0.07831, rel=1e-4)
    check("Q6 rare-event sum", 0.01 + 0.02 + 0.05, 0.08)
    check("Q6 rare-event overestimate [%]", 100 * (0.08 / q6 - 1), 2.2, abs_tol=0.05)
    check("Q6 AND product (distractor)", 0.01 * 0.02 * 0.05, 0.00001)
    # Q7: beta=0,10 share (reference to part 5)
    check("Q7 common-cause share at beta=0,10 [%] (same as part 5)", 100 * res[0.10][1] / res[0.10][2], 91, abs_tol=0.5)
    q_det, b_det = 0.02, 0.10
    check("Q7 part 4: pair with beta=0,10 fails 5,8 x more often than q x q", (((1 - b_det) * q_det) ** 2 + b_det * q_det) / q_det ** 2, 5.8, rel=1e-2)
    # Q8: LOPA IEF 0,2 /rok, one IPL 0,01, target 1e-5 /rok
    fq = 0.2 * 0.01
    check("Q8 f = 0,2 x 0,01", fq, 2e-3)
    check("Q8 RRF = 2e-3 / 1e-5", fq / 1e-5, 200)
    check("Q8 required PFDavg = 1/200", 1e-5 / fq, 5e-3)
    truth("Q8 required PFDavg 5e-3 -> SIL 2 band, not on boundary", sil_low_demand(1e-5 / fq) == 2 and not on_boundary(1e-5 / fq))
    # Q9: 1oo1, lambda_DU = 1e-6 /h, T1 = 8760 h
    q9 = pfd_1oo1(1e-6, 8760)
    check("Q9 PFDavg = 1e-6 x 8760 / 2", q9, 4.38e-3)
    check("Q9 distractor without /2", 1e-6 * 8760, 8.76e-3)
    truth("Q9 4,38e-3 -> SIL 2 band", sil_low_demand(q9) == 2)
    check("Q9 two-year interval doubles PFDavg", pfd_1oo1(1e-6, 17520) / q9, 2)

    # ---------------------------------------------------------------------------
    section("index.md — plan minutes and page sums")
    plan = {"01": 15, "02": 20, "03": 15, "04": 16, "05": 19, "06": 5}
    check("plan total [min]", sum(plan.values()), 90)
    slides_05 = [2, 2, 2, 2.5, 2.5, 2, 2, 2, 2]
    slides_06 = [2.5, 2.5]
    check("05 notes sum = 19 min", sum(slides_05), plan["05"])
    check("06 notes sum = 5 min", sum(slides_06), plan["06"])
    check("05 slide count", len(slides_05), 9)
    check("06 slide count", len(slides_06), 2)

    # ---------------------------------------------------------------------------
    section("05 Przykład LOPA: luka i wymagany SIL — variant B with alarm PFD 0,19 (fix 45)")
    f_b19 = 0.1 * 1 * 0.01 * 0.19
    check("variant B with 0,19: f [1/yr]", f_b19, 1.9e-4)
    check("variant B with 0,19: RRF", f_b19 / 5e-6, 38)
    truth("variant B with 0,19 still SIL 1 (10 < RRF <= 100)", 10 < f_b19 / 5e-6 <= 100)



part_a()
part_b()
part_c()

# ---------------------------------------------------------------------------
print()
if FAILS:
    print("FAILED:", ", ".join(FAILS))
    sys.exit(1)
print("ALL CHECKS PASSED")
