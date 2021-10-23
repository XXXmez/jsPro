'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// ищем элементы нужные нам на странице
const promoAdvImg = document.querySelectorAll('.promo__adv img'),
      promoGenre = document.querySelector('.promo__genre'),
      promoBg = document.querySelector('.promo__bg'),
      promoInteractiveItem = document.querySelectorAll('.promo__interactive-item'),
      promoInteractiveList = document.querySelector('.promo__interactive-list');

// функция удаления переданных в нее массива или одного элемента
promoAdvImg.forEach((item) => {
    item.remove()
})

// заменяю текст
promoGenre.textContent = 'драма';

//заменяю картинку
promoBg.style.backgroundImage = 'url(../img/bg.jpg)';

// удаляю старый список просмотренных фильмов
promoInteractiveList.innerHTML = '';
// сортировка
movieDB.movies.sort();
// вывожу новый список из массива
movieDB.movies.forEach((film, i) => {
    promoInteractiveList.innerHTML += `
        <li class="promo__interactive-item">${i+1}: ${film}
            <div class="delete"></div>
        </li>
    `; 
});


/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */