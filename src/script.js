'use strict';

/* Создание функции конструктора с использованием
другой существующей функции конструктора
 */
function UserRole() {
    this.rights = ['create', 'edit'];
    // this.__proto__ = UserRole.prototype
}

function ModerRole() {
    UserRole.call(this);
    this.rights.push('delete');
    // this.__proto__ = ModerRole.prototype
}
/* Та же функция в другой записи
function ModerRole() {
    let hello = this;
    UserRole.call(hello);
    this.rights.push('delete');
}
 */
const moderRole1 = new ModerRole();