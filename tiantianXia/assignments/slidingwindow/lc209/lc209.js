// Problem Statement #

// Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.
/**
 * input :
 * @param {*} s the number that compare to the subarray and find the smallest length
 * @param {*} arr array that looking for the smallest length subarray
 * 
 * output the lenght of the smallest length of subarray
 * 
 * variable: windowStart, windowEnd to operate a sliding window.
 * minLen to find the smallest length
 * sum: find the sum of the elements
 * 
 * run a for loop to implement all the array element.
 * add the element to the sum
 * if sum is greater or equal to the given s
 * minLen should be the smaller length of the subarray
 * update the windowStart, add one postion
 * update the sum, substract one
 * 
 * return the number of the minLen
 *  edge case: no subarray exist return 0 or arr is empty return 0,
 */

function smallest_subarray_with_given_sum(s, arr) {
  // TODO: Write code here
  if(arr.length === 0 || s <= 0) return 0;
  let windowEnd = 0,
    windowStart = 0,
    minLen = arr.length,
    sum = 0;
  
  for (windowEnd; windowEnd < arr.length; windowEnd ++){
    sum += arr[windowEnd];
    if(sum > s){
      minLen = Math.min(minLen, windowEnd - windowStart);
      sum -= arr[windowStart ++];
    }
  }

  return minLen;
}

console.log(
  `Smallest subarray length: ${smallest_subarray_with_given_sum(
    7,
    [2, 1, 5, 2, 3, 2]
  )}`
);
console.log(
  `Smallest subarray length: ${smallest_subarray_with_given_sum(
    7,
    [2, 1, 5, 2, 8]
  )}`
);
console.log(
  `Smallest subarray length: ${smallest_subarray_with_given_sum(
    8,
    [3, 4, 1, 1, 6]
  )}`
);

// Solution
// -----
// let windowSum = 0,
// minLength = Infinity,
// windowStart = 0;

// for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
// windowSum += arr[windowEnd]; // add the next element
// // shrink the window as small as possible until the 'window_sum' is smaller than 's'
// while (windowSum >= s) {
//   minLength = Math.min(minLength, windowEnd - windowStart + 1);
//   windowSum -= arr[windowStart];
//   windowStart += 1;
// }
// }

// if (minLength === Infinity) {
// return 0;
// }
// return minLength;
