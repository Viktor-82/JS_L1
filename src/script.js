'use strict';

/* 
Замыкания 
*/
/* Замыкание - это функция, которая в своем теле использует
        переменные и/или функции, созданные за ее пределами,
        и которые ей не были переданы как аргументы.   */

        function foo() {
            var a = 2;
/* Целевая функция в данном примере bar()
'a' будет доступна в bar() несмотря на то что 'a' в bar() не была передана 
как аргумент и не была объявлена внутри bar() */
        function bar() {
            console.log(a); // 2
        }

        bar();
    }

    foo();    

/* 2 пример */
    function myFunc() {
        let name = 'John';

        function sayName() {
            console.log(name);
        }

        return sayName;
    }

    let showName = myFunc();
    showName();

/* 3 пример */
    function wait(message) {
        setTimeout(function() {
            console.log(message);
        }, 1000);
    }

    wait("Привет, мир!"); 

/* 4 пример */
    function snakeModule() {
        let color = 'black';
        let speed = 3;
        let winLengtn = 50;
        let currentLength = 1;

        function checkWin() { // это замыкание
            return currentLength > winLengtn;
        }

        return {
            isWin: checkWin,
        };
    }

    let snake = snakeModule();
    console.log(snake.isWin());

/* 5 пример */
function snakeModule(color, speed) {
    let snakeColor = color;
    let snakeSpeed = speed;
    let snakeWinLengtn = 50;
    let snakeCurrentLength = 1;

    function checkWin() {
        return snakeCurrentLength > snakeWinLengtn;
    }

    function changeSpeed(speed) {
        snakeSpeed = speed;
    }

    function getSpeed() {
        return snakeSpeed;
    }

    return {
        isWin: checkWin,
        changeSpeed: changeSpeed,
        getSpeed: getSpeed,
    };
}

let snake = snakeModule('yellow', 10);
console.log(snake.getSpeed());
snake.changeSpeed(2);
console.log(snake.getSpeed());



/* Функция в коде должна зависеть от передаваемых ей параметров
замыкания можно использовать в крайнем случае. 
Лучше не использовать вообще */
/* Как надо */
function hello(userName) { 
    return 'Привет, ' + userName;
}
/* Как не надо */
let userName = 'Вася';
function hello() { 
    return 'Привет, ' + userName;
}