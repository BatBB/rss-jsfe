import Header from '../components/header/header';
import '../global.scss';

export default class App {
  private container: HTMLElement;
  private header = new Header();

  constructor() {
    this.container = document.body;
  }

  run() {
    this.container.append(this.header.render());
  }
}
