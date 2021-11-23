'use strict';

/* Метод sort() сортирует массив не выводя новый. 
Т.е. преобразует его прямо на месте. Порядок сортировки с
соответствует порядковому номеру в таблице  Unicode
url: unicode-table.com/ru/
 */

let values = ['ad', 'ae', 'ab', 'aa', 'ac'];
values.sort();
console.log(values);// 'aa', 'ab', 'ac', 'ae', 'ad'

/* Передаем в метод sort() функцию.
Массив будет отсортирован по длинне слов от меньшей к большей
*/
let value = ['one', 'left', 'rightqqqqq', 'or'];
value.sort(function(word1, word2) {
    if (word2.length > word1.length) {
        return -1;
    } 
    if (word1.length > word2.length) {
        return 1;
    }
        return 0;       
});

console.log(value);
