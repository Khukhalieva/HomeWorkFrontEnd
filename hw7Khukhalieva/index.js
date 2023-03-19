'use strict';

const source = [ 1,2,'Happy',3,'Alex',4,'Mango',5,6 ];

    const utils = {
        reverse: function (source) {
            let reverseSource = [];

            for (let index = source.length - 1; index >= 0; index--) {

                if( Array.isArray(source) ) {
                    reverseSource.push(source[index])
                }else {
                    reverseSource += source[index];
                }
            }
            return reverseSource;
        },
        verifyNumbers: function (source)    {
            let verifyNumberSource = [];

            for (let index = 0; index < source.length; index++) {

            if( source[index] === Number(source[index])) {
                verifyNumberSource.push(source[index])
            }
        }
            return verifyNumberSource;
        },
        getMin: function (source) {

            source = utils.verifyNumbers(source);
            let getMin = source[0];

            for (let index = 1; index < source.length; index++) {
                if( getMin > source[index] ) {
                    getMin = source[index];
                }
            }
            return getMin;
        },
        getAverage: function (source)   {

            source = utils.verifyNumbers(source);
            let getAverage = source[0];

            for (let index = 1; index < source.length; index++) {

                getAverage += source[index];
            }
           return getAverage / source.length;

        },
        getMaxString: function (source) {

            let getMaxString = String(source[0]);

            for (let index = 1; index < source.length; index++) {

                if (String(source[index]).length > getMaxString.length) {

                    getMaxString = String(source[index]);
                }
            }
            return getMaxString;
        }
    }


    console.log(utils.reverse(source));
    console.log(utils.verifyNumbers(source));
    console.log(utils.getMin(source));
    console.log(utils.getAverage(source));
    console.log(utils.getMaxString(source));