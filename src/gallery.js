import "./gallery.html";
import "./gallery.scss";
import translate from "./js/translate";
import birdsData from "./js/birds";
import { createPlayerBlock } from "./js/createPlayerBlock";

translate.nav();

const gallery = document.getElementById("gallery");

let lang = localStorage.getItem("lang");

for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 6; j++) {
    const bird = birdsData[lang][i][j];
    const player = createPlayerBlock(bird);
    const card = document.createElement("div");
    card.className = "card";
    const description = document.createElement("div");
    description.className = "description";
    description.textContent = bird.description;
    card.append(player);
    card.append(description);
    gallery.append(card);
  }
}
