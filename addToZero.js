let numbers = [1, 4, 11, 2, 37, -4];
let result = false;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] <= 0) {
        result = true;
        break;
    }
}
console.log(result);