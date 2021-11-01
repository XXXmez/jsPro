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
      promoInteractiveList = document.querySelector('.promo__interactive-list'),
      addingInput = document.querySelector('.adding__input'),
      formAdd = document.querySelector('form.add');

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

formAdd.addEventListener('submit', (e) => {
    e.preventDefault();
    let newFilf = addingInput.value
    if (newFilf) {
        movieDB.movies.push(newFilf);
        movieDB.movies.sort();
    }
})


/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту 

*/