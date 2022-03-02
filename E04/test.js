function buildRegisterNumber(theLetters, theDigits, x, y){
    try {
        if (x === false){
            throw new Error ("Invalid register number letters")
        }
        if (y === false){
            throw new Error ("Invalid register number digits")
        }
        if (x === true && y === true) {
            console.log("Register number is correct");
            console.log(theLetters + "-" + theDigits)
        }
        } catch(e) {
            console.log(e);
        }
    }

function main(){
    let theDigits = "098";
    let theLetters = "POO";
    let x, y;
    x = /^(?!.*(?:W))([A-Z]\w|[A-Z]{2,3}|)+$/.test(theLetters);
    y = /^(0|[1-9]\d{1,3}?)$/.test(theDigits);
    buildRegisterNumber(theLetters, theDigits, x, y);
}

main();