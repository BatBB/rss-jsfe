import { ICar } from '../interfaces/interfaces';

export async function getCars() {
  const response = await fetch(`http://localhost:3000/garage`);
  const cars: ICar[] = await response.json();
  return cars;
}

export async function getCar(id: number) {
  const response = await fetch(`http://localhost:3000/garage/${id}`);
  const car = await response.json();
  return car;
}
