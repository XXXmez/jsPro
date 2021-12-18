'use strict';

// // записать значение
//                       //key   value
// localStorage.setItem('number', 5)               // если key будет повторяться то значение value перезапишется
   
// // выгрузить значение
// console.log(localStorage.getItem('number'));

// // удалить значение
// localStorage.removeItem('number');

// // полная очистка локального хранилища
// localStorage.clear();

const checkbox = document.querySelector('#checkbox'),
      form = document.querySelector('form'),
      change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
    checkbox.checked = true;
}

if (localStorage.getItem('bg') === 'changed') {
    form.style.backgroundColor = 'red';
} else {
    form.style.backgroundColor = 'green';
}

checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
});

change.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg');
        form.style.backgroundColor = 'green';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'red';
    }
});

const person = {
    name: 'Alex',
    age: 25
};

const serializedPersone = JSON.stringify(person);       // в localStorage нельзя сохранить обычный объект
localStorage.setItem('alex', serializedPersone);

console.log(JSON.parse(localStorage.getItem('alex')));