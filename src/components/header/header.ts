import createElement from '../../utils/createElement';
import Component from '../component';
import './header.scss';

const textBtn = {
  garage: 'To garage',
  winners: 'To winners',
};

// const buttonsHeader: ['garage', 'winners'] = ['garage', 'winners'];

export default class Header extends Component {
  constructor(tagName = 'header', className = 'header') {
    super(tagName, className);
  }

  private renderHeader() {
    // buttonsHeader.forEach((btnHeader) => {
    //   const btn = <HTMLButtonElement>(
    //     createElement('button', `header__btn btn btn-${btnHeader}`)
    //   );
    //   btn.textContent = textBtn[btnHeader];
    //   this.container.append(btn);
    // });
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
