import React, {createContext, useCallback, useContext, useEffect, useMemo, useRef, useState} from 'react';
import clsx from 'clsx';
import s from './review.module.css';
import Video from '../media/Video';

/*
 * Review page for one lecture part. The propose skill writes it into
 * docs/propozycje/<lecture>/<part>.mdx (draft: true, never published);
 * the lecturer picks options here and copies the resulting YAML for the
 * apply skill.
 *
 * <Review part="wyklad-02-analiza-ryzyka/04-fta-eta-i-bow-tie">
 *   <ReviewSlide id="s1" title="…" now="what the slide has today">
 *     <Option id="A" kind="statyczna" summary="…">…visual…</Option>
 *     <Option id="B" kind="interaktywna" summary="…">…visual…</Option>
 *     <ImageCandidate id="IMG1" … />
 *     <VideoCandidate id="VID1" … />
 *   </ReviewSlide>
 * </Review>
 */

const ReviewContext = createContext(null);
const SlideContext = createContext(null);

const PLACES = [
  {value: null, label: 'pomiń'},
  {value: 'slajd', label: 'na slajd'},
  {value: 'dla_chetnych', label: 'dla chętnych'},
];

function storageKey(part) {
  return `review-choices:${part}`;
}

function toYaml(part, order, titles, choices) {
  const lines = [`czesc: ${part}`, 'slajdy:'];
  for (const id of order) {
    const c = choices[id] ?? {};
    const media = Object.entries(c.media ?? {});
    const onSlide = media.filter(([, place]) => place === 'slajd').map(([m]) => m);
    const extra = media.filter(([, place]) => place === 'dla_chetnych').map(([m]) => m);
    lines.push(`  ${id}:  # ${titles[id] ?? ''}`);
    lines.push(`    wizualizacja: ${c.visual ?? 'bez zmian'}`);
    lines.push(`    na_slajd: [${onSlide.join(', ')}]`);
    lines.push(`    dla_chetnych: [${extra.join(', ')}]`);
    if (c.note && c.note.trim()) {
      lines.push(`    uwagi: ${JSON.stringify(c.note.trim())}`);
    }
  }
  return `${lines.join('\n')}\n`;
}

export function Review({part, children}) {
  const [choices, setChoices] = useState({});
  const [order, setOrder] = useState([]);
  const [titles, setTitles] = useState({});
  const [showYaml, setShowYaml] = useState(false);
  const [copied, setCopied] = useState(false);
  const yamlRef = useRef(null);
  const loaded = useRef(false);

  // Restore choices after a reload (a convenience only)
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(storageKey(part));
      if (saved) {
        setChoices(JSON.parse(saved));
      }
    } catch {
      // storage unavailable: start empty
    }
    loaded.current = true;
  }, [part]);

  useEffect(() => {
    if (!loaded.current) {
      return;
    }
    try {
      window.localStorage.setItem(storageKey(part), JSON.stringify(choices));
    } catch {
      // ignore
    }
  }, [part, choices]);

  const register = useCallback((id, title) => {
    setOrder((o) => (o.includes(id) ? o : [...o, id]));
    setTitles((t) => ({...t, [id]: title}));
  }, []);

  const update = useCallback((slideId, fn) => {
    setChoices((all) => ({...all, [slideId]: fn(all[slideId] ?? {})}));
    setCopied(false);
  }, []);

  const yaml = useMemo(() => toYaml(part, order, titles, choices), [part, order, titles, choices]);
  const decided = order.filter((id) => choices[id]?.visual || Object.values(choices[id]?.media ?? {}).some(Boolean));

  const copy = async () => {
    setShowYaml(true);
    try {
      await navigator.clipboard.writeText(yaml);
      setCopied(true);
    } catch {
      requestAnimationFrame(() => yamlRef.current?.select());
    }
  };

  const value = useMemo(() => ({choices, register, update}), [choices, register, update]);

  return (
    <ReviewContext.Provider value={value}>
      {children}
      <div className={s.panel}>
        <div className={s.panelRow}>
          <strong>Wybory</strong>
          <span>
            {decided.length} z {order.length} slajdów z decyzją
          </span>
          <button type="button" className={clsx(s.panelBtn, s.panelPrimary)} onClick={copy}>
            {copied ? 'Skopiowano ✓' : 'Kopiuj wybory'}
          </button>
          <button type="button" className={s.panelBtn} onClick={() => setShowYaml((v) => !v)}>
            {showYaml ? 'Ukryj' : 'Pokaż'} tekst
          </button>
          <button
            type="button"
            className={s.panelBtn}
            onClick={() => {
              setChoices({});
              setCopied(false);
            }}>
            Wyczyść
          </button>
        </div>
        {showYaml && <textarea ref={yamlRef} className={s.yaml} readOnly value={yaml} aria-label="Wybory w formacie YAML" />}
      </div>
    </ReviewContext.Provider>
  );
}

