
// arr is a postive integer array 
// s is a given number to compare 
// to find the smallest subarray that is equal or greater than s
function smallest_subarray_with_given_sum(s, arr) {
  let totalSum = 0 //calculate the sum
  minLength = arr.length //making the minLength to the max size of the array
  windowStart = 0

  if (arr.length == 0) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    totalSum += arr[i]; // here we add the next element
    // here we are shrinking window as small possible until the sum is smaller than s
    while (totalSum >= s) {
      minLength = Math.min(minLength, i - windowStart + 1);
      totalSum -= arr[windowStart];
      windowStart++;
    }
  }

  return minLength;
}

console.log(
  `Smallest subarray length: ${smallest_subarray_with_given_sum(
    7,
    //    's'  'w-e'
    [2, 1, 5, 2, 3, 2]
  )}`
);
console.log(
  `Smallest subarray length: ${smallest_subarray_with_given_sum(
    7,
    [2, 1, 5, 2, 8]
  )}`
);
console.log(
  `Smallest subarray length: ${smallest_subarray_with_given_sum(
    8,
    [3, 4, 1, 1, 6]
  )}`
);

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
