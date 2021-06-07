// Problem Statement #
// Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

// Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

/*
Solution Using HashMaps:
  - Create a hashmap (or object)
  - Loop and check if the current value is in the hashmap
  - If no, we determine the "pairing" for the number and insert it and it's index in the hashmap
  - If yes, we return the index of the paired number (value) and the current index we are on
  - For edge cases, return null
*/

function pair_with_target_sum(arr, targetSum) {
  // TODO: Write code here
  const numsMap = {}; // Create an empty hashmap
  for (let p = 0; p < arr.length; p++) {
    // We check if the current value at p exists already inside the numsMap
    const currentMapVal = numsMap[arr[p]]; // Capture inside a variable for reusability

    // Check if the value exists in the numsMap, else we get back undefined
    if (currentMapVal >= 0) {
      return [currentMapVal, p]; // If it exists, then return the value and index
    } else {
      // If it doesn't exist (undefined), then generate a new numberToFind
      const numberToFind = targetSum - arr[p];
      numsMap[numberToFind] = p; // Insert new number and it's index in the hashmap
    }
  }

  return null; // No solution exists
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
