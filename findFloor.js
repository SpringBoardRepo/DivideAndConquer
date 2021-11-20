// findFloor
// Write a function called findFloor which accepts a sorted array and a value x, and returns the 
//floor of x in the array.The floor of x in an array is the largest element in the array which is smaller than
// or equal to x.If the floor does not exist, return -1.

// Examples:

// findFloor([1,2,8,10,10,12,19], 9) // 8
// findFloor([1,2,8,10,10,12,19], 20) // 19
// findFloor([1,2,8,10,10,12,19], 0) // -1
// Constraints

// Time Complexity: O(log N)

function findFloor(arr, num) {

    let left = 0;
    let right = arr.length - 1;

    if (num <= 0) {
        return -1;
    }

    if (num >= arr[right]) {
        return arr[right];
    }

    while (left <= right) {

        let mid = Math.floor((left + right) / 2);

        if (arr[mid] == num) {
            return arr[mid];
        }
        else if (num >= arr[mid]) {
            if (num <= arr[mid + 1]) {
                return arr[mid];
            }
            else {
                left = mid + 1;
            }
        }
        else {
            right = mid - 1;
        }
    }
    return -1;
}