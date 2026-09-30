import React, {useMemo, useState} from 'react';
import s from './viz.module.css';
import {Tip, ToggleGroup, VizFrame} from './Frame';
import {num, scale, useTip} from './util';

const SCALES = {
  ten: {label: 'Skale 1–10', S: range(1, 10), O: range(1, 10), D: range(1, 10), max: 1000, step: 100},
  tavner: {
    label: 'Skale Tavner i in. (2010)',
    S: [1, 2, 3, 4],
    O: [1, 2, 3, 5],
    D: [1, 4, 7, 10],
    max: 200,
    step: 20,
  },
};

function range(a, b) {
  return Array.from({length: b - a + 1}, (_, i) => a + i);
}

function analyse({S, O, D}) {
  const map = new Map();
  const all = [];
  for (const sv of S) {
    for (const ov of O) {
      for (const dv of D) {
        const rpn = sv * ov * dv;
        all.push(rpn);
        if (!map.has(rpn)) {
          map.set(rpn, []);
        }
        map.get(rpn).push([sv, ov, dv]);
      }
    }
  }
  all.sort((a, b) => a - b);
  const n = all.length;
  const median = n % 2 ? all[(n - 1) / 2] : (all[n / 2 - 1] + all[n / 2]) / 2;
  const mean = all.reduce((a, b) => a + b, 0) / n;
  const values = [...map.entries()].sort((a, b) => a[0] - b[0]).map(([rpn, combos]) => ({rpn, combos}));
  const maxCount = Math.max(...values.map((v) => v.combos.length));
  const over100 = all.filter((v) => v > 100).length / n;
  return {values, n, median, mean, maxCount, over100};
}

const W = 800;
const H = 330;
const P = {left: 50, right: 780, top: 40, bottom: 270};

