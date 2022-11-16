const playBtn = document.querySelector(".audioplayer-play");

const audio = new Audio();

let isPlay = false;
let pauseTime = 0;
const bird = localStorage.getItem("trueBird");

export default function playAudio(bird) {
  const audioTitle = document.querySelector(".audioplayer-title"),
    duration = document.querySelector(".duration");
  const srcAudio = bird.audio;

  audio.src = srcAudio;
  audio.currentTime = pauseTime;

  audioTitle.textContent = false ? bird.name : " * * * * * * ";

  audio.play();
  audio.ontimeupdate = function () {
    if (audio.duration) duration.textContent = formatTime(audio.duration);
  };
  isPlay = true;
  playBtn.classList.add("pause");

  upgradeProgressBar();
}

let setInter;

export function setPlayPause(bird) {
  if (!isPlay) {
    playAudio(bird);
    setInter = setInterval(upgradeProgressBar, 500);
  } else {
    audio.pause();
    clearInterval(setInter);
    pauseTime = audio.currentTime;
    isPlay = false;
    playBtn.classList.remove("pause");
  }
}

function formatTime(time) {
  const min = Math.floor(time / 60)
    .toString()
    .padStart(2, "0");
  const sec = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");
  return `${min}:${sec}`;
}

export function upgradeProgressBar(remoteTime) {
  const progressBar = document.querySelector(".audioplayer-progressbar");
  const current = document.querySelector(".current");

  if (audio.duration) progressBar.max = Math.floor(audio.duration);

  if (remoteTime) audio.currentTime = remoteTime;

  current.textContent = formatTime(audio.currentTime);
  progressBar.value = audio.currentTime;
}
