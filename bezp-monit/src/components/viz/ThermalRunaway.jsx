import React, {useState} from 'react';
import s from './viz.module.css';
import {Stepper, VizFrame} from './Frame';
import {scale, smoothPath, useSvgId} from './util';

// Schematic temperature course of one cell (time axis arbitrary).
// Threshold temperatures: 20 Ah NCM/LMO cell, Feng et al. 2018.
const MAIN = [
  [0, 25],
  [8, 35],
  [16, 48],
  [24, 62],
  [32, 80],
  [40, 98],
  [46, 114],
  [52, 130],
  [57, 150],
  [61, 170],
  [64, 190],
  [67, 215],
  [70, 250],
  [72, 320],
  [73.5, 450],
  [74.5, 600],
  [75.5, 760],
  [76.5, 845],
  [78, 860],
  [81, 820],
  [86, 740],
  [92, 670],
  [100, 610],
];
const NEIGHBOUR = [
  [70, 26],
  [74, 60],
  [78, 120],
  [81, 200],
  [83, 260],
  [84.5, 420],
  [85.5, 650],
  [86.5, 830],
  [88, 850],
  [92, 790],
  [100, 700],
];

const STEPS = [
  {t: 30, text: 'Przyczyna: przeładowanie, przegrzanie, uszkodzenie mechaniczne lub wada wewnętrzna'},
  {t: 47, text: 'ok. 80 °C: rozkład warstwy SEI, ogniwo zaczyna grzać się samo'},
  {t: 60, text: 'ok. 130 °C: topnienie separatora PE'},
  {t: 66.5, text: 'ok. 190 °C: zapadnięcie separatora ceramicznego, duże zwarcie wewnętrzne'},
  {t: 79, text: 'od ok. 250 °C: reakcje katoda–anoda, temperatura ponad 800 °C'},
  {t: 100, text: 'Odgazowanie H₂, CO, CH₄, C₂H₄, HF: pożar lub deflagracja w zamkniętej obudowie'},
  {t: 100, text: 'Propagacja: ciepło podgrzewa sąsiednie ogniwo, proces się powtarza'},
];

const MARKERS = [
  {n: 2, t: 32, T: 80, label: 'rozkład SEI'},
  {n: 3, t: 52, T: 130, label: 'topnienie separatora PE'},
  {n: 4, t: 64, T: 190, label: 'separator ceramiczny: duże zwarcie'},
  {n: 5, t: 70, T: 250, label: 'reakcje katoda–anoda'},
];

const W = 800;
const H = 400;
const P = {left: 56, right: 690, top: 20, bottom: 360};
const x = scale(0, 100, P.left, P.right);
const y = scale(0, 900, P.bottom, P.top);

