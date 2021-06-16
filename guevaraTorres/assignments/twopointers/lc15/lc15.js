// Problem Statement #
// Given an array of unsorted numbers, find all unique triplets in it that add up to zero.
/*
 Declare a left and right pointer = 0 and arr.length respectively
 Declare a currentSum in order to determine a triplet based off of the other two pointer
 Declare a currentTriplet to keep track of the current possible triplet
 Declare n = 0;
 While n < arr.length
 
 If currentTriplet.length < 4{
 currentSum = arr[left] + arr[right]
 If currentSum !== 0 {
 If left > right, increment left
 If right > left, decrement right
 }
 }
 else {
   triplets[n] = currentTriplet
   currentTriplet = [];
 }
 
}
Return triplets

variables: left, right, currentSum, currentTriplet, n

edge cases: empty array, return -1
*/

function search_triplets(arr) {
  triplets = [];
  // TODO: Write your code here

  let n = 0,
  left = 1,
  right = arr.length - 1,
  currentTriplet = [],
  currentSum = 0;

  if(arr.length < 1) return -1;

  for(;n < arr.length; n++){
    if(n === left) left++;
    if(n === right) right++;
    
    currentSum = n + left + right;
    currentTriplet = [n, left, right];
    
    if(currentTriplet.length < 4){
      currentSum += arr[right];

    } 

    currentTriplet = [n, left, right];
    currentSum = n + left + right;   
    console.log(currentSum);
    if(currentSum === 0) {
      triplets[n] = currentTriplet;
      left = 0;
      right = arr.length - 1;      
    }
    if(arr[left] > arr[right]) left++;
    if(arr[right] > arr[left]) right--;
  }

  return triplets;
}

console.log(search_triplets([-3, 0, 1, 2, -1, 1, -2]));
console.log(search_triplets([-5, 2, -1, -2, 3]));

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
