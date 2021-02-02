// ****handle a number and set a default value//////


function handleNumber(numberOne = 1, numberTwo = 05) {
    return numberOne * numberTwo;
}

// console.log(handleNumber());
// console.log(handleNumber(5, 7));


// ***making new line with es6
console.log(`lorem ipsum
data second line`);


// ***making string tamplate
const firstName = 'abdullah al';
const lastName = 'fahim';
const fullName = firstName + lastName;
const newFullName = `${firstName} ${lastName} is a good boy;`
    // console.log(newFullName);

// es6 making function

function num() {
    return 5 * 5;
}


// es6 simple function

// const num = () => 5 * 5;
// console.log(num());


// es6 simple function

const number = (x, y) => {
        return x * y;
    }
    // console.log(number(5, 7));

// multiple array in one array with es6
const name = ['fahim', 'abdullah'];
const age = [52, 96];
const people = [...name, ...age];
// console.log(people);


const x = 650;
const y = 658;
const z = 596;
const maxNumber = Math.max(x, y, z);
// console.log(maxNumber);

const xman = [47, 95, 125, 74, 85, 3, 6, 15];
const yman = [96, 75, 85, 25, 45, 01, 23, 56];
const xyman = [...xman, ...yman];
const maxMan = Math.max(...xyman);
// console.log(maxMan);


class Yougerbrother {
    constructor() {
        const this.name = 'fahim';
    }
}

// class with es6
class ClassMate extends Yougerbrother {
    constructor(name, age) {
        super();

        this.age = age;
    }
};
const classSix = new ClassMate('fahim', 40);
const classSeven = new ClassMate('fahima', 10);
console.log(classSix);
// console.log(classSeven);