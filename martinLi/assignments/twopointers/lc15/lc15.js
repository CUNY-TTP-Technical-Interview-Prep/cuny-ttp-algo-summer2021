// Problem Statement #
// Given an array of unsorted numbers, 
// find all unique triplets in it that add up to zero.
/*

my attempt is in lc15v1 so far. WIP.

if length less than 3 return empty

arr = [...]
sort the array

3 unique numebrs which add up to 0 can't be the same combinations

/*arr is sorted*
left =0 right =leng-1
while(left < right){
target_sum = -(arr[left] + arr[right])
for num in arr{
  if target_sum == num
    triplets.push(arr[left], arr[right], num)
}
left = left + 1
right = right - 1
 

  }
[-3,-2, -1, 0, 1, 1,]
[-3, 0, 1, 2, -1, 1, -2]
  l
                      r
console.log(search_triplets([-3, 0, 1, 2, -1, 1, -2]));

while(arr[i] <= target_sum){
  if(target_sum == arr[i])
    triplets.push(arr[left], arr[right], arr[i])
}
*/

function search_triplets(arr) {
  //add up to 0
  let target_sum = 0;
  let left = 0;
  let triplets = []
  let right = arr.length -1;
  while(left < right){
    const current_sum = arr[left] + arr[right];
    //target_sum = arr[left]+ arr[right]
    if(current_sum === target_sum ){
      triplets.push([-target_sum, arr[left], arr[right]]);
      left += 1;
      right -= 1;
      while(left < right && arr[left] === arr[left-1])
      {
        left +=1;
      }
      while(left < right && arr[right] === arr[right + 1])
      {
        right -= 1;
      } 
    }
    else if (target_sum > current_sum)
    {
      left += 1;
    }
    else {
      right -=1;
    }
  } 
  ///let triplets = [], left = 0, right = arr.length-1;
 // arr.sort()
  console.log(arr)


  // TODO: Write your code here
  return triplets;
}

console.log(search_triplets([-3, 0, 1, 2, -1, 1, -2]));
/*
l
                     r
-3, 0, 1, 2, -1, 1, -2
i = 0


*/


console.log(search_triplets([-5, 2, -1, -2, 3]));

// Solution
// -----
// arr.sort((a, b) => a - b); lowest to highest
// arr.sort()
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
