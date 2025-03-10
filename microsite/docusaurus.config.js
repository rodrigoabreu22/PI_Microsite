// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Intelligence in Action: AI-Driven Networks',
  tagline: 'Use ML to improve 5G and Beyond-5G networks.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://github.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/PI_Microsite/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'rodrigoabreu22', // Usually your GitHub org/user name.
  projectName: 'PI_Microsite', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          onUntruncatedBlogPosts: 'ignore',
          showReadingTime: true,
          blogSidebarCount: "ALL",
          blogSidebarTitle: "Minutes",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
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
      navbar: {
        title: 'Intelligence in Action: AI-Driven Networks',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          { to: "/blog", label: "Minutes", position: "left" },
          {
            href: 'https://github.com/rodrigoabreu22/PI_AI-Driven_Networks',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'MS1 - Inception Phase',
                to: 'docs/category/ms1---inception-phase',
              },
              {
                label: 'MS2 - Elaboration Phase',
                to: 'docs/category/ms2---elaboration-phase',
              },
            ],
          },
          {
            title: 'Team',
            items: [
              {
                label: 'Rodrigo Abreu',
                to: 'https://github.com/rodrigoabreu22',
              },
              {
                label: 'Eduardo Lopes',
                to: 'https://github.com/odraude23',
              },
              {
                label: 'Hugo Ribeiro',
                to: 'https://github.com/xHuGODx',
              },
              {
                label: 'João Neto',
                to: 'https://github.com/FunnyJoaoneto',
              },
              {
                label: 'Jorge Domingues',
                to: 'https://github.com/JorgeGuiDomingues',
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Intelligence in Action: AI-Driven Networks, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
