'use strict';

/* Статические методы присваиваются не в prototype функции а в саму функцию.
Статические методы и свойства также наследуются.
Они принадлежат классу а не конкретному объекту и вызываются
через имя класса */
function User(name) {
    this.name = name;
}
/* Статическое свойство конструктора */
User.nameMaxLength = 20; 

/* Статический метод конструктора */
User.isNameLengthCorrect = function (name) {
    if (name.length <= User.nameMaxLength) {
        console.log('Name is correct.');
    } else {
        console.log('Name is incorrect.');
    }
};

const user1 = new User('John');
User.isNameLengthCorrect(user1.name);

/* Тот же код в синтаксисе ES6 */
class User {
    constructor(name) {
        this.name = name;
    }
    static nameMaxLength = 20;

    static isNameLengthCorrect(name) {
        if (name.length <= User.nameMaxLength) {
            console.log('Name is correct.');
        } else {
            console.log('Name is incorrect.');
        }
    }
}
const user1 = new User('John');
User.isNameLengthCorrect(user1.name); // вызов через имя класса а не конкретного объекта