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

module.exports = calc;