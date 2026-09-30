import React, {useMemo, useState} from 'react';
import clsx from 'clsx';
import s from './viz.module.css';
import {Check, Lines, Slider, ToggleGroup, VizFrame} from './Frame';
import {auto, num, sci, wrap} from './util';

// Illustrative data from W2 (lecture slide "Przykład drzewa: gazy w kontenerze BESS")
const P = {A: 0.01, B: 0.02, C: 0.05, q: 0.02, V: 0.005};
const NAMES = {
  A: 'defekt ogniwa',
  B: 'przeładowanie przy awarii ochrony BMS',
  C: 'przegrzanie przy awarii chłodzenia',
  D1: 'detektor 1',
  D2: 'detektor 2',
  V: 'wentylacja awaryjna nie rusza',
  V1: 'wentylator 1',
  V2: 'wentylator 2',
  CCF: 'wspólna przyczyna detektorów',
};

export function computeTree({beta, fan2, exact}) {
  const or = (...ps) =>
    exact ? 1 - ps.reduce((acc, p) => acc * (1 - p), 1) : ps.reduce((acc, p) => acc + p, 0);
  const G1 = or(P.A, P.B, P.C);
  const ind = ((1 - beta) * P.q) ** 2;
  const ccf = beta * P.q;
  const G3 = beta > 0 ? or(ind, ccf) : ind;
  const V = fan2 ? P.V * P.V : P.V;
  const G2 = or(G3, V);
  const T = G1 * G2;
  const vIds = fan2 ? ['V1', 'V2'] : ['V'];
  const cuts = [];
  for (const id of ['A', 'B', 'C']) {
    cuts.push({ids: [id, ...vIds], p: P[id] * V, v: true});
    cuts.push({ids: [id, 'D1', 'D2'], p: P[id] * ind, v: false});
    if (beta > 0) {
      cuts.push({ids: [id, 'CCF'], p: P[id] * ccf, v: false});
    }
  }
  cuts.sort((a, b) => b.p - a.p);
  const sum = cuts.reduce((acc, c) => acc + c.p, 0);
  const vShare = cuts.filter((c) => c.v).reduce((acc, c) => acc + c.p, 0) / sum;
  return {G1, G2, G3, V, T, cuts, sum, vShare, ind, ccf};
}

const W = 800;
const H = 500;

function andGate(cx, y, w = 40, h = 34) {
  return `M${cx - w / 2},${y + h} V${y + h / 2} A${w / 2},${h / 2} 0 0 1 ${cx + w / 2},${y + h / 2} V${y + h} Z`;
}
function orGate(cx, y, w = 40, h = 34) {
  return `M${cx - w / 2},${y + h} Q${cx - w / 2},${y + h * 0.35} ${cx},${y} Q${cx + w / 2},${y + h * 0.35} ${cx + w / 2},${y + h} Q${cx},${y + h * 0.62} ${cx - w / 2},${y + h} Z`;
}

function Gate({cx, y, type}) {
  return (
    <g>
      <path
        d={type === 'AND' ? andGate(cx, y) : orGate(cx, y)}
        fill="var(--viz-surface)"
        stroke="var(--viz-ink)"
        strokeWidth="1.8"
      />
      <text x={cx + 26} y={y + 22} fontSize="11" fontWeight="700" style={{fill: 'var(--viz-ink-2)'}}>
        {type}
      </text>
    </g>
  );
}

function EventBox({cx, y, w, title, p, hot}) {
  return (
    <g>
      <rect
        x={cx - w / 2}
        y={y}
        width={w}
        height={44}
        rx="6"
        fill={hot ? 'var(--viz-critical-tint)' : 'var(--viz-surface)'}
        stroke={hot ? 'var(--viz-critical)' : 'var(--viz-ink)'}
        strokeWidth="1.5"
      />
      <text x={cx} y={y + 18} textAnchor="middle" fontSize="12.5" fontWeight="650">
        {title}
      </text>
      <text x={cx} y={y + 35} textAnchor="middle" fontSize="12.5" style={{fill: 'var(--viz-ink-2)'}}>
        P = {auto(p, 3)}
      </text>
    </g>
  );
}

