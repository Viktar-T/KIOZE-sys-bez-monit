#!/usr/bin/env python3
"""Calculation checks for lecture W1 (rewrite, 29.09.2026): merged from calc_A.py, calc_B.py and calc_C.py.
Every number on the pages that results from arithmetic is recomputed and compared with the value shown.
Run: python3 calc.py
"""
# ===========================================================================
# Part from calc_A.py (writer A: pages 01–02)
# ===========================================================================
#!/usr/bin/env python3
"""Calculation checks for lecture W1 (rewrite 29.09.2026), writer A: pages 01 and 02.

Every number shown on 01-zagrozenia-w-instalacjach-oze.mdx and 02-pojecia-podstawowe.mdx
that results from arithmetic is recomputed here and compared with the value written on the page.
Source values come from the research notes (VERIFIED) and verified-facts; illustrative values
are labelled on the page "Przykład ilustracyjny — dane umowne".

Run: python3 /home/claude/work/W01/calc_A.py
"""
import math
import sys
from datetime import date

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
section("01 Zagrożenia w instalacjach OZE — Skala OZE w Polsce (PSE Raport 2025 KSE, Tab. 1.1)")
pse_total_2025 = 77331      # MW, 31.12.2025
pse_res_2025 = 37106        # MW, "Elektrownie wiatrowe i inne odnawialne", 31.12.2025
pse_res_2024 = 31823        # MW, same row, 31.12.2024
check("share of 'wiatr i inne OZE' in installed capacity [%] (page: ok. 48%)",
      100 * pse_res_2025 / pse_total_2025, 48, abs_tol=0.5)
check("growth of 'wiatr i inne OZE' in 2025 [GW] (page: ok. 5,3 GW)",
      (pse_res_2025 - pse_res_2024) / 1000, 5.3, abs_tol=0.05)
# URE: 1 636 673 micro-installations -> page: "ponad 1,6 mln"
check("micro-installations > 1,6 mln (page: ponad 1,6 mln)", 1 if 1636673 > 1.6e6 else 0, 1)

# ---------------------------------------------------------------------------
section("01 — PV: co mówią dane o pożarach (Fraunhofer ISE 2013; BRE NSC 2018; Bednarczyk 2022)")
# Fraunhofer ISE 2013: 75 fires with large damage out of about 1,3 mln systems; release states 0,006%
check("Fraunhofer: 75 / 1,3 mln [%] (page: ok. 0,006%)", 100 * 75 / 1.3e6, 0.006, abs_tol=0.0005)
# BRE: 80 incidents = 58 caused by PV + 16 not caused by PV + 6 unknown
check("BRE: 58 + 16 + 6 = 80 incidents", 58 + 16 + 6, 80)
# BRE: probable root causes of the 58 PV-caused incidents: poor installation 21, faulty product 3,
# system design 6, unknown 28 -> sum 58 (page: przyczyna źródłowa nieznana w 28 z 58)
check("BRE: probable root causes 21 + 3 + 6 + 28 = 58", 21 + 3 + 6 + 28, 58)
# Bednarczyk 2022: 128 PV-caused = 76 (installation only) + 52 (spread to building)
check("Bednarczyk: 76 + 52 = 128", 76 + 52, 128)
# Bednarczyk cause shares shown on the page (28,9 / 21,1 / 14,1 / 1,6 / 34,3) sum to 100%
check("Bednarczyk: cause shares sum [%]", 28.9 + 21.1 + 14.1 + 1.6 + 34.3, 100.0, abs_tol=0.05)

# ---------------------------------------------------------------------------
section("01 — Wiatr: skąd brać wiarygodne dane (G+ via Energy Institute)")
# No displayed arithmetic: values are quoted from the releases (69,2 mln h, TRIR 3,48 / 2,93,
# lost work day injuries 95 -> 93 in the 2025 release, 99 in the 2024 release).
print("no computed values on this slide (all values quoted from the releases)")
# Wiatr: główne zagrożenia (notes): Vineyard Wind 13.07.2024 -> 29.09.2026 "ponad dwa lata później"
yrs = (date(2026, 9, 29) - date(2024, 7, 13)).days / 365.25
check("Vineyard Wind: years since blade failure > 2 (notes: ponad dwa lata)", 1 if yrs > 2 else 0, 1)

