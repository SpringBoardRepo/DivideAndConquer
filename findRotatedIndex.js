// findRotatedIndex
// Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer.
// The function should return the index of num in the array.If the value is not found, return -1.

// Constraints:

// Time Complexity: O(log N)

// Examples:

// findRotatedIndex([3,4,1,2],4) // 1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
// findRotatedIndex([37,44,66,102,10,22],14) // -1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1
function findRotatedIndex(arr, value) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let middleIndx = Math.floor((left + right) / 2);
        let middleValue = arr[middleIndx];
        if (middleValue === value) {
            return middleIndx;
        }
        else if (middleValue <= arr[right]) {
            if (value <= arr[right] && value > arr[middleIndx]) {
                left = middleIndx + 1
            }
            else {
                right = middleIndx - 1;
            }
        }
        else {
            if (value < arr[middleIndx] && value >= arr[left]) {
                right = middleIndx - 1;

            }
            else {
                left = middleIndx + 1
            }
        }
    } return -1;
}