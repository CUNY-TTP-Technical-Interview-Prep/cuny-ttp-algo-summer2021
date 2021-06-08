var minSubArrayLen = function(target, nums) {
  const MAX = Number.MAX_SAFE_INTEGER;
  const n = nums.length;
   
  let min = MAX;
  
  for (let i = 0; i < n; i++) {
      if (i > 0) nums[i] += nums[i - 1];
      if (nums[i] < target) continue; // if the total we have so far is less than target, then we continue
       
      const closest_index = binarySearch(0, i, nums[i]);
           
      min = Math.min(min, i - closest_index + 1);
  }
  
  return min == MAX ? 0 : min;
  

  function binarySearch(left, right, tot_so_far) {
      while (left <= right) {
          const mid = left + Math.floor((right - left) / 2);
          
          const diff = tot_so_far - nums[mid];
          
          // If diff equals target, we cannot try to further decrease the size of the subarray since
          // any diff value obtained afterwards will be less than target
          if (diff === target) return mid + 1;
          
          if (diff > target) left = mid + 1;
          else right = mid - 1;
      }
  
      return left;
  }
};


console.log(
  `Smallest subarray length: ${minSubArrayLen(
    7,
    [2, 1, 5, 2, 3, 2]
  )}\n`
);
console.log(
  `Smallest subarray length: ${minSubArrayLen(
    7,
    [2, 1, 5, 2, 8]
  )}\n`
);
console.log(
  `Smallest subarray length should be: ${minSubArrayLen(
    8,
    [3, 4, 1, 1, 6]
  )}\n`
);
