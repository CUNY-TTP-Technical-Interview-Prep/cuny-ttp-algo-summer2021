
/**
 * Problem Statement: We are given an array containing ‘n’ objects. Each object,
 * when created, was assigned a unique number from 1 to ‘n’ based on their
 * creation sequence. This means that the object with sequence number ‘3’ was
 * created just before the object with sequence number ‘4’. Write a function to
 * sort the objects in-place on their creation sequence number in O(n) and
 * without any extra space. For simplicity, let’s assume we are passed an
 * integer array containing only the sequence numbers, though each number is
 * actually an object.
 * 
 * Example:
 * Input: [3, 1, 5, 4, 2]
 * Output: [1, 2, 3, 4, 5]
 * 
 * [3, 1, 5, 4, 2] -> swap 3 and 5
 * [5, 1, 3, 4, 2] -> swap 5 and 2
 * [2, 1, 3, 4, 5] -> swap 2 and 1
 * [1, 2, 3, 4, 5] -> increment i while nums[i] == nums[j]
 * end
 * 
 * create a swap method
 * ---
 * initialize iterator to 0
 * while i is less than the length of the array:
 *   intialize j to nums[i] - 1
 *   if nums[i] != nums[j]:
 *     swap the indicies at i and j
 *   otherwise increment i
 * 
 * Runtime:
 * Time: O(n)
 * Space: O(1)
 */
import java.util.*;

public class cyclicSortEasy {
    public static void sort(int[] nums) {
        int i = 0;
        while (i < nums.length) {
            int j = nums[i] - 1;

            if (nums[i] != nums[j]) {
                swap(nums, i, j);
            } else {
                i++;
            }
        }
    }

    public static void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    public static void main(String[] args) {
        int[] arr = new int[] { 3, 1, 5, 4, 2 };
        sort(arr);
        System.out.println(Arrays.toString(arr));

        arr = new int[] { 2, 6, 4, 3, 1, 5 };
        sort(arr);
        System.out.println(Arrays.toString(arr));

        arr = new int[] { 1, 5, 6, 4, 3, 2 };
        sort(arr);
        System.out.println(Arrays.toString(arr));
    }
}
