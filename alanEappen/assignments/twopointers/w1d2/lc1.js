// Problem Statement #
// Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

// Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

//arr is a sorted array 
// targetSum is given 
// We need to find two numbers in the array that would equal the targetSum
//The function returns an array the indices of those two numbers.
/*
 leftPtr -> first element index in the array
 rightPtr -> last element index in the array
 in while loop with a condition of leftPtr < rightPtr
totalSum is equal to the sum of left and right ptrs
 then check if totalSum === to targetsum
 return [leftPtr,rightPtr]
 else if totalSum > targetSum
 rightPtr--
 else if totalSum < targetSum
 leftPtr++

 if no array was returned return an empty array
*/
function pair_with_target_sum(arr, targetSum) {
    let leftPtr = 0,
        rightPtr = arr.length - 1,
        totalSum = 0;

    if (arr.length == 0) {
        return []
    }

    while (leftPtr < rightPtr) {
        totalSum = arr[leftPtr] + arr[rightPtr];
        if (totalSum === targetSum) {
            return [leftPtr, rightPtr];
        }

        if (targetSum > totalSum) {
            leftPtr++;
        } else {
            rightPtr--;
        }
    }
    return [];

}

console.log(pair_with_target_sum([1, 2, 3, 4, 6], 6));
console.log(pair_with_target_sum([2, 5, 9, 11], 11));
console.log(pair_with_target_sum([], 11));
console.log(pair_with_target_sum([1, 3], 11));

  // solution
  // -----
  // let left = 0,
  // right = arr.length - 1;
  // while (left < right) {
  // const currentSum = arr[left] + arr[right];
  // if (currentSum === targetSum) {
  //   return [left, right];
  // }

  // if (targetSum > currentSum) {
  //   left += 1; // we need a pair with a bigger sum
  // } else {
  //   right -= 1; // we need a pair with a smaller sum
  // }
  // }
  // return [-1, -1];
