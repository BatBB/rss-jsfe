import { createAudioBlock } from "./createAudioPlayer";
import translate from "./translate";

export default function createListAnswers(birds) {
  const answersList = document.createElement("ul");
  const answerAudioBlock = document.getElementById("answers-audioplayer");
  const description = document.getElementById("description");
  const listAnswersBlock = document.getElementById("answers-block");
  const nextBtn = document.getElementById("next-btn");
  const audioTitle = document.querySelector(".audioplayer-title");
  const playerImg = document.querySelector(".audioplayer-img");

  answersList.className = "answers-list";
  listAnswersBlock.innerHTML = "";
  let isRightAnswer = false;

  let score = +localStorage.getItem("score");
  let levelScore = 5;

  birds.forEach((bird) => {
    const answersItem = document.createElement("li");
    answersItem.className = "answers-item";
    answersItem.innerText = bird.name;
    answersItem.dataset.id = bird.id;
    answersItem.addEventListener("click", (el) => {
      const id = el.target.dataset.id;
      const rightBirdId = localStorage.getItem("rightBirdId");

      if (id !== rightBirdId) {
        if (!isRightAnswer) {
          el.target.classList.add("wrong");
          levelScore--;
        }
      } else {
        if (!isRightAnswer) {
          el.target.classList.add("right");
          nextBtn.classList.add("active-next-btn");
          let title = `${bird.name} (${bird.species})`;
          audioTitle.innerText = title;
          playerImg.style.backgroundImage = `url(${bird.image})`;
          console.log(levelScore);
          score += levelScore;
          localStorage.setItem("score", score);
          translate.score();
        }
        isRightAnswer = true;
      }

      const player = createAudioBlock(bird, true);
      answerAudioBlock.innerHTML = "";
      answerAudioBlock.append(player);
      description.innerText = bird.description;
    });

    answersList.append(answersItem);
  });

  listAnswersBlock.append(answersList);
}
