import { getCars } from '../API/apiGarage';
import renderCars from '../components/renders/renderCars';
import { updatePagination } from '../components/renders/renderPagination';
import state from './state';

export default async function paginationPage(node: HTMLElement) {
  const pageText = document.querySelector(`.page-number`);

  let pageNum = Number(pageText?.textContent) || 1;

  const countPages = Math.ceil(Number((await getCars(0)).count) / 7);

  if (node.classList.contains('btn-pagination-prev')) {
    if (pageNum !== 1) {
      pageNum--;
      if (pageText) pageText.textContent = `${pageNum}`;
      updatePagination('garage');
    }
  } else {
    if (pageNum < countPages) {
      pageNum++;
      updatePageNumber(pageNum);
      updatePagination('garage');
    }
  }
  state.garagePage = pageNum;
  renderCars();
}

export function updatePageNumber(page: number) {
  const pageNumber = document.querySelector('.page-number');

  if (pageNumber) pageNumber.textContent = `${page}`;
}
