'use strict';

// Инкапсуляция - сокрытые кода

// function User(name, age) {
//     this.name = name;
//     let userAge = age;

//     this.say = function() {
//         console.log(`Имя пользователя: ${this.name}, возраст ${userAge}`);
//     };

//     this.getAge = function() {
//         return userAge;
//     };

//     this.setAge = function(age) {
//         if(typeof age === 'number'  && age > 0 && age < 110) {
//             userAge = age;
//         } else {
//             console.log('Недопустимое значение');
//         }
//     }
// };

// const ruslan = new User('Ruslan', 24);
// console.log(ruslan.name);
// console.log(ruslan.getAge());


// ruslan.setAge(1);
// ruslan.setAge(300);
// console.log(ruslan.getAge());
// ruslan.name = 'Rus';

// ruslan.say();


class User {
    constructor (name, age) {
        this.name = name;
        this._userAge = age;
    }

    // приватное свойство
    #surname = 'Bogdanov';

    say () {
        console.log(`Имя пользователя: ${this.name} ${this.#surname}, возраст ${this._userAge}`);
    }

    get age () {
        return this._userAge;
    }

    set age (age) {
        if(typeof age === 'number'  && age > 0 && age < 110) {
            this._userAge = age;
        } else {
            console.log('Недопустимое значение');
        }
    }
};

const ruslan = new User('Ruslan', 24);
console.log(ruslan._userAge);
ruslan.age = 99;
ruslan._userAge = 23
console.log(ruslan._userAge);
// console.log(ruslan.#surname);            // error - нельзя обращаться к приватным свойствам
ruslan.say();


// ДЗ
class privatProperty {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }

    #surname = 'Bog';

    hello() {
        console.log(`Привет, меня зовут ${this.name} ${this.#surname}, мне ${this.age} лет`);
    }

    get privatProp () {
        console.log(this.#surname);
    }
    
    set privatProp (sur) {
        this.#surname = sur;
    }
}

const rus = new privatProperty('Ruslan', 24);
rus.hello();
// console.log(rus.#surname);           // Через # нельзя обращаться будет ошиька
// console.log(rus.surname);            // undefined
rus.privatProp;
rus.privatProp = 'Bogdanov';
rus.hello();