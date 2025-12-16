---
title: "Klucz odpowiedzi — Zadanie 3: Monitoring biogazowni"
section: "E-klucze"
version: "1.1"
---

# Klucz — Zadanie 3: Monitoring biogazowni (12 pkt)

## Dane (CSV)
- Plik: `/cwiczenia/dane/zad03_biogazownia-mala.csv`, interwał 1h, 62 wiersze (2025-05-01 do 2025-05-03 11:00).
- Kolumny: `czas, temp_reaktora[C], pH, redox[mV], cisnienie[bar], przeplyw_biogazu[l/min], CH4[%], CO2[%], H2S[ppm], alarm, przyczyna, severity, status_reaktora`.
- Progi dydaktyczne: `H2S_warn = 30 ppm`, `H2S_alarm = 100 ppm`; `pH_warn = 6.8`; `temp_reaktora_warn = 34°C`.

### Podsumowanie dobowych zakresów (przykładowe)
- **Dzień 1 (2025-05-01)**: H₂S **22–40 ppm** (avg ~32), CH₄ 60–62%, CO₂ 36–38%, T 35.6–36.2°C, pH 7.02–7.10. Brak alarmów.
- **Dzień 2 (2025-05-02)**: H₂S **45–95 ppm** (avg ~73), CH₄ 59–61%, CO₂ 38–40%, T 34.6–35.6°C, pH 6.86–7.00. Brak alarmów, H₂S rośnie z każdą godziną.
- **Dzień 3 (2025-05-03 00:00–11:00)**: H₂S **105–145 ppm** (ALARM), CH₄ 52–58%, CO₂ 39–41%, T 32.6–34.3°C, pH 6.58–6.80. `alarm=TAK`, `przyczyna=H2S_WYSOKIE`, `severity=ALARM`, `status_reaktora=VENT`.

## Odpowiedzi P/R/W
### P (Wykresy, tabele) – 4 pkt
- Wykres `H2S[ppm](t)` z markerami `alarm=TAK` (po północy 2025-05-03).
- Wykres `CH4/CO2(t)` (druga oś Y) – spadek CH₄ i wzrost CO₂ w Dniu 3.
- Wykres `temp_reaktora(t)` – zjazd z ~35.6°C do ~32.6°C w Dniu 3.
- Tabela średnich dobowych (przykład):  
  - D1: H₂S ~32 ppm, CH₄ ~61%, CO₂ ~37%, przepływ ~32 l/min  
  - D2: H₂S ~73 ppm, CH₄ ~60%, CO₂ ~39%, przepływ ~33 l/min  
  - D3 (okno alarmów): H₂S ~128 ppm, CH₄ ~55%, CO₂ ~40%, przepływ ~28 l/min

### R (Progi, incydenty) – 4 pkt
- Progi: `H2S_warn 30`, `H2S_alarm 100`; `pH_warn 6.8`; `temp_warn 34°C`.
- Okno alarmowe: **2025-05-03 00:00–11:00** (`alarm=TAK`, `H2S_WYSOKIE`, `severity=ALARM`, `status_reaktora=VENT`), H₂S 105→145 ppm.
- Ostrzeżenia (trend): H₂S przekracza 30 ppm już 2025-05-01 04:00; strefa wysokich wartości 60–95 ppm przez cały Dzień 2. pH zbliża się do progu: 6.86 (Dzień 2), 6.58 (Dzień 3). Temp spada poniżej 34°C w Dniu 3 (pogarsza fermentację).

### W (Plan reakcji) – 4 pkt
- Natychmiast: wentylacja/otwarcie VENT, ewakuacja strefy (H₂S &gt; 100 ppm, respirator), zrzut gazu przez filtr/pochodnię.
- Krótko: korekta procesu – podnieść temperaturę do 35–37°C (grzałka/recyrkulacja), bufor pH (węglan/zasada), sprawdzić mieszanie i dozowanie siarki/biomasy.
- Utrzymanie: adsorber/filtr Fe dla H₂S, ciągły monitoring H₂S i pH, powrót do STABLE dopiero po zejściu &lt;30 ppm i stabilizacji pH/T.

## Tabela alarmów (z pliku)
| Okres | H₂S [ppm] | alarm | przyczyna | severity | status_reaktora |
|---|---|---|---|---|---|
| 2025-05-03 00:00–11:00 | 105→145 | TAK | H2S_WYSOKIE | ALARM | VENT |

## Słowniczek (skrót)
- PEL (H₂S) = 10 ppm (ekspozycja długotrwała), wartości alarmowe użyte: 30/100 ppm (warn/alarm dydaktyczny).
- Fermentacja mezofilowa: 35–40°C, pH 6.8–7.5; spadek pH i T obniża produkcję CH₄.
- Redox ujemny (ok. -360 mV) oznacza warunki beztlenowe; wzrost ku 0 mV sugeruje tlen/wadę uszczelnień.
