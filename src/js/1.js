import birdsData from "./birds";
import shuffleArr from "./shuffleArr";
import createListAnswers from "./createListAnswers";
import { playAudio, setPlayPause } from "./audioplayer";

const getRandomNum = (length = 6) => Math.floor(Math.random() * length) + 1;

const rightBirdId = getRandomNum();
const birds = shuffleArr(birdsData.en)[0];
const rightBird = birds.find((bird) => bird.id === rightBirdId);

localStorage.setItem("rightBirdId", rightBirdId);
localStorage.setItem("rightBird", JSON.stringify(rightBird));

createListAnswers(birds);
