import language from "./language";

export default function createLevelsBlock(lang) {
  const levels = document.getElementById("levels");
  const levelBlock = document.createElement("div");
  levelBlock.className = "levels";

  for (let index = 0; index < 6; index++) {
    const div = document.createElement("div");
    div.className = "levels-item";
    div.dataset.level = index;
    div.textContent = language.levels[lang][index];
    levelBlock.append(div);
  }

  levels.append(levelBlock);
}
