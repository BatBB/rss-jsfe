import birdsData from "./birds";
import shuffleArr from "./shuffleArr";
import createListAnswers from "./createListAnswers";
import { createAudioBlock } from "./createAudioPlayer";
import createLevelsBlock from "./createLevelsBlock";
import language from "./language";
import translateNav from "./translateNav";

const getRandomNum = (length = 6) => Math.floor(Math.random() * length) + 1;

let lang = localStorage.getItem("lang") || "en";
localStorage.setItem("lang", lang);

let level = 0;

const nextBtn = document.getElementById("next-btn");

function init() {
  let rightBirdId = getRandomNum();
  let birds = shuffleArr(birdsData[lang][level]);
  let rightBird = birds.find((bird) => bird.id === rightBirdId);

  nextBtn.classList.remove("active-next-btn");
  localStorage.setItem("rightBirdId", rightBirdId);
  localStorage.setItem("rightBird", JSON.stringify(rightBird));

  translateNav(lang);

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

init();

const description = document.getElementById("description");
description.innerText = language.description[lang];

nextBtn.addEventListener("click", (el) => {
  if (el.target.className.includes("active-next-btn")) {
    document
      .querySelector(`[data-level='${level}']`)
      .classList.remove("active-level");
    level++;

    if (level < 6) {
      init();
      document
        .querySelector(`[data-level='${level}']`)
        .classList.add("active-level");
    }
    if (level === 5) {
      el.target.innerText = "Result";
    }
    if (level > 5) window.location = "./index.html";
  }
});
