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
let isRightAnswer = false;
// localStorage.setItem()

const rightBirdId = getRandomNum();
const birds = shuffleArr(birdsData[lang][level]);
const rightBird = birds.find((bird) => bird.id === rightBirdId);

localStorage.setItem("rightBirdId", rightBirdId);
localStorage.setItem("rightBird", JSON.stringify(rightBird));

translateNav(lang);

//создание блока с наименованием уровней
createLevelsBlock(lang);

//создание плеера для вопроса
const mainAudioBlock = createAudioBlock(rightBird);
const questionBlock = document.getElementById("question-audioplayer");
questionBlock.append(mainAudioBlock);

//создание списка вариантов ответа
const listAnswers = createListAnswers(birds);
const listAnswersBlock = document.getElementById("answers-block");
listAnswersBlock.append(listAnswers);

const description = document.getElementById("description");
description.innerText = language.description[lang];
