/*
Problem Statement #
Given a string, find the length of the longest substring, which has no repeating characters.
*/

// MY SOLUTION : 1 line is incorrect in the while for 1 test case.
const non_repeat_substring2 = function (str) {
  // TODO: Write your code here
  let windowStart = 0,
    visited = {},
    windowSize = 0,
    longestWindowSize = 0;

  for (let windowEnd in str) {
    visited[str[windowEnd]]
      ? visited[str[windowEnd]]++
      : (visited[str[windowEnd]] = 1);
    windowSize = windowEnd - windowStart + 1;

    while (visited[str[windowEnd]] > 1) {
      if (visited[str[windowStart]] == visited[str[windowEnd]]) {
        visited[str[windowEnd]]--;
      }
      windowStart++;
      windowSize = windowEnd - windowStart + 1;
    }

    longestWindowSize =
      longestWindowSize < windowSize ? windowSize : longestWindowSize;
  }

  return longestWindowSize;
};

//SOLUTION FROM educative.io
function non_repeat_substring(str) {
  let windowStart = 0,
    maxLength = 0,
    charIndexMap = {};

  // try to extend the range [windowStart, windowEnd]
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    // if the map already contains the 'rightChar', shrink the window from the beginning so that
    // we have only one occurrence of 'rightChar'
    if (rightChar in charIndexMap) {
      // this is tricky; in the current window, we will not have any 'rightChar' after its previous index
      // and if 'windowStart' is already ahead of the last index of 'rightChar', we'll keep 'windowStart'
      windowStart = Math.max(windowStart, charIndexMap[rightChar] + 1);
    }
    // insert the 'rightChar' into the map
    charIndexMap[rightChar] = windowEnd;
    // remember the maximum length so far
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}

console.log("TestCase: 0");
console.log("Output:", non_repeat_substring2("aabccbb"));
console.log("Expected", non_repeat_substring("aabccbb"));

console.log("TestCase: 1");
console.log("Output:", non_repeat_substring2("abbbb"));
console.log("Expected", non_repeat_substring("abbbb"));

console.log("TestCase: 2");
console.log("Output:", non_repeat_substring2("abccde"));
console.log("Expected", non_repeat_substring("abccde"));

console.log("TestCase: 3");
console.log("Output:", non_repeat_substring2(""));
console.log("Expected", non_repeat_substring(""));

console.log("TestCase: 4");
console.log("Output:", non_repeat_substring2("abcdefghijklmnopqrstuvwxyz"));
console.log("Expected", non_repeat_substring("abcdefghijklmnopqrstuvwxyz"));

console.log("Test 5");
console.log("Output:", non_repeat_substring2("tmmzuxt"));
console.log("Expected", non_repeat_substring("tmmzuxt"));

console.log("TestCase: 6");
console.log("Output:", non_repeat_substring2("abcabcbb"));
console.log("Expected:", non_repeat_substring("abcabcbb"));
