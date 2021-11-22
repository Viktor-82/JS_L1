'use strict';

let symbols = '1234567890!@#$%^&*()-_=+;:][}{/?.,qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCBNM';
let password = '';

/**
 * Функция возвращает случайное целое число между min (включительно) и max (не включая max)
 * @param {*} min 
 * @param {*} max 
 * @returns {number}
 */
function getRandomInt(min, max) {
    /* .random - выбор случайного числа .floor - отбрасывает дробную часть */
    return Math.floor(Math.random() * (max - min)) + min; 
}

/**
 * Функция генерирует случайный пароль
 * @param {number} passLength длина пароля
 * @returns {void}
 */
function generate(passLength) {
    let symbolPosition = getRandomInt(0, 87); // массив от 0 до 86. последнее число не включается
    password += symbols.charAt(symbolPosition); // += дописывает символ в массив
    passLength--; // -- уменьшает на единицу
    if (passLength != 0) {
        generate(passLength);
    }
}

/**
 * Функция запрашивает длину пароля
 * @returns {number}
 */
function askPassLength() {
    return parseInt(prompt('Введите длину пароля'));
}

/* Вызываем функцию generate и передаем в нее значение функции 
askPassLength() - эта запись тоже вызов функции askPassLength */
generate(askPassLength());
alert(`Ваш пароль: ${password}`);