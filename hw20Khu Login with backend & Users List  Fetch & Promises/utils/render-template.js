'use strict'

//функция renderTemplate предназначена для замены вхождений ключей из объекта data на соответствующие значения
// в переданном шаблоне template
function renderTemplate(template, data) {
    //создаем переменную resultTemplate и присваиваем ей значение шаблона
    let resultTemplate = template;

    //используем метод Object.keys для получения массива ключей из объекта data,перебирая каждый ключ в массиве с помощью метода forEach.
    Object.keys(data).forEach(key => {

        //используем метод replaceAll, который заменяет все вхождения ключа в шаблоне на его значение
        resultTemplate = resultTemplate.replaceAll(`{{${key}}}`, data[key]);
    });

    //по завершению цикла возвращаем измененный шаблон с замененными значениями
    return resultTemplate;
}
