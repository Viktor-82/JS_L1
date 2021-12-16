'use strict';

/* Замена картинок.
содержит images.
Задание. Сделайте чтобы в src была картинка 2.jpg, для этого:
1. Найдите картинку, например с помощью querySelector
2. Измените атрибут src, например с помощью setAttribute */
    let img = document.querySelector('img');
    img.setAttribute('src', 'images/change_img/2.jpg');

/* Карточки товаров.
содержить style. images.
Задание.
1. Сделайте всем элементам .product какой-нибудь фон, для этого:
    1.1 Найдите все элементы с классом .product, например с помощью
    querySelectorAll
    1.2 Затем переберите эту коллекцию, например с помощью forEach,
    у коллбэк-функции, передаваемой в forEach определите параметр,
    назовите его например product
    1.3 Чтобы менять стили обратитесь к параметру product и его свойству
    style

2. Сделайте элементам .productName размер шрифта 24px, для этого:
    2.1 Найдите все элементы с классом .productName, например с помощью
    querySelectorAll
    2.2 Затем переберите эту коллекцию, например с помощью forEach,
    у коллбэк-функции, передаваемой в forEach определите параметр,
    назовите его например name
    2.3 Чтобы менять стили обратитесь к параметру name и его свойству
    style */
    let products = document.querySelectorAll('.product');
    products.forEach(function(product) {
        product.style.background = 'lightgreen';
    });

    let productNames = document.querySelectorAll('.productName');
    productNames.forEach(function(productName) {
        productName.style.fontSize = '24px';
    });

/* Стили.
Задание. Найдите все дивы и добавьте им padding: 10px, для этого:
1. Найдите все дивы, например с помощью getElementsByTagName.
2. Затем с помощью цикла пройдитесь по этой коллекции, и обращаясь к
каждому элементу, обратитесь к его свойству style, а затем к свойству
padding. */
    let divs = document.getElementsByTagName('div');
    for (let i = 0; i < divs.length; i++) {
        divs[i].style.padding = '10px';
    }

    /* Отложенный вызов.
 Задание. Вызовите функцию setTimeout и ей в качестве аргументов передайте:
        1-аргумент. (это уже сделано) анонимную функцию, которая будет вызвана
        через определенный промежуток времени
        2-аргумент. задержку в милисекундах, которая будет равняться 3 секундам

        Сделайте чтобы в анонимной функции вызывалась функция alert со строкой
        "message". Задание. Вызовите функцию setTimeout и ей в качестве аргументов передайте:
        1-аргумент. (это уже сделано) анонимную функцию, которая будет вызвана
        через определенный промежуток времени
        2-аргумент. задержку в милисекундах, которая будет равняться 3 секундам

        Сделайте чтобы в анонимной функции вызывалась функция alert со строкой
        "message". */
    setTimeout(function() {
        alert('message');
    }, 3000 ); // здесь сделана задержка 3 сек.

/* Добавить отступы.
Задание. Сделайте, чтобы у всех инпутов снизу был внешний отступ (margin-bottom).
    1. Получите все инпуты, например с помощью querySelectorAll
    2. Переберите полученную коллекцию например с помощью forEach
        2.1 У функции-обработчика, которая будет передаваться в forEach определите
        параметр input
        2.2 Чтобы менять стили обращайтесь к свойству style у параметра input */
    let inputs = document.querySelectorAll('input');
    inputs.forEach(function(input) {
        input.style.marginBottom = '10px';
    });

/* Добавить переносы.
Задание. Инпуты идут один за другим, надо сделать чтобы после каждого инпута
    появился тег br, чтобы инпуты стали стоять один под другим. Для этого:
    1. Получите все инпуты, например с помощью querySelectorAll.
    2. Переберите их с помощью цикла или forEach, и после каждого инпута
    встявляйте тег br, например с помощью insertAdjacentHTML.Задание. Инпуты идут один за другим, надо сделать чтобы после каждого инпута
    появился тег br, чтобы инпуты стали стоять один под другим. Для этого:
    1. Получите все инпуты, например с помощью querySelectorAll.
    2. Переберите их с помощью цикла или forEach, и после каждого инпута
    встявляйте тег br, например с помощью insertAdjacentHTML. */
    let inputs = document.querySelectorAll('input');
    inputs.forEach(function(input) {
        input.insertAdjacentHTML('afterend', '<br>');
    });

