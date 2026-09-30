# Arithmetic checks for Lecture W1 (all displayed numbers derived from source values)
# Run: python3 /home/claude/lectures_work/w1_checks.py

def pct(a, b):
    return 100.0 * a / b

print("== 01 Skala OZE (PSE, URE, KOWR) ==")
pse_total_2025 = 77331
pse_res_2025 = 37106
pse_res_2024 = 31823
share = pct(pse_res_2025, pse_total_2025)
print(f"RES share end-2025: {share:.2f}% -> slide: ok. 48%")
assert round(share) == 48
growth = pse_res_2025 - pse_res_2024
print(f"RES growth 2025: {growth} MW -> slide: +5,3 GW")
assert round(growth / 1000, 1) == 5.3

print("== 01 PV Fraunhofer 2013 ==")
systems = 1.3e6
large_damage = 75
print(f"75 / 1.3 mln = {pct(large_damage, systems):.4f}% -> source says 0,006%")
assert round(pct(large_damage, systems), 3) == 0.006

print("== 01 PV BRE (UK) ==")
print(f"PV-caused 58/80 = {pct(58, 80):.1f}%")
print(f"DC isolators probable 26/80 = {pct(26, 80):.1f}%, prob+poss 28/80 = {pct(28, 80):.1f}% (BRE: ok. 30%)")
assert 58 + 16 + 6 == 80
assert 38 + 33 + 9 == 80

print("== 01 PV PSP Bednarczyk 2022 ==")
print(f"PV-caused 128/411 = {pct(128, 411):.1f}%")
assert round(pct(76, 128), 1) == 59.4 and round(pct(52, 128), 1) == 40.6
assert 76 + 52 == 128
causes = [28.9, 21.1, 14.1, 1.6, 34.3]
print(f"cause shares sum = {sum(causes):.1f}%")
assert abs(sum(causes) - 100.0) < 0.05

print("== 01 PSP presence counts 2020 -> 2024 ==")
print(f"808/145 = {808/145:.2f}x")

print("== 01 BESS: Feng 2018 / Shen 2023 / Larsson 2017 ==")
lfp_gas = 0.569
ncm_lo, ncm_hi = 1.814, 2.752
print(f"NCM/LFP gas ratio: {ncm_lo/lfp_gas:.2f} .. {ncm_hi/lfp_gas:.2f} -> slide: ok. 3-5 razy wiecej")
assert 3.0 < ncm_lo / lfp_gas < 3.3 and 4.7 < ncm_hi / lfp_gas < 5.0
# Illustrative: HF from a 5 kWh module at 20-200 mg/Wh
e_wh = 5000
print(f"HF for 5 kWh module: {20*e_wh/1000:.0f}-{200*e_wh/1000:.0f} g -> slide: 100-1000 g (ilustracyjnie)")
assert 20 * e_wh / 1000 == 100 and 200 * e_wh / 1000 == 1000

print("== 01 BESS: EPRI 2024 ==")
print(f"3/26 classified = {pct(3, 26):.1f}% (EPRI states 11%)")
assert int(pct(3, 26)) == 11

print("== 01 BESS: McMicken (DNV GL) ==")
assert 27 * 392 == 10584
assert 14 * 28 == 392
assert 2 * 14 == 28  # 2P14S
alarm_h, alarm_m = 16, 55
defl_h, defl_m = 20, 4
dt = (defl_h * 60 + defl_m) - (alarm_h * 60 + alarm_m)
print(f"alarm 16:55 -> deflagration 20:04 = {dt} min = {dt/60:.2f} h -> slide: ok. 3 h")
assert 180 <= dt <= 195
print(f"cell voltage drop 4.06 -> 3.82 V = {4.06-3.82:.2f} V; rack 799.9 -> 796.1 V = {799.9-796.1:.1f} V")

