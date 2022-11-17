export function createAudioBlock(bird, answerIsRight = false) {
  //создание элементов плеера
  const playerImg = document.createElement("div");
  playerImg.className = "audioplayer-img";

  const playerWrapper = document.createElement("div");
  playerWrapper.className = "audioplayer-wrapper";

  const audioTitle = document.createElement("div");
  audioTitle.className = "audioplayer-title";
  audioTitle.innerText = answerIsRight ? bird.name : "* * * * * *";
  const playerControls = document.createElement("div");
  playerControls.className = "audioplayer-controls";

  const playBtn = document.createElement("button");
  playBtn.className = "audioplayer-play";

  const progressBarWrapper = document.createElement("div");
  progressBarWrapper.className = "audioplayer-progressbar-timer";

  const progressBar = document.createElement("input");
  progressBar.className = "audioplayer-progressbar";
  progressBar.type = "range";
  progressBar.min = 0;
  progressBar.max = "";
  progressBar.value = 0;
  const timer = document.createElement("div");
  timer.className = "audioplayer-timer";

  const current = document.createElement("div");
  current.className = "current";
  current.innerText = "00:00";
  const duration = document.createElement("div");
  duration.className = "duration";
  duration.innerText = "00:00";

  timer.append(current);
  timer.append(duration);

  progressBarWrapper.append(progressBar);
  progressBarWrapper.append(timer);

  playerControls.append(playBtn);
  playerControls.append(progressBarWrapper);

  const playerVolume = document.createElement("div");
  playerVolume.className = "audioplayer-volume";

  const volumeBtn = document.createElement("button");
  volumeBtn.className = "audioplayer-volume-btn";
  const volumeRange = document.createElement("input");
  volumeRange.className = "audioplayer-volume-range";
  volumeRange.type = "range";
  volumeRange.min = "0";
  volumeRange.max = "1";
  volumeRange.step = "0.01";
  volumeRange.value = 0.5;

  playerVolume.append(volumeBtn);
  playerVolume.append(volumeRange);

  playerWrapper.append(audioTitle);
  playerWrapper.append(playerControls);
  playerWrapper.append(playerVolume);

  const audioplayer = document.createElement("div");
  audioplayer.className = "audioplayer";

  audioplayer.append(playerImg);
  audioplayer.append(playerWrapper);

  //логика плеера
  playBtn.addEventListener("click", (el) => {
    setPlayPause();
  });

  volumeBtn.addEventListener("click", (el) => {
    clickVolume();
  });

  progressBar.addEventListener("change", (el) => {
    pauseTime = progressBar.value;
    upgradeProgressBar(pauseTime);
  });

  volumeRange.addEventListener("change", (el) => {
    changeVolume(volumeRange.value);
  });

  const audio = new Audio();

  let isPlay = false;
  let pauseTime = 0;
  let volumeValueLast = 0.5;

  function playAudio() {
    audio.src = bird.audio;
    audio.currentTime = pauseTime;

    audio.play();
    audio.addEventListener("loadeddata", (el) => {
      if (audio.duration) duration.textContent = formatTime(audio.duration);
    });
    isPlay = true;
    playBtn.classList.add("pause");
    audio.addEventListener("timeupdate", (el) => {
      upgradeProgressBar();
    });
  }

  function setPlayPause() {
    if (!isPlay) {
      playAudio();
    } else {
      audio.pause();
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

  function upgradeProgressBar(value) {
    if (audio.duration) progressBar.max = Math.floor(audio.duration);

    if (value) audio.currentTime = value;

    current.textContent = formatTime(audio.currentTime);
    progressBar.value = audio.currentTime;
  }

  function clickVolume() {
    if (volumeBtn.className.includes("mute")) {
      audio.volume = volumeValueLast;
      volumeBtn.classList.remove("mute");
      volumeRange.value = volumeValueLast;
    } else {
      volumeValueLast = audio.volume;
      audio.volume = 0;
      volumeRange.value = 0;
      volumeBtn.classList.add("mute");
    }
  }

  function changeVolume(value) {
    audio.volume = value;

    if (+value) {
      volumeBtn.classList.remove("mute");
    } else {
      volumeBtn.classList.add("mute");
    }
  }

  return audioplayer;
}
