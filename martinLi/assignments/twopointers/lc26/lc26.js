// Problem Statement #
// Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the length of the subarray that has no duplicate in it.
// Real Problem statement: Given an unsorted array of numbers 
//and a target ‘key’, remove all instances of 
//‘key’ in-place and return the new length of the array.
function remove_element(arr, key) {
/*
Keep track of the length as counter(number of values in the array)
if we find the duplicate value we keep track of it by decrementing from counter


*/

let counter = arr.length;
//let optional_index_track = [] // tracking list of indexes to pop

for(i in arr){
  if(arr[i] === key){
    //optional_index_track.push(i)
    counter = counter - 1

  }
  
}
/*
for (i in optional_index_track){
  arr.splice(optional_index_track[i], 1)
}
console.log(arr)*/
return counter

 //let next_Element = 0;
  //for (i in arr){
    //if(arr[i] !== key){//if current index of i isn't key
     // arr[next_Element] = arr[i]//the nextelement which is 0th index at start is set to current value
      //the next_element index increases only if the current index value isn't equal to the key
      //next element seems to maintain as a counter  mainly to keep track of the
      //values which are not the key.
      //next_Element +=1;
    //}
  //}
  //console.log(arr)
 // return next_Element
  // TODO: Write code here
}

console.log(
  `Array new length: ${remove_element([3, 2, 3, 6, 3, 10, 9, 3], 3)}`
);
console.log(`Array new length: ${remove_element([2, 11, 2, 2, 1], 2)}`);

// Solution
// -----
// let nextElement = 0; // index of the next element which is not 'key'
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] !== key) {
//     arr[nextElement] = arr[i];
//     nextElement += 1;
//   }
// }
// return nextElement;

//-----

// Time Complexity #
// The time complexity of the above algorithm will be O(N), where ‘N’ is the total number of elements in the given array.

// Space Complexity #
// The algorithm runs in constant space O(1).
