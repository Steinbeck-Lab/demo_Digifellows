/**
 * Page links at the end of an entry. A page can relabel them in its front matter:
 *   pagination_next_label: Use snippets to describe your scheme
 *   pagination_prev_label: …
 * The targets themselves come from pagination_next / pagination_prev or the sidebar order.
 */
import React from 'react';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import DocPaginator from '@theme/DocPaginator';

const relabel = (link, label) => (link && typeof label === 'string' && label.trim() ? {...link, title: label.trim()} : link);

export default function DocItemPaginator() {
  const {metadata, frontMatter} = useDoc();
  return (
    <DocPaginator
      className="kl-paginator"
      previous={relabel(metadata.previous, frontMatter.pagination_prev_label)}
      next={relabel(metadata.next, frontMatter.pagination_next_label)}
    />
  );
}
