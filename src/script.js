'use strict';

let day = prompt('Введите день недели');
switch(day) {
    case 'среда':
        console.log('мы успеваем');
        break;
    case 'четверг':
        console.log('скоро выходные');
        break;
    case 'пятница':
        console.log('последний рабочий день');
        break;
    default:
        console.log('я такого дня не знаю');
}
