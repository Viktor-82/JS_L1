'use strict';

let newObject = {
    units: null,
    tens: null,
    hundreads: null
}

/**
 * Функция преобразовывает число в объект. 
 * На входе число от 0 до 999
 * На выходе в свойствах количество: единиц, десятков, сотен.
 */
function createObject (num) {
    if (typeof num === 'number' && Number.isInteger(num) == true && num >= 0 && num <= 999) {
    newObject.units = num % 10;
    newObject.tens = Math.floor(num/10);
    newObject.hundreads = Math.floor(num/100);
    return newObject;
} else {
    console.log('Введите корректные данные');
    return null;
};
};

createObject(945); 
console.log(newObject);

/* Задача 2 функция конструктор с методом добавляющим скидку 25%
в синтаксисе ES5 */
function Product (name, price) {
    this.name = name;
    this.price = price;
};
Product.prototype.make25PercentDiscount = function () {
    this.price = this.price*0.75;
    console.log('Скидка 25%');
}

let goods = new Product('salo', 300);
goods.make25PercentDiscount();
console.log(goods);

/* Задача 2 функция конструктор с методом добавляющим скидку 25%
в синтаксисе ES6 */
class Product2 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    makeDiscount() {
        this.price = this.price*0.75;
    }    
};

let getProduct = new Product2('Гречка', 100);
console.log(getProduct);
getProduct.makeDiscount();
console.log(getProduct);

/* Задача 3 наследование конструктора в синтаксисе ES5 */
function Post (author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}
Post.prototype.edit = function() {
    this.text = prompt('Введите текст');
};
function Post2 (author, text, date, comment) {
/* Наследование классов функции конструктора происходит вызовом через ключевое слово .call */
    Post.call(this, author, text, date);
    this.comment = comment;
} 
/* Создаем прототип Post2 из методом .create объекта Object с целью наследования функции записаной в prototype Post*/
Post2.prototype = Object.create(Post.prototype);
/* Переписываем руками конструктор на основе которого будет создаваться прототип Post2 */
Post2.prototype.constructor = Post2;

let writer = new Post2('Joe', null, '26.11.21');
writer.comment = 'какой чудесный день';
writer.edit('hello');
console.log(writer);

/* Задача 3 наследование в синтаксисе ES6 */
class Posted { 
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit() {
        this.text = prompt('Введите текст');
    };
};
/* Ключевое слово super вызывает конструктор родителя прописанный после extends 
Метод edit при этом тоже наследуется, его не нужно отдельно прописывать. 
Конструктор из которого создается edit уже ставится корректный Posted2 */
class Posted2 extends Posted {
    constructor(author, text, date, comment) {
        super(author, text, date);
        this.comment = comment;
    }        
};

let getPosted = new Posted2('Den', null, '15.11.21');
getPosted.edit();
getPosted.comment = 'мой комментарий';
console.log(getPosted);