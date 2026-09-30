import React from 'react';
import s from './viz.module.css';
import {Lines, VizFrame} from './Frame';
import {logScale, num, scale, useSvgId} from './util';

const W = 800;
const H = 430;
const X0 = 215;
const X1 = 785;

const CH4_ROWS = [
  {label: 'Metan: DGW–GGW (GisChem)', from: 4.4, to: 17, text: '4,4–17% obj.', strong: true},
  {label: 'Metan: ICSC 0291 (2000)', from: 5, to: 15, text: '5–15%'},
  {label: 'Biogaz 60% CH₄ (SVLFG)', from: 6, to: 22, text: 'ok. 6–22%'},
];

const H2S_MARKS = [
  {ppm: 5, lines: ['NDS 7 mg/m³ ≈ 5 ppm (8 h)', 'IOELV UE: 5 ppm'], side: 'up', anchor: 'end', dx: 8},
  {
    ppm: 10,
    lines: ['NDSCh 14 mg/m³ ≈ 10 ppm', '(15 min) · IOELV 10 ppm'],
    side: 'down',
    anchor: 'start',
    dx: -8,
  },
  {
    ppm: 100,
    lines: ['IDLH (NIOSH): 100 ppm', 'ok. 100 ppm: węch przestaje ostrzegać'],
    side: 'up',
    anchor: 'start',
    dx: -10,
  },
  {
    ppm: 5000,
    lines: ['ok. 5000 ppm: śmierć', 'w ciągu sekund (TRAS 120)'],
    side: 'down',
    anchor: 'end',
    dx: 40,
  },
];

/** Explosive range of methane and toxic thresholds of H₂S on one slide */
export default function GasScales({title, source}) {
  const uid = useSvgId();
  const xv = scale(0, 25, X0, X1);
  const xl = logScale(1, 10000, X0, X1);
  const zoomEnd = 560;
  const xDet = scale(0, 100, X0, zoomEnd);

  return (
    <VizFrame title={title} source={source}>
      <svg
        className={s.svg}
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label="Metan: zakres wybuchowości 4,4–17% obj. (starsze źródła 5–15%, biogaz 6–22%); 100% DGW = 4,4% obj. Siarkowodór: NDS 5 ppm, NDSCh 10 ppm, IDLH 100 ppm, ok. 5000 ppm śmierć w ciągu sekund.">
        <defs>
          <linearGradient id={`sev-${uid}`} gradientUnits="userSpaceOnUse" x1={X0} y1="0" x2={X1} y2="0">
            <stop offset="0" style={{stopColor: 'var(--viz-heat-l1)'}} />
            <stop offset="0.45" style={{stopColor: 'var(--viz-heat-l2)'}} />
            <stop offset="1" style={{stopColor: 'var(--viz-heat-2)'}} />
          </linearGradient>
        </defs>

        {/* ---------- methane ---------- */}
        <text x="0" y="22" fontSize="16" fontWeight="700">
          Metan w powietrzu [% obj.]
        </text>
        <text x={X1} y="22" textAnchor="end" fontSize="13" style={{fill: 'var(--viz-ink-2)'}}>
          ↑ lżejszy od powietrza (0,6): unosi się
        </text>

        {/* detector scale, zoomed 0–4,4 % */}
        <text x="0" y="74" fontSize="13" style={{fill: 'var(--viz-ink-2)'}}>
          Skala detektora
        </text>
        <line x1={X0} x2={zoomEnd} y1="70" y2="70" stroke="var(--viz-ink-2)" strokeWidth="1.5" />
        {[0, 25, 50, 75, 100].map((p) => (
          <g key={p}>
            <line x1={xDet(p)} x2={xDet(p)} y1="64" y2="76" stroke="var(--viz-ink-2)" />
            <text x={xDet(p)} y="58" textAnchor="middle" fontSize="12" fontWeight={p === 100 ? 700 : 400}>
              {p === 100 ? '100% DGW' : p}
            </text>
            <text x={xDet(p)} y="92" textAnchor="middle" fontSize="12" style={{fill: 'var(--viz-ink-2)'}}>
              {p === 100 ? '= 4,4% obj.' : num((p / 100) * 4.4, 1)}
            </text>
          </g>
        ))}
        <path
          d={`M${X0},98 L${xv(0)},110 M${zoomEnd},98 L${xv(4.4)},110`}
          stroke="var(--viz-muted)"
          strokeDasharray="3 3"
          fill="none"
        />

        {CH4_ROWS.map((r, i) => {
          const y0 = 112 + i * 26;
          const h = r.strong ? 20 : 14;
          return (
            <g key={r.label}>
              <text x="0" y={y0 + h / 2 + 4} fontSize="13" fontWeight={r.strong ? 650 : 400}>
                {r.label}
              </text>
              <rect
                x={xv(r.from)}
                y={y0}
                width={xv(r.to) - xv(r.from)}
                height={h}
                rx="4"
                fill={r.strong ? 'var(--viz-critical-tint)' : 'var(--viz-hover)'}
                stroke={r.strong ? 'var(--viz-critical)' : 'var(--viz-axis)'}
              />
              <text
                x={(xv(r.from) + xv(r.to)) / 2}
                y={y0 + h / 2 + 4}
                textAnchor="middle"
                fontSize="12"
                fontWeight="600">
                {r.text}
              </text>
            </g>
          );
        })}
        <line x1={X0} x2={X1} y1="196" y2="196" stroke="var(--viz-axis)" />
        {[0, 5, 10, 15, 20, 25].map((v) => (
          <g key={v}>
            <line x1={xv(v)} x2={xv(v)} y1="196" y2="201" stroke="var(--viz-axis)" />
            <text x={xv(v)} y="215" textAnchor="middle" fontSize="12" style={{fill: 'var(--viz-muted)'}}>
              {v}
            </text>
          </g>
        ))}

        {/* ---------- hydrogen sulphide ---------- */}
        <text x="0" y="252" fontSize="16" fontWeight="700">
          Siarkowodór [ppm, skala log.]
        </text>
        <text x={X1} y="252" textAnchor="end" fontSize="13" style={{fill: 'var(--viz-ink-2)'}}>
          ↓ cięższy od powietrza (1,19): gromadzi się nisko
        </text>
        <text x="0" y="344" fontSize="13">
          Stężenie H₂S w powietrzu
        </text>
        <rect x={X0} y="330" width={X1 - X0} height="20" rx="4" fill={`url(#sev-${uid})`} />
        {H2S_MARKS.map((m) => {
          const xm = xl(m.ppm);
          const up = m.side === 'up';
          const ly = up ? 304 : 404;
          return (
            <g key={m.ppm}>
              <line
                x1={xm}
                x2={xm}
                y1={up ? 312 : 330}
                y2={up ? 350 : 390}
                stroke="var(--viz-ink)"
                strokeWidth="1.5"
              />
              <circle cx={xm} cy="340" r="4" fill="var(--viz-ink)" />
              <Lines
                x={xm + m.dx}
                y={up ? ly - 16 : ly}
                lines={m.lines}
                lh={15}
                anchor={m.anchor}
                size={12.5}
              />
            </g>
          );
        })}
        <line x1={X0} x2={X1} y1="350" y2="350" stroke="var(--viz-axis)" />
        {[1, 1000, 10000].map((v) => (
          <text
            key={v}
            x={xl(v)}
            y="366"
            textAnchor={v === 1 ? 'start' : v === 10000 ? 'end' : 'middle'}
            fontSize="12"
            style={{fill: 'var(--viz-muted)'}}>
            {num(v)} ppm
          </text>
        ))}
      </svg>
    </VizFrame>
  );
}
