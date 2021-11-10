'use strict';
window.addEventListener('DOMContentLoaded', () => {
    // const now = new Date();         // текущая дата и время
    // const now = new Date('2020-05-01');         // Дата в виде строки
    // const now = new Date(2020, 5, 1, 20);       // выводит 6 месяц так как месяца считаются с 0
    // const now = new Date(0);         // timeStemp. Передали 0 миллисекунд - это начальное время
    // const now = new Date(-99999999999);     // => Mon Oct 31 1966, дата позднее начального времени
    
    // Методы GET
        // методы даты
        const now = new Date();
        console.log(now.getFullYear());         // => 2021 - текущий год
        console.log(now.getMonth());            // => 10 - текущий месяц (Ноябрь)
        console.log(now.getDay());              // => 3 - текущий день недели (среда)
        console.log(now.getMinutes());          // => 1 - текущая минута
        console.log(now.getMilliseconds());     // => 708 - текущая секунда
        console.log(now.getDate());             // => 10 - текущий день месяца
        console.log(now.getHours());            // => 20 текущее время (8 часов вечера)

        // Методы даты UTC время +0
        console.log(now.getUTCHours());             // => 17 текущее время (5 часов вечера)

        // остальное
        console.log(now.getTimezoneOffset());       // => -180 разница в минутах между часовым поясом и UTC
        console.log(now.getTime());                 // => 1636564630821 - количество миллисекунд прошедших с начального времени
    
    // Методы SET
        // Устанавливает дату
        console.log(now.setHours(18, 18, 18));          // Устанавливает часы, но так же через запятую можно передать следующее значение (часы, минутв, секунды, мл. сек.)
        console.log(now);

        // Автоисправление
        console.log(now.setHours(40));      // текущая дата (дата и время + 40 т.е. 10 число 20:25 => 11 16:25)
        console.log(now);

    // Метод parse
        // new Date.parse('2020-05-01');
    
    // Измерение даты
        let start = new Date();         // текущее время
        for (let i = 0; i < 100000; i++) {
            let some = i ** 3;
        }

        let end = new Date();
        console.log(`Цикл отработал за ${end - start} миллисекунд`);


})