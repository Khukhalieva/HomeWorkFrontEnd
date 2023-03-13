'use strict';

let userOperation;
const cos = 'cos';
const sin = 'sin';
const pow = 'pow';
const sum = '+';
const div = '-';
const mult = '*';
const diff = '/';
const history = 'history';
let userHistory = [];
let operationHistory = [];
let a;
let x;
let y;
let userNumberOne;
let userNumberTwo;
let result;
let endUserChoice = true;

while (endUserChoice)    {
    do {
        a = prompt('Hello, choose a math operation: +, -, *, /, cos, sin, pow, history.',
            '+, -, *, /, cos, sin, pow, history');
        userOperation = String(a);


    }   while ( userOperation !== cos && userOperation !== sin && userOperation !== pow && userOperation !==
        sum && userOperation !== div && userOperation !== mult && userOperation !== diff && userOperation !== ''
        && userOperation !== history
        );

    if (userOperation !== history ) {
        do {
            x = +prompt('Enter a number.', '0');
            userNumberOne = +x;

        }   while ( userNumberOne !== +userNumberOne || userNumberOne === '');

    }


    switch ( userOperation ) {
        case 'cos' :
            result = Math.cos(userNumberOne);
            console.log(`${result}`);
            alert(`${result}`);
            operationHistory.push(`${userOperation}`);
            userHistory.push(`${result}`);
            break;

        case 'sin' :
            result = Math.sin(userNumberOne);
            console.log(`${result}`);
            alert(`${result}`);
            operationHistory.push(`${userOperation}`);
            userHistory.push(`${result}`);
            break;

        case 'pow' :
            do {
                y = +prompt('Enter a number.', '0');
                userNumberTwo = +y;

            }   while ( userNumberTwo !== +userNumberTwo || userNumberTwo === '' );

            result = Math.pow(userNumberOne, userNumberTwo);
            console.log(`${result}`);
            alert(`${result}`);
            operationHistory.push(`${userOperation}`);
            userHistory.push(`${result}`);
            break;

        case '+' :
            do {
                y = +prompt('Enter a number.', '0');
                userNumberTwo = +y;

            }   while ( userNumberTwo !== +userNumberTwo || userNumberTwo === '' );

            result = userNumberOne + userNumberTwo;
            console.log(`${result}`);
            alert(`${result}`);
            operationHistory.push(`${userOperation}`);
            userHistory.push(`${result}`);
            break;

        case '-' :
            do {
                y = +prompt('Enter a number.', '0');
                userNumberTwo = +y;

            }   while ( userNumberTwo !== +userNumberTwo || userNumberTwo === '' );

            result = userNumberOne - userNumberTwo;
            console.log(`${result}`);
            alert(`${result}`);
            operationHistory.push(`${userOperation}`);
            userHistory.push(`${result}`);
            break;

        case '*' :
            do {
                y = +prompt('Enter a number.', '0');
                userNumberTwo = +y;

            }   while ( userNumberTwo !== +userNumberTwo || userNumberTwo === '' );

            result = userNumberOne * userNumberTwo;
            console.log(`${result}`);
            alert(`${result}`);
            operationHistory.push(`${userOperation}`);
            userHistory.push(`${result}`);
            break;

        case '/' :
            do {
                y = +prompt('Enter a number.', '1');
                userNumberTwo = +y;

            }   while ( userNumberTwo !== +userNumberTwo || userNumberTwo === '' || userNumberTwo === 0);

            result = userNumberOne / userNumberTwo;
            console.log(`${result}`);
            alert(`${result}`);
            operationHistory.push(`${userOperation}`);
            userHistory.push(`${result}`);
            break;

        case 'history' :

            alert(`${operationHistory}`);
            operationHistory.push(`${history}`);
            break;

        default: alert ('Try again, enter a number.');
    }

    if (userOperation !== history)  {
        alert(`Operation "${userOperation}" finished with result: ${result}`);
    }

    console.log(`${userHistory}`);
    console.log(`${operationHistory}`);

    endUserChoice = confirm(`Would you like to use the calculator again? `);

}

    alert('Have a good day!');






