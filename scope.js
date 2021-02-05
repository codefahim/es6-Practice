function incrise() {
    let count = 1;
    return function() {
        count++;
        return count;
    }
}
const result = incrise();
console.log(result());
const result1 = incrise();
console.log(result1());
console.log(result1());
console.log(result1());