'use strict';

// получаем элементы формы и кнопки
const loginInput = document.getElementById('login');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('buttonPassword');


//тест кнопки
loginButton.onclick = function () {
    console.log('test btn');
};

// функция для проверки, можно ли разблокировать кнопку логина
function checkLoginButtonEnabled() {
    return loginInput.value.trim() !== '' && passwordInput.value.trim() !== '';
}

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
    const errorContainer = document.querySelector('.error-container');
    const errorParagraph = document.createElement('p');
    errorParagraph.innerText = message;
    errorContainer.appendChild(errorParagraph);
}

// функция для очистки всех ошибок на странице
function clearErrors() {
    const errorContainer = document.querySelector('.error-container');
    errorContainer.innerHTML = '';
}

// функция для отображения списка пользователей при успешном логине
function showSuccessMessage() {
    hideForm(); // скрываем форму логина после успешного логина
    showContainer(); // показываем контейнер с пользователями
    fetchUsers(renderUserList); // загружаем и отображаем список пользователей
}

// функция для показа контейнера с пользователями
function showContainer() {
    const container = document.querySelector('.user-list');
    container.style.display = 'block';
    const btn = document.querySelector('.btn-list');
    btn.style.display = 'block';
}

// функция для скрытия контейнера
function hideContainer() {
    const container = document.querySelector('.user-list');
    container.style.display = 'none';
    const btn = document.querySelector('.btn-list');
    btn.style.display = 'none';
}

// скрываем контейнер изначально
hideContainer();

// функция для скрытия формы логина
function hideForm() {
    const loginForm = document.querySelector('.container');
    loginForm.style.display = 'none';
}

// функция для валидации email
function validateEmail(email) {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
}

// функция - обработчик события отправки формы
function handleFormSubmit(event) {
    event.preventDefault(); // предотвращаем отправку формы

    // создаем объект с данными пользователя
    let userData = {
        email: loginInput.value,
        password: passwordInput.value
    };

    // вводим значение ввода пользователя
    const loginValue = loginInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    clearErrors(); // очищаем сообщения об ошибках

    // валидируем входные данные от пользователя
    if (loginValue === '') {
        console.warn('Please enter a valid email');
        return;
    }

    if (!validateEmail(loginValue)) {
        console.warn('Invalid email format');
        return;
    }

    if (passwordValue === '') {
        console.warn('Please enter a password');
        return;
    }

    if (passwordValue.length < 6) {
        console.warn('Password should be at least 6 characters long');
        passwordInput.value = '';
        return;
    }

    const registeredUser = {
        mail: 'eve.holt@reqres.in',
        password: 'pistol',
        avatar: '',
    };


    if (registeredUser.mail === loginValue && registeredUser.password === passwordValue) {
        showSuccessMessage();

    } else {
        addError('Invalid login or password');
        passwordInput.value = '';
        hideContainer(); // скрываем контейнер в случае неверного логина или пароля

        // показываем форму логина в случае неверного логина или пароля
        const loginForm = document.querySelector('.form-input-login');
        loginForm.style.display = 'block';
    }
}



// получаем содержимое шаблона карточки из элемента
const cardTemplate = document.getElementById('card-template').innerHTML;

const userList = document.getElementById('user-list');

const xhr = new XMLHttpRequest();

// устанавливаем обработчик события отправки формы
const loginForm = document.querySelector('.form-input-login');
loginForm.addEventListener('submit', handleFormSubmit);

function prepareUserCard(user, cardTemplate) {
    // присваивание переменной currentUserList значения шаблона карточки
    let currentUserList = cardTemplate;
    //перебор всех ключей объекта user с помощью метода forEach
    Object.keys(user).forEach(key  => {
        // замена всех вхождений '{{key}}' в шаблоне карточки на соответствующие значения из объекта user
        currentUserList = currentUserList.replaceAll(`{{${key}}}`, user[key]);
    });
    return currentUserList;
}

// создаем функцию для отображения списка пользователей на странице
function renderUserList(users) {
    // очищаем содержимое элемента, где будет отображаться список пользователей
    userList.innerHTML = '';

    // перебираем массив пользователей и создаем для каждого пользователя карточку
    users.forEach((user) => {
        // создаем элемент div для карточки пользователя
        const userCard = document.createElement('div');
        userCard.className = 'user-card';

        // создаем HTML-разметку карточки пользователя
        const cardContent = `
      <p class="user-item">${user.first_name} ${user.last_name} </p>
      <p class="user-item">${user.email}</p>
      <p class="user-item user-img"><img src="${user.avatar}" alt="${user.name}"/></p>
      <div class="user-actions">
        <button class="button edit-button" data-user-id="${user.id}">Edit</button>
        <button class="button delete-button" data-user-id="${user.id}">Delete</button>
      </div>
    `;

        // устанавливаем HTML-разметку внутрь элемента карточки пользователя
        userCard.innerHTML = cardContent;

        // добавляем обработчики событий для кнопок редактирования и удаления
        const editButton = userCard.querySelector('.edit-button');
        const deleteButton = userCard.querySelector('.delete-button');

        editButton.addEventListener('click', () => {
            editUser(user.id);
        });

        deleteButton.addEventListener('click', () => {
            deleteUser(user.id);
        });

        // добавляем карточку пользователя в список пользователей
        userList.appendChild(userCard);
    });
}

