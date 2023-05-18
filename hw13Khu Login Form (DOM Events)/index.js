'use strict';

const registeredUser = [
    'name: User',
    'mail: admin@gmail.com',
    'password: password123',
];

const loginInput = document.getElementById('login');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('buttonPassword');
const loginForm = document.querySelector('.form-input-login');
const passwordForm = document.querySelector('.form-input-password');
const errorContainer = document.createElement('div');
const wrapper = document.querySelector('.wrapper');
errorContainer.classList.add('error-container');
passwordInput.after(errorContainer);

loginButton.onclick = function () { console.log('test btn')}

// функция для проверки, можно ли разблокировать кнопку логина
function checkLoginButtonEnabled() {
    return loginInput.value.trim() !== '' && passwordInput.value.trim() !== '';
}
    console.log(checkLoginButtonEnabled() )



// устанавливаем обработчики событий на инпуты, чтобы блокировать/разблокировать кнопку
loginInput.addEventListener('input', function () {
    loginButton.disabled = !checkLoginButtonEnabled();
    console.log('loginInput event listener:', loginInput.addEventListener);
});

passwordInput.addEventListener('input', function () {
    loginButton.disabled = !checkLoginButtonEnabled();
    console.log('passwordInput event listener:', passwordInput.addEventListener);
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

// функция - обработчик события отправки формы
function handleFormSubmit(event) {
    event.preventDefault(); // предотвращаем отправку формы

    clearErrors(); // очищаем сообщения об ошибках

    const loginValue = loginInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if (!validateEmail(loginValue)) {
        addError('Invalid email format');
        return;
    }

    if (passwordValue.length < 6) {
        addError('Password should be at least 6 characters long');
        passwordInput.value = '';
        return;
    }

    const user = registeredUser.find((userData) => {
        const [, email, password] = userData.split(':');
        return email.trim() === loginValue && password.trim() === passwordValue;
    });

    if (user) {
        showSuccessMessage();
    } else {
        addError('Invalid login or password');
        passwordInput.value = '';
    }
}

// функция для валидации формата email
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// функция для показа сообщения об успешном логине
function showSuccessMessage() {
    wrapper.innerHTML = '<p>Login successful!</p>';
}

// устанавливаем обработчик события отправки формы
loginForm.addEventListener('submit', handleFormSubmit);



