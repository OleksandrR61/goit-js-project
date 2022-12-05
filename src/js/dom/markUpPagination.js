import {filmsApiServise} from '../../index';

export function markupPagination() {
    document.querySelector('.pagination__button3').textContent = `${filmsApiServise.getPage() - 2}`;
    document.querySelector('.pagination__button4').textContent = `${filmsApiServise.getPage() - 1}`;
    document.querySelector('.pagination__currentPage').textContent = `${filmsApiServise.getPage()}`;
    document.querySelector('.pagination__button5').textContent = `${filmsApiServise.getPage() + 1}`;
    document.querySelector('.pagination__button6').textContent = `${filmsApiServise.getPage() + 2}`;
    document.querySelector('.pagination__button7').textContent = `${filmsApiServise.getTotalPages()}`;
}