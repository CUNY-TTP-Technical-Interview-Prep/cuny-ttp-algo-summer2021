/**
 * Given the int arr num, find cont sub arr containing at
 *  least one number which has the largest sum and return its sum;
 *
 * My version: Array, Int
 * find: largest sub array sum
 * return : largest sum
 *
 * there can be neg numbers in the array
 *
 * edge: for 0's  return 0
 * edge: [] array should have at least one elem
 *
 */

function max_subarray_size_k(k, arr) {
  if (k === 0) return 0;
  //make the variables
  let maxSum = 0;
  let windowStart = 0;
  let tempSum = 0;

  //loop through the array
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    //add the next element in the array
    tempSum += arr[windowEnd];

    if (windowEnd >= k - 1) {
      //comparison
      maxSum = Math.max(maxSum, tempSum);
      //remove back element from array
      tempSum -= arr[windowStart];
      //move the slider up
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
console.log(
  `Maximum sum of a subarray of size K: ${max_subarray_size_k(
    2,
    [2, 3, 4, 1, 5, -6, -3, 3, 1, 5, -8]
  )}`
);

//Time complexity O(n)
//Space complexity O(1)

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