/** Thermal runaway of a Li-ion cell as a temperature curve, built step by step */
export default function ThermalRunaway({title, source}) {
  const [step, setStep] = useState(STEPS.length - 1);
  const uid = useSvgId();
  const clipX = x(STEPS[Math.min(step, 5)].t);
  const main = smoothPath(MAIN.map(([t, T]) => [x(t), y(T)]));
  const neighbour = smoothPath(NEIGHBOUR.map(([t, T]) => [x(t), y(T)]));

  return (
    <VizFrame
      title={title}
      source={source}
      controls={<Stepper step={step} count={STEPS.length} onChange={setStep} />}
      note="Przebieg schematyczny: oś czasu umowna, temperatury progowe dla jednego ogniwa 20 Ah; zależą od konstrukcji, SOC i metody badania.">
      <svg
        className={s.svg}
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label="Temperatura ogniwa w czasie: progi 80, 130, 190 i 250 °C, szczyt ponad 800 °C, potem propagacja do sąsiedniego ogniwa">
        <defs>
          <linearGradient
            id={`heat-${uid}`}
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1={P.bottom}
            x2="0"
            y2={P.top}>
            <stop offset="0" style={{stopColor: 'var(--viz-heat-0)'}} />
            <stop offset="0.22" style={{stopColor: 'var(--viz-heat-1)'}} />
            <stop offset="0.5" style={{stopColor: 'var(--viz-heat-2)'}} />
            <stop offset="1" style={{stopColor: 'var(--viz-heat-3)'}} />
          </linearGradient>
          <clipPath id={`clip-${uid}`}>
            <rect className={s.clipAnim} x={P.left - 20} y="0" width={clipX - P.left + 24} height={H} />
          </clipPath>
        </defs>

        {/* axes */}
        {[0, 200, 400, 600, 800].map((T) => (
          <g key={T}>
            <line x1={P.left} x2={P.right} y1={y(T)} y2={y(T)} stroke="var(--viz-grid)" />
            <text
              x={P.left - 8}
              y={y(T) + 4}
              textAnchor="end"
              fontSize="14"
              style={{fill: 'var(--viz-muted)'}}>
              {T}
            </text>
          </g>
        ))}
        <text x={P.left - 44} y={P.top + 4} fontSize="13" style={{fill: 'var(--viz-muted)'}}>
          °C
        </text>
        <line x1={P.left} x2={P.right} y1={P.bottom} y2={P.bottom} stroke="var(--viz-axis)" />
        <text x={P.right} y={P.bottom + 26} textAnchor="end" fontSize="13" style={{fill: 'var(--viz-muted)'}}>
          czas (schematycznie) →
        </text>

        {/* threshold lines */}
        {[80, 130, 190, 250].map((T, i) => (
          <g key={T} className={s.fadeIn} opacity={step >= i + 1 ? 1 : 0}>
            <line
              x1={P.left}
              x2={x(MARKERS[i].t)}
              y1={y(T)}
              y2={y(T)}
              stroke="var(--viz-ink-2)"
              strokeDasharray="4 4"
              strokeWidth="1"
            />
            <text x={P.left + 6} y={y(T) - 5} fontSize="14" className={s.halo}>
              <tspan fontWeight="700">{T} °C</tspan> · {MARKERS[i].label}
            </text>
          </g>
        ))}

        {/* neighbour cell (propagation) */}
        <g className={s.fadeIn} opacity={step >= 6 ? 1 : 0}>
          <path
            d={neighbour}
            fill="none"
            stroke={`url(#heat-${uid})`}
            strokeWidth="2.5"
            strokeDasharray="7 5"
            opacity="0.8"
          />
          <text x={x(88) + 12} y={y(880)} fontSize="14" fontWeight="600">
            sąsiednie
          </text>
          <text x={x(88) + 12} y={y(880) + 17} fontSize="14" fontWeight="600">
            ogniwo
          </text>
          <path
            d={`M${x(80)},${y(700)} Q${x(83)},${y(760)} ${x(85.2)},${y(620)}`}
            fill="none"
            stroke="var(--viz-ink-2)"
            strokeWidth="1.5"
            markerEnd={`url(#arr-${uid})`}
          />
        </g>

        {/* main curve, revealed up to the current step */}
        <g clipPath={`url(#clip-${uid})`}>
          <path d={main} fill="none" stroke={`url(#heat-${uid})`} strokeWidth="3.5" strokeLinecap="round" />
        </g>

        {/* numbered markers on the curve */}
        <g>
          <g className={s.fadeIn} opacity={step >= 0 ? 1 : 0}>
            <circle
              cx={x(14)}
              cy={y(44)}
              r="11"
              fill="var(--viz-surface)"
              stroke="var(--viz-ink)"
              strokeWidth="1.5"
            />
            <text x={x(14)} y={y(44) + 4.5} textAnchor="middle" fontSize="12" fontWeight="700">
              1
            </text>
          </g>
          {MARKERS.map((m, i) => (
            <g key={m.n} className={s.fadeIn} opacity={step >= i + 1 ? 1 : 0}>
              <circle
                cx={x(m.t)}
                cy={y(m.T)}
                r="11"
                fill="var(--viz-surface)"
                stroke="var(--viz-ink)"
                strokeWidth="1.5"
              />
              <text x={x(m.t)} y={y(m.T) + 4.5} textAnchor="middle" fontSize="12" fontWeight="700">
                {m.n}
              </text>
            </g>
          ))}
          <g className={s.fadeIn} opacity={step >= 4 ? 1 : 0}>
            <text
              x={x(78) - 16}
              y={y(868)}
              textAnchor="end"
              fontSize="15"
              fontWeight="700"
              className={s.halo}>
              ponad 800 °C
            </text>
          </g>
          <g className={s.fadeIn} opacity={step >= 5 ? 1 : 0}>
            {[
              [73, 560, 9],
              [70.5, 610, 7],
              [71.5, 660, 6],
              [69, 650, 5],
            ].map(([t, T, r]) => (
              <circle key={`${t}-${T}`} cx={x(t)} cy={y(T)} r={r} fill="var(--viz-muted)" opacity="0.45" />
            ))}
            <circle
              cx={x(66.5)}
              cy={y(600)}
              r="11"
              fill="var(--viz-surface)"
              stroke="var(--viz-ink)"
              strokeWidth="1.5"
            />
            <text x={x(66.5)} y={y(600) + 4.5} textAnchor="middle" fontSize="12" fontWeight="700">
              6
            </text>
            <text x={x(64)} y={y(600) + 5} textAnchor="end" fontSize="14" fontWeight="600" className={s.halo}>
              gazy: H₂, CO, CH₄, C₂H₄, HF
            </text>
          </g>
          <g className={s.fadeIn} opacity={step >= 6 ? 1 : 0}>
            <circle
              cx={x(84.5) + 18}
              cy={y(420)}
              r="11"
              fill="var(--viz-surface)"
              stroke="var(--viz-ink)"
              strokeWidth="1.5"
            />
            <text x={x(84.5) + 18} y={y(420) + 4.5} textAnchor="middle" fontSize="12" fontWeight="700">
              7
            </text>
          </g>
        </g>
        <defs>
          <marker
            id={`arr-${uid}`}
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto">
            <path d="M0,0 L10,5 L0,10 z" fill="var(--viz-ink-2)" />
          </marker>
        </defs>
      </svg>
      <div className={s.stepCaption} aria-live="polite">
        {step + 1}. {STEPS[step].text}
      </div>
    </VizFrame>
  );
}
