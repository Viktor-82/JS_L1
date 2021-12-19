'use strict';

/*
 Оператор spread.  (...arr)
 */

/* Вставка одного массива в другой. */
let arr1 = [8, 10];
        let arr2 = [1, 2, 3, ...arr1, 4, 5];
        console.log(arr2);//[1, 2, 3, 8, 10, 4, 5]

/* Найти максимальное число в массиве */
let arr = [1, 10, 99];
let max = Math.max(...arr);
console.log(max); //99

/* Копирование массива */
let arr1 = [1, 7, 4];
        let arr2 = [...arr1];
        arr1[0] = 111;
        //[111, 7, 4]      [1, 7, 4]
        console.log(arr1, arr2);

/* Преобразовать строку в массив */
let hello = 'world';
        let arr = [...hello];
        //["w", "o", "r", "l", "d"]
        console.log(arr);