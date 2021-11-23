'use strict';

/* Перебор массива циклом for */
const arr = [5, 7, 9];
for (let i =0; i < arr.length; i++) {
    alert(arr[i]);
}

/* Вложенный цикл for перебор массива массивов*/
let arrNum = [
    [5, 7, 9],
    [2, 0, 2, 12, 34],
    [1, 3, 4, 6]
];

for (let i = 0; i < arrNum.length; i++) {
    for (let j = 0; j < arrNum[i].length; j++) {
        console.log(arrNum[i][j]);
    }
}