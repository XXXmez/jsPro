import {getResource} from '../services/services'

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

export default cards;