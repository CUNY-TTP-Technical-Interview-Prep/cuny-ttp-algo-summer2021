// Problem Statement #

// Given an array of positive numbers and a positive number ‘k,’
//find the maximum sum of any contiguous subarray of size ‘k’.

//They are all positive!

function max_subarray_size_k(k, arr) {
  //k is the number of supposed values within the subarray
  let window_start = 0,
    window_sum = 0,
    max_val = 0;
  //window_start is the pointer of first part of the list
  //window sum is the current accumlative sum of the subarray
  for (let window_end = 0; window_end < arr.length; window_end++) {
    window_sum += arr[window_end];
    if (window_end >= k - 1) {
      max_val = Math.max(max_val, window_sum);
      window_sum -= arr[window_start];
      window_start += 1;
    }
  }
  return max_val;

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
