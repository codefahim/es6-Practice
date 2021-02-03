let numbers = [2, 8, 9, 6, 4, 5];

numbers.map(function(element, index, Array) {
    console.log(element, index, Array);
})


const result = numbers.map(x => x * x);
console.log(result);

const filterNumber = numbers.filter(function(elemet) {
    const result = elemet > 4;
    console.log(result);
})
console.log(filterNumber);
const bigNumber = numbers.filter(x => x > 4);
const findNumber = numbers.find(x => x > 4);
console.log(bigNumber);
console.log(findNumber);