import createElement from '../../utils/createElement';
import Component from '../component';
import './header.scss';

const enum textBtn {
  textGarage = 'To garage',
  textWinner = 'To winners',
}

export default class Header extends Component {
  constructor(tagName = 'header', className = 'header') {
    super(tagName, className);
  }

  private renderHeader() {
    const btnGarage = createElement('button', 'header__btn btn');
    btnGarage.textContent = textBtn.textGarage;
    const btnWinner = createElement('button', 'header__btn btn');
    btnWinner.textContent = textBtn.textWinner;
    this.container.append(btnGarage);
    this.container.append(btnWinner);
  }

  render(): HTMLElement {
    this.renderHeader();
    return this.container;
  }
}
