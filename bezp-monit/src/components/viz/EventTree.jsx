import React, {useState} from 'react';
import s from './viz.module.css';
import {Lines, Slider, VizFrame} from './Frame';
import {auto, logScale, num, sci} from './util';

const W = 800;
const H = 330;

/** Event tree after the initiating event G1: gas removal, then ignition */
export default function EventTree({title, source, fIE = 0.08, pFail = 0.0054}) {
  const [pIgn, setPIgn] = useState(0.5);
  const outcomes = [
    {y: 72, name: 'Gazy usunięte', f: fIE * (1 - pFail), kind: 'good'},
    {y: 212, name: 'Palna atmosfera bez zapłonu', f: fIE * pFail * (1 - pIgn), kind: 'warning', warn: true},
    {y: 292, name: 'Deflagracja', f: fIE * pFail * pIgn, kind: 'critical'},
  ];
  const sum = outcomes.reduce((a, o) => a + o.f, 0);
  const xb = logScale(1e-6, 1e-1, 0, 120);
  const color = {good: 'var(--viz-good)', warning: 'var(--viz-warning)', critical: 'var(--viz-critical)'};

  const branch = (x1, y1, x2, y2) => (
    <polyline
      points={`${x1},${y1} ${x1},${y2} ${x2},${y2}`}
      fill="none"
      stroke="var(--viz-ink)"
      strokeWidth="1.8"
    />
  );

  return (
    <VizFrame
      title={title}
      source={source}
      controls={
        <Slider
          label="P(zapłon)"
          min={0}
          max={1}
          step={0.05}
          value={pIgn}
          onChange={setPIgn}
          format={(v) => num(v, 2, 2)}
        />
      }
      note="Konwencja: gałąź w górę = bariera działa (tak), w dół = zawodzi (nie). Częstość wyniku = f(IE) × iloczyn prawdopodobieństw na ścieżce. Dane umowne z W2.">
      <svg
        className={s.svg}
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label={`Drzewo zdarzeń: ${outcomes.map((o) => `${o.name} ${sci(o.f, 3)} na rok`).join('; ')}`}>
        <text x="84" y="22" textAnchor="middle" fontSize="12.5" fontWeight="700">
          Zdarzenie inicjujące
        </text>
        <text x="270" y="22" textAnchor="middle" fontSize="12.5" fontWeight="700">
          Usunięcie gazów działa?
        </text>
        <text x="420" y="22" textAnchor="middle" fontSize="12.5" fontWeight="700">
          Brak zapłonu?
        </text>
        <text x="480" y="22" fontSize="12.5" fontWeight="700">
          Wynik
        </text>
        <text x={W - 4} y="22" textAnchor="end" fontSize="12.5" fontWeight="700">
          Częstość [1/rok]
        </text>
        <line x1="0" x2={W} y1="32" y2="32" stroke="var(--viz-grid)" />

        <rect x="4" y="128" width="160" height="72" rx="8" fill="var(--viz-s1-tint)" stroke="var(--viz-s1)" />
        <Lines
          x={84}
          y={152}
          lines={['Ucieczka termiczna', 'z gazami (G1)', `f = ${auto(fIE)}/rok`]}
          lh={16}
          anchor="middle"
          size={12.5}
          weight={600}
        />

        <line x1="164" x2="210" y1="164" y2="164" stroke="var(--viz-ink)" strokeWidth="1.8" />
        {branch(210, 164, 470, 72)}
        {branch(210, 164, 360, 252)}
        {branch(360, 252, 470, 212)}
        {branch(360, 252, 470, 292)}

        <text x="222" y="64" fontSize="12">
          tak: {num(1 - pFail, 4)}
        </text>
        <text x="222" y="244" fontSize="12">
          nie: {num(pFail, 4)} (G2)
        </text>
        <text x="372" y="204" fontSize="12">
          tak: {num(1 - pIgn, 2)}
        </text>
        <text x="372" y="284" fontSize="12">
          nie: {num(pIgn, 2)}
        </text>

        {outcomes.map((o) => (
          <g key={o.name}>
            <circle cx="480" cy={o.y} r="6" fill={color[o.kind]} />
            <text x="492" y={o.y + 4.5} fontSize="13" fontWeight="650">
              {o.name}
              {o.warn ? ' ⚠' : ''}
            </text>
            <text x={W - 4} y={o.y - 2} textAnchor="end" fontSize="13" fontWeight="650">
              {o.f > 0 ? sci(o.f, 3) : '0'}
            </text>
            <rect x={W - 124} y={o.y + 6} width="120" height="6" rx="3" fill="var(--viz-hover)" />
            <rect
              x={W - 124}
              y={o.y + 6}
              width={o.f > 1e-6 ? xb(o.f) : 0}
              height="6"
              rx="3"
              fill={color[o.kind]}
            />
          </g>
        ))}
        <text x={W - 64} y={H - 4} textAnchor="middle" fontSize="10.5" style={{fill: 'var(--viz-muted)'}}>
          pasek: skala log. 10⁻⁶–10⁻¹
        </text>
      </svg>
      <div className={s.readout} aria-live="polite">
        <span>
          Kontrola: suma wyników = <strong>{auto(sum, 3)}</strong> = f(IE) ✓
        </span>
        <span>
          ⚠ „Bez zapłonu” to nie stan bezpieczny: w McMicken palna atmosfera zapaliła się po ok. 3 h, przy
          otwarciu drzwi.
        </span>
      </div>
    </VizFrame>
  );
}
