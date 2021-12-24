/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calc() {
    // calc calorie

    const resultCalc = document.querySelector('.calculating__result span');

    let gender, height, weight, age, activity;

    if (localStorage.getItem('gender')) {
        gender = localStorage.getItem('gender');
    } else {
        gender = 'female';
        localStorage.setItem('gender', gender)
    }
    if (localStorage.getItem('activity')) {
        activity = localStorage.getItem('activity');
    } else {
        activity = 1.375;
        localStorage.setItem('activity', activity)
    }

    function colorieCalc() {
        if (!gender || !height || !weight || !age || !activity) {
            resultCalc.textContent = '____';
            return;
        }

        if (gender === 'female') {
            resultCalc.textContent = Math.floor((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * activity);
        } else {
            resultCalc.textContent = Math.floor((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * activity);
        }
    }
    colorieCalc();

    function getStaticInfo(selector, activeClass) {
        const element = document.querySelectorAll(selector);

        element.forEach(elem => {
            elem.addEventListener('click', () => {
                if (elem.getAttribute('data-ratio')) {
                    activity = elem.getAttribute('data-ratio');
                    localStorage.setItem('activity', activity);
                } else {
                    gender = elem.id;
                    localStorage.setItem('gender', gender);
                }
                console.log(activity, gender);
                element.forEach(e => e.classList.remove(activeClass));
                elem.classList.add(activeClass);

                colorieCalc();
            });
        });
    };

    function getDinamicInfo(parentSelector) {
        const input = document.querySelector(`${parentSelector}`);

        input.addEventListener('input', () => {
            if (input.value.match(/\D/g)) {             // в данном случае можно еще так (isNaN(+input.value))
                input.style.border = '2px solid red';
            } else {
                input.style.border = '';
            }
            switch(input.getAttribute('id')) {
                case 'height':
                    height = +input.value;
                    localStorage.setItem('height', height);
                    break;
                case 'weight':
                    weight = +input.value;
                    localStorage.setItem('weight', weight);
                    break;
                case 'age':
                    age = +input.value;
                    localStorage.setItem('age', age);
                    break;
            }
            colorieCalc();
        });
    };

    function getInitLocalSet(selector, activeClass) {
        const element = document.querySelectorAll(`${selector} div`);

        element.forEach(e => {
            e.classList.remove(activeClass);
            if (e.getAttribute('data-ratio')) {
                if (e.getAttribute('data-ratio') == localStorage.getItem('activity')) {
                    e.classList.add(activeClass);
                }
            } else {
                if (e.id == localStorage.getItem('gender')) {
                    e.classList.add(activeClass);
                }
            }
        })
    };

    getInitLocalSet('#gender', 'calculating__choose-item_active');
    getInitLocalSet('.calculating__choose_big', 'calculating__choose-item_active');

    getStaticInfo('#gender div', 'calculating__choose-item_active');
    getStaticInfo('.calculating__choose_big div', 'calculating__choose-item_active');
    getDinamicInfo('#height');
    getDinamicInfo('#weight');
    getDinamicInfo('#age');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);

/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");


function cards() {
    // classes
    class AddMenuContent {
        constructor (img, imgAlt, title, text, price, perentSelector, ...classes) {     // в rest нельзя вложить дефолтные значения
            this.img = img;
            this.imgAlt = imgAlt;
            this.title = title;
            this.text = text;
            this.price = price;
            this.classes = classes;
            this.perentSelector = document.querySelector(perentSelector)
            this.rate = 72;
            this.USDtoRUB();
            
        }

        USDtoRUB() {
            this.price = Math.ceil(this.price * this.rate);
        }

        createMenuCart() {
            const objDiv = document.createElement('div');
            if (this.classes.length === 0) {
                this.element = 'menu__item';
                objDiv.classList.add(this.element);
            } else {
                this.classes.forEach((className) => {
                    objDiv.classList.add(className);
                });
            }
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

    // async function getResource(url) {                 // отвечает за постинг данных (отправку на сервер) / async - предупреждаем что тут будет асинхрон.
    //     const result = await fetch(url);

    //     if (!result.ok) {
    //         throw new Error(`Could not fetch ${url}, status: ${result.status}`);
    //     }

    //     return await result.json();                      // тоже ждем
    // };

    // Первый способ с использованием классов
    // getResource('http://localhost:3000/menu')
    // .then(data => {
    //     data.forEach(({img, altimg, title, descr, price}) => {
    //         new AddMenuContent(img, altimg, title, descr, price, '.menu .container').createMenuCart();
    //     });
    // });

    // Второй способ делает верстку по ходу дела
    // getResource('http://localhost:3000/menu')
    // .then(data => createCard(data));

    // function createCard(data) {
    //     data.forEach(({img, altimg, title, descr, price}) => {
    //         const element = document.createElement('div');
    //         let rate = 62;

    //         price *= rate;

    //         element.classList.add('menu__item')

    //         element.innerHTML = `
    //             <img src="${img}" alt="${altimg}">
    //             <h3 class="menu__item-subtitle">${title}"</h3>
    //             <div class="menu__item-descr">${descr}</div>
    //             <div class="menu__item-divider"></div>
    //             <div class="menu__item-price">
    //                 <div class="menu__item-cost">Цена:</div>
    //                 <div class="menu__item-total"><span>${price}</span> руб/день</div>
    //             </div>
    //         `;

    //         document.querySelector('.menu .container').append(element);
    //     });
    // };

    // Теперь с использованием библиотеки axios
    axios.get('http://localhost:3000/menu')
    .then(data => {
        data.data.forEach(({img, altimg, title, descr, price}) => {
            new AddMenuContent(img, altimg, title, descr, price, '.menu .container').createMenuCart();
        });
    });

    // new AddMenuContent(
    //     '.menu .container',
    //     'img/tabs/vegy.jpg',
    //     'vegy',
    //     'Меню "Фитнес"',
    //     'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    //     '3.18'
    // ).createMenuCart();
    
    // new AddMenuContent(
    //     '.menu .container',
    //     'img/tabs/elite.jpg',
    //     'elite',
    //     'Меню “Премиум”',
    //     'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    //     '5.25',
    //     'menu__item',
    //     'two',
    //     'item_menu_new'
    // ).createMenuCart();
    
    // new AddMenuContent(
    //     '.menu .container',
    //     'img/tabs/post.jpg',
    //     'post',
    //     'Меню "Постное"',
    //     'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    //     '7.87',
    //     'menu__item'
    // ).createMenuCart();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);

/***/ }),

/***/ "./js/modules/form.js":
/*!****************************!*\
  !*** ./js/modules/form.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");



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
            (0,_services_services__WEBPACK_IMPORTED_MODULE_1__.postData)('http://localhost:3000/requests', json)
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
        
        (0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)('.modal', modalTimerId);
        
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
            (0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)('.modal');
        }, 5000);
    }

    fetch('http://localhost:3000/menu')
        .then(data => data.json())
        .then(result => console.log(/*result */));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "openModal": () => (/* binding */ openModal)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);


