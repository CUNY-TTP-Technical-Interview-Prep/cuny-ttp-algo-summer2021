// Problem Statement #

// Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.

//keep track of two pointers, start and end
//move end pointer until you find valid window
//check if window size is smaller than the best, save it
//if you find a valid window, try to shrink by moving start until it becomes invalid
//repeat above steps

function smallest_subarray_with_given_sum(s, arr) {
  // TODO: Write code here
  let minLength = Number.MAX_SAFE_INTEGER;
  let start = 0,
    end = -1;
  let currentSum = 0;
  while (end < arr.length) {
    if (currentSum >= s) {
      currentSum -= arr[start];
      start++;
    } else {
      end++;
      if (end != arr.length) currentSum += arr[end];
    }
    // console.log(currentSum);
    if (currentSum >= s) minLength = Math.min(minLength, end - start + 1);
  }
  if (minLength == Number.MAX_SAFE_INTEGER) return 0;
  return minLength;
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
