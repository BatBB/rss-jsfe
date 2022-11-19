// import stopAudio from "./app";

export default class audioplayer {
  audio = new Audio();

  audioSrc;
  isPlay = false;
  pauseTime = 0;
  volumeValueLast = 0.5;

  createPlayerBlock() {
    //создание элементов плеера
    this.playerImg = document.createElement("div");
    this.playerImg.className = "audioplayer-img";

    this.playerWrapper = document.createElement("div");
    this.playerWrapper.className = "audioplayer-wrapper";

    this.audioTitle = document.createElement("div");
    this.audioTitle.className = "audioplayer-title";
    this.audioTitle.innerText = "* * * * * * *";

    this.playerControls = document.createElement("div");
    this.playerControls.className = "audioplayer-controls";

    this.playBtn = document.createElement("button");
    this.playBtn.className = "audioplayer-play";

    this.progressBarWrapper = document.createElement("div");
    this.progressBarWrapper.className = "audioplayer-progressbar-timer";

    this.progressBar = document.createElement("input");
    this.progressBar.className = "audioplayer-progressbar";
    this.progressBar.type = "range";
    this.progressBar.min = 0;
    this.progressBar.max = "";
    this.progressBar.value = 0;
    this.timer = document.createElement("div");
    this.timer.className = "audioplayer-timer";

    this.current = document.createElement("div");
    this.current.className = "current";
    this.current.innerText = "00:00";
    this.duration = document.createElement("div");
    this.duration.className = "duration";
    this.duration.innerText = "00:00";

    this.timer.append(this.current);
    this.timer.append(this.duration);

    this.progressBarWrapper.append(this.progressBar);
    this.progressBarWrapper.append(this.timer);

    this.playerControls.append(this.playBtn);
    this.playerControls.append(this.progressBarWrapper);

    this.playerVolume = document.createElement("div");
    this.playerVolume.className = "audioplayer-volume";

    this.volumeBtn = document.createElement("button");
    this.volumeBtn.className = "audioplayer-volume-btn";
    this.volumeRange = document.createElement("input");
    this.volumeRange.className = "audioplayer-volume-range";
    this.volumeRange.type = "range";
    this.volumeRange.min = "0";
    this.volumeRange.max = "1";
    this.volumeRange.step = "0.01";
    this.volumeRange.value = 0.5;

    this.playerVolume.append(this.volumeBtn);
    this.playerVolume.append(this.volumeRange);

    this.playerWrapper.append(this.audioTitle);
    this.playerWrapper.append(this.playerControls);
    this.playerWrapper.append(this.playerVolume);

    this.audioplayer = document.createElement("div");
    this.audioplayer.className = "audioplayer";

    this.audioplayer.append(this.playerImg);
    this.audioplayer.append(this.playerWrapper);

    this.playBtn.addEventListener("click", (el) => {
      // stopAudio();
      this.setPlayPause();
    });

    this.volumeBtn.addEventListener("click", (el) => {
      this.clickVolume();
    });

    this.progressBar.addEventListener("input", (el) => {
      this.pauseTime = this.progressBar.value;
      this.upgradeProgressBar(this.pauseTime);
    });

    this.volumeRange.addEventListener("input", (el) => {
      this.changeVolume(this.volumeRange.value);
    });

    return this.audioplayer;
  }

  playAudio() {
    this.audio.src = this.audioSrc;

    this.audio.currentTime = this.pauseTime;

    this.audio.play();
    this.audio.addEventListener("loadeddata", (el) => {
      if (this.audio.duration)
        this.duration.textContent = this.formatTime(this.audio.duration);
    });
    this.isPlay = true;
    this.playBtn.classList.add("pause");
    this.audio.addEventListener("timeupdate", (el) => {
      this.upgradeProgressBar();
    });
  }

  setPlayPause() {
    if (!this.isPlay) {
      this.playAudio();
    } else {
      this.audio.pause();
      this.pauseTime = this.audio.currentTime;
      this.isPlay = false;
      this.playBtn.classList.remove("pause");
    }
  }

  formatTime(time) {
    const min = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const sec = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${min}:${sec}`;
  }

  upgradeProgressBar(value) {
    if (this.audio.duration)
      this.progressBar.max = Math.floor(this.audio.duration);

    if (value) this.audio.currentTime = value;

    this.current.textContent = this.formatTime(this.audio.currentTime);
    this.progressBar.value = this.audio.currentTime;
  }

  clickVolume() {
    if (this.volumeBtn.className.includes("mute")) {
      this.audio.volume = this.volumeValueLast;
      this.volumeBtn.classList.remove("mute");
      this.volumeRange.value = this.volumeValueLast;
    } else {
      this.volumeValueLast = this.audio.volume;
      this.audio.volume = 0;
      this.volumeRange.value = 0;
      this.volumeBtn.classList.add("mute");
    }
  }

  changeVolume(value) {
    this.audio.volume = value;

    if (+value) {
      this.volumeBtn.classList.remove("mute");
    } else {
      this.volumeBtn.classList.add("mute");
    }
  }
}
