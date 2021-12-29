'use strict';

// try {
//     console.log('Normal');
//     console.log(a);
//     console.log('Result');
// } catch(error){
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// } finally {
//     console.log('Finally');
// }

// console.log('Still normal');


try {
    document.querySelector('.active').addEventListener('click', () => {
        console.log('click');
    });
} catch(e){
    console.log(e);
}

console.log('normal');