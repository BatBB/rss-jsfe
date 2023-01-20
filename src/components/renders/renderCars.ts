import { getCars } from '../../API/api';
import createElement from '../../utils/createElement';
import renderCar from './renderCar';
import { updatePagination } from './renderPagination';

export default async function renderCars() {
  const pageText = document.querySelector(`.garage__track-page-number`);
  const page = Number(pageText?.textContent) || 1;
  const cars = (await getCars(page)).cars;
  const track =
    document.querySelector('.garage__track-container') ||
    createElement('div', '.garage__track-container');
  track.innerHTML = '';
  cars.forEach(async (car) => {
    track.append(await renderCar(car));
  });
  updatePagination();
}
