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

/* Отслеживание/управление на событие нажатия правой кнопки мыши
(контекстное меню) */
document.addEventListener('contextmenu', function(event) {
    console.log('context menu');
    // event.preventDefault(); // отключение контекстного меню
    /* Получение координат мыши. На основе этих данных можно 
    выводить свое контекстное меню (div в месте клика)  */
    console.log(event.clientX, event.clientY);

})

/* Отслеживание событий копирования */
document.addEventListener('copy', function(event) {
    const copiedText = document.getSelection().toString();
    /* Добавляем к скопированному тексту в буфер обмена свой поясняющий текст */
    event.clipboardData.setData('text/plain', copiedText + "Этот текст скопирован с сайта sitename.com");
    event.preventDefault();
});

/* Отслеживание события вырезания */
document.addEventListener('cut', (event) => {
    const selection = document.getSelection();// получаем объект выделения
    /* В буфер обмена clipboarlData вставляем данные в виде текста text/plain */
    event.clipboardData.setData('text/plain', selection.toString().toUpperCase());
    selection.deleteFromDocument();// удаляем скопированные данные из документа
    event.preventDefault();// прерываем выполнение по умолчанию
});

/* Отслеживание события двойной клик */
document.querySelector('p').addEventListener('dblclick', function(event) {
    // console.log(event);
    console.log('p double clicked');
});
    
/* Отслеживание события resize (изменение размера окна) */
window.addEventListener('resize', function(event) {
    console.log(event.target.innerWidth, event.target.innerHeight);// получаем размеры окна
});

/* Отслеживание события scroll (прокрутка) можно использовать для анимации страницы
при этом сначала нужно получить объекты воздействия и их позицию при помощи JS */
window.addEventListener('scroll', function(event) {
    console.log(window.pageYOffset);// получаем отступ сверху
});

/* Событие на снятие фокуса с поля для ввода (blur) */
document.querySelector('input').addEventListener('blur', function() {
    console.log('blur');
});

/* Событие на наведение фокуса */
const input = document.querySelector('input');
input.addEventListener('focus', function(event) {
    const styles = "outline: 3px solid green;";
    event.target.style.cssText = styles;// присваиваем стили
});
input.addEventListener('blur', function(event) {
    event.target.style.removeProperty('outline');// удаляем стили при снятии фокуса
});

/* Отслеживание любого изменения (событие change) */
document.querySelector('select').addEventListener('change', function(event) {
    console.log(event.target.value);// значение элемента
    console.dir(event.target.options[event.target.options.selectedIndex].innerText);// текст внутри элемента
});

/* Отследить изменение текста в каком либо селекторе */
document.querySelector('textarea').addEventListener('change', function(event) {
    console.log(event.target.value);
});

/* Событие reset */
const formEl = document.querySelector('form');

formEl.addEventListener('reset', function(event) {
    if (!confirm("Вы уверены, что хотите очистить форму?")) {
        event.preventDefault();
    }
});

/* Событие submit (отправка формы) */
const inputEl = document.querySelector('input');
const errorEl = document.querySelector('.error');
const formEl = document.querySelector('form');

formEl.addEventListener('submit', function(event) {
    if (inputEl.value == "") {
        event.preventDefault();// останавливаем отправку если форма пустая
        errorEl.innerText = "input не может быть пустым";
    }
})