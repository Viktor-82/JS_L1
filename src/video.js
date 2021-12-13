'use strict';

/* Получаем элементы страницы */
const video = document.querySelector('video');
const playBtn = document.querySelector('.fa-play');
const pauseBtn = document.querySelector('.fa-pause');
const volume = document.querySelector('.volume');
const timing = document.querySelector('.timing');
const currentTimeEl = document.querySelector('.currentTime');

/* Для хранения идентификатора воспроизведения */
let progressIdentifier = null;
let wasVideoPlaying = false;

/* Делаем длину полосы прокрутки такой же как длина видео */
window.addEventListener('load', function() {
    timing.min = 0;
    timing.max = video.duration;
});

pauseBtn.addEventListener('click', function() {
    if (!video.paused) {
        video.pause();
        clearInterval(progressIdentifier);       
    }
});

playBtn.addEventListener('click', function() {
    if (video.paused) {
        video.play();
        progressIdentifier = setInterval(changeProgress, 100); // вызов функции через 100 милисекунд
    }
});

/* Отслеживаем перемещение ползунка вручную */
timing.addEventListener('change', function(event) {
    video.currentTime = timing.value;// значение из timing пишем во время видео (и видео встает на это время)
    if (wasVideoPlaying) {
        video.play(); // если видео воспроизводилось включаем его заново
        progressIdentifier = setInterval(changeProgress, 100);
    }
});

/* Чтобы менялось видео когда когда перемещаем ползунок */
timing.addEventListener('input', function() {
    console.log(timing.value);
    video.currentTime = timing.value;
    currentTimeEl.innerText = timing.value;
});

/* Для управления ползунком мыши */
timing.addEventListener('mousedown', function(event) {
    clearInterval(progressIdentifier);// прекращаем выполнение changeProgress()
    wasVideoPlaying = !video.paused;// переписываем значение переменной на true
    if (wasVideoPlaying) {
        video.pause();// если видео воспроизводилось ставим на паузу
    }
});

/* Отслеживаем текущее время и применяем значение для ползунка полосы прокрутки */
function changeProgress() {
    timing.value = video.currentTime;// берем время из объекта видео пишем в .timing
    currentTimeEl.innerText = video.currentTime;// передаем значение времени video в текст .currentTime
}

/* Меняем громкость видео */
volume.addEventListener('change', function() {
    video.volume = volume.value;
});