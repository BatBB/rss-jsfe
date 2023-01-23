const getRandom = (endNum: number) => Math.floor(Math.random() * endNum);
const carBrands = [
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
const carModels = [
  '4Runner',
  'Cordoba',
  'Gran Fury',
  'Nubira',
  'Sonic',
  'Acadia',
  'Corniche',
  'Gran Turismo',
  'Oasis',
  'Sonoma',
  'Accent',
  'Corolla',
  'Grand Am',
  'Odyssey',
  'Sorento',
  'Acclaim',
  'Coronet',
  'Grand Prix',
  'Omega',
  'Soul',
  'Accord',
  'Corrado',
  'Grand Vitara',
  'Omni',
  'Spark',
  'Achieva',
  'Corsair',
  'Grand Voyager',
  'Optima',
  'Spectra',
  'Aerio',
  'Corsica',
  'Greiz',
  'Outback',
  'Spectrum',
];

export function randomColor(): string {
  return `#${getRandom(255).toString(16)}${getRandom(255).toString(
    16
  )}${getRandom(255).toString(16)}`;
}

export function randomName(): string {
  return `${carBrands[getRandom(carBrands.length)]} ${
    carModels[getRandom(carModels.length)]
  }`;
}
