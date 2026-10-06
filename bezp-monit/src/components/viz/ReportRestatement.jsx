import React, {useState} from 'react';
import s from './viz.module.css';
import {Badge, ToggleGroup, VizFrame} from './Frame';
import {num} from './util';

// Two G+ reports side by side (Energy Institute 2025 and 2026 releases, W1,
// part 1, slide "Wiatr: skąd brać wiarygodne dane"). The toggle shows why TRIR
// from two reports must not be compared: the later report restates 2024.

const R2024 = {hours: 79, trir: 2.93, lwdi2024: 99, fatal: 1};
const R2025 = {hours: 69.2, hoursChange: 5, trir: 3.48, trirChange: 4, lwdi2024: 95, fatal: 0};

const grid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 1fr))',
  gap: '0.8rem',
};
const row = {display: 'flex', justifyContent: 'space-between', gap: '0.8rem', padding: '0.18rem 0.3rem'};
const hot = {...row, background: 'var(--viz-warning-tint)', borderRadius: '4px'};

function Row({label, value, highlight}) {
  return (
    <div style={highlight ? hot : row}>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

/** Comparing a rate across two reports versus inside one report (restated baseline) */
export default function ReportRestatement({title, source}) {
  const [mode, setMode] = useState('jeden');
  const across = mode === 'dwa';
  const naive = Math.round((R2025.trir / R2024.trir - 1) * 100);

  return (
    <VizFrame
      title={title}
      source={source}
      controls={
        <ToggleGroup
          label="Porównanie TRIR"
          value={mode}
          onChange={setMode}
          options={[
            {value: 'dwa', label: 'Między dwoma raportami'},
            {value: 'jeden', label: 'W jednym raporcie'},
          ]}
        />
      }
      note="TRIR: wskaźnik wszystkich rejestrowanych urazów; LWDI: urazy z utratą dni pracy. Tylko morskie farmy wiatrowe i tylko członkowie G+.">
      <div style={grid}>
        <div className={s.panel}>
          <div className={s.panelTitle}>Raport G+ za 2024 r. (12.06.2025)</div>
          <Row label="przepracowane godziny" value={`${num(R2024.hours)} mln`} highlight={across} />
          <Row label="TRIR 2024" value={num(R2024.trir, 2, 2)} highlight={across} />
          <Row label="LWDI w 2024 r." value={num(R2024.lwdi2024)} highlight={across} />
          <Row label="wypadki śmiertelne" value={num(R2024.fatal)} />
        </div>
        <div className={s.panel}>
          <div className={s.panelTitle}>Raport G+ za 2025 r. (11.06.2026)</div>
          <Row
            label="przepracowane godziny"
            value={`${num(R2025.hours, 1)} mln (+${num(R2025.hoursChange)}% wobec 2024 r.)`}
            highlight={across}
          />
          <Row
            label="TRIR 2025"
            value={across ? num(R2025.trir, 2, 2) : `${num(R2025.trir, 2, 2)} (+${num(R2025.trirChange)}% wobec 2024 r.)`}
            highlight
          />
          <Row label="LWDI w 2024 r. (przeliczone)" value={num(R2025.lwdi2024)} highlight={across} />
          <Row label="wypadki śmiertelne" value={num(R2025.fatal)} />
        </div>
      </div>
      <div className={s.readout} aria-live="polite" style={{alignItems: 'center'}}>
        {across ? (
          <>
            <Badge kind="critical">porównanie nieuprawnione</Badge>
            <span>
              {num(R2024.trir, 2, 2)} → {num(R2025.trir, 2, 2)} daje <strong>+{num(naive)}%</strong>, ale raporty podają
              dla 2024 r. różne dane: {num(R2024.lwdi2024)} i {num(R2025.lwdi2024)} LWDI; {num(R2025.hours, 1)} mln
              godzin w 2025 r. to +{num(R2025.hoursChange)}% wobec 2024 r., choć raport za 2024 r. podawał{' '}
              {num(R2024.hours)} mln.
            </span>
          </>
        ) : (
          <>
            <Badge kind="good">porównanie poprawne</Badge>
            <span>
              Zmianę TRIR bierzemy z jednego raportu, który liczy oba lata tak samo: <strong>+{num(R2025.trirChange)}%</strong>.
            </span>
          </>
        )}
      </div>
    </VizFrame>
  );
}
