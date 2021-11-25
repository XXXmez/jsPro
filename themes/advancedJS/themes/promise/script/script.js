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