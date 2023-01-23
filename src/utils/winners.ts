import {
  getWinners,
  getWinner,
  createWinner,
  updateWinner,
} from '../API/apiWinners';
import state from './state';

export async function addWinner(id: string, time: number) {
  const winners = (await getWinners(state.winnersPage, state.sort, state.order))
    .winners;
  if (winners.some((_winner) => _winner.id.toString() === id)) {
    const winner = await getWinner(id);
    winner.wins += 1;

    if (time < winner.time) winner.time = time;
    updateWinner(id, winner);
  } else {
    createWinner({ id: Number(id), wins: 1, time: time });
  }
}
