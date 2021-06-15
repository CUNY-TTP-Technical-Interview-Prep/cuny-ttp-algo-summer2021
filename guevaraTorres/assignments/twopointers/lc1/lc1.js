// Problem Statement #
// Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

// Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

/**
 * 
 *  The pair of numbers can be found with two pointers representing different values within the array.
 * 
 * Initialize the 'left' pointer at the start of the array
 * Initialize the 'right' pointer at the end of the array
 * 
 * Add left and right together to make current sum
 * Then check if the current sum === target sum
 * If left + right > target sum, decrement right
 * If left + right < target sum, increment left
 * If neither, return the sum
 *  
 */


function pair_with_target_sum(arr, targetSum) {
  // TODO:write code here

  let left = 0,
  right = arr.length -1,
  currentSum = 0;
  
  while(currentSum !== targetSum){
    currentSum = arr[left] + arr[right];
    if( currentSum < targetSum ) {
      left++;
    }
    if( currentSum > targetSum ) {
      right--;
    }
    else return [left, right];
  }

  return [-1, -1];

  // let left = 0,
  // right = arr.length - 1,
  // currentSum = 0;

  // while(currentSum !== targetSum){
  //   currentSum = arr[left] + arr[right];
  //   if( currentSum < targetSum ) {
  //     left++;
  //   }
  //   if( currentSum > targetSum ) {
  //     right--;
  //   }
  //   else return[ left, right ];
  // }

  // return [-1, -1];

}

console.log(pair_with_target_sum([1, 2, 3, 4, 6], 6));
console.log(pair_with_target_sum([2, 5, 9, 11], 11));

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
