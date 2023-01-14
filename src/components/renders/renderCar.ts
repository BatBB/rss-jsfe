import { ICar } from '../../interfaces/interfaces';
import { svgImages } from '../../libs/svgImages';
import createElement from '../../utils/createElement';

export default async function renderCar(car: ICar) {
  const carContainer = createElement('div', 'car-container');
  const template = `<div class="track-car">
    <div class="edit-btn">
      <button class="btn-car-select btn" value="${car.id}">SELECT</button>
      <button class="btn-car-remove btn" value="${car.id}">REMOVE</button>
      <span class="car-name">${car.name}</span>
    </div>
    <div class="way">
      <button class="btn-car-start btn" value="${car.id}">A</button>
      <button class="btn-car-stop btn" value="${car.id}">B</button>
      <div class="car-image">${svgImages.car}</div>
      <div class="finish-image">${svgImages.flag}</div>
    </div>
  </div>`;

  carContainer.innerHTML = template;
  const carSvg = <SVGAElement>carContainer.querySelector('.car-image-svg');
  carSvg.style.fill = car.color;
  return carContainer;
}
