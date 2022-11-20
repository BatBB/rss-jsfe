import language from "./language";

const translate = {
  nav: function () {
    const lang = localStorage.getItem("lang");
    const navLink = document.querySelectorAll(".nav-link");

    navLink.forEach((link, index) => {
      link.textContent = language.nav[lang][index];
    });
  },
  score: function () {
    const lang = localStorage.getItem("lang");
    let score = localStorage.getItem("score") || "0";
    const scoreBlock = document.getElementById("score");
    scoreBlock.innerHTML = `${language.score[lang]} ${score}`;
  },
};

export default translate;
