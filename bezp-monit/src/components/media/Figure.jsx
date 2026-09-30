import React, {useState} from 'react';
import clsx from 'clsx';
import s from './media.module.css';

/**
 * Picture with attribution. Use only for freely licensed images
 * (CC0, CC BY, CC BY-SA, public domain, Unsplash/Pexels licence) or own
 * material; anything else goes into <MediaLink>.
 *
 * src:        imported local file (preferred) or URL
 * alt:        Polish description of what the picture shows (required)
 * caption:    one sentence: what the student should notice
 * author, license, licenseUrl, source, sourceUrl: attribution
 * size:       'wide' (default) | 'half' | 'third'
 */
export default function Figure({
  src,
  alt,
  caption,
  author,
  license,
  licenseUrl,
  source,
  sourceUrl,
  size = 'wide',
}) {
  const [failed, setFailed] = useState(false);
  const url = typeof src === 'object' && src !== null ? src.default ?? src.src ?? src : src;
  const own = author === 'własne' || license === 'własne';

  return (
    <figure className={clsx(s.figure, s[size])}>
      {failed ? (
        <div className={s.missing} role="img" aria-label={alt}>
          Nie udało się wczytać obrazu: {alt}
        </div>
      ) : (
        <img src={url} alt={alt} loading="lazy" decoding="async" onError={() => setFailed(true)} />
      )}
      {(caption || author || license || source) && (
        <figcaption className={s.caption}>
          {caption}
          <span className={s.attribution}>
            {own ? (
              'Materiał własny'
            ) : (
              <>
                {author && <>Fot. {author}</>}
                {license && (
                  <>
                    {author ? ', ' : ''}
                    {licenseUrl ? (
                      <a href={licenseUrl} target="_blank" rel="noopener noreferrer">
                        {license}
                      </a>
                    ) : (
                      license
                    )}
                  </>
                )}
                {(source || sourceUrl) && (
                  <>
                    {author || license ? ', ' : ''}źródło:{' '}
                    {sourceUrl ? (
                      <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
                        {source || sourceUrl}
                      </a>
                    ) : (
                      source
                    )}
                  </>
                )}
              </>
            )}
          </span>
        </figcaption>
      )}
    </figure>
  );
}
