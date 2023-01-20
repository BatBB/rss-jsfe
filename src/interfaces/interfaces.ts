export interface ICar {
  name: string;
  color: string;
  id?: number;
}

export interface IWinner {
  id: number;
  wins: number;
  time: number;
}

type Method = 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH';
type Headers = {
  'Content-Type': 'application/json';
};

export interface IOptionsFetch {
  method: Method;
  body?: string;
  headers?: Headers;
}

export interface IVelocityDistance {
  velocity: number;
  distance: number;
}

export interface ISuccess {
  success: boolean;
}

export interface IState {
  garagePage: number;
  winnersPage: number;
  cars: ICar[];
  carStatus: Map<string, statusCarType>;
  engineStatus: Map<string, boolean>;
}

export type statusCarType = 'started' | 'stopped' | 'drive';
