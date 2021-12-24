function openModal (modalSelector, modalTimerId) {
    const modalWindow = document.querySelector(modalSelector);

    modalWindow.classList.add('show');
    modalWindow.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    
    console.log(modalTimerId);
    if (modalTimerId) {
        clearInterval(modalTimerId);
    }
};

function closeModal (modalSelector) {
    const modalWindow = document.querySelector(modalSelector);

    modalWindow.classList.remove('show');
    modalWindow.classList.add('hide');
    document.body.style.overflow = '';
};

function modal(triggerSelector, modalSelector, modalTimerId) {
    
    // modal

    const modalButton = document.querySelectorAll(triggerSelector),
          modalWindow = document.querySelector(modalSelector);

    modalButton.forEach((e) => {
        e.addEventListener('click', () => openModal(modalSelector, modalTimerId));
    });
    
    // function openModal () {
    //     modalWindow.classList.add('show');
    //     modalWindow.classList.remove('hide');
    //     document.body.style.overflow = 'hidden';
    //     clearInterval(modalTimer);
    // };

    // function closeModal () {
    //     modalWindow.classList.remove('show');
    //     modalWindow.classList.add('hide');
    //     document.body.style.overflow = '';
    // };

    // modalClose.addEventListener('click', () => {
    //     closeModal();
    // });

    modalWindow.addEventListener('click', (e) => {
        if (e.target === modalWindow || e.target.getAttribute('data-close') == '') {
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modalWindow.classList.contains('show')) {
            closeModal(modalSelector);
        }
    });

    // const modalTimer = setTimeout(openModal, 60000);

    function showModalByScroll () {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);
        }
    };

    window.addEventListener('scroll', showModalByScroll);
};

export default modal;
export {closeModal, openModal};