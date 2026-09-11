/**
 * The notebook index: every numbered workflow entry as a full-width label
 * (number, title, section, description), with ticked steps once a reader has used the margin boxes.
 */
import React from 'react';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import {useDocById} from '@docusaurus/plugin-content-docs/client';
import {useEntries} from '@site/src/lib/entries';
import {useTickState} from '@site/src/lib/ticks';
import styles from './styles.module.css';

function Entry({entry, ticks}) {
  const doc = useDocById(entry.docId);
  const progress = ticks[entry.docId];
  const total = progress?.steps.length ?? 0;
  const done = progress ? progress.done.filter((id) => progress.steps.includes(id)).length : 0;

  return (
    <li className={styles.item}>
      <Link to={entry.href} className={styles.link}>
        <span className={styles.number} aria-hidden="true">
          {entry.number}
        </span>
        <span className={styles.title}>{entry.label}</span>
        {entry.section && <span className={styles.section}>{entry.section}</span>}
        {doc?.description && <span className={styles.description}>{doc.description}</span>}
        {done > 0 && (
          <span className={styles.progress}>
            <Translate
              id="kladde.index.progress"
              description="How many numbered steps of an entry the reader has ticked"
              values={{done, total}}>
              {'{done} of {total} steps ticked'}
            </Translate>
          </span>
        )}
      </Link>
    </li>
  );
}

export default function EntryIndex() {
  const entries = useEntries();
  const ticks = useTickState();
  return (
    <ol
      className={styles.index}
      aria-label={translate({
        id: 'kladde.index.label',
        message: 'Entries of the Kladde workflow',
        description: 'Accessible name of the numbered entry index on the home page',
      })}>
      {entries.map((entry) => (
        <Entry key={entry.docId} entry={entry} ticks={ticks} />
      ))}
    </ol>
  );
}
