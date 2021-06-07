// Problem Statement #
// Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

// Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

// Problem Statement #
// Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

// Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

/*
in: array, integer
out: array of the index

[2,4,6,8] , 12

arrIndice, startptr, endptr, sum

while start less than end:
	sum = value at start + value at end
	
	if(sum === targetValue)
		add startPtr and endPtr to arrIndice
		return arrIndice
	else if(sum > target value)
		move endPtr by -1.
	else{
		move startPtr by +1
	}
return [-1,-1] // we didn't find a pair.
edge1: arr is empty return [-1,-1]
edge2: if k is less than arr[0], return [-1,-1]

*/

function pairForTargetSum(arr, s) {
  let startPtr = 0,
    endPtr = arr.length - 1,
    sum = null,
    arrIndice = [];

  while (startPtr <= endPtr) {
    sum = arr[startPtr] + arr[endPtr];
    if (sum === s) {
      arrIndice.push(startPtr);
      arrIndice.push(endPtr);
      return arrIndice;
    } else if (sum > s) {
      endPtr--;
    } else {
      startPtr++;
    }
  }
  return [-1, -1];
}

console.log(pairForTargetSum([2, 4, 6, 8], 12));
console.log(pairForTargetSum([2, 4, 6, 8], 14));
console.log(pairForTargetSum([], 12));
console.log(pairForTargetSum([2, 4, 6, 8], 1));
console.log(pairForTargetSum([1, 2, 3, 4, 6], 6));
console.log(pairForTargetSum([2, 5, 9, 11], 11));

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
