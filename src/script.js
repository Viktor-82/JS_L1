'use strict';

/* Базовый объект на основе которого будут создаваться другие объекты */
const post_parent = {
    role: 'user', // автор по умолчанию user
    userName: null, // имени по умолчанию нет
    showRole: function () {
        console.log(this.role);
    }
};
/* Создание нового объекта методом .create базового объекта JS - Object */
let post1_child = Object.create(post_parent);
post1_child.userName = 'Alex'; // присвоение значения userName в созданный объект
post1_child.role = 'superAdmin';

console.log(post1_child);