# ---------------------------------------------------------------------------
section("01 — BESS: gazy, chemia ogniw i źródła awarii — Przykład ilustracyjny — dane umowne (HF)")
hf_lo, hf_hi = 20, 200      # mg HF per Wh of nominal capacity (Larsson et al. 2017)
e_wh = 5 * 1000             # assumed module: 5 kWh
check("HF lower bound for 5 kWh [g] (page: 100 g)", hf_lo * e_wh / 1000, 100)
check("HF upper bound for 5 kWh [g] (page: 1000 g)", hf_hi * e_wh / 1000, 1000)
# Shen 2023: NCM 1,814–2,752 L/Ah vs LFP 0,569 L/Ah -> notes: LFP gives "kilka razy mniej gazu"
lfp, ncm_lo, ncm_hi = 0.569, 1.814, 2.752
check("NCM/LFP gas ratio between 3 and 5 (notes: kilka razy)",
      1 if 3 < ncm_lo / lfp and ncm_hi / lfp < 5 else 0, 1)
print(f"   ratio range {ncm_lo / lfp:.2f}–{ncm_hi / lfp:.2f}")
# EPRI 2024: 3 of 26 classified incidents attributed to cells; EPRI states 11%
check("EPRI: 3 / 26 [%] (page: 11%)", 100 * 3 / 26, 11, abs_tol=0.6)

# ---------------------------------------------------------------------------
section("01 — BESS: McMicken, Moss Landing, Czajków (DNV GL 2020; FSRI; EPA; CPUC)")
# McMicken: smoke alarm ~16:55, deflagration ~20:04 (FSRI) -> page: ok. 3 h
dt_min = (20 * 60 + 4) - (16 * 60 + 55)
check("McMicken: alarm -> deflagration [h] (page: ok. 3 h)", dt_min / 60, 3, abs_tol=0.25)
# Moss Landing: 16.01.2025 -> 18.09.2026 -> page: ok. 20 miesięcy
days = (date(2026, 9, 18) - date(2025, 1, 16)).days
check("Moss Landing: months between fire and flare-up (page: ok. 20)", days / 30.44, 20, abs_tol=0.5)

# ---------------------------------------------------------------------------
section("01 — Biogazownia: metan i siarkowodór (verified-facts: NDS Dz.U. 2026 poz. 447; GESTIS)")
M_H2S = 34.08               # g/mol
V_m = 24.45                 # L/mol at 25 °C, 1013 hPa
ppm = lambda mg_m3, M: mg_m3 * V_m / M
check("H2S NDS 7 mg/m3 -> ppm (page: ok. 5 ppm)", ppm(7, M_H2S), 5, abs_tol=0.1)
check("H2S NDSCh 14 mg/m3 -> ppm (page: ok. 10 ppm)", ppm(14, M_H2S), 10, abs_tol=0.1)
# CH4: 100% DGW = 4,4% obj. -> notes: 10% DGW = 0,44% obj.
dgw_ch4 = 4.4               # % obj. (IFA GESTIS / CHEMSAFE)
check("CH4: 10% DGW in % obj. (notes: 0,44% obj.)", 0.10 * dgw_ch4, 0.44)

# ---------------------------------------------------------------------------
section("01 — Jak czytać statystyki wypadków — Przykład ilustracyjny — dane umowne")
r1 = 100 / 200_000 * 100_000
r2 = 400 / 1_000_000 * 100_000
check("year 1 rate per 100 tys. (page: 50)", r1, 50)
check("year 2 rate per 100 tys. (page: 40)", r2, 40)
check("change of the rate [%] (page: -20%)", 100 * (r2 - r1) / r1, -20)
check("events ratio (page: czterokrotnie)", 400 / 100, 4)
# PSP presence series (Globenergia): 145 (2020) -> 808 (2024); page says "ponad pięciokrotnie"
check("808 / 145 > 5 (page: ponad pięciokrotnie)", 1 if 808 / 145 > 5 else 0, 1)
print(f"   808 / 145 = {808 / 145:.2f}")

# ---------------------------------------------------------------------------
section("02 Pojęcia podstawowe — all slides")
print("no computed values on page 02 (R2P2 numbers are left to W2)")

# ---------------------------------------------------------------------------

# ===========================================================================
# Part from calc_B.py (writer B: pages 03–04)
# ===========================================================================
#!/usr/bin/env python3
"""Calculation checks for lecture W1, writer B (pages 03 and 04), 29.09.2026.

Every number shown on 03-ramy-prawne-ue-i-polska.mdx and 04-normy.mdx that results from
arithmetic (illustrative example, dates computed from deadlines) is recomputed here and
compared with the value written on the page. Exit code 1 if any check fails.

Run: python3 /home/claude/work/W01/calc_B.py
"""
import datetime as dt
import math
import sys

# FAILS continues from the previous part


def check(label, computed, on_page, rel=1e-3, abs_tol=0.0):
    """Compare a computed value with the value written on the page (relative or absolute tolerance)."""
    ok = math.isclose(computed, on_page, rel_tol=rel, abs_tol=abs_tol)
    print(f"[{'OK ' if ok else 'FAIL'}] {label}: computed={computed:.6g}  page={on_page:.6g}")
    if not ok:
        FAILS.append(label)


