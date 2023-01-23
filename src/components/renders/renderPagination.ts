import { getCars } from '../../API/apiGarage';
import { getWinners } from '../../API/apiWinners';
import { MAX_LIMIT_CARS, MAX_LIMIT_WINNERS } from '../../interfaces/consts';
import { pagesType } from '../../interfaces/interfaces';
import createElement from '../../utils/createElement';
import state from '../../utils/state';

export function renderPagination(currentPage: pagesType) {
  const paginationBtnPrev = <HTMLButtonElement>(
    createElement(
      'button',
      `btn btn-pagination btn-pagination-prev btn-pagination-prev-${currentPage}`
    )
  );
  const paginationBtnNext = <HTMLButtonElement>(
    createElement(
      'button',
      `btn btn-pagination btn-pagination-next btn-pagination-next-${currentPage}`
    )
  );

  paginationBtnPrev.textContent = 'Prev';
  paginationBtnNext.textContent = 'Next';

  const pagination = createElement(
    'div',
    `pagination pagination-${currentPage}`
  );
  pagination.append(paginationBtnPrev);
  pagination.append(paginationBtnNext);
  return pagination;
}

export function updatePagination(currentPage: pagesType) {
  const btnPrev = <HTMLButtonElement>(
    document.querySelector(`.btn-pagination-prev-${currentPage}`)
  );
  const btnNext = <HTMLButtonElement>(
    document.querySelector(`.btn-pagination-next-${currentPage}`)
  );

  const pageNumber = state[`${currentPage}Page`];

  const countPages =
    currentPage === 'garage'
      ? Math.ceil(state.cars.length / MAX_LIMIT_CARS) || 1
      : Math.ceil(state.winners.length / MAX_LIMIT_WINNERS) || 1;

  btnPrev.disabled =
    currentPage === 'garage' ? state.garagePage === 1 : state.winnersPage === 1;
  btnNext.disabled = pageNumber >= countPages;
}
