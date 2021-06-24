// Problem Statement #
// Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the length of the subarray that has no duplicate in it.
/**
 * c26 - THIS IS THE CORRECT PROMPT!
Problem 1: Given an unsorted array of numbers and a target ‘key’, remove all instances of ‘key’ in-place and return the new length of the array.
 */

/**
 * inputs: 
 * @param {*} arr: a unsorted array with some duplicate numbers 
 * @param {*} key: a number that indicate the duplicate number in the array
 * 
 * output:
 * result: length of the subarray with no duplicates
 * 
 * steps:
 *  loop all the elements in the array and compare the element with the key
 *  if the key is equal to the current element at the first time add the length
 *  else find the duplicate contiue
 * 
 * variable: IsFirstTime: boolean to determine if the current element is duplicate
 *            left and right pointer to do the two pointer approach
 * 
 * use a while loop to traverse all the elements if left pointer is less or equal than the right
 *      compare if the right is equal to the key
 *          decrement the right
 *          pop the last elements;
 *      compare if the left is equal to the key
 *          compare if it is fist time
 *                set isFirsttime false
 *                continue the loop
 *          else means find duplicate
 *                swap current element with the right pointer element
 *                decrement right pointer
 *                pop the current array
 *      increment the left
 * return array.length
 * 
 * edge cases: if the arr is empty => 0
 *             
 *                    
 */
function remove_element(arr, key) {
  // TODO: Write code here
  if(!arr.length) return 0;

  let left = 0,
      right = arr.length - 1,
      isFirstTime = true;

  while(left <= right){

    if(key == arr[right]){
      right --;
      arr.pop();
    }

    if(key === arr[left]){

      if(isFirstTime){
        left++;
        isFirstTime = false;
        continue;
      }else{
        [arr[left], arr[right]] = [arr[right], arr[left]];
        right --;
        arr.pop();
      }
    }

    left ++;
  }

  return arr.length;
}

//    l               r                 l     r
// 3, 2, 3, 6, 3, 10, 9, 3 => 2, 3, 10, 9, 3, 6, 3, 3
// key : 3
// IsFistTime: true => false
// length : 0 => 1
console.log(
  `Array new length: ${remove_element([3, 2, 3, 6, 3, 10, 9, 3], 3)}` // [3, 2, 6, 10 ,9] = > 5
); // 
console.log(`Array new length: ${remove_element([2, 11, 2, 2, 1], 2)}`); // [2, 11, 1] = > 3

// 2, 3,3, ,3,3,3,3,



















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
