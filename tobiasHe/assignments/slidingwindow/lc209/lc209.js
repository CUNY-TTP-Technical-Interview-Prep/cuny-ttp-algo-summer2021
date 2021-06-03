//Given an array of positive integers arr and a positive integer s,
//return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] of
//which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.

//s = 7, arr = [2,3,1,2,4,3]

//s = 7, arr[7,3,1]  output: 1

//output: 2

function smallest_subarray_with_given_sum(s, arr) {
	// TODO: Write code here
	//whenever we find our targetSum = s;
	//update our length of the subarray. Math.min(length, minLength)

	// 7 , [ 2, 1, 5, 2, 3, 2 ])

	let startWindow = 0;

	let currentSum = 0;

	let minLength = Infinity;

	for (let endWindow = 0; endWindow < arr.length; endWindow++) {
		currentSum += arr[endWindow];

		while (currentSum >= s) {
			minLength = Math.min(endWindow - startWindow + 1, minLength);
			currentSum -= arr[startWindow++];
		}
	}
	return minLength;
}

console.log(`Smallest subarray length: ${smallest_subarray_with_given_sum(7, [ 2, 1, 5, 2, 3, 2 ])}`);
console.log(`Smallest subarray length: ${smallest_subarray_with_given_sum(7, [ 2, 1, 5, 2, 8 ])}`);
console.log(`Smallest subarray length: ${smallest_subarray_with_given_sum(8, [ 3, 4, 1, 1, 6 ])}`);

// Solution
// -----
// let windowSum = 0,
// minLength = Infinity,
// windowStart = 0;

// for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
// windowSum += arr[windowEnd]; // add the next element
// // shrink the window as small as possible until the 'window_sum' is smaller than 's'
// while (windowSum >= s) {
//   minLength = Math.min(minLength, windowEnd - windowStart + 1);
//   windowSum -= arr[windowStart];
//   windowStart += 1;
// }
// }

// if (minLength === Infinity) {
// return 0;
// }
// return minLength;
