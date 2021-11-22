'use strict';

const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();
    request.open('GET', 'script/current.json');             // передаются пять аргументов: 1) метод - тот который используется GET POST, 2) путь к серверу, 3) Асинхронность стоит в true, 4/5) Логин и пароль
    request.setRequestHeader('Content-type', 'application/json: charset=utf-8');        // тип контента
    request.send();     // отправили запрос
    
    request.addEventListener('load', () => {
        if (request.status === 200) {
            console.log((request.response));
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = 'Error'
        }
    });   
});