//создаем функцию, в которой будет выполняться сетевой запрос для получения данных о пользователях
function fetchUsers (callback)  {
    // открываем асинхронное GET-соединение с указанным URL
    xhr.open('GET', 'https://reqres.in/api/users?page=1' , true);

    // устанавливаем заголовок Content-type для указания формата данных
    xhr.setRequestHeader("Content-type", "application/json");

    //обработчик собітия при получении ответа на запрос
    xhr.onload = function (e){

        //обработка ответа сервера с отловом ошибки
        try {
            // пытаемся разобрать ответ сервера в формате JSON
            const response = JSON.parse(e.target.response);


            //вызов функции создания карточки пользователя
            callback(response.data);

        } catch (error)   {
            console.warn('Error parsing JSON');
        }
    };


     // Обработчик события onerror - вызывается при ошибке запроса
    xhr.onerror = function (e) {
        console.log(e)
    };
    // oтправляем сетевой запрос
    xhr.send();

}
// самовызывающаяся функция
(() => {
    // вызов функции fetchUsers с колбэком, который будет вызван после получения списка пользователей
    fetchUsers((users) => {
        // вызов функции renderUserList для отображения списка пользователей
        renderUserList(users);

    });
})();


let currentPage = 1;
// обработчик события клика на кнопку вперед
document.getElementById('next-button').addEventListener('click', () => {

    // увеличение значения параметра page
    currentPage += 1;

    // отправка запроса на сервер с новым значением параметра page
    fetchUsersButton(currentPage);
});

// обработчик события клика на кнопку назад
document.getElementById('prev-button').addEventListener('click', () => {

    // уменьшение значения параметра page
    currentPage -= 1;

    // отправка запроса на сервер с новым значением параметра page
    fetchUsersButton(currentPage);
});


// создаем функцию для получения данных о пользователях с сервера при нажатии на кнопки
function fetchUsersButton(page) {
    // составляем URL запроса с учетом значения параметра page
    const url = `https://reqres.in/api/users?page=${page}`;

    // открываем асинхронное GET-соединение с указанным URL
    xhr.open('GET', url, true);

    // устанавливаем заголовок Content-type для указания формата данных
    xhr.setRequestHeader('Content-type', 'application/json');

    // обработчик события onload, вызывается при получении ответа на запрос
    xhr.onload = function(e) {

        try {
            const response = JSON.parse(e.target.response);

            renderUserList(response.data); // обновляем список пользователей на странице с помощью візова функции

        } catch (error) {
            console.warn('Error parsing JSON');
        }
    };

    xhr.onerror = function(e) {
        console.log(e);
    };

    xhr.send();


}

// создаем функцию для редактирования пользователя
function editUser(userId, updatedUserData) {
    // составляем url запроса для редактирования конкретного пользователя
    const url = `https://reqres.in/api/users/${userId}`;

    // открываем асинхронное PUT-соединение с указанным URL
    xhr.open('PUT', url, true);

    // устанавливаем заголовок Content-type для указания формата данных
    xhr.setRequestHeader('Content-type', 'application/json');

    // обработчик события вызывается при получении ответа на запрос
    xhr.onload = function (e) {
        try {
            const response = JSON.parse(e.target.responseText);
            console.log('User updated:', response);
            // обработка ответа сервера после успешного обновления пользователя

        } catch (error) {
            console.warn('Error parsing JSON');
        }
    };
    // обработка ошибки
    xhr.onerror = function (e) {
        console.log(e);
    };

    // Отправляем PUT-запрос на сервер с обновленными данными пользователя
    xhr.send(JSON.stringify(updatedUserData));
}

// создаем функцию для удаления пользователя
function deleteUser(userId) {
    // составляем URL запроса для удаления конкретного пользователя
    const url = `https://reqres.in/api/users/${userId}`;

    // открываем асинхронное DELETE-соединение с указанным URL
    xhr.open('DELETE', url, true);

    // устанавливаем заголовок Content-type для указания формата данных
    xhr.setRequestHeader('Content-type', 'application/json');

    // обработчик события onload, вызывается при получении ответа на запрос
    xhr.onload = function(e) {
        try {
            const response = JSON.parse(e.target.responseText);
            console.log('User deleted:', response);
            // обработка ответа сервера после успешного удаления пользователя

        } catch (error) {
            console.warn('Error parsing JSON');
        }
    };

    // обработчик события onerror, вызывается при ошибке запроса
    xhr.onerror = function(e) {
        console.log(e);
    };

    // отправляем DELETE-запрос на сервер
    xhr.send();
}
