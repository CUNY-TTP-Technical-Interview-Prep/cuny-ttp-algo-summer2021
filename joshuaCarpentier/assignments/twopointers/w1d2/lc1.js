// Problem Statement #
// Given an array of sorted numbers and a target sum, find a pair in the array
// whose sum is equal to the given target.

// Write a function to return the indices of the two numbers
// (i.e. the pair) such that they add up to the given target.

/**
 * Given array nums with pos and maybe neg nums
 * loop through array and  from left to right
 *
 * condition if left or right is less then the other
 * 
 * so we increment from start and decrement from end
 * 
 * adding both pointers and checking if sum is equal to 
 * target and return the index for the left and right value that
 * 
 * matched the target
 *
 *
 *
 *
 */


function pair_with_target_sum(arr, targetSum) {
  let map = new Map();
    // attempt 2
    // let myMap = new Map()
    // myMap.set(0, 'zero')
    // myMap.set(1, 'one')
    
    // for (let [key, value] of myMap) {
    //   console.log(key + ' = ' + value)
    // }

    let listLength = arr.length

    for(let start = 0; start < listLength; start++){
      if (map.has(targetSum - arr[start])){
        return [map.get(targetSum - arr[start]), start]
      }
      map.set(arr[start], start);
    }




  // attempt 1
  // if(arr.length == 0){
      // console.log(arr.length)
  // return [];
  // }

  // while compares the end and start better use for questions including pointers
  // for(let start = 0; start < arr.length; start++){
  //     let end = arr.length + 1;

  //     if (arr[start] < end){
  //       let currentSum = 0;
  //       currentSum = arr[start] + end ;
  //       end--;

  //       console.log(currentSum);

  //     }
  //   }

  



}

// edge case what if array has odd num of subarrays
console.log(pair_with_target_sum([1, 2, 3, 4, 6], 6));
  console.log(pair_with_target_sum([2, 5, 9, 11], 11));
  console.log(pair_with_target_sum([-2, -1, -9, 3, 8], 2));
//   console.log(pair_with_target_sum([], 2));

//   console.log(pair_with_target_sum([2, 5, 9, 11], 11));

// solution
// -----
// let left = 0,
//   right = arr.length - 1;
// while (left < right) {
//   const currentSum = arr[left] + arr[right];
//   if (currentSum === targetSum) {
//     return [left, right];
//   }

//   if (targetSum > currentSum) {
//     left += 1; // we need a pair with a bigger sum
//   } else {
//     right -= 1; // we need a pair with a smaller sum
//   }
// }
// return [-1, -1];
