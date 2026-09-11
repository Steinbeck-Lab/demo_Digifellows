// @ts-check
// Docs marked with the kl-entry class are the numbered workflow entries (01, 02, …).
// Their numbers come from this order, in the sidebar, on the home index and on each page.

/** @param {string} id */
const entry = (id) => ({type: 'doc', id, className: 'kl-entry'});

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  kladde: [
    'index',
    {
      type: 'category',
      label: 'How to start',
      collapsible: false,
      items: [entry('new-entry'), entry('adding-chemical-equation'), entry('snippets')],
    },
    {
      type: 'category',
      label: 'Analysis',
      collapsible: false,
      items: [entry('sample-analysis'), entry('ir'), entry('nmr'), entry('ms')],
    },
    entry('report'),
    {
      type: 'category',
      label: 'About',
      items: [
        'eln',
        {type: 'category', label: 'Meet our team', items: ['christoph', 'kevin', 'kohulan', 'soyee']},
        'license',
      ],
    },
  ],
};

export default sidebars;
