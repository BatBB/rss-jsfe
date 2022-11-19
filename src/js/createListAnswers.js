import translate from "./translate";

export default function createListAnswers(birds) {
  const answersList = document.createElement("ul");
  const listAnswersBlock = document.getElementById("answers-block");

  answersList.className = "answers-list";
  listAnswersBlock.innerHTML = "";

  birds.forEach((bird) => {
    const answersItem = document.createElement("li");
    answersItem.className = "answers-item";
    answersItem.innerText = bird.name;
    answersItem.dataset.id = bird.id;
    answersList.append(answersItem);
  });

  listAnswersBlock.append(answersList);
}
