'use strict'

//создаем класс создания компонента логин формы
class LoginComponent {
    //конструктор класса принимает два аргумента: template (шаблон) и containerEl (элемент контейнера)
    constructor(template, containerEl) {
        //конструктор инициализирует свойства _template и _container, используя переданные аргументы
        this._template = template;
        this._container = containerEl;
        this.onSuccess = null;

        //вызываем метод render() для отрисовки компонента.
        this.render();
    }

    // создаем метод render() для отрисовки компонента
    render()    {
        //он использует _template и _container для вставки соответствующего содержимого в контейнер
        //при вызове метода render() происходит вставка шаблона внутрь элемента контейнера
        this._container.innerHTML = renderTemplate(this._template, {});

        //устанавливается обработчик события "submit" на форму
        document.getElementById('login-form').addEventListener('submit', (e) => {
            e.preventDefault(); //отменяем стандартное поведение формы (перезагрузку страницы при отправке)

        //вызов метода клика на кнопку и отправки формы
        this.onSubmit();
        })
    }
    renderUserList() {
        //віполняем запрос на получение списка пользователей с помощью API
        api.fetchUsers()
            .then((users) => {
                //users - это массив объектов пользователей
                console.log('Users:', users);
                //для рендеринга списка пользователей на странице
                const userListTemplate = ''; //шаблон для списка пользователей
                const userListContainer = document.getElementById('user-list'); //контейнер для списка пользователей
                userListContainer.innerHTML = renderTemplate(userListTemplate, { users });
            })
            .catch((error) => {
                console.error('Error fetching users:', error.message);
            });
       
    }
    //создаем метод onSubmit(), вызывается при отправке формы (при клике на кнопку "submit").
    onSubmit() {
        //метод использует значения полей ввода с ID "login" и "password" для получения введенных пользователем данных
        const email = this._container.querySelector('#login').value;
        const password = this._container.querySelector('#password').value;

        //вызывается функция api.login(), которой передаются email и password в качестве аргументов
        api.login({email: 'eve.holt@reqres.in', password: 'cityslicka'})

            .then((data) => {
                //при успешной авторизации выполнится этот блок
                console.log('Login successful!', data);
                //вызов метода для рендеринга списка пользователей
                this.renderUserList();
            })
            .catch((error) => {
                //в случае ошибки выполнится этот блок
                console.error('Login error:', error.message);

            });
    }

    //создаем метод скрытия формы
    hideLoginForm() {
        document.getElementById('loginForm').hidden = true;
    }

}