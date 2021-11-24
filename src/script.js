'use strict';

const obj1 = {
    author: 'User',
    text: 'hello world',
    show: function() {
        alert(this.author + ' say: ' + this.text);// this указывает на сам объект
    }
};

console.log(obj1.author);
console.log(obj1.text);
obj1.show();// вызов метода объекта