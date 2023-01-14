import { getCars, getCar } from '../../API/api';
import Component from '../../components/component';
import { ICar } from '../../interfaces/interfaces';
import { svgImages } from '../../libs/svgImages';
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
        <input type="text" class="input-text input-create" />
        <input type="color" class="input-color input-create" />
        <button class="btn btn-create">CREATE</button>
      </div>
      <div class="garage__make-update">
        <input type="text" class="input-text input-update" />
        <input type="color" class="input-color input-update" />
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

  async renderCar(car: ICar) {
    const carContainer = createElement('div', 'car-container');
    const template = `<div class="track-car">
      <div class="edit-btn">
        <button class="btn-car-select btn">SELECT</button>
        <button class="btn-car-remove btn">REMOVE</button>
        <span class="car-name">${car.name}</span>
      </div>
      <div class="way">
        <button class="btn-car-start btn">A</button>
        <button class="btn-car-stop btn">B</button>
        <div class="car-image">${svgImages.car}</div>
        <div class="finish-image">${svgImages.flag}</div>
      </div>
    </div>`;

    carContainer.innerHTML = template;
    const carSvg = <SVGAElement>carContainer.querySelector('.car-image-svg');
    carSvg.style.fill = car.color;
    return carContainer;
  }

  async renderCars() {
    const cars = await getCars();
    console.log(cars);
    const track =
      document.querySelector('.garage__track-container') ||
      createElement('div', '.garage__track-container');
    cars.forEach(async (car) => {
      track.append(await this.renderCar(car));
    });
  }

  render(): HTMLElement {
    this.container.append(this.renderContainerMake());
    this.container.append(this.renderTrack());
    this.renderCars();
    return this.container;
  }
}
