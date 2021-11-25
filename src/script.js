'use strict';

class User {
    url = null;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    /* Сеттер для передачи данных в конструктор объекта*/
    set vkUrl(url) {
        if (/^https?.*/gm.test(url)) {
            this.url = url;
        } else {
            throw new Error('Passed invalid url value: ' + url);
        }
    }
}

const user1 = new User('Alice', 25);
/* Обращение к сеттеру как к свойству хотя такого свойства нет */
user1.vkUrl = 'https://vk.com/test'; 

/* При записи ниже будет ошибка т.к. такие данные 
не пройдут проверки регулярным выражением */
user1.vkUrl = 'hello world';

/* Ограничение сеттера. Нельзя использовать такую запись
 сеттера в конструкторе! */
 /* set name(userName) {
     this.name = userName; // будет выполять операцию по кругу пока не забъет всю память!
 } */


