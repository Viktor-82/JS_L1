'use strict';
/**
 * рекурсия. функция вызывает саму себя
 * @param {*} n 
 * @returns 
 */
const factorial = (n) => {
    if (n === 1) {
        return 1;
    } else {
        return n * factorial(n-1);
    }
}

const answer = factorial(3);
console.log(answer);
