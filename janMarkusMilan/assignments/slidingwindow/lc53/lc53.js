// Problem Statement #

// Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

function max_subarray_size_k(k, arr) {
  // TODO: Write your code here
  let max = 0;
  let sum = 0;

  // Form a 'window' using two pointers over a portion of the data
  let leftPtr = 0;
  for (let rightPtr = 0; rightPtr < arr.length; rightPtr++) {
    // Add current element to the sum (keep track of sum of values in window)
    sum += arr[rightPtr];

    // Once the window reaches k size, we slide the window over by 1
    if (rightPtr >= k - 1) {
      // Keep track of the max of each window slide iteration
      max = Math.max(max, sum);

      // Subtract the left-most value in the window from the sum (since we slide the window forward)
      sum -= arr[leftPtr];

      // Increment the left pointer by 1 (update the beginning position of the window)
      leftPtr++;
    }
  }

  return max;
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
