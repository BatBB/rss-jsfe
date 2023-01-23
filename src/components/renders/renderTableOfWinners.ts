import { getWinners } from '../../API/apiWinners';
import { svgImages } from '../../libs/svgImages';
import createElement from '../../utils/createElement';
import state from '../../utils/state';
import { updatePagination } from './renderPagination';

export async function renderTableOfWinners(node: HTMLElement) {
  const table = node.querySelector('.table-body');
  table!.innerHTML = '';
  const winners = (await getWinners(state.winnersPage, state.sort, state.order))
    .winners;
  winners.forEach((winner, ind) => {
    const tr = createElement('tr', 'winners__table-row');
    const template = `<th class="winners__table-column">${ind + 1}</th>
    <th class="winners__table-column" style="fill: ${
      state.cars.find((_car) => _car.id === winner.id)?.color
    }">${svgImages.car}</th>
    <th class="winners__table-column">${
      state.cars.find((_car) => _car.id === winner.id)?.name
    }</th>
    <th class="winners__table-column">${winner.wins}</th>
    <th class="winners__table-column">${winner.time}</th>`;
    tr.innerHTML = template;
    table?.append(tr);
  });
  updatePagination('winners');
}
