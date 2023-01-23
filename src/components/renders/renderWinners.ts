import createElement from '../../utils/createElement';
import state from '../../utils/state';

export function renderWinners() {
  const template = `
  <p class="winners__count-text">Winners (<span class="winners-count">${state.winners.length}</span>)</p>
  <p class="winners__page-text">
    Page #<span class="winners__page-number">${state.winnersPage}</span>
  </p>
  <table class="winners__table">
    <tr class="winners__table-row">
      <th class="winners__table-column">Number</th>
      <th class="winners__table-column">Car</th>
      <th class="winners__table-column">Name</th>
      <th class="winners__table-column">Wins</th>
      <th class="winners__table-column">Best time(s)</th>
    </tr>
  </table>`;
  const element = createElement('div', 'winners__container');
  element.innerHTML = template;
  return element;
}

export async function updateCountWinners() {
  const count = document.querySelector('.winners-count');

  if (count) count.textContent = `${state.winners.length}`;
}
