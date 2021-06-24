/**
 * Problem Statement:
 * Given an array of positive numbers and a positive number ‘k,’ 
 * find the maximum sum of any contiguous subarray of size ‘k’.
 * 
 * Example:
 * [5, 1, 4, 6, 2], k = 2
 * Output: 10
 * 
 * Edge cases:
 * k > nums.length -> return -1
 * null / empty array -> return -1
 * 
 * Sliding window
 * initialize a maxSum and currentSum
 * initialize a windowStart
 * loop from 0 to nums.length:
 *   add the current index to currentSum
 *   if we have a window of size k:
 *     update maxSum to be the max of maxSum and currentSum
 *     move the window forward by subtracting from the windowStart
 * return the maxSum
 * 
 * Runtime:
 * Time: O(n)
 * Space: O(1)
 */

public class q1 {
    public static int maxSumSub(int[] nums, int k) {
        if (nums == null || nums.length == 0 || k > nums.length) {
            return -1;
        }

        int maxSum = -1, currentSum = 0, windowStart = 0;

        for (int windowEnd = 0; windowEnd < nums.length; windowEnd++) {
            currentSum += nums[windowEnd];

            if (windowEnd >= k - 1) {
                maxSum = Math.max(maxSum, currentSum);
                currentSum -= nums[windowStart++];
            }
        }

        return maxSum;
    }

    public static void main(String[] args) {
        System.out.println(maxSumSub(new int[]{5, 1, 4, 6, 2}, 2));
        System.out.println(maxSumSub(new int[]{3, 5, 2, 7, 2, 4, 6}, 4));
        System.out.println(maxSumSub(new int[]{3, 5, 2, 7, 2, 4, 6}, 7));
        System.out.println(maxSumSub(new int[]{}, 2));
        System.out.println(maxSumSub(null, 1));
        System.out.println(maxSumSub(new int[]{5, 1, 4, 6, 2}, 10));
    }
}