def check_date(label, computed, on_page):
    ok = computed == on_page
    print(f"[{'OK ' if ok else 'FAIL'}] {label}: computed={computed:%d.%m.%Y}  page={on_page:%d.%m.%Y}")
    if not ok:
        FAILS.append(label)


def section(title):
    print("\n=== " + title + " ===")


def add_months(d, months):
    """Calendar month arithmetic (same day number; all dates used here exist in the target month)."""
    y, m = divmod(d.month - 1 + months, 12)
    return d.replace(year=d.year + y, month=m + 1)


# ---------------------------------------------------------------------------
section("03 Ramy prawne — Seveso III a biogazownie i BESS (Przykład ilustracyjny — dane umowne)")
# Assumed composition: 60% CH4, 40% CO2 by volume; textbook gas densities at 0 °C, 1013 hPa.
x_ch4, x_co2 = 0.6, 0.4
rho_ch4, rho_co2 = 0.717, 1.977          # kg/m3 (normal conditions), shown on the slide
rho_biogas = x_ch4 * rho_ch4 + x_co2 * rho_co2
check("biogas density 0,6 × 0,717 + 0,4 × 1,977 [kg/m3], page 'ok. 1,22'", rho_biogas, 1.22, abs_tol=0.005)
threshold_t = 10                          # P2 lower tier (ZZR), t
vol_threshold = threshold_t * 1000 / rho_biogas
check("10 t of biogas as volume [m3], page 'ok. 8200 m3'", vol_threshold, 8200, abs_tol=50)
# with the rounded density shown on the slide, the result stays the same to the stated precision
check("10 t / 1,22 kg/m3 [m3] (rounded density), page 'ok. 8200 m3'", threshold_t * 1000 / 1.22, 8200, abs_tol=50)
vol_tank = 3000                           # m3 (assumed)
mass_tank_t = vol_tank * rho_biogas / 1000
check("3000 m3 of biogas as mass [t], page 'ok. 3,7 t'", mass_tank_t, 3.7, abs_tol=0.05)
check("3000 m3 below the 10 t threshold (1 = yes)", 1.0 if mass_tank_t < threshold_t else 0.0, 1.0)

# ---------------------------------------------------------------------------
section("03 Ramy prawne — Cyberbezpieczeństwo i przyłączenie do sieci (KSC dates, Dz.U. 2026 poz. 252)")
eif = dt.date(2026, 4, 3)                 # entry into force (verified-facts W01)
check_date("art. 33 ust. 1: chapter-3 duties incl. SZBI within 12 months", add_months(eif, 12), dt.date(2027, 4, 3))
check_date("art. 33 ust. 2: first audit of key entities within 24 months", add_months(eif, 24), dt.date(2028, 4, 3))
check_date("art. 35: fines first possible 2 years after entry into force", add_months(eif, 2 * 12), dt.date(2028, 4, 3))
# (removed after the fact-check: the notes no longer count the days to the gov.pl deadline 3.10.2026)

# ---------------------------------------------------------------------------
section("03 Ramy prawne — Warunki techniczne i ochrona ppoż. w IX 2026 (art. 102a–102c)")
start = dt.date(2026, 9, 20)              # start of the 18-month transitional period
end = add_months(start, 18)
print(f"      18 months from 20.09.2026 -> {end:%d.%m.%Y} (the slide gives only '18 miesięcy od 20.09.2026')")
check("notes: '18 miesięcy' = 'półtora roku' [years]", 18 / 12, 1.5)

# ---------------------------------------------------------------------------
section("03 Ramy prawne — Prawo budowlane: PV i magazyny energii (notes question)")
# notes: "kontenerowy magazyn 1 MWh ... To 1000 kWh, czyli wiersz od 300 do 2000 kWh"
e_kwh = 1 * 1000
check("1 MWh in kWh", e_kwh, 1000)
check("1000 kWh falls in the band > 300 to ≤ 2000 kWh (1 = yes)", 1.0 if 300 < e_kwh <= 2000 else 0.0, 1.0)

# ---------------------------------------------------------------------------
section("04 Normy — no arithmetic on the page (editions and dates are copied, not computed)")
print("      nothing to recompute")

# ---------------------------------------------------------------------------

# ===========================================================================
# Part from calc_C.py (writer C: 05, 06, index)
# ===========================================================================
#!/usr/bin/env python3
"""Calculation checks for lecture W1 (rewrite 29.09.2026) — writer C: index.md, 05, 06.

Every number shown on these pages that results from arithmetic is recomputed here and
compared with the value written on the page. Exit code 1 if any check fails.

Run: python3 /home/claude/work/W01/calc_C.py
"""
import math
import sys

