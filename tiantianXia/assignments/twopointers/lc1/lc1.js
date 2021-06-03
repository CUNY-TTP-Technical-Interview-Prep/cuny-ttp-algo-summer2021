// Problem Statement #
// Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

// Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

/**
 * input:
 * @param {*} arr : an array of sorted numbers no need to be positive
 * @param {*} targetSum : the sum of two pairs.
 * 
 * output: the indices of the two numbers.
 * 
 * variabels: left , right for the two pointer apporach
 * sum: add two elements and compare to the target sum
 * 
 * while loop left is less than the right pointers
 * add two elment to the sum
 * if the sum is equal to the target sum
 * return indices of the two element
 * 
 * if the sum is greater the target sum 
 * we update the right pointer to the left 
 * 
 * else if the sum is less the target sum 
 * we update the left pointer to the right
 * 
 * return []
 * 
 * edge case: []
 */

function pair_with_target_sum(arr, targetSum) {
  // TODO:write code here
  if(!arr.length) return [];
  let left = 0,
   right = arr.length - 1,
   sum = 0;

   while (left < right){
     sum = arr[left] + arr[right];
     if (sum === targetSum){
       return [left, right];
     } else if (sum > targetSum){
       right --;
     }else{
       left ++;
     }
   }

   return [];
}

console.log(pair_with_target_sum([1, 2, 3, 4, 6], 6));
console.log(pair_with_target_sum([2, 5, 9, 11], 11));
console.log(pair_with_target_sum([], 9));

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
