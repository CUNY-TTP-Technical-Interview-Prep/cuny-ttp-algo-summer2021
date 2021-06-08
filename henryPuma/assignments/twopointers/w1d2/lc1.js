// Problem Statement #
// Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

// Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

// Precondition:
// Arr: A sorted array of numbers
// targetSum: the value that our pair have to add up to

// Postcondition:
// sumPair: An array of 2 integers that add up to target sum

function pair_with_target_sum(arr, targetSum) {
  // Arr.length === 0 : array is empty
  if(!arr.length) return [-1, -1]; // -1,-1 because they are invalid indexes

  // [1, 2 ,3 ,3 ,7, 8, 8]  TARGET=3, OUTPUT=5

  let start = 0; // The index of the left most value in our array
  let end = arr.length - 1; // the index of the right most array
  let currentValue = 0; // A variable that will store the current sum of start and end

  // The start and end pointer do not equal each other
  while(start < end){
    currentValue = arr[start] + arr[end];

    if(currentValue === targetSum){ // If the sum of the array at start && end === targetSum
      return [start, end];
    } else if(currentValue > targetSum){ // 1 + 7 > 6
      end -= 1;
    } else if (currentValue < targetSum){ // 1 + 7 < 9
      start +=1;
    }
  }

  return [-1, -1]; // return default since a pair was not found
}

console.log(pair_with_target_sum([1, 2, 3, 4, 6], 6)); // 1, 3
console.log(pair_with_target_sum([2, 5, 9, 11], 11)); // 0, 2
console.log(pair_with_target_sum([1,2,3,4], 5)); // 1, 2
console.log(pair_with_target_sum([], 5)); // -1 ,-1
