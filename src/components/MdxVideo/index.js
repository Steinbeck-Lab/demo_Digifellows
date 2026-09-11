/**
 * Videos in page content register their id as a link target, so timestamp links
 * (href="#video-id") are checked by the build like links to headings.
 */
import React from 'react';
import useBrokenLinks from '@docusaurus/useBrokenLinks';

export default function MdxVideo(props) {
  const brokenLinks = useBrokenLinks();
  if (props.id) brokenLinks.collectAnchor(props.id);
  return <video {...props} />;
}