# FAILS continues from the previous part


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


def hms(s):
    h, m, sec = (int(x) for x in s.split(":"))
    return 3600 * h + 60 * m + sec


# ---------------------------------------------------------------------------
section("index.md — Plan wykładu (90 min)")
plan = {"01": 26, "02": 9, "03": 22, "04": 9, "05": 19, "06": 5}
check("sum of plan minutes", sum(plan.values()), 90)

# ---------------------------------------------------------------------------
section("05 Monitoring a warstwy ochrony — minutes per slide (Czas: ~N min)")
t05 = {
    "Monitoring a funkcja ochronna": 2.5,
    "Warstwy ochrony w modelu cebuli": 2.5,
    "Model sera szwajcarskiego": 2.0,
    "Kiedy warstwa jest warstwą ochrony": 2.5,
    "Monitoring i ochrona w technologiach OZE": 2.5,
    "Ćwiczenie: monitoring czy warstwa ochrony": 2.0,
    "McMicken 2019 warstwa po warstwie": 2.5,
    "Jak monitoring wspiera bezpieczeństwo": 2.5,
}
check("05 slide minutes sum = plan 19 min", sum(t05.values()), plan["05"])
check("05 number of slides", len(t05), 8)

section("06 Podsumowanie — minutes per slide")
t06 = {"Najważniejsze wnioski": 2.5, "Co dalej: od opisu zagrożeń do analizy ryzyka": 2.5}
check("06 slide minutes sum = plan 5 min", sum(t06.values()), plan["06"])

# ---------------------------------------------------------------------------
section("05 Kiedy warstwa jest warstwą ochrony — Przykład ilustracyjny — dane umowne")
pfd_a, pfd_b = 0.1, 0.01          # assumed PFD of two independent layers
pfd_comb = pfd_a * pfd_b
check("combined PFD 0,1 x 0,01 (page: 0,001)", pfd_comb, 0.001)
check("RRF = 1/0,001 (page: 1000)", 1 / pfd_comb, 1000)

section("05 Kiedy warstwa jest warstwą ochrony — credit limits (sourced values)")
check("BPCS risk reduction <= 10  <=>  PFD >= 0,1", 1 / 10, 0.1)
check("alarm + operator: PFD not lower than 0,1  <=>  risk reduction at most 10", 1 / 0.1, 10)

# ---------------------------------------------------------------------------
section("05 McMicken 2019 warstwa po warstwie (DNV GL 2020; FSRI 2020)")
dt = hms("16:55:20") - hms("16:54:30")
check("time from cell voltage drop to disconnection [s] (notes: 'niecała minuta')", dt, 50)
check_true("50 s is less than one minute", dt < 60)
check("cell voltage drop 4,06 -> 3,82 V [V] (not shown; consistency)", 4.06 - 3.82, 0.24, abs_tol=1e-9)
# FSRI: smoke alarm ~16:55, door opened ~20:01, deflagration ~20:04 -> "ok. 3 h"
door_h = (hms("20:01:00") - hms("16:55:00")) / 3600
check("alarm -> door opened [h] (page: ok. 3 h)", door_h, 3, abs_tol=0.25)

# ---------------------------------------------------------------------------
section("06 Najważniejsze wnioski — EPRI 2024 (3 of 26 classified events attributed to cells)")
check("3/26 [%] (page: 11%)", 100 * 3 / 26, 11, abs_tol=0.6)

section("06 Sprawdź się Q2 — BRE 2018 (as on page 01)")
check_true("58 of 80 fires caused by PV; root cause unknown in 28 of 58 (28 <= 58 <= 80)", 28 <= 58 <= 80)

section("06 Sprawdź się Q3 — PSP events with PV presence (Globenergia; page 01: 'ponad pięciokrotnie')")
ratio = 808 / 145
check_true(f"808/145 = {ratio:.2f} > 5 (distractor 'ponad pięciokrotnie')", ratio > 5)

section("06 Sprawdź się Q7 — Seveso P2 thresholds (page 03: t, regulation: Mg, 1 Mg = 1 t)")
check("P2 ZZR 10 Mg = 10 t", 10 * 1.0, 10)
check("P2 ZDR 50 Mg = 50 t", 50 * 1.0, 50)

section("06 Sprawdź się Q10 — McMicken")
check("alarm -> door opened [h] (quiz: ok. 3 h)", door_h, 3, abs_tol=0.25)

# ---------------------------------------------------------------------------

print()
if FAILS:
    print("FAILED:", ", ".join(FAILS))
    sys.exit(1)
print("ALL CHECKS PASSED")
