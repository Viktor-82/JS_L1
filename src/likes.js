'use strict';
/* Получаем все теги i */
const likeElems = document.querySelectorAll('i');
/* Перебираем полученный массив из элементов i методом forEach
и назначаем обработку событий на клик */
likeElems.forEach((likeEl) => {
    likeEl.addEventListener('click', addLike);
});
/** Функция проверяет наличие в элементе класса 
 * и меняет классы один на другой в элементе DOM 
 * используя ветвление if else
 * @param {MouseEvent} event */
function addLike(event) {
    let likeEl = event.target;
    /* Проверяем есть ли в элементе класс far. 
    в переменную слева запишется true или false */
    let zeroLikesHeart = likeEl.classList.contains('far');
    if (zeroLikesHeart) {
        likeEl.classList.remove('far');
        likeEl.classList.add('fas');
    } else {
        likeEl.classList.remove('fas');
        likeEl.classList.add('far');
    }
}
