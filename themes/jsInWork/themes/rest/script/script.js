const log = function(a, b, ...c) {      // c - это оператор rest его можно назвать как угодно, собирает оставшееся в массиве
    console.log(a,b,c);
};

log(5, 9, 22, 35, 38);

// Параметры по умолчанию
function calcOrDouble(num, basis = 7) {         // basis = 7 - параметр по умолчанию, если не передали второе значение
    // basis = basis || 2;         // так делали до появления оператора Rest в ES6
    console.log(num * basis);
}
calcOrDouble(3)