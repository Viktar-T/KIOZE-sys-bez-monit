import React, {useEffect, useRef, useState} from 'react';
import clsx from 'clsx';
import s from './viz.module.css';
import {VizFrame} from './Frame';
import {num, useReveal} from './util';

const COLORS = ['var(--viz-s1)', 'var(--viz-s2)', 'var(--viz-s3)', 'var(--viz-s4)'];

/**
 * 10 × 10 waffle: one square = 1%. Categories get categorical colours in a
 * fixed order; `unknown: true` draws the category in neutral grey.
 *
 * categories: [{label, value (%), unknown?}]
 * funnel: [{label, value}] — optional bars above (e.g. all events → caused by PV)
 */
export default function Waffle({title, source, note, categories, funnel}) {
  const ref = useRef(null);
  const reveal = useReveal(ref);
  const [hover, setHover] = useState(null);
  const [settled, setSettled] = useState(false);
  useEffect(() => {
    if (reveal !== 'shown') {
      return undefined;
    }
    const timer = setTimeout(() => setSettled(true), 1800);
    return () => clearTimeout(timer);
  }, [reveal]);

  // Largest-remainder rounding so the squares add up to exactly 100
  const floors = categories.map((c) => Math.floor(c.value));
  let rest = 100 - floors.reduce((a, b) => a + b, 0);
  const order = categories
    .map((c, i) => ({i, frac: c.value - Math.floor(c.value)}))
    .sort((a, b) => b.frac - a.frac);
  const counts = [...floors];
  for (const {i} of order) {
    if (rest <= 0) {
      break;
    }
    counts[i] += 1;
    rest -= 1;
  }

  let colorIndex = 0;
  const colors = categories.map((c) =>
    c.unknown ? 'var(--viz-axis)' : COLORS[colorIndex++ % COLORS.length],
  );
  const cells = counts.flatMap((n, i) => Array.from({length: n}, () => i));
  const funnelMax = funnel ? Math.max(...funnel.map((f) => f.value)) : 1;

  return (
    <VizFrame
      title={title}
      source={source}
      note={note}
      table={{
        columns: ['Kategoria', 'Udział'],
        rows: categories.map((c) => [c.label, `${num(c.value, 1)}%`]),
      }}>
      {funnel && (
        <div className={s.funnel}>
          {funnel.map((f, i) => (
            <div key={f.label} className={s.funnelRow}>
              <div
                className={clsx(s.funnelBar, i === 0 && s.funnelBarMuted)}
                style={{width: `${(f.value / funnelMax) * 45}%`}}
              />
              <span>
                <strong>{num(f.value)}</strong> {f.label}
              </span>
            </div>
          ))}
        </div>
      )}
      <div className={s.waffleWrap}>
        <div
          ref={ref}
          className={clsx(s.waffle, reveal && s[reveal])}
          role="img"
          aria-label={categories.map((c) => `${c.label}: ${num(c.value, 1)}%`).join('; ')}>
          {cells.map((cat, i) => (
            <span
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              className={clsx(s.waffleCell, s.pop, hover !== null && hover !== cat && s.dim)}
              style={{
                background: colors[cat],
                transitionDelay: reveal === 'shown' && !settled ? `${i * 12}ms` : undefined,
              }}
            />
          ))}
        </div>
        <div className={s.waffleLegend}>
          {categories.map((c, i) => (
            <div
              key={c.label}
              className={s.waffleRow}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}>
              <span className={s.swatch} style={{background: colors[i]}} />
              <span className={s.waffleValue}>{num(c.value, 1)}%</span>
              <span>{c.label}</span>
            </div>
          ))}
        </div>
      </div>
    </VizFrame>
  );
}
