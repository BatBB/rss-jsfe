import language from "./language";

export default function translateNav(lang) {
  const navLink = document.querySelectorAll(".nav-link");
  console.log(navLink);

  navLink.forEach((link, index) => {
    console.log(link);
    link.textContent = language.nav[lang][index];
    console.log(language.nav[lang][index]);
  });
}
