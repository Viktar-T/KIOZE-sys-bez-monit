import React, {useEffect, useRef, useState} from 'react';
import s from './viz.module.css';
import {VizFrame} from './Frame';
import {num, prefersReducedMotion, useInView} from './util';

/**
 * Large numbers that count up when the slide appears.
 *
 * items: [{label, value, decimals, unit, delta, note}]
 * share: {label, value (0–100), note} — optional part-of-whole bar
 */
export default function StatTiles({title, items, share, source}) {
  const ref = useRef(null);
  const inView = useInView(ref);
  // Server render and reduced motion: final numbers (progress = 1)
  const [progress, setProgress] = useState(1);
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    if (!prefersReducedMotion()) {
      setArmed(true);
      setProgress(0);
    }
  }, []);

  useEffect(() => {
    if (!armed || !inView) {
      return undefined;
    }
    const start = performance.now();
    const duration = 1400;
    let raf;
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      setProgress(1 - (1 - p) ** 3);
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [armed, inView]);

  return (
    <VizFrame title={title} source={source}>
      <div ref={ref} className={s.tiles}>
        {items.map((item) => (
          <div key={item.label} className={s.tile}>
            <div className={s.tileLabel}>{item.label}</div>
            <div className={s.tileValue}>
              {num(item.value * progress, item.decimals ?? 0, item.decimals ?? 0)}
              {item.unit && <span className={s.tileUnit}>{item.unit}</span>}
            </div>
            {item.delta && <div className={s.tileDelta}>▲ {item.delta}</div>}
            {item.note && <div className={s.tileNote}>{item.note}</div>}
          </div>
        ))}
      </div>
      {share && (
        <div className={s.share}>
          <div className={s.shareLabel}>
            <span>{share.label}</span>
            <strong>{num(share.value * progress, 0)}%</strong>
          </div>
          <div className={s.shareTrack} role="img" aria-label={`${share.label}: ${share.value}%`}>
            <div className={s.shareFill} style={{width: `${share.value * progress}%`}} />
          </div>
          {share.note && <div className={s.tileNote}>{share.note}</div>}
        </div>
      )}
    </VizFrame>
  );
}
