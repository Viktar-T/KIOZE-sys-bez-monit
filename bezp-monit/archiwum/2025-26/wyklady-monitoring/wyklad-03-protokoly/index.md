---
sidebar_position: 3
title: "W3: PLC/SCADA/OPC UA i IIoT"
---

# W3: PLC/SCADA/OPC UA i IIoT (2 h)

## Przegląd i cele kształcenia

Wykład obejmuje topologie SCADA, serwery OPC UA, protokoły Modbus/TCP i MQTT (publish–subscribe), integrację REST/GraphQL w systemach monitoringu OZE. Omawiamy buforowanie danych na brzegu (edge gateways), store-and-forward, tagi, namespace'y, role i uprawnienia oraz redundancję i wysoką dostępność.

**Zakres**: topologie SCADA, serwery OPC UA, Modbus/TCP, MQTT (publish–subscribe), REST/GraphQL w integracji; buforowanie danych na brzegu (edge gateways), store-and-forward; tagi, namespace'y, role i uprawnienia; redundancja i wysoką dostępność.

Po zakończeniu wykładu student potrafi:

1. Zaprojektować topologie SCADA dla instalacji OZE z uwzględnieniem redundancji i wysokiej dostępności.
2. Skonfigurować serwery OPC UA z odpowiednimi namespace'ami, tagami, rolami i uprawnieniami.
3. Zintegrować protokoły Modbus/TCP, MQTT (publish–subscribe) oraz REST/GraphQL w systemach IIoT.
4. Zaimplementować buforowanie danych na edge gateways z mechanizmami store-and-forward.

## Struktura materiału

1. [Topologie SCADA i architektura systemów](./01-topologie-scada.mdx)
2. [PLC i protokoły Modbus RTU/TCP](./02-plc-modbus.mdx)
3. [Serwery OPC UA: namespace'y, tagi, bezpieczeństwo](./03-opc-ua-serwery.mdx)
4. [MQTT publish-subscribe i IIoT](./04-mqtt-iiot.mdx)
5. [REST/GraphQL w integracji systemów](./05-rest-graphql.mdx)
6. [Edge gateways: buforowanie i store-and-forward](./06-edge-gateways.mdx)
7. [Redundancja i wysoka dostępność](./07-redundancja-dostepnosc.mdx)
8. [Podsumowanie i przykłady praktyczne](./08-podsumowanie.mdx)

## Literatura skrócona

- Modbus Protocol Specification (Modbus.org)
- MQTT Version 5.0 Specification (OASIS Standard)
- OPC UA Part 1-14 (IEC 62541)
- SCADA System Architecture Guide (ISA-95)
- REST API Design Principles (OpenAPI 3.0)
- GraphQL Specification (GraphQL Foundation)
- Edge Computing Best Practices (EdgeX Foundry)
- Node-RED documentation i przykłady mostkowania

<details>
<summary>📝 Notatki prowadzącego</summary>

**Czas**: 120 minut (2h wykładów)

**Demonstracja**: 
- Topologie SCADA: centralne vs. rozproszone
- OPC UA Server z namespace'ami i strukturami tagów
- Node-RED jako edge gateway (store-and-forward)
- REST API i GraphQL w kontekście SCADA
- Mechanizmy redundancji (failover, load balancing)

**Punkty kluczowe**:
- Projektowanie topologii SCADA dla różnych instalacji OZE
- Konfiguracja roli i uprawnień w OPC UA
- Buforowanie danych na edge gateways
- Integracja REST/GraphQL z systemami przemysłowymi
- Strategie redundancji i wysokiej dostępności

**Ćwiczenia praktyczne**:
- Projektowanie architektury SCADA dla farmy PV
- Konfiguracja OPC UA Server z namespace'ami
- Testowanie store-and-forward w warunkach przerwania łączności
- Implementacja REST API dla integracji z systemami nadrzędnymi

</details>

