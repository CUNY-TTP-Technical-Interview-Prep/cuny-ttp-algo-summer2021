/**
 * Problem:
 *  Given a sorted array  nums, remove the duplicates in-place such that each element appears only once and
 * return s the new length.
 *
 * Do not allocate extra space for another array, you must do this by modifying the input array in-place
 * with O(1)
 *
 * Questions:
 *  Am i allowed to use javascript specific methods
 *  do i need to actually delete the values from the array
 *  what to do if the array is empty  or does not have the value
 *
 * for loop through the array
 *  use the for loop incremental value to search for
 *  values that equal key
 *  if the value does not equal key
 *  move a scouting pointer up
 *
 * [3,4,2,2,2,4,5,6,1],2
 *  [3,4,4,2,2,4,5,6,1]
 *  [3,4,4,5,2,4,5,6,1]
 *  [3,4,4,5,6,4,5,6,1]
 *  [3,4,4,5,6,1],5,6,1]
 *
 */

function remove_key_from_array(arr, k) {
  let scout = 0; //set a scout that will be incremented

  for (let i of arr) {
    //loop through the array
    if (i != k) {
      //if arr[i] != k
      arr[scout] = i; //set the scout value to arr[i], the value will not be changed for consecutive non key elms
      scout++; //increment the scout to change the next value
    }
  }

  return scout; // return the scout value
}

const remove_key_from_array_2 = (arr, k) => {
  const scout = 0;

  for (let i of arr) {
    if (i !== k) {
      arr[scout] = i;
      scout++;
    }
  }

  return scout;
};

console.log(remove_key_from_array([2, 3, 3, 3, 6, 9], 3));

//using javascript methods

const remove_key_from_array_js = (arr, k) =>
  arr.filter((num) => num != k).length;

const remove_key_from_array_js = (arr, k) =>
  arr.filter((num) => num != k).length;

console.log(remove_key_from_array_js([2, 3, 3, 3, 6, 9], 3));

/**
 * the two pointer way has time complexity of O(N)
 * space of O(1)
 * 
 * js methods also O(N) time complexity
 * space of O(1)

*/
