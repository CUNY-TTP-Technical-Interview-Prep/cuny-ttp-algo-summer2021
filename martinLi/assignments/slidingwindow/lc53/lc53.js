/*


This problem requires three variables:
window_start
current_max
window_end(in for loop)
window_sum will be keeping the current sum
window_start will be keeping track of indexes in the front of the array.
window_end will be keeping track of indexes throughout the array.

Everytime k is reached(which is when window_end reaches k) then a new current_max will be determined(or keep the old one if it is 
  still current max)

  We will then subtract the index(window_start) from window_sum.
  window_start moves one position over.


  Since windows sum will be subtracting the first(relative) value of the array after reaching k then this process will continue until 
  current max is determined 
  current max will be returned
*/

function max_subarray_size_k(k, arr) {
  let window_start = 0,
    window_sum = 0,
    current_max = 0;

  for (let window_end = 0; window_end < arr.length; window_end++) {
    window_sum += arr[window_end];
    if (window_end >= k - 1) {
      current_max = Math.max(window_sum, current_max);

      window_sum -= arr[window_start];

      window_start += 1;
    }
  }
  return current_max;

  /*
  k = 3


  */

  // TODO: Write your code here
}

console.log(
  `Maximum sum of a subarray of size K: ${max_subarray_size_k(
    3,
    [2, 1, 5, 1, 3, 2]
  )}`
);
console.log(
  `Maximum sum of a subarray of size K: ${max_subarray_size_k(
    2,
    [2, 3, 4, 1, 5]
  )}`
);

// bruteforce/naive approach
// -----
// let maxSum = 0,
// windowSum = 0;

// for (i = 0; i < arr.length - k + 1; i++) {
//   windowSum = 0;
//   for (j = i; j < i + k; j++) {
//     windowSum += arr[j];
//   }
//   maxSum = Math.max(maxSum, windowSum);
// }
// return maxSum;

// better approach
// -----
// let maxSum = 0,
// windowSum = 0,
// windowStart = 0;

// for (window_end = 0; window_end < arr.length; window_end++) {
//   // add the next element
//   windowSum += arr[window_end];
//   // slide the window, we don't need to slide if we've not hit the required window size of 'k'
//   if (window_end >= k - 1) {
//     maxSum = Math.max(maxSum, windowSum);
//     // subtract the element going out
//     windowSum -= arr[windowStart];
//     // slide the window ahead
//     windowStart += 1;
//   }
// }
// return maxSum;
