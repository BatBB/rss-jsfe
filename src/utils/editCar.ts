import { createCar, deleteCar, getCar, updateCar } from '../API/api';
import renderCars from '../components/renders/renderCars';
import { updateCarsCount } from '../components/renders/renderTrack';
import btnDisabled from './btnDisabled';
import { randomColor, randomName } from './randomize';

export async function btnSelectCar(id: string) {
  btnDisabled('btn-update', false);
  btnDisabled(`btn-car-select[value="${id}"]`, true);

  const inputText = <HTMLInputElement>(
    document.querySelector('.input-text-update')
  );
  const inputColor = <HTMLInputElement>(
    document.querySelector('.input-color-update')
  );
  const btnUpdate = <HTMLButtonElement>document.querySelector('.btn-update');
  const car = await getCar(+id);
  inputText.value = car.name;
  inputColor.value = car.color;
  btnUpdate.value = id;
}

export async function btnUpdateCar(id: number) {
  btnDisabled('btn-update', true);
  btnDisabled(`btn-car-select[value="${id}"]`, false);

  const inputText = <HTMLInputElement>(
    document.querySelector('.input-text-update')
  );
  const inputColor = <HTMLInputElement>(
    document.querySelector('.input-color-update')
  );

  const name = inputText.value;
  const color = inputColor.value;
  updateCar({ name, color, id });
  inputColor.value = '#000000';
  inputText.value = '';
  updateCarsCount();
  renderCars();
}

export async function btnCreateCar() {
  const inputText = <HTMLInputElement>(
    document.querySelector('.input-text-create')
  );
  const inputColor = <HTMLInputElement>(
    document.querySelector('.input-color-create')
  );
  const name = inputText.value;
  const color = inputColor.value;

  if (name && color) {
    await createCar({ name, color });
    updateCarsCount();
    await renderCars();
  }
  inputText.value = '';
  inputColor.value = '#000000';
  // updatePagination();
}

export async function generateCars() {
  for (let i = 0; i < 100; i++) {
    const name = randomName();
    const color = randomColor();
    await createCar({ name, color });
  }
  updateCarsCount();
  renderCars();
}

export async function removeCar(id: string) {
  await deleteCar(id);
  updateCarsCount();
  await renderCars();
}
