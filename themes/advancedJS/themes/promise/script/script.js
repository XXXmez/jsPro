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

