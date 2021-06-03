/**
 * Problem Statement:
 * Given a string, find the length of the longest substring in it with no more than K distinct characters
 * You can assume that K is less than or equal to  the length of the given string
 *
 * Example
 * Input: String="araaci", K=2
 * Output: 4
 * Explanation: The longest substring with no more than '2' distinct characters is "araa".
 *
 * over view:
 *  make an object that will store the amount values of unique chars
 *  the end of the window will be the current char
 *  we will keep adding unique chars until the amount of unique chars are greater than k
 *  we can do this with Object.keys(obj).length
 *  if the amount of unique keys is greater than k we can start closing the window until the unique char amount is less than k
 *  while shrinking we decrement the char frequency going out of the window and remove it from the obj onces the frequency is 0;
 *  at the end of each step, we'll check if the current window length is longest so far, and if so, remember its' length
 *
 * questions to ask
 *  how would we handle spaces in a string
 *  what if the string is < the number givin
 *  what if the string is empty
 *  how do we handle letter case, do we count 'H' as 'h'?
 *
 *  Time Comp: O(N)
 *  Space Comp O(K)
 */

function longest_substring_with_k_distinct(str, k) {
  let windowStart = 0;
  let maxLen = 0;
  let charFrequency = {};

  //start the loop
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    //the window end value is the rightmost letter
    const rightChar = str[windowEnd];

    //add the char to the object if not there already
    if (!(rightChar in charFrequency)) {
      charFrequency[rightChar] = 0;
    }
    //increase the value by 1
    charFrequency[rightChar] += 1;

    //shrink the sliding window, until we are left with 'k' distinct characters in the char_frequency
    while (Object.keys(charFrequency).length > k) {
      const leftChar = str[windowStart];
      charFrequency[leftChar] -= 1; //decrement
      if (charFrequency[leftChar] === 0) delete charFrequency[leftChar];
      windowStart += 1; //shrink the window
    }

    //remember the max len
    maxLen = Math.max(maxLen, windowEnd - windowStart + 1);
  }

  return maxLen;
}

console.log(
  `Length of the longest substring: ${longest_substring_with_k_distinct(
    "cbbebi",
    3
  )}`
);

//improvements and modernizations
const longest_substring_with_k_distinct_2 = (str, k) => {
  let windowStart = 0;
  let maxLen = 0;
  let charFrequency = {};

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];

    charFrequency[rightChar] = (charFrequency[rightChar] || 0) + 1;

    while (Object.keys(charFrequency).length > k) {
      const leftChar = str[windowStart];
      charFrequency[leftChar]--;
      if (charFrequency[leftChar] === 0) delete charFrequency[leftChar];
      windowStart++;
    }

    maxLen = Math.max(maxLen, windowEnd - windowStart + 1);
  }

  return maxLen;
};

console.log(
  `Length of the longest substring: ${longest_substring_with_k_distinct_2(
    "araaci",
    2
  )}`
);
console.log(
  `Length of the longest substring: ${longest_substring_with_k_distinct_2(
    "araaci",
    1
  )}`
);
