'use strict';

const paragraph = document.getElementById('paragraph');
const buttonOne = document.getElementById('one');
const buttonTwo = document.getElementById('two');
const buttonThree = document.getElementById('three');

buttonOne.onclick = onButtonClickOne;

function onButtonClickOne() {
    buttonOne.innerText = (`Show text`);
    paragraph.classList.toggle('disappearance');
    buttonOne.classList.toggle('margin');
    buttonTwo.classList.toggle('disappearance');
    buttonThree.classList.toggle('disappearance');
}

buttonTwo.onclick = onButtonClickTwo;

function onButtonClickTwo() {
    paragraph.classList.toggle('increase');
}

buttonThree.onclick = onButtonClickThree;

function onButtonClickThree() {
    paragraph.classList.toggle('decrease');
}