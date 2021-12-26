'use strict';

/* 
Текст вместо картинки 
*/
const buttons = document.querySelectorAll('button');
buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        handleClick(event);
    })
});

/**
 * Функция обрабатывает клик по кнопке в карточке товара и попеременно вызывает
 * функции для показа или скрытия текста о товаре.
 * @param {MouseEvent} clickedButtonEvent 
 */
function handleClick(clickedButtonEvent) {
    const cardNode = clickedButtonEvent.target.parentNode;

    const card = {
        wrap: cardNode,
        img: cardNode.querySelector('img'),
        productName: cardNode.querySelector('.productName'),
        button: cardNode.querySelector('button'),
    };

    const textOnButton = card.button.innerText;
    if (textOnButton === 'Подробнее') {
        showMoreText(card);
    } else if (textOnButton === 'Отмена') {
        hideMoreText(card);
    }
}

/**
 * Функция скрывает текст с описанием товара.
 * @param {Object} card 
 * @param {HTMLDivElement} card.wrap
 * @param {HTMLImageElement} card.img
 * @param {HTMLDivElement} card.productName
 * @param {HTMLButtonElement} card.button
 */
function hideMoreText(card) {
    card.img.style.display = 'block';
    card.wrap.querySelector('.desc').remove();
    card.button.innerText = 'Подробнее';
}

/**
 * Функция показывает текст с описанием товара.
 * @param {Object} card 
 * @param {HTMLDivElement} card.wrap
 * @param {HTMLImageElement} card.img
 * @param {HTMLDivElement} card.productName
 * @param {HTMLButtonElement} card.button 
 */
function showMoreText(card) {
    card.img.style.display = 'none';
    const text = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.';
    card.productName.insertAdjacentHTML('afterend', `<div class="desc">${text}</div>`);
    card.button.innerText = 'Отмена';
}

/* 
Подгрузка постов
*/
let scrollCheck = document.querySelector('.scrollCheck');

/**
 * Инициализация. При открытии страницы вставляем несколько постов
 * на страницу 
 */
function init() {
    if (window.innerHeight === document.body.offsetHeight) {
        insertPosts();
        init();
    }
}
init();

document.addEventListener('scroll', function(event) {
    if (scrollCheck.getBoundingClientRect().top <= window.innerHeight) {
        insertPosts();
    }
});

/**
 * Функция вставляет несколько постов на страницу.
 */
function insertPosts() {
    let postsMarkup = '';
    for (let i = 0; i < 3; i++) {
        postsMarkup += getPostMarkup(i);
    }
    scrollCheck.insertAdjacentHTML('beforebegin', postsMarkup);
}

/**
 * Функция возвращает html-разметку для одного поста, который будет
 * вставляться на страницу.
 * @param {number} counter число, для того, чтобы прибавить его ко времени unix.
 * @returns {string} html-разметка одного поста
 */
function getPostMarkup(counter) {
    let num = new Date().getTime() + counter;
    return `<div class="post">
        <img src="https://picsum.photos/200/300?random=${num}">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sapiente suscipit aut? Veniam perspiciatis esse nesciunt ipsum numquam harum velit cumque libero provident voluptatibus iste, alias minus mollitia magni beatae dolor sunt accusantium quidem ipsa exercitationem repellendus reiciendis eaque? Iusto veritatis harum illo tenetur quam explicabo temporibus eum odit, reprehenderit unde maxime sequi incidunt atque beatae accusamus vero officiis dignissimos quasi libero ex ducimus labore asperiores iure. Unde id pariatur eius! Reiciendis similique aperiam quo consequuntur explicabo, enim, reprehenderit aspernatur, vel magni dolor voluptatem maiores quis quam odit deserunt eaque nemo autem optio? Reprehenderit cupiditate nisi nostrum exercitationem adipisci, repudiandae odio ab temporibus dolores, sunt repellat inventore ad fugiat praesentium debitis ipsam deleniti eius eligendi, nobis delectus doloremque mollitia? Quisquam sapiente similique officia officiis laudantium deserunt accusantium alias perspiciatis dolore illum. Rem blanditiis, optio exercitationem ipsam hic laudantium accusamus officiis iste sequi totam ullam, quam sunt eos a commodi modi excepturi! Ex earum deserunt possimus hic inventore sint impedit numquam veritatis harum tempore aut, velit quae maxime aliquid optio consequuntur quam dignissimos explicabo nam fugit temporibus iste aspernatur quisquam. In fugiat aut qui eaque? Aliquam consectetur minus ipsum numquam. Rerum illum illo sit repellat expedita doloribus excepturi nobis nihil! Ratione asperiores reprehenderit velit natus, sunt est, non suscipit impedit culpa dolore molestiae commodi. Dolorem reprehenderit eius, hic similique vel ullam eum eveniet asperiores aspernatur dicta neque nostrum nam quo! Dolorum fugit nobis id cum laborum magnam. Qui dolor, consectetur provident et ea quae dolore necessitatibus assumenda beatae hic odit molestias saepe mollitia! Suscipit quae molestias iure at laboriosam, similique necessitatibus ipsam dolores perspiciatis! Soluta atque vero at, sit fugiat vitae nulla sapiente accusantium, quas maxime nesciunt tempora sed reprehenderit ut. Illum, tenetur ipsam corporis reiciendis similique harum sequi quas voluptate tempore, perferendis dolore, suscipit est incidunt expedita rerum quo. Consectetur ab placeat libero tempora. Beatae soluta nihil dolore? Laboriosam itaque iste hic modi, natus adipisci totam porro voluptatibus asperiores amet consequatur quidem quasi maxime repellat error delectus sapiente. Repellendus, totam, illo rerum non enim assumenda corporis fuga molestias quibusdam recusandae a amet accusantium at, velit adipisci quas mollitia eligendi alias est voluptatum temporibus beatae molestiae? Dolores pariatur quisquam excepturi hic dignissimos illum voluptas, asperiores deserunt quos a quod culpa autem nemo veniam molestiae maiores fuga provident quam quibusdam tenetur repellat necessitatibus deleniti. Earum itaque similique magni suscipit voluptatum, soluta voluptate ratione quis vero nesciunt pariatur perferendis, odit quaerat, doloribus quia.
    </div>`;
}

