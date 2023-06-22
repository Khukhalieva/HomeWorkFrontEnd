'use strict';

// получаем содержимое шаблона карточки из элемента
const cardTemplate = document.getElementById('card-template').innerHTML;
const userList = document.getElementById('user-list');

const xhr = new XMLHttpRequest();

//создаем функцию, в которой будет выполняться сетевой запрос для получения данных о пользователях
function fetchUsers ()  {
    //синхронній сетевой GET-запрос к URL
    xhr.open('GET', 'https://reqres.in/api/users?page=1', false);
    //обработчик собітия при получении ответа на запрос
    xhr.onload = (e) => {
        // console.log(e.target.response)
    //обработка ответа сервера с отловом ошибки
        try {
            // пытаемся разобрать ответ сервера в формате JSON
            const response = JSON.parse(e.target.response);
            // console.log(response);
            //получаем единое поле 'name', с помощью создания обьекта map
            const mappedUsers = response.data.map( user => {
                return  {
                    ...user,
                    name:`${user.first_name} ${user.last_name} `,

                }
            });
            console.log(mappedUsers);

            let result = '';
            //пробегаемся по списку user и перезаписываем все поля на шаблонные строки
            mappedUsers.forEach( user => {
                result = cardTemplate
                    .replaceAll('{{name}}', user.name)
                    .replaceAll('{{email}}', user.email)
                    .replaceAll('{{avatar}}', user.avatar)
            });
            userList.innerHTML = result;

        console.log(e.target.response)
        } catch (error)   {
            console.warn('Error parsing JSON');
        }
    };
    // Обработчик события onerror - вызывается при ошибке запроса
    xhr.onerror = (e) => {
        console.log(e)
    };
    // Отправляем сетевой запрос
    xhr.send();
}
// Вызываем функцию fetchUsers для получения данных о пользователях
fetchUsers();


