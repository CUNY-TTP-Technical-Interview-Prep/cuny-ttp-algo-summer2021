function max_subarray_size_k(k, arr) {
  let maxSum = 0,
windowSum = 0,
windowStart = 0;

for (window_end = 0; window_end < arr.length; window_end++) {
  // add the next element
  windowSum += arr[window_end];
  // slide the window, we don't need to slide if we've not hit the required window size of 'k'
  if (window_end >= k - 1) {
    maxSum = Math.max(maxSum, windowSum);
    // subtract the element going out
    windowSum -= arr[windowStart];
    // slide the window ahead
    windowStart += 1;
  }
}
return maxSum;

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




// Solution
// -----

// var numSubarrayProductLessThanK = function(nums, k) {
//   let count = 0
//   let j = 0
//   let i = 0
//   let product = 1

//   while (i < nums.length && j < nums.length) {
//       if (product * nums[i] < k) {
//           product = product * nums[i]
//           count   = count + (i - j + 1)
//           i++
//       } else {
//           if (nums[j]) product = product / nums[j]
//           j++
//       }
//   }

//   return count
// }

// -----