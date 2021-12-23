export let one = 1;

let two = 2;

export {two};

// 4. Экспорт по умолчанию
export default function sayHi() {
    console.log('Hi');
}