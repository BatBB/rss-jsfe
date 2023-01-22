import { getCars } from '../../API/apiGarage';
import createElement from '../../utils/createElement';
import state from '../../utils/state';

export function renderTrack() {
  const template = `
  <p class="garage__track-cars">Garage (<span class="garage__track-cars-count">${state.cars.length}</span>)</p>
  <p class="garage__track-page">
    Page #<span class="garage-page-number page-number">${state.garagePage}</span>
  </p>
  <div class="garage__track-container"></div>`;
  const element = createElement('div', 'garage__track');
  element.innerHTML = template;
  return element;
}

export async function updateCarsCount() {
  const count = document.querySelector('.garage__track-cars-count');
  if (count) count.textContent = `${(await getCars()).count}`;
}
