// Problem Statement #

// Given an array with positive numbers and a target number, find all of its
//  contiguous subarrays whose 
// product is less than the target number.

/**
 * given array find the product of each by looping through array and pushing 
 * subarray of the products to a new array 
 * 
 * also multiple each individual sub array by 1 before multiplying 
 * each contiguous subarrays() 
 * 
 * so we going create a new array that contains the product of each element by one 
 * then the each contiguous subarrays() and nesting in the array
 * 
 * 
 * 
 * 10, 5 , 2 cant be in the array since it equal 100 we want everything less then that
 * not less then or equaled
 * 
 * 
 * could do nested loop but increase runtime
 */



var numSubarrayProductLessThanK = function (nums, k) {
   let count = 0;
// i and j are pointers 
  let right = 0;
  let left = 0;
  let product = 1; // initial multiplication

  if (k <= 1) return 0

  while (right < nums.length) {
      product *= nums[right];
      while(product >= k){
          product /= nums[left];
          left++;
      }
      count += right - left + 1;
      right++;

  }

  return count
};



// console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100));

console.log(numSubarrayProductLessThanK([2, 5, 3, 10], 30));
// [2, 5, 3, 10,[10],[15], 30  ]
// console.log(numSubarrayProductLessThanK([8, 2, 6, 5], 50));
// console.log(numSubarrayProductLessThanK([8, 2, 6, 5], -1));
// console.log(numSubarrayProductLessThanK([], 5));





// Solution
// -----

// var numSubarrayProductLessThanK = function(nums, k) {
//   let count = 0;
// i and j are pointers
//   let j = 0;
//   let i = 0;
//   let product = 1; // initial multiplication


//   while (i < nums.length && j < nums.length) {
//       if (product * nums[i] < k) {
//           product = product * nums[i]
//           count   = count + (i - j + 1)
//           i++
//       } else {
//           if (nums[j]) product = product / nums[j]
//           j++
//       }
//   }

//   return count
// }

// -----





// var numSubarrayProductLessThanK = function (nums, k) {
//   let window = 0;
//   let productArray = [];
//  let start = 0;
//  let windowSum = 0;

//  // pre condition 
// //  Math.sign(k)
//  if(nums.length == 0 || k < 0  ){
//   //  console.log(nums.length, k);

//  }

//  for(start; start < nums.length; start++){
//   console.log(nums[start])
//   // if(nums[start] < k ){
//     windowSum += nums[start];
//     console.log(windowSum)

//     // let productTempArray = [nums[start], nums[start]  *  nums[start] + 1 ];
//     // productTempArray.push(productArray);
//     // console.log(productTempArray)
//   // }
//  }

// //  console.log(productArray)


// };