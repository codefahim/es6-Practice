function incrise() {
    let count = 0;
    return function() {
        count++;
        return count;
    }
}
const result = incrise();
console.log(result);
const result1 = incrise();
console.log(result1);