import App from '../App/App';
import { svgImages } from '../libs/svgImages';

export default function addEventListenersClick() {
  const buttons = document.querySelectorAll('.btn');
  if (buttons.length) {
    buttons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const target = <HTMLButtonElement>e.target;
        if (target.classList.contains('btn-garage')) {
          App.renderMain('garagePage');
        }
        if (target.classList.contains('btn-winners')) {
          App.renderMain('winnersPage');
        }
        if (target.classList.contains('btn-create')) {
          console.log('create');
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
