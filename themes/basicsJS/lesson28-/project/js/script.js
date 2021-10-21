/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

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

const promoAdvImg = document.querySelectorAll('.promo__adv img'),
      promoGenre = document.querySelector('.promo__genre'),
      promoBg = document.querySelector('.promo__bg'),
      promoInteractiveItem = document.querySelectorAll('.promo__interactive-item'),
      promoInteractiveList = document.querySelector('.promo__interactive-list');

let delAd = function(elem) {
    for (let i = 0; i < elem.length; i++) {
        elem[i].remove();
    };
};
delAd(promoAdvImg);

promoGenre.textContent = 'драма';

promoBg.style.background = 'url(../img/bg.jpg)';

for (let i = 0; i < promoInteractiveItem.length; i++) {
    promoInteractiveItem[i].remove();
}


for(let i = 0; i < movieDB.movies.length; i++) {
    let liPII = document.createElement('li');
    liPII.classList.add('promo__interactive-item');
    let divDel = document.createElement('div');
    divDel.classList.add('delete');
    liPII.append(divDel);
    liPII.textContent = movieDB.movies[i];
    
    promoInteractiveList.append(liPII);
}