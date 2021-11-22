'use strict';

const persone = {
    name: 'Rus',
    tel: '+79001234578',
    parents: {
        arr: ['mom', 'dad']
    }
};

// благодаря такому способу можно делать глубокую копию массива
let copyPersone = JSON.parse(JSON.stringify(persone));
copyPersone.parents.arr[1] = 'sister';

console.log(persone);
console.log(copyPersone);