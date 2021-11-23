'use strict';

let images = ['1.jpg', '2.jpg', '3.png'];

/* Метод shift() удаляет первый элемент из массива и 
возвращает его значение. Соответственно длина массива меняется.
 */
let firstElem = images.shift();
console.log(firstElem);// 1.jpg
console.log(images);// ['2.jpg', '3.png']
