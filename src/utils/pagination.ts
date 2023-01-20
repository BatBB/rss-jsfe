import { getCars } from '../API/api';
import renderCars from '../components/renders/renderCars';
import { updatePagination } from '../components/renders/renderPagination';
import { updatePageNumber } from '../components/renders/renderTrack';

export default async function paginationPage(node: HTMLElement) {
  const pageText = document.querySelector(`.garage__track-page-number`);
  let pageNum = Number(pageText?.textContent) || 1;

  const countPages = Math.ceil(Number((await getCars()).count) / 7);

  if (node.classList.contains('btn-pagination-prev')) {
    if (pageNum !== 1) {
      pageNum--;
      if (pageText) pageText.textContent = `${pageNum}`;
      updatePagination();
    }
  } else {
    if (pageNum < countPages) {
      pageNum++;
      updatePageNumber(pageNum);
      updatePagination();
    }
  }
  renderCars();
}
