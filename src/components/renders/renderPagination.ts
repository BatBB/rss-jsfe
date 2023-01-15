import { getCars } from '../../API/api';
import createElement from '../../utils/createElement';

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

export async function updatePagination() {
  const btnPrev = <HTMLButtonElement>(
    document.querySelector('.btn-pagination-prev')
  );
  const btnNext = <HTMLButtonElement>(
    document.querySelector('.btn-pagination-next')
  );
  const pageText = document.querySelector('.garage__track-page-number');
  const currentPage = Number(pageText?.textContent);
  const countPages = (await getCars()).count / 7;

  btnPrev.disabled = currentPage === 1;
  btnNext.disabled = currentPage >= countPages;
}
