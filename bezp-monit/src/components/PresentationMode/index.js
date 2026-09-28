import React, {useCallback, useEffect, useRef, useState} from 'react';
import {createPortal} from 'react-dom';
import clsx from 'clsx';
import {useLocation} from '@docusaurus/router';

import styles from './styles.module.css';
import './presentation.css';

// Pages that offer presentation mode: lectures, exercises and the course intro
const ENABLED_PATH = /^\/docs\/(wyklady-bezp|wyklady|cwiczenia)(\/|$)|^\/docs\/intro\/?$/;
// Opening a page at #slajd-3 starts the presentation on slide 3
const SLIDE_HASH = /^#slajd-(\d+)$/;

/**
 * Splits the page content into slides. Every slide card (<Slide>) is one
 * slide; other content is split at "##" headings.
 */
function collectSlides(root) {
  const slides = [];
  let group = [];
  let hasCards = false;
  const flush = () => {
    if (group.length > 0) {
      slides.push(group);
    }
    group = [];
  };
  for (const child of root.children) {
    if (child.hasAttribute('data-pm-ignore')) {
      continue;
    }
    if (child.classList.contains('slide-container')) {
      flush();
      for (const card of child.children) {
        if (card.classList.contains('slide-card')) {
          slides.push([card]);
          hasCards = true;
        }
      }
      continue;
    }
    if (child.tagName === 'H2' && group.length > 0) {
      flush();
    }
    group.push(child);
  }
  flush();
  // On slide pages, a group holding only the page title adds nothing
  return hasCards
    ? slides.filter((slide) => !(slide.length === 1 && slide[0].tagName === 'HEADER'))
    : slides;
}

// Marks instructor notes, which stay hidden until the lecturer shows them
function markNotes(root) {
  for (const details of root.querySelectorAll('details')) {
    const summary = details.querySelector(':scope > summary');
    if (details.classList.contains('instructor-notes') || /notatk/i.test(summary?.textContent ?? '')) {
      details.setAttribute('data-pm-notes', '');
    }
  }
}

// Shows one slide: the slide's elements and their ancestors stay visible
function showSlide(root, slide) {
  for (const el of root.querySelectorAll('[data-pm-current], [data-pm-path]')) {
    el.removeAttribute('data-pm-current');
    el.removeAttribute('data-pm-path');
  }
  for (const el of slide) {
    el.setAttribute('data-pm-current', '');
    for (let parent = el.parentElement; parent && parent !== root; parent = parent.parentElement) {
      parent.setAttribute('data-pm-path', '');
    }
  }
}

function clearMarks(root) {
  for (const el of root.querySelectorAll('[data-pm-current], [data-pm-path], [data-pm-notes]')) {
    el.removeAttribute('data-pm-current');
    el.removeAttribute('data-pm-path');
    el.removeAttribute('data-pm-notes');
  }
}

// Slide nearest to the top of the viewport, so the presentation starts where the reader is
function slideInView(slides) {
  let found = 0;
  slides.forEach((slide, index) => {
    if (slide[0].getBoundingClientRect().top <= 120) {
      found = index;
    }
  });
  return found;
}

function isTyping(target) {
  return (
    target instanceof HTMLElement &&
    (target.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName))
  );
}

