import createElement from '../../utils/createElement';
import Component from '../component';
import './header.scss';

const textBtn = {
  garage: 'To garage',
  winners: 'To winners',
};

const buttonsHeader: ['garage', 'winners'] = ['garage', 'winners'];

export default class Header extends Component {
  constructor(tagName = 'header', className = 'header') {
    super(tagName, className);
  }

  private renderHeader() {
    buttonsHeader.forEach((btnHeader) => {
      const btn = <HTMLButtonElement>(
        createElement('button', `header__btn btn btn-${btnHeader}`)
      );
      btn.textContent = textBtn[btnHeader];
      this.container.append(btn);
    });
  }

  render(): HTMLElement {
    this.renderHeader();
    return this.container;
  }
}
