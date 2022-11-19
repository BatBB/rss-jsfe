import "./gallery.html";
import "./gallery.scss";
import translate from "./js/translate";
import birdsData from "./js/birds";
import audioplayer from "./js/audioplayer";

translate.nav();

const gallery = document.getElementById("gallery");

let lang = localStorage.getItem("lang");

for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 6; j++) {
    const bird = birdsData[lang][i][j];
    const player = new audioplayer();
    player.audioSrc = bird.audio;
    const playerBlock = player.createPlayerBlock();
    playerBlock.querySelector(
      ".audioplayer-img"
    ).style.backgroundImage = `url(${bird.image})`;
    let title = `${bird.name} (${bird.species})`;
    playerBlock.querySelector(".audioplayer-title").textContent = title;

    const card = document.createElement("div");
    card.className = "card";
    const description = document.createElement("div");
    description.className = "description";
    description.textContent = bird.description;
    card.append(playerBlock);
    card.append(description);
    gallery.append(card);
  }
}
