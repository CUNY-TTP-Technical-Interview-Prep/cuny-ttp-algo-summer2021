// Problem Statement #

// Given a string, find the length of the longest substring in it with no more than K distinct characters.

// You can assume that K is less than or equal to the length of the given string.

/*
Hashmap: Keep track of every instance of each character
Var: max
Loop (forms a window):
  add the char to the hashmap (if it is in hashmap, increment)
  if occurrence of a char > K:
    slide window
  update length to max

return the max

'araaci'
{}
Iteration 1: {'a': 1}
Iteration 2: {'a': 1, 'r': 1}
Iteration 3: {'a': 2, 'r': 1}
Iteration 4: {'a': 3, 'r': 1}
Iteration 5: {'a': 3, 'r': 1, 'c': 1}
Iteration 6: {'a': 3, 'r': 1, 'c': 1, 'i': 1}
*/

function longest_substring_with_k_distinct(str, k) {
  // TODO: Write code here
  let max = 0;
  const charMap = {};

  // Form a 'window' using two pointers over a portion of the data
  let leftPtr = 0;
  for (let rightPtr = 0; rightPtr < str.length; rightPtr++) {
    // Get the current char and check if it is in the hashmap (will be undefined or null if it isn't)
    const currentChar = charMap[str[rightPtr]];

    // If it is present, increment the value by 1, else add it to the hashmap
    if (currentChar >= 0) {
      charMap[str[rightPtr]]++;
    } else {
      charMap[str[rightPtr]] = 1;
    }

    // If the occurrence (value) of the current char is greater than k, slide the window over
    while (charMap[str[rightPtr]] > k) {
      // Get the left-most char in the window
      const leftChar = str[leftPtr];

      // Decrement the value of the char in the hashmap by 1
      charMap[leftChar]--;

      // Increment the left pointer by 1 (update the beginning position of the window)
      leftPtr++;
    }

    // Keep track of the max of each iteration (window size will increase at the end of each iteration)
    max = Math.max(max, rightPtr - leftPtr + 1);
  }

  return max;
}

console.log(
  `Length of the longest substring: ${longest_substring_with_k_distinct(
    "araaci",
    2
  )}`
);
console.log(
  `Length of the longest substring: ${longest_substring_with_k_distinct(
    "araaci",
    1
  )}`
);
console.log(
  `Length of the longest substring: ${longest_substring_with_k_distinct(
    "cbbebi",
    3
  )}`
);

// Solution
// -----
// let windowStart = 0,
// maxLength = 0,
// charFrequency = {};

// // in the following loop we'll try to extend the range [window_start, window_end]
// for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
// const rightChar = str[windowEnd];
// if (!(rightChar in charFrequency)) {
//   charFrequency[rightChar] = 0;
// }
// charFrequency[rightChar] += 1;
// // shrink the sliding window, until we are left with 'k' distinct characters in the char_frequency
// while (Object.keys(charFrequency).length > k) {
//   const leftChar = str[windowStart];
//   charFrequency[leftChar] -= 1;
//   if (charFrequency[leftChar] === 0) {
//     delete charFrequency[leftChar];
//   }
//   windowStart += 1; // shrink the window
// }
// // remember the maximum length so far
// maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
// }

// return maxLength;
