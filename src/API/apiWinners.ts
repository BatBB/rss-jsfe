import { MAX_LIMIT_WINNERS, URL_WINNERS } from '../interfaces/consts';
import {
  IOptionsFetch,
  IWinner,
  winnerOrderType,
  winnersSortType,
} from '../interfaces/interfaces';

export async function getWinners(
  page: number,
  sort: winnersSortType,
  order: winnerOrderType,
  limit = MAX_LIMIT_WINNERS
) {
  const searchParam = page
    ? `?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`
    : '';

  const response = await fetch(`${URL_WINNERS}${searchParam}`);
  const winners: IWinner[] = await response.json();
  const count = Number(response.headers.get('X-Total-Count')) || winners.length;
  return { winners: winners, count };
}

export async function getWinner(id: string) {
  const response = await fetch(`${URL_WINNERS}/${id}`);
  const winner: IWinner = await response.json();
  return winner;
}

export async function createWinner(winner: IWinner) {
  const options: IOptionsFetch = {
    method: 'POST',
    body: JSON.stringify(winner),
    headers: { 'Content-Type': 'application/json' },
  };
  const response = await fetch(`${URL_WINNERS}`, options);
  const newWinner: IWinner = await response.json();
  return newWinner;
}

export async function deleteWinner(id: string) {
  const options: IOptionsFetch = {
    method: 'DELETE',
  };
  const response = await fetch(`${URL_WINNERS}/${id}`, options);
  const deletedWinner: IWinner = await response.json();
  return deletedWinner;
}

export async function updateWinner(id: string, winner: IWinner) {
  const options: IOptionsFetch = {
    method: 'PUT',
    body: JSON.stringify(winner),
    headers: { 'Content-Type': 'application/json' },
  };
  const response = await fetch(`${URL_WINNERS}/${id}`, options);
  const updWinner: IWinner = await response.json();
  return updWinner;
}