/* 
Шахматная доска 
*/
let app = {
    config: {
        rows: [8, 7, 6, 5, 4, 3, 2, 1],
        cols: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    },

    run() {
        //генерируем доску
        let board = this.generateBoard();
        //добавляем доску в body
        document.body.innerHTML = board;
        //помещаем на доску все фигуры кроме пешек
        this.insertFiguresOnDesk();
        //добавляем пешки
        this.insertPawns();
        //добавляем колонку с номерами строк
        this.insertRowsNumbers();
        //добавляем строку с названиями колонок
        this.insertColsChars();
    },

    /**
     * Метод вставляет пешки на доску.
     */
    insertPawns() {
        let whitePawnsRow = document.querySelectorAll('tr:nth-child(7) td');
        for (let i = 0; i < whitePawnsRow.length; i++) {
            whitePawnsRow[i].innerHTML = this.getFigure('pawn', 'whiteFigure');
        }

        let blackPawnsRow = document.querySelectorAll('tr:nth-child(2) td');
        for (let i = 0; i < blackPawnsRow.length; i++) {
            blackPawnsRow[i].innerHTML = this.getFigure('pawn', 'blackFigure');
        }
    },

    /**
     * Метод вставляет на доску все фигуры, кроме пешек.
     */
    insertFiguresOnDesk() {
        for (let i = 0; i < positions.length; i++) {
            let cell = document.querySelector(`[data-rownum="${positions[i].coordRow}"][data-colchar="${positions[i].coordCol}"]`);
            let figure = this.getFigure(positions[i].figure, positions[i].color+"Figure");
            cell.innerHTML = figure;   
        }
    },

    /**
     * Метод возвращает тег i в виде строки, с подставленным именем
     * фигуры и классом, управляющим цветом фигуры.
     * @param {string} name название фигуры, возможные значения rook, knight, bishop, queen, king, pawn.
     * @param {string} colorClass цвет фигуры, м.б. "whiteFigure", "blackFigure".
     * @returns {string} 
     */
    getFigure(name, colorClass) {
        return `<i class="fas fa-chess-${name} ${colorClass}"></i>`;
    },

    /**
     * Метод генерирует игровое поле 8 на 8.
     * @returns {string} html разметка в виде строки.
     */
    generateBoard() {
        let board = "";
        let rowStartWithColor = 'white';
        for (let i = 0; i < this.config.rows.length; i++) {
            let row = "";
            if (rowStartWithColor == 'white') {
                row = this.generateRow(rowStartWithColor, this.config.rows[i]);
                rowStartWithColor = 'black';
            } else {
                row = this.generateRow(rowStartWithColor, this.config.rows[i]);
                rowStartWithColor = 'white';
            }
            board += row;
        }
        return `<table>${board}</table>`;
    },

    /**
     * Метод генерирует тег tr (строку игровой доски) с закрашенными тегами
     * td (ячейкам).
     * @param {string} startWithColor с какого цвета строка начинается от левого края,
     * м.б. "white", "black".
     * @param {number} rowNum номер строки от 8 до 1, т.к. шахматная доска формируется
     * сверху вниз, поэтому номер начинается с 8.
     * @returns {string} html-разметка, тег tr с оформленными внутри тегами td.
     */
    generateRow(startWithColor, rowNum) {
        let currentColorClass = startWithColor;
        let row = "";
        for (let i = 0; i < this.config.cols.length; i++) {
            let field = "";
            if (currentColorClass === 'white') {
                field = this.generateField('white', rowNum, this.config.cols[i]);
                currentColorClass = 'blackField';
            } else {
                field = this.generateField('black', rowNum, this.config.cols[i]);
                currentColorClass = 'white';
            }
            row += field;
        }
        return `<tr>${row}</tr>`;
    },

    /**
     * Метод генерирует ячейку (тег td) с нужным классом цвета
     * и координатами на поле.
     * @param {string} color класс цвета ячейки, м.б. "white", "black".
     * @param {number} rowNum номер строки игровой доски.
     * @param {string} colChar буква колонки игровой доски.
     * @returns {string} html-разметка с заполненными атрибутами координат и классом цвета.
     */
    generateField(color, rowNum, colChar) {
        return `<td data-rownum="${rowNum}" data-colchar="${colChar}" class="${color}"></td>`;
    },

    /**
     * Метод вставляет на существующую доску колонку 
     * слева, с указанием номера строки.
     */
    insertRowsNumbers() {
        let trs = document.querySelectorAll('tr');
        for (let i = 0; i < trs.length; i++) {
            let td = document.createElement('td');
            td.innerText = this.config.rows[i];
            trs[i].insertAdjacentElement("afterbegin", td);
        }
    },

    /**
     * Метод создает строку (tr) с названиями колонок в виде букв,
     * а также в начале вставляет пустую ячейку, которая идет под
     * цифрами.
     */
    insertColsChars() {
        let tr = document.createElement('tr');
        tr.innerHTML += '<td></td>';
        for (let i = 0; i < this.config.cols.length; i++) {
            tr.innerHTML += `<td>${this.config.cols[i]}</td>`;
        }
        let tbody = document.querySelector('tbody');
        tbody.insertAdjacentElement("beforeend", tr);
    },
}

app.run();