export function ReviewSlide({id, title, now, children}) {
  const review = useContext(ReviewContext);
  const {register, update, choices} = review;
  useEffect(() => register(id, title), [register, id, title]);
  const mine = choices[id] ?? {};

  const items = React.Children.toArray(children);
  const options = items.filter((c) => c.type === Option);
  const images = items.filter((c) => c.type === ImageCandidate);
  const videos = items.filter((c) => c.type === VideoCandidate);
  const other = items.filter((c) => ![Option, ImageCandidate, VideoCandidate].includes(c.type));

  return (
    <SlideContext.Provider value={id}>
      <section className={s.slide} id={`przeglad-${id}`}>
        <div className={s.slideHead}>
          <span className={s.slideId}>{id}</span>
          <h2 className={s.slideTitle}>{title}</h2>
        </div>
        {now && <div className={s.now}>Teraz na slajdzie: {now}</div>}
        {other}
        {options.length > 0 && (
          <>
            <div className={s.sectionLabel}>Wizualizacja</div>
            <div className={s.visualPick}>
              <span>Wybór:</span>
              {[...options.map((o) => o.props.id), 'bez zmian'].map((v) => (
                <button
                  key={v}
                  type="button"
                  className={s.pick}
                  aria-pressed={(mine.visual ?? null) === v}
                  onClick={() => update(id, (c) => ({...c, visual: c.visual === v ? undefined : v}))}>
                  {v === 'bez zmian' ? 'bez zmian' : `Wariant ${v}`}
                </button>
              ))}
            </div>
            <div className={s.options}>{options}</div>
          </>
        )}
        {images.length > 0 && (
          <>
            <div className={s.sectionLabel}>Zdjęcia ({images.length})</div>
            <div className={s.candidates}>{images}</div>
          </>
        )}
        {videos.length > 0 && (
          <>
            <div className={s.sectionLabel}>Filmy ({videos.length})</div>
            <div className={s.candidates}>{videos}</div>
          </>
        )}
        <div className={s.sectionLabel}>Uwagi do tego slajdu</div>
        <textarea
          className={s.note}
          value={mine.note ?? ''}
          placeholder="np. wariant B, ale z większą czcionką; film od 1:20"
          onChange={(e) => {
            const text = e.target.value;
            update(id, (c) => ({...c, note: text}));
          }}
        />
      </section>
    </SlideContext.Provider>
  );
}

/**
 * One visual option. kind: e.g. 'statyczna' | 'interaktywna' | 'animowana';
 * summary: one sentence on what it shows; replaces: what it takes the place
 * of on the slide (e.g. 'tabela S/O/D', 'diagram mermaid') or 'nic' when it
 * is added next to the existing content.
 */
export function Option({id, kind, summary, replaces, children}) {
  const slideId = useContext(SlideContext);
  const {choices, update} = useContext(ReviewContext);
  const chosen = choices[slideId]?.visual === id;
  return (
    <div className={clsx(s.option, chosen && s.selected)}>
      <div className={s.optionHead}>
        <div>
          <div className={s.optionName}>
            Wariant {id} <span className={s.optionKind}>· {kind}</span>
          </div>
          {summary && <div className={s.optionSummary}>{summary}</div>}
          {replaces && (
            <div className={s.optionSummary}>
              <strong>Zastępuje:</strong> {replaces}
            </div>
          )}
        </div>
        <button
          type="button"
          className={s.pick}
          aria-pressed={chosen}
          onClick={() => update(slideId, (c) => ({...c, visual: c.visual === id ? undefined : id}))}>
          {chosen ? 'Wybrany' : 'Wybierz'}
        </button>
      </div>
      {children}
    </div>
  );
}

