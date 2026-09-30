import React, {useState} from 'react';
import s from './viz.module.css';
import {Badge, Lines, ToggleGroup, VizFrame} from './Frame';
import {num, sci, sup, wrap} from './util';

const FREQ = [
  {f: 5, label: '≥ 10⁻¹', lo: -1},
  {f: 4, label: '10⁻²–10⁻¹', lo: -2},
  {f: 3, label: '10⁻³–10⁻²', lo: -3},
  {f: 2, label: '10⁻⁴–10⁻³', lo: -4},
  {f: 1, label: '< 10⁻⁴', lo: -5},
];
const CONS = [
  {c: 1, label: 'pierwsza pomoc'},
  {c: 2, label: 'uraz z absencją'},
  {c: 3, label: 'ciężki trwały uraz'},
  {c: 4, label: 'jedna ofiara śmiertelna'},
  {c: 5, label: 'wiele ofiar śmiertelnych'},
];

const category = (f, c) => (f + c >= 8 ? 'N' : f + c >= 6 ? 'T' : 'A');
const CAT = {
  A: {fill: 'var(--viz-good-tint)', edge: 'var(--viz-good)', name: 'akceptowane', kind: 'good'},
  T: {
    fill: 'var(--viz-warning-tint)',
    edge: 'var(--viz-warning)',
    name: 'tolerowane (ALARP)',
    kind: 'warning',
  },
  N: {fill: 'var(--viz-critical-tint)', edge: 'var(--viz-critical)', name: 'nietolerowane', kind: 'critical'},
};

const MODES = {
  build: {label: 'Budowa', cells: [], dots: []},
  compress: {
    label: 'Kompresja zakresu',
    cells: ['2-4', '3-4'],
    dots: [
      {id: 'P', freq: 5e-4, c: 4, dx: 0},
      {id: 'Q', freq: 5e-3, c: 4, dx: 0},
    ],
  },
  harm: {
    label: 'Różne szkody, ten sam kolor',
    cells: ['4-2', '2-4'],
    dots: [
      {id: 'R', freq: 3e-2, c: 2, dx: 0},
      {id: 'S', freq: 3e-4, c: 4, dx: 0},
    ],
  },
  reverse: {
    label: 'Odwrócenie rankingu',
    cells: ['3-5', '3-4'],
    dots: [
      {id: 'X', freq: 1.1e-3, c: 5, dx: 0},
      {id: 'Y', freq: 9e-3, c: 4, dx: 0},
    ],
  },
};

const W = 560;
const H = 444;
const GX = 112;
const GY = 16;
const CW = 88;
const RH = 70;

const rowY = (f) => GY + (5 - f) * RH;
const colX = (c) => GX + (c - 1) * CW;

function dotY(freq) {
  const lg = Math.log10(freq);
  const lo = Math.floor(lg);
  const f = Math.min(5, Math.max(1, lo + 6));
  const frac = lg - lo;
  return rowY(f) + (1 - frac) * RH;
}
const freqRow = (freq) => Math.min(5, Math.max(1, Math.floor(Math.log10(freq)) + 6));

