---
sidebar_position: 1
title: "Wykład 1: Architektura systemów monitoringu OZE"
---

# Wykład 1: Architektura systemów monitoringu OZE

## 📋 Przegląd

Ten wykład wprowadza w tematykę systemów monitoringu dla instalacji odnawialnych źródeł energii (OZE). Omawia podstawowe architektury, kluczowe metryki wydajności (KPI), oraz filozofię projektowania systemów alarmowania.

**Czas trwania**: 120 minut  
**Poziom trudności**: Początkujący  
**Format**: Wykład + Dyskusja

## 🎯 Cele kształcenia

Po ukończeniu tego wykładu studenci będą potrafili:

1. **Wyjaśnić** rolę i znaczenie systemów monitoringu w instalacjach OZE
2. **Rozróżnić** architektur edge-fog-cloud oraz wskazać ich zastosowania
3. **Zdefiniować** kluczowe metryki wydajności (KPI) dla różnych typów instalacji OZE
4. **Zaprojektować** podstawową strukturę systemu alarmowania z uwzględnieniem priorytetów
5. **Ocenić** wymagania dla systemów monitoringu w kontekście konkretnej instalacji

## 📚 Omawiane tematy

1. [**Rola monitoringu w OZE**](./01-rola-monitoringu) - Wprowadzenie i kontekst
2. [**Architektury monitoringu**](./02-architektury) - Warstwy edge-fog-cloud
3. [**Metryki i KPI**](./03-metryki-kpi) - Pomiary wydajności
4. [**Filozofia alarmowania**](./04-alarmy) - Systemy powiadamiania
5. [**Podsumowanie**](./05-podsumowanie) - Kluczowe wnioski

## 📖 Literatura obowiązkowa

- **IEC 61850** - Standard komunikacji w systemach automatyki elektroenergetycznej
- Borlase, S. G. (2017). *Smart Grids: Advanced Technologies and Solutions*. CRC Press, Chapter 3-4
- Masters, G. M. (2013). *Renewable and Efficient Electric Power Systems*. Wiley-IEEE Press, Chapter 10

## 📖 Literatura uzupełniająca

- [NREL - Solar Resource Data](https://www.nrel.gov/grid/solar-resource/renewable-resource-data.html)
- [IEA - Renewable Energy Integration](https://www.iea.org/topics/renewable-energy-integration)
- Dokumentacja systemów SCADA (Ignition, Wonderware)

## 🔧 Wymagane narzędzia

Brak wymagań dotyczących oprogramowania dla tego wykładu. 

**Zalecane:**
- Przeglądarkainternetowa do eksploracji przykładów dashboardów
- Notatnik do zapisywania kluczowych pojęć

## 💡 Przygotowanie przed wykładem

Przed rozpoczęciem tego wykładu studenci powinni:
- [ ] Przejrzeć [Wprowadzenie do kursu](../../intro)
- [ ] Zapoznać się z podstawami instalacji fotowoltaicznych i wiatrowych
- [ ] Mieć podstawową wiedzę o systemach elektrycznych
- [ ] (Opcjonalnie) Przejrzeć przykładowe dashboardy monitoringu online

## 📝 Ocenianie

- **Quiz sprawdzający**: Dostępny po wykładzie - 10 pytań, 15 minut
- **Przygotowanie do lab**: Pomyśl o przykładowej instalacji OZE (PV, wiatr, biogas) dla ćwiczeń projektowych

## 🔗 Powiązane materiały

- [Ćwiczenie 1: Projekt architektury](../../cwiczenia/README.md) - Praktyczne zastosowanie wiedzy
- [Wykład 2: Czujniki i akwizycja danych](../README.md) - Następny temat
- [Literatura - Standardy](../../literatura/index.md) - Normy IEC, IEEE

## 📊 Harmonogram wykładu

| Czas | Temat | Format |
|------|-------|--------|
| 0-10 min | Wprowadzenie i motywacja | Wykład + Dyskusja |
| 10-30 min | Rola monitoringu w OZE | Wykład |
| 30-60 min | Architektury edge-fog-cloud | Wykład + Przykłady |
| 60-70 min | **Przerwa** | - |
| 70-95 min | Metryki KPI i alarmy | Wykład + Case studies |
| 95-110 min | Podsumowanie i Q&A | Dyskusja |
| 110-120 min | Zapowiedź ćwiczeń | Informacje organizacyjne |

---

## 🎓 Dla wykładowcy

:::info Uwagi metodyczne
- Rozpocznij od konkretnego przykładu awarii niewyktytej przez monitoring
- Używaj wizualizacji i diagramów (dostępne w sekcjach)
- Zachęcaj do pytań, szczególnie podczas części o KPI
- Połącz teorię z praktycznymi przypadkami z branży
:::

:::tip Przygotowanie
- Przygotuj backup: przykłady dashboardów (screenshots lub live demo)
- Miej gotowe przykłady alarmów z rzeczywistych instalacji
- Opcjonalnie: Zapro guest speakera z branży (15 min)
:::

---

**Następny wykład**: [Wykład 2: Czujniki i akwizycja danych](../README.md)
