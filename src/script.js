'use strict';

/**
 * функция с использованием rest оператора
 * @param {*} first 
 * @param {*} second 
 * @param  {...any} other rest оператор который получает 
 * (или вообще ничего не получает-по обстоятельствам) массив данных
 * для дальнейшего использования
 */
function showWords(first, second, ...other) {
    console.log('первое слово: ' + first); // один
    console.log('второе слово: ' + second); // два
    console.log('остальные слова: ' + other); // три, четыре, пять
    console.dir(other); //['три', 'четыре', 'пять']

}

showWords('один', 'два', 'три', 'четыре', 'пять');