export default function PresentationMode() {
  const {pathname} = useLocation();
  const enabled = ENABLED_PATH.test(pathname);

  const toolbarRef = useRef(null);
  const rootRef = useRef(null);
  const slidesRef = useRef([]);
  const [available, setAvailable] = useState(true);
  const [active, setActive] = useState(false);
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [showNotes, setShowNotes] = useState(false);
  const [overflowing, setOverflowing] = useState(false);

  const start = useCallback((startIndex) => {
    const root = toolbarRef.current?.closest('.theme-doc-markdown');
    if (!root) {
      return;
    }
    const slides = collectSlides(root);
    if (slides.length < 2) {
      return;
    }
    markNotes(root);
    rootRef.current = root;
    slidesRef.current = slides;
    setCount(slides.length);
    setIndex(Math.min(Math.max(startIndex ?? slideInView(slides), 0), slides.length - 1));
    setShowNotes(false);
    setActive(true);
  }, []);

  const exit = useCallback(() => {
    const first = slidesRef.current[index]?.[0];
    setActive(false);
    if (document.fullscreenElement) {
      document.exitFullscreen?.().catch(() => {});
    }
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
    // Back on the normal page, continue reading where the presentation ended
    requestAnimationFrame(() => first?.scrollIntoView({block: 'start'}));
  }, [index]);

  const go = useCallback(
    (target) => setIndex(Math.min(Math.max(target, 0), count - 1)),
    [count],
  );

  const toggleFullscreen = useCallback(() => {
    if (document.fullscreenElement) {
      document.exitFullscreen?.().catch(() => {});
    } else {
      document.documentElement.requestFullscreen?.().catch(() => {});
    }
  }, []);

  // Hide the button where the page has fewer than two slides
  useEffect(() => {
    if (!enabled) {
      return;
    }
    const root = toolbarRef.current?.closest('.theme-doc-markdown');
    setAvailable(Boolean(root) && collectSlides(root).length >= 2);
    const match = window.location.hash.match(SLIDE_HASH);
    if (match) {
      start(Number(match[1]) - 1);
    }
  }, [enabled, start]);

  // Enter and leave presentation mode. The state lives in data attributes on
  // <html>: Docusaurus rewrites the class attribute of <html> on head updates.
  useEffect(() => {
    if (!active) {
      return undefined;
    }
    const root = rootRef.current;
    document.documentElement.setAttribute('data-pm', '');
    root.setAttribute('tabindex', '-1');
    root.focus({preventScroll: true});
    return () => {
      document.documentElement.removeAttribute('data-pm');
      document.documentElement.removeAttribute('data-pm-show-notes');
      root.removeAttribute('tabindex');
      clearMarks(root);
    };
  }, [active]);

  // Show the current slide
  useEffect(() => {
    if (!active) {
      return undefined;
    }
    const root = rootRef.current;
    showSlide(root, slidesRef.current[index]);
    root.scrollTop = 0;
    window.history.replaceState(null, '', `#slajd-${index + 1}`);
    const checkOverflow = () => setOverflowing(root.scrollHeight > root.clientHeight + 4);
    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, [active, index]);

  // Instructor notes: hidden during the presentation, N shows them opened
  useEffect(() => {
    if (!active) {
      return;
    }
    document.documentElement.toggleAttribute('data-pm-show-notes', showNotes);
    if (showNotes) {
      for (const notes of rootRef.current.querySelectorAll('details[data-pm-notes]')) {
        notes.open = true;
      }
    }
    const root = rootRef.current;
    setOverflowing(root.scrollHeight > root.clientHeight + 4);
  }, [active, showNotes, index]);

  // Keyboard control
  useEffect(() => {
    if (!active) {
      return undefined;
    }
    const onKeyDown = (event) => {
      if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey || isTyping(event.target)) {
        return;
      }
      // Space and Enter keep working on buttons and summaries inside the slide
      if (
        (event.key === ' ' || event.key === 'Enter') &&
        event.target instanceof HTMLElement &&
        /^(BUTTON|SUMMARY|A)$/.test(event.target.tagName)
      ) {
        return;
      }
      const root = rootRef.current;
      const atBottom = root.scrollTop + root.clientHeight >= root.scrollHeight - 4;
      switch (event.key) {
        case 'ArrowRight':
          go(index + 1);
          break;
        case 'ArrowLeft':
        case 'PageUp':
          go(index - 1);
          break;
        case ' ':
        case 'PageDown':
          // Long slide: scroll through it before moving on
          if (atBottom) {
            go(index + 1);
          } else {
            root.scrollBy({top: root.clientHeight * 0.85, behavior: 'smooth'});
          }
          break;
        case 'Home':
          go(0);
          break;
        case 'End':
          go(count - 1);
          break;
        case 'Escape':
          exit();
          break;
        case 'f':
        case 'F':
          toggleFullscreen();
          break;
        case 'n':
        case 'N':
          setShowNotes((value) => !value);
          break;
        default:
          return;
      }
      event.preventDefault();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [active, index, count, go, exit, toggleFullscreen]);

  if (!enabled) {
    return null;
  }

  return (
    <div ref={toolbarRef} className={styles.toolbar} data-pm-ignore="" hidden={!available}>
      <button
        type="button"
        className={clsx('button button--sm button--outline button--primary', styles.startButton)}
        onClick={() => start()}
        title="Pokaż stronę jako slajdy (←/→ zmiana slajdu, N notatki, F pełny ekran, Esc wyjście)">
        ▶ Prezentacja
      </button>

      {active &&
        createPortal(
          <>
            <div
              className={styles.progress}
              style={{width: `${((index + 1) / count) * 100}%`}}
              aria-hidden="true"
            />
            <div className={styles.controls} role="toolbar" aria-label="Sterowanie prezentacją">
              <button type="button" onClick={() => go(index - 1)} disabled={index === 0} aria-label="Poprzedni slajd" title="Poprzedni (←)">
                ‹
              </button>
              <span className={styles.counter} aria-live="polite">
                {index + 1} / {count}
                {overflowing && (
                  <span className={styles.overflow} title="Slajd nie mieści się na ekranie: przewiń lub naciśnij spację">
                    {' '}⇣
                  </span>
                )}
              </span>
              <button type="button" onClick={() => go(index + 1)} disabled={index === count - 1} aria-label="Następny slajd" title="Następny (→)">
                ›
              </button>
              <button type="button" onClick={() => setShowNotes((value) => !value)} aria-pressed={showNotes} title="Notatki prowadzącego (N)">
                Notatki
              </button>
              <button type="button" onClick={toggleFullscreen} aria-label="Pełny ekran" title="Pełny ekran (F)">
                ⛶
              </button>
              <button type="button" onClick={exit} aria-label="Zakończ prezentację" title="Zakończ (Esc)">
                ✕
              </button>
            </div>
          </>,
          document.body,
        )}
    </div>
  );
}
