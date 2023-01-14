import { createCar, getCar } from '../API/api';
import App from '../App/App';
import renderCars from '../components/renders/renderCars';
import { svgImages } from '../libs/svgImages';

export default function addEventListenersClick() {
  const buttons = document.querySelectorAll('.btn');
  if (buttons.length) {
    buttons.forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        const target = <HTMLButtonElement>e.target;
        if (target.classList.contains('btn-garage')) {
          App.renderMain('garagePage');
        }
        if (target.classList.contains('btn-winners')) {
          App.renderMain('winnersPage');
        }
        if (target.classList.contains('btn-create')) {
          console.log('create');
          const inputCreate = <HTMLInputElement>(
            document.querySelector('.input-text-create')
          );
          const inputColor = <HTMLInputElement>(
            document.querySelector('.input-color-create')
          );
          const name = inputCreate.value;
          const color = inputColor.value;

          console.log(name, color);

          if (name && color) {
            await createCar({ name, color });
            renderCars();
            console.log(getCar(5));
          }
        }
        if (target.classList.contains('btn-update')) {
          console.log('update');
        }
        if (target.classList.contains('btn-race')) {
          console.log('race');
        }
        if (target.classList.contains('btn-reset')) {
          console.log('reset');
        }
        if (target.classList.contains('btn-generate')) {
          console.log('generate');
        }
      });
    });
  }
}
