/**
 * Timestamp links: <a href="#video-id" data-video="video-id" data-time="68">Jump to 01:08</a>
 * jump the video with that id to the given second and play it.
 * Without JavaScript the link still scrolls to the video.
 */
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

function onClick(event) {
  const link = event.target instanceof Element ? event.target.closest('a[data-video]') : null;
  if (!link) return;
  const video = document.getElementById(link.dataset.video);
  if (!(video instanceof HTMLVideoElement)) return;
  event.preventDefault();
  video.currentTime = Number(link.dataset.time) || 0;
  video.play().catch(() => {});
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  video.scrollIntoView({behavior: reduceMotion ? 'auto' : 'smooth', block: 'center'});
}

if (ExecutionEnvironment.canUseDOM) {
  document.addEventListener('click', onClick);
}
