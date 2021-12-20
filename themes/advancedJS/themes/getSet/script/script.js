'use strict';

// Свойства акцессоры
const persone = {
    name: 'Ruslan',
    age: 25,
    get userAge() {
        return this.age;
    },
    set userAge(num) {
        this.age = num
    }
}

console.log(persone.userAge = 30);
console.log(persone);