import { getCars } from '../../API/apiGarage';
import { getWinners } from '../../API/apiWinners';
import { MAX_LIMIT_CARS, MAX_LIMIT_WINNERS } from '../../interfaces/consts';
import createElement from '../../utils/createElement';
import state from '../../utils/state';

export function renderPagination(currentPage: 'garage' | 'winners') {
  const template = `
      <button class="btn btn-pagination btn-pagination-prev" disabled>< Prev</button>
      <button class="btn btn-pagination btn-pagination-next">Next ></button>`;

  const pagination = createElement(
    'div',
    `pagination pagination-${currentPage}`
  );
  pagination.innerHTML = template;
  return pagination;
}

export async function updatePagination(currentPage: 'garage' | 'winners') {
  const btnPrev = <HTMLButtonElement>(
    document.querySelector('.btn-pagination-prev')
  );
  const btnNext = <HTMLButtonElement>(
    document.querySelector('.btn-pagination-next')
  );
  const pageText = document.querySelector(`.${currentPage}-page-number`);
  const pageNumber = Number(pageText?.textContent);
  const countPages =
    currentPage === 'garage'
      ? (await getCars()).count / MAX_LIMIT_CARS
      : (await getWinners(state.winnersPage, state.sort, state.order)).count /
        MAX_LIMIT_WINNERS;

  btnPrev.disabled = pageNumber === 1;
  btnNext.disabled = pageNumber >= countPages;
}
