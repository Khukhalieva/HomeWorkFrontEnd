'use strict'

const api = (() => {
    //создаем константу API_URL и присваиваем ей значение базового URL для API
    const API_URL = 'https://reqres.in/api/';

    //объявляем класс API, который предоставляет методы для взаимодействия с API
    class API {
        constructor() {
        }

        //метод login позволяет выполнить запрос на сервер для авторизации пользователя
        login({email, password}) {
            return fetch(`${API_URL}login`, {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({
                    email,
                    password,
                }),
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Invalid email or password'); // При ошибке авторизации выбрасываем ошибку
                    }
                    return response.json();
                });
        }


        //     if (event.target.status === 200) {
        //
        //     resolve(event.target.response);
        // }
        // if (event.target.status === 400) {
        //     reject({status: 400});
        // }
        //
        // if (!validateEmail(email)) {
        //     console.warn('Please enter a valid email address');
        //     return;
        // }
        // if (email === '' || password === '') {
        //     console.warn('Please enter a valid email and password');
        //
        // }
        // if (password.length < 6) {
        //     console.warn('Please enter a password with at least 6 characters');
        //
        // }

        // метод fetchUsers для получения списка пользователей
        fetchUsers() {
            fetch(`${API_URL}users?page=1`, {
                method: 'GET',
                headers: {'Content-type': 'application/json'},
            })
                .then((response) => response.json())
                .then((data) => {
                    //впеременной data будет содержаться ответ от сервера в формате JSON
                    console.log(data);
                })
                .catch((error) => {
                    //обрабатываем ошибку в случае проблем с сетью или обработки ответа
                    console.error('Error:', error);
                });
        }
    }

    //создаем и возвращаем экземпляр класса API, чтобы обеспечить доступ к методам извне модуля
    return new API();

})();
