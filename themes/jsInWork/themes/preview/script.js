'use strict';

const box = document.querySelector('.box'),
      btn = document.querySelector('button');

// const width = box.clientWidth;
// const height = box.clientHeight;
// const width = box.offsetWidth;
// const height = box.offsetHeight;
const width = box.scrollWidth;
const height = box.scrollHeight;

console.log(width, height);

btn.addEventListener('click', () => {
    let topScroll = box.scrollTop;
    
    // box.scrollTo (0, 50);    // прокрутка от начала страницы
    box.scrollBy (0, 50);       // прокрутка от текущего положения
});

console.log(box.getBoundingClientRect().top);

// Приверка стилей из CSS 

let style = window.getComputedStyle(box);       // метод дает доступ к стилям псевдо элементов, менять нелья
console.log(style.display);

console.log(document.documentElement.clientWidth);