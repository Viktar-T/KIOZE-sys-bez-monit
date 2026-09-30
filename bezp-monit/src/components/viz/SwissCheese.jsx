import React, {useState} from 'react';
import clsx from 'clsx';
import s from './viz.module.css';
import {Badge, Lines, ToggleGroup, VizFrame} from './Frame';
import {useSvgId, wrap} from './util';

const LAYERS = [
  {name: 'Jakość ogniwa', kind: 'critical', status: 'wada wewnętrzna'},
  {name: 'BMS i monitoring', kind: 'warning', status: 'zadziałał, nie zatrzymał'},
  {name: 'Bariery termiczne', missing: true, status: 'brak', add: 'thermal'},
  {name: 'Gaszenie Novec 1230', kind: 'warning', status: 'zadziałało, nie zatrzymało'},
  {name: 'Detekcja gazu i wentylacja', missing: true, status: 'brak', add: 'gas'},
  {name: 'Plan reagowania', missing: true, status: 'brak procedury', add: 'plan'},
];

const ADDED = {
  thermal:
    'Bariery termiczne ograniczają przejście ciepła na sąsiednie ogniwa: mniej ogniw w procesie, mniej gazu.',
  gas: 'Detekcja gazu z wentylacją (lub odciążeniem wybuchowym) usuwa palną atmosferę, zanim ktoś otworzy drzwi.',
  plan: 'Procedura: nie wchodzić, dopóki gazy nie zostaną usunięte i zmierzone; plan zna straż.',
};

const TIMELINE = [
  {time: '16:54:30', text: 'BMS: napięcie ogniwa spada z 4,06 do 3,82 V'},
  {time: 'ok. 16:55:20', text: 'system ochrony otwiera wyłączniki DC i styczniki AC'},
  {time: 'ok. 17:00', text: 'dym z kontenera'},
  {time: 'ok. 3 h później', text: 'otwarcie drzwi, deflagracja, 4 strażaków ciężko rannych', hot: true},
];

const W = 800;
const H = 385;
const PATH_Y = 166;
const X0 = 150;
const STEP = 100;
// Decorative holes that do not line up (y offsets per slice)
const OTHER_HOLES = [
  [96, 232],
  [214, 110],
  [104, 236],
  [224, 92],
  [120, 212],
  [88, 238],
];

