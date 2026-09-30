import React, {useId, useState} from 'react';
import clsx from 'clsx';
import s from './viz.module.css';

/**
 * Panel for one visualisation: title, optional controls, the chart and a
 * caption with the source. With `table` ({columns, rows}) a "Tabela" button
 * switches to the same data as a table (accessible twin of the chart).
 */
export function VizFrame({title, subtitle, controls, table, source, note, children, className}) {
  const [showTable, setShowTable] = useState(false);
  return (
    <figure className={clsx(s.frame, className)}>
      {(title || table) && (
        <div className={s.head}>
          <div>
            {title && <div className={s.title}>{title}</div>}
            {subtitle && <div className={s.subtitle}>{subtitle}</div>}
          </div>
          {table && (
            <button
              type="button"
              className={s.linkBtn}
              aria-pressed={showTable}
              onClick={() => setShowTable((v) => !v)}>
              {showTable ? 'Wykres' : 'Tabela'}
            </button>
          )}
        </div>
      )}
      {controls && <div className={s.controls}>{controls}</div>}
      {showTable && table ? <DataTable {...table} /> : children}
      {(note || source) && (
        <figcaption className={s.caption}>
          {note}
          {note && source ? ' ' : null}
          {source && <span>Źródło: {source}</span>}
        </figcaption>
      )}
    </figure>
  );
}

export function DataTable({columns, rows}) {
  return (
    <table className={s.dataTable}>
      <thead>
        <tr>
          {columns.map((c) => (
            <th key={c}>{c}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <tr key={i}>
            {row.map((cell, j) => (
              // eslint-disable-next-line react/no-array-index-key
              <td key={j}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/** One-sentence takeaway above the visual (assertion–evidence slide) */
export function Claim({children}) {
  return <p className={s.claim}>{children}</p>;
}

/** Small note: which original slide this visual replaces */
export function Replaces({children}) {
  return <p className={s.replaces}>{children}</p>;
}

/** Segmented buttons: options = [{value, label}] */
export function ToggleGroup({label, options, value, onChange}) {
  return (
    <div className={s.group} role="group" aria-label={label}>
      {options.map((o) => (
        <button
          key={String(o.value)}
          type="button"
          className={s.groupBtn}
          aria-pressed={o.value === value}
          onClick={() => onChange(o.value)}>
          {o.label}
        </button>
      ))}
    </div>
  );
}

export function Slider({label, min, max, step, value, onChange, format = String}) {
  const id = useId();
  return (
    <span className={s.slider}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      <output htmlFor={id} className={s.sliderValue}>
        {format(value)}
      </output>
    </span>
  );
}

export function Check({label, checked, onChange}) {
  return (
    <label className={s.check}>
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      {label}
    </label>
  );
}

export function Tip({tip}) {
  if (!tip) {
    return null;
  }
  const left = Math.min(Math.max(tip.x, 100), Math.max(100, tip.width - 100));
  return (
    <div className={s.tip} style={{left, top: tip.y}} role="status">
      {tip.content}
    </div>
  );
}

/** Multi-line SVG text; lines = array of strings */
export function Lines({x, y, lines, lh = 17, anchor = 'start', className, weight, size, fill}) {
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      className={className}
      fontWeight={weight}
      fontSize={size}
      style={fill ? {fill} : undefined}>
      {lines.map((line, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <tspan key={i} x={x} dy={i === 0 ? 0 : lh}>
          {line}
        </tspan>
      ))}
    </text>
  );
}

/** Status badge: kind = good | warning | critical | neutral */
export function Badge({kind = 'neutral', children}) {
  const cls = {
    good: s.badgeGood,
    warning: s.badgeWarning,
    critical: s.badgeCritical,
    neutral: s.badgeNeutral,
  }[kind];
  const icon = {good: '✓', warning: '!', critical: '✕', neutral: '•'}[kind];
  return (
    <span className={clsx(s.badge, cls)}>
      <span aria-hidden="true">{icon}</span>
      {children}
    </span>
  );
}

/** Step controls for diagrams built up during the lecture (0 … count-1) */
export function Stepper({step, count, onChange}) {
  return (
    <div className={s.stepper} role="group" aria-label="Krok po kroku">
      <button type="button" className={s.btn} onClick={() => onChange(0)}>
        ⟲ Od początku
      </button>
      <button type="button" className={s.btn} disabled={step <= 0} onClick={() => onChange(step - 1)}>
        ◀ Wstecz
      </button>
      <button type="button" className={s.btn} disabled={step >= count - 1} onClick={() => onChange(step + 1)}>
        Dalej ▶
      </button>
      <button
        type="button"
        className={s.btn}
        disabled={step >= count - 1}
        onClick={() => onChange(count - 1)}>
        Całość
      </button>
      <span aria-live="polite">
        krok {step + 1} z {count}
      </span>
    </div>
  );
}