/** All S × O × D combinations: how many distinct RPN values exist and how often each occurs */
export default function RpnHistogram({title, source}) {
  const [key, setKey] = useState('ten');
  const cfg = SCALES[key];
  const a = useMemo(() => analyse(cfg), [cfg]);
  const {wrapRef, tip, show, hide} = useTip();
  const x = scale(0, cfg.max, P.left, P.right);
  const yMax = Math.ceil((a.maxCount * 1.15) / 5) * 5;
  const y = scale(0, yMax, P.bottom, P.top);
  const xTicks = range(0, cfg.max / cfg.step).map((i) => i * cfg.step);
  const yTicks = range(0, yMax / 5).map((i) => i * 5);

  const onMove = (event) => {
    const svg = event.currentTarget.ownerSVGElement;
    const pt = svg.createSVGPoint();
    pt.x = event.clientX;
    pt.y = event.clientY;
    const local = pt.matrixTransform(svg.getScreenCTM().inverse());
    const rpn = ((local.x - P.left) / (P.right - P.left)) * cfg.max;
    let best = a.values[0];
    for (const v of a.values) {
      if (Math.abs(v.rpn - rpn) < Math.abs(best.rpn - rpn)) {
        best = v;
      }
    }
    const examples = best.combos
      .slice(0, 3)
      .map(([sv, ov, dv]) => `S${sv}·O${ov}·D${dv}`)
      .join(', ');
    show(
      event,
      <>
        <strong>RPN {best.rpn}</strong>: {best.combos.length}{' '}
        {best.combos.length === 1 ? 'kombinacja' : best.combos.length < 5 ? 'kombinacje' : 'kombinacji'}
        <br />
        np. {examples}
        {best.combos.length > 3 ? '…' : ''}
      </>,
    );
  };

  return (
    <VizFrame
      title={title}
      source={source}
      controls={
        <ToggleGroup
          label="Skale ocen"
          value={key}
          onChange={setKey}
          options={Object.entries(SCALES).map(([k, v]) => ({value: k, label: v.label}))}
        />
      }
      note={`${a.n} kombinacji (S, O, D) daje tylko ${a.values.length} różnych wartości RPN. Najedź na wykres, aby zobaczyć kombinacje.`}
      table={{
        columns: ['RPN', 'Liczba kombinacji'],
        rows: a.values.map((v) => [v.rpn, v.combos.length]),
      }}>
      <div className={s.plot} ref={wrapRef}>
        <svg
          className={s.svg}
          viewBox={`0 0 ${W} ${H}`}
          role="img"
          aria-label={`Rozkład RPN: ${a.values.length} różnych wartości, najczęstsze po ${a.maxCount} kombinacji, mediana ${num(a.median, 1)}`}>
          {/* region RPN > 100 */}
          {cfg.max > 100 && (
            <g>
              <rect
                x={x(100)}
                y={P.top - 26}
                width={P.right - x(100)}
                height={P.bottom - P.top + 26}
                fill="var(--viz-s2-tint)"
                opacity="0.55"
              />
              <text x={P.right - 8} y={P.top - 8} textAnchor="end" fontSize="13" fontWeight="600">
                RPN &gt; 100: {num(a.over100 * 100, 1)}% wszystkich kombinacji
              </text>
            </g>
          )}
          {yTicks.map((t) => (
            <g key={t}>
              <line x1={P.left} x2={P.right} y1={y(t)} y2={y(t)} stroke="var(--viz-grid)" />
              <text
                x={P.left - 8}
                y={y(t) + 4}
                textAnchor="end"
                fontSize="12"
                style={{fill: 'var(--viz-muted)'}}>
                {t}
              </text>
            </g>
          ))}
          <line x1={P.left} x2={P.right} y1={P.bottom} y2={P.bottom} stroke="var(--viz-axis)" />
          {xTicks.map((t) => (
            <text
              key={t}
              x={x(t)}
              y={P.bottom + 20}
              textAnchor="middle"
              fontSize="12"
              style={{fill: 'var(--viz-muted)'}}>
              {t}
            </text>
          ))}
          <text
            x={P.right}
            y={P.bottom + 44}
            textAnchor="end"
            fontSize="13"
            style={{fill: 'var(--viz-ink-2)'}}>
            RPN = S × O × D
          </text>
          <text x={P.left} y={P.top - 26} fontSize="13" style={{fill: 'var(--viz-ink-2)'}}>
            liczba kombinacji
          </text>

          {/* median and mean */}
          {[
            {v: a.median, label: `mediana ${num(a.median, 1)}`, side: 'left'},
            {v: a.mean, label: `średnia ${num(a.mean, 1)}`, side: 'right'},
          ].map((m) => (
            <g key={m.label}>
              <line
                x1={x(m.v)}
                x2={x(m.v)}
                y1={P.top + 10}
                y2={P.bottom}
                stroke="var(--viz-ink-2)"
                strokeWidth="1.5"
              />
              <text
                x={x(m.v) + (m.side === 'left' ? -5 : 5)}
                y={P.top + 20}
                textAnchor={m.side === 'left' ? 'end' : 'start'}
                fontSize="12.5"
                fontWeight="600">
                {m.label}
              </text>
            </g>
          ))}

          {/* lollipops */}
          {a.values.map((v) => {
            const peak = v.combos.length === a.maxCount;
            return (
              <g key={v.rpn}>
                <line
                  x1={x(v.rpn)}
                  x2={x(v.rpn)}
                  y1={P.bottom}
                  y2={y(v.combos.length)}
                  stroke="var(--viz-s1)"
                  strokeWidth="1.5"
                />
                <circle
                  cx={x(v.rpn)}
                  cy={y(v.combos.length)}
                  r={peak ? 5.5 : 3}
                  fill={peak ? 'var(--viz-s2)' : 'var(--viz-s1)'}
                  stroke="var(--viz-surface)"
                  strokeWidth="1.5"
                />
              </g>
            );
          })}
          {a.values
            .filter((v) => v.combos.length === a.maxCount)
            .map((v, i) => (
              <text
                key={v.rpn}
                x={x(v.rpn) + (i === 0 ? -6 : 6)}
                y={y(v.combos.length) - 10}
                textAnchor={i === 0 ? 'end' : 'start'}
                fontSize="12.5"
                fontWeight="700">
                {v.rpn}
              </text>
            ))}
          {key === 'ten' && (
            <g>
              <text x={x(190)} y={y(24) + 4} fontSize="12.5">
                ← {a.maxCount} kombinacji, np. S10·O3·D4 i S2·O10·D6
              </text>
              <path
                d={`M${x(900) + 3},${P.bottom - 14} H${x(1000) - 3}`}
                stroke="var(--viz-ink-2)"
                strokeWidth="1.5"
              />
              <text x={(x(900) + x(1000)) / 2} y={P.bottom - 20} textAnchor="middle" fontSize="12">
                pusto
              </text>
            </g>
          )}
          <rect
            x={P.left}
            y={P.top}
            width={P.right - P.left}
            height={P.bottom - P.top}
            fill="transparent"
            onMouseMove={onMove}
            onMouseLeave={hide}
          />
        </svg>
        <Tip tip={tip} />
      </div>
      <div className={s.readout}>
        <span>
          Kombinacje: <strong>{a.n}</strong>
        </span>
        <span>
          Różne wartości RPN: <strong>{a.values.length}</strong>
        </span>
        <span>
          Najczęstsze:{' '}
          <strong>
            {a.values
              .filter((v) => v.combos.length === a.maxCount)
              .map((v) => v.rpn)
              .join(', ')}
          </strong>{' '}
          (po {a.maxCount})
        </span>
        <span>
          Maksimum: <strong>{cfg.max}</strong>
        </span>
      </div>
    </VizFrame>
  );
}
