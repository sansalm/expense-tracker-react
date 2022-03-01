

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


class SuperHero extends Person {
    
    constructor(name, age, superpower) {
        super(name, age);
        this.superpower = superpower;
    }

    getSuperPower() {
        return this.superpower;
    }

    useSuperPower(what) {
        console.log(`Superpower: ${what}`);
    }

}

const superhero1 = new SuperHero('Liisu', 31, 'flying');
const superhero2 = new SuperHero('Lasse', 33, 'speed of light')

console.log(superhero1.getName() + ', ' + superhero1.getAge() + ', ' + superhero1.getSuperPower());
console.log(superhero2.getName() + ', ' + superhero2.getAge() + ', ' + superhero2.getSuperPower());

superhero1.useSuperPower('Flying')
superhero2.useSuperPower('Speed of light')