import React, {useState} from 'react';
import s from './viz.module.css';
import {Stepper, ToggleGroup, VizFrame} from './Frame';
import {useSvgId} from './util';

// Hazards of a wind turbine placed on a drawing of the turbine, built step by
// step. Facts of W1, part 1, slide "Wiatr: główne zagrożenia": BSEE 2024
// (Vineyard Wind), KP PSP Kętrzyn 2023 (Podławki), Katsaprakakis et al. 2021,
// IEA Wind Task 19 2022, EU-OSHA 2013. Height (ok. 100 m) and the 200 m zone
// are drawn to one scale; ice paths are schematic (distances: W7).

const W = 860;
const H = 470;
const GROUND = 420;
const PX_PER_M = 2.5; // 100 m = 250 px
const TOWER_X = 300;
const HUB = {x: 282, y: GROUND - 100 * PX_PER_M};
const BLADE = 115;
const ANGLES = [270, 30, 150]; // up, down-right, down-left (degrees, screen)
const NACELLE = {x: 290, y: HUB.y - 14, w: 80, h: 28};
const DIM_X = 640;

const STEPS = [
  {
    short: 'awaria łopaty',
    text: 'Awaria łopaty: Vineyard Wind 1 (USA), 13.07.2024. BSEE wstrzymał produkcję i budowę, nakazał zabezpieczenie dowodów; wyników dochodzenia nie opublikowano (stan IX 2026).',
  },
  {
    short: 'pożar gondoli',
    text: 'Pożar gondoli: szanse gaszenia z zewnątrz są bardzo małe. Podławki, 6.08.2023: pożar na wysokości ok. 100 m; PSP wyznaczyła strefę 200 m i pilnowała spadających płonących elementów.',
  },
  {
    short: 'piorun',
    text: 'Wyładowania atmosferyczne: obok zmęczenia materiału, erozji krawędzi natarcia i oblodzenia główna przyczyna uszkodzeń łopat; w badaniu z USA średnio raz na 8,4 roku na turbinę.',
  },
  {
    short: 'lód',
    text: 'Lód: odrzut z wirującego wirnika albo spadanie z zatrzymanej turbiny. IEA Wind Task 19 zaleca ocenę ryzyka dla konkretnej lokalizacji; odległości omówimy w W7.',
  },
  {
    short: 'drabiny, ewakuacja z gondoli',
    text: 'Praca na wysokości i ratownictwo: wielokrotne wchodzenie po drabinach, ciasne przestrzenie; EU-OSHA przytacza zalecenie windy w wieżach od 60 m i propozycję drugiej drogi ewakuacji.',
  },
  {
    short: 'łuk i porażenie przy pracach',
    text: 'Zagrożenia elektryczne: łuk i porażenie podczas prac w turbinie.',
  },
];

// Marker position and label position of each step
const MARKS = [
  {x: 222, y: 204, lx: 206, ly: 196, anchor: 'end'},
  {x: 386, y: NACELLE.y - 8, lx: 401, ly: NACELLE.y - 4, anchor: 'start'},
  {x: 302, y: HUB.y - BLADE + 4, lx: 317, ly: HUB.y - BLADE + 8, anchor: 'start'},
  {x: 168, y: 246, lx: 152, ly: 250, anchor: 'end'},
  {x: 320, y: 330, lx: 335, ly: 334, anchor: 'start'},
  {x: 320, y: 396, lx: 335, ly: 400, anchor: 'start'},
];

