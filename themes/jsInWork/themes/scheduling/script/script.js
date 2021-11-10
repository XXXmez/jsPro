window.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.btn'),
          wrapper = document.querySelector('.wrapper');
    let timer,
        i = 0;

    function myAnim () {
        const elem = document.querySelector('.box');
        let pos = 0;
        
        function frame () {
            if (pos == 300) {
                pos = 0;
            } else {
                pos++;
                elem.style.top = pos + 'px';
                elem.style.left = `${pos}px`;
                console.log(pos);
            }
        };
        const animElem = setInterval(frame, 5);
    };

    btn.addEventListener('click', myAnim);
    
    /*
    const tomer = setTimeout( logger, 2000);
    clearInterval(tomer);
    function logger () {
        console.log('logger');
    };
    */

    // btn.addEventListener('click', () => {
    //     // const timer = setTimeout( logger, 2000);
    //     timer = setInterval( logger, 500);      // такая запись таймера не будет ждать когда выполнится функция и запустит ее заного
    // });

    // function logger () {
    //     if (i === 3) {
    //         clearInterval(timer);
    //     }
    //     console.log('logger');
    //     i++;
    // };

    // let id = setTimeout(function log () {       // а такая запись таймера будет ждать пока выполнится вся функция и только потом запустит ее еще раз
    //     console.log('hello');
    //     id = setTimeout(log, 500);
    // }, 500);
})