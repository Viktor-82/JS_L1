'use strict';

const user = {
    id: 3,
    age: 25,
    name: 'John'
};

/* for / in предназначен для объектов.
 Цикл for/in по умолчанию будет перебирать и возвращать ключи элементов 
(по другому свойства элементов) 
*/
for (let property in user) {
    console.log(property);// id, age, name
};

/* При такой записи цикл for/in будет перебирать и возвращать значения ключей 
*/
for (let property in user) {
    console.log(user[property]);// 3, 25, 'John'
}

/* for / of предназначен для массивов. 
Перебирает только значения
*/
let array = ['one', 'two', 'tree'];

for (let value of array) {
    console.log(value);
}