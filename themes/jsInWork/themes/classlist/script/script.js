const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

//console.log(btns[0].classList.length);            // Количество классов  у элемента
//console.log(btns[0].classList.item(1));           // Класс по индексом
//console.log(btns[0].classList.add('red', 'two'));        // Добавиить класс
//console.log(btns[0].classList.remove('blue'));    // Удалить класс
//console.log(btns[0].classList.toggle('blue'));    // Удалить если класс есть, добавить если класса нет

/*if(btns[0].classList.contains('red')) {
    console.log('Есть');
} else {
    console.log('Нету');
}*/

btns[0].addEventListener('click', (e) => {
    /*
    if (!btns[1].classList.contains('red')) {
        btns[1].classList.add('red');
    } else {
        btns[1].classList.remove('red');
    }
    */

   // другой метод
   btns[1].classList.toggle('red')
});

// Старый способ который не использовать
//console.log(btns[0].className);


// Делегирование событий
wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.matches('button.red')) {           // event.target.matches('button.red') - новый продвинутый способ, за место него можно использовать event.target.tagName == 'BUTTON'
        console.log(1);
    }
});

// тоже самое что и выше только при помощи обычного перебора
/*
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log('1');       // Не работает на динамически добавленном элементе
    })
});
*/

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);