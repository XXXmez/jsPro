'use strict';

// filter - фультрует элементы внутри массива - возвращает новый массив, измененный, не трагает старый
const names = ['Ruslan', 'Anna', 'Ivan', 'Vladislav'];
const shortNames = names.filter(function (name) {   // функция условие
    return name.length < 5;
});
console.log(shortNames);

// map - позволяет изменить каждый исходный элемент внутри массива
const answers = ['IvAn', 'rUslAN', 'pETr'];
const lowAnswers = answers.map(a => a.toLowerCase());
console.log(lowAnswers);

// some - перебирает массив и если элемент подходит то возвращает булиновое значение
// every - так же перебирает элементы массива и если все элементы массива подходят вернет true
const some = [4, 'hello', 'world'];
console.log('some  : ', some.some(i => typeof(i)==="number"));
console.log('every : ', some.every(i => typeof(i)==="number"));

// reduce - схлопывает массив в единое целое
const arr = [4, 5, 2, 5, 3, 6];
const arrSum = arr.reduce((sum, current) => sum + current, 3)    // sum - это первый элемент подставляется автоматически, current - все остальное, третий аргумент '3', меняет первоначальное значение 0 на заданное значение
console.log(arrSum);

const arr2 = ['IvAn', 'rUslAN', 'pETr'];
const arrSum2 = arr2.reduce((sum, current) => {       // sum - это первый элемент подставляется автоматически, current - все остальное
    return `${sum}, ${current}`;
})
console.log(arrSum2);

// пример использования
const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};
const newArray = Object.entries(obj)
.filter((i) => {
    return i[1] === 'persone';
})
.map(i => i[0]);
console.log(newArray);