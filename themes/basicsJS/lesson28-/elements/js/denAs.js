"use strict";

console.log('Async, defer, динамические скрипты');

const p = document.querySelectorAll('p');

console.log(p);

// defer - продолжает обрабатывать страницу и загружает скрипт в фоновом режиме и запустит его по загрузке
// async - страница не ждет загрузки скрипта обрабатывается и отображается, 
    // скрипты выполняются как загрузятся никого не ждут

/*
// Динамически загружаемый скрипт
const script = document.createElement('script');
script.src = 'js/test.js';
script.async = false;       // для того что бы сделать его обычным
document.body.append(script);
// ведет себя как async - ждать никого не будет
*/

function loadScript(src) {
    // Динамически загружаемый скрипт
    const script = document.createElement('script');
    script.src = src;
    script.async = false;       // для того что бы сделать его обычным
    document.body.append(script);
    // ведет себя как async - ждать никого не будет
}
loadScript('js/test.js');
loadScript('js/twoScript.js') // выпонляется друг за другом