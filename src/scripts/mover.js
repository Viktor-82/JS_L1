let mover = {

    /**
     * Метод проверяет существование ячейки куда можно перейти.
     * @param {{x: number, y: number}} nextPoint координаты ячейки 
     * @returns {boolean} если ячейка существует true, иначе false
     */
    canPlayerMakeStep(nextPoint) {
        return renderer.getSquare(nextPoint) !== null;
    },

    /**
     * Метод выполняет перемещение игрока по полю.
     * @param {KeyboardEvent} event объект события нажатия клавиши.
     * @see https://mzl.la/2DX0Mdp 
     */
    makeStep(event) {
        let newPosition = this.getNewPosition(event);      
        /* Проверка нет ли попытки переместить игрока туда где он уже стоит 
        проверяем позицию player и новую позицию, если позиции равные сработает
        return и метод не будет выполнятся*/
        if (this.arePositionsEqual(player, newPosition)) {
            return;
        }    
        if (!this.canPlayerMakeStep(newPosition)) {
            return;
        }           
        renderer.clearUserPosition();// Oчищаем текущую позицию
        player.changePosition(newPosition);// Перемещаем на новую позицию
        renderer.renderUserPosiion(newPosition);// Рисуем новую позицию
    },

    /**
     * В зависимости от того какую стрелку нажал пользователь метод возвращает
     * координаты новой ячейки, либо если туда нельзя сделать шаг, то координаты
     * существующей ячейки.
     * @param {KeyboardEvent} event объект события нажатия клавиши.
     * @see https://mzl.la/2DX0Mdp 
     * @returns {{x: number, y: number}}
     */
    getNewPosition(event) {
        switch (event.key) { // получаем код клавиши на которую было нажатие
            case "ArrowUp":
    /* Возвращаем объект с новыми координатами*/
                return {
                    x: player.x,
                    y: player.y -1 // вычитаем из текущего положения 1
                    };
            case "ArrowDown":
                return {x: player.x, y: player.y + 1};
            case "ArrowLeft":
                return {x: player.x - 1, y: player.y};
            case "ArrowRight":
                return {x: player.x + 1, y: player.y};
            default:
                return {x: player.x, y: player.y};
        }
    },

    /**
     * Методо проверяет совпадают ли координаты двух позиций.
     * @param {{x: number, y: number}} curPos текущая позиция 
     * @param {{x: number, y: number}} newPos новая позиция 
     * @returns {boolean} если совпадают true, иначе false
     */
    arePositionsEqual(curPos, newPos) {
        return curPos.x === newPos.x && curPos.y == newPos.y;
    }
};