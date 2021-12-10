'use strict';

const inputs = document.querySelectorAll('input');
const button = document.querySelector('button');

button.addEventListener('click', checkRadios);

function checkRadios() {
    inputs.forEach(function(input) {
        console.log(input.checked)// true или false
    })
}