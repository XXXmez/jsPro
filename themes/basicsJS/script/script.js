"use strict";
{
    //a = 15                          // "use strict" - исправил неточность и теперь переменные таким способом не создаются
    //console.log(a);                 // => ReferenceError - переменная не найдена

    //объявление переменной
    //console.log(number);          // => ReferenceError - переменная не найдена
    let number = 5;                  // изменить можно
    const leftBorderWidth = 1;       // изменить нельзя

    number = 10;
    console.log(number);
    //leftBorderWidth = 7
    //console.log(leftBorderWidth);   // => TypeError т.к. константы не изменяемые

    const obj = {
        a:50
    };
    obj.a = 37;
    console.log(obj);

    //console.log(namE);          // => undefined - неправильное поведение var, такое поведение называется хостинг
    var namE = "Ruslan";
    namE = "Sonya";
    console.log(namE);

    {
        let result = 50;
        console.log(result);    // => 50, ее область видимости
    };
    //console.log(result);        // => ReferenceError - переменная не найдена, так как она находится в другой области видимости
}

console.log(' ');console.log(' ');
// Классификация типов данных JS
{
    // существует 8 типов данных
    // простые типы это - числа (1,2,3), строки ('string', 'name'), 
    // логический тип (boolean - true/false), специфический тип данных null - чего-то просто не существует,
    // еще один спец. тип данных undefined - значения нет, BigInt - отображает большие числа, Symbol - 

    // Комплексные типы данных
    // спец. объекты это - массивы [], функции function, объекты даты, регулярные выражения, ошибки
    // обычные объекты

    // Числа
    let number = 4.6;
    console.log(-4/0);
    console.log('string' * 9);      // => not a number - (не-число)

    // Строка
    const persone = "Alex";

    // Boolean
    const bool = false;

    // null
    //console.log(something);        // => ReferenceError - ссылаемся на несуществующий объект, по сути это и есть null

    // undefined
    let und;
    console.log(und);                // => undefined - так как переменная пустая

    // Symbol - почти не используется
    // BigInt - тоже самое, так, что не знакомимся с ними пока что

    // Объекты
    const obj = {
        name: "Ruslan",
        age: 23,
        isMarried: false
    };
    //console.log(obj.name);
    console.log(obj["name"]);
    // разновидность объекта это массив, массив это частный случай объекта
    const massive = ['Первый', 2, 3, {a:1,x:2}, [1,2,3]]        // => массив, частный случай объекта
    massive[1] = 4;
    massive.push(6);                  // Даже если массив создан через const то его можно изменить
    console.log(massive);
}

console.log(' ');console.log(' ');
// Простое влаимодеействие с пользователем
{
    //alert("Привет, пользователь!");
    
    //let result = confirm('Ты человек?');
    //console.log(result);
    
    //const answer = prompt("Сколько вам лет?", "");        // Сохраняет данные как строку
    //1801118console.log(typeof answer);                    // => Вернулась строка
    
    //const answer = +prompt("Сколько вам лет?", "");       // Поставили + перед промптом, динамическая типизация
    //console.log(typeof answer);                           // => Вернулось число
    
    //const answer = prompt("Сколько вам лет?", "");          // Убрали +, чтобы получить строку
    //console.log(answer+5);                                  // => 105, вернулась строка, так как данные склеились

    const answers = [];
    //answers[0] = prompt('Как вас зовут?', '');
    //answers[1] = prompt('Какая у вас Фамилия?', '');
    //answers[2] = +prompt('Сколько вам лет?', '');

    //document.write(answers);              // => document.write() - заменит все содержимое страницы на то что мы хотим передать
    //console.log(answers);                   // => (3) ["Руслан", "Богданов", 23] - массив
    
    console.log(typeof answers);            // => object
    console.log(typeof null);               // => object - официально признанная ошибка



    // ВСЯ ИНФОРМАЦИЯ КОТОРАЯ ПРИХОДИТ ОТ ПОЛЬЗОВАТЕЛЯ БУДЕТ СТРОКОЙ
}

console.log(' ');console.log(' ');
// Интерполяция ES6
{
    const category = 'toys'
    console.log('https://someurl.com/' + category + '/' + '5');     // => https://someurl.com/toys/5, канкатениция строк
    console.log(`https://someurl.com/${category}/5`);     // => https://someurl.com/toys/5, интерполяция - работает с `` ковычками

    const user = "Ruslan";
    //alert(`Привет, ${user}`)        // => Привет, Ruslan
}

