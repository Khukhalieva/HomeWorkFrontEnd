'use strict';

//создаем стек с пустым массивом c методами
function createStack() {
    let arr = [];
    return {
        push:  (arr) => {
            arr.push(arr);
        },
        pop: (arr) => {
            if (arr.length > 0) {
                arr.pop(arr);
            }
        },
        getStack: () => arr,
    };
}

const stack = createStack();
console.log(stack);

//создаем функцию фильтрации isBetween(min, max), валидируем ввод

function isBetween(min, max) {
    min = parseFloat(min);
    max = parseFloat(max);

    if (isNaN(min) || isNaN(max)) {
        return console.log('Invalid number format!');
    }

    if (min >= max) {
        return console.log('The minimum value exceeds the maximum!');
    }

    return function (el) {
        if (el>= min && el <= max) {
            return true;
        }
    };
}

console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(isBetween(3, 6)));

//создаем функцию calculation, валидируем ввод

function calculation(operation) {
    return function(a) {
        return function(b) {
            if (typeof a !== 'number' || typeof b !== 'number') {
                console.log('Operands must be numbers');
            }
            switch (operation) {
                case '+':
                    return a + b;
                case '-':
                    return a - b;
                case '*':
                    return a * b;
                case '/':
                    if (b === 0) {
                        console.log('Division by zero');
                    }
                    return a / b;
                case 'pow':
                    return Math.pow(a, b);
                default:
                    console.log('Unknown operation: ' + operation);
            }
        }
    }
}
const result = calculation('pow')(2)(3);
console.log(result);

//сздаем функцию сортировки sortByField

const products = [
    {name: 'Product 1', quantity: 10, price: 25},
    {name: 'Product 2', quantity: 3, price: 55},
    {name: 'Product 3', quantity: 22, price: 35},
]

function sortByField(fieldName, sortType) {
    return function(a, b) {
        const aValue = a[fieldName];
        const bValue = b[fieldName];
        if (sortType === 'asc') {
            if (aValue < bValue) { return -1; }
            if (aValue > bValue) { return 1; }
            return 0;
        } else if (sortType === 'desc') {
            if (aValue < bValue) { return 1; }
            if (aValue > bValue) { return -1; }
            return 0;
        } else {
            console.log('Unknown sort type: ' + sortType);
        }
    }
}

const resultSort = products.sort(sortByField('quantity', 'desc'));
console.log(resultSort);




