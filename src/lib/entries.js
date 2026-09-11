import {useMemo} from 'react';
import {useDocsSidebar} from '@docusaurus/plugin-content-docs/client';

export const ENTRY_CLASS = 'kl-entry';

function collect(items, section, out) {
  for (const item of items) {
    if (item.type === 'category') {
      collect(item.items, item.label, out);
    } else if (item.type === 'link' && item.docId && (item.className ?? '').split(/\s+/).includes(ENTRY_CLASS)) {
      out.push({
        number: String(out.length + 1).padStart(2, '0'),
        docId: item.docId,
        href: item.href,
        label: item.label,
        section,
      });
    }
  }
  return out;
}

/** The numbered workflow entries, in sidebar order. */
export function useEntries() {
  const sidebar = useDocsSidebar();
  return useMemo(() => (sidebar ? collect(sidebar.items, null, []) : []), [sidebar]);
}
