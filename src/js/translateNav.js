import language from "./language";

export default function translateNav(lang) {
  const navLink = document.querySelectorAll(".nav-link");

  navLink.forEach((link, index) => {
    link.textContent = language.nav[lang][index];
  });
}
