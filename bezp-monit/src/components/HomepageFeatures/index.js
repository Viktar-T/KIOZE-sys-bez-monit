import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'SCADA & Technologie IIoT',
    icon: '📡',
    description: (
      <>
        Poznaj przemysłowe technologie monitoringu, w tym OPC UA, MQTT, InfluxDB
        oraz architektury edge computing dla systemów energii odnawialnej.
      </>
    ),
  },
  {
    title: 'Analityka Danych i Anomalie',
    icon: '📈',
    description: (
      <>
        Naucz się technik wykrywania anomalii i strategii utrzymania predykcyjnego
        dla systemów fotowoltaicznych, wiatrowych, biogazowych i magazynów energii.
      </>
    ),
  },
  {
    title: 'Praktyczne Ćwiczenia Laboratoryjne',
    icon: '🛠️',
    description: (
      <>
        Buduj rzeczywiste architektury monitoringu przez praktyczne ćwiczenia
        obejmujące czujniki, protokoły, bazy danych i narzędzia wizualizacji.
      </>
    ),
  },
];

function Feature({icon, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <span className={styles.featureIcon} aria-hidden="true">
          {icon}
        </span>
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
