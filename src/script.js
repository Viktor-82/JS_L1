'use strict';

/* Наследование прототипа старого объекта в новый.
Имя конструктора на основе которого будут создаваться новые объекты переписывается
в явном виде на новое (корректируется) */

function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}
/* Пишем в прототип объекта Person функцию увеличивающую возраст на 1 */
Person.prototype.incrementAge = function () {
    this.age += 1;
};
const person1 = new Person('Alex', 20, 'male');
person1.incrementAge();

function Personal(name, age, gender, location, hobby) {
    Person.call(this, name, age, gender);
    this.location = location;
    this.hobby = hobby;
    // this.__proto__ = Personal.prototype
}
/* Прототип объекта Personal будет создан из Person.prototype
Объекты Personal будут создаватся из конструктора Person. Это неправильно => */
Personal.prototype = Object.create(Person.prototype); 
/* => поэтому здесь в явном виде прописываем прототипу объекта Personal конструктор Personal */
Personal.prototype.constructor = Personal;

/* Добавляем прототипу объекта метод sayName */
Personal.prototype.sayName = function() {
    console.log('My name is: ' + this.name);
}

const personal1 = new Personal('John', 30, 'male', 'Canada', 'swimming');
personal1.incrementAge();
personal1.sayName();
console.log(personal1.age);

/* Тот же самый код в синтаксисе ES6 с использованием сокращений
т.н. Синтаксического сахара */
class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    /* метод объекта все равно будет принадлежать прототипу */
    incrementAge() {
        this.age += 1;
    }
}
const person1 = new Person('Alex', 25, 'male');
console.log(person1);
person1.incrementAge();

/* Наследование конструкторов объектов. 
Класс Personal расширяет (extends) класс Person, у него будет собственный 
constructor, но при наследовании вызывается родительский конструктор ключевым словом 
super */
class Personal extends Person {
    constructor(name, age, gender, location, hobby) {
        super(name, age, gender);
        this.location = location; // эти свойства дописываем
        this.hobby = hobby; // эти свойства дописываем
    }

    sayName() {
        console.log('My name is: ' + this.name);
    }
}

let newPerson = new Personal ('Andru', 44, 'male', 'Moscow', 'MMA');
newPerson.incrementAge();
console.log(newPerson.sayName());
console.log(newPerson);
