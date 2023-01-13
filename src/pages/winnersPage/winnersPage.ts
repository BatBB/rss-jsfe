import Component from '../../components/component';
import createElement from '../../utils/createElement';
import './winnersPage.scss';

export default class WinnersPage extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  private renderWinners() {
    const containerTrackTemplate = `
    <p class="winners__count-text">Winners (<span class="winners-count">${123}</span>)</p>
    <p class="winners__page-text">
      Page #<span class="winners__page-number">${1}</span>
    </p>
    <table class="winners__table">
      <tr class="winners__table-row">
        <th class="winners__table-column">Number</th>
        <th class="winners__table-column">Car</th>
        <th class="winners__table-column">Name</th>
        <th class="winners__table-column">Wins</th>
        <th class="winners__table-column">Best time(s)</th>
      </tr>
    </table>`;
    const element = createElement('div', 'winners__container');
    element.innerHTML = containerTrackTemplate;
    return element;
  }

  render(): HTMLElement {
    this.container.append(this.renderWinners());
    return this.container;
  }
}
