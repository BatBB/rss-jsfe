import language from "./language";

const lang = localStorage.getItem("lang") || "en";
localStorage.setItem("lang", lang);

const translate = {
  nav: function () {
    const navLink = document.querySelectorAll(".nav-link");

    navLink.forEach((link, index) => {
      link.textContent = language.nav[lang][index];
    });
  },
  score: function () {
    let score = localStorage.getItem("score") || "0";
    const scoreBlock = document.getElementById("score");
    scoreBlock.innerHTML = `${language.score[lang]} ${score}`;
  },
};

export default translate;
