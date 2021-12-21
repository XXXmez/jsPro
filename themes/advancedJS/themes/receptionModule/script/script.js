'use strict';

// const app = '123';           // SyntaxError: Identifier 'app' has already been declared

const number = 1;

(function(){        // анонамная функция, если бы не было скобок то была бы function declaration и пришлось бы ей дать имя
    // при помощи этого создается собственная область видимости
    let number = 2;
    console.log('Локальная: ' , number);
    console.log('Локальная + 3: ' , number + 3);
}());

console.log('Глобальная: ' , number);
console.log('Глобальная + 3: ' , number + 3);

// создание модуля - объектного интерфейса
const user = (function(){
    const privat = function() {         // function expression
        console.log('Я приватная');
    };
    return  {
        sayHello: privat
    };
}());

user.sayHello();