'use strict';

/* const { reset } = require("browser-sync"); */

/** @var {NodeList<HTMLDivElement>} products */
const products = document.querySelectorAll('.product');

/** @var {HTMLInputElement} fromInput */
const fromInput = document.getElementById('from');
fromInput.addEventListener('change', changedPriceHandler);

/** @var {HTMLInputElement} toInput */
const toInput = document.getElementById('to');
toInput.addEventListener('change', changedPriceHandler);

/** Обработчик события на изменение полей ввода */
function changedPriceHandler() {
    /* для проверки в режиме отладки console.log('changed')*/
    const fromPrice = fromInput.value;
    const toPrice = toInput.value;
    if (fromPrice === "" && toPrice === "") {
        reset();
    } else if (fromPrice !== "" && toPrice === "") {
        showProductWithFromPrice();
    } else if (fromPrice === "" && toPrice !== "") {
        showProductWithToPrice();
    } else if (fromPrice !== "" && toPrice !== "") {
        showProductWithBothPrices();
    }
}

/** Показывает все скрытые элементы */
function reset() {
    products.forEach(function(product) {
        if (isProductHidden(product)) {
            showProduct(product);
        }
    });
}

/** Показывает продукты с диапазоном цен "от" */
function showProductWithFromPrice() {
    const fromPrice = Number(fromInput.value);
    products.forEach(function(product) {
        const productPrice = Number(product.querySelector('.price').textContent.trim());
        if (productPrice < fromPrice) {
            hideProduct(product);
        } else { 
            showProduct(product);
        }
    });
}

/** Показывает продукты с диапазоном цен "до" */
function showProductWithToPrice() {
    const toPrice = Number(toInput.value);
    products.forEach(function(product) {
        const productPrice = Number(product.querySelector('.price').textContent.trim());
        if (productPrice < toPrice) {
            showProduct(product);
        } else { 
            hideProduct(product);
        }
    });
}

/** Показывает продукты "от" "до" */
function showProductWithBothPrices() {
    const fromPrice = Number(fromInput.value);
    const toPrice = Number(toInput.value);
    if (fromPrice > toPrice) {
        alert("Цена ОТ не может быть больше цены ДО");
        return;// предотвращает дальнейшее выполнение
    }
    products.forEach(function(product) {
        const productPrice = Number(product.querySelector('.price').textContent.trim());
        if (productPrice >= fromPrice && productPrice <= toPrice) {
            showProduct(product);
        } else { 
            hideProduct(product);
        }
    });
}

/** @param {HTMLDivElement} product */
function hideProduct(product) {
    product.style.opacity = '0.3';
    /* или 
    product.style.display = none; */
}

/** @param {HTMLDivElement} product */
function showProduct(product) {
    product.style.opacity = '1';
    /* или 
    product.style.display = block; */
}

/** @param {HTMLDivElement} product */
function isProductHidden(product) {
    return product.style.opacity === '0.3';
}