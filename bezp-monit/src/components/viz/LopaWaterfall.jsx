import React, {useState} from 'react';
import s from './viz.module.css';
import {Badge, Check, Lines, ToggleGroup, VizFrame} from './Frame';
import {auto, num, sci, silBand, sup, wrap} from './util';

const W = 800;
const H = 410;
const Y0 = 22;
const DEC = 44;
const y = (f) => Y0 + -Math.log10(f) * DEC;
const COLS = [70, 180, 290, 400, 510, 620, 730];

const PRESETS = {
  A: {flare: false, operator: false, ignition: false},
  B: {flare: false, operator: true, ignition: false},
};

/** LOPA for overpressure of the biogas holder: staircase on a log scale, gap and required SIL */
export default function LopaWaterfall({title, source, ief = 0.1}) {
  const [cfg, setCfg] = useState(PRESETS.A);
  const [ftol, setFtol] = useState(5e-6);
  const preset =
    Object.entries(PRESETS).find(([, p]) => Object.keys(p).every((k) => p[k] === cfg[k]))?.[0] ?? 'custom';
  const set = (key) => (value) => setCfg((c) => ({...c, [key]: value}));

  const layers = [
    {
      name: 'Pochodnia uruchamiana przez BPCS',
      pfd: 0.1,
      on: cfg.flare,
      wrong: true,
      why: 'nie IPL: ten sam BPCS jest przyczyną',
    },
    {
      name: 'Mechaniczne zabezpieczenie nadciśnieniowe',
      pfd: 0.01,
      on: true,
      why: 'działa bez zasilania i sterowania',
    },
    {
      name: 'Alarm i operator',
      pfd: 0.1,
      on: cfg.operator,
      why: cfg.operator ? 'niezależny czujnik, obsługa, procedura' : 'brak obsługi: nie IPL',
    },
    {name: 'Modyfikator: P(zapłon)', pfd: 0.1, on: cfg.ignition, wrong: true, why: 'bez uzasadnienia'},
  ];

  const levels = [ief];
  for (const l of layers) {
    levels.push(levels[levels.length - 1] * (l.on ? l.pfd : 1));
  }
  const f = levels[levels.length - 1];
  const rrf = f / ftol;
  const pfdReq = 1 / rrf;
  const band = silBand(pfdReq);
  const needSif = rrf > 1;
  const cheated = layers.some((l) => l.on && l.wrong);

  const ticks = [0, -1, -2, -3, -4, -5, -6, -7];

  return (
    <VizFrame
      title={title}
      source={source}
      controls={
        <>
          <ToggleGroup
            label="Wariant"
            value={preset}
            onChange={(v) => v !== 'custom' && setCfg(PRESETS[v])}
            options={[
              {value: 'A', label: 'Wariant A: bez obsługi'},
              {value: 'B', label: 'Wariant B: z operatorem'},
            ]}
          />
          <Check label="Alarm i operator jako IPL" checked={cfg.operator} onChange={set('operator')} />
          <Check label="Pułapka: pochodnia jako IPL" checked={cfg.flare} onChange={set('flare')} />
          <Check label="Pułapka: P(zapłon) = 0,1" checked={cfg.ignition} onChange={set('ignition')} />
          <ToggleGroup
            label="Kryterium f_tol"
            value={ftol}
            onChange={setFtol}
            options={[1e-5, 5e-6, 1e-6].map((v) => ({value: v, label: `f_tol ${sci(v, 1)}`}))}
          />
        </>
      }
      note="Dane umowne z W2: IEF = 0,1/rok (awaria pętli BPCS), PFD z tabeli wartości ogólnych. Oś pionowa: częstość skutku w skali logarytmicznej.">
      <svg
        className={s.svg}
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label={`LOPA: IEF ${auto(ief)} na rok, po warstwach ${sci(f, 2)} na rok, kryterium ${sci(ftol, 1)}, wymagane RRF ${num(rrf, 0)}`}>
        {ticks.map((t) => (
          <g key={t}>
            <line x1={34} x2={W} y1={y(10 ** t)} y2={y(10 ** t)} stroke="var(--viz-grid)" />
            <text x={30} y={y(10 ** t) + 4} textAnchor="end" fontSize="12" style={{fill: 'var(--viz-muted)'}}>
              10{sup(t)}
            </text>
          </g>
        ))}

        {/* tolerable frequency */}
        <line
          x1={34}
          x2={W}
          y1={y(ftol)}
          y2={y(ftol)}
          stroke="var(--viz-critical)"
          strokeWidth="2"
          strokeDasharray="7 5"
        />
        <text
          x={40}
          y={y(ftol) - 6}
          fontSize="12.5"
          fontWeight="700"
          style={{fill: 'var(--viz-critical-ink)'}}>
          kryterium f_tol = {sci(ftol, 1)}/rok
        </text>

        {/* IEF */}
        <circle cx={COLS[0]} cy={y(ief)} r="7" fill="var(--viz-s1)" />
        <text x={COLS[0]} y={y(ief) - 12} textAnchor="middle" fontSize="12.5" fontWeight="700">
          {auto(ief)}/rok
        </text>

        {layers.map((l, i) => {
          const x = COLS[i + 1];
          const from = levels[i];
          const to = levels[i + 1];
          const active = l.on;
          const bad = active && l.wrong;
          return (
            <g key={l.name}>
              <line
                x1={COLS[i] + 24}
                x2={x - 24}
                y1={y(from)}
                y2={y(from)}
                stroke="var(--viz-ink-2)"
                strokeDasharray="3 3"
              />
              {active ? (
                <>
                  <rect
                    x={x - 22}
                    y={y(from)}
                    width="44"
                    height={y(to) - y(from)}
                    rx="4"
                    fill={bad ? 'var(--viz-critical-tint)' : 'var(--viz-s1)'}
                    stroke={bad ? 'var(--viz-critical)' : 'none'}
                    strokeDasharray={bad ? '4 3' : undefined}
                  />
                  <text x={x + 28} y={(y(from) + y(to)) / 2 + 4} fontSize="12.5" fontWeight="700">
                    ÷{num(1 / l.pfd, 0)}
                  </text>
                </>
              ) : (
                <rect x={x - 22} y={y(from) - 2} width="44" height="4" rx="2" fill="var(--viz-axis)" />
              )}
              {!active && (
                <text
                  x={x}
                  y={y(from) + 18}
                  textAnchor="middle"
                  fontSize="11.5"
                  style={{fill: 'var(--viz-ink-2)'}}>
                  ×1
                </text>
              )}
              <Lines
                x={x}
                y={H - 40}
                lines={wrap(l.name, 15)}
                lh={13}
                anchor="middle"
                size={11}
                weight={600}
              />
              <text
                x={x}
                y={H - 40 + wrap(l.name, 15).length * 13 + 1}
                textAnchor="middle"
                fontSize="10.5"
                style={{fill: bad ? 'var(--viz-critical-ink)' : 'var(--viz-ink-2)'}}>
                {bad ? '✕ ' : ''}
                {active ? `PFD ${num(l.pfd, 2)}` : 'nie liczymy'}
              </text>
            </g>
          );
        })}

        {/* result */}
        <line
          x1={COLS[4] + 24}
          x2={COLS[5] - 10}
          y1={y(f)}
          y2={y(f)}
          stroke="var(--viz-ink-2)"
          strokeDasharray="3 3"
        />
        <circle cx={COLS[5]} cy={y(f)} r="7" fill="var(--viz-ink)" />
        <text x={COLS[5]} y={y(f) - 12} textAnchor="middle" fontSize="12.5" fontWeight="700">
          f = {sci(f, 2)}
        </text>
        <Lines
          x={COLS[5]}
          y={H - 40}
          lines={['Częstość', 'po warstwach']}
          lh={13}
          anchor="middle"
          size={11}
          weight={600}
        />

        {/* required SIF */}
        {needSif && (
          <g>
            <line
              x1={COLS[5] + 10}
              x2={COLS[6] - 24}
              y1={y(f)}
              y2={y(f)}
              stroke="var(--viz-ink-2)"
              strokeDasharray="3 3"
            />
            <rect
              x={COLS[6] - 22}
              y={y(f)}
              width="44"
              height={y(ftol) - y(f)}
              rx="4"
              fill="var(--viz-critical-tint)"
              stroke="var(--viz-critical)"
              strokeWidth="1.5"
              strokeDasharray="5 3"
            />
            <text
              x={COLS[6] - 28}
              y={(y(f) + y(ftol)) / 2 + 4}
              textAnchor="end"
              fontSize="12.5"
              fontWeight="700">
              RRF {num(rrf, 0)}
            </text>
          </g>
        )}
        <Lines
          x={COLS[6]}
          y={H - 40}
          lines={['Wymagana', 'SIF']}
          lh={13}
          anchor="middle"
          size={11}
          weight={600}
        />
      </svg>
      <div className={s.readout} aria-live="polite">
        <span>
          f = {auto(ief)} × … = <strong>{sci(f, 2)}/rok</strong>
        </span>
        {needSif ? (
          <>
            <span>
              RRF = f / f_tol = <strong>{num(rrf, 0)}</strong>
            </span>
            <span>
              wymagane PFDavg ≤ <strong>{sci(pfdReq, 2)}</strong>
            </span>
            <Badge kind="neutral">SIF w przedziale {band.label}</Badge>
          </>
        ) : (
          <Badge kind="good">kryterium spełnione bez SIF</Badge>
        )}
        {cheated && (
          <Badge kind="critical">wynik zaniżony: uznano warstwę, która nie spełnia kryteriów</Badge>
        )}
      </div>
      <p className={s.caption}>
        Przedział SIL to za mało: funkcja musi osiągnąć wymagane PFDavg. Np. 1oo1 z λDU = 2 × 10{sup(-6)}/h:
        test co rok daje 8,76 × 10{sup(-3)}, test co 6 miesięcy 4,38 × 10{sup(-3)}.
      </p>
    </VizFrame>
  );
}
