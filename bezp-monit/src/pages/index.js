import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        
        {/* Course Format Information */}
        <div className="hero__info">
          <p>
            <strong>Format kursu:</strong> 
            Wykłady (20h) • Zajęcia audytoryjne (10h)
          </p>
        </div>
        
        {/* Call to Action Buttons */}
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/category/wyk%C5%82ady---bezpiecze%C5%84stwo">
            Wykłady 📚
          </Link>
          <Link
            className="button button--primary button--lg"
            to="/docs/category/cwiczenia">
            Ćwiczenia 🛠️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Kompleksowy kurs systemów monitorowania i bezpieczeństwa dla instalacji OZE, obejmujący technologie SCADA, IIoT, analitykę danych oraz praktyczne zastosowania dla fotowoltaiki, energii wiatrowej i magazynów energii.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
