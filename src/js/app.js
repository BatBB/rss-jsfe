import birdsData from "./birds";
import shuffleArr from "./shuffleArr";
import createListAnswers from "./createListAnswers";
import createLevelsBlock from "./createLevelsBlock";
import language from "./language";
import translate from "./translate";
import { createPlayerBlock } from "./createPlayerBlock";

const getRandomNum = (length = 6) => Math.floor(Math.random() * length) + 1;

let lang = localStorage.getItem("lang") || "en";

let level = 0;
localStorage.setItem("score", 0);

const nextBtn = document.getElementById("next-btn");
const answerAudioBlock = document.getElementById("answers-audioplayer");
const description = document.getElementById("description");

let isRightAnswer = false;
let levelScore;

//создание блока с наименованием уровней
createLevelsBlock(lang);

initQuiz();
answerAudioBlock.append(createPlayerBlock());

function initQuiz() {
  let rightBirdId = getRandomNum();
  let birds = shuffleArr(birdsData[lang][level]);
  let rightBird = birds.find((bird) => bird.id === rightBirdId);
  isRightAnswer = false;
  levelScore = 5;

  nextBtn.classList.remove("active-next-btn");
  localStorage.setItem("rightBirdId", rightBirdId);
  localStorage.setItem("rightBird", JSON.stringify(rightBird));

  translate.nav();
  translate.score();

  answerAudioBlock.classList.add("hidden");
  description.innerText = language.description[lang];

  const mainAudioBlock = createPlayerBlock();

  const questionBlock = document.getElementById("question-audioplayer");
  questionBlock.innerHTML = "";
  questionBlock.append(mainAudioBlock);

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

function clickAnswer(el, bird) {
  const nextBtn = document.getElementById("next-btn");
  const description = document.getElementById("description");

  answerAudioBlock.classList.remove("hidden");
  const audioTitle = answerAudioBlock.querySelector(".audioplayer-title");
  const playerImg = answerAudioBlock.querySelector(".audioplayer-img");
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
    } else {
      if (!el.target.classList.contains("wrong")) {
        el.target.classList.add("wrong");
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

    level++;

    if (level < 6) {
      initQuiz();
      document
        .querySelector(`[data-level='${level}']`)
        .classList.add("active-level");
    }
    if (level === 5) {
      el.target.innerText = "Result";
    }
    if (level > 5) window.location = "./result.html";
  }
});
