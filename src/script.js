'use strict';


let order1Discount = setDiscount(15);
alert(order1Discount);

let order2Discount = setDiscount();
alert(order2Discount);

/* function declaration вызвать можно до объявления самой функции */
function setDiscount(discount = 10) {
    if (discount > 30) {
        return 30;
    }
    return discount;
    /* после фигурных скобок точка с запятой не обязательна */
}


/* function expression или анонимная функция (без имени) вызвать можно только после объявления */
let getSquare = function(x) {
    return x * x;
    /* точка с запятой после скобок обязательна */
};

console.log(getSquare(3));