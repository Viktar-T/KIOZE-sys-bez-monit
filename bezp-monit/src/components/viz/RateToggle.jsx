import React, {useState} from 'react';
import s from './viz.module.css';
import {ToggleGroup, VizFrame} from './Frame';
import {niceTicks, num, scale, useSvgId, useTween} from './util';

const DEFAULT = [
  {label: 'Rok 1', events: 100, exposure: 200000},
  {label: 'Rok 2', events: 400, exposure: 1000000},
];

const W = 560;
const H = 330;
const PLOT = {left: 70, right: 520, top: 30, bottom: 240};

function Bar({x, value, max, label, valueLabel}) {
  const y = scale(0, max, PLOT.bottom, PLOT.top);
  const top = y(value);
  const h = PLOT.bottom - top;
  const w = 88;
  const r = Math.min(4, h);
  const d = `M${x - w / 2},${PLOT.bottom} V${top + r} Q${x - w / 2},${top} ${x - w / 2 + r},${top} H${x + w / 2 - r} Q${x + w / 2},${top} ${x + w / 2},${top + r} V${PLOT.bottom} Z`;
  return (
    <g>
      <path d={d} fill="var(--viz-s1)" />
      <text x={x} y={top - 10} textAnchor="middle" fontSize="20" fontWeight="650">
        {valueLabel}
      </text>
      <text x={x} y={PLOT.bottom + 24} textAnchor="middle" fontSize="15" fontWeight="600">
        {label}
      </text>
    </g>
  );
}

/**
 * The same data as counts or as a rate per exposure: the trend reverses.
 * data: [{label, events, exposure}]
 */
export default function RateToggle({
  title,
  source,
  data = DEFAULT,
  per = 100000,
  perLabel = '100 tys. instalacji',
}) {
  const [mode, setMode] = useState('count');
  const uid = useSvgId();
  const counts = data.map((d) => d.events);
  const rates = data.map((d) => (d.events / d.exposure) * per);
  const target = mode === 'count' ? counts : rates;
  const ticks = niceTicks((mode === 'count' ? Math.max(...counts) : Math.max(...rates)) * 1.12, 5);
  const max = ticks[ticks.length - 1];
  const v0 = useTween(target[0]);
  const v1 = useTween(target[1]);
  const maxT = useTween(max);
  const values = [v0, v1];
  const xs = [190, 400];
  const ratio = target[1] / target[0];
  const change =
    mode === 'count' ? `×${num(ratio, 1)}` : `${ratio >= 1 ? '+' : '−'}${num(Math.abs(ratio - 1) * 100, 0)}%`;
  const up = ratio >= 1;
  const expMax = Math.max(...data.map((d) => d.exposure));

  return (
    <VizFrame
      title={title}
      source={source}
      controls={
        <ToggleGroup
          label="Miara"
          value={mode}
          onChange={setMode}
          options={[
            {value: 'count', label: 'Liczba zdarzeń'},
            {value: 'rate', label: `Zdarzenia na ${perLabel}`},
          ]}
        />
      }
      table={{
        columns: ['', 'Zdarzenia', 'Instalacje', `Na ${perLabel}`],
        rows: data.map((d, i) => [d.label, num(d.events), num(d.exposure), num(rates[i], 0)]),
      }}>
      <div className={s.split}>
        <svg
          className={s.svg}
          viewBox={`0 0 ${W} ${H}`}
          role="img"
          aria-label={
            mode === 'count'
              ? `Liczba zdarzeń: ${data.map((d) => `${d.label} ${d.events}`).join(', ')}`
              : `Zdarzenia na ${perLabel}: ${data.map((d, i) => `${d.label} ${num(rates[i], 0)}`).join(', ')}`
          }>
          {ticks.map((t) => {
            const y = scale(0, maxT, PLOT.bottom, PLOT.top)(t);
            return (
              <g key={t}>
                <line x1={PLOT.left} x2={PLOT.right} y1={y} y2={y} stroke="var(--viz-grid)" />
                <text
                  x={PLOT.left - 8}
                  y={y + 4}
                  textAnchor="end"
                  fontSize="14"
                  style={{fill: 'var(--viz-muted)'}}>
                  {num(t, 0)}
                </text>
              </g>
            );
          })}
          <line x1={PLOT.left} x2={PLOT.right} y1={PLOT.bottom} y2={PLOT.bottom} stroke="var(--viz-axis)" />
          {values.map((v, i) => (
            <Bar
              key={data[i].label}
              x={xs[i]}
              value={v}
              max={maxT}
              label={data[i].label}
              valueLabel={num(v, 0)}
            />
          ))}
          {/* change annotation */}
          <g>
            <path
              d={`M${xs[0] + 55},${up ? 120 : 90} Q295,${up ? 60 : 60} ${xs[1] - 55},${up ? 70 : 120}`}
              fill="none"
              stroke="var(--viz-ink-2)"
              strokeWidth="1.5"
              markerEnd={`url(#arr-${uid})`}
            />
            <text x="295" y="52" textAnchor="middle" fontSize="22" fontWeight="700">
              {change}
            </text>
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
          {/* exposure strip */}
          <text x={PLOT.left} y={H - 36} fontSize="14" style={{fill: 'var(--viz-ink-2)'}}>
            Mianownik (liczba instalacji):
          </text>
          {data.map((d, i) => {
            const w = (d.exposure / expMax) * 150;
            return (
              <g key={d.label}>
                <rect x={xs[i] - 90} y={H - 26} width={w} height={10} rx="3" fill="var(--viz-axis)" />
                <text x={xs[i] - 90 + w + 6} y={H - 16} fontSize="13" style={{fill: 'var(--viz-ink-2)'}}>
                  {num(d.exposure)}
                </text>
              </g>
            );
          })}
        </svg>
        <div className={s.panel} aria-live="polite">
          {mode === 'count' ? (
            <>
              <div className={s.panelTitle}>Liczba zdarzeń: {change}</div>
              Nagłówek „cztery razy więcej pożarów” jest prawdziwy, ale nic nie mówi o ryzyku jednej
              instalacji.
            </>
          ) : (
            <>
              <div className={s.panelTitle}>Wskaźnik: {change}</div>
              Instalacji przybyło pięć razy, zdarzeń cztery razy. Ryzyko na jedną instalację zmalało.
            </>
          )}
        </div>
      </div>
    </VizFrame>
  );
}
