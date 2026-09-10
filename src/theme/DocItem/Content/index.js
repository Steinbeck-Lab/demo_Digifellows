/**
 * Every page opens like a notebook entry: a condition line (entry number, last update, translation
 * state, a link to the same page in the other language) and, for a German page still showing
 * English, a notice saying so.
 */
import React from 'react';
import clsx from 'clsx';
import Content from '@theme-original/DocItem/Content';
import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {usePluginData} from '@docusaurus/useGlobalData';
import {useAlternatePageUtils} from '@docusaurus/theme-common/internal';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import {ArrowRight} from '@site/src/components/Icons';
import {useEntries} from '@site/src/lib/entries';
import styles from './styles.module.css';

const HOME_ENTRY_NUMBER = '00';

function formatDate(timestamp, locale) {
  return new Intl.DateTimeFormat(locale, {day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC'}).format(
    new Date(timestamp),
  );
}

function LanguageState({isDefaultLocale, translated}) {
  if (isDefaultLocale) {
    return translated ? (
      <Translate id="kladde.condition.german.available" description="German translation of this page exists">
        translated
      </Translate>
    ) : (
      <Translate id="kladde.condition.german.pending" description="German translation of this page does not exist yet">
        not yet translated
      </Translate>
    );
  }
  return translated ? (
    <Translate id="kladde.condition.language.translated" description="The page is shown in the current language">
      German
    </Translate>
  ) : (
    <Translate id="kladde.condition.language.fallback" description="The page falls back to English">
      English, not yet translated
    </Translate>
  );
}

export default function ContentWrapper(props) {
  const {metadata} = useDoc();
  const {i18n} = useDocusaurusContext();
  const {translatedDocIds} = usePluginData('kladde-translation-status');
  const {createUrl} = useAlternatePageUtils();
  const entry = useEntries().find((item) => item.docId === metadata.id);
  const isHome = metadata.id === 'index';
  const number = entry?.number ?? (isHome ? HOME_ENTRY_NUMBER : undefined);
  const isDefaultLocale = i18n.currentLocale === i18n.defaultLocale;
  const showingFallback = !isDefaultLocale && metadata.source.startsWith('@site/docs/');
  const translated = !showingFallback && (translatedDocIds.de ?? []).includes(metadata.id);
  const otherLocale = i18n.locales.find((locale) => locale !== i18n.currentLocale);

  return (
    <div
      className={clsx('kl-page', isHome && 'kl-page--home', entry && 'kl-page--entry')}
      style={entry ? {'--kl-entry-number': `"${entry.number}"`} : undefined}>
      <div className={clsx(styles.strip, 'kl-condition')}>
        <dl className={styles.condition}>
          {number && (
            <div>
              <dt>
                <Translate id="kladde.condition.entry" description="Label of the entry number box">
                  Entry
                </Translate>
              </dt>
              <dd>{number}</dd>
            </div>
          )}
          {metadata.lastUpdatedAt && (
            <div>
              <dt>
                <Translate id="kladde.condition.updated" description="Label of the last-updated box">
                  Updated
                </Translate>
              </dt>
              <dd>{formatDate(metadata.lastUpdatedAt, i18n.currentLocale)}</dd>
            </div>
          )}
          <div>
            <dt>
              {isDefaultLocale ? (
                <Translate id="kladde.condition.german" description="Label of the German-translation box on English pages">
                  German
                </Translate>
              ) : (
                <Translate id="kladde.condition.language" description="Label of the language box on translated locales">
                  Language
                </Translate>
              )}
            </dt>
            <dd>
              <LanguageState isDefaultLocale={isDefaultLocale} translated={translated} />
            </dd>
          </div>
        </dl>
        {otherLocale && (
          <a
            className={styles.switch}
            href={createUrl({locale: otherLocale, fullyQualified: false})}
            hrefLang={otherLocale}
            lang={otherLocale}
            target="_self">
            <span>{i18n.localeConfigs[otherLocale]?.label ?? otherLocale}</span>
            <ArrowRight />
          </a>
        )}
      </div>
      {showingFallback && (
        <p className={clsx(styles.notice, 'kl-notice')} role="note">
          <Translate id="kladde.notice.untranslated" description="Notice on a translated locale when the page still shows English">
            This page is not translated yet, so it is shown in English.
          </Translate>
        </p>
      )}
      <Content {...props} />
    </div>
  );
}
