import React, {useState} from 'react';
import s from './viz.module.css';
import {Badge, Check, Lines, VizFrame} from './Frame';
import {useSvgId, wrap} from './util';

const W = 800;
const H = 440;
const KX = 400;
const KY = 222;
const KR = 58;
const TOP_Y = 120;
const BOT_Y = 322;

const STATUS = {
  good: {fill: 'var(--viz-good)', icon: '✓', label: 'skuteczna'},
  warning: {fill: 'var(--viz-warning)', icon: '!', label: 'osłabiona'},
  critical: {fill: 'var(--viz-critical)', icon: '✕', label: 'nieskuteczna'},
};

function Box({x, y, w, h, text, max = 18, tone = 'neutral', dashed}) {
  const fill = {
    neutral: 'var(--viz-hover)',
    critical: 'var(--viz-critical-tint)',
    warning: 'var(--viz-warning-tint)',
    good: 'var(--viz-good-tint)',
  }[tone];
  const stroke = {
    neutral: 'var(--viz-axis)',
    critical: 'var(--viz-critical)',
    warning: 'var(--viz-warning)',
    good: 'var(--viz-good)',
  }[tone];
  const lines = wrap(text, max);
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="8"
        fill={fill}
        stroke={stroke}
        strokeDasharray={dashed ? '5 4' : undefined}
      />
      <Lines
        x={x + w / 2}
        y={y + h / 2 - ((lines.length - 1) * 14) / 2 + 4}
        lines={lines}
        lh={14}
        anchor="middle"
        size={12}
        weight={600}
      />
    </g>
  );
}

function Barrier({x, y, status, label, below}) {
  const st = STATUS[status];
  const lines = wrap(label, 14);
  return (
    <g>
      <rect
        x={x - 11}
        y={y - 30}
        width="22"
        height="60"
        rx="4"
        fill={st.fill}
        style={{transition: 'fill 0.3s ease'}}
      />
      <text x={x} y={y + 5} textAnchor="middle" fontSize="15" fontWeight="800" style={{fill: '#fff'}}>
        {st.icon}
      </text>
      <Lines
        x={x}
        y={below ? y + 48 : y - 36 - (lines.length - 1) * 14}
        lines={lines}
        lh={14}
        anchor="middle"
        size={11.5}
        weight={600}
      />
    </g>
  );
}

