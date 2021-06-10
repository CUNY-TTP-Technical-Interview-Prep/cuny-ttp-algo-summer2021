// Problem Statement #209

// Given an array of positive numbers and a
//positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is
//greater than or equal to ‘S’. Return 0 if no such subarray exists.
/*
We know s is the target. We have to find the smallest number of values which add up to 
be greater than or equal to the target within the array.

Every value within subarray is positive

A for loop:

we gotta compare:
does window sum greater than or equal to s
if greater than s

edge cases
if arr is empty then return 0

*/

function smallest_subarray_with_given_sum(s, arr) {
  let window_start = 0,
    window_sum = 0,
    min_counter = Infinity,
    counter = 0; //length
  if (arr.length == 0) return 0;

  for (let window_end = 0; window_end < arr.length; window_end++) {
    if (window_sum > s) {
      window_sum -= arr[window_start];
      counter--;
      window_start += 1;
    }
    if (window_sum <= s) {
      window_sum += arr[window_end];
      counter += 1;
    }

    if (window_sum == s) {
      if (counter < min_counter) {
        min_counter = counter;
      }
    }

    /*  if (window_sum >= s) {//s is the target value we are supposed to compare to
      if (min_counter == 0) {
        min_counter = counter;
      } else if (min_counter > counter) {
        min_counter = counter;
      } else if (min_counter < counter) {
        window_sum -= arr[window_start];
        counter--;
        window_start += 1;
      }
    }
    */
  }
  return min_counter;

  // TODO: Write code here
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
    [3, 4, 1, 2, 6]
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
