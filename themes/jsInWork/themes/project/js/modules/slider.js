function slider() {
    // slides
    const slides = document.querySelectorAll('.offer__slide'),
          slider = document.querySelector('.offer__slider'),
          prev = document.querySelector('.offer__slider-prev'),
          next = document.querySelector('.offer__slider-next'),
          current = document.querySelector('#current'),
          total = document.querySelector('#total');
    const sliderWrapper = document.querySelector('.offer__slider-wrapper'),
          sliderInner = document.querySelector('.offer__slider-inner'),
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

module.exports = slider;