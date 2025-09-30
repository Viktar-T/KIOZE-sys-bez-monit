import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'SCADA & Technologie IIoT',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Poznaj przemysłowe technologie monitoringu, w tym OPC UA, MQTT, InfluxDB
        oraz architektury edge computing dla systemów energii odnawialnej.
      </>
    ),
  },
  {
    title: 'Analityka Danych i Anomalie',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Naucz się technik wykrywania anomalii i strategii utrzymania predykcyjnego
        dla systemów fotowoltaicznych, wiatrowych, biogazowych i magazynów energii.
      </>
    ),
  },
  {
    title: 'Praktyczne Ćwiczenia Laboratoryjne',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Buduj rzeczywiste architektury monitoringu przez praktyczne ćwiczenia
        obejmujące czujniki, protokoły, bazy danych i narzędzia wizualizacji.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
