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
