// Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.


/*
 Precondition:
 numArray: The array containing positive numbers
 k: the maximum size of any contiguous subarray
  General Idea: 

  Start off with left and right pointers,
  Left pointer will iterate from left -> right all the way until the end,
  right while iterate all the way until the end as well at k elements aheads,
  Have the following variables,
  
    totalSum: keeps track of the overall sum of our subarray
    maxSum: keeps track of the largest sum of our sub array we have seen so far
    left, right: left pointer will iterate slow by 1, right pointer will iterate up until k length then iterate by one
    currentValue: variable used to keep track of our currentValue at the left index,


    Increase sub array size through the right pointer,
    Once sub array is size k, remove the left elementValue so that we can grow towards the right and update the totalSum by adding on the rightIndex,
    Once we see that the array is at least size k, then we make comparisons of the totalSum with max sum and app

  Edge cases:
  numArray (input array) is null, OR the length is less than k
 */
function findContiguousSubArray(numArray, k){
  const numArrayLength = numArray.length; // Get the length once and refer back to it each time you need it

  if (!numArray || numArrayLength < k) return 0;

  let currentValue = 0;
  let left = 0, right = 0;
  let totalSum = 0, maxSum = Number.MIN_VALUE;
  const lastIndex = k-1;
 
  for (right = 0; right < numArrayLength; right++){ // This loop will always iterate through all the elements because it is checking all the contiguous subarrays of size k
    totalSum += numArray[right];

    if(right >= lastIndex){
      if (totalSum > maxSum) maxSum = totalSum;
      totalSum -= numArray[left];
      left++;
    }
    
  }

  // Runtime: O(n)
  // Space complexity: O(n)
  return maxSum;
}

// Test cases:

let input = [[],[3,4,6,8,10],[6,1,2,7,7,8]], k=[2,2,3], expected = [0, 18, 22];
const inputLength = input.length;

let test = 0;

while(test < inputLength){
  console.log(`Test Case ${test}\nk=${k[test]}\texpected:${expected[test]}\toutput:${findContiguousSubArray(input[test], k[test])}\n`);
  test++;
}








