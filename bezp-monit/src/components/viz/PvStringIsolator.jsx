import React, {useState} from 'react';
import s from './viz.module.css';
import {Check, ToggleGroup, VizFrame} from './Frame';
import {useSvgId} from './util';

// One-line diagram of a PV string: modules → DC cables → DC isolator at the
// inverter → inverter → AC side → grid. Facts of W1, part 1, slide "PV: napięcie
// DC i łuk elektryczny" (Ramali et al. 2022; AC arc zero crossings: notes).

const W = 860;
const H = 330;
const MODULES = [110, 198, 286, 374]; // x of each module box
const MOD_W = 72;
const MOD_Y = 60;
const MOD_H = 46;
const LINE_Y = MOD_Y + MOD_H / 2; // string conductor
const DOWN_X = 540; // vertical DC cable
const ISO_Y = 245;
const ISO_PIVOT = 565;
const INV = {x: 625, y: 220, w: 90, h: 50};
const AC_PIVOT = 745;

const LIVE = {stroke: 'var(--viz-critical)', strokeWidth: 4};
const DEAD = {stroke: 'var(--viz-axis)', strokeWidth: 2, strokeDasharray: '6 5'};

function Wire({d, live}) {
  return <path d={d} fill="none" strokeLinecap="round" {...(live ? LIVE : DEAD)} />;
}

/** Switch symbol: pivot at (x, y), blade 40 px long, open = tilted upwards */
function Switch({x, y, open, live}) {
  const end = open ? [x + 35, y - 22] : [x + 40, y];
  return (
    <g>
      <line x1={x} y1={y} x2={end[0]} y2={end[1]} strokeLinecap="round" {...(live ? LIVE : DEAD)} strokeDasharray="none" />
      <circle cx={x} cy={y} r="4" fill="var(--viz-surface)" stroke="var(--viz-ink)" strokeWidth="1.5" />
      <circle cx={x + 40} cy={y} r="4" fill="var(--viz-surface)" stroke="var(--viz-ink)" strokeWidth="1.5" />
    </g>
  );
}

const STATE_TEXT = {
  'closed-on': 'Normalna praca: moduły, przewody DC, falownik i strona AC są pod napięciem.',
  'open-on':
    'Rozłącznik DC otwarty: falownik nie dostaje energii z modułów, ale moduły i przewody DC aż do rozłącznika nadal są pod napięciem.',
  'closed-off':
    'Instalacja odłączona od sieci: strona AC falownika jest bez napięcia, ale moduły i przewody DC nadal są pod napięciem.',
  'open-off':
    'Rozłącznik otwarty i instalacja odłączona od sieci: moduły i przewody DC do rozłącznika nadal są pod napięciem. W instalacji PV nie ma jednego punktu, który ją całkowicie odłącza.',
};

