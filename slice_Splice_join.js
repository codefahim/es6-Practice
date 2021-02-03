const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const checkSlice = numbers.slice(1, 5);
console.log(checkSlice);



const checksplice = numbers.splice(2, 4, 99, 88, 77, 55);
console.log(checksplice);
console.log(numbers);


const joinNumbers = numbers.join(',');
console.log(joinNumbers);