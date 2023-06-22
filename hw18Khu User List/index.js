'use strict';

// получаем содержимое шаблона карточки из элемента
const cardTemplate = document.getElementById('card-template').innerHTML;
const userList = document.getElementById('user-list');

const xhr = new XMLHttpRequest();

function prepareUserCard(user, cardTemplate) {
    // присваивание переменной currentUserList значения шаблона карточки
    let currentUserList = cardTemplate;
    //перебор всех ключей объекта user с помощью метода forEach
    Object.key(user).forEach(key  => {
        // Замена всех вхождений '{{key}}' в шаблоне карточки на соответствующие значения из объекта user
        currentUserList = currentUserList.replaceAll('{{key}}', user[key]);
    });
    return currentUserList;
}
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
    //синхронній сетевой GET-запрос к URL
    xhr.open('GET', 'https://reqres.in/api/users?page=1', true);
    //настройка формата json
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



