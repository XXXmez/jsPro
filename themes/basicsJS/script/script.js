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
        let num = 50;
        return num;
    }
    let anotherNum = ret();
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
    };
    logger();

    // стрелочная функция
    const calc2 = (a,b) => {return a + b};
    console.log(calc2(4,3));
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