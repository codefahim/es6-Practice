let numbers = [2, 8, 9, 6, 4, 5];

numbers.map(function(element, index, Array) {
    console.log(element, index, Array);
})


const result = numbers.map(x => x * x);
console.log(result);