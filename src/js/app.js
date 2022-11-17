import birdsData from "./birds";
import shuffleArr from "./shuffleArr";

import createListAnswers from "./createListAnswers";
import { createAudioBlock } from "./createAudioPlayer";

const getRandomNum = (length = 6) => Math.floor(Math.random() * length) + 1;

let language = "ru";

const rightBirdId = getRandomNum();
const birds = shuffleArr(birdsData[language])[0];
const rightBird = birds.find((bird) => bird.id === rightBirdId);

localStorage.setItem("rightBirdId", rightBirdId);
localStorage.setItem("rightBird", JSON.stringify(rightBird));

createListAnswers(birds);
let c = createAudioBlock(rightBird);

const questionBlock = document.getElementById("question-audioplayer");
questionBlock.append(c);

// let a = createAudioBlock(rightBird);
// const answersBlock = document.getElementById("answers-audioplayer");
// answersBlock.append(a);
