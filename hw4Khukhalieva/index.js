'use strict';

const operation =
    prompt('Hello, choose a math operation: +, -, *, /, cos, sin, pow.',
        '+, -, *, /, cos, sin, pow');

switch (operation) {
    case 'cos' :
        const numberCos = prompt('Choose a number.', '');
        const cos = Math.cos( +numberCos );
        console.log( cos );
        alert (`Cos ${numberCos} = ${cos} radian`); break;

    case 'sin' :
        const numberSin = prompt('Choose a number.', '');
        const sin = Math.sin( +numberSin )
        console.log( sin );
        alert (`Sin ${numberSin} = ${sin} radian`); break;

    case '+' :
        const numberSum = prompt('Choose a number.', '');
        const numberSum1 = prompt('Choose a number again.', '');
        const sum = ( +numberSum + +numberSum1 );
        console.log( sum );
        alert (`Sum: ${numberSum} + ${numberSum1} = ${sum}`); break;

    case '-' :
        const numberDif = prompt('Choose a number.', '');
        const numberDif1 = prompt('Choose a number again.', '');
        const diff = ( +numberDif - +numberDif1 );
        console.log( diff );
        alert (`Diff: ${numberDif} + ${numberDif1} = ${diff}`); break;

    case '*' :
        const numberMul = prompt('Choose a number.', '');
        const numberMul1 = prompt('Choose a number again.', '');
        const mult = ( +numberMul * +numberMul1 );
        console.log( mult );
        alert (`Mult: ${numberMul} * ${numberMul1} = ${mult}`); break;

    case '/' :
        const numberDiv = +prompt('Choose a number.', '');
        const numberDiv1 = +prompt('Choose a number again.', '');
            switch ( numberDiv1 ) {
                case 0:
                    alert   ( `Сan't divide by zero`); break;
                default:
                    const div = ( +numberDiv / +numberDiv1 );
                    console.log ( div );
                    alert (`Div: ${numberDiv} / ${numberDiv1} = ${div}`);
            }
        break;

    case 'pow' :
        const numberPow = prompt('Choose a number.', '');
        const numberPow1 = prompt('Choose a number again.', '');
        const pow = Math.pow( +numberPow, +numberPow1 );
        console.log( pow );
        alert  (`Pow: ${numberPow} to the power ${numberPow1} = ${pow}`); break;

    default: alert ('Tray again.');
}



