import MDXComponents from '@theme-original/MDXComponents';
import MdxVideo from '@site/src/components/MdxVideo';
import StepHeading from '@site/src/components/StepHeading';

export default {
  ...MDXComponents,
  h2: StepHeading,
  video: MdxVideo,
};
