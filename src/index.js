import "./index.html";
import "./index.scss";
import "./assets/images/en.png";
import "./assets/images/ru.png";
import changeLang from "./js/changeLang";
import translate from "./js/translate";
import language from "./js/language";
import "./js/crossCheck";

let lang = localStorage.getItem("lang") || "en";
localStorage.setItem("lang", lang);
translate.nav();
localStorage.setItem("score", 0);

const langBtn = document.querySelector(".language");
langBtn.style.backgroundImage = `url(assets/${lang}.png)`;

const playBtn = document.querySelector(".main__btn-link");
playBtn.textContent = language.play[lang];

langBtn.addEventListener("click", () => {
  changeLang();
  lang = localStorage.getItem("lang");
  translate.nav();
  playBtn.textContent = language.play[lang];
});
