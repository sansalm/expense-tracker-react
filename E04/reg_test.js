let theLetters = /^(?!.*(?:W))([A-Z]\w|[A-Z]{2,3}|)+$/;

console.log('Valid letters (true):', theLetters.test('OOO'));
console.log('With "W" (false):', theLetters.test('WOO'));
console.log('Two capital letters (true):', theLetters.test('PA'));
console.log('One capital letter (false):', theLetters.test('P'));   // With long regular expressions such as shown during class
console.log('Small letters (false):', theLetters.test('pii'));      // the single capital letter returned 'true'.


let theNumbers = /^(0|[1-9]\d{1,3}|[1-9]?)$/;

console.log("Valid numbers (true):", theNumbers.test('123'));
console.log("With leading zero (false):", theNumbers.test('012'));
console.log("Invalid string (false):", theNumbers.test('1cs'));
console.log("With one number (true):", theNumbers.test('1'));