function bladePoints(angle) {
  const a = (angle * Math.PI) / 180;
  const ux = Math.cos(a);
  const uy = Math.sin(a);
  const px = -uy;
  const py = ux;
  const root = 6;
  const tip = 1.5;
  const x0 = HUB.x + ux * 8;
  const y0 = HUB.y + uy * 8;
  const x1 = HUB.x + ux * BLADE;
  const y1 = HUB.y + uy * BLADE;
  return [
    [x0 + px * root, y0 + py * root],
    [x1 + px * tip, y1 + py * tip],
    [x1 - px * tip, y1 - py * tip],
    [x0 - px * root, y0 - py * root],
  ]
    .map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`)
    .join(' ');
}

function tipOf(angle) {
  const a = (angle * Math.PI) / 180;
  return [HUB.x + Math.cos(a) * BLADE, HUB.y + Math.sin(a) * BLADE];
}

function Marker({n, mark, active, onSelect, label}) {
  return (
    <g
      className={s.focusable}
      role="button"
      tabIndex={0}
      aria-label={`${n}. ${label}`}
      onClick={onSelect}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onSelect()}>
      <circle
        cx={mark.x}
        cy={mark.y}
        r="11"
        fill={active ? 'var(--viz-ink)' : 'var(--viz-surface)'}
        stroke="var(--viz-ink)"
        strokeWidth="1.5"
      />
      <text
        x={mark.x}
        y={mark.y + 4.5}
        textAnchor="middle"
        fontSize="12"
        fontWeight="700"
        style={{fill: active ? 'var(--viz-surface)' : 'var(--viz-ink)'}}>
        {n}
      </text>
      <text x={mark.lx} y={mark.ly} textAnchor={mark.anchor} fontSize="14" fontWeight="600" className={s.halo}>
        {label}
      </text>
    </g>
  );
}

/** Wind turbine hazards on one drawing, step by step, with rotor state for ice */
export default function WindTurbineHazards({title, source}) {
  const [step, setStep] = useState(STEPS.length - 1);
  const [rotor, setRotor] = useState('pracuje');
  const uid = useSvgId();
  const shown = (i) => step >= i;
  const [lx, ly] = tipOf(150);
  const [ux, uy] = tipOf(270);
  const [rx, ry] = tipOf(30);
  const y60 = GROUND - 60 * PX_PER_M;
  const zoneEnd = TOWER_X + 200 * PX_PER_M;

  return (
    <VizFrame
      title={title}
      source={source}
      controls={
        <>
          <Stepper step={step} count={STEPS.length} onChange={setStep} />
          <ToggleGroup
            label="Wirnik"
            value={rotor}
            onChange={setRotor}
            options={[
              {value: 'pracuje', label: 'Wirnik pracuje'},
              {value: 'stoi', label: 'Wirnik zatrzymany (oblodzenie)'},
            ]}
          />
        </>
      }
      note="Wysokość ok. 100 m i strefa 200 m w jednej skali; tory lodu schematycznie, bez skali (odległości w W7). Kliknij numer, aby przejść do zagrożenia.">
      <svg
        className={s.svg}
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label="Turbina wiatrowa z zaznaczonymi zagrożeniami: 1 awaria łopaty, 2 pożar gondoli na wysokości ok. 100 m ze strefą 200 m, 3 piorun, 4 lód: odrzut z wirującego wirnika albo spadanie z zatrzymanego, 5 drabiny w wieży i ewakuacja z gondoli, winda zalecana od 60 m, 6 łuk i porażenie przy pracach w turbinie.">
        <defs>
          <marker id={`arr-${uid}`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="var(--viz-ink-2)" />
          </marker>
        </defs>

        {/* ground */}
        <line x1="20" x2={W - 20} y1={GROUND} y2={GROUND} stroke="var(--viz-axis)" strokeWidth="2" />

        {/* tower */}
        <polygon
          points={`${TOWER_X - 11},${GROUND} ${TOWER_X + 11},${GROUND} ${TOWER_X + 5},${NACELLE.y + NACELLE.h} ${TOWER_X - 5},${NACELLE.y + NACELLE.h}`}
          fill="var(--viz-surface)"
          stroke="var(--viz-ink-2)"
          strokeWidth="1.5"
        />
        {shown(4) &&
          Array.from({length: 18}, (_, i) => GROUND - 12 - i * 12).map((y) => (
            <line key={y} x1={TOWER_X - 3} x2={TOWER_X + 3} y1={y} y2={y} stroke="var(--viz-s1)" strokeWidth="1.5" />
          ))}

        {/* nacelle */}
        <rect
          x={NACELLE.x}
          y={NACELLE.y}
          width={NACELLE.w}
          height={NACELLE.h}
          rx="5"
          fill={shown(1) ? 'var(--viz-critical-tint)' : 'var(--viz-surface)'}
          stroke={shown(1) ? 'var(--viz-critical)' : 'var(--viz-ink-2)'}
          strokeWidth={shown(1) ? 2.5 : 1.5}
        />

        {/* blades and hub */}
        {ANGLES.map((a) => (
          <polygon
            key={a}
            points={bladePoints(a)}
            fill="var(--viz-surface)"
            stroke={shown(0) && a === 150 ? 'var(--viz-critical)' : 'var(--viz-ink-2)'}
            strokeWidth={shown(0) && a === 150 ? 2.5 : 1.5}
            strokeDasharray={shown(0) && a === 150 ? '5 3' : undefined}
          />
        ))}
        <circle cx={HUB.x} cy={HUB.y} r="8" fill="var(--viz-surface)" stroke="var(--viz-ink-2)" strokeWidth="1.5" />

        {/* 2: fire, falling burning parts, height and 200 m zone to scale */}
        {shown(1) && (
          <g>
            {[
              [384, 214],
              [398, 262],
              [380, 312],
              [405, 360],
            ].map(([x, y]) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="3.5" fill="var(--viz-critical)" />
            ))}
            <text x="414" y="304" fontSize="13" className={s.halo} style={{fill: 'var(--viz-ink-2)'}}>
              spadające płonące elementy
            </text>
            <line x1={NACELLE.x + NACELLE.w} x2={DIM_X + 8} y1={HUB.y} y2={HUB.y} stroke="var(--viz-grid)" strokeDasharray="3 3" />
            <line
              x1={DIM_X}
              x2={DIM_X}
              y1={GROUND - 2}
              y2={HUB.y + 2}
              stroke="var(--viz-ink-2)"
              strokeWidth="1.5"
              markerStart={`url(#arr-${uid})`}
              markerEnd={`url(#arr-${uid})`}
            />
            <text x={DIM_X + 10} y={(GROUND + HUB.y) / 2} fontSize="14" fontWeight="700" className={s.halo}>
              ok. 100 m
            </text>
            <line
              x1={TOWER_X}
              x2={zoneEnd}
              y1={GROUND + 14}
              y2={GROUND + 14}
              stroke="var(--viz-critical)"
              strokeWidth="2"
              markerStart={`url(#arr-${uid})`}
              markerEnd={`url(#arr-${uid})`}
            />
            <line x1={zoneEnd} x2={zoneEnd} y1={GROUND - 8} y2={GROUND + 20} stroke="var(--viz-critical)" strokeWidth="2" />
            <text x={(TOWER_X + zoneEnd) / 2} y={GROUND + 36} textAnchor="middle" fontSize="14" fontWeight="700">
              strefa 200 m wyznaczona przez PSP (Podławki, 2023)
            </text>
          </g>
        )}

        {/* 3: lightning to the upper blade tip */}
        {shown(2) && (
          <path
            d={`M${ux - 44},${uy - 52} L${ux - 20},${uy - 30} L${ux - 30},${uy - 26} L${ux - 3},${uy - 3}`}
            fill="none"
            stroke="var(--viz-s4)"
            strokeWidth="3"
            strokeLinejoin="round"
          />
        )}

        {/* 4: ice throw or ice fall */}
        {shown(3) && rotor === 'pracuje' && (
          <g>
            <path
              d={`M${lx},${ly} Q${lx - 90},${ly - 70} ${60},${GROUND - 4}`}
              fill="none"
              stroke="var(--viz-s1)"
              strokeWidth="2"
              strokeDasharray="6 5"
              markerEnd={`url(#arr-${uid})`}
            />
            {[
              [118, 214],
              [84, 290],
            ].map(([x, y]) => (
              <rect key={x} x={x - 4} y={y - 4} width="8" height="8" fill="var(--viz-s1)" transform={`rotate(20 ${x} ${y})`} />
            ))}
            <text x="30" y="370" fontSize="14" fontWeight="600" className={s.halo}>
              odrzut lodu z wirującego wirnika
            </text>
          </g>
        )}
        {shown(3) && rotor === 'stoi' && (
          <g>
            {[
              [lx, ly],
              [rx, ry],
            ].map(([x, y]) => (
              <g key={x}>
                <line
                  x1={x}
                  x2={x}
                  y1={y + 8}
                  y2={GROUND - 4}
                  stroke="var(--viz-s1)"
                  strokeWidth="2"
                  strokeDasharray="6 5"
                  markerEnd={`url(#arr-${uid})`}
                />
                <rect x={x - 4} y={y + 40} width="8" height="8" fill="var(--viz-s1)" transform={`rotate(20 ${x} ${y + 44})`} />
              </g>
            ))}
            <text x="30" y="370" fontSize="14" fontWeight="600" className={s.halo}>
              spadanie lodu z zatrzymanej turbiny
            </text>
          </g>
        )}

        {/* 5: 60 m mark */}
        {shown(4) && (
          <g>
            <line x1={TOWER_X - 22} x2={TOWER_X + 22} y1={y60} y2={y60} stroke="var(--viz-s1)" strokeWidth="2" />
            <text x={TOWER_X + 28} y={y60 + 4} fontSize="13" className={s.halo}>
              60 m: winda zalecana od tej wysokości
            </text>
          </g>
        )}

        {/* markers */}
        {STEPS.map((st, i) =>
          shown(i) ? (
            <Marker
              key={st.short}
              n={i + 1}
              mark={MARKS[i]}
              label={st.short}
              active={i === step}
              onSelect={() => setStep(i)}
            />
          ) : null,
        )}
      </svg>
      <div className={s.stepCaption} aria-live="polite">
        {step + 1}. {STEPS[step].text}
      </div>
    </VizFrame>
  );
}