/** Swiss cheese model of McMicken 2019: which layers failed, and what one added layer would change */
export default function SwissCheese({title, source}) {
  const [added, setAdded] = useState('none');
  const uid = useSvgId();
  const blockedAt = LAYERS.findIndex((l) => l.add === added);
  const arrowEnd = blockedAt >= 0 ? X0 + blockedAt * STEP - 30 : 704;

  return (
    <VizFrame
      title={title}
      source={source}
      note="Model poglądowy: pokazuje logikę warstw, a nie wynik dochodzenia."
      controls={
        <ToggleGroup
          label="Dodaj jedną warstwę"
          value={added}
          onChange={setAdded}
          options={[
            {value: 'none', label: 'Jak w 2019 r.'},
            {value: 'thermal', label: '+ bariery termiczne'},
            {value: 'gas', label: '+ detekcja gazu i wentylacja'},
            {value: 'plan', label: '+ procedura wejścia'},
          ]}
        />
      }>
      <svg
        className={s.svg}
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label={`Model sera szwajcarskiego dla McMicken: ${LAYERS.map((l) => `${l.name}: ${l.status}`).join('; ')}`}>
        <defs>
          <marker
            id={`arr-${uid}`}
            viewBox="0 0 10 10"
            refX="7"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto">
            <path d="M0,0 L10,5 L0,10 z" fill="var(--viz-critical)" />
          </marker>
        </defs>

        {/* hazard and consequence */}
        <rect
          x="2"
          y="128"
          width="92"
          height="76"
          rx="8"
          fill="var(--viz-critical-tint)"
          stroke="var(--viz-critical)"
        />
        <Lines
          x={48}
          y={152}
          lines={['Wada', 'wewnętrzna', 'ogniwa']}
          lh={16}
          anchor="middle"
          size={12.5}
          weight={650}
        />
        <rect
          x="706"
          y="118"
          width="92"
          height="96"
          rx="8"
          fill={blockedAt >= 0 ? 'var(--viz-hover)' : 'var(--viz-critical-tint)'}
          stroke={blockedAt >= 0 ? 'var(--viz-axis)' : 'var(--viz-critical)'}
          strokeDasharray={blockedAt >= 0 ? '5 4' : undefined}
        />
        <Lines
          x={752}
          y={blockedAt >= 0 ? 150 : 138}
          lines={
            blockedAt >= 0
              ? ['ścieżka', 'przerwana']
              : ['Deflagracja', 'po ok. 3 h:', '4 strażaków', 'ciężko', 'rannych']
          }
          lh={15}
          anchor="middle"
          size={12}
          weight={650}
        />

        {/* trajectory through the aligned holes */}
        <line
          x1="96"
          x2={arrowEnd}
          y1={PATH_Y}
          y2={PATH_Y}
          stroke="var(--viz-critical)"
          strokeWidth="3"
          markerEnd={`url(#arr-${uid})`}
          className={clsx(s.flow)}
        />
        {blockedAt >= 0 && (
          <text
            x={arrowEnd + 2}
            y={PATH_Y - 26}
            textAnchor="middle"
            fontSize="20"
            fontWeight="700"
            style={{fill: 'var(--viz-critical)'}}>
            ✕
          </text>
        )}
        {LAYERS.map((layer, i) => {
          const x = X0 + i * STEP;
          const isAdded = layer.add === added;
          const missing = layer.missing && !isAdded;
          const face = `${x - 22},72 ${x + 22},54 ${x + 22},262 ${x - 22},280`;
          const side = `${x + 22},54 ${x + 32},60 ${x + 32},268 ${x + 22},262`;
          const [h1, h2] = OTHER_HOLES[i];
          return (
            <g key={layer.name}>
              <mask id={`m-${uid}-${i}`} maskUnits="userSpaceOnUse" x="0" y="0" width={W} height={H}>
                <rect x="0" y="0" width={W} height={H} fill="white" />
                <ellipse cx={x} cy={h1} rx="7" ry="11" fill="black" />
                <ellipse cx={x + 2} cy={h2} rx="6" ry="9" fill="black" />
                {!isAdded && <ellipse cx={x} cy={PATH_Y} rx="10" ry="17" fill="black" />}
              </mask>
              {!missing && (
                <polygon
                  points={side}
                  fill="var(--viz-cheese-edge)"
                  opacity="0.8"
                  mask={`url(#m-${uid}-${i})`}
                />
              )}
              <polygon
                points={face}
                fill={missing ? 'none' : 'var(--viz-cheese)'}
                stroke={missing ? 'var(--viz-muted)' : 'var(--viz-cheese-edge)'}
                strokeDasharray={missing ? '6 5' : undefined}
                strokeWidth="1.5"
                mask={missing ? undefined : `url(#m-${uid}-${i})`}
              />
              {!missing && (
                <>
                  <ellipse cx={x} cy={h1} rx="7" ry="11" fill="none" stroke="var(--viz-cheese-edge)" />
                  <ellipse cx={x + 2} cy={h2} rx="6" ry="9" fill="none" stroke="var(--viz-cheese-edge)" />
                  {!isAdded && (
                    <ellipse cx={x} cy={PATH_Y} rx="10" ry="17" fill="none" stroke="var(--viz-cheese-edge)" />
                  )}
                </>
              )}
              <Lines
                x={x}
                y={305}
                lines={wrap(layer.name, 14)}
                lh={15}
                anchor="middle"
                size={12.5}
                weight={650}
              />
              <Lines
                x={x}
                y={305 + wrap(layer.name, 14).length * 15 + 4}
                lines={wrap(
                  isAdded ? '✓ dodana' : `${layer.kind === 'warning' ? '!' : '✕'} ${layer.status}`,
                  15,
                )}
                lh={14}
                anchor="middle"
                size={12}
                fill={
                  isAdded
                    ? 'var(--viz-good-ink)'
                    : layer.missing || layer.kind === 'critical'
                      ? 'var(--viz-critical-ink)'
                      : 'var(--viz-ink-2)'
                }
              />
            </g>
          );
        })}
      </svg>
      <div className={s.readout} aria-live="polite">
        {added === 'none' ? (
          <span>
            DNV GL: pięć czynników naraz. Każda dziura osobno nie spowodowałaby wypadku.{' '}
            <strong>Którą jedną warstwę dodalibyście?</strong>
          </span>
        ) : (
          <>
            <Badge kind="good">ścieżka przerwana</Badge>
            <span>{ADDED[added]} Warunek: warstwa skuteczna, niezależna i audytowalna.</span>
          </>
        )}
      </div>
      <ol className={s.timeline}>
        {TIMELINE.map((t) => (
          <li key={t.time} className={clsx(t.hot && s.timelineHot)}>
            <strong>{t.time}</strong>
            {t.text}
          </li>
        ))}
      </ol>
    </VizFrame>
  );
}
