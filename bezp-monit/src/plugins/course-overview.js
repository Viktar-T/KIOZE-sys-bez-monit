// Collects the lectures and exercise cards shown on the homepage, so the
// homepage follows the docs without a hand-written list.
import fs from 'node:fs/promises';
import path from 'node:path';

const LECTURES_DIR = 'wyklady-bezp';
const EXERCISES_DIR = 'cwiczenia/karty';

// First plain paragraph of a Markdown/MDX file, without markup
function firstParagraph(source) {
  const body = source.replace(/^---[\s\S]*?\n---\s*\n/, '');
  for (const block of body.split(/\r?\n\s*\r?\n/)) {
    const text = block.trim();
    // Skip headings, lists, tables, quotes, admonitions, code, JSX and imports
    if (!text || /^(#|import\s|export\s|<|:::|\||[-*+]\s|>|\d+\.\s|```|!\[)/.test(text)) {
      continue;
    }
    return text
      .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
      .replace(/\*\*|__|`/g, '')
      .replace(/\s+/g, ' ');
  }
  return null;
}

export default function courseOverviewPlugin(context) {
  return {
    name: 'course-overview',

    async allContentLoaded({allContent, actions}) {
      const docsContent = allContent['docusaurus-plugin-content-docs']?.default;
      const docs = docsContent?.loadedVersions?.[0]?.docs ?? [];
      const readSource = (doc) =>
        fs.readFile(path.join(context.siteDir, doc.source.replace(/^@site\//, '')), 'utf8');

      const lectureIndexes = docs.filter((doc) =>
        new RegExp(`^${LECTURES_DIR}/[^/]+/index$`).test(doc.id),
      );
      const lectures = await Promise.all(
        lectureIndexes.map(async (doc) => {
          const number = doc.sourceDirName.match(/wyklad-(\d+)/)?.[1];
          return {
            number: number === undefined ? null : Number(number),
            title: doc.title.replace(/^W\d+:\s*/, ''),
            description: firstParagraph(await readSource(doc)),
            permalink: doc.permalink,
            // Topic pages of the lecture, next to its index page
            topics: docs.filter(
              (other) => other.sourceDirName === doc.sourceDirName && other.id !== doc.id,
            ).length,
          };
        }),
      );
      lectures.sort((a, b) => (a.number ?? Infinity) - (b.number ?? Infinity));

      const exercises = docs
        .filter((doc) => doc.sourceDirName === EXERCISES_DIR)
        .sort((a, b) => a.id.localeCompare(b.id))
        .map((doc) => {
          // "Zadanie 1 — Monitoring instalacji PV" -> label + title
          const [label, ...rest] = doc.title.split(' — ');
          return {
            label: rest.length > 0 ? label : null,
            title: rest.length > 0 ? rest.join(' — ') : doc.title,
            permalink: doc.permalink,
            duration: doc.frontMatter.duration_min ?? null,
          };
        });

      actions.setGlobalData({lectures, exercises});
    },
  };
}
