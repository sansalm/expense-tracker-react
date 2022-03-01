

class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    sayGreeting(to) {
        console.log(`Moro, moro ${to}!`);
    }

}


const person1 = new Person('Liisu', 31);

const person2 = new Person('Pekka', 77);

console.log(person1.getName() + ', ' + person1.getAge());

console.log(person2.getName() + ', ' + person2.getAge());

person1.sayGreeting('Liisu');
