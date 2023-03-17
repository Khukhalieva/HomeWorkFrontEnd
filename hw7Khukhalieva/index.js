'use strict';

let a;
let b;
let x;
let y;



while (endUserChoice)    {
    do {
        a = prompt('Hello, choose a math operation: +, -, *, /, cos, sin, pow, history.',
            '');
        userOperation = String(a);

    }   while ( userOperation !== cos && userOperation !== sin && userOperation !== pow && userOperation !==
            sum && userOperation !== sub && userOperation !== mult && userOperation !== div && userOperation !== history
            || a === '' || a === userCansel
        );

    if (userOperation !== history ) {
        do {
            x = +prompt('Enter a number.', '');
            userNumberOne = +x;

        }   while ( x === '' || userNumberOne !== +x  );

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
                y = +prompt('Enter a number.', '');
                userNumberTwo = +y;

            }   while ( userNumberTwo !== +y || y === '' );

            result = Math.pow(userNumberOne, userNumberTwo);
            console.log(`${result}`);
            alert(`Operation "${userOperation}" finished with result: ${result}`);
            operationHistory.push(`${userOperation}`);
            userHistory.push(`${result}`);
            break;

        case '+' :
            do {
                y = +prompt('Enter a number.', '');
                userNumberTwo = +y;

            }   while ( y !== +userNumberTwo || y === '' );

            result = userNumberOne + userNumberTwo;
            console.log(`${result}`);
            alert(`Operation "${userOperation}" finished with result: ${result}`);
            operationHistory.push(`${userOperation}`);
            userHistory.push(`${result}`);
            break;

        case '-' :
            do {
                y = +prompt('Enter a number.', '');
                userNumberTwo = +y;

            }   while ( y !== +userNumberTwo || y === '' );

            result = userNumberOne - userNumberTwo;
            console.log(`${result}`);
            alert(`Operation "${userOperation}" finished with result: ${result}`);
            operationHistory.push(`${userOperation}`);
            userHistory.push(`${result}`);
            break;

        case '*' :
            do {
                y = +prompt('Enter a number.', '');
                userNumberTwo = +y;

            }   while ( y !== +userNumberTwo || y === '' );

            result = userNumberOne * userNumberTwo;
            console.log(`${result}`);
            alert(`Operation "${userOperation}" finished with result: ${result}`);
            operationHistory.push(`${userOperation}`);
            userHistory.push(`${result}`);
            break;

        case '/' :
            do {
                y = +prompt('Enter a number.', '');
                userNumberTwo = +y;

            }   while ( y !== +userNumberTwo || y === '' || y === 0);

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

        default: alert ('Try again, enter a number.');
    }

    if (userOperation !== history)  {

        alert(`Operation "${userOperation}" finished with result: ${result}`);
    }

    console.log(`Operation results: ${userHistory}`);
    console.log(`Operations history: ${operationHistory}`);

    endUserChoice = confirm(`Would you like to use the calculator again? `);

}

alert('Have a good day!');