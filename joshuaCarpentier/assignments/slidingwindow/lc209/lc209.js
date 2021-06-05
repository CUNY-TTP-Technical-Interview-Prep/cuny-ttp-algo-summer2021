// Problem Statement #

// Given an array of positive numbers and a positive number ‘S,’ find the length 
// of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.

/**
 * 
 * BRUTE Force (proably nested loop or mayb)
 * pre condition empty array
  let windowSize = 2;
  for loop {
    iterate through array length 
    // window condition if array[index] >= target return length of numbers in tha addition 
    
    or 
    [prefered come because we want the smallest subarray]
    if subarry is >=
    // target return length basically if one number meets condition return that subarray length without addition
    /

  }
 

  alt 

  loop while intial index and next index sum less than target ...
 * 
 * 
 */



function smallest_subarray_with_given_sum(s, arr) {
  let targetSum = 0, 
  windowSize = 0;

  for (let start = 0; start < arr.length; start++){
    arr[start]
  }
  



}

console.log(
  `Smallest subarray length: ${smallest_subarray_with_given_sum(
    7,
    [2, 1, 5, 2, 3, 2]
  )}\n`
);
console.log(
  `Smallest subarray length: ${smallest_subarray_with_given_sum(
    7,
    [2, 1, 5, 2, 8]
  )}\n`
);
console.log(
  `Smallest subarray length should be: ${smallest_subarray_with_given_sum(
    8,
    [3, 4, 1, 1, 6]
  )}\n`
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
