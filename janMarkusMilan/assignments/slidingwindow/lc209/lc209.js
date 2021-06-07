// Problem Statement #

// Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.

/*
Edge cases: return 0
Variables: min, sum

Form a window (loop):
    increment sum until >= target
    while sum >= target:
        keep track of current minimum
        subtract leftmost
        left++;
    
    if sum does not equal target:
        return 0

return the min
*/

function smallest_subarray_with_given_sum(s, arr) {
  // TODO: Write code here
  let sum = 0;
  let min = arr.length + 1;

  // Form a 'window' using two pointers over a portion of the data
  let leftPtr = 0;
  for (let rightPtr = 0; rightPtr < arr.length; rightPtr++) {
    // Add current element to the sum (keep track of sum of values in window)
    sum += arr[rightPtr];

    // Once the sum of the values in the window reaches the target, slide the window over by 1
    while (sum >= s) {
      // Keep track of the min of each window slide iteration
      min = Math.min(min, rightPtr - leftPtr + 1);

      // Subtract the left-most value in the window from the sum (since we slide the window forward)
      sum -= arr[leftPtr];

      // Increment the left pointer by 1 (update the beginning position of the window)
      leftPtr++;
    }
  }

  // If the min remains unchanged (the sum of the values in the array don't reach the target), return 0
  if (min === arr.length + 1) {
    return 0;
  }

  return min;
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
console.log(
  `Smallest subarray length: ${smallest_subarray_with_given_sum(
    100,
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