print("== 01 BESS: Moss Landing (WECC, EPA) ==")
print(f"1200 MWh / 300 MW = {1200/300:.0f} h")
print(f"56 000 / 100 000 modules = {pct(56000, 100000):.0f}% -> slide: ponad polowa")
# alarm 14:48, FD arrival 15:06
print(f"alarm 14:48 -> fire dept 15:06 = {(15*60+6)-(14*60+48)} min")
# 16 Jan 2025 -> 18 Sep 2026 re-ignition
from datetime import date
d = (date(2026, 9, 18) - date(2025, 1, 16)).days
print(f"16.01.2025 -> 18.09.2026 = {d} days = {d/30.44:.1f} months -> slide: ok. 20 miesiecy")
assert 19.5 < d / 30.44 < 20.5

print("== 01 Wind ==")
D, H = 150.0, 120.0
d_ice = 1.5 * (D + H)
print(f"Ice throw rule of thumb, D=150, H=120: {d_ice:.0f} m (Przyklad ilustracyjny)")
assert d_ice == 405

print("== 01 Biogas / gases ==")
print("H2S IOELV: 5 ppm = 7 mg/m3; 10 ppm = 14 mg/m3 (2009/161/EU)")
print(f"H2S IDLH 100 ppm vs STEL 10 ppm: factor {100/10:.0f}")
print(f"Casson Moreno: ~12% of 169 = {0.12*169:.0f} major accidents (approx.)")

print("== 01 Statistics slide: illustrative normalisation (dane umowne) ==")
y1_inc, y1_base = 100, 200_000
y2_inc, y2_base = 400, 1_000_000
r1 = y1_inc / y1_base * 100_000
r2 = y2_inc / y2_base * 100_000
print(f"year1: {r1:.0f} per 100k; year2: {r2:.0f} per 100k; incidents x{y2_inc/y1_inc:.0f}, rate {100*(r2-r1)/r1:+.0f}%")
assert r1 == 50 and r2 == 40

print("== 03 Seveso: illustrative raw-biogas mass ==")
rho_ch4, rho_co2 = 0.717, 1.977  # kg/m3 at 0 C, 1 atm (textbook)
rho = 0.6 * rho_ch4 + 0.4 * rho_co2
print(f"raw biogas (60% CH4 / 40% CO2) density = {rho:.3f} kg/m3")
v10t = 10000 / rho
print(f"10 t lower-tier P2 threshold = {v10t:.0f} m3 -> slide: ok. 8 200 m3")
assert 8100 < v10t < 8300
v_store = 3000
m_store = v_store * rho / 1000
print(f"3 000 m3 storage (normal conditions) = {m_store:.2f} t -> slide: ok. 3,7 t")
assert round(m_store, 1) == 3.7

print("== 03 RfG types (Continental Europe maxima) ==")
print("A: >=0.8 kW and <110 kV; B: 1 MW; C: 50 MW; D: 75 MW or >=110 kV")

print("== 03 KSC deadlines ==")
print(f"lecture date assumed ~28.09.2026 -> 3.10.2026 = {(date(2026,10,3)-date(2026,9,28)).days} days")
print(f"3.04.2026 + 12 months = 3.04.2027; + 24 months = 3.04.2028")

print("== 03 WT transitional period ==")
print("20.09.2026 + 18 months = 20.03.2028")
assert (2026 * 12 + 9 + 18) == (2028 * 12 + 3)

print("== 05 Illustrative PFD multiplication (dane umowne) ==")
pfd_bpcs = 0.1
pfd_sis = 0.01
comb = pfd_bpcs * pfd_sis
print(f"independent: {pfd_bpcs} x {pfd_sis} = {comb:.3f} -> RRF = {1/comb:.0f}")
assert abs(comb - 0.001) < 1e-12 and round(1 / comb) == 1000
print(f"BPCS credit <= 10 <=> PFD >= {1/10}")

print("== 05 Alarm benchmarks ==")
print(f"1 alarm / 10 min = {60/10:.0f} per hour = {24*60/10:.0f} per 24 h (derived)")

print("== 06 time plan ==")
times = {"01": 28, "02": 8, "03": 22, "04": 10, "05": 17, "06": 5}
print(times, "sum =", sum(times.values()))
assert sum(times.values()) == 90

print("\nALL CHECKS PASSED")
