import React, {useRef} from 'react';
import clsx from 'clsx';
import s from './viz.module.css';
import {Lines, VizFrame} from './Frame';
import {useReveal, wrap} from './util';

const LEVELS = [
  {
    title: '1. Konstrukcja bezpieczna sama w sobie',
    sub: 'usunąć zagrożenie lub zmniejszyć ryzyko projektem',
    example:
      'BESS w kontenerach na zewnątrz, z odstępami, zamiast jednej hali (kierunek po Moss Landing, WECC)',
  },
  {
    title: '2. Techniczne środki ochronne',
    sub: 'osłony, urządzenia ochronne',
    example: 'detekcja łuku DC w PV; detekcja gazu z wentylacją w BESS',
  },
  {
    title: '3. Informacje dla użytkownika',
    sub: 'o ryzyku, które pozostaje',
    example: 'oznakowanie budynku z PV, instrukcja dla straży pożarnej',
  },
  {
    title: 'Środki użytkownika',
    sub: 'organizacja pracy, szkolenia, ŚOI',
    example:
      'procedura wejścia do kontenera BESS po alarmie (McMicken); środki zbiorowe przed indywidualnymi (89/391/EWG)',
    user: true,
  },
];

const W = 800;
const H = 372;
const CX = 262;
const WIDTHS = [440, 380, 320, 260, 200];
const LH = 72;
const GAP = 8;
const TOP = 26;

const FILLS = [
  ['var(--viz-r4)', 'var(--viz-r4-ink)'],
  ['var(--viz-r3)', 'var(--viz-r3-ink)'],
  ['var(--viz-r2)', 'var(--viz-r2-ink)'],
  ['var(--viz-r1)', 'var(--viz-r1-ink)'],
];

/** ISO 12100 three-step method as a funnel, with an OZE example per level */
export default function HierarchyFunnel({title, source, levels = LEVELS}) {
  const ref = useRef(null);
  const reveal = useReveal(ref);

  return (
    <VizFrame title={title} source={source}>
      <svg
        ref={ref}
        className={clsx(s.svg, reveal && s[reveal])}
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label={`Kolejność środków: ${levels.map((l) => l.title).join(', ')}`}>
        <text x="30" y="16" fontSize="13" fontWeight="600" style={{fill: 'var(--viz-ink-2)'}}>
          ↑ skuteczniej, mniej zależy od człowieka
        </text>
        {levels.map((level, i) => {
          const extra = level.user ? 16 : 0;
          const y0 = TOP + i * (LH + GAP) + extra;
          const top = WIDTHS[i] / 2;
          const bottom = WIDTHS[i + 1] / 2;
          const points = [
            [CX - top, y0],
            [CX + top, y0],
            [CX + bottom, y0 + LH],
            [CX - bottom, y0 + LH],
          ]
            .map((p) => p.join(','))
            .join(' ');
          const [fill, ink] = FILLS[i];
          const exLines = wrap(level.example, 36);
          const cy = y0 + LH / 2;
          return (
            <g key={level.title} className={s.rise} style={{transitionDelay: `${i * 140}ms`}}>
              <polygon
                points={points}
                fill={fill}
                stroke={level.user ? 'var(--viz-ink-2)' : 'none'}
                strokeDasharray={level.user ? '6 4' : undefined}
                strokeWidth="1.5"
              />
              <text
                x={CX}
                y={cy - 4}
                textAnchor="middle"
                fontSize="15.5"
                fontWeight="700"
                style={{fill: ink}}>
                {level.title}
              </text>
              <text x={CX} y={cy + 16} textAnchor="middle" fontSize="12.5" style={{fill: ink}}>
                {level.sub}
              </text>
              <line
                x1={CX + (top + bottom) / 2 + 6}
                x2={510}
                y1={cy}
                y2={cy}
                stroke="var(--viz-axis)"
                strokeDasharray="2 3"
              />
              <circle cx={510} cy={cy} r="3" fill="var(--viz-ink-2)" />
              <Lines x={520} y={cy - ((exLines.length - 1) * 16) / 2 + 4} lines={exLines} lh={16} size={13} />
            </g>
          );
        })}
        {/* designer / user split */}
        <line
          x1={20}
          x2={W - 10}
          y1={TOP + 3 * (LH + GAP) + 4}
          y2={TOP + 3 * (LH + GAP) + 4}
          stroke="var(--viz-ink-2)"
          strokeDasharray="5 4"
        />
        <text
          x={W - 10}
          y={TOP + 3 * (LH + GAP) - 2}
          textAnchor="end"
          fontSize="12"
          fontWeight="600"
          style={{fill: 'var(--viz-ink-2)'}}>
          ↑ projektant (ISO 12100) ↓ użytkownik
        </text>
      </svg>
    </VizFrame>
  );
}
