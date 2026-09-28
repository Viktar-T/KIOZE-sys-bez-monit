import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {usePluginData} from '@docusaurus/useGlobalData';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const exerciseLinks = [
  {to: '/docs/cwiczenia/plan/plan-semestru', label: 'Plan semestru'},
  {to: '/docs/cwiczenia/dane', label: 'Zbiory danych (CSV)'},
  {to: '/docs/cwiczenia/szablony/checklista-bhp', label: 'Lista kontrolna BHP'},
  {to: '/docs/cwiczenia/rubryki/kryteria-zaliczenia', label: 'Kryteria zaliczenia'},
];

const resourceLinks = [
  {to: '/docs/intro', label: 'Wprowadzenie do kursu'},
  {to: '/docs/literatura', label: 'Literatura'},
  {to: '/docs/wyklady', label: 'Archiwum: wykłady o monitoringu'},
];

// Polish plural: 1 temat, 2–4 tematy, 5+ tematów (12–14 tematów)
function topicsLabel(count) {
  if (count === 0) {
    return 'Plan wykładu';
  }
  if (count === 1) {
    return '1 temat';
  }
  const lastDigit = count % 10;
  const lastTwo = count % 100;
  const few = lastDigit >= 2 && lastDigit <= 4 && (lastTwo < 12 || lastTwo > 14);
  return `${count} ${few ? 'tematy' : 'tematów'}`;
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
          {siteConfig.title}
        </Heading>
        <p className={clsx('hero__subtitle', styles.heroSubtitle)}>{siteConfig.tagline}</p>

        {/* Course Format Information */}
        <div className={styles.heroInfo}>
          <p>
            <strong>Format kursu:</strong> Wykłady (20h) • Zajęcia audytoryjne (10h)
          </p>
        </div>

        {/* Call to Action Buttons */}
        <div className={styles.buttons}>
          <Link
            className={clsx('button button--lg', styles.heroButton, styles.heroButtonPrimary)}
            to="/docs/wyklady-bezp">
            Wykłady 📚
          </Link>
          <Link
            className={clsx('button button--lg', styles.heroButton, styles.heroButtonSecondary)}
            to="/docs/cwiczenia">
            Ćwiczenia 🛠️
          </Link>
        </div>
      </div>
    </header>
  );
}

function Section({title, linkTo, linkLabel, alt, children}) {
  return (
    <section className={clsx(styles.section, alt && styles.sectionAlt)}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            {title}
          </Heading>
          {linkTo && (
            <Link to={linkTo} className={styles.sectionLink}>
              {linkLabel} →
            </Link>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

function LectureCard({lecture}) {
  return (
    <Link to={lecture.permalink} className={styles.card}>
      <div className={styles.cardTop}>
        {lecture.number !== null && <span className={styles.badge}>W{lecture.number}</span>}
        <span className={styles.cardMeta}>{topicsLabel(lecture.topics)}</span>
      </div>
      <Heading as="h3" className={styles.cardTitle}>
        {lecture.title}
      </Heading>
      {lecture.description && <p className={styles.cardText}>{lecture.description}</p>}
    </Link>
  );
}

function ExerciseCard({exercise}) {
  return (
    <Link to={exercise.permalink} className={styles.card}>
      <div className={styles.cardTop}>
        {exercise.label && <span className={styles.badge}>{exercise.label}</span>}
        {exercise.duration && <span className={styles.cardMeta}>{exercise.duration} min</span>}
      </div>
      <Heading as="h3" className={styles.cardTitle}>
        {exercise.title}
      </Heading>
    </Link>
  );
}

function LinkPills({label, links}) {
  return (
    <nav className={styles.links} aria-label={label}>
      {links.map(({to, label: text}) => (
        <Link key={to} to={to} className={styles.linkPill}>
          {text}
        </Link>
      ))}
    </nav>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  const {lectures, exercises} = usePluginData('course-overview');
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Kompleksowy kurs systemów monitorowania i bezpieczeństwa dla instalacji OZE, obejmujący technologie SCADA, IIoT, analitykę danych oraz praktyczne zastosowania dla fotowoltaiki, energii wiatrowej i magazynów energii.">
      <HomepageHeader />
      <main>
        <Section title="Wykłady" linkTo="/docs/wyklady-bezp" linkLabel="Wszystkie wykłady">
          <div className={styles.grid}>
            {lectures.map((lecture) => (
              <LectureCard key={lecture.permalink} lecture={lecture} />
            ))}
          </div>
        </Section>

        <Section title="Ćwiczenia" linkTo="/docs/cwiczenia" linkLabel="Wprowadzenie do ćwiczeń" alt>
          <div className={styles.grid}>
            {exercises.map((exercise) => (
              <ExerciseCard key={exercise.permalink} exercise={exercise} />
            ))}
          </div>
          <LinkPills label="Materiały do ćwiczeń" links={exerciseLinks} />
        </Section>

        <Section title="Materiały">
          <LinkPills label="Materiały kursu" links={resourceLinks} />
        </Section>
      </main>
    </Layout>
  );
}
