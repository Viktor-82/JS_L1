'use strict';

/* Метод sort() сортирует массив не выводя новый. 
Т.е. преобразует его прямо на месте. Порядок сортировки с
соответствует порядковому номеру в таблице  Unicode
url: unicode-table.com/ru/
 */

/* Короткий вариант записи сортировки если значения цифровые*/
let sortActualProducts = actualProducts.sort(function(item1, item2){
    return item1.price - item2.price;
});

console.log(actualProducts); 
