// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Systemy bezpieczeństwa i monitorowania instalacji OZE',
  tagline: 'Kierunek: Odnawialne źródła energii (semestr 5)',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://vtaustyka.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/KIOZE-sys-bez-monit/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'vtaustyka', // Usually your GitHub org/user name.
  projectName: 'KIOZE-sys-bez-monit', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pl',
    locales: ['pl'],
  },

  // Enable Mermaid diagrams
  markdown: {
    mermaid: true,
  },
  
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          path: 'docs',
          exclude: ['**/bezp-monit/**', '**/wyklady/*/README.md'],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/vtaustyka/KIOZE-sys-bez-monit/tree/main/bezp-monit/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/vtaustyka/KIOZE-sys-bez-monit/tree/main/bezp-monit/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Systemy Bezpieczeństwa OZE',
        logo: {
          alt: 'Logo kursu OZE',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Dokumentacja',
          },
          {to: '/blog', label: 'Zadania', position: 'left'},
          {
            href: 'https://github.com/vtaustyka/KIOZE-sys-bez-monit',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Dokumenty',
            items: [
              {
                label: 'Wprowadzenie',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Zasoby',
            items: [
              {
                label: 'Literatura',
                to: '/docs/literatura',
              },
              {
                label: 'Projekty',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Więcej',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/vtaustyka/KIOZE-sys-bez-monit',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Systemy bezpieczeństwa i monitorowania instalacji OZE. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
