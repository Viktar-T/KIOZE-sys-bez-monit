import React, {useState} from 'react';
import clsx from 'clsx';
import s from './viz.module.css';
import {ToggleGroup, VizFrame} from './Frame';

// Level per cell: 0 = not characteristic (—), 1 = present, 2 = dominant.
// Dominant hazards follow the instructor notes of W1, part 1.
const TECH = ['PV', 'Wiatr', 'BESS', 'Biogaz'];

const GROUPS = [
  {
    id: 'energia',
    label: 'Energia, ogień, gazy',
    rows: [
      {
        name: 'Elektryczne',
        cells: [
          [2, 'napięcie DC przy świetle dziennym'],
          [1, 'łuk i porażenie w turbinie'],
          [1, 'wysokie napięcie DC, zwarcie'],
          [1, 'urządzenie elektryczne jako źródło zapłonu w strefie Ex'],
        ],
      },
      {
        name: 'Pożarowe',
        cells: [
          [1, 'łuk na złączach i rozłącznikach DC'],
          [2, 'pożar gondoli na wysokości'],
          [2, 'niekontrolowany wzrost temperatury ogniw'],
          [1, 'zapłon uwolnionego gazu'],
        ],
      },
      {
        name: 'Wybuchowe',
        cells: [
          [0],
          [0],
          [2, 'deflagracja gazów z ogniw w obudowie'],
          [2, 'metan w mieszaninie z powietrzem'],
        ],
      },
      {
        name: 'Toksyczne i duszące',
        cells: [
          [1, 'produkty spalania'],
          [0],
          [1, 'HF, CO, HCN w gazach z ogniw'],
          [2, 'H₂S, niedobór tlenu'],
        ],
      },
    ],
  },
  {
    id: 'ludzie',
    label: 'Ludzie, otoczenie, cyber',
    rows: [
      {
        name: 'Mechaniczne',
        cells: [
          [1, 'spadające moduły podczas akcji gaśniczej'],
          [2, 'awaria łopaty, odrzut lodu'],
          [0],
          [1, 'nad- i podciśnienie w zbiornikach gazu'],
        ],
      },
      {
        name: 'Praca na wysokości',
        cells: [[1, 'prace na dachu'], [2, 'drabiny w wieży, ewakuacja z gondoli'], [0], [0]],
      },
      {
        name: 'Środowiskowe',
        cells: [
          [0],
          [1, 'spadające płonące elementy'],
          [1, 'dym toksyczny, ewakuacja okolicy'],
          [1, 'uwolnienia substancji do otoczenia'],
        ],
      },
      {
        name: 'Cyber',
        cells: [
          [1, 'falowniki z łącznością'],
          [1, 'SCADA, zdalny dostęp'],
          [1, 'zdalny dostęp do BMS i EMS'],
          [1, 'zdalne sterowanie procesem'],
        ],
        shared: 'wspólne dla wszystkich technologii: te same łącza służą monitoringowi i sterowaniu (W10)',
      },
    ],
  },
];

/**
 * Hazard map as a heat table: rows = hazard classes, columns = technologies.
 * Click a row or column header to read it on its own.
 */
export default function HazardHeatmap({title, source, groups = GROUPS, tech = TECH}) {
  const [groupId, setGroupId] = useState(groups[0].id);
  const [focus, setFocus] = useState(null);
  const rows = groupId === 'all' ? groups.flatMap((g) => g.rows) : groups.find((g) => g.id === groupId).rows;

  const toggleFocus = (next) =>
    setFocus((cur) => (cur && cur.type === next.type && cur.i === next.i ? null : next));

  const isDim = (r, c) =>
    focus && ((focus.type === 'row' && focus.i !== r) || (focus.type === 'col' && focus.i !== c));

  return (
    <VizFrame
      title={title}
      source={source}
      controls={
        <>
          <ToggleGroup
            label="Grupa zagrożeń"
            value={groupId}
            onChange={(v) => {
              setGroupId(v);
              setFocus(null);
            }}
            options={[
              ...groups.map((g) => ({value: g.id, label: g.label})),
              {value: 'all', label: 'Wszystkie'},
            ]}
          />
          <span>Kliknij nagłówek wiersza lub kolumny, aby czytać go osobno.</span>
        </>
      }
      note={
        <span className={s.legend}>
          <span className={s.legendItem}>
            <span className={s.swatch} style={{background: 'var(--viz-heat-l2)'}} />● zagrożenie dominujące
          </span>
          <span className={s.legendItem}>
            <span className={s.swatch} style={{background: 'var(--viz-heat-l1)'}} />
            występuje
          </span>
          <span className={s.legendItem}>
            <span className={s.swatch} style={{outline: '1px dashed var(--viz-axis)'}} />— nie jest
            charakterystyczne
          </span>
        </span>
      }>
      <table className={s.heat}>
        <thead>
          <tr>
            <th aria-label="Klasa zagrożenia" />
            {tech.map((t, c) => (
              <th
                key={t}
                scope="col"
                tabIndex={0}
                className={clsx(focus?.type === 'row' && s.dim)}
                aria-pressed={focus?.type === 'col' && focus.i === c}
                onClick={() => toggleFocus({type: 'col', i: c})}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleFocus({type: 'col', i: c})}>
                {t}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, r) => (
            <React.Fragment key={row.name}>
              <tr>
                <th
                  scope="row"
                  tabIndex={0}
                  className={clsx(focus?.type === 'col' && s.dim)}
                  aria-pressed={focus?.type === 'row' && focus.i === r}
                  onClick={() => toggleFocus({type: 'row', i: r})}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleFocus({type: 'row', i: r})}>
                  {row.name}
                </th>
                {row.cells.map(([level, text], c) => (
                  <td key={tech[c]} className={clsx(s.heatCell, s[`heat${level}`], isDim(r, c) && s.dim)}>
                    {level === 0 ? '—' : text}
                  </td>
                ))}
              </tr>
              {row.shared && (
                <tr className={s.sharedRow}>
                  <th aria-hidden="true" />
                  <td
                    colSpan={tech.length}
                    className={clsx(focus && focus.type === 'row' && focus.i !== r && s.dim)}>
                    ↔ {row.shared}
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </VizFrame>
  );
}
