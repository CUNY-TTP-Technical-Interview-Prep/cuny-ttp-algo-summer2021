/**
Need to find the desired sum with the smallest subarray.
So, A comparison of a previous sum must be made.
But a subarray of the desired sum, must be reached first.
Therefore, sumLength has to be incremented and current increased by windowEnd's value until
the current subarray has reached the target sum while facilitating to a sliding window pattern.
Then change the minLength to the value of the sumLength.

variables: sumLength, current, minLength, windowStart, windowEnd

edge cases: null or 0 for sum and/or array
**/


function smallest_subarray_with_given_sum(s, arr) {
  // TODO: Write code here

  let minLength = arr.length;
  let sumLength = 0;
  let windowStart = 0;
  let current = 0;
  let reached = false;

  if (arr.length == 0 || s == 0) return 0;                         //if the array length or s is null or 0, return 0

  for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    current += arr[windowEnd];                                    //add windowEnd index value to current
    if (current <= s) sumLength++;                                 //if the current sum is less than or equal to the target sum, increment sumLength
    if (current > s - 1) {                                           //check to see if the window is close to the proper sum
      if (current == s) reached = true;                            //if the current sum reaches the target sum reached becomes true
      minLength = Math.min(minLength, sumLength);                 //if the current sum length is less than the current min length, change minLength to the sumLength
      current -= arr[windowStart];                                //remove windowStart index value from current
      windowStart++;                                              //increment windowStart
    }
  }

  if (current < s && !reached) return 0;                           //if the target sum is never reached, return 0

  return (minLength);

}

// function smallest_subarray_with_given_sum(s, arr) {
//   // TODO: Write code here

//   let minLength = arr.length;
//   let sumLength = 0;
//   let windowStart = 0;
//   let current = 0;
//   let reached = false;

//   if (arr.length == 0 || s == 0) return 0;       //if the array length or the target sum is null or 0, return 0

//   for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
//     current += arr[windowEnd];                   //add the windowEnd index value to the current sum
//     if (current <= s) sumLength++;               //if the current sum is less than the target sum, increment sumLength
//     if (current > s - 1) {                       //if the current sum is greater than the target sum minus one continue
//       if (current == s) reached = true;          //if the current sum is equal to the target sum reached becomes true
//       numLength = Math.min(numLength, sumLength);  //change numLength to the smallest subarray
//       current -= arr[windowStart];                 //remove the windowStart value from the sum    
//       windowStart++;                               //increment windowStart  
//     }
//   }

//   if (current < s && !reached) return (0);          //if the target sum is never reached, return 0

//   return (minLength);
// }


console.log(
  `Smallest subarray length: ${smallest_subarray_with_given_sum(
    7,
    [0]
  )}`
);
console.log(
  `Smallest subarray length: ${smallest_subarray_with_given_sum(
    0,
    [2, 1, 5, 2, 3, 2]
  )}`
);
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
