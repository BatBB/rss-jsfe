import Header from '../components/header/header';
import GaragePage from '../pages/garagePage/garagePage';
import '../global.scss';
import WinnersPage from '../pages/winnersPage/winnersPage';
import createElement from '../utils/createElement';
import addEventListenersClick from '../utils/addEventListeners';
import { updateCarsCount } from '../components/renders/renderTrack';
import { updatePagination } from '../components/renders/renderPagination';

export default class App {
  private container: HTMLElement;
  private header = new Header();
  private garagePage = new GaragePage('div', 'garage-page');

  constructor() {
    this.container = document.body;
  }

  static renderMain(page: 'garagePage' | 'winnersPage') {
    const garagePage = new GaragePage('div', 'garage-page');
    const winnersPage = new WinnersPage('div', 'winner-page');
    const main = document.querySelector('.main');
    if (main) {
      main.innerHTML = '';
      if (page === 'garagePage') {
        main.append(garagePage.render());
      } else {
        main.append(winnersPage.render());
      }
    }
    updateCarsCount();
    updatePagination();
  }

  run() {
    this.container.append(this.header.render());
    const main = createElement('main', 'main');
    main.append(this.garagePage.render());
    this.container.append(main);
    updateCarsCount();
    addEventListenersClick();
  }
}
