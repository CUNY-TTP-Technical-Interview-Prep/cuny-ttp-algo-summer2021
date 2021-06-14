// Problem Statement #

// Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.

/* 
in: an array, an integer
out: windowSize >= 0

Solution:
smallestWindowSize
currentWindowSize
windowStart
windowEnd(current index)
sum: as my running total


visit every item, Keep a running sum of the items visited.
    record where the windows started, and its current position.
    windowSize is its current pos less its start pos + 1 because array start at 0.
    each time we add a new value to sum, increase windowSize.
    each time we remove a value from sum, shrink windowSize.
    
*/

function smallest_subarray_with_given_sum(s, arr) {
  // TODO: Write code here
  let smallestWindowSize = Infinity,
    currentWindowSize = 0,
    windowStart = 0,
    sum = 0;

  for (let windowEnd in arr) {
    if (arr[windowEnd] >= s) {
      sum = arr[windowEnd];
      windowStart = windowEnd;
      currentWindowSize = 1;
      smallestWindowSize =
        currentWindowSize < smallestWindowSize
          ? currentWindowSize
          : smallestWindowSize;
      break;
    } else {
      sum += arr[windowEnd];
      currentWindowSize++;

      while (sum >= s) {
        // check if the window size we have is smaller than the previous window size.
        smallestWindowSize =
          currentWindowSize < smallestWindowSize
            ? currentWindowSize
            : smallestWindowSize;

        // substract the value at windowStart
        // decrease windowSize
        // increase windowStart index.
        sum -= arr[windowStart];
        windowStart++;
        currentWindowSize--;
        continue;
      }
    }
  }
  return smallestWindowSize;
}

console.log(
  `Smallest subarray length: ${smallest_subarray_with_given_sum(
    7,
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
