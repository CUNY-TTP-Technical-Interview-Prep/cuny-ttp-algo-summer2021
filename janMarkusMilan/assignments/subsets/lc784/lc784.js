// Problem Statement #

// Given a string, find all of its permutations preserving the character sequence but changing case.

/*
Analysis:
  - Given string: "ad52"
  - Change the case means a -> A or d -> D
  - Answer: ["ad52", "Ad52", "aD52", "AD52"]

Edge cases:
  - Given just numbers: "123"
    Answer: ["123"]
  - Given empty: []
    Answer: []

Solving the problem:
  - Don't modify the original
  - Try recursively
  - Call the function recursively for every possible permutation (lowercase and uppercase)

function recursive(index) {
  recursive(str.toUpperCase(), index + 1);
  recursive(str.toLowerCase(), index + 1);
}

Once I reach the end (original length) -> push path to results array
Ignore the numbers -> charAt(i) >= "0" && charAt(i) <= "9" (could also convert to integer first)
*/

const find_letter_case_string_permutations = function (str) {
  // TODO: Write your code here
  permutations = [];

  function recursive(path, index) {
    if (path.length === str.length) {
      permutations.push(path);
      return;
    }
    if (str.charAt(index) >= "0" && str.charAt(index) <= "9") {
      recursive(path + str.charAt(index), index + 1);
    } else {
      recursive(path + str.charAt(index).toUpperCase(), index + 1);
      recursive(path + str.charAt(index).toLowerCase(), index + 1);
    }
  }

  recursive("", 0);
  return permutations;
};

/*
Given the string: 'ad52'
Possible permutations: ['ad52', 'aD52', 'Ad52', 'AD52']
Running my code: permutations = ['AD52', 'Ad52', 'aD52', 'ad52']
*/

console.log(
  `String permutations are: ${find_letter_case_string_permutations("ad52")}`
);
console.log(
  `String permutations are: ${find_letter_case_string_permutations("ab7c")}`
);
