import { ICar, IOptionsFetch } from '../interfaces/interfaces';

const urlBase = 'http://localhost:3000';
const urlGarage = `${urlBase}/garage`;

export async function getCars() {
  const response = await fetch(`${urlGarage}`);
  const cars: ICar[] = await response.json();
  return cars;
}

export async function getCar(id: number) {
  const response = await fetch(`${urlGarage}/${id}`);
  const car = await response.json();
  return car;
}

export async function createCar(car: ICar): Promise<ICar> {
  const options: IOptionsFetch = {
    method: 'POST',
    body: JSON.stringify(car),
    headers: { 'Content-Type': 'application/json' },
  };
  const response = await fetch(`${urlGarage}`, options);
  const newCar = await response.json();
  return newCar;
}