console.log(' ');console.log(' ');
// Операторы в JS
{
    console.log('arr' + " - object");
    console.log(4 + " - object");
    // Унарный плюс - это плюс переод определенным элементом
    console.log(4 + +" - object");
    console.log(4 + +"5");

    // Энкримент и декримент
    // Декрименты
    let incr = 10,
        decr = 10,
        incrP = 10,
        decrP = 10;
    //incr++;     // Оператор инкримета - увеличение на единицу. Постфиксная форма записи
    //decr--;     // Оператор декримерта - уменьшение на единичку. Постфиксная форма записи
    //++incrP;    // Оператор инкримета - увеличение на единицу. Префиксная форма записи
    //--decrP;    // Оператор декримерта - уменьшение на единичку. Префиксная форма записи
    console.log(incr++);
    console.log(decr--);
    console.log(++incrP);
    console.log(--decrP);

    console.log(5%2);       // Остаток от деления
    console.log(100/27);
    
    //Если один раз применяется равенство (=) то это присваивание, если два раза (==) то это сравнение
    console.log(2*4 == 8);
    console.log(2*4 == '8');        // Сравнение по значению, тип данных не сравнивается
    console.log(2*4 === '8');       // Строгое сравнение
    console.log(2 && 4);        // И        => 4 , так как сравниевает по истенности и выводит последнее истенное
    console.log(2 || 4);        // ИЛИ      => 2 , так как сравниевает если хотя бы одно истенно и выводит хотя бы первое истенное
    const isChecked = true,
          isClose = false;
    console.log(isChecked && isClose);
    console.log(isChecked || isClose);
    console.log(isChecked || !isClose);     // ! - оператор отрицания, если было true станет false, или на оборот\

    console.log(2+2*2 === 8);       // Приоритет операторов

    // Есть еще побитовые операторы но про них потом
}

console.log('');console.log('');
// 10.Система контроля версий Git
{
    console.log('10.Система контроля версий Git');
}

console.log('');console.log('');
// 11. Как работать с GitHub с разных компьютеров, gitignore и Git Kraken
{
    console.log('11. Как работать с GitHub с разных компьютеров, gitignore и Git Kraken');
    // Для работы с гитом с другого рабочего места можно
    // зайти на гит в свой ропозитой нажать на кнопку Clone or download
    // и либо скачать либо загрузить через Git репозиторий по ссылке

    // Для загрузки через терминал git clone ссылка_на_проект имя_папки_проекта_где_он_будет_лежать
    
    // Для открытия загруженного проекта с работы дома 
    // git pull

    // Если на github и на ПК не совпадают версии файла
    // git pull
    // операция мердж

}

console.log('');console.log('');
// 12. Практика, ч.1. Начинаем создавать приложение
{
    console.log('12. Практика, ч.1. Начинаем создавать приложение');
    
    /*const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };

    let oneMovie = prompt('Один из последних просмотренных фильмов?', "");
    let oneGrade = prompt("На сколько его оцените?", "");
    let twoMovie = prompt('Один из последних просмотренных фильмов?', "");
    let twoGrade = prompt("На сколько его оцените?", "");
    personalMovieDB.movies[oneMovie] = oneGrade;
    personalMovieDB.movies[twoMovie] = twoGrade;
    console.log(personalMovieDB);*/

}

console.log('');console.log('');
// 13. Условия
{
    console.log('13. Условия');
    
    if (4 == 9) {
        console.log('ok');
    } else {
        console.log('error');
    }

    const num = 50;
    if (num < 49) {
        console.log('error');
    } else if (num > 100) {
        console.log('Много');
    } else {
        console.log('ok');
    }

    // Другой синтаксис при помощи тернарного оператора

    (num === 50) ? console.log('ok') : console.log('error');

    // switch

    switch(num) {
        case 49: 
            console.log('error');
            break;
        case 50: 
            console.log('ok');
            break;
        case 100:
            console.log('много');
            break;
        default:
            console.log('не знаю');
    }

}

console.log('');console.log('');
// 14. Циклы
{
    console.log('14. Циклы');

    let num = 50;
    
    /*while (num < 55) {
        console.log(num);
        num++;
    }*/

    do {
        console.log(num);
        num ++
    }
    while (num < 55);

    for (let i = 1; i < 8; i++) {
        if (i == 6) {
            //break;        // прервали цикли когда он достиг нужного момента
            continue;       // пропуск нужного нам шага
            
        }
        console.log(i);
    }
    

}

