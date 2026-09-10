function seekVideo(seconds) {
  var video = document.getElementById('sandmeyer');
  if (video) {
    video.currentTime = seconds;
    video.play();
    video.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function seekVideo(seconds) {
  var video = document.getElementById('snippets-preset');
  if (video) {
    video.currentTime = seconds;
    video.play();
    video.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}
