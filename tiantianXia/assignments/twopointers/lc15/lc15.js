// Problem Statement #
// Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

/**
 * input: 
 * @param {*} arr: unsorted numbers doesn't positive number
 * output:
 * @returns triplets: all unique number that add up to zero.
 * 
 * varible left, right pointer to implement two pointer approach
 * sort the arr 
 * for loop to go through all the elements
 * if the element is same as the last elements skip this element
 * 
 * while loop go through all the elements for the array left greater than the right
 * left should i + 1, right legnth - 1.
 * 
 * compare if the arr[i] = arr[left] + arr [right]
 *  triplets push([arr[i], arr[left], arr[right]])
 *  update left and right
 * if (arr[i] + left + right < 0)
 *  left ++
 * else if (arr[i] + left + right > 0)
 *  right --
 * 
 * 
 * return triplets
 * 
 * edge case: empty arr => triplet = []
 */
function search_triplets(arr) {
  if(!arr.length) return [];
  let triplets = [];
  // TODO: Write your code here

  arr.sort((a,b) => a - b);

  for(let i = 0; i < arr.length; i ++){
    if(arr[i] === arr[i + 1])
      continue;
    let left = i + 1;
    let right = arr.length - 1;
    while (left < right){
      // console.log(" firt: ", arr[i], "left: ", arr[left], "right: ", arr[right]);

      if (arr[i] + arr[left] + arr[right] === 0){
        triplets.push([arr[i], arr[left], arr[right]]);
        left ++;
        right --;
      } else if (arr[i] + arr[left] + arr[right] < 0){
        left ++
      } else {
        right --;
      }
    }
  }

  return triplets;
}

console.log(search_triplets([-3, 0, 1, 2, -1, 1, -2])); // [-3, -2, -1, 0, 1 ,1 ,2]
console.log(search_triplets([-5, 2, -1, -2, 3]));
console.log(search_triplets([]));
console.log(search_triplets([-1, 2, 4, 8]));

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
