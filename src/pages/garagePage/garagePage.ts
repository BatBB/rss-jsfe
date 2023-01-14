import Component from '../../components/component';
import renderCars from '../../components/renders/renderCars';
import createElement from '../../utils/createElement';
import './garagePage.scss';

export default class GaragePage extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  private renderContainerMake() {
    const containerMakeTemplate = `
    <div class="garage__make">
      <div class="garage__make-create">
        <input type="text" class="input-text-create input-create" />
        <input type="color" class="input-color-create input-create" />
        <button class="btn btn-create">CREATE</button>
      </div>
      <div class="garage__make-update">
        <input type="text" class="input-text-update input-update" />
        <input type="color" class="input-color-update input-update" />
        <button class="btn btn-update">UPDATE</button>
      </div>
      <div class="garage__make-buttons">
        <button class="btn btn-race">RACE</button>
        <button class="btn btn-reset">RESET</button>
        <button class="btn btn-generate">GENERATE CARS</button>
      </div>
    </div>
    `;
    const element = createElement('div', 'garage__make');
    element.innerHTML = containerMakeTemplate;
    return element;
  }

  private renderTrack() {
    const containerTrackTemplate = `
    <p class="garage__track-cars">Garage (<span class="garage__track-cars-count">${123}</span>)</p>
    <p class="garage__track-page">
      Page #<span class="garage__track-page-number">${1}</span>
    </p>
    <div class="garage__track-container"></div>`;
    const element = createElement('div', 'garage__track');
    element.innerHTML = containerTrackTemplate;
    return element;
  }

  render(): HTMLElement {
    this.container.append(this.renderContainerMake());
    this.container.append(this.renderTrack());
    renderCars();
    return this.container;
  }
}
