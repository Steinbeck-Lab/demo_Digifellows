/**
 * Numbered step headings ("## 1. Open your ELN Entry") get a tick box in the notebook margin.
 * Every other h2 renders unchanged.
 */
import React, {useEffect} from 'react';
import {translate} from '@docusaurus/Translate';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import Heading from '@theme/Heading';
import {Check} from '@site/src/components/Icons';
import {registerStep, toggleTick, useTickState} from '@site/src/lib/ticks';

const STEP = /^\s*\d+\.\s/;

function textOf(node) {
  if (node == null || typeof node === 'boolean') return '';
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(textOf).join('');
  if (React.isValidElement(node)) return textOf(node.props.children);
  return '';
}

function Step({step, ...props}) {
  const {metadata} = useDoc();
  const done = Boolean(useTickState()[metadata.id]?.done.includes(props.id));

  useEffect(() => {
    registerStep(metadata.id, props.id);
  }, [metadata.id, props.id]);

  return (
    <div className="kl-step">
      <button
        type="button"
        role="checkbox"
        aria-checked={done}
        className="kl-tick"
        aria-label={translate(
          {
            id: 'kladde.step.tick',
            message: 'Done: {step}',
            description: 'Accessible label of the margin tick box next to a numbered step',
          },
          {step},
        )}
        onClick={() => toggleTick(metadata.id, props.id)}>
        <Check />
      </button>
      <Heading as="h2" {...props} />
    </div>
  );
}

export default function StepHeading(props) {
  const text = textOf(props.children).replace(/\s+/g, ' ').trim();
  if (!props.id || !STEP.test(text)) return <Heading as="h2" {...props} />;
  return <Step step={text} {...props} />;
}