/* Получение значений из input.
Задание.
1. Сохраните в переменную ссылку на span, например с помощью querySelector.
2. Сохраните в переменную fromEl ссылку на input, например с помощью getElementById.
3. Элементу fromEl назначьте обработку события change, у функции обработчика
этого события должен быть параметр event.
4. Читайте что было написано в input'e с помощью event.target.value и пишите это
значение в span. */
    let span = document.querySelector('span');
    let fromEl = document.querySelector('input');
    fromEl.addEventListener('change', function(event) {
        span.textContent = event.target.value;
    });

/* Анимация.
Содержит style. + внешние стили
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css">
Задание.
1. Сохраните в переменную btn ссылку на кнопку.
2. Сохраните в переменную msg ссылку на .message.
3. На btn назначьте обработку клика.
    3.1 Внутри функции-обработчика сделайте чтобы у msg display становился block.
    3.2 Для msg с помощью classList.add() добавьте классы animate__animated и
    animate__fadeInLeftBig */
    let btn = document.querySelector('button');
    let msg = document.querySelector('.message');
    btn.addEventListener('click', function() {
        msg.style.display = 'block';
        msg.classList.add('animate__animated', 'animate__fadeInLeftBig');
    });

    /* rating.
содержит style. + внешние стили
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" integrity=
"sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog==" crossorigin="anonymous" /> 
Задание. Используя заготовку, сделайте чтобы при наведении на вторую звезду
подсвечивались первая и вторая звезды. При наведени на третью звезду подсвечивались
первая, вторая и третья звезды, и т.д.
mouseover - это событие срабатывает когда мы наводим на элемент.
mouseout - это событие срабатывает когда мы перестаем наводить на элемент. */
    let iElems = document.querySelectorAll('i');
    iElems.forEach(function(i) {
        i.addEventListener('mouseover', function(event) {
            addGoldenClass(event.target);
        });
        i.addEventListener('mouseout', function(event) {
            removeGoldenClass(event.target);
        });
    })

    function addGoldenClass(i) {
        i.classList.add('golden');
        let previousElem = i.previousElementSibling;
        if (previousElem !== null && previousElem.tagName === 'I') {
            return addGoldenClass(previousElem);
        }
    }

    function removeGoldenClass(i) {
        i.classList.remove('golden');
        let previousElem = i.previousElementSibling;
        if (previousElem !== null && previousElem.tagName === 'I') {
            return removeGoldenClass(previousElem);
        }
    }

/* Удаление блока по клику.
Содержит внешние стили
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    Задание. Надо сделать, чтобы по клику на крестик исчезало тот блок
с сообщением, в котором этот крестик находится. Для этого:
1. Получите все кнопки, например с помощью querySelectorAll
2. Переберите полученную коллекцию, например с помощью forEach
2.1 Методу forEach передавайте callback-функцию с параметром button
3. Каждому button назначьте обработчик клика, с помощью addEventListener,
а самим обработчиком клика будет функция closeClickHandler (в коде ниже)
4. В функции closeClickHandler из объекта события event обратитесь
к currentTarget, затем обратитесь к родительскому узлу, затем к свойству
style, наконец сделайте display: none */
    let buttons = document.querySelectorAll('button');
    buttons.forEach(function(button) {
        button.addEventListener('click', closeClickHandler);
    });

    function closeClickHandler(event) {
        event.currentTarget.parentNode.style.display = 'none';
    }

/* Добавление в корзину.
Содержит style. images. 
Задание. Нужно чтобы при клике по кнопке блок .product в котором она
находится становился цвета lightgreen, а текст на кнопке стал "Добавлено",
для этого:
1. Найдите все кнопки, например с помощью querySelectorAll
2. Переберите полученную коллекцию кнопок, например с помощью forEach,
и каждой кнопке назначьте в качестве обработчика клика фукнцию
buttonClickHandler (увидите ее ниже в коде)
3. Когда функция buttonClickHandler будет срабатывать вы из объекта
события получаете элемент на котором произошло событие (свойство target),
затем получаете родителя кнопки по коротой кликнули (свойство parentNode),
затем обращаетесь к свойству style, а затем к свойству background и
ставите цвет lightgreen.
3.1 Также во время срабатывания функции buttonClickHandler из обекта
события (параметр event) вы получаете кнопку на которой произошло
событие (свойство target) и меняете у нее текст на "Добавлено". */
    let buttons = document.querySelectorAll('button');
    buttons.forEach(function(button) {
        button.addEventListener('click', buttonClickHandler);
    });

    function buttonClickHandler(event) {
        event.target.parentNode.style.background = 'lightgreen';
        event.target.textContent = 'Добавлено';
    }

