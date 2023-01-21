import {
  ICar,
  IOptionsFetch,
  ISuccess,
  IVelocityDistance,
} from '../interfaces/interfaces';
import state from '../utils/state';

const urlBase = 'http://localhost:3000';
const urlGarage = `${urlBase}/garage`;
const urlEngine = `${urlBase}/engine`;

export async function getCars(page: number = 1) {
  const response = await fetch(`${urlGarage}?_page=${page}&_limit=7`);
  const cars: ICar[] = await response.json();
  const count = Number(response.headers.get('X-Total-Count')) || cars.length;
  return { cars, count };
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

export async function startStopEngine(
  id: string,
  status: 'started' | 'stopped'
) {
  const options: IOptionsFetch = {
    method: 'PATCH',
  };
  const response = await fetch(
    `${urlEngine}?id=${id}&status=${status}`,
    options
  );
  const velocityDistance: IVelocityDistance = await response.json();
  state.engineStatus.set(id, status);
  return velocityDistance;
}

export async function switchEngine(id: string) {
  const options: IOptionsFetch = {
    method: 'PATCH',
  };
  const response = await fetch(`${urlEngine}?id=${id}&status=drive`, options);

  if (!response.ok) return false;

  const { success }: ISuccess = await response.json();
  return success;
}