console.log('');console.log('');
// 15. Практика, ч.2. Применяем условия и циклы
{
    console.log('15. Практика, ч.2. Применяем условия и циклы');
    /*---------------------
    let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };

    let i = 0;
    while (i < 2) {
        let mov = prompt('Один из последних просмотренных фильмов?', "");
        let grd = prompt("На сколько его оцените?", "");

        if (mov != null && grd != null && mov != "" && grd != "" && mov.length < 50) {
            personalMovieDB.movies[i+1 + ": " + mov] = grd;
            console.log('Записано');
        } else {
            console.error('Error: пустые строки');
            i--;
        }

        
        i++;
    };
    ---------------------*/

    /*for (let i = 0; i < 2; i++) {
        let mov = prompt('Один из последних просмотренных фильмов?', "");
        let grd = prompt("На сколько его оцените?", "");

        if (mov != null && grd != null && mov != "" && grd != "" && mov.length < 50) {
            personalMovieDB.movies[i+1 + ": " + mov] = grd;
            console.log('Записано');
        } else {
            console.error('Error: пустые строки');
            i--;
        }
    }*/

    /*let i = 0;
    do {
        let mov = prompt('Один из последних просмотренных фильмов?', "");
        let grd = prompt("На сколько его оцените?", "");

        if (mov != null && grd != null && mov != "" && grd != "" && mov.length < 50) {
            personalMovieDB.movies[i+1 + ": " + mov] = grd;
            console.log('Записано');
        } else {
            console.error('Error: пустые строки');
            i--;
        }

        
        i++;
    }
    while (i < 2);*/

    /*---------------------
    if (personalMovieDB.count < 10 && personalMovieDB.count >= 1) {
        console.log('Мало, мало...');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы зритель!');
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман!");
    } else {
        console.log('Error');
    }

    console.log(personalMovieDB);
    ---------------------*/

}

console.log('');console.log('');
// 16. Функции, стрелочные ф-ции (ES6)
{
    console.log('16. Функции, стрелочные ф-ции (ES6)');

    let num = 20;

    function showFirstMessage (text) {
        console.log(text);
        num = 30;
    }
    showFirstMessage('Привет ^-^');
    console.log(num);

    function calc(a,b) {
        return a + b
    }
    console.log(calc(5,4));

    function ret() {
        let num = 50;   // переменная внутри области видимости функции ret()
        return num;     // выводим переменную
    }
    let anotherNum = ret(); // записываем ее
    console.log(anotherNum);

    // function declaration
    function foo() {
        // код
        // можно вызвать когда угодно
    }

    // function expression
    let foo2 = function() {
        // код
        // можно вызвать только после объявления
    };

    const logger = function(){
        console.log('FE');
    };      // ставится обязательно ; , так как создается переменная, во избежание ошибок
    logger();

    // стрелочная функция
    const calc2 = (a,b) => {return a + b};
    console.log(calc2(4,3));
    console.log(calc2(5,6));
    console.log(calc2(10,6));
    // не имеет своего контекста this


    //Замыкания, функции изнутри
    //Лексическое окружение
    function funcFoo() {
        let io = 1;     // переменные внутри функции это свойства LexicalEnvironment
                        // в отличие от window, LexicalEnvironment - скрыт
    }
    //пример
    function sayHi(name) {
        // LexicalEnvironment = { name: 'Вася', phrase: undefined }
        let phrase = 'Привет ' + name;
        // LexicalEnvironment = { name: 'Вася', phrase: 'Привет, Вася'}
        console.log(phrase);
    }
    sayHi('Руслан');

    
    //Доступ ко внешним переменным
    let userName = "Вася";
    function sayHi2() {
    console.log( userName ); // "Вася"
    }

    //Всегда текущее значение
    //берёт то значение, которое там есть на момент обращения
    let phrase = 'Привет';
    function sayhi3(name) {
        console.log(phrase + ', ' + name);
    }
    sayhi3('Иван');
    phrase = 'Пока';
    sayhi3('Евген');

    //Вложенные функции
    function sayHiBye(firstName, lastName) {
        console.log('Привет, ', getFullName());
        console.log('Пока, ', getFullName());

        function getFullName() {
            return firstName + " " + lastName;
        }
    }
    sayHiBye('Влад', 'Клад')

    //если не найденна переменная во внешнем объекте  то она ищется еще в более внешнем
    let phrase4 = 'Как так';
    function say4(){
        function go1(){
            console.log(phrase4);
        }
        go1();
    }
    say4();

    //Возврат функции
    
}

