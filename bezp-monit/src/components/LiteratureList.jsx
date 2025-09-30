import React from 'react';
import literature from '@site/src/data/literature.json';

/**
 * Literature List Component
 * 
 * Displays formatted bibliography from JSON data source.
 * Supports sorting by year, title, or authors.
 * 
 * @param {string} topic - Key from literature.json (required)
 * @param {string} title - Section heading (default: 'Literatura')
 * @param {string} sortBy - Sort field: 'year', 'title', or 'authors' (default: 'year')
 * @param {string} order - Sort order: 'asc' or 'desc' (default: 'desc')
 * 
 * @example
 * <LiteratureList 
 *   topic="monitoring" 
 *   title="Literatura z zakresu monitoringu"
 *   sortBy="year"
 *   order="desc"
 * />
 */
export default function LiteratureList({
  topic,
  title = 'Literatura',
  sortBy = 'year',
  order = 'desc',
}) {
  const items = literature[String(topic)] || [];
  
  // Return null if no items found for topic
  if (!items.length) return null;

  // Sort items based on sortBy and order
  const sorted = [...items].sort((a, b) => {
    const dir = order === 'asc' ? 1 : -1;
    
    if (sortBy === 'year') {
      const ay = Number(a.year) || 0;
      const by = Number(b.year) || 0;
      return (ay - by) * dir;
    }
    
    if (sortBy === 'title') {
      return a.title.localeCompare(b.title) * dir;
    }
    
    // Default: sort by authors
    return a.authors.localeCompare(b.authors) * dir;
  });

  return (
    <section className="literature-section">
      <h2>{title}</h2>
      <ol className="literature-list">
        {sorted.map((item, index) => (
          <li key={index} className="literature-item">
            <span className="literature-authors">{item.authors}</span>
            {' '}
            <span className="literature-year">({item.year})</span>.
            {' '}
            <strong className="literature-title">{item.title}</strong>
            {item.source && (
              <>
                . <span className="literature-source">{item.source}</span>
              </>
            )}
            {item.link && (
              <>
                {' '}—{' '}
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="literature-link"
                >
                  link
                </a>
              </>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
