'use strict';

const main = document.querySelector('.main');
const face = document.querySelector('.result');
const select = document.querySelector('.form--select');
const btn = document.querySelector('.form--submit');

function updateMood () {
    const selectedMood = select.value;
    if (selectedMood === 'happy') {
        face.textContent = ':)';
        main.style.backgroundColor = "rgb(158, 226, 158)";
        
    } else if (selectedMood === 'sad') {
        face.textContent = ':(';
        main.style.backgroundColor = "rgb(203, 106, 106)";
    }
}



btn.addEventListener('click', function(ev) {
    ev.preventDefault();
    updateMood();
    
});