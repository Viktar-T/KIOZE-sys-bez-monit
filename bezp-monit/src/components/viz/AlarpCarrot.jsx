import React, {useState} from 'react';
import s from './viz.module.css';
import {Badge, Slider, ToggleGroup, VizFrame} from './Frame';
import {sci, sup, useTween} from './util';

const W = 800;
const H = 440;
const CX = 240;
const HALF = 200;
const Y_TOP = 30;
const Y_APEX = 410;
const AXIS_X = 470;
const LOG_TOP = -2;
const LOG_BOTTOM = -7;

const yOf = (log) => Y_TOP + ((LOG_TOP - log) / (LOG_TOP - LOG_BOTTOM)) * (Y_APEX - Y_TOP);
const halfWidth = (y) => (HALF * (Y_APEX - y)) / (Y_APEX - Y_TOP);

function band(y0, y1) {
  const a = halfWidth(y0);
  const b = halfWidth(y1);
  return [
    [CX - a, y0],
    [CX + a, y0],
    [CX + b, y1],
    [CX - b, y1],
  ]
    .map((p) => p.map((v) => v.toFixed(1)).join(','))
    .join(' ');
}

const GROUPS = {
  workers: {label: 'Pracownicy', upper: -3},
  public: {label: 'Osoby postronne', upper: -4},
};
const LOWER = -6;

