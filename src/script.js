'use strict';
/* 
this - сам объект 
*/
const user = {
    name: 'Alex';
    showName: function() {
        alert(this.name);
    }
}
/* this в showName - сам объект user */
user.showName();// Alex 



/* 
this передается методом .call()
 */
function showName() {
    console.log(this);
    alert(this.userName);
}
const user1 = {
    userName: 'Alex'
}
const user1 = {
    userName: 'John'
}
/* Вызываем showName методом .call() и передаем this user1 
call() явно назначает this */
showName.call(user1);// Alex
showName.call(user2);// John


/* 
Метод .call() передает несколько параметров
 */
function addInfo(age, position) {
    this.age = age;
    this.position = position;
}
/* 2) Теперь в объекте кроме имени есть еще 
возраст и должность */
let user1 =  {
    userName: 'Alex'
}
/* 1) Берем ссылку (addInfo) вызываем (call) передаем this (user1)
и другие параметры (30, developer) */
addInfo.call(user1, '30', 'developer');
console.log(user1);


/*
 Метод .apply() передает данные в виде массива
  */
 function addInfo(age, position) {
     console.log(age, position);
 }
 let user1 = {
     userName: 'Alex'
 }
 addInfo.apply(user1, ['30', 'developer']);


 /* 
 Метод .bind() жестко привязывает this. Поменять его в дальнейшем невозможно. В отличии от .call() создает ссылку на новую функцию.
 */
 let user = {
    userName: 'John',
    sayHello() {
        console.log(this);
        console.log(this.userName);
    }
};

//Window
//undefined
setTimeout(user.sayHello, 1000);

//bind создал новую функцию, в которой this всегда равен user
setTimeout(user.sayHello.bind(user), 1000);

//bind - создает новую функцию, которую потом можно вызвать
let showName = user.sayHello.bind(user);
showName();
console.log(showName);

//это не сработает, контекст уже жестко привязан
showName.call(Window);


/* 
this в стрелочных функциях 
*/
let user = {
    firstName: 'John',
    sayUsual() {
        setTimeout(function() { //вызывается относительно window            
            console.log(this);
        }, 1000);
    },
    sayArrow() {
        setTimeout(() => { //вызывается относительно user
            console.log(this);
        }, 2000);
    }
};
user.sayUsual(); //window
user.sayArrow(); //user

/* 
        let fn = () => {
            console.log(this);
        }
        */

        /* этот объект конструируется во время работы анонимной функции, которая запускается 
        при открытии страницы и в этой анонимной функции this указывает на window*/
        let user = {
            firstName: 'John',
            sayArrow: () => { //ссылка на эту функцию создается когда конструируется сам объект user, 
                console.log(this); //поэтому это тоже самое что и функция fn выше
                
            },
        };
        user.sayArrow();//window
/* в стрелочной функции this равен this'у, который был у вызывающей функции в 
момент объявления стрелочной функции, не в момент вызова */



/* 
this при клике на элементе 
*/
// в обоих режимах работает одинаково
const button = document.querySelector('button');
button.addEventListener('click', function() {
    console.log(this); //this будет указывать на button
});

button.addEventListener('click', function() {
    console.log('hello');
});

button.addEventListener('mouseover', function() {
    console.log('world');
});

/* чтобы посмотреть все обработчики назначенные на элемент:
1. в браузере в разделе Elements находим наш элемент
2. переходим в раздел Event Listeners
3. находим нужный тип события
4. далее можно нажать на ссылку справа, которая
покажет в коде функцию обрабатывающую данное событие */

class User {
    constructor(username) {
        this.username = username;
        this.buttonElement = document.querySelector('button');

        /* в таком виде this будет HTMLButton​Element, т.к. при
        клике, функцию showUserName вызывает именно объект
        HTMLButton​Element, а у него нет свойства username и
        мы получим:
        Uncaught ReferenceError: showUserName is not defined */
        // this.buttonElement.addEventListener('click', this.showUserName);

        /* в этом случае мы с помощью bind создаем новую функцию из
        this.showUserName, в которой this всегда будет указывать на
        объект типа User. Объект события MouseEvent по прежнему будет
        передаваться в функцию обработчик.*/
        this.buttonElement.addEventListener('click', this.showUserName.bind(this))
    }

    showUserName(event) {
        alert(this.username);
        // мы также можем здесь получать объект события
        console.log(event);
    }
}

const user1 = new User('Alex');

/* 
this в стрелочных функциях в классах
*/
class Hello {
    one = 'один';

    world = () => {
        // внутри стрелочных функций this всегда будет указывать на созданный объект
        console.log(this.one);
    }
}

let hello1 = new Hello;
setTimeout(hello1.world, 2000);
hello1.world();


/* 
this в стрелочных функциях в классах при клике на элементе
*/
class Hello {
    button = document.querySelector('button');

    constructor() {
        this.button.addEventListener('click', this.buttonClickHandler);
    }

    buttonClickHandler = (event) => {
        //теперь в функции обработчике this всегда будет указывать на сам объект,
        //а не на кнопку
        console.log(this);
    }
}

let hello1 = new Hello;


/* 
this в конструкторе 
*/
// в стиле ES5
function Post(id, text) {
    this.id = id;
    this.text = text;
    console.log(this); //this указывает на вновь создаваемый объект
}

const post1 = new Post(1, 'hello');
const post2 = new Post(2, 'world');

// в стиле ES6
class Post {
    constructor(id, text) {
        this.id = id;
        this.text = text;
        console.log(this); //this указывает на вновь создаваемый объект
    }
}

const post1 = new Post(1, 'hello');
const post2 = new Post(2, 'world');


/* 
this в цепочке прототипов при вызове методов 
*/
class BaseUser {
    constructor() {
        this.username = null;
    }

    showName() {
        console.log(this.username);
    }
}

const baseuser = new BaseUser();
baseuser.showName(); //null

class User extends BaseUser {
    constructor(name) {
        super();
        this.username = name;
    }
}

const user = new User('alex');
user.showName(); //alex

/* Не смотря на то, что showName есть только в BaseUser, в момент его вызова
this в нем указывает на user. */