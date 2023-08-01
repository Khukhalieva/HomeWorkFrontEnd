'use strict'

//получаем элемент шаблона для формы логина по его id и сохраняем его содержимое в переменной
const loginTemplate = document.getElementById('login-template').innerHTML;

//получаем элемент контейнера, в который будем рендерить компонент, по его id  и сохраняем его в переменной
const rootEl = document.getElementById('container');

//создаем экземпляр класса LoginComponent, передавая в него переменные loginTemplate и rootEl
const loginComponent = new LoginComponent(loginTemplate, rootEl); //LoginComponent ожидает получить шаблон формы и элемент контейнера для рендеринга

//при удачном логине, что происходит
loginComponent.onSuccess = function ()  {
    //скрітие формы
    loginComponent.hideLoginForm();
}
//получаем список пользователей после успешного логина
api.fetchUsers({}, function (users) {
    //здесь обрабатывайте полученный список пользователей (users) и отображайте его на странице

});

console.log(loginComponent);