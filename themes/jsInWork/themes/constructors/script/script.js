'use strict';

function User (name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log(`Hello ${this.name}`);
    };
}
User.prototype.exit = function () {
    console.log(`Пользователь ${this.name} ушел`);
};

const rus = new User ('Rus', 28);
const alex = new User ('Alex', 22);

rus.hello();
alex.exit();

console.log(rus);
console.log(alex);