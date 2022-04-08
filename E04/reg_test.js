let theLetters = /^(?!.*(?:W))([A-Z]{2,3})$/;

console.log('Valid letters (true):', theLetters.test('OOO'));
console.log('With "W" (false):', theLetters.test('WOO'));
console.log('Two capital letters (true):', theLetters.test('PA'));
console.log('One capital letter (false):', theLetters.test('P'));   // With long regular expressions such as shown during class
console.log('Small letters (false):', theLetters.test('pii'));
console.log('More than 3 letters (false):', theLetters.test('AAAA'))      // the single capital letter returned 'true'.


//let theNumbers = /^([1-9]\d{0,2}?)$/; molemmat toimii
let theNumbers = /^([1-9]\d{2}|[1-9]\d|[1-9])$/; //molemmat toimii

console.log("\nValid numbers (true):", theNumbers.test('200'));
console.log("With leading zero (false):", theNumbers.test('012'));
console.log("Invalid string (false):", theNumbers.test('1cs'));
console.log("With one number (true):", theNumbers.test('1'));
console.log("With single zero (false):", theNumbers.test('0'))
console.log("More than 3 numbers (false):", theNumbers.test('6666'))

