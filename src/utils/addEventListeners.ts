import {
  createCar,
  deleteCar,
  getCar,
  getCars,
  startStopEngine,
  updateCar,
} from '../API/api';
import App from '../App/App';
import Header from '../components/header/header';
import renderCars from '../components/renders/renderCars';
import { updatePagination } from '../components/renders/renderPagination';
import {
  updateCarsCount,
  updatePageNumber,
} from '../components/renders/renderTrack';
import { randomColor, randomName } from './randomize';
import { startCar } from './carAnimation';

export default function addEventListenersClick() {
  let pageNum = 1;
  document.addEventListener('click', async (e) => {
    const target = <HTMLButtonElement>e.target;

    const pageText = document.querySelector(`.garage__track-page-number`);

    pageNum = Number(pageText?.textContent);

    if (target.classList.contains('btn-garage')) {
      App.renderMain('garagePage');
      Header.updateBtnHeader();
    }

    if (target.classList.contains('btn-winners')) {
      App.renderMain('winnersPage');
      Header.updateBtnHeader();
    }

    if (target.classList.contains('btn-create')) {
      const inputText = <HTMLInputElement>(
        document.querySelector('.input-text-create')
      );
      const inputColor = <HTMLInputElement>(
        document.querySelector('.input-color-create')
      );
      const name = inputText.value;
      const color = inputColor.value;

      if (name && color) {
        await createCar({ name, color });
        updateCarsCount();
        await renderCars();
      }
      inputText.value = '';
      inputColor.value = '#000000';
    }

    if (target.classList.contains('btn-update')) {
      const inputText = <HTMLInputElement>(
        document.querySelector('.input-text-update')
      );
      const inputColor = <HTMLInputElement>(
        document.querySelector('.input-color-update')
      );
      const btnUpdate = <HTMLButtonElement>(
        document.querySelector('.btn-update')
      );
      const name = inputText.value;
      const color = inputColor.value;
      const id = +btnUpdate.value;
      updateCar({ name, color, id });
      btnUpdate.disabled = true;
      inputColor.value = '#000000';
      inputText.value = '';
      updateCarsCount();
      renderCars();
    }

    if (target.classList.contains('btn-race')) {
      console.log('race');
    }

    if (target.classList.contains('btn-reset')) {
      console.log('reset');
    }

    if (target.classList.contains('btn-generate')) {
      console.log('generate');
      for (let i = 0; i < 100; i++) {
        const name = randomName();
        const color = randomColor();
        await createCar({ name, color });
      }
      updateCarsCount();
      renderCars();
    }

    if (target.classList.contains('btn-car-select')) {
      const id = target.value;
      const inputText = <HTMLInputElement>(
        document.querySelector('.input-text-update')
      );
      const inputColor = <HTMLInputElement>(
        document.querySelector('.input-color-update')
      );
      const btnUpdate = <HTMLButtonElement>(
        document.querySelector('.btn-update')
      );
      const car = await getCar(+id);
      inputText.value = car.name;
      inputColor.value = car.color;
      btnUpdate.disabled = false;
      btnUpdate.value = id;
    }

    if (target.classList.contains('btn-car-remove')) {
      await deleteCar(target.value);
      updateCarsCount();
      await renderCars();
    }

    if (target.classList.contains('btn-car-start')) {
      target.disabled = true;
      startCar(target.value);
      // checkStatusCar(target.value);
    }

    if (target.classList.contains('btn-car-stop')) {
      const id = target.value;
      const carImage = <HTMLElement>(
        document.querySelector(`.car-image[data-car="${id}"]`)
      );
      let currentX = carImage.offsetLeft;
      console.log(carImage.offsetLeft);

      carImage.style.transform = `translateX(${currentX}px)`;
      console.log(carImage.offsetLeft);

      const { velocity, distance } = await startStopEngine(id, 'stopped');
    }

    if (target.classList.contains('btn-pagination')) {
      const countPages = Math.ceil(Number((await getCars()).count) / 7);

      if (target.classList.contains('btn-pagination-prev')) {
        if (pageNum !== 1) {
          pageNum--;
          if (pageText) pageText.textContent = `${pageNum}`;
          updatePagination();
        }
      } else {
        if (pageNum < countPages) {
          pageNum++;
          updatePageNumber(pageNum);
          updatePagination();
        }
      }
      renderCars();
    }
  });
}
