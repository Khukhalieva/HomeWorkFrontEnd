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
let b;
let x;
let y;
let userNumberOne;
let userNumberTwo;
let result;
let endUserChoice = true;

function add(a, b)   {
    result = a + b;
    return result;
}

function subtract(a, b)   {
    result = a - b;
    return result;
}

function multiplication(a, b)   {
    result = a * b;
    return result;
}

function division(a, b)   {
    result = a / b;
    return result;
}

function power(a, b)   {
    result = a ** b;
    return result;
}

function cosine(a)   {
    return Math.cos(a);
}

function sinus(a)   {
    result = Math.sin(a);
    return result;
}

function historyUser(a, b)  {
    alert(`Operations history: ${b}`);
    alert(`Operation results: ${a}`);

}

function validUserNumber1(x)    {
    do {
        x = prompt('Enter a number.', '');
        userNumberOne = +x;

    }   while ( userNumberOne !== Number(x) || x === '' || x === null );
    return userNumberOne;
}

function validUserNumber2(y)    {
    do {
        y = prompt('Enter another number.', '');
        userNumberTwo = +y;

    }   while ( userNumberTwo !== Number(y) || y === '' || y === null );
    return userNumberTwo;
}


function resultOperation(a, b)    {
    console.log(`${a}`);
    alert(`Operation "${b}" finished with result: ${a}`);
    operationHistory.push(`${b}`);
    userHistory.push(`${a}`);

}

function validUserOperation(a) {
    switch(a)  {
        case 'cos':
        case 'sin':
        case 'pow':
        case '+':
        case '-':
        case '*':
        case '/':
        case 'history':
            return  false;
        default: return true ;
    }
}

cansel: while (endUserChoice)    {
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

 } while ( validUserOperation(userOperation) === true);


  if (userOperation !== history ) {
      validUserNumber1(userNumberOne);
    }

    switch ( userOperation ) {
        case 'cos' :
            resultOperation(cosine(userNumberOne), userOperation);
            break;

        case 'sin' :
            resultOperation(sinus(userNumberOne), userOperation);
            break;

        case 'pow' :
            validUserNumber2(userNumberTwo);
            resultOperation(power(userNumberOne, userNumberTwo), userOperation);
            break;

        case '+' :
            validUserNumber2(userNumberTwo);
            resultOperation(add(userNumberOne, userNumberTwo), userOperation);
            break;

        case '-' :
            validUserNumber2(userNumberTwo);
            resultOperation(subtract(userNumberOne, userNumberTwo), userOperation);
            break;

        case '*' :
            validUserNumber2(userNumberTwo);
            resultOperation(multiplication(userNumberOne, userNumberTwo), userOperation);
            break;

        case '/' :
            validUserNumber2(userNumberTwo);
            resultOperation(division(userNumberOne, userNumberTwo), userOperation);
            break;

        case 'history' :
            historyUser(userHistory, operationHistory);
            operationHistory.push(`${history}`);
            break;

        default: alert ('Try again, enter a number.')
                continue;
    }
    console.log(`Operations history: ${operationHistory}`);
    console.log(`Operation results: ${userHistory}`);

    endUserChoice = confirm(`Would you like to use the calculator again? `);
}

alert('Have a good day!');