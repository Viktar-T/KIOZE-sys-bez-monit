import React from 'react';
import s from './media.module.css';

// Line icons (24 × 24, stroke = currentColor), no emoji: the course style avoids them
const ICONS = {
  zdjęcie: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="9" cy="10" r="1.8" />
      <path d="M4 17l5-5 4 4 3-3 4 4" />
    </>
  ),
  film: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M10 9v6l5-3z" />
    </>
  ),
  dokument: (
    <>
      <path d="M7 3h7l4 4v14H7z" />
      <path d="M14 3v4h4M10 12h5M10 15h5M10 18h3" />
    </>
  ),
  strona: (
    <>
      <path d="M14 4h6v6M20 4l-9 9" />
      <path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
    </>
  ),
};

const LABELS = {zdjęcie: 'Zobacz zdjęcie', film: 'Zobacz film', strona: 'Zobacz stronę', dokument: 'Zobacz dokument'};

/**
 * Link to material that may not be embedded (no free licence): press
 * photos, manufacturer images, fire-service reports. Nothing is copied.
 *
 * href, title, source (who published it), kind: 'zdjęcie' | 'film' | 'strona' | 'dokument',
 * note: one sentence on what the student will see there
 */
export default function MediaLink({href, title, source, kind = 'zdjęcie', note}) {
  return (
    <a className={s.linkCard} href={href} target="_blank" rel="noopener noreferrer">
      <svg
        className={s.linkIcon}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true">
        {ICONS[kind] ?? ICONS.strona}
      </svg>
      <span>
        <span className={s.linkTitle}>
          {LABELS[kind] ?? 'Zobacz'}: {title}
        </span>
        {note && <span className={s.linkMeta}> — {note}</span>}
        <br />
        <span className={s.linkMeta}>{source} · otwiera się w nowej karcie</span>
      </span>
    </a>
  );
}
