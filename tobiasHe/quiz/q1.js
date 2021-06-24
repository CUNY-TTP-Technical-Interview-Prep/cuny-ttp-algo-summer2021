//Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

//use sliding window because it's a subarray
//the window should slide when the size of the window exeeds length of k - 1
//subtract from the currentSum when we slide the windowStart
//keep track of the maxSum at each iteration.
//return maxSum

const maxSum = function(arr, k) {
	let maxSum = 0;
	let currSum = 0;
	let windowStart = 0;

	if (k < 1) {
		return maxSum;
	} else {
		for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
			currSum += arr[windowEnd];
			if (windowEnd >= k - 1) {
				maxSum = Math.max(currSum, maxSum);
				currSum -= arr[windowStart];
				windowStart++;
			}
		}
	}
	return maxSum;
};

//test cases
let arr = [];
let arr2 = [ 1, 2, 3, 4, 5 ];
console.log(maxSum(arr, 3)); //0
console.log(maxSum(arr2, 2)); //9
console.log(maxSum(arr2, 5)); //15
console.log(maxSum(arr2, 0)); //0
console.log(maxSum(arr2, 1)); //5

//time complexity
/* 
  O(n), n being the size of the input array. looping through the array once
*/

//space complexity
/* 
  O(1), takes the same amount of space no matter how large the input array is
*/
