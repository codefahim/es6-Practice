function clocks() {
    let count = 0;

    return function() {
        count++;
        return count;
    }
}
const clock1 = clocks();
const clock2 = clocks();
console.log(clock1, clock2);