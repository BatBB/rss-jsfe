import App from '../App/App';
import Header from '../components/header/header';
import btnDisabled from './btnDisabled';
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
      Header.updateBtnHeader();
    }

    if (target.classList.contains('btn-winners')) {
      App.renderMain('winnersPage');
      Header.updateBtnHeader();
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
