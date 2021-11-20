// sortedFrequency
// Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of 
// the number in the array

// Constraints:

// Time Complexity: O(log N)

// Examples:

// sortedFrequency([1,1,2,2,2,2,3],2) // 4
// sortedFrequency([1,1,2,2,2,2,3],3) // 1
// sortedFrequency([1,1,2,2,2,2,3],1) // 2
// sortedFrequency([1,1,2,2,2,2,3],4) // -1

function searchSortedFrequency(arr, n, search) {

    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while (left <= right) {

        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === n) {
            result = mid;
            if (search) {
                right = mid - 1;
            }
            else {
                left = mid + 1;
            }
        }
        else if (arr[mid] >= n) {
            right = mid - 1;
        }
        else {
            left = left + 1;
        }
    }
    return result;
}

function sortedFrequency(arr, n) {

    let firstoccurrence = searchSortedFrequency(arr, n, true);
    let lastoccurrence = searchSortedFrequency(arr, n, false);
    if (firstoccurrence === -1) {
        return -1;
    }
    else { return lastoccurrence - firstoccurrence + 1; }
}
