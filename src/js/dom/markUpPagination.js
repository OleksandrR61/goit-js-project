import {filmsApiServise} from '../../index';

export function markupPagination() {
    if (filmsApiServise.getPage() === 1) {
        document.querySelector('.pagination__button1').disabled = true;
    } else {
        document.querySelector('.pagination__button1').disabled = false;
    }

    if (filmsApiServise.getPage() === 1) {
        document.querySelector('.pagination__item2').style.display = "none";
    } else {
        document.querySelector('.pagination__item2').style.display = "block";
    }

    if (filmsApiServise.getPage() < 5) {
        document.querySelector('.pagination__item3').style.display = "none";
    } else {
        document.querySelector('.pagination__item3').style.display = "block";
    }

    if (filmsApiServise.getPage() < 4) {
        document.querySelector('.pagination__item4').style.display = "none";
    } else {
        document.querySelector('.pagination__item4').style.display = "block";
    }

    document.querySelector('.pagination__button3').textContent = `${filmsApiServise.getPage() - 2}`;
    document.querySelector('.pagination__button4').textContent = `${filmsApiServise.getPage() - 1}`;
    document.querySelector('.pagination__currentPage').textContent = `${filmsApiServise.getPage()}`;
    document.querySelector('.pagination__button5').textContent = `${filmsApiServise.getPage() + 1}`;
    document.querySelector('.pagination__button6').textContent = `${filmsApiServise.getPage() + 2}`;
    document.querySelector('.pagination__button7').textContent = `${filmsApiServise.getTotalPages()}`;
}