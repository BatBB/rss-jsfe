import renderCars from '../components/renders/renderCars';
import { updatePagination } from '../components/renders/renderPagination';
import { renderTableOfWinners } from '../components/renders/renderTableOfWinners';
import { MAX_LIMIT_CARS, MAX_LIMIT_WINNERS } from '../interfaces/consts';
import { pagesType } from '../interfaces/interfaces';
import state from './state';

export default async function paginationPage(node: HTMLElement) {
  let currentPage: pagesType = node.className.includes('garage')
    ? 'garage'
    : 'winners';
  const pageText = document.querySelector(`.page-number`);
  let pageNum = state[`${currentPage}Page`];
  const countPages =
    currentPage === 'garage'
      ? Math.ceil(state.cars.length / MAX_LIMIT_CARS) || 1
      : Math.ceil(state.winners.length / MAX_LIMIT_WINNERS) || 1;
  if (node.classList.contains('btn-pagination-prev')) {
    if (pageNum > 1) {
      pageNum--;
      if (pageText) pageText.textContent = `${pageNum}`;
      updatePageNumber(pageNum);
      updatePagination(currentPage);
    }
  } else {
    if (pageNum < countPages) {
      pageNum++;
      updatePageNumber(pageNum);
      updatePagination(currentPage);
    }
  }
  state[`${currentPage}Page`] = pageNum;
  currentPage === 'garage' ? renderCars() : renderTableOfWinners(document.body);
}

export function updatePageNumber(page: number) {
  const pageNumber = document.querySelector('.page-number');

  if (pageNumber) pageNumber.textContent = `${page}`;
}
