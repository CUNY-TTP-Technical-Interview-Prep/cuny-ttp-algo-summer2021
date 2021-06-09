// Problem Statement #

// Any number will be called a happy number if, after repeatedly replacing it with a number equal to the sum of the square of all of its digits, leads us to number ‘1’. All other (not-happy) numbers will never reach ‘1’. Instead, they will be stuck in a cycle of numbers which does not include ‘1’.

/*
Get the digits of each number
Square the digits
Add them together
Loop until we have a repeating number (infinite loop) or we reach 1

Essentials (according to logic above):
  1. Some data structure to add the numbers and check if there is a repeating number
  2. Get the digits of each number (could use the .split method)
  3. Square each number (could use the .map method and then perform the operation)
  4. Add the numbers together (use the .reduce method)
*/

// Brute Force (Time: O(n^2), Space: O(n))
const find_happy_number = function (num) {
  // TODO: Write your code here
  let newNum = num;
  let seenNums = new Set();

  while (!seenNums.has(newNum)) {
    seenNums.add(newNum);
    newNum = newNum
      .toString()
      .split("")
      .map((a) => (a = a * a))
      .reduce((a, b) => a + b, 0);

    if (newNum === 1) {
      return true;
    }
  }

  return false;
};

console.log(`${find_happy_number(23)}`);
console.log(`${find_happy_number(12)}`);

// Solution
// -----
// function find_happy_number(num) {
//   let slow = num,
//       fast = num;
//   while (true) {
//       slow = find_square_sum(slow); // move one step
//       fast = find_square_sum(find_square_sum(fast)); // move two steps
//       if (slow === fast) { // found the cycle
//           break;
//       }
//   }
//   return slow === 1; // see if the cycle is stuck on the number '1'
// }

// function find_square_sum(num) {
//   let sum = 0;
//   while ((num > 0)) {
//       digit = num % 10;
//       sum += digit * digit;
//       num = Math.floor(num / 10);
//   }
//   return sum;
// }

// -----

// Time Complexity #
// The time complexity of the algorithm is difficult to determine. However we know the fact that all unhappy numbers eventually get stuck in the cycle: 4 -> 16 -> 37 -> 58 -> 89 -> 145 -> 42 -> 20 -> 4

// This sequence behavior tells us two things:

// 1. If the number N is less than or equal to 1000, then we reach the cycle or ‘1’ in at most 1001 steps.
// 2. For N > 1000, suppose the number has ‘M’ digits and the next number is ‘N1’. From the above Wikipedia link, we know that the sum of the squares of the digits of ‘N’ is at most 9^2M, or 81M (this will happen when all digits of ‘N’ are ‘9’).

// This means:

// 1. N1 < 81M
// 2. As we know M = log(N+1)
// 3. Therefore: N1 < 81 * log(N+1) => N1 = O(logN)

// This concludes that the above algorithm will have a time complexity of O(logN).

// Space Complexity #
// The algorithm runs in constant space O(1).
