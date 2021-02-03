const numbers = [1, -2, 3, -4, 5, -6, -7, 8, 9, 10];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {

        continue;

    }
    console.log(numbers[i]);
}

const numberss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numberss.length; i++) {
    if (numberss[i] > 5) {
        // continue;
        break;
    }
    console.log(numberss[i]);
}