'use strict';

document.addEventListener('DOMContentLoaded', () => {
    
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
          promoInteractiveList = document.querySelector('.promo__interactive-list'),
          addingInput = document.querySelector('.adding__input'),
          formAdd = document.querySelector('form.add'),
          inputCheckbox = document.querySelector('[type="checkbox"]');

    // функция удаления
    function deleteAdv (arr) {
        arr.forEach((item) => {
            item.remove()
        })
    }
    
    // функция редактирования
    function editElem () {
        // заменяю текст
        promoGenre.textContent = 'драма';
        //заменяю картинку
        promoBg.style.backgroundImage = 'url(img/bg.jpg)';
    }
    
    // функция сортировки сортировка
    function arrSort (arr) {
        arr.sort();
    }
    
    // функция создания списка фильмов
    function createMovieList (movie, list) {
        // удаляю старый список просмотренных фильмов
        list.innerHTML = '';
        // сортировка
        arrSort(movie);
        // вывожу новый список из массива
        movie.forEach((film, i) => {
            list.innerHTML += `
                <li class="promo__interactive-item">${i+1}: ${film}
                    <div class="delete"></div>
                </li>
            `; 
        });

        let listDeleteBut = document.querySelectorAll('.delete');
        listDeleteBut.forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movie.splice(i, 1);
                createMovieList(movie, list);
            })
        });
    }
    
    // Добавление нового фильма из формы
    formAdd.addEventListener('submit', (e) => {
        e.preventDefault();
        let newFilf = addingInput.value;
        let top = inputCheckbox.checked;
        if (newFilf) {
            if (newFilf.length> 21) {
                newFilf = `${newFilf.substring(0, 21)}...`
            }
            
            if (top) {
                console.log('Добавляем любимый фильм');
            }

            movieDB.movies.push(newFilf);
            createMovieList(movieDB.movies, promoInteractiveList);
        }
        e.target.reset();
    });
    

    deleteAdv(promoAdvImg);
    editElem();
    createMovieList(movieDB.movies, promoInteractiveList);
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