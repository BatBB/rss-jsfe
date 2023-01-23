import { getWinners } from '../../API/apiWinners';
import createElement from '../../utils/createElement';
import state from '../../utils/state';
import { renderTableOfWinners } from './renderTableOfWinners';

export function renderWinners() {
  const template = `
  <p class="winners__count-text">Winners (<span class="winners-count">${state.winners.length}</span>)</p>
  <p class="winners__page-text">
    Page #<span class="page-number">${state.winnersPage}</span>
  </p>
  <table class="winners__table">
      <thead>
        <tr>
          <th class="winners__table-column">Number</th>
          <th class="winners__table-column">Car</th>
          <th class="winners__table-column">Name</th>
          <th class="winners__table-column sort sort-wins">Wins</th>
          <th class="winners__table-column sort sort-time">Best time(s)</th>
        </tr>
      </thead>
      <tbody class="table-body"></tbody>
  </table>`;

  const element = createElement('div', 'winners__container');
  element.innerHTML = template;

  function updateSort() {
    const sortWins = <HTMLElement>element.querySelector('.sort-wins');
    const sortTime = <HTMLElement>element.querySelector('.sort-time');
    sortWins.setAttribute(
      'data-after',
      `${state.sort === 'wins' ? (state.order === 'DESC' ? '▼' : '▲') : ''}`
    ); // ▲  ▼
    sortTime.setAttribute(
      'data-after',
      `${state.sort === 'time' ? (state.order === 'DESC' ? '▼' : '▲') : ''}`
    );
  }

  updateSort();

  const sortBtn = element.querySelectorAll('.sort');
  sortBtn.forEach((sort) => {
    sort.addEventListener('click', async (e: Event) => {
      const target = <HTMLElement>e.target;
      if (target.classList.contains('sort-wins')) {
        if (state.sort === 'wins') {
          state.order = state.order === 'ASC' ? 'DESC' : 'ASC';
        } else {
          state.sort = 'wins';
          state.order = 'ASC';
        }
      } else {
        if (state.sort === 'time') {
          state.order = state.order === 'ASC' ? 'DESC' : 'ASC';
        } else {
          state.sort = 'time';
          state.order = 'ASC';
        }
      }
      updateSort();
      await renderTableOfWinners(element);
    });
  });
  return element;
}

export async function updateCountWinners() {
  state.winners = [...(await getWinners(0, state.sort, state.order)).winners];
  const count = document.querySelector('.winners-count');

  if (count) count.textContent = `${state.winners.length}`;
}
