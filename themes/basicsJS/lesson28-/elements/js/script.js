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