// Problem Statement #
// Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet. If there are more than one such triplet, return the sum of the triplet with the smallest sum.


//arr - unsorted
//targetSum 
//triplet[]
//let min = infinity
//goal: to find the triplet in the array that is closest or equal to return that triplet

/*
arr.sort()
instantiate a for loop
for i = 0; i<arr.length; i++

left = i+1
right = arr.length-1

while loop comparing left < right
let sum = arr[i] + left[i] + right[i]

cheching the minumum value by replacing the min with the sum
using absolute value to find the closest
if(abs(sum - targetSum) < abs(min - targetSum))
{
  min = sum;
  pushing the triplet with the minimum
  triplet.push(arr[i],left[i],right[i])
}
if the minimmum was not decremnt right
else if( sum > targetSum){
  right--
or increment left
left++;
Edge cases:
if the array is empty return and empty array
return triplet[last element] which is the closest triplet to the targetSum
*/

const triplet_sum_close_to_target = function (arr, target_sum) {

  let min = Infinity
  let triplet = []
  arr.sort((a, b) => a - b);
  if (arr.length === 0) {
    return [];
  }

  for (let i = 0; i < arr.length; i++) {
    let left = i + 1
    let right = arr.length - 1

    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right]
      if (Math.abs(sum - target_sum) < Math.abs(min - target_sum)) {
        min = sum;
        triplet.push([arr[i], arr[left], arr[right]])
      }
      else if (sum > target_sum) {
        right--;
      }
      else {
        left++
      }
    }
  }
  return triplet[triplet.length - 1];
};

console.log(triplet_sum_close_to_target([-2, 0, 1, 2], 2));
console.log(triplet_sum_close_to_target([-3, -1, 1, 2], 1));
console.log(triplet_sum_close_to_target([1, 0, 1, 1], 100));
console.log(triplet_sum_close_to_target([], 100));

// Solution
// -----
// arr.sort((a, b) => a - b);
// let smallest_difference = Infinity;
// for (let i = 0; i < arr.length - 2; i++) {
//   let left = i + 1,
//     right = arr.length - 1;
//   while (left < right) {
//     const target_diff = targetSum - arr[i] - arr[left] - arr[right];
//     if (target_diff === 0) { // we've found a triplet with an exact sum
//       return targetSum - target_diff; // return sum of all the numbers
//     }

//     if (Math.abs(target_diff) < Math.abs(smallest_difference)) {
//       smallest_difference = target_diff; // save the closest difference
//     }
//     // the second part of the following 'if' is to handle the smallest sum when we have more than one solution
//     if (Math.abs(target_diff) < Math.abs(smallest_difference) ||
//       (Math.abs(target_diff) === Math.abs(smallest_difference) && target_diff > smallest_difference)) {
//       smallest_difference = target_diff; // save the closest and the biggest difference
//     }

//     if (target_diff > 0) {
//       left += 1; // we need a triplet with a bigger sum
//     } else {
//       right -= 1; // we need a triplet with a smaller sum
//     }
//   }
// }
// return targetSum - smallest_difference;

// -----

// Time complexity #
// Sorting the array will take O(N* logN). Overall, the function will take O(N * logN + N^2), which is asymptotically equivalent to O(N^2).

// Space complexity #
// The above algorithm’s space complexity will be O(N), which is required for sorting.
