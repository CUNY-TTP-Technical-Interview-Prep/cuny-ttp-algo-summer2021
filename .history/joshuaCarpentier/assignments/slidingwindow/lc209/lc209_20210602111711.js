


// function smallest_subarray_with_given_sum(s, arr) {
//   // TODO: Write code here
// }

// console.log(
//   `Smallest subarray length: ${smallest_subarray_with_given_sum(
//     7,
//     [2, 1, 5, 2, 3, 2]
//   )}`
// );
// console.log(
//   `Smallest subarray length: ${smallest_subarray_with_given_sum(
//     7,
//     [2, 1, 5, 2, 8]
//   )}`
// );
// console.log(
//   `Smallest subarray length: ${smallest_subarray_with_given_sum(
//     8,
//     [3, 4, 1, 1, 6]
//   )}`
// );

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
