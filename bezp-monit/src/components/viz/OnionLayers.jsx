import React, {useState} from 'react';
import clsx from 'clsx';
import s from './viz.module.css';
import {VizFrame} from './Frame';

const GROUPS = [
  {id: 'core', label: 'Proces', color: 'var(--viz-axis)', tint: 'var(--viz-hover)'},
  {id: 'control', label: 'Sterowanie i monitoring', color: 'var(--viz-s1)', tint: 'var(--viz-s1-tint)'},
  {id: 'prevent', label: 'Zapobieganie', color: 'var(--viz-s2)', tint: 'var(--viz-s2-tint)'},
  {id: 'mitigate', label: 'Ograniczanie skutków', color: 'var(--viz-s3)', tint: 'var(--viz-s3-tint)'},
  {id: 'respond', label: 'Reagowanie awaryjne', color: 'var(--viz-s4)', tint: 'var(--viz-s4-tint)'},
];

const LAYERS = [
  {
    n: 1,
    group: 'core',
    name: 'Projekt procesu i instalacji',
    desc: 'Najgłębsza warstwa: wybór mniej niebezpiecznej technologii i układu.',
  },
  {
    n: 2,
    group: 'control',
    name: 'Podstawowy system sterowania (BPCS)',
    desc: 'Zwykłe sterowanie, np. sterownik farmy lub biogazowni. Monitoring jest w tej samej grupie: gdy zawiesi się sterownik, często zawodzi razem z nim.',
  },
  {
    n: 3,
    group: 'prevent',
    name: 'Alarmy i reakcja operatora',
    desc: 'Warstwa tylko wtedy, gdy alarm jest niezależny, jest czas na reakcję i jest procedura.',
  },
  {
    n: 4,
    group: 'prevent',
    name: 'Przyrządowy system bezpieczeństwa (SIS)',
    desc: 'Automatyczna funkcja: czujnik → logika → element wykonawczy, z wymaganym SIL.',
  },
  {
    n: 5,
    group: 'prevent',
    name: 'Zabezpieczenia fizyczne: zawory i membrany upustowe',
    desc: 'Działają bez zasilania i sterowania, np. zabezpieczenie nad- i podciśnieniowe zbiornika biogazu.',
  },
  {
    n: 6,
    group: 'mitigate',
    name: 'Obudowy i obwałowania',
    desc: 'Nie zapobiegają zdarzeniu, ograniczają jego skutki.',
  },
  {
    n: 7,
    group: 'mitigate',
    name: 'Systemy wykrywania pożaru i gazu',
    desc: 'Ograniczają skutki: alarm, wentylacja, gaszenie.',
  },
  {
    n: 8,
    group: 'respond',
    name: 'Reagowanie awaryjne w zakładzie',
    desc: 'Plan awaryjny, ewakuacja, procedury wejścia.',
  },
  {
    n: 9,
    group: 'respond',
    name: 'Reagowanie służb zewnętrznych',
    desc: 'Straż pożarna i ratownictwo; w biogazowni np. PSP.',
  },
];

const SIZE = 460;
const C = SIZE / 2;
const R_CORE = 46;
const RING = 22;

const rOuter = (n) => (n === 1 ? R_CORE : R_CORE + (n - 1) * RING);
const rInner = (n) => (n === 1 ? 0 : rOuter(n - 1));

function annulus(ro, ri) {
  const outer = `M${C - ro},${C} a${ro},${ro} 0 1,0 ${2 * ro},0 a${ro},${ro} 0 1,0 ${-2 * ro},0 Z`;
  if (ri === 0) {
    return outer;
  }
  return `${outer} M${C - ri},${C} a${ri},${ri} 0 1,1 ${2 * ri},0 a${ri},${ri} 0 1,1 ${-2 * ri},0 Z`;
}

/** CCPS layers of protection as an onion, grouped as in IEC 61511-1 (simplified) */
export default function OnionLayers({title, source}) {
  const [active, setActive] = useState(null);
  const groupOf = (id) => GROUPS.find((g) => g.id === id);
  const angle = (-50 * Math.PI) / 180;
  const current = LAYERS.find((l) => l.n === active);

  return (
    <VizFrame
      title={title}
      source={source}
      note="Kolejność warstw wg CCPS; grupy wg IEC 61511-1, rys. 9, w uproszczeniu. Najedź na warstwę lub jej nazwę.">
      <div className={s.split}>
        <svg
          className={s.svg}
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          role="img"
          aria-label={`Model cebuli: ${LAYERS.map((l) => `${l.n}. ${l.name}`).join('; ')}`}>
          {[...LAYERS].reverse().map((layer) => {
            const g = groupOf(layer.group);
            const on = active === layer.n;
            const dim = active !== null && !on;
            return (
              <path
                key={layer.n}
                d={annulus(rOuter(layer.n), rInner(layer.n))}
                fillRule="evenodd"
                fill={on ? g.color : g.tint}
                stroke="var(--viz-surface)"
                strokeWidth="2"
                opacity={dim ? 0.45 : 1}
                onMouseEnter={() => setActive(layer.n)}
                onMouseLeave={() => setActive(null)}
                style={{transition: 'opacity 0.2s ease, fill 0.2s ease'}}
              />
            );
          })}
          {LAYERS.map((layer) => {
            const r = layer.n === 1 ? 0 : (rOuter(layer.n) + rInner(layer.n)) / 2;
            const x = C + r * Math.cos(angle);
            const y = C + r * Math.sin(angle);
            return (
              <text
                key={layer.n}
                x={x}
                y={y + 4.5}
                textAnchor="middle"
                fontSize={layer.n === 1 ? 18 : 13}
                fontWeight="700"
                pointerEvents="none">
                {layer.n}
              </text>
            );
          })}
          <text
            x={C}
            y={C + 22}
            textAnchor="middle"
            fontSize="11"
            pointerEvents="none"
            style={{fill: 'var(--viz-ink-2)'}}>
            proces
          </text>
        </svg>
        <div>
          {GROUPS.filter((g) => g.id !== 'core').map((g) => (
            <div key={g.id} style={{marginBottom: '0.45rem'}}>
              <div className={s.legendItem} style={{fontWeight: 650, fontSize: '0.85rem'}}>
                <span className={s.swatch} style={{background: g.color}} />
                {g.label}
              </div>
              {LAYERS.filter((l) => l.group === g.id).map((l) => (
                <div
                  key={l.n}
                  className={clsx(s.waffleRow, active !== null && active !== l.n && s.dim)}
                  onMouseEnter={() => setActive(l.n)}
                  onMouseLeave={() => setActive(null)}
                  style={{fontSize: '0.84rem', paddingLeft: '1.2rem'}}>
                  <strong>{l.n}</strong> {l.name}
                </div>
              ))}
              {g.id === 'control' && (
                <div style={{fontSize: '0.8rem', paddingLeft: '1.2rem', color: 'var(--viz-ink-2)'}}>
                  + monitoring (ekrany, trendy, SCADA): ta sama grupa co BPCS
                </div>
              )}
            </div>
          ))}
          <div className={s.panel} aria-live="polite">
            {current ? (
              <>
                <div className={s.panelTitle}>
                  {current.n}. {current.name}
                </div>
                {current.desc}
              </>
            ) : (
              <>
                Warstwy 1 i 2: zwykła praca. Warstwy 3–5 zapobiegają zdarzeniu, 6–9 ograniczają jego skutki.
              </>
            )}
          </div>
        </div>
      </div>
    </VizFrame>
  );
}
