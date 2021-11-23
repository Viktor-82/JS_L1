'use strict';

let images = [
    '1.jpg',
    '2.jpg',
    '3.jpg'
];

/* Метод forEach для перебора массива.
Массивы создаются на основе объекта Array а у объекта есть методы один из которых forEach 
*/
images.forEach(function(element) {
    console.log(element + ' hello');
});

/* У function стандартно есть 3 параметра. Последние 2 необязательны поэтому часто не пишутся */
images.forEach(function(element, index, array) {
    console.log(element, index, array);// элемент, номер элемента и сам массив (передача по ссылке)
});


/* Пример передачи ссылки на что либо */
const iterateFn = function (element, index, array) {
    console.log(element, index, array);
};

/* В forEach передается ссылка на функцию которая хранится в переменной */
images.forEach(iterateFn);
