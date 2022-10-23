import './style.scss';

let size = 4;
let emptyCell;
let cells;
let time = '00:00';
let moves = 0;
let timerStart;
let timerOn;
let isTimerOn = true;

const generateWinCombination = size => {
  let str = '';
  for (let i = 1; i < size * size; i++) {
    str += i;
  }
  return str + 0;
}

let winCombination = generateWinCombination(size);

const body = document.body;
const div = 'div';

const boardBlock = document.createElement(div);
boardBlock.className = 'board';

const controlsBlock = document.createElement(div);
controlsBlock.className = 'controls';
controlsBlock.innerHTML = `
<button class="btn" name='shuffle'>Shuffle and Start</button>
<button class="btn" name='stop'>Stop</button>
<button class="btn" name='save'>Save</button>
<button class="btn" name='result'>Results</button>`

const fieldBlock = document.createElement(div);
fieldBlock.className = 'field';

const sizesBlock = document.createElement(div);
sizesBlock.className = 'sizes';
sizesBlock.textContent = 'Select plaing field: '

const selectBlock = document.createElement('select');
selectBlock.className = 'select';
selectBlock.size = 1;
selectBlock.innerHTML = `
<option class='option' value=3>3x3</option>
<option class='option' value=4 selected>4x4</option>
<option class='option' value=5>5x5</option>
<option class='option' value=6>6x6</option>
<option class='option' value=7>7x7</option>
<option class='option' value=8>8x8</option>`

sizesBlock.append(selectBlock);

const statisticBlock = document.createElement(div);
const timeBlock = document.createElement(div);
const movesBlock = document.createElement(div);

timeBlock.className = 'time';
timeBlock.textContent = `Time: ${time}`;

movesBlock.className = 'moves';
movesBlock.textContent = `Moves: ${moves}`;

statisticBlock.append(timeBlock, movesBlock);

body.append(boardBlock);
boardBlock.append(controlsBlock);
boardBlock.append(sizesBlock);
boardBlock.append(fieldBlock);
boardBlock.append(statisticBlock);

selectBlock.addEventListener('change', e => {
  size = +selectBlock.options[selectBlock.options.selectedIndex].value;
  winCombination = generateWinCombination(size);
  init();
});

controlsBlock.childNodes.forEach(node => node.addEventListener('click', e => {
  if (e.target.name === 'shuffle') {
    isTimerOn = true;
    init();
  }
}));

function timer() {
  const curDate = new Date();
  const t = Math.floor((curDate - timerStart)/1000);
  const min = Math.floor(t / 60);
  const sec = t % 60;
  time = (min < 10 ? '0' + min : min) + ':' + (sec < 10 ? '0' + sec : sec);
  timeBlock.textContent = `Time: ${time}`;
}

function init() {
  clearInterval(timerOn);
  timeBlock.textContent = 'Time: 00:00';
  moves = 0;
  movesBlock.textContent = `Moves: ${moves}`;
  fieldBlock.innerHTML = ''
  fieldBlock.style.gridTemplateColumns = `repeat(${size}, auto)`;
  cellsNum.length = 0;
  
  for (let i = 0; i < size * size; i++) {
    cellsNum.push(i);
  }

  shuffleCells();

  for (let i = 0; i < size * size; i++) {
    let cell = document.createElement('div');
    cell.className = 'cell cell-num';
    cell.innerText = cellsNum[i] ? cellsNum[i] : '';
    if (!cellsNum[i]) {
      cell.classList.toggle('cell-num')
    }
    fieldBlock.append(cell);
    cell.addEventListener('click', e => {
      if (isTimerOn) {
        timerStart = new Date();
        timerOn = setInterval(timer, 1000);
        isTimerOn = false;
      }
      const num = +e.target.textContent;
      const clickCell = cellsNum.findIndex(v => v === num);
      const isNeighbor = () => Math.abs(clickCell - emptyCell) === 1 || (Math.abs(clickCell - emptyCell) === size && clickCell !== emptyCell);
      const isDone = () => cellsNum.join('').toString() === winCombination;
      if (isNeighbor()) {
        const temp = cells[clickCell].textContent;
        cells[clickCell].textContent = '';
        cells[emptyCell].textContent = temp;
        [cellsNum[clickCell], cellsNum[emptyCell]] = [cellsNum[emptyCell], cellsNum[clickCell]];
        cells[clickCell].classList.toggle('cell-num')
        cells[emptyCell].classList.toggle('cell-num')

        moves++;
        movesBlock.textContent = `Moves: ${moves}`;

        if (isDone()) {
          clearInterval(timerOn);
          alert('You win!');
          return;
        }
        emptyCell = clickCell;
      }
    })
  }

  cells = fieldBlock.children;
}

function shuffleCells() {
  function getCountInversion() {
    let count = 0;
    const arr = cellsNum.filter(val => val);
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) count++;
      }
    }
    return count;
  }
  function isNotCorrectShuffle() {
    const countInversion = getCountInversion();
    emptyCell = cellsNum.findIndex(el => !el);
    if (size % 2) {
      return countInversion % 2 === 1
    } else {
      return (countInversion + Math.trunc(emptyCell / size)) % 2 === 0;
    }
  }
  do {
    for (let i = cellsNum.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [cellsNum[i], cellsNum[j]] = [cellsNum[j], cellsNum[i]];
    }
  } while (isNotCorrectShuffle());
}

const cellsNum = [];

init();