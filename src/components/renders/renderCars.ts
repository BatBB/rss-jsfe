import { getCars } from '../../API/apiGarage';
import createElement from '../../utils/createElement';
import state from '../../utils/state';
import renderCar from './renderCar';
import { updatePagination } from './renderPagination';

export default async function renderCars() {
  const page = state.garagePage;
  const cars = (await getCars(page)).cars;
  state.cars = [...(await getCars(0)).cars];

  const track =
    document.querySelector('.garage__track-container') ||
    createElement('div', '.garage__track-container');
  track.innerHTML = '';
  cars.forEach(async (car) => {
    track.append(await renderCar(car));
  });
  updatePagination('garage');
}
