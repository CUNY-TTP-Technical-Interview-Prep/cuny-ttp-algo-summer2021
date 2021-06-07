/**
 * Problem Statement:
 *  Given an array of integers nums and integer target, return
 * indices of the two numbers such that they add up to target.
 *  You may assume that each input would have exactly one solution, and you may not use the same
 * element twice
 *  You can return and return the answer.
 *
 * Questions:
 *  Is it sorted
 *  can i use js specific methods
 *
 * overview :
 *  set 2 pointers
 *  1 at the start
 *  1 at the end of the array
 *  set a while loop to go until start pointer = end - 1
 *  if the sum of the two indexes based on the pointers is greater than the target
 *  increase the start pointer
 *  if the sum is greater than target decrease the end pointer
 *  if the sum is less target, return the indexed pointer positions
 *
 *  O(N) time
 *  O(1) space
 *
 *  this will only work on a sorted array
 *
 */

function find_target_in_indexed_sum(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    //the pointers never overlap
    let sum = arr[start] + arr[end];

    if (sum === target) return [start, end];

    if (sum < target) start++;

    if (sum > target) end--;
  }

  return -1;
}

function find_target_in_indexed_sum(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let sum = arr[start] + arr[end];

    if (sum === target) return [start, end];

    if (sum < target) start++;
    if (sum > target) end--;
  }

  return -1;
}

console.log(find_target_in_indexed_sum([2, 3, 5, 6, 11, 48], 14));

// this will only work on a sorted array though, we can use an object on an unsorted array

function find_target_sum_obj(arr, target) {
  const store = {};
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];

    if (target - current in store) {
      return [store[target - current], i]; // the value of store[target - num]  will be the index value
    }

    store[arr[i]] = i; // stores the index of the current element in the obj
  }

  return -1;
}

console.log(find_target_sum_obj([3, 2, 6, 5, 48, 11], 8));

function find_target_sum_obj(arr, target) {
  const store = {};
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];

    if (target - current in store) {
      return [store[target - current], i];
    }

    store[arr[i]] = i;
  }

  return -1;
}
