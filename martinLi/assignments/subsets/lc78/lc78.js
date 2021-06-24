// Problem Statement #

// Given a set with distinct elements, find all of its distinct subsets.

/**
 *
 * We do not want duplicate subsets
 * [1,2, 3 ] set
 *
 * We return
 * [[], [1] [2] [3] [1 2] [1 3] [2 3] [1 2 3]]
 *
 *
 */

const find_subsets = function (nums) {
  subsets = []; // lists containing subsets
  const add_subsets = (values, other_vals) => {
    subsets.push(values);
    for (let i = 0; i < other_vals.length; i++) {
      //go through list of nums
      add_subsets(values.concat(other_vals[i]), other_vals.slice(i + 1));
      //recursively call, update values of the rest of the set of nums
      /**
       *
       */
    }
  };
  add_subsets([], nums);
  // TODO: Write your code here
  return subsets;
};

console.log(`Here is the list of subsets: ${find_subsets([1, 3])}`);
console.log(`Here is the list of subsets: ${find_subsets([1, 5, 3])}`);
