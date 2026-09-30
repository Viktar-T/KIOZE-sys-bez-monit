import React from 'react';
import s from './media.module.css';

/**
 * Material for self-study: collapsed on the page, never shown in
 * presentation mode. Use for pictures, videos or tables that are useful
 * but not projected.
 */
export default function Extra({title = 'materiały dodatkowe', children}) {
  return (
    <details className={s.extra}>
      <summary>Dla chętnych: {title}</summary>
      <div className={s.extraBody}>{children}</div>
    </details>
  );
}
