/**
 * 
 * Given an array of positive numbers and a positive number ‘k,’ 
 * find the maximum sum of any contiguous subarray of size ‘k’.
[3, 10, 5, 7, 7]  k = 3
[10, 5 , 7]
 */
function max_sum_subarray(arr, k) {
  let sum = 0;
  let max_sub_array = [];
  let max_val = 0;
  let start_index = 0;
  //let  = 0;
  if (arr.length === 0 || k === 0) {
    return 0;
  } else if (arr.length === 1 && k === 1) {
    return arr[0];
  } else if (k > arr.length) {
    console.log("your input is invalid");
  }
  for (let end_index = 0; end_index < arr.length; end_index++) {
    for (let k_count = 0; k_count < k; k_count++) {
      if (k_count < arr.length) {
        sum += arr[end_index + k_count];
      }
    }
    max_sub_array.push(sum);
    sum = 0;
  }
  for (vals in max_sub_array) {
    if (max_val < max_sub_array[vals]) {
      max_val = max_sub_array[vals];
    }
  }
  return max_val;
}
console.log(max_sum_subarray([3, 10, 5, 7, 7], 3), " is the maximum value");
console.log(max_sum_subarray([3, 10, 5, 20, 7], 3), " is the maximum value");
console.log(
  max_sum_subarray([3, 10, 5, 7, 7, 40, 75, 10], 3),
  " is the maximum value"
);
console.log(max_sum_subarray([3], 3), " is the maximum value");
console.log(max_sum_subarray([14], 20), " is the maximum value");
console.log(max_sum_subarray([], 1), " is the maximum value");
