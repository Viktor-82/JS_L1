'use strict';

/* Добавляем в head index.html ссылку на fontawesome */
document.head.insertAdjacentHTML("afterbegin", '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">');

/* Получаем слайдер */
let slider = document.querySelector('.slider');

/* Создаем иконку загрузки */
let loadIcon = document.createElement('i');
/* Добавляем классы иконке */
loadIcon.classList.add('fas', 'fa-spinner', 'fa-spin');
/* Добавляем иконку в слайдер */
slider.insertAdjacentElement('afterbegin', loadIcon);

/* Создаем левую стрелку */
let leftArrow = document.createElement('i');
leftArrow.classList.add('fas', 'fa-chevron-circle-left', 'slider-leftArrow');
slider.insertAdjacentElement('beforeend', leftArrow);

/* Создаем правую стрелку */
let rightArrow = document.createElement('i');
rightArrow.classList.add('fas', 'fa-chevron-circle-left', 'slider-rightArrow');
slider.insertAdjacentElement('beforeend', rightArrow);

/* Ждем когда загрузится контент */
window.addEventListener('load', function() {
    /* После загрузки контента назначаем на левую кнопку обработчик события */
    leftArrow.addEventListener('click', function() {
        images.setNextLeftImage();
    });
    /* На правую то же самое */
    rightArrow.addEventListener('click', function() {
        images.setNextRightImage();
    });    
    images.init();// инициализация слайдера
    hideLoadIcon(loadIcon);// скрываем иконку загрузки
});

/* Функция скрывает элемент */
function hideLoadIcon(loadIcon) {
    loadIcon.style.display = 'none';
}

/* Создаем объект слайдера */
let images = {
    /* {int} Номер текущего изображения */
    currentIdx: 0,

    /* {HTMLDivElement[]} slides элементы слайдов */
    slides: [],

    /** Получаем все слайды и показываем первый слайд */
    init() {
        this.slides = document.querySelectorAll('.slider-item');
        this.showImageWithCurrentIdx();
    },
    /** Берем слайд с текущим индексом и убираем у него класс hidden-slide */
    showImageWithCurrentIdx() {
        this.slides[this.currentIdx].classList.remove('hidden-slide');
    },    

    /** Всем слайдам добавляем класс hidden-slide */
    hideVisibleImages() {
    this.slides.forEach(function(slide) {
        slide.classList.add('hidden-slide');
    });
    },
    
    /** Создаем метод переключения влево */
    setNextLeftImage() {
        this.hideVisibleImages();
        if (this.currentIdx == 0) {
            this.currentIdx = this.slides.length - 1;
        } else {
            this.currentIdx--;
        }
        this.showImageWithCurrentIdx();// показывает изображение с текущим индексом
    },

    /** Создаем метод переключения вправо */
    setNextRightImage() {
        this.hideVisibleImages();
        if (this.currentIdx == this.slides.length - 1) {
            this.currentIdx = 0;
        } else {
            this.currentIdx++;
        }
        this.showImageWithCurrentIdx();
    },
};