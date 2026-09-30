import React, {useState} from 'react';
import s from './viz.module.css';
import {Slider, VizFrame} from './Frame';
import {niceTicks, num, scale, sci, sup} from './util';

const W = 800;
const X0 = 120;
const X1 = 640;
const ROW = 42;
const TOP = 34;

function pfd1oo2(beta, lt) {
  const independent = ((1 - beta) * lt) ** 2 / 3;
  const common = (beta * lt) / 2;
  return {independent, common, total: independent + common};
}

/** 1oo2 PFDavg split into independent and common-cause parts for several β */
export default function BetaBars({title, source, lambda = 2e-6, hours = 8760}) {
  const [beta, setBeta] = useState(0.1);
  const lt = lambda * hours;
  const pfd1oo1 = lt / 2;
  const presets = [0, 0.02, 0.05, 0.1];
  const rows = presets.map((b) => ({beta: b, ...pfd1oo2(b, lt), mine: Math.abs(b - beta) < 1e-9}));
  if (!presets.some((b) => Math.abs(b - beta) < 1e-9)) {
    rows.push({beta, ...pfd1oo2(beta, lt), mine: true});
    rows.sort((a, b) => a.beta - b.beta);
  }
  const H = TOP + rows.length * ROW + 44;
  const ticks = niceTicks(Math.max(1.05e-3, Math.max(...rows.map((r) => r.total)) * 1.05), 5);
  const xMax = ticks[ticks.length - 1];
  const x = scale(0, xMax, X0, X1);
  const mine = pfd1oo2(beta, lt);

  return (
    <VizFrame
      title={title}
      source={source}
      controls={
        <Slider
          label="Twoje β"
          min={0}
          max={0.2}
          step={0.01}
          value={beta}
          onChange={setBeta}
          format={(v) => num(v, 2, 2)}
        />
      }
      note={`PFDavg 1oo2 ≈ ((1−β)·λDU·T₁)²/3 + β·λDU·T₁/2, λDU = ${sci(lambda, 1)}/h, T₁ = 1 rok. Dane umowne z W2.`}
      table={{
        columns: ['β', 'Część niezależna', 'Część wspólna', 'PFDavg 1oo2'],
        rows: rows.map((r) => [num(r.beta, 2, 2), sci(r.independent, 3), sci(r.common, 3), sci(r.total, 3)]),
      }}>
      <div className={s.legend}>
        <span className={s.legendItem}>
          <span className={s.swatch} style={{background: 'var(--viz-s1)'}} />
          część niezależna ((1−β)·λT)²/3
        </span>
        <span className={s.legendItem}>
          <span className={s.swatch} style={{background: 'var(--viz-s2)'}} />
          część wspólna β·λT/2
        </span>
      </div>
      <svg
        className={s.svg}
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label={`PFDavg 1oo2 dla β: ${rows.map((r) => `${num(r.beta, 2)}: ${sci(r.total, 3)}`).join('; ')}`}>
        {ticks.map((t) => (
          <g key={t}>
            <line x1={x(t)} x2={x(t)} y1={TOP - 8} y2={TOP + rows.length * ROW} stroke="var(--viz-grid)" />
            <text
              x={x(t)}
              y={TOP + rows.length * ROW + 18}
              textAnchor="middle"
              fontSize="11.5"
              style={{fill: 'var(--viz-muted)'}}>
              {t === 0 ? '0' : sci(t, 3)}
            </text>
          </g>
        ))}
        {xMax >= 1e-3 && (
          <g>
            <line
              x1={x(1e-3)}
              x2={x(1e-3)}
              y1={TOP - 16}
              y2={TOP + rows.length * ROW}
              stroke="var(--viz-ink-2)"
              strokeWidth="1.5"
              strokeDasharray="5 4"
            />
            <text x={x(1e-3)} y={TOP - 20} textAnchor="middle" fontSize="12" fontWeight="650">
              10{sup(-3)}: granica SIL 3 / SIL 2
            </text>
          </g>
        )}
        {rows.map((r, i) => {
          const yy = TOP + i * ROW + 8;
          const wInd = x(r.independent) - X0;
          const wCom = x(r.total) - x(r.independent);
          const share = r.total > 0 ? r.common / r.total : 0;
          return (
            <g key={r.beta}>
              <text x={X0 - 10} y={yy + 17} textAnchor="end" fontSize="13" fontWeight={r.mine ? 750 : 500}>
                {r.mine ? '▶ ' : ''}β = {num(r.beta, 2, 2)}
              </text>
              <rect x={X0} y={yy} width={Math.max(wInd, 0)} height="24" rx="3" fill="var(--viz-s1)" />
              {wCom > 2 && (
                <rect x={X0 + wInd + 2} y={yy} width={wCom - 2} height="24" rx="3" fill="var(--viz-s2)" />
              )}
              <text x={x(r.total) + 8} y={yy + 17} fontSize="12.5" fontWeight="650">
                {sci(r.total, 3)}
                {r.beta > 0 ? ` (${num(share * 100, 0)}% wspólna)` : ''}
              </text>
            </g>
          );
        })}
      </svg>
      <div className={s.readout} aria-live="polite">
        <span>
          1oo1: <strong>{sci(pfd1oo1, 3)}</strong> (poza skalą)
        </span>
        <span>
          1oo2 przy β = {num(beta, 2, 2)}: <strong>{sci(mine.total, 3)}</strong>
        </span>
        <span>
          poprawa względem 1oo1: <strong>×{num(pfd1oo1 / mine.total, 0)}</strong> (bez uszkodzeń wspólnych ×
          {num(pfd1oo1 / pfd1oo2(0, lt).total, 0)})
        </span>
      </div>
    </VizFrame>
  );
}
