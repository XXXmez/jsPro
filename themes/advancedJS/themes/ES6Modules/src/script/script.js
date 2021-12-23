// 1. Импорт простой в переменные по имени
// import {one, two} from './main';
// console.log('1: ', one);
// console.log('1: ', two);


// 2. Импорт с заменой имени
// import {one as first} from './main';
// console.log('2: ', first);

// 3. Импорт всего того что экспортируется из файла по ссылке
// import * as data from './main';
// console.log('3: ', data.one);

// 4. Экспорт по умолчанию - он может быть только один
// import {one, two} from './main';
// import sayHi from './main';
// console.log('4: ', one);
// console.log('4: ', two);
// sayHi();

// 5. 
import {one, two} from './main.js';
import sayHi from './main.js';
console.log('5: ', one);
console.log('5: ', two);
sayHi(); 

console.log(1);