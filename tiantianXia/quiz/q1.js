/**
 Problem Statement
Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.
 */

/**
 * inputs:
 * @param {*} arr: an array of positive numbers
 * @param {*} size: given the size of the subarray
 * outputs:
 * @returns the maximum sum of the subarrays
 * 
 * steps:
 *      - using sliding windows to determine the subarray size
 *      - add up the sum until reach the subarray size
 *      - store the sum into the max
 *      - remove the fist start element and add the next into the current sum
 *      - next iteration comapare the current sum with the max find the greater one
 * 
 * variables: currentSum: add the current element to the current sum until reach the window size
 *            max: the return result that is the maximum sum
 *            start: pointer as a start pointer of sliding window
 *             end: a end pointer of the sliding window
 * 
 * looping through the arr
 *      if doesn't reach the subarry size
 *          add the current element to the currentSum
 *      else means current iteration reach the size
 *          add the current element to the currentSum
 *          compare the current sum with the max and get the greater one
 *          remove the start elment from the currentSum
 *          move the startpointer to next
 * 
 * return max
 * edge cases: arr is [] => 0
 *             size is greater than the arr.length return the sum of all the elements
 */
function findMax(arr, size){
    if (!arr.length) return 0;

    let start = 0,
        end = 0,
        currentSum = 0,
        max = 0;
    
    for(end; end < arr.length; end ++){
        currentSum += arr[end];

        if(end - start >= size - 1){
            max = Math.max(currentSum, max);
            currentSum -= arr[start];
            start ++;
        }
    }

    if(max === 0 && arr.length < size) max = currentSum

    return max;
}

console.log(`Maximum sum of a subarray: ${findMax([1, 2, 3, 4, 5, 6], 4)}`);
console.log(`Maximum sum of a subarray: ${findMax([2, 4, 5, 6], 2)}`);
console.log(`Maximum sum of a subarray: ${findMax([], 2)}`);
console.log(`Maximum sum of a subarray: ${findMax([1], 2)}`);