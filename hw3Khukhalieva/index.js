'use strict';

const operation =
    prompt('Hello! Choose math operation: +, -, *, /, cos, sin, pow.', '+, -, *, /, cos, sin, pow.');

if (operation  === '+' ) {
    const numberSum = prompt('Choose a number.', '');
    const numberSum1 = prompt('Choose a number again.','');
    const sum = ( +numberSum + +numberSum1 );
    alert( `Sum: ${sum}` );

} else if (operation  === '-' ) {
    const numberDiff = prompt('Choose a number.', '');
    const numberDiff1 = prompt('Choose a number again.','');
    const diff = ( +numberDiff + +numberDiff1 );
    alert( `Diff: ${diff}` );

} else if (operation  === '*' ) {
    const numberMult = prompt('Choose a number.', '');
    const numberMult1 = prompt('Choose a number again.','');
    const mult = ( +numberMult + +numberMult1 );
    alert( `Mult: ${mult}` );

}  else if (operation  === '/' ) {
    const numberDiv = prompt('Choose a number.', '');
    const numberDiv1 = prompt('Choose a number again.','');
    const div = ( +numberDiv + +numberDiv1 );
    alert ( `Div: ${div}` );

}  else if (operation === 'cos' ) {
    const numberCos = prompt('Choose a number.', '');
    const cos =  ( Math.cos( +numberCos ));
    alert ( `Cos: ${cos}` );

}  else if (operation === 'sin' ) {
    const numberSin = prompt('Choose a number.', '');
    const sin =  ( Math.sin( +numberSin ));
    alert ( `Sin: ${sin}` );

}  else if (operation === 'pow' ) {
    const numberPow = prompt('Choose a number.', '');
    const numberPow1 = prompt('Choose a number again.','');
    const pow =  ( Math.pow (numberPow, numberPow1));
    alert ( `Pow: ${pow}` );

} else   {
    console.log('Try again');
}





