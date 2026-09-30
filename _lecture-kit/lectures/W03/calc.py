#!/usr/bin/env python3
"""Calculation checks for W3 — runs the three writers' scripts (calc_A: pages 01–02, calc_B: 03–04, calc_C: 05–06 and quiz).
Every displayed number that results from arithmetic is asserted in one of them. Run: python3 calc.py"""
import os, subprocess, sys
here = os.path.dirname(os.path.abspath(__file__))
bad = []
for part in ("calc_A.py", "calc_B.py", "calc_C.py"):
    r = subprocess.run([sys.executable, os.path.join(here, part)], capture_output=True, text=True)
    print(r.stdout)
    if r.returncode != 0:
        bad.append(part)
if bad:
    print("FAILED in:", ", ".join(bad)); sys.exit(1)
print("ALL CHECKS PASSED (calc_A, calc_B, calc_C)")
