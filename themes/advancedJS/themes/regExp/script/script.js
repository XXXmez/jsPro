'use strict';

// new RegExp('pattern', 'flags');         // классический синтаксис создания рег выражения которым непользуются

// /pattern/f       // новый синтаксис 

// Методы регулярных выражений 
// search - ищет всегда только первое совпадение независимо от флагов
// match

// const ans = prompt('Введите ваше имя', '');

const reg = /n/ig;
// Флаги
// i - ищет не зависимо от регистра n и N
// g - global ищет сразу же несколько вхождений а не одно, не работает с методом search
// m - многострочный режим

// console.log(ans.search(reg));
// console.log(ans.match(reg));

// const pass = prompt('Password', '');
// console.log(pass.replace(/./g, '*'));       // . в регулярном выражении значит что это любой символ     а что бы просто взять точку нужно ее экранировать \.

// console.log('12-34-56'.replace(/-/g, ':'));


// Метод тест
// const ansv = prompt('Введите ваше имя', '');
// const regu = /n/ig;
// console.log(regu.test(ansv));

// классы
// \d - ищет цифры
// \w - все буквы
// \s - пробелы

// const ansv = prompt('Введите число', '');
// const regu = /\d/g;
// console.log(ansv.match(regu));

const str = 'My name is R2D2';
console.log(str.match(/\w\d\w\d/i));

// если нужно найти что-то например не числа или не буквы/пробелы класс пишется капсом
// обратные классы
// \D - не числа
// \W - не буквы

const str1 = 'My_name is @';
console.log(str1.match(/\D/ig));