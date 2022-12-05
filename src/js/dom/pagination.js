import {filmsApiServise} from '../../index';
import { resetMarkup } from './show-popular-films';
import { appendPopularMarkup } from './show-popular-films';
import {markupPagination} from './markUpPagination';

export function pagination() {
    document.querySelector('.pagination__list').addEventListener('click', onClick);
}

async function onClick(event) {
    event.preventDefault();

    //Защита от клика не в кнопку
    if (event.target.type != "submit") {
        return;
    }

    //Определение номера страницы назначения
    let targetPage = filmsApiServise.getPage();
    
    if (event.target.classList.contains("pagination__button1")) {
        targetPage -= 1;
    } else if (event.target.classList.contains("pagination__button8")) {
        targetPage += 1;
    } else {
        targetPage = Number(event.target.textContent);
    }
    
    //Установка целевой страницы
    filmsApiServise.setPage(targetPage);

    //Очистка разметки секции карточек
    resetMarkup();

    //Подготовка к разметке страницы
    let response = {};

    //Определение запроса
    if (filmsApiServise.getIsPopular()) {
        response = await filmsApiServise.fetchPopularFilms();
    } else {
        response = await filmsApiServise.getFilmByName();
    }

    //Разметка страницы и перерисовка пагинации
    appendPopularMarkup(response);
    markupPagination();
}