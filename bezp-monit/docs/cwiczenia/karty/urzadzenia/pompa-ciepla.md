---
title: "Urządzenie — Pompa ciepła"
course: "Systemy bezpieczeństwa i monitorowania instalacji OZE"
version: "1.1"
section: "B-karty"
tags: ["urzadzenie","pompa-ciepla","COP"]
---

# Pompa ciepła — dokumentacja

## Mapa sygnałów i czujników
- Temp. zasilania/powrotu/zewnętrzna [°C]
- Przepływ [l/min], ciśnienie wysokie/ niskie [bar]
- Moc sprężarki [kW], moc grzewcza [kW], COP [-]
- Statusy: NORMAL/DEFROST/LIMIT/STOP, alarm (TAK/NIE)

## Zakresy i progi
- T_zewn: -12–22°C (COP spada na mrozie)
- T_zasil: 29–52°C, T_powrot: 24–46°C
- Ciśnienia: wysokie 20.0–25.5 bar (WARN > 26), niskie 2.8–4.4 bar (WARN/ALARM poniżej 1.5)
- COP: 0.9–4.2 (dydaktyczne progi: WARN 1.5, ALARM 1.0)
- Defrost: `przyczyna=ODSRZANIANIE`, status DEFROST, krótkie epizody
- Niski COP: `przyczyna=COP_NISKI`, status LIMIT/STOP przy mrozie

## BHP
- Ciśnienia i czynnik chłodniczy — PPE, praca na odłączonym zasilaniu
- Odladzanie parownika: ryzyko poślizgu, gorące powierzchnie w cyklu defrost
