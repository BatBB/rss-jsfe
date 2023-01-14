import { ICar, IOptionsFetch } from '../interfaces/interfaces';

const urlBase = 'http://localhost:3000';
const urlGarage = `${urlBase}/garage`;

export async function getCars() {
  const response = await fetch(`${urlGarage}`);
  const cars: ICar[] = await response.json();
  // const count = response.headers.get('X-Total-Count');
  // console.log(count);
  return cars;
}

export async function getCar(id: number) {
  const response = await fetch(`${urlGarage}/${id}`);
  const car: ICar = await response.json();
  return car;
}

export async function createCar(car: ICar) {
  const options: IOptionsFetch = {
    method: 'POST',
    body: JSON.stringify(car),
    headers: { 'Content-Type': 'application/json' },
  };
  const response = await fetch(`${urlGarage}`, options);
  const newCar: ICar = await response.json();
  return newCar;
}

export async function deleteCar(id: string) {
  const options: IOptionsFetch = {
    method: 'DELETE',
  };
  await fetch(`${urlGarage}/${id}`, options);
}

export async function updateCar(car: ICar) {
  const options: IOptionsFetch = {
    method: 'PUT',
    body: JSON.stringify(car),
    headers: { 'Content-Type': 'application/json' },
  };
  const response = await fetch(`${urlGarage}/${car.id}`, options);
  const updCar: ICar = await response.json();
  return updCar;
}