/* Валидация формы.
Содержит style.
Задание. Вам нужно проверять пусто ли в input'ах при отправке формы.
    Если в инпуте пусто делаете ему красную рамку. Если хотя бы в одном
    инпуте пусто форма не должна отправляться.
    1. сохраните в переменную formEl ссылку на форму
    2. сохраните в переменную ссылку на input#first
    3. сохраните в переменную ссылку на input#second
    4. на formEl назначьте обработку события отправки формы (submit),
    у функции-обработчика объявите параметр event.
        4.1 в функции-обработчике вы проверяете пусты ли input'ы, для этого
        читайте у них свойство value
        4.2 если input пустой тогда вы обращаетесь к его style.borderColor
        и делаете его равным red
        4.3 чтобы остановить отправку формы используйте event.preventDefault() */
    let formEl = document.querySelector('form');
    let firstInput = document.getElementById('first');
    let secondInput = document.getElementById('second');

    formEl.addEventListener('submit', function(event) {
        let firstInputEmpty = firstInput.value === '';
        let secondInputEmpty = secondInput.value === '';

        if (firstInputEmpty) {
            firstInput.style.borderColor = 'red';
        }
        if (secondInputEmpty) {
            secondInput.style.borderColor = 'red';
        }
        if (firstInputEmpty || secondInputEmpty) {
            event.preventDefault();
        }
    });

/* Кнопка наверх.
Содержит style.
Задание. Сделайте, чтобы при прокрутке от верха экрана больше чем на 500px появлялся
блок #goToTop, а если меньше, то чтобы исчезал.
1. Сохраните в переменную goToTopEl ссылку на div#goToTop
2. Назначьте обработку события scroll для объекта window.
3. В функции-обработчике проверяйте величину window.pageYOffset если она больше
500, тогда goToTopEl надо показать, иначе скрыть.
4. Показывайте и скрывайте с помощью свойства display у объекта style. */
    let goToTopEl = document.getElementById('goToTop');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 500) {
            goToTopEl.style.display = 'block';
        } else {
            goToTopEl.style.display = 'none';
        }
    });

/* Имитация загрузки картинки.
Содержит style. images.
Задание. Нужно через 3 секунды заменить все картинки loading.gif на картинки
из папки images.
1. Получите все картинки например с помощью querySelectorAll
2. Переберите эту коллекцию с помощью цикла for, в цикле каждой картинке
установите атрибут src (например с помощью setAttribute) равный
"images/здесь_нужно_поставить_правильное_имя_файла".
3. Наконец весь код оберните в setTimeout, и выставите задержку 3 сек. */
    setTimeout(function () {
        let images = document.querySelectorAll('img');
        for (let i = 0; i < images.length; i++) {
            images[i].setAttribute('src', `images/load_images/${i + 1}.jpg`);
        }
    }, 3000); // так прописывается задержка загрузки

    /* Перебор свойств объекта.
Задание. Используя цикл for in переберите объект products, 
ведите в консоль имя свойства, значение свойства. */
const products = {
    one: "один",
    two: "два",
    three: "три",
};

for (let prop in products) {
    console.log(prop);
    console.log(products[prop]);
};

/* Очистка с помощью innerHTML.
Задание. С помощью innerHTML очистите содержимое параграфа. */
let p = document.querySelector('p');
p.innerHTML = '';

/* Заполнение с конкатенацией.
Задание. Дописывайте в строку totalString с помощью цикла и конкатенации строки,
    так, чтобы итоговое значение в totalString получилось: слово1слово2слово3 */
    let totalString = "";
    for (let i = 1; i <= 3; i++) {
        totalString += `слово${i}`;
    }    
    console.log(totalString);// слово1слово2слово3

/* Вставка разметки.
Задание. С помощью insertAdjacentHTML добавьте в body ссылку по примеру из комментария выше.
При создании разметки используйте шаблонный литерал. Данные для ссылки ниже. */
let url = "https://picsum.photos/200/300";
let targetAttr = "_blank";
let linkText = "ссылка";

