// @ts-check
import rehypeTapedMedia from './src/plugins/rehypeTapedMedia.js';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Kladde',
  tagline: 'Tutorials and help for the electronic lab notebook of Friedrich Schiller University Jena',
  favicon: 'img/favicon.svg',

  url: 'https://kladde.uni-jena.de',
  baseUrl: '/',
  trailingSlash: true,
  organizationName: 'Steinbeck-Lab',
  projectName: 'demo_Digifellows',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'warn',
  future: {v4: true},
  markdown: {
    // .md pages stay CommonMark (their raw HTML renders as is); .mdx pages can use components.
    format: 'detect',
    hooks: {onBrokenMarkdownLinks: 'throw'},
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    localeConfigs: {
      en: {label: 'English', htmlLang: 'en'},
      de: {label: 'Deutsch', htmlLang: 'de'},
    },
  },

  clientModules: ['./src/clientModules/fonts.js', './src/clientModules/seekVideo.js'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          breadcrumbs: false,
          showLastUpdateTime: true,
          rehypePlugins: [rehypeTapedMedia],
        },
        blog: false,
        pages: false,
        theme: {customCss: './src/css/custom.css'},
      }),
    ],
  ],

  plugins: [
    './src/plugins/translationStatus.js',
    [
      '@docusaurus/plugin-client-redirects',
      {
        // Pages renamed in September 2026 keep their old addresses.
        redirects: [
          {from: '/how-to-start', to: '/new-entry/'},
          {from: '/chemicaleditor', to: '/adding-chemical-equation/'},
          {from: '/scheme', to: '/snippets/'},
        ],
      },
    ],
  ],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        // Local search index for both languages; no external service.
        hashed: true,
        language: ['en', 'de'],
        docsRouteBasePath: '/',
        indexBlog: false,
        indexPages: false,
        explicitSearchResultPath: true,
        highlightSearchTermsOnTargetPage: false,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {defaultMode: 'light', disableSwitch: true, respectPrefersColorScheme: false},
      docs: {sidebar: {hideable: false, autoCollapseCategories: false}},
      tableOfContents: {minHeadingLevel: 2, maxHeadingLevel: 3},
      navbar: {
        title: 'Kladde',
        items: [
          // Plain links with their own active pattern: doc items would all light up,
          // because every page shares one sidebar.
          {to: '/new-entry/', label: 'How to start', position: 'left', activeBaseRegex: '/(new-entry|adding-chemical-equation|snippets)/$'},
          {to: '/sample-analysis/', label: 'Analysis', position: 'left', activeBaseRegex: '/(sample-analysis|ir|nmr|ms)/$'},
          {to: '/eln/', label: 'About', position: 'left', activeBaseRegex: '/(eln|christoph|kevin|kohulan|soyee|license)/$'},
          {type: 'localeDropdown', position: 'right'},
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Kladde',
            items: [
              {label: 'What is ELN?', to: '/eln/'},
              {label: 'Meet our team', to: '/christoph/'},
              {label: 'License', to: '/license/'},
            ],
          },
          {
            title: 'Built on',
            items: [
              {label: 'cheminfo', href: 'https://cheminfo.github.io/'},
              {label: 'Source on GitHub', href: 'https://github.com/Steinbeck-Lab/demo_Digifellows'},
            ],
          },
        ],
        copyright: 'Documentation content CC BY 4.0 · Site code MIT',
      },
    }),
};

export default config;
