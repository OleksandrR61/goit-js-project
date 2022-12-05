import {filmsApiServise} from '../../index';
import { resetMarkup } from './show-popular-films';
import { appendPopularMarkup } from './show-popular-films';
import {markupPagination} from './markUpPagination';

export function pagination() {
    document.querySelector('.pagination__list').addEventListener('click', onClick);
}

async function onClick(event) {
    event.preventDefault();

    if (event.target.type != "submit") {
        return;
    }

    let targetPage = filmsApiServise.getPage();
    
    if (event.target.classList.contains("pagination__button1")) {
        targetPage -= 1;
    } else if (event.target.classList.contains("pagination__button8")) {
        targetPage += 1;
    } else {
        targetPage = Number(event.target.textContent);
    }
    
    filmsApiServise.setPage(targetPage);

    resetMarkup();

    let response = {};

    if (filmsApiServise.getIsPopular()) {
        response = await filmsApiServise.fetchPopularFilms();
    } else {
        response = await filmsApiServise.getFilmByName();
    }

    appendPopularMarkup(response);
    markupPagination();
}