// Problem Statement #

// Given a string, find the length of the longest substring in it with no more than K distinct characters.

// You can assume that K is less than or equal to the length of the given string.

/*

input: string
output: integer

Solution:
create a hashmap, we will store new distinct values in it.
windowSize: integer
maxWindowSize: integer


looop through the given array:
	is hashmap.length < K:
		if this char is in the hash map, increase its value by 1.
			increase the window size by 1.
		if it is not, insert it into the hash map, set its value to 1.
			increase the windowSize by 1.
	else:
		while(hashmap.length > K)



*/

function longest_substring_with_k_distinct(str, k) {
  // TODO: Write code here
  if (str === "" || k > str.length || !str.length) return -1;

  const myHashMap = {};
  let windowStart = 0;
  let maxWindowSize = -Infinity;

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    myHashMap.hasOwnProperty(str[windowEnd])
      ? (myHashMap[str[windowEnd]] += 1)
      : (myHashMap[str[windowEnd]] = 1); //insert new item.
    let myHashMapLength = Object.keys(myHashMap).length;
    let windowSize = 0;

    windowSize = windowEnd - windowStart + 1; // widen window size.

    if (myHashMapLength <= k) {
      maxWindowSize = windowSize > maxWindowSize ? windowSize : maxWindowSize; // update maxWindowSize
      continue;
    }

    while (myHashMapLength > k) {
      if (myHashMap[str[windowStart]] > 1) {
        myHashMap[str[windowStart]] -= 1;
      } else {
        delete myHashMap[str[windowStart]];
      }
      myHashMapLength = Object.keys(myHashMap).length;
      windowStart++;
      windowSize = windowEnd - windowStart + 1; // widen window size.
    }
  }

  return maxWindowSize > -1 ? maxWindowSize : -1;
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