/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {
    // slides
    const slides = document.querySelectorAll(slide),
          slider = document.querySelector(container),
          prev = document.querySelector(prevArrow),
          next = document.querySelector(nextArrow),
          current = document.querySelector(currentCounter),
          total = document.querySelector(totalCounter);
    const sliderWrapper = document.querySelector(wrapper),
          sliderInner = document.querySelector(field),
          width = window.getComputedStyle(sliderWrapper).width;

    let slideActId = 1;
    let offset = 0;

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideActId}`;
    } else {
        total.textContent = `${slides.length}`;
        current.textContent = `${slideActId}`;
    }

    // слайдер 2
    sliderInner.style.width = 100 * slides.length + '%';
    sliderInner.style.display = 'flex';
    sliderInner.style.transition = '0.5s all';
    sliderWrapper.style.overflow = 'hidden';

    slides.forEach(e => {
        e.style.width = width;
    });

    slider.style.position = 'relative';

    const indicators = document.createElement('ol'),
          dots = [];

    indicators.classList.add('carousel-indicators');
    indicators.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `;
    slider.append(indicators);

    for(let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i+1);
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
        `;
        if (i == 0) {
            dot.style.opacity = 1;
        }
        indicators.append(dot);
        dots.push(dot);
    }

    next.addEventListener('click', () => {
        if (offset == noStr(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += noStr(width);
        }
        sliderInner.style.transform = `translateX(-${offset}px)`;

        if (slideActId == slides.length) {
            slideActId = 1;
        } else {
            slideActId++;
        }
        
        currentNowNumb();
        
        dotsShow();
    });
    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = noStr(width) * (slides.length - 1);
        } else {
            offset -= noStr(width);
        }
        sliderInner.style.transform = `translateX(-${offset}px)`;
        if (slideActId == 1) {
            slideActId = slides.length;
        } else {
            slideActId--;
        }

        currentNowNumb();

        dotsShow();
    });
    

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');
            slideActId = slideTo;

            offset = noStr(width) * (slideTo - 1);
            sliderInner.style.transform = `translateX(-${offset}px)`;

            dotsShow();

            currentNowNumb();

        });
    });

    function dotsShow() {
        dots.forEach(dot => dot.style.opacity = '.5');
            dots[slideActId-1].style.opacity = 1;
    }
    function currentNowNumb() {
        if (slides.length < 10) {
            current.textContent = `0${slideActId}`;
        } else {
            current.textContent = `${slideActId}`;
        }
    }
    function noStr(str) {
        return +str.replace(/\D/g,'')
    }


    // слайдер 1
    // function showSlide(n) {
    //     if (n > slides.length) {
    //         slideActId = 1;
    //     }
    //     if (n < 1) {
    //         slideActId = slides.length;
    //     }

    //     if (slideActId > 9) {
    //         current.textContent = `${slideActId}`;
    //     } else {
    //         current.textContent = `0${slideActId}`;
    //     }
    
    //     slides.forEach(e => e.style.display='none');

    //     slides[slideActId - 1].style.display = 'block';
    // }

    // showSlide(1);

    // function plusSlide() {
    //     slideActId++;
    //     showSlide(slideActId);
    // };

    // function minusSlide() {
    //     slideActId--;
    //     showSlide(slideActId);
    // };

    // prev.addEventListener('click', minusSlide);
    // next.addEventListener('click', plusSlide);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    // tabs
    const tabs = document.querySelectorAll(tabsSelector),
          tabsContent = document.querySelectorAll(tabsContentSelector),
          tabsParent = document.querySelector(tabsParentSelector);

    function hideTabContent() {
        tabsContent.forEach((item) => {
            item.classList.remove('show', 'fade');
            item.classList.add('hide');
        });
        tabs.forEach((item) => {
            item.classList.remove(activeClass);
        });
    };

    function showTabContent(i = 0) {
        tabsContent[i].classList.remove('hide');
        tabsContent[i].classList.add('show', 'fade');
        tabs[i].classList.add(activeClass);
    };

    tabsParent.addEventListener('click', (e) => {
        const target = e.target;
        //console.dir(target);
        if (target && target.classList.contains(tabsSelector.slice(1))) {
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
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timer(idTimer, deadLine) {
    // timer

    // const deadLine = '2021-12-30';

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

    setClock(idTimer, deadLine);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postData": () => (/* binding */ postData),
/* harmony export */   "getResource": () => (/* binding */ getResource)
/* harmony export */ });
const postData = async (url, data) => {                 // отвечает за постинг данных (отправку на сервер) / async - предупреждаем что тут будет асинхрон.
    const result = await fetch(url, {                   // await - нужно ждать загрузки этого кода
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });
    return await result.json();                         // тоже ждем
};

async function getResource(url) {                 // отвечает за постинг данных (отправку на сервер) / async - предупреждаем что тут будет асинхрон.
    const result = await fetch(url);

    if (!result.ok) {
        throw new Error(`Could not fetch ${url}, status: ${result.status}`);
    }

    return await result.json();                      // тоже ждем
};




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/calc */ "./js/modules/calc.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/form */ "./js/modules/form.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");









window.addEventListener('DOMContentLoaded', () => {

    const modalTimerId = setTimeout(() => (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__.openModal)('.modal', modalTimerId), 60000);
    
    (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"])('[data-modal]', '.modal', modalTimerId);
    (0,_modules_calc__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_modules_cards__WEBPACK_IMPORTED_MODULE_3__["default"])();
    (0,_modules_form__WEBPACK_IMPORTED_MODULE_4__["default"])('form', modalTimerId);
    (0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__["default"])({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner',
        slide: '.offer__slide'
    });
    (0,_modules_timer__WEBPACK_IMPORTED_MODULE_6__["default"])('.timer', '2021-12-31');

    // tabs

    // timer

    // modal

    // cards

    // forms

    // slider

    // calc colories
    
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map