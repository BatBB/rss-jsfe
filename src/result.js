import language from "./js/language";
import translate from "./js/translate";
import "./result.html";
import "./result.scss";

translate.nav();

let lang = localStorage.getItem("lang");
let score = localStorage.getItem("score");

const scoreCongratulation = document.querySelector(".score-congratulation");
const scoreText = document.querySelector(".score-text");
const scoreBtn = document.querySelector(".score-btn");

scoreCongratulation.textContent = language.congratulation[lang];
scoreText.textContent = language.resultText[lang];
scoreBtn.textContent = language.resultBtn[lang];
