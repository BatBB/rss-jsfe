import { createAudioBlock } from "./createAudioPlayer";

export default function createListAnswers(birds) {
  // const listBlock = document.getElementById("answers-block");
  const ul = document.createElement("ul");
  const answerAudioBlock = document.getElementById("answers-audioplayer");
  const description = document.getElementById("description");

  // listBlock.innerHTML = "";

  ul.className = "answers-list";

  let answerIsRight = false;

  birds.forEach((bird) => {
    const li = document.createElement("li");
    li.className = "answers-item";
    li.innerText = bird.name;
    li.dataset.id = bird.id;
    li.addEventListener("click", (el) => {
      const id = el.target.dataset.id;
      const rightBirdId = localStorage.getItem("rightBirdId");
      if (id !== rightBirdId) {
        if (!answerIsRight) el.target.classList.add("wrong");
      } else {
        el.target.classList.add("right");
        answerIsRight = true;
      }
      const player = createAudioBlock(bird, true);
      answerAudioBlock.innerHTML = "";
      answerAudioBlock.append(player);
      description.innerText = bird.description;
    });

    ul.append(li);
  });

  // listBlock.append(ul);
  return ul;
}
