'use strict';

/* Оператор in используется для проверки есть ли в объекте какое то свойство */
const user = {
    name: 'John',
    age: 36
};

console.log('age' in user);// true
console.log('surname' in user);// false