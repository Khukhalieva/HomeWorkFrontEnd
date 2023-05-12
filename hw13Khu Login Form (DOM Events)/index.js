'use strict'

const registeredUser = [
    'name: User',
    'mail:admin@gmail.com',
    'password: password123',
];

const loginInput = document.getElementById('login');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('buttonPassword');
const loginForm = document.querySelector('.form-input-login');
const passwordForm = document.querySelector('.form-input-password');
const wrapper = document.querySelector('.wrapper');
let errorContainer;

// функция для проверки, можно ли разблокировать кнопку логина
function checkLoginButtonEnabled() {
    return loginInput.value.trim() !== '' && passwordInput.value.trim() !== '';
}

// устанавливаем обработчики событий на инпуты, чтобы блокировать/разблокировать кнопку логина
loginInput.addEventListener('input', function() {
    loginButton.disabled = !checkLoginButtonEnabled();
});

passwordInput.addEventListener('input', function() {
    loginButton.disabled = !checkLoginButtonEnabled();
});


// функция для добавления ошибки на страницу
function addError(message) {

    const errorParagraph = document.createElement('p');
    errorParagraph.innerText = message;
    errorContainer.appendChild(errorParagraph);
}

// функция для очистки всех ошибок на странице
function clearErrors() {
    errorContainer.innerHTML = '';
}
