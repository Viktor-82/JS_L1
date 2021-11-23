'use strict';

let userId = ['1651', '8944444', '231'];

/* Метод unshift() добавляет один или более элементов
в начало массива и возвращает новую длину массива.
 */
let newArrLength = userId.unshift('11111');
console.log(newArrLength);// 4
console.log(userId);// ['11111', '1651', '8944444', '231']
