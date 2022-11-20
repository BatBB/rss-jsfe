export default function changeLang() {
  localStorage.getItem("lang") === "ru"
    ? localStorage.setItem("lang", "en")
    : localStorage.setItem("lang", "ru");

  const langBtn = document.querySelector(".language");
  langBtn.style.backgroundImage = `url(assets/${localStorage.getItem(
    "lang"
  )}.png)`;
}
