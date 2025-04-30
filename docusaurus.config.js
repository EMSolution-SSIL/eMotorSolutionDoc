// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'eMotorSolution',
  tagline: 'Electric Motor Design and Simulation Tool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://eskandarih.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/eMotorSolutionDoc/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'eskandarih', // Usually your GitHub org/user name.
  projectName: 'eMotorSolutionDoc', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en'],
    localeConfigs: {
      jp: {
        label: '日本語',
        direction: 'ltr',
        htmlLang: 'ja-JP',
      },
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
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
      image: 'img/eMotorSolution_icon.svg',
      navbar: {
        title: 'eMotorSolution',
        logo: {
          alt: 'eMotorSolution Logo',
          src: 'img/eMotorSolution_icon.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'docSidebar',
            sidebarId: 'showcasesSidebar',
            position: 'left',
            label: 'Showcases',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://www.ssil.co.jp/',
            label: 'SSIL',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'X',
                href: 'https://x.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Since Solutions International Laboratory, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
