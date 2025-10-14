import React from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import Mermaid from '@theme/Mermaid';
import styles from './DataFlowDiagram.module.css';

/**
 * Data Flow Diagram Component for Homepage
 * Displays the complete monitoring data flow architecture for renewable energy systems
 */
export default function DataFlowDiagram() {
  const mermaidCode = `graph TB
    subgraph Edge["🔹 WARSTWA EDGE (On-Site)"]
        direction TB
        S1[⚡ Czujniki elektryczne<br/>Napięcia, prądy, moc]
        S2[🌡️ Czujniki środowiskowe<br/>Irradiancja, temperatura]
        S3[📳 Czujniki wibracji<br/>Turbiny wiatrowe]
        S4[💨 Czujniki gazów<br/>Biogazownie]
        
        G[🔌 Gateway IoT<br/>Raspberry Pi / Moxa<br/>Modbus RTU/TCP, OPC UA]
        
        S1 --> G
        S2 --> G
        S3 --> G
        S4 --> G
    end

    subgraph Fog["🔸 WARSTWA FOG (Lokalny Serwer)"]
        direction TB
        SCADA[🖥️ SCADA Lokalny<br/>Ignition / WinCC]
        HIST[📊 Historian<br/>InfluxDB / TimescaleDB<br/>Retencja: 7-30 dni]
        HMI[📱 HMI Lokalne<br/>Touchscreen<br/>Control Room]
        ANAL[🔍 Analityka Near-RT<br/>KPI, Alarmy<br/>Detekcja anomalii]
        
        SCADA --> HIST
        HIST --> ANAL
        SCADA --> HMI
    end

    subgraph Cloud["☁️ WARSTWA CLOUD (Data Center)"]
        direction TB
        IOT[🌐 IoT Hub<br/>AWS IoT Core<br/>Azure IoT Hub]
        LAKE[💾 Data Lake<br/>S3 / Azure Blob<br/>Retencja: 5-10 lat]
        ML[🤖 Machine Learning<br/>Predykcja produkcji<br/>Wykrywanie anomalii]
        BI[📈 Business Intelligence<br/>Grafana Cloud<br/>Power BI / Tableau]
        
        IOT --> LAKE
        LAKE --> ML
        LAKE --> BI
    end

    %% Przepływ danych
    G -->|MQTT/HTTPS<br/>1-15 min<br/>Zagregowane dane| SCADA
    SCADA -->|MQTT/REST<br/>15 min aggregates<br/>+ zdarzenia| IOT
    
    %% Alarmy
    G -.->|Alarmy lokalne<br/>SMS/Email| OP[👤 Operator]
    ANAL -.->|Alarmy P1-P2<br/>Crityczne| OP
    
    %% Użytkownicy
    BI --> STAKE[👥 Stakeholders<br/>Inwestorzy, O&M<br/>OSP, Regulatory]
    HMI --> TECH[🔧 Technicy<br/>On-site]

    %% Protokoły i częstotliwości
    classDef edgeClass fill:#e1f5e1,stroke:#4caf50,stroke-width:3px
    classDef fogClass fill:#fff4e1,stroke:#ff9800,stroke-width:3px
    classDef cloudClass fill:#e1f0ff,stroke:#2196f3,stroke-width:3px
    
    class S1,S2,S3,S4,G edgeClass
    class SCADA,HIST,HMI,ANAL fogClass
    class IOT,LAKE,ML,BI cloudClass`;

  return (
    <section className={styles.dataFlowSection}>
      <div className="container">
        <div className={styles.dataFlowHeader}>
          <Heading as="h2">Architektura przepływu danych w monitoringu OZE</Heading>
          <p className={styles.dataFlowDescription}>
            Kompleksowy system monitorowania wykorzystuje architekturę <strong>edge–fog–cloud</strong> 
            do zapewnienia niezawodności, szybkości reakcji i zaawansowanej analityki danych.
          </p>
        </div>

        <div className={styles.diagramContainer}>
          <div className={styles.mermaidWrapper}>
            <Mermaid value={mermaidCode} />
          </div>
        </div>

        <div className={styles.keyPointsGrid}>
          <div className={styles.keyPoint}>
            <div className={styles.keyPointIcon}>🔹</div>
            <h3>Edge</h3>
            <p><strong>Akwizycja i wstępna obróbka</strong></p>
            <ul>
              <li>Zbieranie danych: 1-10 Hz</li>
              <li>Filtracja i walidacja</li>
              <li>Buforowanie: 1-48h</li>
              <li>Lokalne alarmy (&lt;100ms)</li>
            </ul>
          </div>

          <div className={styles.keyPoint}>
            <div className={styles.keyPointIcon}>🔸</div>
            <h3>Fog</h3>
            <p><strong>Agregacja i analityka lokalna</strong></p>
            <ul>
              <li>Konsolidacja wielu źródeł</li>
              <li>Normalizacja tagów</li>
              <li>Retencja: 7-30 dni</li>
              <li>KPI i HMI operacyjne</li>
            </ul>
          </div>

          <div className={styles.keyPoint}>
            <div className={styles.keyPointIcon}>☁️</div>
            <h3>Cloud</h3>
            <p><strong>Składowanie i AI/ML</strong></p>
            <ul>
              <li>Retencja długoterminowa: 5-10 lat</li>
              <li>Machine Learning i predykcja</li>
              <li>Benchmarking floty</li>
              <li>Integracja biznesowa (ERP, CMMS)</li>
            </ul>
          </div>
        </div>

        <div className={styles.protocolsSection}>
          <Heading as="h3">Kluczowe protokoły i technologie</Heading>
          <div className={styles.protocolsGrid}>
            <div className={styles.protocolCard}>
              <strong>🔌 Komunikacja Edge</strong>
              <p>Modbus RTU/TCP, OPC UA, CAN Bus, Ethernet/IP</p>
            </div>
            <div className={styles.protocolCard}>
              <strong>📡 Transport Danych</strong>
              <p>MQTT (QoS 1/2), HTTPS/REST, Kafka (streaming)</p>
            </div>
            <div className={styles.protocolCard}>
              <strong>💾 Bazy Danych</strong>
              <p>InfluxDB, TimescaleDB, AWS Timestream, Parquet</p>
            </div>
            <div className={styles.protocolCard}>
              <strong>🔒 Bezpieczeństwo</strong>
              <p>TLS 1.3, X.509 certyfikaty, VPN/VPC, IEC 62443</p>
            </div>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <p className={styles.ctaText}>
            Poznaj szczegóły każdej warstwy architektury w naszym kompleksowym kursie
          </p>
          <Link
            className="button button--primary button--lg"
            to="/docs/wyklady/wyklad-01-architektura-w1/02-warstwy-architektury">
            Przejdź do wykładu: Architektura monitoringu →
          </Link>
        </div>
      </div>
    </section>
  );
}

