// Problem Statement #

// Given a string, find the length of the longest substring in it with no more than K distinct characters.

// You can assume that K is less than or equal to the length of the given string.

/*
input - a string with any length, size of the substring k
output - return then length of the longest substring with distinct characters.
variable windowEnd, windowStart: to operate a sliding window
maxLen: to store the longest length of the subarray
frequency: an array for the characters.

run a for loop to store all the characters to the frequency
  if the character is not in the frequency array
    set the character position to 0
  add one to the character position
   if the character frequncy is bigger than k
      compare the max length and window size find the bigger one
      window size update and windowStart change to the windowEnd
      set character frequency to one since the window get update
    else 
      maxlen add one in case all the character fufill the requirement 
  
  return the maxlen

  edge case k = 0, empty str, 

*/
function longest_substring_with_k_distinct(str, k) {
  if( k === 0 || str.length === 0) return 0;
  // TODO: Write code here
  let windowStart = 0,
    windowEnd = 0,
    maxLen = 0,
    frequency = {};

  
  for(windowEnd; windowEnd < str.length; windowEnd++){
    console.log(str[windowEnd]);
    if(!(str[windowEnd] in frequency)){
      frequency[str[windowEnd]] = 0;
    }
    frequency[str[windowEnd]] += 1;
    if(frequency[str[windowEnd]] > k){
      maxLen = Math.max(maxLen, windowEnd - windowStart);
      if(str[windowStart] === str[windowEnd]){
        windowStart ++;
      }else{
        let findLast = windowEnd;
        let count = 0;
        while(count <=k){
          if(str[findLast] !== str[windowEnd] ){
            findLast --;
          }else{
            windowStart = findLast;
            count ++;
          }
        }
      }
      frequency[str[windowEnd]] -= 1;
    }
  }
  maxLen = Math.max(maxLen, windowEnd - windowStart);

  return maxLen;
}

console.log(
  `Length of the longest substring: ${longest_substring_with_k_distinct(
    'araaci',
    2
  )}`
);
console.log(
  `Length of the longest substring: ${longest_substring_with_k_distinct(
    'araaci',
    1
  )}`
);
console.log(
  `Length of the longest substring: ${longest_substring_with_k_distinct(
    'cbbebi',
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
