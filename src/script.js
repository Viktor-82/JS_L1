'use strict';

class User {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    /* Геттер возвращает значение указанное в исполнительном блоке */
    get fullName() {
        return this.name + ' ' + this.surname;
    }
}

const user1 = new User('Alex', 'Smith'); //В конструктор можно передать значения
console.log(user1.name);
console.log(user1.surname);
console.log(user1.fullName);// обращение к геттеру как к обычном свойству

/* В геттер нельзя ничего передать! Это не функция */
/* user1.fullName = 'John Doe'; */ // Такая запись покажет ошибку!!
