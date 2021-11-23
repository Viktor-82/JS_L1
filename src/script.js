'use strict';

let prices = [53, 107, 81, 45, 35];

/* Метод find() возвращает значение первого найденого в массиве элемента, 
которое удовлетворяет условию переданному в callback функции. В противном
случае возвращается undefined.
 */
let lessThan50 = prices.find(function(element) {
    return element < 50;
});


console.log(lessThan50);// 45

