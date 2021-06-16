// Problem Statement #

// Any number will be called a happy number if, after repeatedly replacing it with a number equal to the sum of the 
// square of all of its digits, leads us to number ‘1’. All other (not-happy) numbers will never reach ‘1’. Instead, they 
// will be stuck in a cycle of numbers which does not include ‘1’.


/**
 * Input: Any number
 * Output: return true if nums is a happy number or return false if not
 * 
 * Definition of a Happy number after repeatedly replacing it with a number equal to the sum of the 
 * square of all of its digits, leads us to number ‘1’
 * 
 * Not the definition: numbers will never reach ‘1’. Instead, they will be stuck in a cycle of numbers which does not include ‘1’
 * 
 * So Basically we start with 23 then we spilt in invdividaul digist were we have 2 and 3 adding together while getting the square
 * 2^2 + 3^2 = 13 then we spile again another pair and do the same process until we reach 1 if it doesnt and being on we return false because we 
 * consider happy numbers something ends up being 1 in the end
 * 
 * definetly will need to loop
 * 
 * 2^2 + 3^2 = 13
 * 1^2 + 3^2 = 10
 * 1^2 + 0^2 = 1 so return true
 * 
 * problems
  // 1. seperate intial number into individaul digits
  // 2. then add indival digits while square and seperate digits again
*/

const find_happy_number = (num) => {
  let slow = num,
      fast = num;
  while (true) {
      slow = find_square_sum(slow); // intial step
      fast = find_square_sum(find_square_sum(fast)); // two steps use recursion
      if (slow === fast) { 
          break;
      }
  }
  return slow === 1; // see if the cycle is stuck on the number '1'
}

const find_square_sum = (num) => {
  let sum = 0;
  while (num > 0) {
      digit = num % 10;
      sum += digit * digit;
      num = Math.floor(num / 10);
  }
  return sum;
}


// console.log(`${find_happy_number(1)}`)

// console.log(`${find_happy_number(9)}`)

console.log(`${find_happy_number(3023)}`)

console.log(`${find_happy_number(23)}`)
console.log(`${find_happy_number(12)}`)













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
