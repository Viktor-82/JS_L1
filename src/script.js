'use strict';

function roundToHundredths(number) {
    /* parseInt отбрасывает дробную часть */
    return parseInt(number * 100) / 100;
}

/* объявляем функцию, (roudles, currency) - параметры функции*/
function convertCurrency(roubles, currency) {
    let currencyCost = 0;
    switch (currency) {
        case 'dollar':
            currencyCost = 66;
            break;
        case 'euro':
            currencyCost = 75;
            break;
        default: 
        /* оператор throw выбрасывает ошибки, new - оператор создания объекта, Error - объект ошибок */
        throw new Error('Не верная валюта: ' + currency);
    }
    return roundToHundredths(roubles / currencyCost);
}

/* вызываем функцию и передаем в нее аргументы (число 100 и строка 'dollar') - аргументы которые передаем в функцию */
let inDollars = convertCurrency(100, 'dollar');
console.log('Ваша сумма в долларах: ' + inDollars);
let inEurus = convertCurrency(100, 'euro');
console.log('Ваша сумма в евро: ' + inEurus);
let inYens = convertCurrency(100, 'yena');
console.log('Ваша сумма в йенах: ' + inYens);
