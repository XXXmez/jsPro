'use strict';

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


// перебрать все div и вывести в консоль те у которых есть класс circle
/*const arrDiv = document.querySelectorAll('div');
for (let item of arrDiv) {
    if (item.classList == 'circle') {
        console.log(item);
    }
}*/

// при клике на button меняет его цвет на красный
/*const buttons = document.querySelectorAll('button');
buttons.forEach((e) => {
    e.addEventListener('click', () => {
        e.style.backgroundColor='blue';
    });
});*/