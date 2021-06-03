/*
Given an integer array nums, 
find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.


input - k, arr
output - int, has the largest sum

varable - maxSum, windowStart, windowEnd, currentSum

for (let i=0; i<arr.length; i++)
  currentSum =+ arr[i]
  windowEnd++
  
  if(windowEnd > k-1)
    -comparing currentSum with maxSum
    -currentSum - arr[windowStart]
    -WindowStart++
    

*/
function max_subarray_size_k(k, arr) {
  // TODO: Write your code here
  let maxSum = 0;
	let currentSum = 0;
	let windowStart = 0;
	let windowEnd = 0;

	for (let i = 0; i < arr.length; i++) {
		currentSum += arr[i];
		windowEnd++;
		//come back
		if (windowEnd > k - 1) {
			maxSum = Math.max(maxSum, currentSum);
			//subtract element
			currentSum = currentSum - arr[windowStart];
			windowStart++;
		}
	}
	return maxSum;

  
}

console.log(
  `Maximum sum of a subarray of size K: ${max_subarray_size_k(
    3,
    [2, 1, 5, 1, 3, 2]
  )}`
);
console.log(
  `Maximum sum of a subarray of size K: ${max_subarray_size_k(
    2,
    [2, 3, 4, 1, 5]
  )}`
);

// bruteforce/naive approach
// -----
// let maxSum = 0,
// windowSum = 0;

// for (i = 0; i < arr.length - k + 1; i++) {
//   windowSum = 0;
//   for (j = i; j < i + k; j++) {
//     windowSum += arr[j];
//   }
//   maxSum = Math.max(maxSum, windowSum);
// }
// return maxSum;

// better approach
// -----
// let maxSum = 0,
// windowSum = 0,
// windowStart = 0;

// for (window_end = 0; window_end < arr.length; window_end++) {
//   // add the next element
//   windowSum += arr[window_end];
//   // slide the window, we don't need to slide if we've not hit the required window size of 'k'
//   if (window_end >= k - 1) {
//     maxSum = Math.max(maxSum, windowSum);
//     // subtract the element going out
//     windowSum -= arr[windowStart];
//     // slide the window ahead
//     windowStart += 1;
//   }
// }
// return maxSum;
