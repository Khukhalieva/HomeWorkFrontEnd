'use strict';

let userOperation;
const cos = 'cos';
const sin = 'sin';
const pow = 'pow';
const sum = '+';
const sub = '-';
const mult = '*';
const div = '/';
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


cansel:while (endUserChoice)    {
 do {
     userOperation = prompt('Hello, choose a math operation: +, -, *, /, cos, sin, pow, history.',
         '');

     if ( userOperation === +userOperation )      {
         continue cansel;
     }else  if ( userOperation === '' )      {
         continue cansel;
     }else     if (!userOperation)      {
            break cansel;
     }

 } while ( userOperation !== cos &&
     userOperation !== sin &&
     userOperation !== pow &&
     userOperation !== sum &&
     userOperation !== sub &&
     userOperation !== mult &&
     userOperation !== div &&
     userOperation !== history
     );


  if (userOperation !== history ) {
          do {
            x = prompt('Enter a number.', '');
            userNumberOne = +x;

            }   while ( userNumberOne !== Number(x) || x === '' || x === null );

    }

    switch ( userOperation ) {
        case 'cos' :
            result = Math.cos(userNumberOne);
            console.log(`${result}`);
            alert(`Operation "${userOperation}" finished with result: ${result}`);
            operationHistory.push(`${userOperation}`);
            userHistory.push(`${result}`);
            break;

        case 'sin' :
            result = Math.sin(userNumberOne);
            console.log(`${result}`);
            alert(`Operation "${userOperation}" finished with result: ${result}`);
            operationHistory.push(`${userOperation}`);
            userHistory.push(`${result}`);
            break;

        case 'pow' :
            do {
                y = prompt('Enter another number.', '');
                userNumberTwo = +y;

            }   while ( userNumberTwo !== Number(y) || y === '' || y === null  );

            result = Math.pow(userNumberOne, userNumberTwo);
            console.log(`${result}`);
            alert(`Operation "${userOperation}" finished with result: ${result}`);
            operationHistory.push(`${userOperation}`);
            userHistory.push(`${result}`);
            break;

        case '+' :
            do {
                y = prompt('Enter another number.', '');
                userNumberTwo = +y;

            }   while ( userNumberTwo !== Number(y) || y === '' || y === null );

            result = userNumberOne + userNumberTwo;
            console.log(`${result}`);
            alert(`Operation "${userOperation}" finished with result: ${result}`);
            operationHistory.push(`${userOperation}`);
            userHistory.push(`${result}`);
            break;

        case '-' :
            do {
                y = prompt('Enter another number.', '');
                userNumberTwo = Number(y);

            }   while ( userNumberTwo !== Number(y) || y === '' || y === null );

            result = userNumberOne - userNumberTwo;
            console.log(`${result}`);
            alert(`Operation "${userOperation}" finished with result: ${result}`);
            operationHistory.push(`${userOperation}`);
            userHistory.push(`${result}`);
            break;

        case '*' :
            do {
                y = prompt('Enter another number.', '');
                userNumberTwo = +y;

            }   while ( userNumberTwo !== +y && y === '' );

            result = userNumberOne * userNumberTwo;
            console.log(`${result}`);
            alert(`Operation "${userOperation}" finished with result: ${result}`);
            operationHistory.push(`${userOperation}`);
            userHistory.push(`${result}`);
            break;

        case '/' :
            do {
                y = prompt('Enter another number.', '');
                userNumberTwo = +y;

            }   while ( userNumberTwo !== Number(y) || y === '' || y === null );

            result = userNumberOne / userNumberTwo;
            console.log(`${result}`);
            alert(`Operation "${userOperation}" finished with result: ${result}`);
            operationHistory.push(`${userOperation}`);
            userHistory.push(`${result}`);
            break;

        case 'history' :
            alert(`Operation results: ${userHistory}`);
            alert(`Operations history: ${operationHistory}`);
            operationHistory.push(`${history}`);
            break;

        default: alert ('Try again, enter a number.')
            continue ;
    }

    console.log(`Operation results: ${userHistory}`);
    console.log(`Operations history: ${operationHistory}`);

    endUserChoice = confirm(`Would you like to use the calculator again? `);

}

alert('Have a good day!');