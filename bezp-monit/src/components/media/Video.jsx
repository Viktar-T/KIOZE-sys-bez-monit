import React, {useState} from 'react';
import clsx from 'clsx';
import s from './media.module.css';

/** "1:05" | "1:02:03" | 65 → seconds */
export function toSeconds(t) {
  if (t === undefined || t === null || t === '') {
    return undefined;
  }
  if (typeof t === 'number') {
    return Math.max(0, Math.round(t));
  }
  const parts = String(t).split(':').map(Number);
  if (parts.some(Number.isNaN)) {
    return undefined;
  }
  return parts.reduce((acc, p) => acc * 60 + p, 0);
}

function clock(sec) {
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const ss = String(sec % 60).padStart(2, '0');
  return h > 0 ? `${h}:${String(m).padStart(2, '0')}:${ss}` : `${m}:${ss}`;
}

/**
 * Embedded video that loads nothing from the provider until clicked
 * (privacy, page speed). Plays the fragment start–end if given.
 *
 * youtube: video id | vimeo: video id | src: any embed URL
 * title, channel, duration (of the whole video, e.g. "12:34"), lang
 * start, end: "m:ss" or seconds
 * watched:    false until the lecturer has watched the fragment; shows a
 *             badge in `npm start` only (students never see it)
 * poster:     preview image URL. Used on review pages; lecture pages leave it
 *             out so that nothing loads from the provider before a click.
 */
export default function Video({
  youtube,
  vimeo,
  src,
  title,
  channel,
  duration,
  lang,
  start,
  end,
  watched = true,
  poster,
}) {
  const [playing, setPlaying] = useState(false);
  const from = toSeconds(start);
  const to = toSeconds(end);

  let embed = src;
  let pageUrl = src;
  if (youtube) {
    const q = new URLSearchParams({autoplay: '1', rel: '0', modestbranding: '1'});
    if (from) {
      q.set('start', String(from));
    }
    if (to) {
      q.set('end', String(to));
    }
    embed = `https://www.youtube-nocookie.com/embed/${youtube}?${q}`;
    pageUrl = `https://www.youtube.com/watch?v=${youtube}${from ? `&t=${from}s` : ''}`;
  } else if (vimeo) {
    embed = `https://player.vimeo.com/video/${vimeo}?autoplay=1${from ? `#t=${from}s` : ''}`;
    pageUrl = `https://vimeo.com/${vimeo}${from ? `#t=${from}s` : ''}`;
  }
  const provider = youtube ? 'YouTube' : vimeo ? 'Vimeo' : 'zewnętrzny serwis';
  const fragment =
    from !== undefined || to !== undefined
      ? `fragment ${clock(from ?? 0)}–${to !== undefined ? clock(to) : 'koniec'}`
      : 'cały film';

  return (
    <figure className={s.video}>
      <div className={s.player}>
        {playing ? (
          <iframe
            src={embed}
            title={title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : (
          <button
            type="button"
            className={clsx(s.facade, poster && s.poster)}
            style={poster ? {backgroundImage: `url("${poster}")`} : undefined}
            onClick={() => setPlaying(true)}
            aria-label={`Odtwórz film: ${title}`}>
            <span>
              <span className={s.facadeTitle}>{title}</span>
              <span className={s.facadeMeta}>
                <br />
                {channel ? `${channel} · ` : ''}
                {fragment}
                {duration ? ` (film: ${duration})` : ''}
                {lang ? ` · ${lang}` : ''}
              </span>
            </span>
            <span className={s.play} aria-hidden="true" />
            <span className={s.facadeNote}>Kliknij, aby odtworzyć. Film wczyta się z serwisu {provider}.</span>
          </button>
        )}
      </div>
      <figcaption className={s.videoFoot}>
        <span>
          Źródło: {channel ?? provider}, {provider}
        </span>
        {pageUrl && (
          <a href={pageUrl} target="_blank" rel="noopener noreferrer">
            Otwórz w serwisie {provider}
          </a>
        )}
      </figcaption>
      {!watched && process.env.NODE_ENV === 'development' && (
        <span className={s.unwatched}>
          Nieobejrzany: obejrzyj fragment przed zajęciami, potem usuń <code>{'watched={false}'}</code>
        </span>
      )}
    </figure>
  );
}
