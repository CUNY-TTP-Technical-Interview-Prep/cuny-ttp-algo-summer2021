// Problem Statement #

// Given an array of numbers and a number ‘k’, find the median of all the ‘k’ sized sub-arrays (or windows) of the array.

// Example 1:

// Input: nums=[1, 2, -1, 3, 5], k = 2
// Output: [1.5, 0.5, 1.0, 4.0]
// Explanation: Lets consider all windows of size ‘2’:

//   - [1, 2, -1, 3, 5] -> median is 1.5
//   - [1, 2, -1, 3, 5] -> median is 0.5
//   - [1, 2, -1, 3, 5] -> median is 1.0
//   - [1, 2, -1, 3, 5] -> median is 4.0

// Example 2:

// Input: nums=[1, 2, -1, 3, 5], k = 3
// Output: [1.0, 2.0, 3.0]
// Explanation: Lets consider all windows of size ‘3’:

//   - [1, 2, -1, 3, 5] -> median is 1.0
//   - [1, 2, -1, 3, 5] -> median is 2.0
//   - [1, 2, -1, 3, 5] -> median is 3.0

/*
-------------------------------------------------------
- BRUTE FORCE 
-------------------------------------------------------

Understanding the problem:
  - The problem asks to get the median value of a sorted array. <-- Didn't understand this at first
    Basically, we have to sort the values in the "window" and then get the median value.
    If the length of our "window" is even, we take the two middle values, add them, and divide by 2 to get the median.

Constraints:
  1. The number 'k' will always be a valid value (will always be in the bounds of the array length)
  2. The numbers in the array can be positive and negative
  3. The minimum length of an array is 1

Edge Cases:
  - Little to no edge cases. If we have just a single value in the array, we return that single value.

Approaching the problem:
  - We are returning an array filled with the median values, so we should initialize an empty array in the beginning.
  - We are forming a window, so we should initialize two pointers that represent the edges of the window.
  - We are taking the median of the values in our window, so we need to keep track of the values in our window beforehand.
  - We need some logic to determine if the array is even or odd in length, and we also need to sort our window in ascending order.
  - We also need some logic to determine the median values of the window, and ultimately push that value into our output array.
  - Once we find the median of the current window, we slide the window over by one, meaning we increment the two pointers.
  - This entire process should be repeatable, so this should be put in a loop that continues until the right pointer equals the length of the input array.
  - Finally, we can return the output array which will contain all of the median values for each sliding window iteration.
*/

class SlidingWindowMedian {
  find_sliding_window_median(nums, k) {
    // TODO: Write your code here
    let leftPtr = 0;
    let rightPtr = 0;
    const result = [];
    const windowArr = [];

    while (rightPtr < k) {
      windowArr.push(nums[rightPtr]);
      rightPtr++;
    }
    rightPtr--;

    while (rightPtr < nums.length) {
      const median = find_median(windowArr);
      result.push(median);

      windowArr.shift();
      leftPtr++;
      rightPtr++;
      windowArr.push(nums[rightPtr]);
    }

    return result;
  }
}

const find_median = (arr) => {
  let copyArr = [...arr];
  copyArr.sort((a, b) => a - b, 0);

  const length = copyArr.length;
  if (length % 2 === 0) {
    const midIdxEven = Math.floor(length / 2);
    const midValEven = (copyArr[midIdxEven] + copyArr[midIdxEven - 1]) / 2;
    return midValEven;
  } else {
    const midIdxOdd = Math.floor(length / 2);
    const midValOdd = copyArr[midIdxOdd];
    return midValOdd;
  }
};

/*
Time Complexity: O(nlogn) ?????????????
  - The first while loop gets the initial values according to k, so its O(n) in the worst case.
  - The second while loop will touch each element at least once in the array, so O(n).
  - In the find_median function, we are sorting using the in-built sort function, so O(nlogn).
  - In the end, we have O(2n) + O(nlogn), which we simplify to O(nlogn).

Space Complexity: O(n)
  - We are initializing a total of three arrays that scale based on the size of the input array.
  - Therefore, we have O(3n), which is simplified to O(n).
*/

var slidingWindowMedian = new SlidingWindowMedian();
result = slidingWindowMedian.find_sliding_window_median([1, 2, -1, 3, 5], 2);

console.log("Sliding window medians are:");
console.log(result);

slidingWindowMedian = new SlidingWindowMedian();
result = slidingWindowMedian.find_sliding_window_median([1, 2, -1, 3, 5], 3);

console.log("Sliding window medians are:");
console.log(result);

slidingWindowMedian = new SlidingWindowMedian();
result = slidingWindowMedian.find_sliding_window_median(
  [1, 3, -1, -3, 5, 3, 6, 7],
  3
);

console.log("Sliding window medians are:");
console.log(result);

slidingWindowMedian = new SlidingWindowMedian();
result = slidingWindowMedian.find_sliding_window_median(
  [1, 2, 3, 4, 2, 3, 1, 4, 2],
  3
);

console.log("Sliding window medians are:");
console.log(result);
