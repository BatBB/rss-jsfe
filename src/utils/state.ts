import { IState } from '../interfaces/interfaces';

const state: IState = {
  garagePage: 1,
  winnersPage: 1,
  cars: [],
  engineStatus: new Map(),
  engineIsOk: new Map(),
  winners: [],
  sort: 'wins',
  order: 'ASC',
  isRace: false,
};

export default state;
