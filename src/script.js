'use strict';

/* 
Анонимные функции 
*/
// в переменную myFunc присваивается ссылка на анонимную функцию
let myFunc = function() {
    console.log('hello');
}    
myFunc();


//здесь function a() уже не анонимная, у нее есть имя
// используется для рекурсивного вызова (вызов самой себя)
let b = 10;            
        let myFunc = function a() {
            console.log(b);
            if (b > 0) {
                b--;
                a();
            }
        };

        myFunc();


/* Немедленно вызываемое функциональное выражение.
Может использоваться для создания внутри себя области видимости
которая будет недоступна извне. То же что и в теле обычной функции.
Практически неприменимо в настоящее время */  
//Immediately Invoked Function Expression
(function () {
    console.log('hello');
})();


//Immediately Invoked Function Expression
// Пример использования
(function () {
    let $ = 'hello';
    let jQuery = 'world';
    console.log($);
    console.log(jQuery);
})();
/* при подключении настоящего jquery переменные внутри функционального 
выражения не будут пересекаться с внешними переменными */  
<script src="https://code.jquery.com/jquery-3.3.1.js"></script>
        let body = $('body');
        console.log(body);

// Функция обратного вызова (callback функция)
// здесь function - это анонимная функция 
document.querySelector('button').addEventListener('click', function(event) {
    console.log(event);
})