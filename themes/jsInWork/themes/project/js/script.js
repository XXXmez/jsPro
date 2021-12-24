import tabs from './modules/tabs';
import modal from './modules/modal';
import calc from './modules/calc';
import cards from './modules/cards';
import form from './modules/form';
import slider from './modules/slider';
import timer from './modules/timer';
import {openModal} from './modules/modal'

window.addEventListener('DOMContentLoaded', () => {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 60000);
    
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
    calc();
    cards();
    form('form', modalTimerId);
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner',
        slide: '.offer__slide'
    });
    timer('.timer', '2021-12-31');

    // tabs

    // timer

    // modal

    // cards

    // forms

    // slider

    // calc colories
    
});