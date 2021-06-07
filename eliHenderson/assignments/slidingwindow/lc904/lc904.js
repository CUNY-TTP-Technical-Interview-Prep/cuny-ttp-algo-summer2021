/**
 * Problem:
 *  Given an array of characters where each character represents a fruit tree, you are given two baskets, and your goal
 *  is to put maximum number of fruits in each basket. The only restriction is that each basket can have only  one type of fruit.
 *
 * You can start with any tree, but you can't skip a tree once you have started. You will pick one fruit from each tree until you cannot,
 * i.e. you will stop when you have to pick from a third fruit type.
 *
 * Write a function to return the maximum number of fruits in both baskets.
 *
 * questions:
 *  what if the array "tree" is empty
 *  What if the array has holes
 *
 *
 * Example:
 *  Input: Fruit = ["A", "B", "C", "A", "C"]
 *  Output: 3
 *  Explanation: We can put 2 "C" in one basket and one "A" in the other from the subarray "C", "A","C"
 *
 * TimeComp: O(N)
 * Space Comp: O(1)
 */

const fruits_into_baskets = (fruits) => {
  let windowStart = 0;
  let maxLength = 0;
  let windowObj = {};

  for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
    const rightPointer = fruits[windowEnd];

    windowObj[rightPointer] = (windowObj[rightPointer] || 0) + 1;

    while (Object.keys(windowObj).lenght > 2) {
      const leftPointer = fruits[windowStart];
      windowObj[leftPointer] -= 1;
      if (windowObj[leftPointer] === 0) {
        delete windowObj[leftPointer];
      }
      windowStart += 1; // shrink the window
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
};

const fruits_into_baskets = (fruits) => {
  let windowStart = 0;
  let maxFruits = 0;
  let windowObj = {};

  //expand the window
  for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
    const rightPointer = fruits[windowEnd];

    //add the fruit to the object
    windowObj[rightPointer] = (windowObj[rightPointer] || 0) + 1;

    //grow until the max unique keys is over 2
    while (Object.keys(windowObj).length > 2) {
      const leftPointer = fruits[windowStart];
      windowObj[leftPointer]--;
      if (windowObj[leftPointer] === 0) delete windowObj[leftPointer];
      //shrink the window
      windowStart++;
    }

    maxFruits = Math.max(maxFruits, windowEnd - windowStart + 1);
  }

  return maxFruits;
};

console.log(
  `Maximum number of fruits: ${fruits_into_baskets(["A", "B", "C", "A", "C"])}`
);
console.log(
  `Maximum number of fruits: ${fruits_into_baskets([
    "A",
    "B",
    "C",
    "B",
    "B",
    "C",
  ])}`
);
