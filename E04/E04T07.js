// Arrow function, accepts numbers from theDigits
// Parenthesis around argument theDigits are not necessary, since
// there is only one


function buildRegisterNumber(theLetters, theDigits, x, y) {

    try {

        if (x === false) {
            throw new Error('Invalid register number letters.');

        }

        if (y === false) {
            throw new Error('Invalid register number digits.')

        }
        

    } catch (e) {

        console.log(e.name + ' : ' + e.message);
    }

    if (x === true && y === true) {
        console.log("Valid register number")
        console.log(theLetters + '-' + theDigits)
    }

}


function displayResult() {

    let theLetters = 'OOO';
    let theDigits = '1134';
    
    let x, y; 
    x = /^(?!.*(?:W))([A-Z]\w|[A-Z]{2,3}|)+$/.test(theLetters);
    y = /^(0|[1-9]\d{1,3}|[1-9]?)$/.test(theDigits);

    document.getElementById("sisalto").innerHTML = buildRegisterNumber(theLetters, theDigits, x, y);

}

displayResult();
