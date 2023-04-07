'use strict';

let obj = {
    a: 'f',
    b: 78,
    c: 'R',
    d: {
        a: {
            a: null,
            b: 'E',
            c: {
                a: true,
                b: 'C',
                c: 'test'
            },
            d: 'U'
        },
        b: {
            a: 'R',
            b: ['S', 4, 6, 'I'],
            c: 0,
        },
        c: ['O'],
        d: null,
        e: 'N'
    }
}

function func(current, result = []) {

    //проверка на массив
    if (Array.isArray(current)) {

//проверка на стингу и Заглавную букву, пуш в массив ввывода
        for (let i = 0; i < current.length; i++) {
            if (typeof current[i] === 'string' && current[i] === current[i].toUpperCase()){
                result.push(current[i]);
            }
            func(current[i], result);
        }
// проверка на обьект и null

    } else if (typeof current === 'object' && current !== null) {
//
        func(Object.entries(current), result);
    }
//выводим результат методом в строку без разделителя
      return result.join('');
}

console.log(func(obj));

