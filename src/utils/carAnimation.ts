import { startStopEngine, switchEngine } from '../API/apiGarage';
import btnDisabled from './btnDisabled';
import state from './state';
import { addWinner } from './winners';

export async function animateCar(
  endX: number,
  time: number,
  node: HTMLElement,
  id: string
) {
  let currentX = 0;

  const frameCount = (time / 1000) * 60;
  const dX = (endX - node.offsetLeft) / frameCount;

  let idRequestAnimation: number = 0;

  const tick = async () => {
    currentX += dX;
    node.style.transform = `translateX(${currentX}px)`;

    if (state.engineStatus.get(id) === 'started') {
      state.engineStatus.set(id, 'drive');
      switchEngineStatus(id, time);
    }

    if (currentX < endX && state.engineStatus.get(id) !== 'stopped') {
      idRequestAnimation = requestAnimationFrame(tick);
    }

    if (currentX >= endX && state.isRace) {
      state.isRace = false;
      winnerMessage(id, time);
      addWinner(id, convertTime(time));
    }

    if (
      state.engineIsOk.get(id) === false ||
      state.engineStatus.get(id) === 'stopped'
    ) {
      window.cancelAnimationFrame(idRequestAnimation);
      if (state.engineStatus.get(id) === 'stopped')
        node.style.transform = `translateX(0px)`;
    }
  };
  tick();
}

export async function startCar(id: string) {
  btnDisabled(`btn-car-start[value="${id}"]`, true);

  const carImage = <HTMLElement>(
    document.querySelector(`.car-image[data-car="${id}"]`)
  );

  const { velocity, distance } = await startStopEngine(id, 'started');
  const time = distance / velocity;
  const startX = 0;
  const widthDisplay = window.innerWidth;
  const endX = widthDisplay - startX - 160;

  if (state.engineStatus.get(id) === 'started') {
    animateCar(endX, time, carImage, id);
  }
  btnDisabled(`btn-car-stop[value="${id}"]`, false);
}

export async function stopCar(id: string) {
  const carImage = <HTMLElement>(
    document.querySelector(`.car-image[data-car="${id}"]`)
  );
  state.engineStatus.set(id, 'stopped');
  carImage.style.transform = `translateX(0px)`;
  btnDisabled(`btn-car-stop[value="${id}"]`, true);
  await startStopEngine(id, 'stopped');
  state.engineIsOk.delete(id);
  btnDisabled(`btn-car-start[value="${id}"]`, false);
}

async function switchEngineStatus(id: string, time: number) {
  const engineIsOk = await switchEngine(id);
  state.engineIsOk.set(id, engineIsOk);
}

export function race() {
  btnDisabled('btn-race', true);
  state.isRace = true;
  state.cars.forEach((car) => {
    const id = car.id!.toString();
    startCar(id);
  });
  btnDisabled('btn-reset', false);
}

export function reset() {
  btnDisabled('btn-reset', true);
  state.cars.forEach(async (car) => {
    const id = car.id!.toString();
    await stopCar(id);
  });
  btnDisabled('btn-race', false);
}

const winnerMessage = (id: string, time: number) => {
  const messageContainer = <HTMLElement>document.querySelector('.message');
  console.log(messageContainer);

  messageContainer.style.visibility = 'visible';
  const messageCar = <HTMLElement>document.querySelector('.message-car');
  const messageTime = <HTMLElement>document.querySelector('.message-time');
  messageCar.textContent = state.cars.find(
    (car) => car.id === Number(id)
  )!.name;
  messageTime.textContent = `${convertTime(time)}`;
  hiddenMessage();
};

const convertTime = (time: number) => Math.round(time) / 1000;

const hiddenMessage = () => {
  setInterval(() => {
    const messageContainer = <HTMLElement>document.querySelector('.message');
    messageContainer.style.visibility = 'hidden';
  }, 5000);
};