/** HSE tolerability of risk ("carrot") with a slider for the scenario's individual risk */
export default function AlarpCarrot({title, source}) {
  const [group, setGroup] = useState('workers');
  const [risk, setRisk] = useState(-5);
  const upper = useTween(GROUPS[group].upper, 500);
  const yUpper = yOf(upper);
  const yLower = yOf(LOWER);
  const yRisk = yOf(risk);
  const riskValue = 10 ** risk;

  let verdict;
  if (risk >= GROUPS[group].upper) {
    verdict = {
      kind: 'critical',
      name: 'Nieakceptowalne',
      text: 'Żadna korzyść nie usprawiedliwia tego ryzyka. Trzeba je zmniejszyć niezależnie od kosztu albo zrezygnować z działalności.',
    };
  } else if (risk > LOWER) {
    verdict = {
      kind: 'warning',
      name: 'Tolerowane, jeśli ALARP',
      text: 'Zmniejszać tak długo, aż koszt kolejnego środka stanie się rażąco nieproporcjonalny do korzyści. Wysoki koszt to za mało.',
    };
  } else {
    verdict = {
      kind: 'good',
      name: 'Ogólnie akceptowalne',
      text: 'Dalsze zmniejszanie zwykle nie jest wymagane; utrzymać środki i monitorować.',
    };
  }

  const ticks = [-2, -3, -4, -5, -6, -7];
  const thresholds = [
    {log: -3, text: 'granica dla pracowników', active: group === 'workers'},
    {log: -4, text: 'granica dla osób postronnych', active: group === 'public'},
    {log: -6, text: 'granica ryzyka ogólnie akceptowalnego', active: true},
  ];

  return (
    <VizFrame
      title={title}
      source={source}
      controls={
        <>
          <ToggleGroup
            label="Kogo dotyczy ryzyko"
            value={group}
            onChange={setGroup}
            options={Object.entries(GROUPS).map(([value, g]) => ({value, label: g.label}))}
          />
          <Slider
            label="Ryzyko indywidualne scenariusza"
            min={-7}
            max={-2}
            step={0.1}
            value={risk}
            onChange={setRisk}
            format={(v) => `${sci(10 ** v, 2)}/rok`}
          />
        </>
      }>
      <svg
        className={s.svg}
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label={`Trójkąt tolerowalności ryzyka HSE. Scenariusz ${sci(riskValue, 2)} na rok: ${verdict.name}.`}>
        <polygon
          points={band(Y_TOP, yUpper)}
          fill="var(--viz-critical-tint)"
          stroke="var(--viz-critical)"
          strokeWidth="1.5"
        />
        <polygon
          points={band(yUpper, yLower)}
          fill="var(--viz-warning-tint)"
          stroke="var(--viz-warning)"
          strokeWidth="1.5"
        />
        <polygon
          points={band(yLower, Y_APEX)}
          fill="var(--viz-good-tint)"
          stroke="var(--viz-good)"
          strokeWidth="1.5"
        />

        <text x={CX} y={(Y_TOP + yUpper) / 2 - 2} textAnchor="middle" fontSize="16" fontWeight="700">
          NIEAKCEPTOWALNE
        </text>
        <text x={CX} y={(Y_TOP + yUpper) / 2 + 16} textAnchor="middle" fontSize="12.5">
          {yUpper - Y_TOP > 60 ? 'ryzyka nie usprawiedliwia żadna korzyść' : ''}
        </text>
        <text x={CX} y={yUpper + 36} textAnchor="middle" fontSize="15" fontWeight="700">
          TOLEROWANE,
        </text>
        <text x={CX} y={yUpper + 54} textAnchor="middle" fontSize="15" fontWeight="700">
          JEŚLI ALARP
        </text>
        <text x={CX} y={yUpper + 74} textAnchor="middle" fontSize="12.5">
          obniżać do granicy
        </text>
        <text x={CX} y={yUpper + 90} textAnchor="middle" fontSize="12.5">
          rażącej dysproporcji
        </text>

        {/* log axis */}
        <line x1={AXIS_X} x2={AXIS_X} y1={Y_TOP} y2={Y_APEX} stroke="var(--viz-axis)" />
        {ticks.map((t) => (
          <g key={t}>
            <line x1={AXIS_X - 4} x2={AXIS_X + 4} y1={yOf(t)} y2={yOf(t)} stroke="var(--viz-axis)" />
            <text x={AXIS_X + 8} y={yOf(t) + 4} fontSize="12.5" style={{fill: 'var(--viz-muted)'}}>
              10{sup(t)}
            </text>
          </g>
        ))}
        <text x={AXIS_X + 8} y={Y_APEX + 22} fontSize="12" style={{fill: 'var(--viz-muted)'}}>
          ryzyko śmierci / rok
        </text>

        {thresholds.map((th) => (
          <g key={th.log} opacity={th.active ? 1 : 0.45}>
            <line
              x1={CX + halfWidth(yOf(th.log))}
              x2={AXIS_X}
              y1={yOf(th.log)}
              y2={yOf(th.log)}
              stroke="var(--viz-ink-2)"
              strokeDasharray="4 4"
            />
            <text x={AXIS_X + 48} y={yOf(th.log) + 4} fontSize="13.5" fontWeight={th.active ? 700 : 400}>
              {th.text}
            </text>
          </g>
        ))}
        <text x={AXIS_X + 48} y={(yLower + Y_APEX) / 2 + 8} fontSize="14" fontWeight="700">
          OGÓLNIE AKCEPTOWALNE
        </text>

        {/* scenario marker */}
        <line
          x1={CX - halfWidth(yRisk) - 14}
          x2={AXIS_X - 12}
          y1={yRisk}
          y2={yRisk}
          stroke="var(--viz-ink)"
          strokeWidth="2.5"
        />
        <path d={`M${AXIS_X},${yRisk} l-12,-7 v14 z`} fill="var(--viz-ink)" />
        <circle cx={CX - halfWidth(yRisk) - 14} cy={yRisk} r="5" fill="var(--viz-ink)" />
      </svg>
      <div className={s.readout} aria-live="polite">
        <Badge kind={verdict.kind}>{verdict.name}</Badge>
        <span>
          Scenariusz <strong>{sci(riskValue, 2)}/rok</strong> ({GROUPS[group].label.toLowerCase()}).{' '}
          {verdict.text}
        </span>
      </div>
    </VizFrame>
  );
}
