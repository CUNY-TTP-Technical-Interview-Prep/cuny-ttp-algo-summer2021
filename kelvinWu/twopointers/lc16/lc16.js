// Problem Statement #
// Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet. If there are more than one such triplet, return the sum of the triplet with the smallest sum.

//loop through array
//at each index assume it is start of triplet
////loop through all elements after current one
/////choose each one as the 2nd element
/////loop through all elements after second element
///////choose third element
///////tkae the sum of the three elements
///////check how far it is from the current best
///////if it is better than the best distance wise then ahve it as the new best
///////if the distance from the target is the same, choose the smallest between the two

// const triplet_sum_close_to_target = function (arr, target_sum) {
//   let closestSum = arr[0] + arr[1] + arr[2];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       for (let k = j + 1; k < arr.length; k++) {
//         let currentSum = arr[i] + arr[j] + arr[k];
//         let currentDiff = Math.abs(currentSum - target_sum);
//         let closestDiff = Math.abs(closestSum - target_sum);
//         if (currentDiff < closestDiff) closestSum = currentSum;
//         else if (currentDiff == closestDiff)
//           closestSum = Math.min(closestSum, currentSum);
//       }
//     }
//   }
//   return closestSum;
// };

//                                              l     r
//                                             sum close to 4
//                                             closestto 4 is 2
//                                                 l  r
//                                                 closestnum to aadd to -2 is to make 2 is now 3
// console.log(triplet_sum_close_to_target([-2, 0, 1, 2], 2));
// console.log(triplet_sum_close_to_target([-3, -1, 1, 2], 1));
// console.log(triplet_sum_close_to_target([1, 0, 1, 1], 100));
//                                         0 1 1 1
//                                         i l               r
//                                         0 0 0 0 0 1 1 2 4 5 7     target_sum = 4
//                                         i = 0 arr[i] = 0  find two numbers close to 6
//                                             arr[l] = 0 arr[r] = 7   sum of both = 7

//                                             if(arr[l] + arr[r] > twonumbersum) r--
//                                             else if(arr[l] + arr[r] <= twonumbersum) l++

//sort the array
//loop through array
//assume current element is start of triplet
//keep left and right pointers, left = i+1 right = arr.length-1;
////while(l < r)
////take sum of arr[i] + arr[l] + arr[r];
////check the diff between currentSum and target_sum
////if it is better than closestSum, save this number
////if they are equal, save the smaller of the two

const triplet_sum_close_to_target = function (arr, target_sum) {
  //sort array
  arr.sort(function (a, b) {
    return a - b;
  });
  let closestSum = arr[0] + arr[1] + arr[2];
  for (let i = 0; i < arr.length; i++) {
    let l = i + 1;
    let r = arr.length - 1;
    while (l < r) {
      let currentSum = arr[i] + arr[l] + arr[r];
      let currentDiff = Math.abs(currentSum - target_sum);
      let closestDiff = Math.abs(closestSum - target_sum);
      if (currentDiff < closestDiff) closestSum = currentSum;
      else if (currentDiff == closestDiff)
        closestSum = Math.min(closestSum, currentSum);
      if (currentSum > target_sum) r--;
      else l++;
    }
  }
  return closestSum;
};

console.log(triplet_sum_close_to_target([-2, 0, 1, 2], 2));
console.log(triplet_sum_close_to_target([-3, -1, 1, 2], 1));
console.log(triplet_sum_close_to_target([1, 0, 1, 1], 100));

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
