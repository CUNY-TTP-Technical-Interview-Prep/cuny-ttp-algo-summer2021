/**
 *
 * @param {} k
 * @param {*} arr
 * @returns
 *
 *
 * array of only positive integers and positive length of subarray
 * init a windows beginning, a container to hold the maxSum I find and a container to hold a    runningSum that I can judge against
 * init a for loop that runs as long as arr len and we will call the currIDX windowEnd
 * keep adding values to the running sum until we have reached our desired window size
 * once at our desired window size we can keep making determinations on the max
 * we can remove the windowStart value from the runningSum and increment windowStart so it goes to the next value
 * at the very end we will return the maxSum
 *
 * this program runs in O(N) because our for loop iterates over every value at most once
 * this program has O(1) space
 */

const maxSumSub = (k, arr) => {
  if (!arr.length || !k) return 0;

  let windowStart = 0;
  let maxSum = 0;
  let runningSum = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    runningSum += arr[windowEnd];

    if (windowEnd >= k - 1) {
      maxSum = Math.max(maxSum, runningSum);
      runningSum -= arr[windowStart];
      windowStart++;
    }
  }
  return maxSum;
};

let testArray = [1, 2, 3, 4, 5, 6];
let len = 2;
console.log(maxSumSub(len, testArray));

let testArray1 = [];
let len1 = 2;
console.log(maxSumSub(len1, testArray1));

let testArray2 = [1, 2, 3, 4, 5, 6];
let len2 = 0;
console.log(maxSumSub(len2, testArray2));