document.body.insertAdjacentHTML('afterbegin', `<a href="${url}" target="${targetAttr}">${linkText}</a>`);

/* Получение data-атрибутов.
Задание. Нужно при клике на кнопку выводить в консоль значения ее data- атрибутов.
1. Получите все кнопки например с помощью querySelectorAll
2. Переберите полученную коллекцию, например с помощью forEach
2.1 data- атрибуты можете читать например с помощью свойства dataset у каждой кнопки. */
    let buttons = document.querySelectorAll('button');
    buttons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            console.log(event.target.dataset.id);
            console.log(event.target.dataset.value);
        });
    });


/* Создание разметки.
Задание.С помощью цилка for добавьте в body 6 картинок, по примеру тех, что закомментированы. 
Картинки вставляйте со помощью insertAdjacentHTML. При генерации разметки
пользуйтесь шаблонным литералом. */
    for (let i = 0; i < 6; i++) {
        let markup = `<img src="https://picsum.photos/200/300?random=${i}" alt="pic${i}">`;
        document.body.insertAdjacentHTML('afterbegin', markup);
    };

/* Размер шрифта.
Задание. При смещении ползунка в div менять размер шрифта.
1. Получите ссылку на input.
2. Получите ссылку на div.
3. Input'у поставьте прослушивание события 'input';
    3.1 У функции-обработчика определите параметр event.
    3.2 Значение input'а читайте из event.target.value. */ 
    let inputel = document.querySelector('input');
    let divEl = document.querySelector('div');
    inputel.addEventListener('input', function(event) {
        divEl.style.fontSize = event.target.value + 'px';
    })

/* Замена класса/текста по клику 1-tabs.
Содержит style.+ Внешние стили.
Задание. Нужно сделать, чтобы при кликах по .nav-link:
1. Класс active назначался тому .nav-link, по которому кликнули, а у предыдущего
.nav-link, чтобы этот класс убирался.
2. В зависимости от того по какому .nav-link кликнули нужно чтобы менялся текст
в .text, соответствующие тексты вы найдете в app.js */    
const texts = {
    text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    text2: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.',
    text3: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил.'
};
/* 1. Получите ссылку на .text, например с помощью querySelector
   2. Получите коллекцию, в которой хранятся все .nav-link, например с помощью querySelectorAll
    2.1 Переберите полученную коллекцию, например с помощью forEach, и каждой ссылке назначьте
    обработчик клика функцию clickHandler. */
let textEl = document.querySelector('.text');

let navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(function(link) {
    link.addEventListener('click', clickHandler);
});

/**
 * Обработчик клика по .nav-link
 * @param {MouseEvent} event 
 */
function clickHandler(event) {
/* здесь вызывайте changeText и changeActiveClass, и передавайте им объект события. */
    changeText(event);
    changeActiveClass(event);
}

/**
 * Эта функция должна убирать .active у предыдущего .nav-link и ставить его
 * на тот, по которому кликнули.
 * @param {MouseEvent} event 
 */
function changeActiveClass(event) {
    document.querySelector('.active').classList.remove('active');
    event.target.classList.add('active');
}

/**
 * Эта фукнция должна читать текст (например через textContent) из 
 * .nav-link по которому кликнули и в зависимости от этого в .text
 * ставить соответствующий текст из texts.
 * @param {MouseEvent} event 
 */
function changeText(event) {
    switch (event.target.textContent) {
        case "Link 1":
            textEl.textContent = texts.text1;
            break;
        case "Link 2":
            textEl.textContent = texts.text2;
            break;
        case "Link 3":
            textEl.textContent = texts.text3;
            break;
    }
}


/* Сообщение, звук, стили по клику. Содержит style.
Задание. Вам нужно чтобы при клике на кнопку появлялось сообщение .message
снизу экрана, в общем как сообщения вконтакте.
1. Аудио воспроизводите как здесь https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement
2. Чтобы получить высоту .message, используйте свойство clientHeight
3. Чтобы анимировать перемещение .message используйте стиль transform
как здесь https://webref.ru/css/value/translatey */
    let notification = new Audio('sound/notification.mp3');
    let message = document.querySelector('.message');
    let button = document.querySelector('button');
    button.addEventListener('click', function() {
        let messageHeight = message.clientHeight;
        message.style.transform = `translateY(-${40 + messageHeight}px)`;
        notification.play();
    });


