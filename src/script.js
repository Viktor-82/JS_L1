'use strict';

/* Создание функции конструктора. Название конструктора всегда с большой буквы. */
function Post(author, text) {
    //этот this будет указывать на вновь создаваемый объект
    this.author = author;
    this.text = text;
}
/* Запись метода конструктора объектов нужно делать не в сам конструктор а в его прототип,
 чтобы не расходовать оперативную память при создании каждого нового объекта из конструктора.
 Все вновь созданные объекты будут по ссылке из одной и той же области оперативной памяти получать метод. */
Post.prototype.show = function() {
    alert(this.author + ' say: ' + this.text);
}

/* Создание нового объекта на основе конструктора начинается с ключевого слова new */
const post1 = new Post('Admin', 'lorem ipsum1');
console.log(post1.author);
console.log(post1.text);
post1.show();

const post2 = new Post('User', 'hello world');
console.log(post2.author);
console.log(post2.text);
post2.show();