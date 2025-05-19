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
          },
          {
            title: 'Documentation',
            items: [
              {
                label: 'Project Context',
                to: 'docs/documentation/project_context',
              },
              {
                label: 'State of Art',
                to: 'docs/documentation/state-of-art',
              },
              {
                label: 'Use Case & Scenario',
                to: 'docs/documentation/use_cases',
              },
              {
                label: 'Requirements',
                to: 'docs/documentation/requirements',
              },
              {
                label: 'Architecture',
                to: 'docs/documentation/architecture',
              },
              {
                label: 'Mockups',
                to: 'docs/documentation/mockups',
              },
              {
                label: 'Data Flow',
                to: 'docs/documentation/data_flow',
              },
              {
                label: 'Calendar',
                to: 'docs/documentation/calendar',
              },

            ],
          },
          {
            title: 'Deliverables',
            items: [
              {
                label: 'MS1 - Inception Phase',
                to: 'docs/deliverables/ms1',
              },
              {
                label: 'MS2 - Elaboration Phase',
                to: 'docs/deliverables/ms2',
              },
              {
                label: 'Checkpoint 1',
                to: 'docs/deliverables/checkpoint1',
              },
              {
                label: 'MS3 - Construction Phase',
                to: 'docs/deliverables/ms3',
              },
              {
                label: 'Checkpoint 2',
                to: 'docs/deliverables/checkpoint2',
              },
            ],
          },
          {
            title: 'Minutes',
            items: [
              {
                label: 'Minute 1',
                to: 'blog/Minute1/minute1',
              },
              {
                label: 'Minute 2',
                to: 'blog/Minute2/minute2',
              },
              {
                label: 'Minute 3',
                to: 'blog/Minute3/minute3',
              },
              {
                label: 'Minute 4',
                to: 'blog/Minute4/minute4',
              },
              {
                label: 'Minute 5',
                to: 'blog/Minute5/minute5',
              },
              {
                label: 'Minute 6',
                to: 'blog/Minute6/minute6',
              },
              {
                label: 'Minute 7',
                to: 'blog/Minute7/minute7',
              },
              {
                label: 'Minute 8',
                to: 'blog/Minute8/minute8',
              },
              {
                label: 'Minute 9',
                to: 'blog/Minute9/minute9',
              },
              {
                label: 'Minute 10',
                to: 'blog/Minute10/minute10',
              },
              {
                label: 'Minute 12',
                to: 'blog/Minute12/minute12'
              },
              {
                label: 'Minute 13',
                to: 'blog/Minute13/minute13'
              },
              {
                label: 'Minute 14',
                to: 'blog/Minute14/minute14'
              }
            ],
          },
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
