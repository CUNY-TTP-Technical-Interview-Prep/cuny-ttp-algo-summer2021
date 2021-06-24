// Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

// [1, 2, 3, 4, 5] k = 3

// 1 2 3    2 3 4    3 4 5   need to check each of these subarrays

// each subarray only change one number at a time

// can use sliding window to travese through Array

//keep a running sum of subarray currently looking at
//keep maxSum variable to keep track of best subarray sum found so far
//loop through array
////if index < k, add it to sum
////else if we are >= k i.e. we have reached the k window size for the first k elements already, need to slide the window
//////delete the number k away from currentIndex
//////add currentNumber to index
////after add adding and/or subtracting numbers, check if current subarraysum is greater than maxSum.
//////replace maxSum with currentSum

// k = 2
// i:   0 1 2 3 4 5
// arr: 1 2 3 4 5 6

function maxSubarraySum(arr, k) {
  let maxSum = 0;
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i >= k) {
      let indexToSubtract = i - k;
      currentSum -= arr[indexToSubtract];
    }
    currentSum += arr[i];
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

console.log(
  `[${[1, 2, 3, 4, 5, 6]}]  k: ${1}  answer: ${maxSubarraySum(
    [1, 2, 3, 4, 5, 6],
    1
  )}`
);

console.log(
  `[${[1, 2, 6, 4, 5, 3]}]  k: ${2}  answer: ${maxSubarraySum(
    [1, 2, 6, 4, 5, 3],
    2
  )}`
);

console.log(
  `[${[1, 1, 1, 1, 1, 1]}]  k: ${3}  answer: ${maxSubarraySum(
    [1, 1, 1, 1, 1, 1],
    3
  )}`
);

console.log(
  `[${[1, 1, 1, 1, 1, 1]}]  k: ${6}  answer: ${maxSubarraySum(
    [1, 1, 1, 1, 1, 1],
    6
  )}`
);