function Basic({cx, cy, id, p, r = 24, lit, labelMax = 16}) {
  const lines = wrap(NAMES[id], labelMax);
  return (
    <g>
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill={lit ? 'var(--viz-s2-tint)' : 'var(--viz-surface)'}
        stroke={lit ? 'var(--viz-s2)' : 'var(--viz-ink)'}
        strokeWidth={lit ? 3 : 1.5}
        style={{transition: 'stroke 0.15s ease, fill 0.15s ease'}}
      />
      <text x={cx} y={cy + 5} textAnchor="middle" fontSize="13.5" fontWeight="700">
        {id}
      </text>
      <Lines x={cx} y={cy + r + 15} lines={lines} lh={13} anchor="middle" size={11} fill="var(--viz-ink-2)" />
      <text x={cx} y={cy + r + 15 + lines.length * 13} textAnchor="middle" fontSize="11.5" fontWeight="650">
        {auto(p, 3)}
      </text>
    </g>
  );
}

const line = (x1, y1, x2, y2) => (
  <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--viz-ink)" strokeWidth="1.3" />
);

/** Fault tree "flammable gases accumulate in a BESS container", computed live */
export default function FaultTree({title, source}) {
  const [beta, setBeta] = useState(0);
  const [fan2, setFan2] = useState(false);
  const [exact, setExact] = useState(true);
  const [lit, setLit] = useState(null);
  const r = useMemo(() => computeTree({beta, fan2, exact}), [beta, fan2, exact]);
  const base = useMemo(() => computeTree({beta: 0, fan2, exact}), [fan2, exact]);
  const isLit = (id) => Boolean(lit && lit.includes(id));

  return (
    <VizFrame
      title={title}
      source={source}
      controls={
        <>
          <Slider
            label="β detektorów"
            min={0}
            max={0.2}
            step={0.01}
            value={beta}
            onChange={setBeta}
            format={(v) => num(v, 2, 2)}
          />
          <Check label="Drugi, niezależny wentylator" checked={fan2} onChange={setFan2} />
          <ToggleGroup
            label="Bramka OR"
            value={exact}
            onChange={setExact}
            options={[
              {value: true, label: 'OR: wzór dokładny'},
              {value: false, label: 'OR: suma (zdarzenia rzadkie)'},
            ]}
          />
        </>
      }
      note="Dane umowne z W2. Przy β > 0 bramka G3 staje się OR: niezależna para detektorów albo uszkodzenie wspólne (CCF = β·q). Najedź na przekrój, aby zobaczyć jego zdarzenia.">
      <svg
        className={s.svg}
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label={`Drzewo niezdatności: P(T) = ${sci(r.T, 3)}, G1 = ${auto(r.G1)}, G2 = ${auto(r.G2)}`}>
        {/* top */}
        <EventBox cx={400} y={6} w={340} title="T: palne gazy gromadzą się w kontenerze" p={r.T} hot />
        {line(400, 50, 400, 66)}
        <Gate cx={400} y={66} type="AND" />
        {line(400, 100, 400, 114)}
        {line(200, 114, 600, 114)}
        {line(200, 114, 200, 128)}
        {line(600, 114, 600, 128)}

        {/* G1 */}
        <EventBox cx={200} y={128} w={270} title="G1: ucieczka termiczna z gazami" p={r.G1} />
        {line(200, 172, 200, 180)}
        <Gate cx={200} y={180} type="OR" />
        {line(200, 208, 200, 224)}
        {line(80, 224, 320, 224)}
        {[80, 200, 320].map((x) => (
          <React.Fragment key={x}>{line(x, 224, x, 246)}</React.Fragment>
        ))}
        <Basic cx={80} cy={272} id="A" p={P.A} lit={isLit('A')} />
        <Basic cx={200} cy={272} id="B" p={P.B} lit={isLit('B')} />
        <Basic cx={320} cy={272} id="C" p={P.C} lit={isLit('C')} />

        {/* G2 */}
        <EventBox cx={600} y={128} w={270} title="G2: gazy nie zostają usunięte" p={r.G2} />
        {line(600, 172, 600, 180)}
        <Gate cx={600} y={180} type="OR" />
        {line(600, 208, 600, 224)}
        {line(500, 224, 710, 224)}
        {line(500, 224, 500, 232)}
        {line(710, 224, 710, fan2 ? 232 : 246)}

        {/* G3: detectors */}
        <EventBox cx={500} y={232} w={180} title="G3: oba detektory zawodzą" p={r.G3} />
        {line(500, 276, 500, 284)}
        <Gate cx={500} y={284} type={beta > 0 ? 'OR' : 'AND'} />
        {beta > 0 ? (
          <>
            {line(500, 312, 500, 326)}
            {line(440, 326, 580, 326)}
            {line(440, 326, 440, 338)}
            {line(580, 326, 580, 350)}
            <Gate cx={440} y={338} type="AND" />
            <text x={468} y={378} fontSize="11" style={{fill: 'var(--viz-ink-2)'}}>
              część niezależna
            </text>
            {line(440, 372, 440, 384)}
            {line(405, 384, 475, 384)}
            {line(405, 384, 405, 398)}
            {line(475, 384, 475, 398)}
            <Basic cx={405} cy={420} id="D1" p={(1 - beta) * P.q} r={22} lit={isLit('D1')} labelMax={12} />
            <Basic cx={475} cy={420} id="D2" p={(1 - beta) * P.q} r={22} lit={isLit('D2')} labelMax={12} />
            <Basic cx={580} cy={374} id="CCF" p={r.ccf} r={24} lit={isLit('CCF')} labelMax={14} />
          </>
        ) : (
          <>
            {line(500, 318, 500, 330)}
            {line(450, 330, 550, 330)}
            {line(450, 330, 450, 346)}
            {line(550, 330, 550, 346)}
            <Basic cx={450} cy={370} id="D1" p={P.q} lit={isLit('D1')} />
            <Basic cx={550} cy={370} id="D2" p={P.q} lit={isLit('D2')} />
          </>
        )}

        {/* ventilation */}
        {fan2 ? (
          <>
            <EventBox cx={710} y={232} w={160} title="G4: obie wentylacje" p={r.V} />
            {line(710, 276, 710, 284)}
            <Gate cx={710} y={284} type="AND" />
            {line(710, 318, 710, 330)}
            {line(670, 330, 750, 330)}
            {line(670, 330, 670, 348)}
            {line(750, 330, 750, 348)}
            <Basic cx={670} cy={370} id="V1" p={P.V} r={22} lit={isLit('V1')} labelMax={11} />
            <Basic cx={750} cy={370} id="V2" p={P.V} r={22} lit={isLit('V2')} labelMax={11} />
          </>
        ) : (
          <Basic cx={710} cy={272} id="V" p={P.V} lit={isLit('V')} labelMax={14} />
        )}
      </svg>
      <div className={s.readout} aria-live="polite">
        <span>
          P(T) {exact ? 'dokładnie' : 'z sumą w OR'}: <strong>{sci(r.T, 3)}</strong>
        </span>
        <span>
          Suma przekrojów: <strong>{sci(r.sum, 3)}</strong>
        </span>
        <span>
          Udział przekrojów z wentylacją: <strong>{num(r.vShare * 100, 1)}%</strong>
        </span>
        {beta > 0 && (
          <span>
            Wpływ β: P(T) <strong>+{num((r.T / base.T - 1) * 100, 0)}%</strong> względem β = 0
          </span>
        )}
      </div>
      <div className={s.chips}>
        {r.cuts.map((c) => (
          <button
            key={c.ids.join()}
            type="button"
            className={clsx(s.chip, c.v && s.chipV)}
            onMouseEnter={() => setLit(c.ids)}
            onMouseLeave={() => setLit(null)}
            onFocus={() => setLit(c.ids)}
            onBlur={() => setLit(null)}>
            {`{${c.ids.join(', ')}}`} {sci(c.p, 2)}
          </button>
        ))}
      </div>
    </VizFrame>
  );
}
