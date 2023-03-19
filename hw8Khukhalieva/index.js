'use strict';

const source = [ 1,'Thomas',3,'Alex',4,-7,'Mango',12 ];

    const utils = {
        reverse: function reverseSource(source) {
            let result = [];

            for (let index = source.length - 1; index >= 0; index--) {
                if( Array.isArray(source) ) {
                    result.push(source[index])
                }else {
                    result += source[index];
                }
            }
            return result;
        },
        verifyNumbers: function verifyNumbers(source)    {
            let result = [];

            for (let index = 0; index < source.length; index++) {
                if( source[index] === Number(source[index])) {
                    result.push(source[index])
                }
            }
            return result;
        },
        getMin: function getMin(source) {
            source = utils.verifyNumbers(source);
            let result = source[0];

            for (let index = 1; index < source.length; index++) {
                if( result > source[index] ) {
                    result = source[index];
                }
            }
            return result;
        },
        getAverage: function getAverage(source)   {
            source = utils.verifyNumbers(source);
            let result = source[0];

            for (let index = 1; index < source.length; index++) {
                result += source[index];
            }
            return result / source.length;

        },
        getMaxString: function getMaxString(source) {
            let result = String(source[0]);

            for (let index = 1; index < source.length; index++) {
                if (String(source[index]).length > result.length) {
                    result = String(source[index]);
                }
            }
            return result;
        }
    }

    console.log(utils.reverse(source));
    console.log(utils.verifyNumbers(source));
    console.log(utils.getMin(source));
    console.log(utils.getAverage(source));
    console.log(utils.getMaxString(source));