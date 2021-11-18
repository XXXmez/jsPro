window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach((item) => {
            item.classList.remove('show', 'fade');
            item.classList.add('hide');
        });
        tabs.forEach((item) => {
            item.classList.remove('tabheader__item_active');
        });
    };

    function showTabContent(i = 0) {
        tabsContent[i].classList.remove('hide');
        tabsContent[i].classList.add('show', 'fade');
        tabs[i].classList.add('tabheader__item_active');
    };

    tabsParent.addEventListener('click', (e) => {
        const target = e.target;
        //console.dir(target);
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, n) => {
                if (item == target) {
                    hideTabContent();
                    showTabContent(n);
                    console.log(`Клик на ${n} таб`);
                }
            })
        }
    });

    hideTabContent();
    showTabContent();

    const deadLine = '2021-12-30';

    function getTimeRemaining (endTime) {
        const t = Date.parse(endTime) - Date.parse(new Date()),
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor((t / (1000 * 60 * 60)) % 24),
              minutes = Math.floor((t / 1000 / 60) % 60),
              seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero (num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num
        }
    }

    function setClock (selector, endTime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);

        updateClock ();
        
        function updateClock () {
            const t = getTimeRemaining(endTime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    };

    setClock('.timer', deadLine);


    const modalButton = document.querySelectorAll('[data-modal]'),
          modalWindow = document.querySelector('.modal'),
          modalClose = document.querySelector('[data-close]');

    modalButton.forEach((e) => {
        e.addEventListener('click', () => {
            openModal();
        });
    });
    
    function openModal () {
        modalWindow.classList.add('show');
        modalWindow.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        // clearInterval(modalTimer);
    };

    function closeModal () {
        modalWindow.classList.remove('show');
        modalWindow.classList.add('hide');
        document.body.style.overflow = '';
    };

    modalClose.addEventListener('click', () => {
        closeModal();
    });

    modalWindow.addEventListener('click', (e) => {
        if (e.target === modalWindow) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modalWindow.classList.contains('show')) {
            closeModal();
        }
    });

    // const modalTimer = setTimeout(openModal, 6000);

    function showModalByScroll () {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    };

    // window.addEventListener('scroll', showModalByScroll);

    // classes
    class AddMenuContent {
        constructor ( perentSelector,img, imgAlt, title, text, price) {
            this.perentSelector = document.querySelector(perentSelector)
            this.img = img;
            this.imgAlt = imgAlt;
            this.title = title;
            this.text = text;
            this.price = price;
            this.rate = 72;
            this.USDtoRUB();
            
        }

        USDtoRUB() {
            this.price = Math.ceil(this.price * this.rate);
        }

        createMenuCart() {
            const objDiv = document.createElement('div');
            objDiv.classList.add('menu__item');
            objDiv.innerHTML = `
                <img src="${this.img}" alt="${this.imgAlt}">
                <h3 class="menu__item-subtitle">${this.title}"</h3>
                <div class="menu__item-descr">${this.text}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
                </div>
            `;
            this.perentSelector.append(objDiv);
        }
    }

    // new AddMenuContent(
    //     '.menu .container',
    //     'img/tabs/vegy.jpg',
    //     'vegy',
    //     'Меню "Фитнес"',
    //     'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    //     '3.18' 
    // ).createMenuCart();

    let dataMenu = [
        {
            perentSelector: '.menu .container',
            img: 'img/tabs/vegy.jpg',
            imgAlt: 'vegy',
            title: 'Меню "Фитнес"',
            text: 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
            price: '3.18'
        },
        {
            perentSelector: '.menu .container',
            img: 'img/tabs/elite.jpg',
            imgAlt: 'elite',
            title: 'Меню “Премиум”',
            text: 'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
            price: '5.25'
        },
        {
            perentSelector: '.menu .container',
            img: 'img/tabs/post.jpg',
            imgAlt: 'post',
            title: 'Меню "Постное"',
            text: 'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
            price: '7.87'
        }
    ];
    dataMenu.forEach((e) => {
        new AddMenuContent(
            e.perentSelector,
            e.img,
            e.imgAlt,
            e.title,
            e.text,
            e.price 
        ).createMenuCart();
    })
});