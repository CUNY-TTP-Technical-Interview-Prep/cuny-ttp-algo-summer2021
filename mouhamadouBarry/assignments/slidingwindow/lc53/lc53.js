// Problem Statement #

// Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.


/*---------------Inital Thinking-------------------- */
/* 
Input: 
  - An array of positive numbers
  - A positive number k
Output:
  - The maximum sum from any of the contigous subarray of size k

Logic:  
  - The sliding window pattern seems like can be used in this problem
  - Initialize a startPtr, endPtr, currSum, and max varible
  - I will use a while loop to traverse through the array
  Inside While Loop ->  add index kth times
                    ->  check to see if the currSum is greater then our max value
                    ->  If not then substract my startPtr from my sum
                    ->  Increment my startPtr to the next index
  - After my while is finish, I should return the max value

Edge Cases:
  - What if the array is empty/null?
  - What if the array size is less then k?
*/
function max_subarray_size_k(k, arr) {
  //Varibles
  let startPtr=0
  let egdePtr=0
  let sum=0
  let max=-1 //I do not need to worry about the max being a negetive number because we are told that the array only holds positive ints
  
  //Edge Cases:
  if( !(arr.length) ){return max}

  //the main work
  while ( egdePtr<arr.length ){
    sum += arr[egdePtr]
    if( egdePtr>=k-1 ){
      max = Math.max(sum,max)
      sum -= arr[startPtr]
      startPtr++
    }
    egdePtr++
  }

  //the output
  return max

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
