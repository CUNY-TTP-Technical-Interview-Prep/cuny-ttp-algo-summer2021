// Problem Statement #
// Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

// Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

function pair_with_target_sum(arr, targetSum) {
	// TODO:write code here
	// since it's a sorted array, two pointers can be used to keep track of where our two numbers are to sum up to our target
	// continue until left < right is not true. When it is true that means every single element has been met
	// sum of left and right = to targetSum, return left, right
	// if sum < targetSum then increment left pointer
	// else decrement right pointer

	// empty return []
	// nothing adds up to targetSum return []

	let leftPointer = 0;
	let rightPointer = arr.length - 1;
	let sum = 0;

	if (!arr.length) {
		return [];
	}

	while (leftPointer < rightPointer) {
		sum = arr[leftPointer] + arr[rightPointer];
		if (sum === targetSum) {
			return [ leftPointer, rightPointer ];
		} else if (sum < targetSum) {
			leftPointer++;
		} else {
			rightPointer--;
		}
	}
	return [];
}

console.log(pair_with_target_sum([ 1, 2, 3, 4, 6 ], 6));
console.log(pair_with_target_sum([ 2, 5, 9, 11 ], 11));
console.log(pair_with_target_sum([ 1, 2, 3, 4, 5 ], 221));
console.log(pair_with_target_sum([], 221));

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
