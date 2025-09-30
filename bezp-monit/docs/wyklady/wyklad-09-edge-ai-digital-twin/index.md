---
sidebar_position: 10
title: "W9: Edge AI i bliźniaki cyfrowe (PV–inwerter–BESS)"
---

# W9: Edge AI i bliźniaki cyfrowe (PV–inwerter–BESS)

## Przegląd i cele kształcenia

Wykład dotyczy estymacji SoC/SoH w magazynach energii, prognoz degradacji, zastosowań TinyML na brzegu (edge) oraz koncepcji prostego bliźniaka cyfrowego łańcucha PV–inwerter–BESS do testowania alarmów i scenariuszy what‑if.

Po zakończeniu wykładu student potrafi:

1. Zaimplementować podstawowe estymatory SoC/SoH (Rint/Thevenin + Coulomb counting).
2. Przygotować pipeline do prognozy degradacji (cechy, walidacja, metryki).
3. Zaprojektować i wdrożyć prosty model TinyML na edge do klasyfikacji anomalii.
4. Zbudować uproszczony bliźniak cyfrowy PV–inwerter–BESS i przeprowadzić symulacje what‑if.

## Struktura materiału

1. [Estymacja SoC/SoH: Rint, Thevenin i bilans ładunku](./01-soc-soh)
2. [Prognoza degradacji i ścieżki starzenia](./02-prognoza-degradacji)
3. [TinyML na brzegu: klasyfikacja anomalii](./03-tinyml-edge)
4. [Prosty digital twin: PV–inwerter–BESS](./04-digital-twin)
5. [Scenariusze what‑if i testy alarmów](./05-scenariusze-what-if)
6. [Podsumowanie i rekomendacje](./06-podsumowanie)

## Literatura skrócona

- Plett, G. L. (Battery Management Systems), modele Rint/Thevenin
- TinyML (Banbury et al.), biblioteki: TensorFlow Lite Micro
- pvlib, modele wydajności PV i sprawności inwerterów


