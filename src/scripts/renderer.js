let renderer = {
    /** Метод рисует игровое поле и игрока на нем */
    renderBoard() {
        let result = this.generateBoard();
        /* Вставляем сгенерированную разметку на страницу */
        document.body.insertAdjacentHTML('afterbegin', result);
        /* Рисуем положение игрока на игровом поле */
        this.renderUserPosiion(player);
    },

    /**
     * Метод генерирует игровое поле на основании размеров в конфиге.
     * @returns {string} сгенерированный html-код таблицы (игрового поля)
     */
    generateBoard() {
        let board = '';
        /* Два вложенных цикла будут генерировать один строки
        другой колонки */
        for (let y = 0; y < config.rowsCount; y++) {
            /* Открываем текущую строку */
            board += '<tr>';
            for (let x = 0; x < config.colsCount; x++) {
                /* Прописываем ячейки с кооринатами по x & y */
                board += `<td data-x="${x}" data-y="${y}"></td>`;
            }
            /* Закрываем текущую строку */
            board += '</tr>';
        }
        /* После генерации строк и ячеек возвращаем готовую таблицу
        и вставляем в нее сгенерированное игровое поле */
        return `<table><tdbody>${board}</tdbody></table>`;
    },

    /**
     * Если ячейка с переданными координатами есть, то возвращается ее объект, 
     * а иначе null.
     * @param {{x: number, y: number}} position объект с координатами. 
     * @returns {HTMLTableCellElement|null} объект ячейки если есть, в противном случае null.
     */
    getSquare(position) {
        /* Получаем ячейку с координатами по x & y объекта position */
        return document.querySelector(`[data-x="${position.x}"][data-y="${position.y}"]`);
    },

    /**
     * Метод рисует расположение пользователя для указанной координаты.
     * Для этого он добавляет тегу td класс ".user".
     * @param {{x: number, y: number}} position 
     */
    renderUserPosiion(position) {
        let square = this.getSquare(position);// получаем ячейку
        square.classList.add('user');// добавляем ячейке класс user
    },

    /**
     * Метод удаляет пользователя с игрового поля.
     *  У тега td удаляет класс ".user" 
     */
    clearUserPosition() {
        document.querySelector(".user").classList.remove("user");
    }
};