'use strict';

/* 
Деструктуризация
 */

/* 
Деструктуризация массива.
 */
/* Каждый элемент помещается в отдельную переменную. */
let arr = ['Москва', 'Лондон', 'Токио'];
        let [city1, city2, city3] = arr;
        //Москва Лондон Токио
        console.log(city1, city2, city3);

/* Пропуск значений массива при деструктуризации */
let arr = ['Москва', 'Лондон', 'Токио'];
        let [, secondCity] = arr;
        //Лондон
        console.log(secondCity);

        let [firstCity, , lastCity] = arr;
        //Москва Токио
        console.log(firstCity, lastCity);

/* Деструктуризация строки. Запись каждой буквы в отдельную переменную */
let [letter1, letter2] = 'hi';
        //h i
        console.log(letter1, letter2);

/* Запись в свойства объекта деструктурированных данных из массива */
const comment = {};
        [comment.id, comment.text] = [3, 'hello world'];
        //{id: 3, text: "hello world"}
        console.log(comment);

/* Остаточные параметры после деструктуризации */
let [first, second, ...other] = ['one', 'two', 'three', 'four'];
        //one two
        console.log(first, second);
        //["three", "four"]
        console.log(other);

/* Присваивание значений по умолчанию при деструктуризации */
let [drink = 'coffee', dessert = 'donut'] = ['tea'];
        //tea donut
        console.log(drink, dessert);



/* 
Деструктуризация объекта 
*/
const user = {
    id: 7,
    name: 'Alex',
    role: 'user',
};
let {id, name, role} = user;
//7 "Alex" "user"
console.log(id, name, role);

let {nomer, imya, rol} = user;
//undefined undefined undefined
console.log(nomer, imya, rol);

/* Деструктуризация в другие имена */
const user = {
    id: 7,
    name: 'Alex',
    role: 'user',
};
//слева имя свойства: справа имя переменной куда копируем
let {id: nomer, name: imya, role: rol} = user;
//7 "Alex" "user"
console.log(nomer, imya, rol);

/* Значения по умолчанию при деструктуризации объектов */
const welcome = {};
    let {text = "Hi, can i help you?"} = welcome;
    //Hi, can i help you?
    console.log(text);

    const user = {
        name: 'Alex',
        avatarUrl: 'https://site.ru/userImages/alex.jpg',
    };
    let {name, avatarUrl = "https://site.ru/defaultAvatar.jpg"} = user;        
// если в user не будет значения avatarUrl выведется по умолчанию defaultAvatar
// Alex https://site.ru/userImages/alex.jpg
    console.log(name, avatarUrl);

/* Значения по умолчанию при деструктуризации объектов + имена */
    let user = {
        name: 'Ivan',
    };
    let {name: n, enterPhrase: ep = 'всем привет!'} = user;
    //Ivan всем привет!
    console.log(n, ep);

/* Взять только нужные данные при деструктуризации */
    const message = {
        id: 9492,
        text: 'hello world!',
        authorName: 'Иван',
    };
    let {text} = message;
    //hello world!
    console.log(text);

/* Взять нужное + остальное */
    const message = {
        id: 9492,
        text: 'hello world!',
        authorName: 'Иван',
    };
    let {text, ...other} = message;
    //hello world!
    console.log(text);

    //{id: 9492, authorName: "Иван"}
    console.log(other);

/* Присваивание в существующие переменные */
let hello, world;
    let obj = {
        hello: 'hello',
        world: 'world',
    };

    //Uncaught SyntaxError: Unexpected token '=' 
    // выдаст ошибку
    {hello, world} = obj;

    //ok! нормальная форма записи
    ({hello, world} = obj);
    console.log(hello, world); // hello world

/* Деструктуризация вложенных данных */
const user = {
    name: 'Alex',
    images: ['one.jpg', 'two.jpg'],
    birthDate: {
        day: 3,
        month: 'january',
        year: 2000,
    },
};
let {
    name,
    images: [image1, image2],
    birthDate: {
        day,
        month,
        year,
    }
} = user;
//Alex one.jpg two.jpg 3 january 2000
console.log(name, image1, image2, day, month, year);



/* 
Деструктуризация в функции
(при передаче параметров) 
*/

// Проблема 1
function renderStatusBar(healthPoints = 100, score = 0, ammo = 30) {
    console.log(healthPoints, score, ammo); //100 1 25
}
//что если мы хотим передать только часть параметров 
//придется первым параметром писать 'undefined'
renderStatusBar(undefined, 1, 25); 

// Решение 1
function renderStatusBar({healthPoints = 100, score = 0, ammo = 30}) {
    console.log(healthPoints, score, ammo); //100 0 25
}
//что если мы хотим передать только часть параметров
renderStatusBar({ammo: 25}); 



// Проблема 2 если вызвать функцию не передавая параметры
function renderStatusBar({healthPoints = 100, score = 0, ammo = 30}) {
    console.log(healthPoints, score, ammo);
}
//Uncaught TypeError: Cannot read property 'healthPoints' of undefined
renderStatusBar();
//так работает, но надо обязательно передать пустой объект
renderStatusBar({});

// Решение 2
//по умолчанию присваиваем пустой объект
function renderStatusBar({healthPoints = 100, score = 0, ammo = 30} = {}) {
    console.log(healthPoints, score, ammo);
}
//теперь функцию можно вызывать и вообще ничего не передавать
renderStatusBar();


/* Деструктуризация вложенных значений при передаче в функцию */
const images = {
    senderId: 5,
    images: ['one.png', 'two.png'],
    sender: {
        name: 'Ivan',
        surname: 'Ivanov',
    },
};

function checkImages({senderId, images: [image1, image2], sender: {name: n, surname: s}}) {
    console.log(senderId, image1, image2, n, s);
}
//5 "one.png" "two.png" "Ivan" "Ivanov"
checkImages(images);