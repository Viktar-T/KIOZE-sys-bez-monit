import {useCallback, useEffect, useId, useRef, useState} from 'react';

// Number formatting in Polish: decimal comma, non-breaking thousands separator.

const SUPERSCRIPT = {
  '-': '⁻',
  0: '⁰',
  1: '¹',
  2: '²',
  3: '³',
  4: '⁴',
  5: '⁵',
  6: '⁶',
  7: '⁷',
  8: '⁸',
  9: '⁹',
};

export const sup = (n) =>
  String(n)
    .split('')
    .map((c) => SUPERSCRIPT[c] ?? c)
    .join('');

/** 1234,5 → "1234,5"; 77331 → "77 331" */
export function num(x, digits = 0, minDigits = 0) {
  return x.toLocaleString('pl-PL', {
    minimumFractionDigits: minDigits,
    maximumFractionDigits: digits,
  });
}

/** 0.000423 → "4,23 × 10⁻⁴"; 1e-4 → "10⁻⁴" */
export function sci(x, sig = 3) {
  if (x === 0) {
    return '0';
  }
  let e = Math.floor(Math.log10(Math.abs(x)));
  let m = Number((x / 10 ** e).toFixed(sig - 1));
  if (Math.abs(m) >= 10) {
    e += 1;
    m = Number((x / 10 ** e).toFixed(sig - 1));
  }
  const power = `10${sup(e)}`;
  return m === 1 ? power : `${num(m, sig - 1)} × ${power}`;
}

/** Decimals for "normal" magnitudes, scientific notation for small ones */
export function auto(x, sig = 3) {
  const a = Math.abs(x);
  if (a === 0) {
    return '0';
  }
  if (a >= 0.01 && a < 1e5) {
    const digits = Math.max(0, sig - 1 - Math.floor(Math.log10(a)));
    return num(x, digits);
  }
  return sci(x, sig);
}

export const pct = (x, digits = 0) => `${num(x * 100, digits)}%`;

/** SIL band for a low-demand PFDavg (IEC 61508-1, tab. 2) */
export function silBand(pfd) {
  if (pfd >= 0.1) {
    return {sil: 0, label: 'poniżej SIL 1 (RRF ≤ 10)'};
  }
  if (pfd >= 1e-2) {
    return {sil: 1, label: 'SIL 1'};
  }
  if (pfd >= 1e-3) {
    return {sil: 2, label: 'SIL 2'};
  }
  if (pfd >= 1e-4) {
    return {sil: 3, label: 'SIL 3'};
  }
  if (pfd >= 1e-5) {
    return {sil: 4, label: 'SIL 4'};
  }
  return {sil: 5, label: 'poza SIL 4: zmienić projekt'};
}

/** Linear scale */
export const scale = (d0, d1, r0, r1) => (v) => r0 + ((v - d0) / (d1 - d0)) * (r1 - r0);

/** Log10 scale */
export const logScale = (d0, d1, r0, r1) => {
  const l0 = Math.log10(d0);
  const l1 = Math.log10(d1);
  return (v) => r0 + ((Math.log10(v) - l0) / (l1 - l0)) * (r1 - r0);
};

export function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
}

/**
 * True once the element has been on screen. In presentation mode hidden
 * slides are display:none, so the observer fires when the slide is shown.
 */
export function useInView(ref, threshold = 0.2) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      {threshold},
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref, threshold]);
  return inView;
}

/**
 * Entrance animation state: '' on the server and without JS (content fully
 * visible), 'pending' after mount until the element is on screen, then
 * 'shown'. Reduced-motion users always get ''.
 */
export function useReveal(ref) {
  const [state, setState] = useState('');
  const inView = useInView(ref);
  useEffect(() => {
    if (!prefersReducedMotion()) {
      setState((s) => (s === '' ? 'pending' : s));
    }
  }, []);
  useEffect(() => {
    if (inView) {
      setState((s) => (s === 'pending' ? 'shown' : s));
    }
  }, [inView]);
  return state;
}

/** Tween a number towards `target` (for bars that change between states) */
export function useTween(target, duration = 600) {
  const [value, setValue] = useState(target);
  const fromRef = useRef(target);
  const valueRef = useRef(target);
  valueRef.current = value;
  useEffect(() => {
    if (prefersReducedMotion()) {
      setValue(target);
      return undefined;
    }
    fromRef.current = valueRef.current;
    const from = fromRef.current;
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - p) ** 3;
      setValue(from + (target - from) * eased);
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return value;
}

/** Tooltip positioned inside a relative wrapper */
export function useTip() {
  const wrapRef = useRef(null);
  const [tip, setTip] = useState(null);
  const show = useCallback((event, content) => {
    const wrap = wrapRef.current;
    if (!wrap) {
      return;
    }
    const box = wrap.getBoundingClientRect();
    let x;
    let y;
    if (typeof event.clientX === 'number' && event.type !== 'focus') {
      x = event.clientX - box.left;
      y = event.clientY - box.top;
    } else {
      const target = event.currentTarget.getBoundingClientRect();
      x = target.left + target.width / 2 - box.left;
      y = target.top - box.top;
    }
    setTip({x, y, width: box.width, content});
  }, []);
  const hide = useCallback(() => setTip(null), []);
  return {wrapRef, tip, show, hide};
}

/** Smooth SVG path through points (Catmull-Rom → cubic Bézier) */
export function smoothPath(points) {
  if (points.length < 2) {
    return '';
  }
  let d = `M${points[0][0]},${points[0][1]}`;
  for (let i = 0; i < points.length - 1; i += 1) {
    const p0 = points[i - 1] ?? points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] ?? p2;
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C${c1x.toFixed(1)},${c1y.toFixed(1)} ${c2x.toFixed(1)},${c2y.toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`;
  }
  return d;
}

/** Split a label into lines of at most `max` characters (for SVG text) */
export function wrap(text, max = 22) {
  const words = String(text).split(' ');
  const lines = [];
  let line = '';
  for (const w of words) {
    if (line && (line + ' ' + w).length > max) {
      lines.push(line);
      line = w;
    } else {
      line = line ? `${line} ${w}` : w;
    }
  }
  if (line) {
    lines.push(line);
  }
  return lines;
}

/** useId() made safe for SVG url(#…) references */
export function useSvgId() {
  return `v${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
}

/** "Nice" tick step (1, 2, 2.5, 5 × 10ⁿ) for about `count` intervals */
export function niceStep(max, count = 4) {
  const raw = max / count;
  const mag = 10 ** Math.floor(Math.log10(raw));
  const n = raw / mag;
  return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 2.5 ? 2.5 : n <= 5 ? 5 : 10) * mag;
}

/** Ticks 0, step, 2·step … up to the first value ≥ max */
export function niceTicks(max, count = 4) {
  const step = niceStep(max, count);
  const top = Math.ceil(max / step - 1e-9) * step;
  const ticks = [];
  for (let i = 0; i * step <= top + step * 1e-9; i += 1) {
    ticks.push(Number((i * step).toPrecision(12)));
  }
  return ticks;
}