/** Bow-tie for the biogas gas holder, with barrier condition and a degradation factor */
export default function BowTie({title, source}) {
  const [frost, setFrost] = useState(false);
  const [protection, setProtection] = useState(true);
  const [bpcs, setBpcs] = useState(false);
  const uid = useSvgId();

  const b1 = bpcs ? 'critical' : 'good';
  const b2 = frost && !protection ? 'critical' : 'good';
  const open = b1 === 'critical' && b2 === 'critical';
  const dfActive = frost;

  const leftTop = [KX - KR * Math.cos(Math.PI / 6), KY - KR * Math.sin(Math.PI / 6)];
  const leftBot = [KX - KR * Math.cos(Math.PI / 6), KY + KR * Math.sin(Math.PI / 6)];
  const rightTop = [KX + KR * Math.cos(Math.PI / 6), KY - KR * Math.sin(Math.PI / 6)];
  const rightBot = [KX + KR * Math.cos(Math.PI / 6), KY + KR * Math.sin(Math.PI / 6)];

  return (
    <VizFrame
      title={title}
      source={source}
      controls={
        <>
          <Check label="Awaria pętli BPCS (pochodnia nie startuje)" checked={bpcs} onChange={setBpcs} />
          <Check label="Mróz" checked={frost} onChange={setFrost} />
          <Check label="Ochrona przed mrozem sprawna" checked={protection} onChange={setProtection} />
        </>
      }
      note={
        <span className={s.legend}>
          {Object.values(STATUS).map((st) => (
            <span key={st.label} className={s.legendItem}>
              <span className={s.swatch} style={{background: st.fill}} />
              {st.icon} bariera {st.label}
            </span>
          ))}
          <span>SCADA pokazuje stan barier, ale sama nie jest barierą.</span>
        </span>
      }>
      <svg
        className={s.svg}
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label={`Bow-tie zbiornika biogazu. Start pochodni: ${STATUS[b1].label}; zabezpieczenie nadciśnieniowe: ${STATUS[b2].label}.${open ? ' Ścieżka nadciśnienia otwarta.' : ''}`}>
        <defs>
          <marker
            id={`a-${uid}`}
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto">
            <path d="M0,0 L10,5 L0,10 z" fill="var(--viz-ink-2)" />
          </marker>
        </defs>

        {/* hazard */}
        <Box
          x={320}
          y={6}
          w={160}
          h={48}
          text="Zagrożenie: biogaz (CH₄, H₂S) w zbiorniku"
          max={24}
          tone="warning"
        />
        <line x1={KX} x2={KX} y1={54} y2={KY - KR} stroke="var(--viz-ink-2)" strokeWidth="1.5" />

        {/* paths */}
        <polyline
          points={`144,${TOP_Y} 300,${TOP_Y} ${leftTop.join(',')}`}
          fill="none"
          stroke={open ? 'var(--viz-critical)' : 'var(--viz-ink-2)'}
          strokeWidth={open ? 3 : 2}
          className={open ? s.flow : undefined}
        />
        <polyline
          points={`144,${BOT_Y} 300,${BOT_Y} ${leftBot.join(',')}`}
          fill="none"
          stroke="var(--viz-ink-2)"
          strokeWidth="2"
        />
        <polyline
          points={`${rightTop.join(',')} 500,${TOP_Y} 656,${TOP_Y}`}
          fill="none"
          stroke={open ? 'var(--viz-critical)' : 'var(--viz-ink-2)'}
          strokeWidth={open ? 3 : 2}
          markerEnd={`url(#a-${uid})`}
        />
        <polyline
          points={`${rightBot.join(',')} 500,${BOT_Y} 656,${BOT_Y}`}
          fill="none"
          stroke="var(--viz-ink-2)"
          strokeWidth="2"
          markerEnd={`url(#a-${uid})`}
        />

        {/* threats and consequences */}
        <Box
          x={4}
          y={TOP_Y - 30}
          w={140}
          h={60}
          text="Postój kogeneracji, gaz nadal powstaje"
          tone={open ? 'critical' : 'neutral'}
        />
        <Box x={4} y={BOT_Y - 30} w={140} h={60} text="Pobór gazu większy niż produkcja" />
        <Box x={656} y={TOP_Y - 30} w={140} h={60} text="Pożar lub wybuch" tone="critical" />
        <Box x={656} y={BOT_Y - 30} w={140} h={60} text="Zatrucie H₂S" tone="critical" />

        {/* prevention barriers */}
        <Barrier x={180} y={TOP_Y} status={b1} label="Automatyczny start pochodni" />
        <Barrier x={272} y={TOP_Y} status={b2} label="Zabezpieczenie nadciśnieniowe" />
        <Barrier x={225} y={BOT_Y} status="good" label="Zabezpieczenie podciśnieniowe" below />
        {/* mitigation barriers */}
        <Barrier x={578} y={TOP_Y} status="good" label="Eliminacja źródeł zapłonu w strefach Ex" />
        <Barrier x={578} y={BOT_Y} status="good" label="Stała detekcja gazu i ewakuacja" below />

        {/* degradation factor and its control */}
        <line x1={272} x2={272} y1={TOP_Y + 30} y2={172} stroke="var(--viz-ink-2)" strokeDasharray="4 3" />
        <Box
          x={176}
          y={172}
          w={150}
          h={46}
          text="Czynnik degradacji: zamarznięte zamknięcie hydrauliczne"
          max={24}
          tone={dfActive ? (protection ? 'warning' : 'critical') : 'neutral'}
          dashed
        />
        <line x1={251} x2={251} y1={218} y2={228} stroke="var(--viz-ink-2)" strokeDasharray="4 3" />
        <Box
          x={176}
          y={228}
          w={150}
          h={46}
          text="Kontrola degradacji: ochrona przed mrozem (TRAS 120)"
          max={24}
          tone={protection ? 'good' : 'critical'}
          dashed
        />

        {/* top event */}
        <circle
          cx={KX}
          cy={KY}
          r={KR}
          fill={open ? 'var(--viz-critical-tint)' : 'var(--viz-surface)'}
          stroke="var(--viz-ink)"
          strokeWidth="2.5"
        />
        <Lines
          x={KX}
          y={KY - 12}
          lines={['Niekontrolowane', 'uwolnienie', 'biogazu']}
          lh={15}
          anchor="middle"
          size={12.5}
          weight={700}
        />
        <text
          x={KX}
          y={KY + KR + 18}
          textAnchor="middle"
          fontSize="11"
          fontWeight="600"
          style={{fill: 'var(--viz-ink-2)'}}>
          ZDARZENIE SZCZYTOWE
        </text>
        <text x={150} y={H - 6} fontSize="12" style={{fill: 'var(--viz-muted)'}}>
          ← przyczyny i bariery zapobiegawcze
        </text>
        <text x={W - 4} y={H - 6} textAnchor="end" fontSize="12" style={{fill: 'var(--viz-muted)'}}>
          bariery ograniczające i skutki →
        </text>
      </svg>
      <div className={s.readout} aria-live="polite">
        {open ? (
          <>
            <Badge kind="critical">ścieżka otwarta</Badge>
            <span>
              Obie bariery zapobiegawcze na ścieżce nadciśnienia zawiodły: zostają tylko bariery ograniczające
              skutki.
            </span>
          </>
        ) : frost && protection ? (
          <>
            <Badge kind="good">degradacja opanowana</Badge>
            <span>Mróz działa, ale kontrola degradacji utrzymuje barierę w stanie sprawnym.</span>
          </>
        ) : (
          <span>Zaznacz „Mróz” i wyłącz ochronę przed mrozem, a potem dodaj awarię pętli BPCS.</span>
        )}
      </div>
    </VizFrame>
  );
}
