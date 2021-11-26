'use strict';

/* Вывести document в виде разметки */
console.log(document);

/* Вывести document в виде объекта 
полный запрос такой console.dir(windows.document) */
console.dir(document);

/* Синтаксис запросов к элементам: */
// document.getElementsByTagName('p');
// document.getElementsByClassName('className');
let paragraphs = document.getElementsByTagName('p');
console.log(paragraphs);

/* Запрос по селектору коллекции элементов */
// обращение к элементам input формы
let inputs = document.querySelectorAll('form[action="/feedback"] input');
console.log(inputs); // вернет коллекцию значений

/* Запрос по селектору первого попавшегося элемента с заданными параметрами
    <div class="user"></div>
    <div class="user"></div>
    <div class="user"></div> */
let firstUser = document.querySelector('.user');// вернет первый элемент с классом user ('one')
console.dir(firstUser);

/* Запрос по имени
<form action="#">
<input type="text" name="user">
<input type="text" name="pass">
<input type="text" name="user">
<button>Send</button>
</form>                    */
let user = document.getElementsByName('user');
console.dir(user);

/* Запрос тега body */
let body = document.body;
console.log(body);
console.dir(body);

/* Запросить все формы */
let forms = document.forms;
console.dir(forms);

/* Запросить тег head */
let head = document.head;
console.log(head);
console.dir(head);

/* Запросить все изображения (не по тегу img) */
let images = document.images;
console.dir(images);

/* Запросить все ссылки. Выбираются только те где есть атрибут href
и теги area (назначает невидимую область на документе которая будет ссылкой) */
let getLinks = document.links;
console.dir(getLinks);// лучшее назвать переменную links

/* Запросить дочерние элементы по определенным параметрам */
// получит все дочерние элементы класса product
let children = document.querySelector('.product').children;
console.dir(children);

/* Запросить родительский узел из дочернего элемента через свойство .parentNode */
let productName = document.querySelector('.productName');
console.log(productName.parentNode);// .родительскийУзел

/* Запросить все дочерние узлы включая текстовые через свойство .childNodes 
(невидимый символ "пробел" "перенос" будут обозначены в свойстве text) text>data */
let product = document.querySelector('.product');
console.log(product.childNodes);

/* Запросить дочерние теги исключая текстовые узлы */
// let product = document.querySelector('.product');
   console.log(product.children);

/* Запросить/изменить текст внутри блока */
let div = document.querySelector('div');// отработает только первый попавшийся селектор div
console.log(div.innerText);// текст фактический видимый на странице
console.log(div.textContent);// текст целиком включая скрытый, пробелы, переносы

/* Удалить все пробелы по бокам текста и переносы (между словами пробелы остануться) метод .trim() */
console.log(div.textContent.trim());


/* Добавление элементов в DOM
 */
let paragraph = document.createElement('p');// записали тег <p> в переменную
/* Добавляем элемент в конец списка дочерних элементов родителя */
document.body.appendChild(paragraph);// добавляем дочерний элемент <p></p>
paragraph.innerText = "add this text in";// добавляем текст в <p></p>

/* Добавляем значение в текстовый узел DOM. На странице пока не отображается */
let hello = document.createTextNode("create text");

/* Добавляем элемент в список дочерних элементов родителя перед указаннымм элементом. 
Метод Node.insertBefore() Значение текстового узла выводится на экран */
// вместо .body может быть любой элемент
document.body.insertBefore(hello, document.querySelector('button'));


/* Удаление элементов из DOM 
*/
let list = document.querySelector('ul');// пишем в переменную элемент
/* Удаление относительно родителя (body) Записать можно так: list.body.removeChild(list); 
НО! list.parentNode более универсальная запись т.к. не обязательно знать какой элемент является родителем */
list.parentNode.removeChild(list);

/* Удаление элемента методом .remove() */
let h2 = document.querySelector('h2');// записывает первый попавшийся элемент с указанным тегом
h2.remove();// и удаляет только то что записано в переменную соотвественно со всем содержимым

/* Замена элементов через родительский элемент методом .replaceChild */
let p = document.querySelector('p');
let h2 = document.createElement('h2');// создаем, на странице этого пока нет
h2.innerText = "hello world";// добавляем в заголовое текст
p.parentNode.replaceChild(h2, p);// сначала пишем новый элемент, потом тот который надо заменить

/* Получить все методы элемента для работы с ними (DOMTokenList) */
let button = document.querySelector('button');
console.log(button.classList);// получаем методы элемента
console.log(button.className);// получаем название класса элемента
console.log(button.id);// получаем id элемента
/* Впринципе доступ к любому свойству элемента можно получить если посмотреть 
свойства этого элемента в консоли разработчика */

/* Изменение разметки внутри элемента 
<p id='one'> Какой то текст<i>hello</i> </p> */
let p = document.getElementsById("one");
p.innerHTML = "<u>world</u>";
/* или так */
let changeText = "привет";
p.innerHTML = `<i>${changeText}</i>`;

/* Изменение текста внутри элемента */
let h4 = document.getElementsByTagName('h4')[0];
h4.innerText = "hello world";

/* Изменение любых атрибутов (class, id и т.д.) */
let product = document.querySelector('.product');
/* Чтение */
console.log(product.getAttribute('data-lang'));
console.log(product.getAttribute('class'));
/* Запись */
product.setAttribute('id', 'first');// добавляем атрибут(id), его значение (first)
product.classList.add("hello");// добавляем класс (hello)
/* Удаление */
product.classList.remove('product');// удаляем класс (product)

/* Добавить разметку массово */
let button = document.querySelector('button');
/* Во второй параметр куда передается разметка можно прописать пачку кода
 (много тегов и содержимого) */
button.insertAdjacentHTML("beforebegin", "<u>hello</u>");


/* Прочитать величину прокрутки (если много контента и есть полоса прокрутки) */
// По оси Y в пикселях сверху. Применяется для динамической анимации страницы
console.log(window.pageYOffset);
// по X но прокрутки по X не должно быть в верстке
console.log(window.pageXOffset);