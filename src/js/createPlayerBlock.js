export function createPlayerBlock(bird = null) {
  //создание элементов плеера
  const playerImg = document.createElement("div");
  playerImg.className = "audioplayer-img";

  const playerWrapper = document.createElement("div");
  playerWrapper.className = "audioplayer-wrapper";

  const audioTitle = document.createElement("div");
  audioTitle.className = "audioplayer-title";
  audioTitle.innerText = "* * * * * * *";

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

  if (bird) {
    playerImg.style.backgroundImage = `url(${bird.image})`;
    let title = `${bird.name} (${bird.species})`;
    audioTitle.innerText = title;
  }

  return audioplayer;
}
