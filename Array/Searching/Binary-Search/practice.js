const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            console.log(`Element found at index ${mid}`);
            return;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    console.log("Element not found");
}

const sortedNumbers = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]
const target = 23;
binarySearch(sortedNumbers, target);

