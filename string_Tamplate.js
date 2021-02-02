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