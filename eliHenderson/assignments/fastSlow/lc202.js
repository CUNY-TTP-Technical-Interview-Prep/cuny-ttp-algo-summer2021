// Problem Statement #

// Any number will be called a happy number if, after repeatedly replacing it with a number equal to the sum of the square of all of its digits, leads us to number ‘1’. All other (not-happy) numbers will never reach ‘1’. Instead, they will be stuck in a cycle of numbers which does not include ‘1’.

/*
    2^2 + 3^2= 13
    1^2 + 3^2 = 10
    1^2 + 0 = 1

    13 => 10 => 1
    
    find the sum of the square of the first number 
    find the sum of the square of the sum of the square for the second number

    if the numbers are equal, stop the loop

    check if its one  
*/

const find_happy_number = function (num) {
  // TODO: Write your code here
  let slow = num;
  let fast = num;

  // keep looping until the numbers match
  while (true) {
    slow = find_square(slow);
    fast = find_square(find_square(fast));
    if (slow === fast) break;
  }
  return slow === 1 ? true : false;
};

function find_square(num) {
  let sum = 0;
  while (num > 0) {
    digit = num % 10;
    sum += digit ** 2;
    num = Math.floor(num / 10);
  }
  return sum;
}

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

console.log(`${find_happy_number(23)}`);
console.log(`${find_happy_number(12)}`);
