const linearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

const numbers = [10,20,30,40,50,4,7];
const target = 4;
const result = linearSearch(numbers, target);

if (result !== -1) {
    console.log(`Element found at index : ${result}`);
} else {
    console.log('Element not found');
}