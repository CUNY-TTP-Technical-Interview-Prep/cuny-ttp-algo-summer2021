function pair_with_target_sum(arr, targetSum) {
  // TODO:write code here
}

console.log(pair_with_target_sum([1, 2, 3, 4, 6], 6));
console.log(pair_with_target_sum([2, 5, 9, 11], 11));

// solution
// -----
// let left = 0,
// right = arr.length - 1;
// while (left < right) {
// const currentSum = arr[left] + arr[right];
// if (currentSum === targetSum) {
//   return [left, right];
// }

// if (targetSum > currentSum) {
//   left += 1; // we need a pair with a bigger sum
// } else {
//   right -= 1; // we need a pair with a smaller sum
// }
// }
// return [-1, -1];