/** PV string: what stays live after opening the DC isolator; series arc and why a DC arc does not go out */
export default function PvStringIsolator({title, source}) {
  const [view, setView] = useState('napiecie');
  const [isoOpen, setIsoOpen] = useState(false);
  const [gridOff, setGridOff] = useState(false);
  const uid = useSvgId();

  const arc = view === 'luk';
  const iso = arc ? false : isoOpen;
  const off = arc ? false : gridOff;
  const invDcLive = !iso;
  const acLive = !off;
  const key = `${iso ? 'open' : 'closed'}-${off ? 'off' : 'on'}`;

  // AC and DC current traces for the arc inset (schematic, 2 periods of 50 Hz)
  const inset = {x: 60, y: 200, w: 380};
  const sine = Array.from({length: 81}, (_, i) => {
    const t = i / 80;
    return `${i === 0 ? 'M' : 'L'}${(inset.x + t * inset.w).toFixed(1)},${(inset.y + 22 - 18 * Math.sin(4 * Math.PI * t)).toFixed(1)}`;
  }).join(' ');
  const zeros = [0, 0.25, 0.5, 0.75, 1].map((t) => inset.x + t * inset.w);

  return (
    <VizFrame
      title={title}
      source={source}
      controls={
        <>
          <ToggleGroup
            label="Widok"
            value={view}
            onChange={setView}
            options={[
              {value: 'napiecie', label: 'Co jest pod napięciem'},
              {value: 'luk', label: 'Łuk szeregowy'},
            ]}
          />
          {!arc && (
            <>
              <Check label="Otwórz rozłącznik DC przy falowniku" checked={isoOpen} onChange={setIsoOpen} />
              <Check label="Odłącz instalację od sieci" checked={gridOff} onChange={setGridOff} />
            </>
          )}
        </>
      }
      note="Schemat jednokreskowy, bez skali; oświetlone moduły, dzień.">
      <svg
        className={s.svg}
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label={
          arc
            ? 'String PV z luźnym złączem między modułami: łuk szeregowy ma prąd nie większy niż prąd stringu, więc bezpiecznik stringu nie zadziała. Prąd przemienny przechodzi przez zero sto razy na sekundę, prąd stały nie przechodzi przez zero.'
            : `String PV. ${STATE_TEXT[key]}`
        }>
        <defs>
          <marker id={`arr-${uid}`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M0,0 L10,5 L0,10 z" fill="var(--viz-ink-2)" />
          </marker>
        </defs>

        {/* light */}
        <circle cx="55" cy="50" r="16" fill="var(--viz-s4-tint)" stroke="var(--viz-s4)" strokeWidth="2" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => {
          const r = (a * Math.PI) / 180;
          return (
            <line
              key={a}
              x1={55 + 21 * Math.cos(r)}
              y1={50 + 21 * Math.sin(r)}
              x2={55 + 28 * Math.cos(r)}
              y2={50 + 28 * Math.sin(r)}
              stroke="var(--viz-s4)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          );
        })}
        <text x="55" y="100" textAnchor="middle" fontSize="13" style={{fill: 'var(--viz-ink-2)'}}>
          światło
        </text>

        {/* string conductor: always live while light falls on the modules */}
        <Wire d={`M${MODULES[0] - 10},${LINE_Y} L${DOWN_X},${LINE_Y} L${DOWN_X},${ISO_Y} L${ISO_PIVOT},${ISO_Y}`} live />
        {MODULES.map((x) => (
          <g key={x}>
            <rect
              x={x}
              y={MOD_Y}
              width={MOD_W}
              height={MOD_H}
              rx="3"
              fill="var(--viz-s1-tint)"
              stroke="var(--viz-s1)"
              strokeWidth="1.5"
            />
            {[1, 2].map((k) => (
              <line
                key={k}
                x1={x + (k * MOD_W) / 3}
                x2={x + (k * MOD_W) / 3}
                y1={MOD_Y}
                y2={MOD_Y + MOD_H}
                stroke="var(--viz-s1)"
                strokeWidth="0.8"
              />
            ))}
          </g>
        ))}
        {MODULES.slice(1).map((x, i) => (
          <circle
            key={x}
            cx={x - 8}
            cy={LINE_Y}
            r={arc && i === 1 ? 6 : 4}
            fill="var(--viz-surface)"
            stroke="var(--viz-ink)"
            strokeWidth="1.5"
          />
        ))}
        <text x={MODULES[0]} y={MOD_Y - 10} fontSize="14" fontWeight="600">
          moduły PV połączone szeregowo (string)
        </text>

        {/* string fuse on the vertical cable */}
        <rect x={DOWN_X - 7} y="146" width="14" height="30" rx="2" fill="var(--viz-surface)" stroke="var(--viz-ink)" strokeWidth="1.5" />
        <line x1={DOWN_X} y1="146" x2={DOWN_X} y2="176" stroke="var(--viz-ink)" strokeWidth="1" />
        <text x={DOWN_X + 14} y="158" fontSize="13" style={{fill: 'var(--viz-ink-2)'}}>
          bezpiecznik
        </text>
        <text x={DOWN_X + 14} y="173" fontSize="13" style={{fill: 'var(--viz-ink-2)'}}>
          stringu
        </text>

        {/* DC isolator at the inverter */}
        <Switch x={ISO_PIVOT} y={ISO_Y} open={iso} live />
        <Wire d={`M${ISO_PIVOT + 40},${ISO_Y} L${INV.x},${ISO_Y}`} live={invDcLive} />
        <text x={ISO_PIVOT + 20} y={ISO_Y + 30} textAnchor="middle" fontSize="13" style={{fill: 'var(--viz-ink-2)'}}>
          rozłącznik DC
        </text>
        <text x={ISO_PIVOT + 20} y={ISO_Y + 45} textAnchor="middle" fontSize="13" style={{fill: 'var(--viz-ink-2)'}}>
          przy falowniku
        </text>

        {/* inverter */}
        <rect
          x={INV.x}
          y={INV.y}
          width={INV.w}
          height={INV.h}
          rx="4"
          fill="var(--viz-surface)"
          stroke="var(--viz-ink)"
          strokeWidth="1.5"
        />
        <line x1={INV.x} y1={INV.y + INV.h} x2={INV.x + INV.w} y2={INV.y} stroke="var(--viz-ink-2)" strokeWidth="1" />
        <text x={INV.x + 8} y={INV.y + 18} fontSize="12" style={{fill: 'var(--viz-ink-2)'}}>
          DC
        </text>
        <text x={INV.x + INV.w - 8} y={INV.y + INV.h - 8} textAnchor="end" fontSize="12" style={{fill: 'var(--viz-ink-2)'}}>
          AC
        </text>
        <text x={INV.x + INV.w / 2} y={INV.y + INV.h + 20} textAnchor="middle" fontSize="14" fontWeight="600">
          falownik
        </text>

        {/* AC side and grid */}
        <Wire d={`M${INV.x + INV.w},${ISO_Y} L${AC_PIVOT},${ISO_Y}`} live={acLive} />
        <Switch x={AC_PIVOT} y={ISO_Y} open={off} live={acLive} />
        <Wire d={`M${AC_PIVOT + 40},${ISO_Y} L${AC_PIVOT + 62},${ISO_Y}`} live />
        <text x={AC_PIVOT + 66} y={ISO_Y + 5} fontSize="14" fontWeight="600">
          sieć
        </text>
        <text x={AC_PIVOT + 20} y={ISO_Y + 30} textAnchor="middle" fontSize="13" style={{fill: 'var(--viz-ink-2)'}}>
          odłączenie
        </text>
        <text x={AC_PIVOT + 20} y={ISO_Y + 45} textAnchor="middle" fontSize="13" style={{fill: 'var(--viz-ink-2)'}}>
          od sieci
        </text>

        {!arc && (
          <g>
            {/* label of the part that stays live */}
            <text x={MODULES[0]} y={MOD_Y + MOD_H + 26} fontSize="15" fontWeight="700" className={s.halo} style={{fill: 'var(--viz-critical-ink)'}}>
              pod napięciem DC, dopóki pada światło
            </text>
            <text x={MODULES[0]} y={MOD_Y + MOD_H + 48} fontSize="13" className={s.halo} style={{fill: 'var(--viz-ink-2)'}}>
              do 1000–1500 V: moduły i przewody DC aż do rozłącznika
            </text>
            {/* legend */}
            <g transform="translate(60, 250)">
              <line x1="0" y1="0" x2="36" y2="0" {...LIVE} />
              <text x="46" y="5" fontSize="13">
                pod napięciem
              </text>
              <line x1="0" y1="26" x2="36" y2="26" {...DEAD} />
              <text x="46" y="31" fontSize="13">
                bez napięcia
              </text>
            </g>
          </g>
        )}

        {arc && (
          <g>
            {/* series arc at the loose connector between modules 2 and 3 */}
            <path
              d={`M${MODULES[2] - 16},${LINE_Y - 16} l6,8 l-5,4 l7,9`}
              fill="none"
              stroke="var(--viz-s4)"
              strokeWidth="3"
              strokeLinejoin="round"
            />
            <path
              d={`M${MODULES[2] - 2},${LINE_Y - 16} l-6,8 l5,4 l-7,9`}
              fill="none"
              stroke="var(--viz-s4)"
              strokeWidth="3"
              strokeLinejoin="round"
            />
            <text x={MODULES[2] - 8} y={MOD_Y + MOD_H + 26} textAnchor="middle" fontSize="15" fontWeight="700" className={s.halo}>
              luźne złącze: łuk szeregowy
            </text>
            <text x={MODULES[2] - 8} y={MOD_Y + MOD_H + 48} textAnchor="middle" fontSize="13" className={s.halo} style={{fill: 'var(--viz-ink-2)'}}>
              prąd łuku nie większy niż prąd stringu
            </text>
            <path
              d={`M${MODULES[2] + 120},${MOD_Y + MOD_H + 40} Q${DOWN_X - 40},${MOD_Y + MOD_H + 40} ${DOWN_X - 12},158`}
              fill="none"
              stroke="var(--viz-ink-2)"
              strokeWidth="1.5"
              markerEnd={`url(#arr-${uid})`}
            />
            <text x={DOWN_X + 14} y="196" fontSize="13" fontWeight="700" className={s.halo}>
              nie zadziała: prąd nie
            </text>
            <text x={DOWN_X + 14} y="211" fontSize="13" fontWeight="700" className={s.halo}>
              przekracza wartości roboczej
            </text>

            {/* AC vs DC current */}
            <text x={inset.x} y={inset.y - 12} fontSize="13" fontWeight="600">
              prąd przemienny: zero 100 razy na sekundę, łuk zwykle gaśnie
            </text>
            <line x1={inset.x} x2={inset.x + inset.w} y1={inset.y + 22} y2={inset.y + 22} stroke="var(--viz-grid)" />
            <path d={sine} fill="none" stroke="var(--viz-s1)" strokeWidth="2.5" />
            {zeros.map((zx) => (
              <circle key={zx} cx={zx} cy={inset.y + 22} r="4" fill="var(--viz-surface)" stroke="var(--viz-s1)" strokeWidth="2" />
            ))}
            <text x={inset.x} y={inset.y + 66} fontSize="13" fontWeight="600">
              prąd stały: bez przejścia przez zero, łuk pali się dalej
            </text>
            <line x1={inset.x} x2={inset.x + inset.w} y1={inset.y + 102} y2={inset.y + 102} stroke="var(--viz-grid)" />
            <line x1={inset.x} x2={inset.x + inset.w} y1={inset.y + 84} y2={inset.y + 84} stroke="var(--viz-s2)" strokeWidth="2.5" />
            <text x={inset.x + inset.w + 8} y={inset.y + 106} fontSize="12" style={{fill: 'var(--viz-muted)'}}>
              0
            </text>
            <text x={inset.x + inset.w + 8} y={inset.y + 26} fontSize="12" style={{fill: 'var(--viz-muted)'}}>
              0
            </text>
          </g>
        )}
      </svg>
      <div className={s.stepCaption} aria-live="polite">
        {arc
          ? 'Łuk szeregowy na luźnym złączu: bezpiecznik stringu go nie wykryje, a łuk prądu stałego nie gaśnie sam.'
          : STATE_TEXT[key]}
      </div>
    </VizFrame>
  );
}
