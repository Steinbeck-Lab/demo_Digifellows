function seekVideo(id, seconds) {
  var video = document.getElementById(id);
  if (video) {
    video.currentTime = seconds;
    video.play();
    video.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}
