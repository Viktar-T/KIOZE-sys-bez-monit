# Program przedmiotu: „Systemy bezpieczeństwa i monitorowania instalacji OZE"

**Kierunek:** Odnawialne źródła energii  
**Semestr:** 5  
**Forma zajęć:** Wykłady (20 godzin) + Zajęcia audytoryjne (10 godzin)  
**Proporcja treści:** Systemy bezpieczeństwa (10%) + Systemy monitorowania (90%)

---

## WYKŁADY (20 GODZIN)

### **Blok I: Wprowadzenie i systemy bezpieczeństwa (2 godziny - 10% kursu)**

#### **Wykład 1-2: Bezpieczeństwo instalacji OZE (2h)**
**Treść:**
- Wprowadzenie do systematyki zagrożeń w instalacjach OZE
- Analiza ryzyka w elektrowniach wiatrowych, fotowoltaicznych i biogazowych
- Międzynarodowe standardy bezpieczeństwa: IEC 61400, IEC 62446-1, ISO 45001
- Systemy bezpieczeństwa funkcjonalnego (Functional Safety) w OZE
- Systemy ochrony przeciwpożarowej (AVIOTEC, systemy wykrywania łuku elektrycznego)
- Systemy ochrony przed kradzieżą i wandalizmem (Solar Sentry, Solar Fiber)
- Procedury Permit-to-Work (PTW) w obiektach energetyki odnawialnej

**Przykłady praktyczne:**
- System SICK dla turbin wiatrowych - bezpieczne monitorowanie pozycji łopat i systemów blokady rotora
- Bosch AVIOTEC - videoanaliza wykrywania dymu i płomieni w instalacjach OZE
- Systemy AFCI (Arc Fault Circuit Interrupter) w instalacjach PV

---

### **Blok II: Systemy monitorowania instalacji OZE (18 godzin - 90% kursu)**

#### **Wykład 3-4: Fundamenty systemów monitorowania (2h)**
**Treść:**
- Architektura systemów monitorowania w energetyce odnawialnej
- Hierarchia poziomów: poziom polowy, stacyjny, centralny
- Protokoły komunikacyjne: Modbus, DNP3, IEC 61850, OPC UA
- Redundancja i niezawodność systemów monitorowania
- Metryki wydajności: dostępność, niezawodność, czas reakcji

**Technologie kluczowe:**
- Systemy SCADA (Supervisory Control and Data Acquisition)
- Platformy IIoT (Industrial Internet of Things)
- Systemy DCS (Distributed Control Systems)

#### **Wykład 5-6: Systemy SCADA w instalacjach OZE (2h)**
**Treść:**
- Architektura systemów SCADA dla farm wiatrowych i słonecznych
- Komponenty systemu: MTU (Master Terminal Unit), RTU (Remote Terminal Unit), HMI
- Platformy SCADA: Wonderware, Siemens WinCC, GE iFIX, open-source (SCADA-LTS)
- Konfiguracja alarmów i trendów historycznych
- Integracja z systemami prognozowania pogody

**Studia przypadku:**
- E.ON SpheriCAL - wczesne wykrywanie awarii w turbinach wiatrowych z użyciem danych SCADA
- GPM SCADA - system monitorowania globalnych portfolio OZE
- NOMAD NX SCADA - dedykowane rozwiązanie dla farm PV i wiatrowych

#### **Wykład 7-8: Technologie IIoT i Edge Computing (2h)**
**Treść:**
- Architektura Industrial Internet of Things w OZE
- Sensory i urządzenia brzegowe (edge devices)
- Protokoły komunikacji bezprzewodowej: LoRaWAN, NB-IoT, 5G
- Edge computing i przetwarzanie danych lokalnie
- Integracja z chmurą obliczeniową (AWS IoT, Azure IoT)

**Praktyczne implementacje:**
- Moxa IIoT gateways dla farm słonecznych
- ThingSpeak platform dla małych instalacji PV
- Chirpstack IoT server z technologią LoRa

#### **Wykład 9-10: Monitoring elektrowni wiatrowych (2h)**
**Treść:**
- Systemy monitorowania stanu technicznego (Condition Monitoring Systems - CMS)
- Analiza drgań i diagnostyka łożysk głównych
- Monitoring systemu pitch i yaw
- Systemy monitorowania łopat: LiDAR, kamery termowizyjne
- Monitorowanie parametrów meteorologicznych i wake effect

