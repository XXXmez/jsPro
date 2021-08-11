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