import {closeModal, openModal} from './modal';
import {postData} from '../services/services';

function forms(formSelector, modalTimerId) {
    // forms
    const forms = document.querySelectorAll(formSelector);
    
    const message = {
        loading: './img/other/spinner.svg',
        success: 'Спасибо! Мы вам перезвоним!',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item => {
        bindPostData(item);
    });

    // const postData = async (url, data) => {                 // отвечает за постинг данных (отправку на сервер) / async - предупреждаем что тут будет асинхрон.
    //     const result = await fetch(url, {                   // await - нужно ждать загрузки этого кода
    //         method: "POST",
    //         headers: {
    //             'Content-type': 'application/json'
    //         },
    //         body: data
    //     });
    //     return await result.json();                         // тоже ждем
    // };

    function bindPostData(form) {           // отвечает за привязку постинга
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;

            form.insertAdjacentElement('afterend', statusMessage);

            // const request = new XMLHttpRequest();
            // request.open('POST', 'server.php');

            // request.setRequestHeader();
            const formData = new FormData(form);

            // const obj = {};
            // formData.forEach((v,k) => {
            //     obj[k] = v;
            // });
            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            // пример использования Object.entries - возврашает преобразованный объект в массив
            // const obj2 = {a: 23, b: 50};
            // console.log(Object.entries(obj2));

            // const json = JSON.stringify(obj);

            // fetch('server.php', {
            //     method: "POST",
            //     headers: {
            //         'Content-type': 'application/json'
            //     },
            //     body: JSON.stringify(obj)
            // })
            postData('http://localhost:3000/requests', json)
            .then(data => {
                console.log(data);
                showThanksModal(message.success);
                statusMessage.remove();
            })
            .catch(() => {
                showThanksModal(message.failure);
            })
            .finally(() => {
                form.reset();
            });
        });
    }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        
        openModal('.modal', modalTimerId);
        
        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close="">×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
        
        document.querySelector('.modal').append(thanksModal);

        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.remove('hide');
            prevModalDialog.classList.add('show');
            closeModal('.modal');
        }, 5000);
    }

    fetch('http://localhost:3000/menu')
        .then(data => data.json())
        .then(result => console.log(/*result */));
};

export default forms;