**Sensory i technologie:**
- Akcelerometry i sensory drgań (Wilcoxon, SKF)
- Sensory eddy current dla monitorowania momentów obrotowych
- Systemy SICK dla bezpiecznego pozycjonowania
- Sensory ciśnienia Superior Sensors dla optymalizacji ustawienia łopat

#### **Wykład 11-12: Monitoring instalacji fotowoltaicznych (2h)**
**Treść:**
- Monitoring na poziomie modułu, stringa i całej elektrowni
- Systemy wykrywania łuku elektrycznego (AFCI)
- Termografia i diagnostyka hotspotów
- Monitoring wydajności i wskaźniki PR (Performance Ratio)
- Systemy czyszczenia i ich monitoring

**Platformy monitorowania:**
- SolarEdge SetApp i monitoring na poziomie optimizera
- Fonrich SafeSolar Platform
- Tigo Energy Intelligence Platform
- SMA Sunny Portal

#### **Wykład 13-14: Sztuczna inteligencja i uczenie maszynowe (2h)**
**Treść:**
- Algorytmy predykcyjnej konserwacji (Predictive Maintenance)
- Sieci neuronowe LSTM dla prognozowania awarii
- Wykrywanie anomalii w danych SCADA
- Computer vision dla inspekcji łopat turbin i paneli PV
- Optymalizacja O&M z użyciem AI

**Narzędzia i frameworki:**
- TensorFlow i PyTorch dla deep learning
- Scikit-learn dla klasycznych algorytmów ML
- Apache Kafka dla streaming danych
- InfluxDB i Grafana dla wizualizacji

#### **Wykład 15-16: Cyberbezpieczeństwo w systemach OZE (2h)**
**Treść:**
- Zagrożenia cybernetyczne w infrastrukturze OZE
- Segmentacja sieci OT/IT i zasada zero trust
- Zabezpieczenie protokołów komunikacyjnych
- Standardy cyberbezpieczeństwa: IEC 62443, NIST Framework
- Incident response i business continuity

**Przykłady incydentów:**
- Atak na ukraińską sieć energetyczną (2015)
- Ransomware w sektorze energetycznym
- Vulnerabilities w systemach SCADA

#### **Wykład 17-18: Standardy i zgodność regulacyjna (2h)**
**Treść:**
- Standard IEC 61400 dla turbin wiatrowych
- IEC 62446-1 dla testowania i dokumentacji systemów PV
- Normy grid code i wymagania TSO
- Certyfikacja i audyty systemów monitorowania
- GDPR i ochrona danych w systemach monitorowania

**Procedury testowania:**
- Testy zgodności IEC 62446-1: pomiary Voc, Isc, izolacji
- Testy factory acceptance (FAT) i site acceptance (SAT)
- Kalibracja sensorów i systemów pomiarowych

#### **Wykład 19-20: Trendy przyszłości i podsumowanie (2h)**
**Treść:**
- Digital Twin w energetyce odnawialnej
- Blockchain dla peer-to-peer energy trading
- Integracja z smart grid i storage
- 5G i edge computing następnej generacji
- Sustainable monitoring (zielone technologie IT)

**Emerging technologies:**
- Quantum sensors dla ultra-precyzyjnych pomiarów
- Augmented Reality dla maintenance
- Satellite monitoring dla dużych farm

---

## ZAJĘCIA AUDYTORYJNE (10 GODZIN)

### **Ćwiczenia 1-2: Konfiguracja systemu SCADA (2h)**
**Cel:** Praktyczna praca z oprogramowaniem SCADA open-source
**Narzędzia:** SCADA-LTS, Ignition Community Edition
**Zadania:**
- Konfiguracja tagów i alarmów dla symulowanej farmy wiatrowej
- Tworzenie interfejsów HMI
- Ustawianie trendów historycznych i raportów

### **Ćwiczenia 3-4: Analiza danych z rzeczywistej farmy wiatrowej (2h)**
**Cel:** Analiza danych SCADA i wykrywanie anomalii
**Narzędzia:** Python, pandas, matplotlib, scikit-learn
**Zadania:**
- Import i pre-processing danych SCADA (10-minutowe średnie)
- Identyfikacja wzorców normalnej pracy turbiny
- Implementacja algorytmu wykrywania anomalii

