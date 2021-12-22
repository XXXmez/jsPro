function modal() {
    
    // modal

    const modalButton = document.querySelectorAll('[data-modal]'),
          modalWindow = document.querySelector('.modal');

    modalButton.forEach((e) => {
        e.addEventListener('click', () => {
            openModal();
        });
    });
    
    function openModal () {
        modalWindow.classList.add('show');
        modalWindow.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimer);
    };

    function closeModal () {
        modalWindow.classList.remove('show');
        modalWindow.classList.add('hide');
        document.body.style.overflow = '';
    };

    // modalClose.addEventListener('click', () => {
    //     closeModal();
    // });

    modalWindow.addEventListener('click', (e) => {
        if (e.target === modalWindow || e.target.getAttribute('data-close') == '') {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modalWindow.classList.contains('show')) {
            closeModal();
        }
    });

    const modalTimer = setTimeout(openModal, 60000);

    function showModalByScroll () {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    };

    window.addEventListener('scroll', showModalByScroll);
};

module.exports = modal;