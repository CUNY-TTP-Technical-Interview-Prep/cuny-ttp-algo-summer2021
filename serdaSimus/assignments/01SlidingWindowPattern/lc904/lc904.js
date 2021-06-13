// Problem Statement #

// Given an array of characters where each character represents a fruit tree, you are given two baskets, and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.

// You can start with any tree, but you can’t skip a tree once you have started. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.

// Write a function to return the maximum number of fruits in both baskets.

/*
input: array of char.
known: max types is 2.

Solution:
visit each element once:
    check if the element exist in item table
        if it is, increase its value.
        if it is not:
            check that the length of hash table is less than 2.
                yes: add the new item.
                no: while the length is more:
                    remove 

*/

function fruits_into_baskets(fruits) {
  // TODO: Write code here
  let windowStart = 0,
    items = {};
  let total = 0; // maximum window size

  //visiting every item in the given array.
  for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
    //add the new item to frequency counter hash talble. key:str, value: int
    items[fruits[windowEnd]] >= 1
      ? (items[fruits[windowEnd]] += 1)
      : (items[fruits[windowEnd]] = 1);
    // checking the items list has less than 3 items in it.
    if (Object.keys(items).length <= 2) {
      // calculate the new window size;
      windowSize = windowEnd - windowStart + 1;

      // update total
      //  total = Math.max(total, windowSize);
    }

    // When the size of the frequency counter passes 2,
    // I need to shrink the window and reduce the number
    // of items inside frequency counter.
    while (Object.keys(items).length > 2) {
      items[fruits[windowStart]] > 1
        ? (items[fruits[windowStart]] -= 1)
        : delete items[fruits[windowStart]];
      windowStart++;
      windowSize = windowEnd - windowStart + 1;
    }
    total = Math.max(total, windowSize);
  }
  return total;
}

console.log(
  `Maximum number of fruits: ${fruits_into_baskets([
    "A",
    "B",
    "C",
    "A",
    "C",
    "D",
    "E",
    "E",
    "E",
  ])}, expected: 4`
);

console.log(
  `Maximum number of fruits: ${fruits_into_baskets([
    "A",
    "B",
    "C",
    "B",
    "B",
    "C",
  ])}, expected: 5`
);

console.log(
  `Maximum number of fruits: ${fruits_into_baskets([
    "A",
    "B",
    "B",
    "A",
    "A",
    "B",
  ])}, expected: 6`
);

console.log(
  `Maximum number of fruits: ${fruits_into_baskets([])}, expected: 0`
);

// Solution
// -----
// let windowStart = 0,
// maxLength = 0,
// fruitFrequency = {};

// // try to extend the range [windowStart, windowEnd]
// for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
// const rightFruit = fruits[windowEnd];
// if (!(rightFruit in fruitFrequency)) {
//   fruitFrequency[rightFruit] = 0;
// }
// fruitFrequency[rightFruit] += 1;

// // shrink the sliding window, until we are left with '2' fruits in the fruit frequency dictionary
// while (Object.keys(fruitFrequency).length > 2) {
//   const leftFruit = fruits[windowStart];
//   fruitFrequency[leftFruit] -= 1;
//   if (fruitFrequency[leftFruit] === 0) {
//     delete fruitFrequency[leftFruit];
//   }
//   windowStart += 1; // shrink the window
// }
// maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
// }

// return maxLength;
