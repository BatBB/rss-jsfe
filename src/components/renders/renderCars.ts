import { getCars } from '../../API/api';
import createElement from '../../utils/createElement';
import renderCar from './renderCar';

export default async function renderCars() {
  const cars = await getCars();
  const track =
    document.querySelector('.garage__track-container') ||
    createElement('div', '.garage__track-container');
  track.innerHTML = '';
  cars.forEach(async (car) => {
    track.append(await renderCar(car));
  });
}
