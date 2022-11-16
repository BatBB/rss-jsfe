import { setPlayPause, upgradeProgressBar } from "./audioplayer";

document.body.addEventListener("click", (el) => {
  const key = el.target.classList.value;

  switch (key) {
    case "audioplayer-play":
      const rightBird = JSON.parse(localStorage.getItem("rightBird"));
      setPlayPause(rightBird);
      break;
    case "answers-item":
      break;

    default:
      break;
  }
});

document.body.addEventListener("change", (el) => {
  const key = el.target.classList.value;
  switch (key) {
    case "audioplayer-progressbar":
      const progressBar = document.querySelector(".audioplayer-progressbar");
      upgradeProgressBar(progressBar.value);
      break;

    default:
      break;
  }
});
