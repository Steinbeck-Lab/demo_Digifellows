/**
 * Records which docs already have a translation (i18n/<locale>/docusaurus-plugin-content-docs/current)
 * so every page can say whether its German text exists yet.
 */
import fs from 'node:fs';
import path from 'node:path';

function listDocIds(dir, base = dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, {withFileTypes: true}).flatMap((dirent) => {
    const full = path.join(dir, dirent.name);
    if (dirent.isDirectory()) return listDocIds(full, base);
    return /\.mdx?$/.test(dirent.name) ? [path.relative(base, full).replace(/\.mdx?$/, '').split(path.sep).join('/')] : [];
  });
}

export default function translationStatus(context) {
  const {siteDir, i18n} = context;
  const docsDir = (locale) => path.join(siteDir, 'i18n', locale, 'docusaurus-plugin-content-docs', 'current');
  return {
    name: 'kladde-translation-status',
    async loadContent() {
      return Object.fromEntries(
        i18n.locales.filter((locale) => locale !== i18n.defaultLocale).map((locale) => [locale, listDocIds(docsDir(locale))]),
      );
    },
    async contentLoaded({content, actions}) {
      actions.setGlobalData({translatedDocIds: content});
    },
    getPathsToWatch() {
      return i18n.locales.map((locale) => `${docsDir(locale)}/**/*.{md,mdx}`);
    },
  };
}
