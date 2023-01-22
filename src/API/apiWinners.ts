import { MAX_LIMIT_WINNERS, URL_WINNERS } from '../interfaces/consts';
import {
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
  const response = await fetch(
    `${URL_WINNERS}?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`
  );
  const winners: IWinner[] = await response.json();
  const count = Number(response.headers.get('X-Total-Count')) || winners.length;
  console.log(count);

  return { winners: winners, count };
}
