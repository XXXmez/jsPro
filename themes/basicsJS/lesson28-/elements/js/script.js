'use strict';
document.addEventListener('DOMContentLoaded', () => {

/*
const box = document.getElementById('box');
console.log(box);

const btns = document.getElementsByTagName('button');
//const btns = document.getElementsByTagName('button')[1];        // получаем 2 кнопку
//console.log(btns[1]);       // так же можно получить вторую кнопку
console.log(btns);

// классы

const circles = document.getElementsByClassName('circle');
console.log(circles);

// современные методы

const hearts = document.querySelectorAll('.heart');
console.log(hearts);
hearts.forEach(item => console.log(item));

const oneHeart = document.querySelector('.heart');
console.log(oneHeart);
*/


//29. Действия с элементами на странице
console.log('29. Действия с элементами на странице');
const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');

/*box.style.backgroundColor = 'blue';
box.style.width = '500px';*/

box.style.cssText = 'background-color: red; width: 500px;';

btns[1].style.borderRadius = '100%'
circles[0].style.backgroundColor = 'red';


// действия над несколькими элементами

// такой способ почти не используется
/*for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'green';
}*/

// нормальный способ
hearts.forEach((item) => {
    item.style.backgroundColor = 'green';
});


// создание элемента
const div = document.createElement('div');
// создание текстового узла такой способ используется очень редко
//const text = document.createTextNode('hi boy');

div.classList.add('black');

// вставляет элемент в конец родителя
wrapper.append(div);
// вставляет элемент в начало родителя
//wrapper.prepend(div);

// перед
//hearts[0].before(div);
// после
//hearts[0].after(div);

// удаление элемента
//circles[0].remove();

// замена элемента
//hearts[0].replaceWith(circles[0])


// устаревшие

// в конец родителя
//wrapper.appendChild(div);

// вставить перед
//wrapper.insertBefore(div, hearts[1])

// удаление
//wrapper.removeChild(hearts[1])

// замена
//wrapper.replaceChild(circles[0], hearts[0]);


// вписать текст в элемент
// можно вложить html структуру
div.innerHTML = '<h1>hi boy</h1>';
// нельзя вложить html структуру
//div.textContent = 'hi boy';


// вставка html кода
// beforebegin - перед элементом
// afterbegin - в начало элемента
// beforeend - в конец элемента
// afterend -  после элемента
div.insertAdjacentHTML('afterend', '<h2>hi</h2>')


// сокращенный поиск элемента на странице
/*let dqs = function (elem){
    return document.querySelector(elem)
};
let elem1 = dqs('#box');
let elem2 = dqs('.circle');
console.log(elem1);
console.log(elem2);*/


//События и их обработчики
console.log('');console.log('');
console.log('События и их обработчики');

const btn31 = document.querySelector('#btn31'),
      overlay = document.querySelector('.overlay'),
      btn31s = document.querySelectorAll('.btn31');

//let i = 0;
const deleteElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
    //i++;
    //if (i == 1) {
    //    btn31.removeEventListener('click', deleteElement);
    //}
};


//btn31.addEventListener('click', deleteElement);
//overlay.addEventListener('click', deleteElement);

btn31s.forEach(item => {
    item.addEventListener('click', deleteElement, {once: true});
});

const link = document.querySelector('.a31');

link.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target);
});


//Навигация по DOM - элементам, data-атрибуты, преимущество for/of
console.log('');console.log('');
console.log('Навигация по DOM - элементам, data-атрибуты, преимущество for/of');

//console.log(document.documentElement);
//console.log(document.body.childNodes);

// Получение элементов от родителя
//console.log(document.body.firstChild);
//console.log(document.body.firstElementChild);           // Получаем первый элемент в родителе
//console.log(document.body.lastChild);


// Получение родителя/соседей/друзей
//console.log(document.querySelector('#current').parentNode.parentNode);
//console.log(document.querySelector('#current').parentElement);

// data-атрубуты
// ищем следующий элемент после того который мы нашли
//console.log(document.querySelector('[data-current="3"]').nextSibling);          // текстовый
// ищем предыдущий элемент после того который мы нашли
//console.log(document.querySelector('[data-current="3"]').previousSibling);      // текстовый
// Аналогичные команды для получение элемента
//console.log(document.querySelector('[data-current="3"]').nextElementSibling);           // Следующий элемент в родителе
//console.log(document.querySelector('[data-current="3"]').previousElementSibling);       // Предыдущий элемент в родителе

// Аналог childNodes в ручную
/*for (let node of document.body.childNodes) {
    if (node.nodeName == '#text' || node.nodeName == '#comment') {
        continue;
    }
    
    console.log(node);
}*/


// События на мобильных устройствах
console.log('');console.log('');
console.log('События на мобильных устройствах');
    // Всего существует 6 мобильных событий
    // начинаются они со слова touch
    // touchstart - касание пальцем
    // touchmove - проведение по элементы
    // touchend - отрыв от элемента
    // touchenter - проведение пальцем по экрану и попадение на эелемент
    // touchleave - палец ушел за элемент
    // touchcancel - палец ушел за пределы браузера

    const boxM = document.querySelector('.boxM');

    boxM.addEventListener('touchstart', (e) => {
        e.preventDefault;
        console.log('touchstart');
        console.log(e.touches);
    });

    boxM.addEventListener('touchmove', (e) => {
        e.preventDefault;
        console.log('touchmove');
        console.log(e.targetTouches[0].pageY);
    });

    boxM.addEventListener('touchend', (e) => {
        e.preventDefault;
        console.log('touchend');
    });

    boxM.addEventListener('touchend', (e) => {
        e.preventDefault;
        console.log('touchend');
    });

    // touches - сколько пальцев активно
    // targetTouches - пальци на элементе
    // changedTouches - список пальцев с события
    
});