const linearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

const arr = [5, 12, 7, 20, 9];
const target = 20;
const result = linearSearch(arr, target);

if (result !== -1) {
    console.log(`Found at index ${result}`);
} else {
    console.log("Not found.");
}