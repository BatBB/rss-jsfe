import birdsData from "./birds";
import shuffleArr from "./shuffleArr";
import createListAnswers from "./createListAnswers";
import { createAudioBlock } from "./createAudioPlayer";
import createLevelsBlock from "./createLevelsBlock";
import language from "./language";
import translate from "./translate";

const getRandomNum = (length = 6) => Math.floor(Math.random() * length) + 1;

let lang = localStorage.getItem("lang") || "en";

let level = 0;
localStorage.setItem("score", 0);

const nextBtn = document.getElementById("next-btn");

function initQuiz() {
  let rightBirdId = getRandomNum();
  let birds = shuffleArr(birdsData[lang][level]);
  let rightBird = birds.find((bird) => bird.id === rightBirdId);

  nextBtn.classList.remove("active-next-btn");
  localStorage.setItem("rightBirdId", rightBirdId);
  localStorage.setItem("rightBird", JSON.stringify(rightBird));

  translate.nav();
  translate.score();

  //создание плеера для вопроса
  const mainAudioBlock = createAudioBlock(rightBird);
  const questionBlock = document.getElementById("question-audioplayer");
  questionBlock.innerHTML = "";
  questionBlock.append(mainAudioBlock);

  //создание списка вариантов ответа
  createListAnswers(birds);
}

//создание блока с наименованием уровней
createLevelsBlock(lang);

initQuiz();

const description = document.getElementById("description");
description.innerText = language.description[lang];

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
