let person = {name: "Pentti", age: 22, country: "Finland"};

let personString = JSON.stringify(person);

let reCreatedPerson = JSON.parse(personString);

console.log(person)

console.log(personString)