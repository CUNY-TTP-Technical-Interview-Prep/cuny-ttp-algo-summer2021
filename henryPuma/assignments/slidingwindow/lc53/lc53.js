// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Precondition: 
// k: minimum sub array size 
// nums: non empty array of integers

// Postcondition: 
// maxSum: integer denoting the maximum sum possible of any sub array whose length >= k
function max_subarray_size_k(k, arr) {

  const arrLength = arr.length; // Since we're not mutating the array, we can store it's size once and use everywhere

  if (arrLength < k) return 0; // When the minimum sub array required is greater than the actual array length

  let maxSum = Number.MIN_VALUE; // Store the max sum overall, we initialize it to the lowest possible value
  let windowSum = 0; // Total sum of current window when window size is == k

  let startWindow = 0; // Left index of window, moves to the right when endWindow >= k
  let endWindow = 0; // Right index of window iterates forward throughout the array

  const minIndex = k-1; // Compute k-1 once and use it to compare with endWindow for every iteration in the while loop on line 22

  while(endWindow < arrLength){
    windowSum += arr[endWindow]; // Accumulate the sum of our current window

    if(endWindow >= minIndex ){ // Check if endWindow is at index where index >= k-1
      // If true, then windowSum has the current sum of our window where windowLength == k
      maxSum = windowSum > maxSum ? windowSum : maxSum; // Update max sum
      windowSum -= arr[startWindow]; // Remove value at startWindow from windowSum since we are shifting the startWindow index to the right
      startWindow++; // Shift startWindow to the right
    }
    endWindow++; // Shift endWindow to the right
  }

    // Run through:
    // [1 2 3 4 5 6] 
    // endWindow=2, windowSum=6, windowSum > maxSum => maxSum = windowSum = 6
    // endWindow=3, windowSum=9, windowSum > maxSum => maxSum = windowSum = 9
    // endWindow=4, windowSum=12, windowSum > maxSum => maxSum = windowSum = 12
    // endWindow=5, windowSum=17, windowSum > maxSum => maxSum = windowSum = 17
  return maxSum;
}

console.log(
  `Maximum sum of a subarray of size K: ${max_subarray_size_k(
    3,
    [2, 1, 5, 1, 3, 2]
  )}`
); // Expected: 9, Output: 9
console.log(
  `Maximum sum of a subarray of size K: ${max_subarray_size_k(
    2,
    [2, 3, 4, 1, 5]
  )}`
); // Expected: 7, Output: 7

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
