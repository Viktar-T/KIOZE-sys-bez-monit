#!/usr/bin/env python3
"""Calculation checks for lecture W<N> — template.

Copy to /home/claude/work/W<NN>/calc.py (or _lecture-kit/lectures/W<NN>/calc.py) and fill in.
Every number shown in the lecture pages that results from arithmetic is recomputed here and
compared with the value written on the slide. The script exits with an error if any check fails.

Run: python3 calc.py
Model examples: _lecture-kit/lectures/W01/calc.py and _lecture-kit/lectures/W02/calc.py.
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
section("01 <page> — <slide title> (source values: <source>)")
# Example: share of a total, as shown on a slide ("ok. 48%")
part, total = 37106, 77331
check("share of RES in installed capacity [%]", 100 * part / total, 48, abs_tol=0.5)

# ---------------------------------------------------------------------------
section("05 <page> — Przykład ilustracyjny — dane umowne")
# Example: PFDavg of a 1oo1 function, simplified formula lambda_DU * T / 2
lambda_du = 2e-6        # 1/h (assumed)
t_test = 8760           # h, annual proof test
check("PFDavg 1oo1", lambda_du * t_test / 2, 8.76e-3)

# ---------------------------------------------------------------------------
print()
if FAILS:
    print("FAILED:", ", ".join(FAILS))
    sys.exit(1)
print("ALL CHECKS PASSED")
