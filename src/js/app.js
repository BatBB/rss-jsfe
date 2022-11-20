import birdsData from "./birds";
import shuffleArr from "./shuffleArr";
import createListAnswers from "./createListAnswers";
import createLevelsBlock from "./createLevelsBlock";
import language from "./language";
import translate from "./translate";
import audioplayer from "./audioplayer";
import "../assets/sounds/win.mp3";
import "../assets/sounds/error.mp3";

const getRandomNum = (length = 6) => Math.floor(Math.random() * length) + 1;

let lang = localStorage.getItem("lang") || "en";

let level = 0;
localStorage.setItem("score", 0);

const nextBtn = document.getElementById("next-btn");
nextBtn.textContent = language.nextLevel[lang];

const answerAudioBlock = document.getElementById("answers-audioplayer");
const description = document.getElementById("description");

let isRightAnswer = false;
let levelScore;

//создание блока с наименованием уровней
createLevelsBlock(lang);

const questionAudioBlock = document.getElementById("question-audioplayer");

const secondAudio = new audioplayer();
const secondAudioBlock = secondAudio.createPlayerBlock();
answerAudioBlock.append(secondAudioBlock);

const mainAudio = new audioplayer();
const mainAudioBlock = mainAudio.createPlayerBlock();
questionAudioBlock.append(mainAudioBlock);

initQuiz();

document.body.addEventListener("canplaythrough", (el) => {
  console.log(el);
});

export default function stopAudio() {
  if (mainAudio.isPlay) {
    mainAudio.setPlayPause();
  }
  mainAudio.audio.currentTime = 0;
  mainAudio.pauseTime = 0;

  if (secondAudio.isPlay) {
    secondAudio.setPlayPause();
  }
  secondAudio.audio.currentTime = 0;
  secondAudio.pauseTime = 0;
}

function initQuiz() {
  let rightBirdId = getRandomNum();
  let birds = shuffleArr(birdsData[lang][level]);
  let rightBird = birds.find((bird) => bird.id === rightBirdId);
  isRightAnswer = false;
  levelScore = 5;

  mainAudio.audioSrc = rightBird.audio;

  nextBtn.classList.remove("active-next-btn");
  localStorage.setItem("rightBirdId", rightBirdId);
  localStorage.setItem("rightBird", JSON.stringify(rightBird));

  translate.nav();
  translate.score();

  answerAudioBlock.classList.add("hidden");
  description.innerText = language.description[lang];

  //создание списка вариантов ответа
  createListAnswers(birds);

  const answersItems = document.querySelectorAll(".answers-item");

  answersItems.forEach((answersItem) => {
    answersItem.addEventListener("click", (el) => {
      const bird = birdsData[lang][level][el.target.dataset.id - 1];
      clickAnswer(el, bird);
    });
  });
}

function clickSound(src) {
  const audio = new Audio(src);
  audio.play();
  audio.volume = 0.5;
}

function clickAnswer(el, bird) {
  const nextBtn = document.getElementById("next-btn");
  const description = document.getElementById("description");

  answerAudioBlock.classList.remove("hidden");
  const audioTitle = answerAudioBlock.querySelector(".audioplayer-title");
  const playerImg = answerAudioBlock.querySelector(".audioplayer-img");

  if (secondAudio.isPlay) {
    secondAudio.setPlayPause();
  }
  secondAudio.audio.currentTime = 0;
  secondAudio.pauseTime = 0;
  secondAudio.audioSrc = bird.audio;
  playerImg.style.backgroundImage = `url(${bird.image})`;
  let title = `${bird.name} (${bird.species})`;
  audioTitle.innerText = title;

  let score = +localStorage.getItem("score");

  const id = el.target.dataset.id;

  const rightBirdId = localStorage.getItem("rightBirdId");

  if (!isRightAnswer) {
    if (id === rightBirdId) {
      el.target.classList.add("right");
      nextBtn.classList.add("active-next-btn");
      score += levelScore;
      localStorage.setItem("score", score);
      translate.score();
      isRightAnswer = true;

      clickSound("./assets/win.mp3");

      if (mainAudio.isPlay) {
        mainAudio.setPlayPause();
      }
      mainAudio.audio.currentTime = 0;
      mainAudio.pauseTime = 0;
    } else {
      if (!el.target.classList.contains("wrong")) {
        el.target.classList.add("wrong");
        clickSound("./assets/error.mp3");
        levelScore--;
      }
    }
  }

  description.innerText = bird.description;
}

nextBtn.addEventListener("click", (el) => {
  if (el.target.className.includes("active-next-btn")) {
    document
      .querySelector(`[data-level='${level}']`)
      .classList.remove("active-level");

    stopAudio();

    level++;

    if (level < 6) {
      initQuiz();
      document
        .querySelector(`[data-level='${level}']`)
        .classList.add("active-level");
    }
    if (level === 5) {
      el.target.innerText = language.result[lang];
    }
    if (level > 5) window.location = "./result.html";
  }
});
