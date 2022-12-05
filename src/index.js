// Подключение лоадера
import './js/dom/loader';
//Подчеркивание текущей страницы в хедере
import { activePage } from "./js/dom/activePage";
activePage();

//Активация кнопки в хедере страницы библиотеки
import { activeLibraryBtn } from "./js/dom/activeLibraryBtn";
activeLibraryBtn();

//Пошук за назвою
import { searchFilms } from "./js/dom/show-search-films";
searchFilms();

//Завантаження популярних фільмів
import FilmsApiService from './js/api/api-server';
import { appendPopularMarkup, appendErrorMessage } from './js/dom/show-popular-films';
import { resetMarkup } from './js/dom/show-popular-films';
import {markupPagination} from './js/dom/markUpPagination';
export const filmsApiServise = new FilmsApiService();

import './js/dom/modal';

resetMarkup()
firstLoadPage()

async function firstLoadPage() {
    //зберігаємо жанри в LocalStorage
    try {
        const saveGenresLocalStorage = await filmsApiServise.fetchGenres()
    localStorage.setItem('genres', JSON.stringify(saveGenresLocalStorage))

    //робимо запит за популярними фільмами
    filmsApiServise.setPage(1);
    filmsApiServise.setIsPopular(true);
    const response = await filmsApiServise.fetchPopularFilms()
    
    //робимо розмітку з популярних фільмів
    appendPopularMarkup(response)
    } catch (error) {
        console.log(error.message)
        appendErrorMessage()
    }
    markupPagination();
    

   //доступ до фільму по ID без повторного запиту на сервер, ID зберігається в дата атрибуті на карточці фільму --> data-films-id
    // let filmById = filmsApiServise.getFilmById(897192) 
    // console.log(filmById)
}

//Пагинация
import {pagination} from './js/dom/pagination';
pagination();