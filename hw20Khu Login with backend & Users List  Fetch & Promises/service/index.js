'use strict';

// // получаем элементы формы и кнопки
// const loginInput = document.getElementById('login');
// const passwordInput = document.getElementById('password');
// const loginButton = document.getElementById('buttonPassword');
//
// const xhr = new XMLHttpRequest();
//
//
// // функция для проверки, можно ли разблокировать кнопку логина
// function checkLoginButtonEnabled() {
//     return loginInput.value.trim() !== '' && passwordInput.value.trim() !== '';
// }
//
// // устанавливаем обработчики событий на инпуты, чтобы блокировать/разблокировать кнопку
// loginInput.addEventListener('input', function () {
//     loginButton.disabled = !checkLoginButtonEnabled();
//     console.log('loginInput event listener:', loginInput.addEventListener);
// });
//
// passwordInput.addEventListener('input', function () {
//     loginButton.disabled = !checkLoginButtonEnabled();
//     console.log('passwordInput event listener:', passwordInput.addEventListener);
// });
//
// // функция для добавления ошибки на страницу
// function addError(message) {
//     const errorContainer = document.querySelector('.error-container');
//     const errorParagraph = document.createElement('p');
//     errorParagraph.innerText = message;
//     errorContainer.appendChild(errorParagraph);
// }
//
// // функция для очистки всех ошибок на странице
// function clearErrors() {
//     const errorContainer = document.querySelector('.error-container');
//     errorContainer.innerHTML = '';
// }
//
// // функция для отображения списка пользователей при успешном логине
// function showSuccessMessage(token) {
//     hideForm();
//     showContainer();
//     // проверяем наличие токена
//     if (checkToken()) {
//         //загружаем список пользователя візовом функции
//         fetchUsers(token, renderUserList);
//
//     } else {
//         console.error('Token not found');
//     }
// }
//
// // функция для показа контейнера с пользователями и кнопок
// function showContainer() {
//     const container = document.querySelector('.user-list');
//     container.style.display = 'flex';
//     const btn = document.querySelector('.btn-list');
//     btn.style.display = 'flex';
// }
//
// // функция для скрытия контейнера пользователей
// function hideContainer() {
//     const container = document.querySelector('.user-list');
//     container.style.display = 'none';
//     const btn = document.querySelector('.btn-list');
//     btn.style.display = 'none';
// }
//
// // скрываем контейнер изначально
// hideContainer();
//
//
// // функция для скрытия формы логина
// function hideForm() {
//     const loginForm = document.querySelector('.container');
//     loginForm.style.display = 'none';
// }
//
// // функция для валидации email
// function validateEmail(email) {
//     const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     return emailRegex.test(email);
// }
//
// // функция для отправки формы логина и получения токена
// function sendLoginForm(email, password) {
//     const xhr = new XMLHttpRequest();
//
//     const url = 'https://reqres.in/api/login';
//     xhr.open('POST', url, true);
//     xhr.setRequestHeader('Content-type', 'application/json');
//     xhr.onload = function () {
//         // валидация введенных данных
//         if (!validateEmail(email)) {
//             console.warn('Please enter a valid email address');
//             return;
//         }
//
//         if (password.length < 6) {
//             console.warn('Please enter a password with at least 6 characters');
//             return;
//         }
//
//         if (xhr.status === 200) {
//             // обработка успешного ответа сервера после отправки формы
//             const response = JSON.parse(xhr.responseText);
//             token = response.token;
//
//             // вызов функции showSuccessMessage с полученным токеном
//             showSuccessMessage(token);
//         } else {
//             // обработка ошибки при отправке формы
//             console.error('Failed to submit login form. Status:', xhr.status);
//         }
//     };
//     xhr.onerror = function (e) {
//         console.log(e);
//     };
//
//     const data = {
//         email: email,
//         password: password,
//     };
//
//     xhr.send(JSON.stringify(data));
// }
//
// // функция - обработчик события отправки формы
// function handleFormSubmit(event) {
//     event.preventDefault();
//     // получаем значения из полей ввода
//     const loginInput = document.getElementById('login');
//     const passwordInput = document.getElementById('password');
//
//     const email = loginInput.value.trim();
//     const password = passwordInput.value.trim();
//
//     if (email === '' || password === '') {
//         console.warn('Please enter a valid email and password');
//         return;
//     }
//     getToken(); // вызываем функцию для получения токена
//
//     sendLoginForm(email, password);
// }
//
// // устанавливаем обработчик события отправки формы
// const loginForm = document.querySelector('.form-input-login');
// loginForm.addEventListener('submit', handleFormSubmit);
//
// let token = ''; // объявляем переменную token в глобальной области видимости
//
// // функция проверки наличия токена
// function checkToken() {
//     return token !== '';
// }
//
// //функция для получения положительного токена с сервера
// function getToken() {
//     const xhr = new XMLHttpRequest();
//     //метод запроса и URL для получения токена
//     xhr.open('POST', 'https://reqres.in/api/login', true);
//
//     // устанавливаем заголовок Content-type для указания формата данных
//     xhr.setRequestHeader('Content-type', 'application/json');
//
//     // устанавливаем обработчик события onload, который будет вызван при получении ответа на запрос
//     xhr.onload = function() {
//         if (xhr.status === 200 ) {
//             //ответ сервера успешный, обрабатываем полученный токен
//             const response = JSON.parse(xhr.responseText);
//             token = response.token;
//
//             // вызов функции showSuccessMessage с полученным токеном
//             showSuccessMessage(token);
//         } else {
//             //ошибка при получении токена
//             console.error('Failed to get token. Status:', xhr.status);
//         }
//     };
//     xhr.onerror = function (e) {
//         console.log(e);
//     };
//
// // создаем объект с данными для отправки на сервер
//     const data = {
//         email: 'eve.holt@reqres.in',
//         password: 'pistol',
//     };
//     //отправляем запрос
//     xhr.send(JSON.stringify(data));
// }
//
// // получаем содержимое шаблона карточки из элемента
// const cardTemplate = document.getElementById('card-template').innerHTML;
// const userList = document.getElementById('user-list');
//
//
// // создаем функцию для отображения списка пользователей на странице
// function renderUserList(users) {
//     // очищаем содержимое элемента, где будет отображаться список пользователей
//     userList.innerHTML = '';
//
//     // перебираем массив пользователей и создаем для каждого пользователя карточку
//     users.forEach((user) => {
//         // создаем элемент div для карточки пользователя
//         const userCard = document.createElement('div');
//         userCard.className = 'user-card';
//
//         // создаем HTML-разметку карточки пользователя
//         const cardContent = `
//       <p class="user-item">${user.first_name} ${user.last_name} </p>
//       <p class="user-item">${user.email}</p>
//       <p class="user-item user-img"><img src="${user.avatar}" alt="${user.name}"/></p>
//       <div class="user-actions">
//         <button class="button edit-button" data-user-id="${user.id}">Edit</button>
//         <button class="button delete-button" data-user-id="${user.id}">Delete</button>
//       </div>
//     `;
//         // устанавливаем HTML-разметку внутрь элемента карточки пользователя
//         userCard.innerHTML = cardContent;
//
//         // добавляем обработчики событий для кнопок редактирования и удаления
//         const editButton = userCard.querySelector('.edit-button');
//         const deleteButton = userCard.querySelector('.delete-button');
//         //прослушиваем кнопку редактирования
//         editButton.addEventListener('click', () => {
//             editUser(user.id);
//         });
//
//         deleteButton.addEventListener('click', () => {
//             deleteUser(user.id);
//         });
//
//         // добавляем карточку пользователя в список пользователей
//         userList.appendChild(userCard);
//     });
// }
//
// //создаем функцию, в которой будет выполняться сетевой запрос для получения данных о пользователях
// function fetchUsers (token, callback)  {
//     const xhr = new XMLHttpRequest();
//     const url = 'https://reqres.in/api/users?page=1';
//     // открываем асинхронное GET-соединение с указанным URL
//     xhr.open('GET', url, true);
//
//     // устанавливаем заголовок Content-type для указания формата данных
//     xhr.setRequestHeader('Authorization', `Bearer ${encodeURIComponent(token)}`);
//
//     //обработчик события при получении ответа на запрос
//     xhr.onload = function (e){
//         //обработка ответа сервера с отловом ошибки
//         try {
//             // пытаемся разобрать ответ сервера в формате JSON
//             const response = JSON.parse(xhr.responseText);
//
//             //вызов функции создания карточки пользователя
//             if (typeof callback === 'function') {
//                 callback(response.data);
//             }
//         } catch (error)   {
//             console.warn('Error parsing JSON');
//         }
//     };
//     // обработчик события onerror - вызывается при ошибке запроса
//     xhr.onerror = function (e) {
//         console.log(e)
//     };
//     // отправляем сетевой запрос
//     xhr.send();
// }
//
// let currentPage = 1;
// // обработчик события клика на кнопку вперед
// document.getElementById('next-button').addEventListener('click', () => {
//     // проверяем, если currentPage равно 1, то кнопку "назад" можно включить
//     if (currentPage === 1) {
//         document.getElementById('prev-button').disabled = false;
//     }
//     // увеличение значения параметра page
//     currentPage += 1;
//
//     // отправка запроса на сервер с новым значением параметра page
//     fetchUsersButton(currentPage);
//     // если currentPage больше или равно 2, то кнопку "Вперед" нужно отключить
//     if (currentPage >= 2) {
//         document.getElementById('next-button').disabled = true;
//     }
// });
//
// // обработчик события клика на кнопку назад
// document.getElementById('prev-button').addEventListener('click', () => {
//     // если currentPage равно 2, то кнопку "Вперед" включаем
//     if (currentPage === 2) {
//         document.getElementById('next-button').disabled = false;
//     }
//     // уменьшение значения параметра page
//     currentPage -= 1;
//
//     // отправка запроса на сервер с новым значением параметра page
//     fetchUsersButton(currentPage);
//     // если currentPage равно 1, то кнопку "Назад" отключаем
//     if (currentPage === 1) {
//         document.getElementById('prev-button').disabled = true;
//     }
// });
//
// // создаем функцию для получения данных о пользователях с сервера при нажатии на кнопки
// function fetchUsersButton(page) {
//     const xhr = new XMLHttpRequest();
//     // составляем URL запроса с учетом значения параметра page
//     const url = `https://reqres.in/api/users?page=${page}`;
//
//     // открываем асинхронное GET-соединение с указанным URL
//     xhr.open('GET', url, true);
//
//     // устанавливаем заголовок для указания формата данных
//     xhr.setRequestHeader('Accept', 'application/json');
//
//     // обработчик события onload, вызывается при получении ответа на запрос
//     xhr.onload = function(e) {
//
//         try {
//             const response = JSON.parse(e.target.response);
//
//             renderUserList(response.data); // обновляем список пользователей на странице с помощью візова функции
//
//         } catch (error) {
//             console.warn('Error parsing JSON');
//         }
//     };
//
//     xhr.onerror = function(e) {
//         console.log(e);
//     };
//     xhr.send();
// }
//
// // функция для скрытия формі редактирования пользователей
// function hideEditContainer() {
//     const container = document.getElementById('edit-user-form');
//     container.style.display = 'none';
//     const btn = document.getElementById('btn-edit');
//     btn.style.display = 'none';
// }
//
// // скрываем контейнер редактирования изначально
// hideEditContainer()
//
// function handleEditButtonClick(event) {
//     const userCard = event.target.closest('.user-card');
//     if (!userCard) return;
//
//     const userId = userCard.dataset.userId;
//     const firstName = userCard.querySelector('.user-firstname').textContent;
//     const lastName = userCard.querySelector('.user-lastname').textContent;
//     const email = userCard.querySelector('.user-email').textContent;
//
//     // создаем объект с обновленными данными пользователя
//     let updatedUserData = {
//         // данные пользователя для обновления
//         first_name: '',
//         last_name: '',
//         email: '',
//
//     };
//
//     //вызываем функцию для редактирования пользователя
//     editUser(userId, updatedUserData);
// }
//
// //обработчик события edit
// const editButtons = document.querySelectorAll('.btn-edit');
// editButtons.forEach(button => {
//     button.addEventListener('click', handleEditButtonClick);
// });
//
//
// function fetchUserById(userId, successCallback, errorCallback) {
//     const xhr = new XMLHttpRequest();
//     const url = `https://reqres.in/api/users/${userId}`;
//
//     xhr.open('GET', url, true);
//     xhr.setRequestHeader('Accept', 'application/json');
//     xhr.onload = function() {
//         if (xhr.status === 200) {
//             const response = JSON.parse(xhr.responseText);
//             successCallback(response.data);
//         } else {
//             errorCallback('Failed to fetch user data. Status: ' + xhr.status);
//         }
//     };
//     xhr.onerror = function(e) {
//         errorCallback('Failed to fetch user data. Error: ' + e);
//     };
//     xhr.send();
// }
//
//
// function editUser(userId) {
//     fetchUserById(
//         userId,
//         function(user) {
//             if (!user) {
//                 console.error('User not found');
//                 return;
//             }
//
//             const editFormContainer = document.getElementById('edit-user-form');
//             editFormContainer.style.display = 'block';
//
//             const editForm = document.getElementById('edit-form');
//             editForm.name.value = user.first_name;
//             editForm.surname.value = user.last_name;
//             editForm.email.value = user.email;
//
//             editForm.addEventListener('submit', function(event) {
//                 event.preventDefault();
//
//                 const updatedName = editForm.name.value.trim();
//                 const updatedSurname = editForm.surname.value.trim();
//                 const updatedEmail = editForm.email.value.trim();
//
//                 const updatedUserData = {
//                     id: userId,
//                     first_name: updatedName,
//                     last_name: updatedSurname,
//                     email: updatedEmail
//                 };
//
//                 updateUser(updatedUserData);
//             });
//         },
//         function(error) {
//             console.error(error);
//         }
//     );
// }
//
// function updateUser(userData) {
//     const xhr = new XMLHttpRequest();
//     const url = `https://reqres.in/api/users/${userData.id}`;
//
//     xhr.open('PUT', url, true);
//     xhr.setRequestHeader('Content-type', 'application/json');
//     xhr.onload = function() {
//         if (xhr.status === 200) {
//             console.log('User updated successfully:', userData);
//         } else {
//             console.error('Failed to update user. Status:', xhr.status);
//         }
//     };
//     xhr.onerror = function(e) {
//         console.log(e);
//     };
//     xhr.send(JSON.stringify(userData));
// }
//
//
//
//
//
//
//
// // создаем функцию для удаления пользователя
// function deleteUser(userId) {
//     const xhr = new XMLHttpRequest();
//     // составляем URL запроса для удаления конкретного пользователя
//     const url = `https://reqres.in/api/users/${userId}`;
//
//     // открываем асинхронное DELETE-соединение с указанным URL
//     xhr.open('DELETE', url, true);
//
//     // устанавливаем заголовок Content-type для указания формата данных
//     xhr.setRequestHeader('Content-type', 'application/json');
//
//     // обработчик события onload, вызывается при получении ответа на запрос
//     xhr.onload = function(e) {
//         try {
//             if (xhr.status === 200) {
//                 //удаление карточки пользователя из списка на фронтенде
//                 const deletedCard = document.querySelector(`.user-card[data-user-id="${userId}"]`);
//                 if (deletedCard) {
//                     deletedCard.remove();
//                 }
//                 console.log('User deleted:'); //ответ сервера после успешного удаления
//             } else {
//                 console.error('Failed to delete user. Status:', xhr.status);
//             }
//
//         } catch (error) {
//             console.warn('Error parsing JSON', error);
//         }
//     };
//     // обработчик события onerror, вызывается при ошибке запроса
//     xhr.onerror = function(e) {
//         console.log(e);
//     };
//
//     // отправляем DELETE-запрос на сервер
//     xhr.send();
// }

// fetch(`${API_URL}users?page=1`, {
//     method: 'GET',
//     headers: {'Content-type': 'application/json'},
//     body: JSON.stringify("token")
// })
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(error => console.log(error))