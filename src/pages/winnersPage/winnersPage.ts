import { getWinners } from '../../API/apiWinners';
import Component from '../../components/component';
import { renderPagination } from '../../components/renders/renderPagination';
import { renderTableOfWinners } from '../../components/renders/renderTableOfWinners';
import { renderWinners } from '../../components/renders/renderWinners';
import state from '../../utils/state';
import './winnersPage.scss';

export default class WinnersPage extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  private async setStateWinners() {
    state.winners = [
      ...(await getWinners(state.winnersPage, state.sort, state.order)).winners,
    ];
  }

  render(): HTMLElement {
    this.setStateWinners();
    this.container.append(renderWinners());
    this.container.append(renderPagination('winners'));
    renderTableOfWinners(this.container);
    return this.container;
  }
}
