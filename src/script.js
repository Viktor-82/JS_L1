'use strict';
/* Добавляем слушатель событий, прописываем на какое событие он 
будет реагировать, прописываем действия в анонимную функцию */
document.addEventListener('DOMContentLoaded', function() {
    console.log('html загружен, возможно не загружены картинки или стили');
});
/* Записываем в переменную тег button для того чтобы можно было
повесить на него обработчик событий */
let button = document.querySelector('button');
/* click - обработка события на нажатие мыши */
button.addEventListener('click', function(event){
    console.log('click');
    console.dir(event);
})
/* В консоли отладчика браузера поставив точки остановки и 
наведя курсор на event можно увидеть объект event и все его свойства
(координаты и т.д.) mouseover - реагирует на наведение мыши */
button.addEventListener('mouseover', function(event){
    console.log('mouseover');
});
/* keydown - реагирует на нажатие любой кнопки клавиатуры */
window.addEventListener('keydown', function(event){
    console.log(event);
});
/* keyup - на отпускание клавиши */
window.addEventListener('keyup', function(event){
    console.log(event);
});
/* Вешаем событие на элемент без объявления переменной 
при нажатии на button находящемся в других тегах по умолчанию 
событие всплывает к корню элементов*/
document.querySelector('button').addEventListener('click', function(event){
    console.log(event);
});

document
    .querySelector('p')
    .addEventListener('click', function(event){
        console.log(event);
    });

document
    .querySelector('div')
    .addEventListener('click', function(event){
        console.log(event);
    });

/* Предотвращаем всплытие событий. Метод event.stopPropagation() 
ставим на том элементе дальше которого событие сработать не должно */
document.querySelector('button')
    .addEventListener('click', function(event){
        console.log(event);
        console.log('button clicked');
        event.stopPropagation;
    });

document
    .querySelector('p')
    .addEventListener('click', function(event){
        console.log('p clicked');
    });

document
    .querySelector('div')
    .addEventListener('click', function(event){
        console.log('div clicked');
    });

/* Чтобы можно было удалять обработчик событий ссылка на функцию обработчика должна быть 
записана в переменную. Написание анонимной функции не сработает */
let clickFunction = function (event) {
    console.log(event);
};

let checkEvent = document.querySelector('.checkEvent');
checkEvent.addEventListener('click', clickFunction);

let switchOff = document.querySelector('.switchOff');
/* Берем элемент checkEvent назначаем слушатель событий .removeEventListener
на событие click и передаем ссылку на функцию подлежащую удалению */
switchOff.addEventListener('click', function(){
    checkEvent.removeEventListener('click', clickFunction);
})

/* Добавление изменение стилей элемента */
let h1 = document.querySelector('h1');
console.log(h1.style);

h1.style.color = "#A101A6";
h1.style.backgroundColor = "#CFF700";// в отличии от CSS стиль camelCase

/* Добавление изменение стилей элемента путем добавления класса */
let h2 = document.querySelector('h2');
h2.classList.add('attention');

document
    .querySelector('.delete')
    .addEventListener('click', function(){
        h2.classList.remove('attention');
    });