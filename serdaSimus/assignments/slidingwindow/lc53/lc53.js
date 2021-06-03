// Problem Statement #
// Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

/*
  [] ... [1] ... [1,2,3,4,5]
  I need accumulator: sum
  I need var: largestValue
  I need a counter: 

  for loop: 
    add each item to sum
    check if counter >= k:
      compare sum and largest: if sum is bigger:
        i would save sum to larges, else I would continue
        sum = sum - arr[counter - k]
    counter++

  return largestValue
      
*/
// [1,2,3,4,6] k=3

function max_subarray_size_k(k, arr) {
  // basic edge cases, k is null, arr is null,
  // k is negative, k>arr.length
  if (!arr.length || k > arr.length || k < 0 || k == null) return null;

  let sum = 0; // accumulator
  let largest = 0; // stores hightest num
  let counter = 1; // current position of num in a for...of loop.

  // performs like a do...while
  for (let num of arr) {
    // limits outOfBound and offByOne errors.
    sum += num; // accumulating the sum of the numbers visited

    // checking if counter has reached a window size k
    if (counter >= k) {
      // comparing sum to largest, and storing larger of the two.
      // this works because our value will never be -negative.
      // largest = sum > largest ? sum : largest;

      sum -= arr[counter - k]; // removing the first item from the last window of k size.
    }
    counter++; // increasing counter, effectively moving the window forward.
  }
  return largest;
}

/*
Notes: 
Keywords: contiguous, sub-array, substring
Goal: attempt to complete it in O(n) but absolutely less than O(n^2) TC, O(1) space.
*/

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
  `Maximum sum of a subarray of size K: ${max_subarray_size_k(2, [])}`
);

console.log(
  `Maximum sum of a subarray of size K: ${max_subarray_size_k(2, [2])}`
);

console.log(
  `Maximum sum of a subarray of size K: ${max_subarray_size_k(-1, [2])}`
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
