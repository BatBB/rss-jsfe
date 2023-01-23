import { deleteCar } from '../API/apiGarage';
import App from '../App/App';
import { race, reset, startCar, stopCar } from './carAnimation';
import {
  btnCreateCar,
  btnSelectCar,
  btnUpdateCar,
  generateCars,
  removeCar,
} from './editCar';
import paginationPage from './pagination';

export default function addEventListenersClick() {
  document.addEventListener('click', async (e) => {
    const target = <HTMLButtonElement>e.target;
    const id = target.value;

    if (target.classList.contains('btn-garage')) {
      App.renderMain('garagePage');
    }

    if (target.classList.contains('btn-winners')) {
      App.renderMain('winnersPage');
    }

    if (target.classList.contains('btn-create')) {
      btnCreateCar();
    }

    if (target.classList.contains('btn-update')) {
      btnUpdateCar(+id);
    }

    if (target.classList.contains('btn-race')) {
      race();
    }

    if (target.classList.contains('btn-reset')) {
      reset();
    }

    if (target.classList.contains('btn-generate')) {
      generateCars();
    }

    if (target.classList.contains('btn-car-select')) {
      await btnSelectCar(id);
    }

    if (target.classList.contains('btn-car-remove')) {
      removeCar(id);
      await deleteCar(id);
    }

    if (target.classList.contains('btn-car-start')) {
      startCar(id);
    }

    if (target.classList.contains('btn-car-stop')) {
      stopCar(id);
    }

    if (target.classList.contains('btn-pagination')) {
      paginationPage(target);
    }
  });
}