console.log('');console.log('');
// 17. Методы и свойства строк и чисел
console.log('17. Методы и свойства строк и чисел');
{
    const str = "test";
    const arr = [1,2,3];
    
    console.log(str.length);
    console.log(arr.length);        // свойство length, свойства пишутся через точку (.), методы вызываются через круглые скобки ()

    // все методы можно найти на https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String
    //                      и на https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number


    //console.log(str[2] = 'd');  // не работает
    console.log(str.toUpperCase());             // .toUpperCase() - метод, возвращает новое значение не изменяя старое
    console.log(str.toLowerCase());
    console.log(str);

    const fruit = "Some fruit";

    // indexOf - поиск подстроки
    console.log(fruit.indexOf("fruit"));        // => 5, позиция с которой нашелся данный элемент
    console.log(fruit.indexOf("q"));            // => -1, значит что такого элемента вообще нет

    const logg = "Привет мир, как дела?"
    let inP = 'мир';
    let inPLn = inP.length;
    let inOF = logg.indexOf(inP);
    console.log(inOF);
    console.log(logg.slice(7, 10));
    console.log(logg.slice(inOF, inOF+inPLn));
    console.log(logg.slice(-5, -1));

    console.log(logg.substring(7, 10));     // substring можно писать первое значение больше чем второе, но минусовое значение записывается как 0

    console.log(logg.substr(7, 3));         // substr первый метод это где начинается и второй метод это длина вырезаемого


    // для работы с числами есть библиотека Math она встроенна в браузер
    
    const num = 12.2;
    console.log(num);
    console.log(Math.round(num));

    // в числах есть методы которые преобразуют строки в числа
    const test = '12.2px';
    console.log(test);
    console.log(parseInt(test));            // => 12 в числовом типе данных, без дробных значений
    console.log(parseFloat(test));          // => 12.2, для возврата числа с дробными значениями

}

console.log('');console.log('');
// 18. Практика, ч.3. Используем функции
console.log('18. Практика, ч.3. Используем функции');
{
    
    let numberOfFilms;

    function start () {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

        while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    }
    //start();

    const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };

    function rememberMyFilms () {
        for (let i = 0; i < 2; i++) {
            let mov = prompt('Один из последних просмотренных фильмов?', "");
            let grd = prompt("На сколько его оцените?", "");
    
            if (mov != null && grd != null && mov != "" && grd != "" && mov.length < 50) {
                personalMovieDB.movies[i+1 + ": " + mov] = grd;
                console.log('Записано');
            } else {
                console.error('Error: пустые строки');
                i--;
            }
        }
    }
    //rememberMyFilms();

    function detectPersonalLevel() {
        if (personalMovieDB.count < 10 && personalMovieDB.count >= 1) {
            console.log('Мало, мало...');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы зритель!');
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман!");
        } else {
            console.log('Error');
        }
    }
    //detectPersonalLevel();

    function showMyDB () {
        if (!personalMovieDB.privat) {
            console.log("function showMyDB: ", personalMovieDB);
        }
    }
    //showMyDB();

    function writeYourGenres () {
        let genres;
        for (let i = 0; i < 3; i++) {
            genres = prompt(`Ваш любимый жанр под № ${i+1}:`, '');
            if (genres != null && genres != "") {
                personalMovieDB.genres[i] = genres;
                console.log('Записано');
            } else {
                console.error('Error: пустые строки');
                i--;
            }
        }
    }
    //writeYourGenres();
}

console.log('');console.log('');
// 19. Callback - функции
console.log('19. Callback - функции');
{
    function first() {
        // do something
        // данная функция имеет задержку
        setTimeout(function() {
            //console.log(1);
        }, 500)
    }

    function second() {
        console.log(2);
    }

    first();
    second();

    // Callback - это функция которая должна бть выполнена после того как другая функция завершила свое выполнение

    function learnJS (lang, callback) {
        console.log(`Я учу: ${lang}`);
        callback();
    }
    function done() {
        console.log('Я прошел этот урок');
    }
    learnJS('JavaScript', done);
}

