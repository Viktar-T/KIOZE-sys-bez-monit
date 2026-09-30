import React, {useState} from 'react';
import s from './viz.module.css';
import {Badge, Slider, ToggleGroup, VizFrame} from './Frame';
import {num, scale, sci, silBand} from './util';

const W = 800;
const H = 360;
const P = {left: 62, right: 630, top: 20, bottom: 300};
const YEARS = 4;
const HOURS_PER_YEAR = 8760;

const BANDS = [
  {sil: 'SIL 1', lo: 1e-2, hi: 1e-1},
  {sil: 'SIL 2', lo: 1e-3, hi: 1e-2},
  {sil: 'SIL 3', lo: 1e-4, hi: 1e-3},
];

/** PFD(t) of a 1oo1 function: grows between proof tests, PFDavg ≈ λDU·T₁/2 */
export default function PfdSawtooth({
  title,
  source,
  required = 5e-3,
  requiredLabel = 'wymaganie z LOPA (wariant A)',
}) {
  const [months, setMonths] = useState(12);
  const [lambda, setLambda] = useState(2e-6);
  const [coverage, setCoverage] = useState(100);

  const cpt = coverage / 100;
  const T1 = months * (HOURS_PER_YEAR / 12);
  const TM = YEARS * HOURS_PER_YEAR;
  const pfdAt = (h) => lambda * cpt * (h % T1) + lambda * (1 - cpt) * h;
  const pfdAvg = (lambda * cpt * T1) / 2 + (lambda * (1 - cpt) * TM) / 2;
  const peak = lambda * cpt * T1 + lambda * (1 - cpt) * TM;
  const yMax = Math.max(0.012, peak * 1.12, required * 1.3);
  const x = scale(0, YEARS, P.left, P.right);
  const yS = scale(0, yMax, P.bottom, P.top);
  const band = silBand(pfdAvg);
  const ok = pfdAvg <= required;

  // Sawtooth: rise over each interval, drop at each proof test
  const pts = [];
  const tests = [];
  for (let start = 0; start < TM; start += T1) {
    const end = Math.min(start + T1, TM);
    pts.push(
      `${start === 0 ? 'M' : 'L'}${x(start / HOURS_PER_YEAR).toFixed(1)},${yS(pfdAt(start)).toFixed(1)}`,
    );
    pts.push(`L${x(end / HOURS_PER_YEAR).toFixed(1)},${yS(pfdAt(end - 1e-6)).toFixed(1)}`);
    if (end < TM || end === start + T1) {
      tests.push(end);
    }
  }
  const path = pts.join(' ');
  const stepCandidates = [0.001, 0.002, 0.0025, 0.005, 0.01, 0.02, 0.025, 0.05, 0.1];
  const tickStep = stepCandidates.find((st) => yMax / st <= 6) ?? 0.1;
  const yTicks = Array.from({length: Math.floor(yMax / tickStep) + 1}, (_, i) =>
    Number((i * tickStep).toFixed(4)),
  );

  return (
    <VizFrame
      title={title}
      source={source}
      controls={
        <>
          <Slider
            label="Interwał testów T₁"
            min={1}
            max={36}
            step={1}
            value={months}
            onChange={setMonths}
            format={(v) => `${v} mies.`}
          />
          <ToggleGroup
            label="λDU"
            value={lambda}
            onChange={setLambda}
            options={[1e-6, 2e-6, 5e-6].map((v) => ({value: v, label: `λDU ${sci(v, 1)}/h`}))}
          />
          <Slider
            label="Pokrycie testu"
            min={50}
            max={100}
            step={5}
            value={coverage}
            onChange={setCoverage}
            format={(v) => `${v}%`}
          />
        </>
      }
      note={`Horyzont ${YEARS} lata. Przy pokryciu testu poniżej 100% część uszkodzeń zostaje po teście i „podłoga” rośnie (model uproszczony). Dane umowne z W2.`}>
      <svg
        className={s.svg}
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label={`PFD w czasie, test co ${months} miesięcy: PFDavg ${sci(pfdAvg, 3)}, ${band.label}`}>
        {/* SIL bands */}
        {BANDS.map((b, i) => {
          const lo = Math.min(b.lo, yMax);
          const hi = Math.min(b.hi, yMax);
          if (hi <= lo) {
            return null;
          }
          const y1 = yS(hi);
          const y2 = yS(lo);
          return (
            <g key={b.sil}>
              <rect
                x={P.left}
                y={y1}
                width={P.right - P.left}
                height={y2 - y1}
                fill={i % 2 === 0 ? 'var(--viz-hover)' : 'transparent'}
              />
              {y2 - y1 > 16 && (
                <text
                  x={P.right + 8}
                  y={(y1 + y2) / 2 + 4}
                  fontSize="13"
                  fontWeight="700"
                  style={{fill: 'var(--viz-ink-2)'}}>
                  {b.sil}
                </text>
              )}
            </g>
          );
        })}
        {yTicks.map((t) => (
          <g key={t}>
            <line x1={P.left} x2={P.right} y1={yS(t)} y2={yS(t)} stroke="var(--viz-grid)" />
            <text
              x={P.left - 8}
              y={yS(t) + 4}
              textAnchor="end"
              fontSize="11.5"
              style={{fill: 'var(--viz-muted)'}}>
              {t === 0 ? '0' : num(t, 4)}
            </text>
          </g>
        ))}
        <line x1={P.left} x2={P.right} y1={P.bottom} y2={P.bottom} stroke="var(--viz-axis)" />
        {Array.from({length: YEARS + 1}, (_, i) => i).map((yr) => (
          <text
            key={yr}
            x={x(yr)}
            y={P.bottom + 20}
            textAnchor="middle"
            fontSize="12"
            style={{fill: 'var(--viz-muted)'}}>
            {yr === 0 ? '0' : `${yr} ${yr === 1 ? 'rok' : 'lata'}`}
          </text>
        ))}
        <text x={P.left} y={P.top - 6} fontSize="12" style={{fill: 'var(--viz-ink-2)'}}>
          PFD(t)
        </text>

        {/* requirement */}
        <line
          x1={P.left}
          x2={P.right}
          y1={yS(required)}
          y2={yS(required)}
          stroke="var(--viz-critical)"
          strokeWidth="2"
          strokeDasharray="7 5"
        />
        <text
          x={P.right - 4}
          y={yS(required) - 6}
          textAnchor="end"
          fontSize="12.5"
          fontWeight="700"
          className={s.halo}
          style={{fill: 'var(--viz-critical-ink)'}}>
          {requiredLabel}: ≤ {sci(required, 1)}
        </text>

        {/* sawtooth */}
        <path d={path} fill="none" stroke="var(--viz-s1)" strokeWidth="2.5" strokeLinejoin="round" />
        {/* average */}
        <line
          x1={P.left}
          x2={P.right}
          y1={yS(pfdAvg)}
          y2={yS(pfdAvg)}
          stroke="var(--viz-ink)"
          strokeWidth="1.5"
        />
        <text x={P.right + 8} y={yS(pfdAvg) + 4} fontSize="12.5" fontWeight="700">
          PFDavg
        </text>
        {tests.slice(0, 48).map((h) => (
          <line
            key={h}
            x1={x(h / HOURS_PER_YEAR)}
            x2={x(h / HOURS_PER_YEAR)}
            y1={P.bottom}
            y2={P.bottom + 6}
            stroke="var(--viz-ink)"
            strokeWidth="1.5"
          />
        ))}
        <text
          x={P.right}
          y={P.bottom + 40}
          textAnchor="end"
          fontSize="11.5"
          style={{fill: 'var(--viz-ink-2)'}}>
          kreski na osi: testy sprawdzające
        </text>
      </svg>
      <div className={s.readout} aria-live="polite">
        <span>
          PFDavg ≈ λDU·T₁/2{coverage < 100 ? ' + część niepokryta' : ''} = <strong>{sci(pfdAvg, 3)}</strong>
        </span>
        <Badge kind="neutral">przedział {band.label}</Badge>
        <Badge kind={ok ? 'good' : 'critical'}>{ok ? 'spełnia wymaganie' : 'nie spełnia wymagania'}</Badge>
      </div>
    </VizFrame>
  );
}
