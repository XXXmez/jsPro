'use strict';

// Промисы это обещания 
// если произошло что-то то выполнится действие

console.log('Запрос');

const req = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log('Подготовка данных');
    
        const product = {
            name: 'TV',
            price: 200
        };
    
        resolve(product);
    }, 2000);
});

req.then((product) => {        // метод then выполняется на промисе в сулчаел положительного исхода
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order';
            resolve(product);
            // reject();       // пропускает все then и переходит сразу же к catch
        }, 2000);
    }); 
}).then(data => {               // последовательные действия
    data.modify = true;
    return data;
}).then(data => {
    console.log(data);
}).catch(() => {                // Выполняются в случае ошибки
    console.log('Произошла ошибка');
}).finally(() => {              // Выполняется в любом случае в конце
    console.log('Финал');
});        

const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    })
};
// test(1000).then(() => console.log('1s'));
// test(2000).then(() => console.log('2s'));
// test(3000).then(() => console.log('3s'));

Promise.all([test(1000), test(2000)]).then(() => {      // all отслеживает выполнение промисов
    console.log('all');
});

Promise.race([test(1000), test(2000)]).then(() => {      // race - выпоняется когда выполнится хотя бы один промис
    console.log('race');
});



// Занятие по промисам на learn.javascript.ru

// синтаксис
let prom = new Promise(function(resolve, reject) {      // когда мы создаем промис он запускается автоматически, должна содержать код для  создания результата; resolve и reject - это колбэки
    // функция исполнитель (executor)
    
});

// когда промис получает результат он должен вызвать один из колбэков
// resolve(value) — если работа завершилась успешно, с результатом value
// reject(error) — если произошла ошибка, error – объект ошибки

// Пример простого исполнителя с кодом
let prom1 = new Promise(function(resolve, reject) {
    setTimeout(() => resolve('done prom1'), 1000);
});

// Пример с ошибкой
let prom2 = new Promise(function(resolve, reject) {
    setTimeout(() => reject(new Error('Error prom2!')), 1000);
});

// Состояние промиса можно менять только один раз
    // resovle('done');                 // выполнится
    // reject(new Error('error'));      // игрорируется
    // setTimeout(() => resolve("…"));  // игнорируется

// Не обязательно делать что-то асинхронно можно и вызвать сразу же
let prom3 = new Promise(function(resolve, reject) {
    resolve(123);   // сразу же получили успешно завершенный промис
});

// Потребители then, catch, finally
// // промис служит связываюищм звеном между исполнителем и потребителем которые получат либо результат либо ошибку
// prom3.then(
//     function(result) {console.log('res')};
//     function(error) {console.log('err')};
// );

//  Первый аргумент метода .then – функция, которая выполняется, когда промис переходит в состояние «выполнен успешно», и получает результат.
//  Второй аргумент .then – функция, которая выполняется, когда промис переходит в состояние «выполнен с ошибкой», и получает ошибку.

prom1.then(
    result => console.log(result),  // выведет "done prom1" через одну секунду
    error => console.log(error)     // не будет запущена
);

prom2.then(
    result => console.log(result),  // выведет "done prom1" через одну секунду
    error => console.log(error)     // не будет запущена
);