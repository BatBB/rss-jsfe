export default function createListAnswers(birds) {
  const listBlock = document.getElementById("answers-block");
  const ul = document.createElement("ul");

  listBlock.innerHTML = "";

  ul.className = "answers-list";

  birds.forEach((bird) => {
    const li = document.createElement("li");
    li.className = "answers-item";
    li.innerText = bird.name;
    li.dataset.id = bird.id;
    ul.append(li);
  });

  listBlock.append(ul);
}
