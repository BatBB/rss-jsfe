import createElement from '../../utils/createElement';
import Component from '../component';
import './header.scss';

export default class Header extends Component {
  constructor(tagName = 'header', className = 'header') {
    super(tagName, className);
  }

  private renderHeader() {
    const template = `
    <button class="header__btn btn btn-garage" disabled>To garage</button>
    <button class="header__btn btn btn-winners">To winners</button>
    `;
    const element = createElement('div', 'header__buttons');
    element.innerHTML = template;
    this.container.append(element);
  }

  static updateBtnHeader() {
    const btnGarage = <HTMLButtonElement>document.querySelector('.btn-garage');
    const btnWinners = <HTMLButtonElement>(
      document.querySelector('.btn-winners')
    );
    console.log(btnGarage.disabled, btnWinners.disabled);

    btnGarage.disabled = !btnGarage.disabled;
    btnWinners.disabled = !btnWinners.disabled;
  }

  render(): HTMLElement {
    this.renderHeader();
    return this.container;
  }
}
