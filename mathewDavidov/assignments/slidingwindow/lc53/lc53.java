import java.util.*;

/*
Given an integer array nums, find the contiguous subarray (containing at least one number) 
which has the largest sum and return its sum (size k).

k >= 0
k < nums.length
nums.length > 0

start, max, currentsum

for loop 0 - length
    currentsum += nums[current]
    if start >= k - 1
        max = max, current
        move start, end
*/

class lc53 {
    public static int maxSubArray(int k, int[] nums) {
        if (nums == null || k > nums.length || nums.length == 0) {
            return 0;
        }

        int maxSum = 0, windowStart = 0, currentSum = 0;

        for (int windowEnd = 0; windowEnd < nums.length; windowEnd++) {
            currentSum += nums[windowEnd];

            if (windowEnd >= k - 1) {
                maxSum = Math.max(maxSum, currentSum);
                currentSum -= nums[windowStart];
                windowStart++;
            }
        }

        return maxSum;
    }

    public static void main(String[] args) {
        System.out.println("Maximum sum of a subarray of size K: " + maxSubArray(3, new int[] { 2, 1, 5, 1, 3, 2 }));
        System.out.println("Maximum sum of a subarray of size K: " + maxSubArray(2, new int[] { 2, 3, 4, 1, 5 }));
    }
}