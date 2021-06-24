/*
Problem Statement:

Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

Overview:
Input: an array [2,3,2,5,5]
output: 12

This problem can be solved using window:
    loop to visit all item in the array:
        have a windowSize
        as long as windowsize does not exceed K
            calculate the sum by adding the next value

*/

function maxContiguousSubArray(myArr, k) {
  let winStart = 0;
  let maxSum = -Infinity;
  let sum = 0;

  for (let index = 0; index < myArr.length; index++) {
    let winSize = index - winStart + 1;
    sum += myArr[index];

    if (winSize <= k) {
      maxSum = sum > maxSum ? sum : maxSum;
    } else {
      // reduce windows size and sum.
      while (winSize > k) {
        sum = sum - myArr[winStart];
        winStart++;
        winSize = index - winStart + 1;
        maxSum = sum > maxSum ? sum : maxSum;
      }
    }
  }

  return maxSum;
}

console.log(maxContiguousSubArray([2, 3, 1, 5, 6, 9, 2, 3, 5], 3));
