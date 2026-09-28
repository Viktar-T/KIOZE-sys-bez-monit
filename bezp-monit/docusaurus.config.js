// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const repoUrl = 'https://github.com/Viktar-T/KIOZE-sys-bez-monit';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Systemy bezpieczeństwa i monitorowania instalacji OZE',
  tagline: 'Kierunek: Odnawialne źródła energii (semestr 5)',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    // Also turns on the faster Rspack/SWC build (needs @docusaurus/faster)
    v4: true,
  },

  // Set the production url of your site here (Vercel deployment)
  url: 'https://bezp-monit.vercel.app',
  // On Vercel, the site is served from root
  baseUrl: '/',

  organizationName: 'Viktar-T',
  projectName: 'KIOZE-sys-bez-monit',

  // Fail the build instead of publishing broken links
  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pl',
    locales: ['pl'],
  },

  markdown: {
    // Enable Mermaid diagrams
    mermaid: true,
    // Docs use the `:::tip Tytuł` admonition title syntax, which `future.v4`
    // disables by default (the new syntax is `:::tip[Tytuł]`)
    mdx1Compat: {
      admonitions: true,
    },
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
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
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          // "Edit this page" links
          editUrl: `${repoUrl}/tree/main/bezp-monit/`,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Link preview image (Teams, e-mail, social media)
      image: 'img/social-card.png',
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
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
          {
            href: repoUrl,
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
            ],
          },
          {
            title: 'Więcej',
            items: [
              {
                label: 'GitHub',
                href: repoUrl,
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
