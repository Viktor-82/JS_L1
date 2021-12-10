'use strict';

/* Получаем все элементы */
const noMessagesEl = document.querySelector('.noMessages');
const messagesEl = document.querySelector('.messages');
const textareaEl = document.querySelector('textarea');
const nameInputEl = document.querySelector('input');
const errorTextareaEl = document.querySelector('.errorTextarea');
const errorInputEl = document.querySelector('.errorInput');
const sendBtn = document.querySelector('.send');
const clearBtn = document.querySelector('.clear');
/* Класс будет использован для вставки сообщения на страницу */
const messageElClassName = 'message';

/* Обработчик события на кнопку "отправить" */
sendBtn.addEventListener('click', function() {
    /* Проверка поля ввода сообщения */
    if (textareaEl.value === "") {
        errorTextareaEl.textContent = "Сообщение не может быть пустым";
        return;
    } else {
        errorTextareaEl.textContent = "";
    }
    if (nameInputEl.value === "") {
        /* Проверка поля ввода имени */
        errorInputEl.textContent = "Поле имя не может быть пустым";
        return;
    } else {
        errorInputEl.textContent = "";
    }
    hideNoMassagesText();

    /* Вставляем сообщение на страницу */
    const messageMarkup = getMessageMarkup(textareaEl.value, nameInputEl.value, getTime());
    /* Метод .insertAdjacentHTML() вставляет полученные узлы в DOM дерево в указанную позицию*/
    messagesEl.insertAdjacentHTML('beforeend', messageMarkup);
});

/* Функция вставляет разметку на страницу */
function getMessageMarkup(text, author, time) {
    return `<div class="${messageElClassName}">
    <div>Сообщение: ${text}</div>
    <div>Автор: ${author}</div>
    <div>Время: ${time}</div>
    </div>`;
}

/* Функция возвращает текущее время */
function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${hours}:${minutes}:${seconds}`;
}

/* Функция скрывает span "сообщений нет" */
function hideNoMassagesText() {
    noMessagesEl.style.display = 'none';
}

/* Очищаем поле сообщений */
function showNoMessageText() {
    noMessagesEl.style.display = 'block';
}

clearBtn.addEventListener('click', function() {
    showNoMessageText();
    textareaEl.value = "";
    nameInputEl.value = "";
    /* Берем все элементы с классом .message перебираем их forEach 
    и удаляем методом .remove() */
    const messagesElems = document.querySelectorAll("."+messageElClassName);
    messagesElems.forEach(function(message) {
        message.remove();
    });
});