### **Ćwiczenia 5-6: Monitoring instalacji PV - case study (2h)**
**Cel:** Praktyczne wykorzystanie danych z systemu monitorowania PV
**Narzędzia:** SolarEdge Monitoring API, Python
**Zadania:**
- Analiza wydajności instalacji PV
- Obliczanie wskaźników PR i porównanie z referencją
- Identyfikacja underperforming stringów

### **Ćwiczenia 7-8: Cyberbezpieczeństwo - penetration testing (2h)**
**Cel:** Identyfikacja vulnerabilities w systemach OZE
**Narzędzia:** Nmap, Wireshark, Metasploit Community
**Zadania:**
- Skanowanie portów w symulowanej sieci SCADA
- Analiza ruchu sieciowego protokołu Modbus
- Basic security hardening recommendations

### **Ćwiczenia 9-10: Projekt zespołowy - kompleksowy system monitorowania (2h)**
**Cel:** Zaprojektowanie systemu monitorowania dla hybrydowej elektrowni
**Deliverables:**
- Architektura systemu (PV + wind + storage)
- Specyfikacja wymagań funkcjonalnych i niefunkcjonalnych
- Analiza kosztów TCO (Total Cost of Ownership)
- Prezentacja rozwiązania (10 min/zespół)

---

## METODY OCENY

### **Ocena formująca (60%):**
- Zadania praktyczne z zajęć audytoryjnych (40%)
- Projekt zespołowy - system monitorowania (20%)

### **Ocena podsumowująca (40%):**
- Egzamin pisemny obejmujący:
  - Standardy i regulacje (IEC 61400, IEC 62446-1, ISO 45001)
  - Technologie SCADA i IIoT
  - Cyberbezpieczeństwo w OZE
  - Studia przypadku z branży

---

## LITERATURA

### **Literatura podstawowa:**
1. **Crabtree, C.J., Zappalá, D., Hogg, S.I.** (2015). "Wind energy: UK experiences and offshore operational challenges." *Proceedings of the Institution of Mechanical Engineers, Part A: Journal of Power and Energy*, 229(7), 727-746.

2. **Salam, Z., Ahmed, J., Merugu, B.S.** (2013). "The application of soft computing methods for MPPT of PV system: A technological and status review." *Applied Energy*, 107, 135-148.

### **Literatura uzupełniająca:**
3. **IEC 61400-25-1:2017** "Wind energy generation systems - Part 25-1: Communications for monitoring and control of wind power plants - Overall description of principles and models"

4. **IEC 62446-1:2016** "Photovoltaic (PV) systems - Requirements for testing, documentation and maintenance - Part 1: Grid connected systems - Documentation, commissioning tests and inspection"

### **Zasoby online:**
- **IRENA Global Energy Transformation:** Advanced Technologies Monitoring Reports
- **IEA Wind Technology Reports:** Condition Monitoring and Predictive Maintenance
- **NREL Wind Research:** SCADA Data Analysis Tools and Methodologies

---

## EFEKTY UCZENIA SIĘ

Po ukończeniu przedmiotu student będzie potrafił:

### **Wiedza (W):**
- **W1:** Wyjaśnić zasady działania systemów bezpieczeństwa w instalacjach OZE zgodnie z międzynarodowymi standardami
- **W2:** Scharakteryzować architektury systemów monitorowania SCADA i IIoT w energetyce odnawialnej  
- **W3:** Ocenić zagrożenia cyberbezpieczeństwa i metody ochrony infrastruktury OZE

### **Umiejętności (U):**
- **U1:** Zaprojektować system monitorowania dla instalacji OZE z uwzględnieniem wymagań funkcjonalnych i bezpieczeństwa
- **U2:** Skonfigurować oprogramowanie SCADA i przeprowadzić analizę danych operacyjnych
- **U3:** Zastosować techniki uczenia maszynowego do predykcyjnej konserwacji w OZE

### **Kompetencje społeczne (K):**
- **K1:** Współpracować w zespole przy realizacji projektów systemów monitorowania
- **K2:** Komunikować się efektywnie z interesariuszami na temat rozwiązań technologicznych w OZE
- **K3:** Rozumieć odpowiedzialność za bezpieczeństwo i niezawodność systemów energetycznych