/** 5 × 5 risk matrix with Cox's (2008) traps shown on example scenarios */
export default function RiskMatrix({title, source}) {
  const [mode, setMode] = useState('build');
  const [selected, setSelected] = useState({f: 3, c: 4});
  const m = MODES[mode];
  const highlighted = new Set(m.cells);

  const cellInfo = (f, c) => {
    const cat = category(f, c);
    return (
      <>
        <div className={s.panelTitle}>
          F{f} × C{c}
        </div>
        <div>
          Częstość: <strong>{FREQ[5 - f].label}/rok</strong>
          <br />
          Skutek: <strong>{CONS[c - 1].label}</strong>
          <br />
          Suma indeksów: {f} + {c} = <strong>{f + c}</strong>
        </div>
        <div style={{marginTop: '0.4rem'}}>
          <Badge kind={CAT[cat].kind}>
            {cat}: {CAT[cat].name}
          </Badge>
        </div>
      </>
    );
  };

  const panel = {
    build: (
      <>
        {cellInfo(selected.f, selected.c)}
        <p style={{marginTop: '0.6rem', marginBottom: 0}}>
          Reguła: F + C ≥ 8 → N; 6–7 → T; ≤ 5 → A. Kliknij komórkę.
        </p>
      </>
    ),
    compress: (
      <>
        <div className={s.panelTitle}>Ta sama kategoria, 10 × różne częstości</div>
        P: {sci(5e-4, 1)}/rok, Q: {sci(5e-3, 1)}/rok, oba z jedną ofiarą śmiertelną. Oba są T, choć Q zdarza
        się dziesięć razy częściej.
      </>
    ),
    harm: (
      <>
        <div className={s.panelTitle}>Różne szkody, ten sam kolor</div>
        R: uraz z absencją, ok. {sci(3e-2, 1)}/rok. S: ofiara śmiertelna, ok. {sci(3e-4, 1)}/rok. Obie komórki
        są T, choć szkody są zupełnie innego rodzaju.
      </>
    ),
    reverse: (
      <>
        <div className={s.panelTitle}>Wyższa kategoria dla mniejszego ryzyka</div>
        X: {num(1.1, 1)} × 10{sup(-3)}/rok × 3 ofiary ≈ <strong>3,3 × 10{sup(-3)}</strong> ofiar/rok →{' '}
        <strong>N</strong>.
        <br />
        Y: 9 × 10{sup(-3)}/rok × 1 ofiara = <strong>9 × 10{sup(-3)}</strong> ofiar/rok → <strong>T</strong>.
        <br />
        Matryca stawia X wyżej, choć Y daje ok. 2,7 razy więcej ofiar statystycznie (Cox 2008). Liczby umowne.
      </>
    ),
  }[mode];

  return (
    <VizFrame
      title={title}
      source={source}
      controls={
        <ToggleGroup
          label="Tryb"
          value={mode}
          onChange={setMode}
          options={Object.entries(MODES).map(([value, v]) => ({value, label: v.label}))}
        />
      }
      note="Matryca umowna z W2 (reguła sumy indeksów). Położenie kropki w wierszu odpowiada częstości w skali logarytmicznej.">
      <div className={s.split}>
        <svg
          className={s.svg}
          viewBox={`0 0 ${W} ${H}`}
          role="img"
          aria-label="Matryca ryzyka 5 na 5, częstość F1–F5, skutek C1–C5">
          {FREQ.map((row) => (
            <g key={row.f}>
              <text x={GX - 10} y={rowY(row.f) + RH / 2 - 3} textAnchor="end" fontSize="15" fontWeight="700">
                F{row.f}
              </text>
              <text
                x={GX - 10}
                y={rowY(row.f) + RH / 2 + 15}
                textAnchor="end"
                fontSize="13"
                style={{fill: 'var(--viz-ink-2)'}}>
                {row.label}/rok
              </text>
              {CONS.map((col) => {
                const cat = category(row.f, col.c);
                const key = `${row.f}-${col.c}`;
                const isSel = mode === 'build' && selected.f === row.f && selected.c === col.c;
                const dim = highlighted.size > 0 && !highlighted.has(key);
                return (
                  <g
                    key={key}
                    className={s.focusable}
                    tabIndex={mode === 'build' ? 0 : -1}
                    role={mode === 'build' ? 'button' : undefined}
                    aria-label={`F${row.f} C${col.c}: ${CAT[cat].name}`}
                    onClick={() => {
                      setMode('build');
                      setSelected({f: row.f, c: col.c});
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setSelected({f: row.f, c: col.c});
                      }
                    }}
                    opacity={dim ? 0.35 : 1}
                    style={{transition: 'opacity 0.2s ease'}}>
                    <rect
                      x={colX(col.c) + 1.5}
                      y={rowY(row.f) + 1.5}
                      width={CW - 3}
                      height={RH - 3}
                      rx="5"
                      fill={CAT[cat].fill}
                      stroke={isSel || highlighted.has(key) ? 'var(--viz-ink)' : CAT[cat].edge}
                      strokeWidth={isSel || highlighted.has(key) ? 2.5 : 1}
                    />
                    <text
                      x={colX(col.c) + CW / 2}
                      y={rowY(row.f) + RH / 2 + 6}
                      textAnchor="middle"
                      fontSize="17"
                      fontWeight="700">
                      {cat}
                    </text>
                  </g>
                );
              })}
            </g>
          ))}
          {CONS.map((col) => (
            <g key={col.c}>
              <text
                x={colX(col.c) + CW / 2}
                y={GY + 5 * RH + 20}
                textAnchor="middle"
                fontSize="15"
                fontWeight="700">
                C{col.c}
              </text>
              <Lines
                x={colX(col.c) + CW / 2}
                y={GY + 5 * RH + 36}
                lines={wrap(col.label, 12)}
                lh={15}
                anchor="middle"
                size={13}
                fill="var(--viz-ink-2)"
              />
            </g>
          ))}
          {m.dots.map((d, i) => {
            const sameCol = m.dots[0].c === m.dots[1].c;
            const cx = colX(d.c) + CW / 2 + (sameCol ? (i === 0 ? -26 : 26) : 26);
            const cy = dotY(d.freq);
            return (
              <g key={d.id} pointerEvents="none">
                <circle
                  cx={cx}
                  cy={cy}
                  r="11"
                  fill={i === 0 ? 'var(--viz-s1)' : 'var(--viz-s2)'}
                  stroke="var(--viz-surface)"
                  strokeWidth="2"
                />
                <text
                  x={cx}
                  y={cy + 4.5}
                  textAnchor="middle"
                  fontSize="12.5"
                  fontWeight="700"
                  style={{fill: '#fff'}}>
                  {d.id}
                </text>
              </g>
            );
          })}
          {m.dots.length > 0 && (
            <text x={W - 2} y={10} textAnchor="end" fontSize="11" style={{fill: 'var(--viz-muted)'}}>
              kropki: scenariusze umowne ({m.dots.map((d) => `${d.id} → F${freqRow(d.freq)}`).join(', ')})
            </text>
          )}
        </svg>
        <div className={s.panel} aria-live="polite">
          {panel}
        </div>
      </div>
    </VizFrame>
  );
}
