'use strict';
const addButton = document.getElementById("addTodo");
const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");
const prioritySelect = document.getElementById("priority-select");
const todoList = document.getElementById("todo-list");

//Добавляем на клик кнопки функцию обработчик события
addButton.addEventListener("click", () => {
    const title = titleInput.value;
    const description = descriptionInput.value;
    const priority = prioritySelect.value;

// Присвоение цвета приоритетам
    let color = "";
    if (priority === "low") {
        color = "#6EEA6EFF";
    } else if (priority === "mid") {
        color = "#e2e75b";
    } else if (priority === "high") {
        color = "#da5b5b";
    }
    const todoItem = document.createElement("li");
    todoItem.style.backgroundColor = color;

//Создаем туду элемент из полей ввода
    const todoTitle = document.createElement("h3");
    todoTitle.textContent = title;

    const todoDescription = document.createElement("p");
    todoDescription.textContent = description;
    todoItem.appendChild(todoTitle);
    todoItem.appendChild(todoDescription);
    todoList.appendChild(todoItem);

// Поля ввода очищаются
    titleInput.value = "";
    descriptionInput.value = "";
});


// // Создаем кнопку для удаления
// const deleteButton = document.createElement("button");
// deleteButton.textContent = "Delete";
//
// // Добавляем событие при клике на кнопку удаления
// deleteButton.addEventListener("click", () => {
//     todoList.removeChild(todoItem);
// });
//
// // добавляем кнопку в элемент для туду
//     todoItem.appendChild(deleteButton);
//
// // добавляем элемент на страницу
//     todoList.appendChild(todoItem);

// // Создаем чекбокс
// const doneCheckbox = document.createElement("input");
// doneCheckbox.type = "checkbox";

