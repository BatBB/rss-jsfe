import { startStopEngine, switchEngine } from '../API/api';
import state from './state';

export async function animateCar(
  endX: number,
  duration: number,
  node: HTMLElement,
  id: string
) {
  let currentX = 0;

  const frameCount = (duration / 1000) * 60;
  const dX = (endX - node.offsetLeft) / frameCount;

  let idRequestAnimation: number = 0;

  const tick = async () => {
    currentX += dX;
    node.style.transform = `translateX(${currentX}px)`;

    if (state.carStatus.get(id) === 'started') {
      state.carStatus.set(id, 'drive');
      switchEngineStatus(id);
    }

    if (currentX < endX && state.carStatus.get(id) !== 'stopped') {
      idRequestAnimation = requestAnimationFrame(tick);
    }

    if (state.engineStatus.get(id) === false)
      window.cancelAnimationFrame(idRequestAnimation);

    if (state.carStatus.get(id) === 'stopped') {
      window.cancelAnimationFrame(idRequestAnimation);
      node.style.transform = `translateX(0px)`;
    }
  };
  tick();
}

export async function startCar(id: string) {
  const carImage = <HTMLElement>(
    document.querySelector(`.car-image[data-car="${id}"]`)
  );

  const { velocity, distance } = await startStopEngine(id, 'started');
  const duration = distance / velocity;

  const startX = 0;
  const widthDisplay = window.innerWidth;
  const endX = widthDisplay - startX - 160;
  if (state.carStatus.get(id) === 'started') {
    animateCar(endX, duration, carImage, id);
  }
  const btnCarStop = <HTMLButtonElement>(
    document.querySelector(`.btn-car-stop[value="${id}"]`)
  );
  btnCarStop.disabled = false;
}

export async function stopCar(id: string) {
  const carImage = <HTMLElement>(
    document.querySelector(`.car-image[data-car="${id}"]`)
  );
  state.carStatus.set(id, 'stopped');
  carImage.style.transform = `translateX(0px)`;
  await startStopEngine(id, 'stopped');
  const btnCarStart = <HTMLButtonElement>(
    document.querySelector(`.btn-car-start[value="${id}"]`)
  );
  btnCarStart.disabled = false;
}

async function switchEngineStatus(id: string) {
  const statusEngine = await switchEngine(id);
  state.engineStatus.set(id, statusEngine);
}
