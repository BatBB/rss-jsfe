import { getWinners } from '../../API/apiWinners';
import Component from '../../components/component';
import { renderPagination } from '../../components/renders/renderPagination';
import { renderTableOfWinners } from '../../components/renders/renderTableOfWinners';
import { renderWinners } from '../../components/renders/renderWinners';
import './winnersPage.scss';

export default class WinnersPage extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  render(): HTMLElement {
    this.container.append(renderWinners());
    this.container.append(renderPagination('winners'));
    renderTableOfWinners(this.container);
    return this.container;
  }
}
