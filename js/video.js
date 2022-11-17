// Add js here.

// Page load Initialize the video variable and turn off autoplay and turn off looping.
var vid = document.getElementById("videoplayer");
vid.loop = false;
vid.autoplay = false;
vid.load();

//Play Button  Play the video.
var playButton = document.getElementById("play");
function playVid() {
  vid.play();
}
playButton.addEventListener("click", playVid);

//Pause Button Pause Video
var pauseButton = document.getElementById("pause");
function pauseVid() {
  vid.pause();
}
pauseButton.addEventListener("click", pauseVid);

// slow down 	Slow down the video to the next lowest playback speed from the list: 0.5, 1, 2.
// If the video is already on the slowest speed, add an alert saying "Video is at slowest speed!"
var slowButton = document.getElementById("slower");
function slowVid() {
  if (vid.playbackRate > 0.5) {
    vid.playbackRate = vid.playbackRate / 2;
  } else {
    alert("Video is at slowest speed!");
  }
}
slowButton.addEventListener("click", slowVid);

//Speed up the video to the next highest playback speed from the list: 0.5, 1, 2.
// If the video is already on the highest speed, add an alert saying "Video is at fastest speed!"
var fastButton = document.getElementById("faster");
function fastVid() {
  if (vid.playbackRate < 2) {
    vid.playbackRate = vid.playbackRate * 2;
  } else {
    alert("Video is at fastest speed!");
  }
}
fastButton.addEventListener("click", fastVid);

//Skip Ahead Advance the current video by 15 seconds. If the video length has been exceeded go back to the start of the video.
var skipButton = document.getElementById("skip");
function skipVid() {
  video_time = vid.currentTime + 15;
  if (video_time > vid.duration) {
    vid.currentTime = 0;
  } else {
    vid.currentTime = video_time;
  }
}
skipButton.addEventListener("click", skipVid);

//	Mute/unmute the video and update the text in the button.
var muteButton = document.getElementById("mute");
function muteVid() {
  if (vid.muted) {
    muteButton.innerHTML = "Mute";
    vid.muted = false;
  } else {
    muteButton.innerHTML = "unmute";
    vid.muted = true;
  }
}
muteButton.addEventListener("click", muteVid);

//	Volume slider  Change the volume based on the slider and update the volume information.
var volSlider = document.getElementById("slider");
var volume = document.getElementById("volume");
function setVol() {
  vid.volume = volSlider.value / 100;
  volume.innerHTML = vid.volume * 100 + "%";
}
volume.innerHTML = vid.volume * 100 + "%";
volSlider.addEventListener("change", setVol);
