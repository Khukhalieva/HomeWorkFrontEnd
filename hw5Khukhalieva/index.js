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
let a;
let x;
let y;
let userNumberOne;
let userNumberTwo;
let result;
let endUserChoice = true;

while (endUserChoice)    {
    do {
        a = prompt('Hello, choose a math operation: +, -, *, /, cos, sin, pow.',
            '+, -, *, /, cos, sin, pow');
        userOperation = String(a);

    }   while ( userOperation !== cos && userOperation !== sin && userOperation !== pow && userOperation !==
        sum && userOperation !== div && userOperation !== mult && userOperation !== diff && userOperation !== ''
        );

    do {
        x = +prompt('Enter a number.', '0');
        userNumberOne = +x;

    }   while ( userNumberOne !== +userNumberOne || userNumberOne === '' );

    switch ( userOperation ) {
        case 'cos' :
            result = Math.cos(userNumberOne);
            console.log(`${result}`);
            alert(`${result}`);
            userHistory.push(`${result}`);
            break;

        case 'sin' :
            result = Math.sin(userNumberOne);
            console.log(`${result}`);
            alert(`${result}`);
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
            userHistory.push(`${result}`);
            break;

        default: alert ('Try again, enter a number.');
    }
    alert(`Operation "${userOperation}" finished with result: ${result}`);
    console.log(`${userHistory}`);

    endUserChoice = confirm(`Would you like to use the calculator again? `);

}

    alert('Have a good day!');






