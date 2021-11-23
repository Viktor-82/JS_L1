'use strict';

/* Посмотреть прототип объекта для чтобы узнать 
все его методы.*/
const myArr = [9, 3, 4];
/* Разные формы записи выполняют одно и тоже */
console.log(myArr.__proto__);// современная запись
console.log(Object.getPrototypeOf(myArr));// для всех браузеров в т.ч. старых