/* Вывод товаров. Содержит style.
Задание. При клике кнопки показывать соответствующие товары. */
/* Разметка товара:
<div class="product">
    <div>${здесь_название_товара}</div>
    <img src="${здесь путь до картинки}" alt="">
    <div>${здесь_цена}</div>
    <a href="https://example.com/producs/${здесь_id_товара}">Подробнее</a>
</div> */
const products = {
    phones: [
        {
            id: 1,
            name: "Смартфон 1",
            price: "23,99 р.",
            imageUrl: "https://picsum.photos/seed/1/200",
        },
        {
            id: 2,
            name: "Смартфон 2",
            price: "11,99 р.",
            imageUrl: "https://picsum.photos/seed/2/200",
        },
        {
            id: 3,
            name: "Смартфон 3",
            price: "22,99 р.",
            imageUrl: "https://picsum.photos/seed/3/200",
        },
    ],

    tablets: [
        {
            id: 4,
            name: "Планшет 4",
            price: "99,99 р.",
            imageUrl: "https://picsum.photos/seed/4/200",
        },
        {
            id: 5,
            name: "Планшет 5",
            price: "44,99 р.",
            imageUrl: "https://picsum.photos/seed/5/200",
        },
    ],

    tv: [
        {
            id: 6,
            name: "Телевизор 6",
            price: "199,99 р.",
            imageUrl: "https://picsum.photos/seed/6/200",
        },
        {
            id: 7,
            name: "Телевизор 7",
            price: "244,99 р.",
            imageUrl: "https://picsum.photos/seed/7/200",
        },
        {
            id: 8,
            name: "Телевизор 8",
            price: "399,99 р.",
            imageUrl: "https://picsum.photos/seed/8/200",
        },
        {
            id: 9,
            name: "Телевизор 9",
            price: "444,99 р.",
            imageUrl: "https://picsum.photos/seed/9/200",
        },
    ],
};

const productsEl = document.querySelector(".products");
const buttons = document.querySelectorAll("button");
buttons.forEach(function (button) {
    button.addEventListener("click", clickHandler);
});

/**
 * Эта функция должна вызываться при клике по кнопкам.
 * @param {MouseEvent} event
 */
function clickHandler(event) {    
    productsEl.innerHTML = "";//очищаем .products
//в showCategory передаем строку с типом категории, из атрибута data-type у кнопки,
// по которой был клик.
    showCategory(event.target.dataset.type);
}

/**
 * Сюда должно прилетать значение атрибута data-type у кнопки,
 * по которой кликнули.
 * @param {string} category 
 */
function showCategory(category) {
    const categoryProducts = products[category];
    let markupToProductsDiv = "";
    categoryProducts.forEach(function (product) {
        markupToProductsDiv += getProductMarkup(product);
    });
    productsEl.insertAdjacentHTML("afterbegin", markupToProductsDiv);
}

/**
 * @param {Object} product объект из массива phones, tablets или tv.
 * @param {number} product.id id продукта
 * @param {string} product.name название продукта
 * @param {string} product.price цена продукта
 * @param {string} product.imageUrl путь до картинки товара
 * @returns {string} html-разметка для товара
 */
function getProductMarkup(product) {
    return `
            <div class="product">
                <div>${product.name}</div>
                <img src="${product.imageUrl}" alt="">
                <div>${product.price}</div>
                <a href="https://example.com/producs/${product.id}">Подробнее</a>
            </div>
        `;
}


/* Прогрессбар. Содержит style.
Задание. Нужно имитировать заполнение прогресс-бара в div. */
    let div = document.querySelector('div');

    function changeProgress(percent) {
        div.style.background = `linear-gradient(90deg, rgba(38,255,162,1) ${percent}%, rgba(255,255,255,1) ${percent}%)`;
    }
    /*  В цикле создать отложенные вызовы с помощью setTimeout. Т.е. в цикле должны
    быть вызовы функции setTimeout.
    1. В условии цикла должно быть i <= 100, т.к. именно значение счетчика будем
    передавать в changeProgress, а там процент не может превышать 100.
    2. В setTimeout вторым параметром надо передавать задержку, используйте счетчик цикла,
    можете также добавить какой-нибудь коэффициент, чтобы подобрать желаемую скорость
    заполнения прогресс-бара. */
    for (let i = 0; i <= 100; i++) {
        setTimeout(function () {
            changeProgress(i);
        }, i * 40);
    }