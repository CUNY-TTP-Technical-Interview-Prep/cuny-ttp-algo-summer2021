
/**
 * Problem Statement: Given an array of sorted numbers and a target sum, find a
 * pair in the array whose sum is equal to the given target. Write a function to
 * return the indices of the two numbers (i.e. the pair) such that they add up
 * to the given target.
 * 
 * Edge cases: 
 * empty array / null array -> empty array 
 * no target pair found -> empty array
 * 
 * Left pointer will begin at the first index (0) 
 * Right pointer will begin at the last index (nums.length - 1) 
 * while left < right 
 *   create a currentSum equal to the numbers at the indices left and right 
 *   if the currentSum is equal to the target, return the pair of indices in an array 
 *   if the currentSum is less than the target, increment the left pointer 
 *   if the currentSum is greater than the target, decrement the right pointer
 * 
 * Runtime:
 * Time: O(n)
 * Space: O(1)
 * 
 * ---
 * 
 * Map solution:
 * 
 * We will have a map that keeps track of target - nums[i] and map it to the index i
 * Once we find a key in the map containing target - nums[i], we have found the pair
 * 
 * Example:
 * array = [4, 3, 6, 9], target = 10
 * a) store {10 - 4, 0}
 * b) store {10 - 3, 1}
 * c) there's a key of 6 (10 - 4), so we return the array [0, 2], which gives us 4 + 6 = 10
 * 
 * initialize a hashmap
 * loop i from 0 to nums.length - 1
 *   if the map has a key of nums[i], return the value of that entry and the current index
 *   if the map does not have that key, create an entry of target - nums[i] which maps to i
 * 
 * Runtime:
 * Time: O(n)
 * Space: O(n)
 */

import java.util.*;

public class lc1 {
    public static int[] twoSum(int[] nums, int target) {
        if (nums == null || nums.length == 0) {
            return new int[] {};
        }

        int left = 0;
        int right = nums.length - 1;

        while (left < right) {
            int currentSum = nums[left] + nums[right];

            if (currentSum == target) {
                return new int[] { left, right };
            } else if (currentSum < target) {
                left++;
            } else {
                right--;
            }
        }

        return new int[] {};
    }

    public static int[] twoSumAlternate(int[] nums, int target) {
        if (nums == null || nums.length == 0) {
            return new int[] {};
        }

        Map<Integer, Integer> map = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            if (map.containsKey(nums[i])) {
                return new int[] { map.get(nums[i]), i };
            } else {
                map.put(target - nums[i], i);
            }
        }

        return new int[] {};
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[] { 1, 2, 3, 4, 6 }, 6)));
        System.out.println(Arrays.toString(twoSum(new int[] { 2, 5, 9, 11 }, 11)));
        System.out.println(Arrays.toString(twoSum(new int[] {}, 11)));
        System.out.println(Arrays.toString(twoSumAlternate(new int[] { 1 }, 11)));

        System.out.println(Arrays.toString(twoSumAlternate(new int[] { 1, 2, 3, 4, 6 }, 6)));
        System.out.println(Arrays.toString(twoSumAlternate(new int[] { 2, 5, 9, 11 }, 11)));
        System.out.println(Arrays.toString(twoSumAlternate(new int[] {}, 11)));
        System.out.println(Arrays.toString(twoSumAlternate(new int[] { 1 }, 11)));
    }
}
