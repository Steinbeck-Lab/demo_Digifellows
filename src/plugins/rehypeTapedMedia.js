/**
 * Wraps screenshots, portraits and screen recordings in a "taped print" frame
 * (<span class="kl-print kl-print--tape-N">) so the theme can place tape strips around them.
 * N cycles through three tape arrangements on each page. Inline toolbar icons carry an inline
 * style and are left alone. A percentage width on the media moves to the frame.
 */
const PRINT = 'kl-print';
const TAPE_VARIANTS = 3;

function classesOf(node) {
  const value = node.properties?.className;
  if (Array.isArray(value)) return value;
  return typeof value === 'string' ? value.split(/\s+/) : [];
}

function isPrint(node) {
  if (node.type !== 'element') return false;
  if (node.tagName === 'video') return true;
  return node.tagName === 'img' && !node.properties?.style;
}

function wrap(node, index) {
  const frame = {className: [PRINT, `${PRINT}--tape-${(index % TAPE_VARIANTS) + 1}`]};
  if (classesOf(node).includes('kl-portrait')) frame.className.push(`${PRINT}--portrait`);
  const width = typeof node.properties?.width === 'string' ? node.properties.width.trim() : '';
  if (/^\d+(\.\d+)?%$/.test(width)) {
    frame.style = `width:${width}`;
    delete node.properties.width;
  }
  return {type: 'element', tagName: 'span', properties: frame, children: [node]};
}

function walk(parent, counter) {
  if (!Array.isArray(parent.children)) return;
  const insideFrame = parent.type === 'element' && classesOf(parent).includes(PRINT);
  parent.children = parent.children.map((child) => {
    if (!insideFrame && isPrint(child)) return wrap(child, counter.next++);
    walk(child, counter);
    return child;
  });
}

export default function rehypeTapedMedia() {
  return (tree) => {
    walk(tree, {next: 0});
  };
}