console.log('');console.log('');
// 20. Объекты, деструктуризация объектов (ES6)
console.log('20. Объекты, деструктуризация объектов (ES6)'); 
{
    // объекты в JS это ассоциативные массивы
    
    //const obj = new Object();               // создали объект, старое обозначение
    const options = {       // объекты это структуры которые могут сохрянять в себе любые типы данных, в формате (ключ: значение), так же могут быть вложенные массивы объекты, и встроееные методы функции
        name: "test",
        width: 1024,
        height: 1024,
        colors: {
            border: "black",
            background: "red"
        },
        makeTest: function() {      // метод который работает внутри объекта options
            console.log("Test");
        }
    };

    options.makeTest();         // метод объекта

    console.log(options);
    //delete options.name;        // удалили свойство name
    //console.log(options);       // проверил удаление
    
    let counter = 0;
    for (let key in options) {
        if (typeof(options[key]) == 'object') {
            for (let i in options[key]) {
                console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
                counter++;
            }
        } else {
            console.log(`Свойство ${key} имеет значение ${options[key]}`);
            counter++;
        }
        
    }
    console.log(counter);       // счетчик из урока но потом сделали такой же как мой, но такой не совсем удобный способ есть лучше метод

    /*for (let key of options) {            // тоже перебор но не работает на объектах
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }*/

    // У обхектов нет свойство length 
    // для подсчета количества свойст можно использовать
    // счеткик
    let sch = 0;            // мой способ
    for (let key in options) {
        sch++;
    }
    console.log(`количество элементов в объекте ${sch}`);

    // функции и методы которые есть внутри объекта
    // метод Object.keys() - берет наш обхект и на его основании создает массив в котором все элементы это ключи находящиеся на первой части пара ключ
    console.log(Object.keys(options).length); // простой способ для ипределения количества элементов в объекте


    // так же можно встретить свойства акцессоры
    // get и set
    // новая возможность из ES6
    // дестриктуризация объекта
    const {border, background} = options.colors;
    console.log(border);
    console.log(background); 

}

console.log('');console.log('');
// 21. Массивы и псевдомассивы
console.log('21. Массивы и псевдомассивы');
{
    const arr = [1, 2, 3, 4, 5];
    console.log(arr.length);        // длинна массива (считается как последний индекс + 1, в нашем случае 4 + 1)
    arr[15] = 7;
    console.log("arr", arr.length);

    arr.pop()               // Удаляет последний массив
    console.log(arr);       // => [1, 2, 3, 4]
    arr.push(10);           // Добавить 10 в конец массива
    console.log(arr);       // => [1, 2, 3, 4, 10]

    // shift и unshift меняет индексы находящихся раньше элементов в массиве
    arr.shift()             // удаляет элемент в начале массива
    console.log(arr);       // => [2, 3, 4, 10]
    arr.unshift(8)          // добавляет элемент в начало массива
    console.log(arr);       // => [8, 2, 3, 4, 10]

    for (let i = 0; i < arr.length; i++) {          // Переборка элементов
        console.log("Способ первый: ", arr[i]);
    }

    for (let i of arr) {                            // Второй способ переборки массива 
        console.log("Способ второй: ", i);
    }

    arr.forEach(function(elem, numOrd, arrRef){
        //console.log('Элемент: ', elem);
        //console.log('Номер по порядку: ', numOrd);
        //console.log('Ссылка на массив: ', arrRef);
        console.log(`Элемент ${elem} находится на ${numOrd} позиции, в массиве ${arrRef}`);
    })

    //const str = prompt('', '');                 // первое, второе, третье, четвертое
    const str = "первое, второе, третье, четвертое";
    const product = str.split(', ');            // разделили строку по ', ' получили массив элементов
    product.sort()                              // сотритовка элементов массива как строк, ВНИМАНИЕ с числами
    console.log(product.join("; "));            // соединили массив элементов через '; ' и получили строку

    const arr2 = [2, 21, 44, 31, 33, 11, 1, 8, 5]
    arr2.sort()
    console.log(arr2);          // => [1, 11, 2, 21, 31, 33, 44, 5, 8] - так как он преобразовал числа в строки и сотрирует их так
    function compareNum(a, b) {     // функция для сортировки массива
        return a-b;
    }
    arr2.sort(compareNum)
    console.log(arr2);          // => [1, 2, 5, 8, 11, 21, 31, 33, 44]

    // псевдомассивы
    // не имеют методов как массивы
}