// Problem Statement #
// Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

/*
inputs: unsorted array of numbers
outputs: array of unique triplet arrays

sort the array
loop i < arr.length
  loop j=i+1 < arr.length
    loop k=j+1 < arr.length
      if i + j + k == 0
        if the current set of i,j,k doesn't exist in the triplets array,
        insert current triplets into triplets array
return the array of triplets
*/

// Brute-force approach
// function search_triplets(arr) {
//   let triplets = [];
//   arr.sort((a, b) => a - b);

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       for (let k = j + 1; k < arr.length; k++)
//         if (arr[i] + arr[j] + arr[k] == 0) {
//           let is_dup = false; // keeps track of whether the tuple already exists in the triplets array

//           // compares current set of triplets with the existing triplets
//           for (let x = 0; x < triplets.length; x++) {
//             if (
//               arr[i] == triplets[x][0] &&
//               arr[j] == triplets[x][1] &&
//               arr[k] == triplets[x][2]
//             )
//               is_dup = true;
//           }

//           // only add the new triplets to the array if they don't already exist
//           if (!is_dup) {
//             triplets.push([arr[i], arr[j], arr[k]]);
//           }
//         }
//     }
//   }

//   return triplets;
// }

function search_triplets(arr) {
  arr.sort((a, b) => a - b);
  let triplets = [];

  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue; // if the previous element is the same as current element, skip it
    search_pair(arr, -arr[i], i + 1, triplets);
  }

  return triplets;
}

function search_pair(arr, target_sum, left, triplets) {
  let right = arr.length - 1;

  while (left < right) {
    const current_sum = arr[left] + arr[right];
    if (current_sum === target_sum) {
      triplets.push([-target_sum, arr[left], arr[right]]); // arr[left] + arr[right] = -target_sum
      left++;
      right--;

      // skip same elements
      while (left < right && arr[left] === arr[left - 1]) left++;
      while (left < right && arr[right] === arr[right + 1]) right--;
    } else if (target_sum > current_sum) {
      left++; // look for larger
    } else right--; // look for smaller
  }
}

console.log(search_triplets([-3, 0, 1, 2, -1, 1, -2])); // -3, -2, -1, 0, 1, 1, 2 --> [[-1,0,1],[-2,0,2],[-2,1,1],[-3,1,2]]
console.log(search_triplets([-5, 2, -1, -2, 3])); // -5, -2, -1, 2, 3 --> [[-5,2,3],[-2,-1,3]]
console.log(search_triplets([-2, 1, 1, -2, 1, 1])); // -2, -2, 1, 1, 1, 1 --> [[-2,1,1]]

// Solution
// -----
// arr.sort((a, b) => a - b);
// const triplets = [];
// for (i = 0; i < arr.length; i++) {
//   if (i > 0 && arr[i] === arr[i - 1]) { // skip same element to avoid duplicate triplets
//     continue;
//   }
//   search_pair(arr, -arr[i], i + 1, triplets);
// }

// return triplets;
// }

// function search_pair(arr, target_sum, left, triplets) {
// let right = arr.length - 1;
// while (left < right) {
//   const current_sum = arr[left] + arr[right];
//   if (current_sum === target_sum) { // found the triplet
//     triplets.push([-target_sum, arr[left], arr[right]]);
//     left += 1;
//     right -= 1;
//     while (left < right && arr[left] === arr[left - 1]) {
//       left += 1; // skip same element to avoid duplicate triplets
//     }
//     while (left < right && arr[right] === arr[right + 1]) {
//       right -= 1; // skip same element to avoid duplicate triplets
//     }
//   } else if (target_sum > current_sum) {
//     left += 1; // we need a pair with a bigger sum
//   } else {
//     right -= 1; // we need a pair with a smaller sum
//   }
// }

// -----

// Sorting the array will take O(N * logN). The searchPair() func will take O(N). As we are calling searchPair() for every number in the input array, this means that overall searchTriplets() will take O(N * logN + N^2), which is asymptotically equivalent to O(N^2).

// Space complexity #
// Ignoring the space required for the output array, the space complexity of the above algorithm will be O(N)O(N) which is required for sorting.
