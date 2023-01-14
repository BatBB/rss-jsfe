const getRandom = (endNum: number) => Math.floor(Math.random() * endNum);
const carNames = [
  'Audi',
  'BMW',
  'Ford',
  'Honda',
  'Hyundai',
  'Kia',
  'Lada',
  'Mazda',
  'Mercedes-Benz',
  'Mitsubishi',
  'Nissan',
  'Renault',
  'Skoda',
  'Toyota',
  'Volkswagen',
];

export function randomColor(): string {
  return `#${getRandom(255).toString(16)}${getRandom(255).toString(
    16
  )}${getRandom(255).toString(16)}`;
}

export function randomName(): string {
  return `${carNames[getRandom(carNames.length)]}`;
}