function Placement({mediaId}) {
  const slideId = useContext(SlideContext);
  const {choices, update} = useContext(ReviewContext);
  const current = choices[slideId]?.media?.[mediaId] ?? null;
  return (
    <div className={s.place} role="group" aria-label={`Gdzie użyć ${mediaId}`}>
      {PLACES.map((p) => (
        <button
          key={String(p.value)}
          type="button"
          className={s.placeBtn}
          aria-pressed={current === p.value}
          onClick={() =>
            update(slideId, (c) => ({...c, media: {...(c.media ?? {}), [mediaId]: p.value}}))
          }>
          {p.label}
        </button>
      ))}
    </div>
  );
}

const LICENCE = {
  wolna: {cls: 'ok', text: 'licencja wolna: można osadzić'},
  'do sprawdzenia': {cls: 'check', text: 'licencja do sprawdzenia'},
  niewolna: {cls: 'bad', text: 'bez wolnej licencji: tylko link'},
};

/**
 * Picture candidate. preview: URL of a thumbnail (hotlinked for review only,
 * nothing is downloaded before the lecturer chooses).
 */
export function ImageCandidate({id, title, preview, page, author, license, status = 'do sprawdzenia', learn, why}) {
  const slideId = useContext(SlideContext);
  const {choices} = useContext(ReviewContext);
  const [failed, setFailed] = useState(!preview);
  const chosen = Boolean(choices[slideId]?.media?.[id]);
  const lic = LICENCE[status] ?? LICENCE['do sprawdzenia'];
  return (
    <div className={clsx(s.candidate, chosen && s.selected)}>
      <div className={s.optionName}>
        {id} <span className={s.optionKind}>· zdjęcie</span>
      </div>
      {failed ? (
        <div className={s.thumbMissing}>Podgląd niedostępny: otwórz stronę źródłową</div>
      ) : (
        <img className={s.thumb} src={preview} alt={title} loading="lazy" onError={() => setFailed(true)} />
      )}
      {learn && (
        <div className={s.learn}>
          <strong>Czego uczy:</strong> {learn}
        </div>
      )}
      <div className={s.meta}>
        <strong>{title}</strong>
        <br />
        {author && <>Autor: {author}. </>}
        {license && <>Licencja: {license}. </>}
        {why && (
          <>
            <br />
            {why}
          </>
        )}
        {page && (
          <>
            <br />
            <a href={page} target="_blank" rel="noopener noreferrer">
              {page}
            </a>
          </>
        )}
      </div>
      <div className={s.badges}>
        <span className={clsx(s.badge, s[lic.cls])}>{lic.text}</span>
      </div>
      <Placement mediaId={id} />
    </div>
  );
}

/** Video candidate: embedded player (loads only on click) plus metadata */
export function VideoCandidate({
  id,
  youtube,
  vimeo,
  src,
  title,
  channel,
  duration,
  start,
  end,
  lang,
  fragment,
  learn,
  why,
  watched = false,
  embeddable = 'nieznane',
}) {
  const slideId = useContext(SlideContext);
  const {choices} = useContext(ReviewContext);
  const chosen = Boolean(choices[slideId]?.media?.[id]);
  const poster = youtube ? `https://i.ytimg.com/vi/${youtube}/hqdefault.jpg` : undefined;
  return (
    <div className={clsx(s.candidate, chosen && s.selected)}>
      <div className={s.optionName}>
        {id} <span className={s.optionKind}>· film</span>
      </div>
      <Video
        youtube={youtube}
        vimeo={vimeo}
        src={src}
        title={title}
        channel={channel}
        duration={duration}
        start={start}
        end={end}
        lang={lang}
        poster={poster}
      />
      {learn && (
        <div className={s.learn}>
          <strong>Czego uczy:</strong> {learn}
        </div>
      )}
      {(fragment || why) && (
        <div className={s.meta}>
          {fragment && (
            <>
              <strong>Fragment:</strong> {fragment}
              <br />
            </>
          )}
          {why}
        </div>
      )}
      <div className={s.badges}>
        <span className={clsx(s.badge, watched ? s.ok : s.check)}>
          {watched ? 'obejrzany' : 'nieobejrzany: obejrzyj przed zajęciami'}
        </span>
        <span className={clsx(s.badge, embeddable === 'tak' ? s.ok : embeddable === 'nie' ? s.bad : s.check)}>
          osadzanie: {embeddable}
        </span>
      </div>
      <Placement mediaId={id} />
    </div>
  );
}
