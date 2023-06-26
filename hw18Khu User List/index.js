'use strict';

// получаем содержимое шаблона карточки из элемента
const cardTemplate = document.getElementById('card-template').innerHTML;

const userList = document.getElementById('user-list');

const xhr = new XMLHttpRequest();

function prepareUserCard(user, cardTemplate) {
    // присваивание переменной currentUserList значения шаблона карточки
    let currentUserList = cardTemplate;
    //перебор всех ключей объекта user с помощью метода forEach
    Object.keys(user).forEach(key  => {
        // Замена всех вхождений '{{key}}' в шаблоне карточки на соответствующие значения из объекта user
        currentUserList = currentUserList.replaceAll(`{{${key}}}`, user[key])
    });
    return currentUserList;
}
//создаем функцию отображения списка на странице
function renderUserList(users)   {
//получаем единое поле 'name', с помощью создания обьекта map
    const mappedUsers = users.map( user => {
        return  {
            ...user,
            name:`${user.first_name} ${user.last_name} `,
        }
    });
    console.log(mappedUsers);

    let userListResult = '';
    //пробегаемся по списку user и создаем карточку для каждого
    mappedUsers.forEach((user) => {
        // result += cardTemplate
        //     .replaceAll('{{name}}', user.name)
        //     .replaceAll('{{email}}', user.email)
        //     .replaceAll('{{avatar}}', user.avatar);

        // добавление текущей карточки пользователя к общему результату списка пользователей
        userListResult += prepareUserCard(user, cardTemplate);
    });

    // вывод обновленного списка пользователей на страницу
    userList.innerHTML = userListResult;
}
//создаем функцию, в которой будет выполняться сетевой запрос для получения данных о пользователях
function fetchUsers (callback)  {
    //// открываем асинхронное GET-соединение с указанным URL
    xhr.open('GET', 'https://reqres.in/api/users?page=1', true);

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
    // Отправляем сетевой запрос
    xhr.send();
}
    // самовызывающаяся функция
    (()=>{
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

    // Отправка запроса на сервер с новым значением параметра page
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


