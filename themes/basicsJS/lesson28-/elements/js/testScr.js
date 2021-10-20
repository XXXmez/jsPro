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


const circles = document.getElementsByClassName('circle'),
      btns = document.getElementsByTagName('button'),
      hearts = document.getElementsByClassName('heart');

// Конвертация псевдомасива в массив

// 1 способ     переборка - для новичков ничего особенного
let arrCircles1 = [];
for (let i = 0; i < circles.length; i++) {
    arrCircles1.push(circles[i])
}
console.log('Коллекция: ', circles);
console.log('Массив:    ', arrCircles1);

let arrBtns1 = [];
for (let i = 0; i < btns.length; i++) {
    arrBtns1.push(btns[i]);
}
console.log('arrBtns1:   ', arrBtns1);

let arrHearts1 = [];
for (let i = 0; i < hearts.length; i++) {
    arrHearts1.push(hearts[i]);
}
console.log('arrHearts1:  ', arrHearts1);

// 2 способ     Array.from() - нет поддержки IE но не беда его же больше нет ^_^
let arrCircles2 = Array.from(circles);
console.log('arrCircles2: ', arrCircles2);

let arrBtns2 = Array.from(btns);
console.log('arrBtns2:    ', arrBtns2);

let arrHearts2 = Array.from(hearts);
console.log('arrHearts2:  ', arrHearts2);

// 3 способ     Array.prototype.slice.call() ( [].slice.call() ) - старый метод
let arrCircles3 = [].slice.call(circles);
console.log('arrCircles3: ', arrCircles3);

let arrBtns3 = Array.prototype.slice.call(btns);
console.log('arrBtns3:    ', arrBtns3);

let arrHearts3 = Array.prototype.slice.call(hearts);
console.log('arrHearts3:  ', arrHearts3);

// 4 способ     spread оператор - так же не работает с IE, и работает только с корневыми псевдомассивами
let arrCircles4 = [...circles];
console.log('arrCircles4: ', arrCircles4);

let arrBtns4 = [...btns];
console.log('arrBtns4:    ', arrBtns4);

let arrHearts4 = [...hearts];
console.log('arrHearts4:  ', arrHearts4);

// 5 способ     изменение свойства __proto__ - получается не совсем массив и много заморочек
circles.__proto__ = Array.prototype;
console.log(circles);

btns.__proto__ = Array.prototype;
console.log(btns);

hearts.__proto__ = Array.prototype;
console.log(hearts);