// Arrow function, accepts numbers from theDigits
// Parenthesis around argument theDigits are not necessary, since
// there is only one
const isValidRegisterNumber = (theLetters, theDigits) => {
    return /^(?!.*(?:W))([A-Z]\w{2,3}|[A-Z]\w[A-Z])+$/.test(theLetters), // Constant regular expression 
        /^(0|[1-9]\d{1,3}|[1-9]\d|[1-9]?)$/.test(theDigits);       //(limited with backslashes)
                                                            

}
// '|' = 'or' operator
// ^ indicates where the string starts



function buildRegisterNumber(theLetters, theDigits) {

    try {

        if (theLetters === false) {
            throw new Error('Invalid register number letters.');

        }

        if (theDigits === false) {
            throw new Error('Invalid register number digits.')

        }

        return isValidRegisterNumber(theLetters, theDigits);

    } catch (e) {

        console.error(e.name + ' : ' + e.message);
    }

}


function displayResult() {

    
let theDigits = '113' 
let theLetters = 'WOO'

    document.getElementById("sisalto").innerHTML = isValidRegisterNumber(theLetters, theDigits);

}

displayResult();


//FOR TESTING 

//let theLetters = /^(?!.*(?:W))([A-Z]\w{2,3}|[A-Z]\w[A-Z])+$/;

//console.log(theLetters.test('OOO'))
//buildRegisterNumber(theLetters);