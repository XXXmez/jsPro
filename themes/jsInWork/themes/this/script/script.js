'use strict';

// функция может вызываться четырмя способами 
// 1 способ - просто вызов функции
function showThis (a,b) {
    console.log(this);      // this = window, если включен 'use strict' - undefined
    function sum () {
        console.log(this);  // => undefined
        return a + b;       // this = undefined
    }
    console.log(sum());
}
showThis(4,5);

// 2 способ - контекст у методов объектов сам объект
const object1 = {
    a: 20,
    b: 15,
    sum: function () {
        console.log(this);          // => {a: 20, b: 15, sum: ƒ} вывело так ак это метод
        function shout() {
            console.log(this);      // => undefined так как это простая функция
        }
        shout();
    }
}
object1.sum();

// 3 способ - через операто New, this в конструкторах и классах это новый экземпляр объекта
function User (name, id) {              // функция конструктор, при вызове создает новый объект
    this.name = name;                   // свойства this
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    }
}
let ivan = new User("Ivan", 23)
console.log(ivan);
ivan.hello();

// 4 способ - ручное присваивание this любой функции, call apply bind
function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
    function hello() {
        console.log(`Hello ${this.name}`);
    }
}
const user = {
    name: 'John'
};
// 1 вариант ручного присвоения
sayName.call(user, 'Smith');            // передали в функцию объект для использования ее данных, передача данных в функцию через запятую
// 2 вариант ручного присвоения
sayName.apply(user, ['Sonic']);         // тоже самое, передача данных в функцию в массиве
// 3 вариант ручного присвоения - метод байнд создает новую функцию
function count(num) {
    return this * num;
}

const double = count.bind(2);       // 2 - this
console.log(double(5));             // 5 - num
console.log(double(7));

// работа с кнопкой на странице

const btn = document.querySelector('button');
// btn.addEventListener('click', function() {
//     console.log(this);
//     this.style.background = 'red';
// });
btn.addEventListener('click', (e) => {       // стрелочная функция переключилась на родителя window
    console.log(this);
    e.target.style.background = 'red';
});

// у стрелочных функций нет своего контекста вызова она его берет у своего родителя
const object2 = {
    num: 5,
    sayNumber: function() {         // метод, контекст внутри них ссылается на сам объект
        const say = () => {         // так как используется стрелочная функция у которой нет своего контекста она берет его у родителя
            console.log(this);
            console.log(this.num);
        }
        say();
    }
}
object2.sayNumber();

const double2 = a => a * 2;       // если функция помещается в одну строку можно написать так и return не нужен он ставится автоматически, аргумент пишется так же без скобок если он один
console.log(double2(8));