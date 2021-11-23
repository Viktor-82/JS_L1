'use strict';

/* Массив */
let users = ['Иван', 'Федор', 'Василий'];
console.log(users[0]);// Иван
console.log(users[1]);// Федор
console.log(users[2]);// Василий
console.log(users);

/* Многомерный массив | массив массивов*/
let arr = [
    [5, 8, 10],
    [34, 9, 12],
    [11, 3, 4]
];
console.log(arr);// Array(3) | покажет тип данных и длинну
console.log(arr[0]);// [5, 8, 10]
console.log(arr[1][2]);// 12
console.log(arr[2][1]);// 3

/* Объект  "."-точка оператор доступа к свойствам объекта */
let user = {};
user.name = 'Василий';
user.age = 30;
user.birth = '12.10.1990';
console.log(user);
console.log(user.name);
/* Запись в свойства объекта другим способом. В некоторых случаях такой синтаксис необходим */
let user2 = {};
user2['n a m e'] = 'Василий';
user2['age'] = 30;
user2['birth'] = '12.10.1990';
console.log(user2);
/* Если обращаться так console.log(user2.n a m e) будет ошибка из за пробелов. Поэтому синтаксис другой */
console.log(user2['n a m e']);

let value = 'hello';
user2[value] = 'world';

console.log(user2.hello);// world
console.log(user2['hello']);// world
console.log(user2[value]);// world

function getKey() {
    return 'one';
}
user2[getKey()] = 'один';
console.log(user2.one);
console.log(user2['one']);
console.log(user2[getKey()]);

/* Объект можно создать сразу со значениями Такой объект называется проинициализированным */
let user3 = {
    name: 'Василий',
    age: 30,
    birth: '12.10.1990'
};

/* Массив объектов */
let arrUsers [
{
    name: 'Петр',
    age: 24
},
{
    name: 'Иван',
    age: 30
},
];
console.log(arrUsers);
console.log(arrUsers[0].name);// Петр
console.log(arrUsers[1]['age']);// 30
console.log(arrUsers[1].age);// 30

/* Объект с вложенным объектом и массивом */
let userSocial = {
    name: 'John',
    id: 4,
    socialNetworks: {
        vk: 'https://vk ...',
        facebook: 'https: ....'
    },
    images: [
        '1.jpg',
        '2.svg',
        '3.gif',
    ]
};
console.log(userSocial.socialNetworks.vk);// https://vk ...
console.log(userSocial.images[1]);// 2.svg