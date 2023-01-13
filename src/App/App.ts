import Header from '../components/header/header';
import GaragePage from '../pages/garagePage/garagePage';
import '../global.scss';
import WinnersPage from '../pages/winnersPage/winnersPage';

export default class App {
  private container: HTMLElement;
  private header = new Header();
  private garagePage = new GaragePage('div', 'garage-page');
  private winnersPage = new WinnersPage('div', 'winner-page');

  constructor() {
    this.container = document.body;
  }

  run() {
    this.container.append(this.header.render());
    // this.container.append(this.garagePage.render());
    this.container.append(this.winnersPage.render());
  }
}
