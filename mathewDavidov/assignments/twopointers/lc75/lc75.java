/**
 * Problem Statement: 
 * Given an array containing 0s, 1s and 2s, sort the array in-place. 
 * You should treat numbers of the array as objects, hence, we can’t
 * count 0s, 1s, and 2s to recreate the array. The flag of the Netherlands
 * consists of three colors: red, white and blue; and since our input array also
 * consists of three different numbers that is why it is called Dutch National Flag problem.
 * 
 * Example:
 * { 1, 0, 2, 1, 0 };
 * [1, 0, 2, 1, 0]
 * [0, 1, 2, 1, 0]
 * [0, 1, 0, 1, 2]
 * [0, 0, 1, 1, 2]
 * sorted = {0, 0, 1, 1, 2};
 * 
 * Genereal idea:
 * The idea is to move the 0s to the left and the 2s to the right.
 * 
 * Edge cases:
 * empty array/null -> return
 * 
 * create a swap method
 * ---
 * initialize left pointer to 0
 * initialize right pointer to arr.length - 1
 * for loop from 0 until the index less than or equal to the right (i.e. the index is at the 2s, no more swapping is needed):
 *   if arr[i] is 0:
 *     swap arr[i] with arr[left]
 *     increment the left pointer
 *   if arr[i] is 2:
 *     swap arr[i] with arr[right]
 *     decrement the right pointer
 *     decrement the current index (we decrement the index because we might have a 0 now that needs to be swapped)
 *   in the case of arr[i] is 1, we do nothing (the for loop increments the index)
 * 
 * Runtime:
 * Time: O(n)
 * Space: O(1) 
 */

import java.util.*;

public class lc75 {
    public static void sort(int[] arr) {
        if (arr == null || arr.length == 0) {
            return;
        }

        int left = 0;
        int right = arr.length - 1;

        for (int i = 0; i <= right; i++) {
            if (arr[i] == 0) {
                swap(arr, i, left);
                left++;
            } else if (arr[i] == 2) {
                swap(arr, i, right);
                right--;
                i--;
            }
        }
    }

    public static void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    public static void main(String[] args) {
        int[] arr = { 1, 0, 2, 1, 0 };
        sort(arr);
        System.out.println(Arrays.toString(arr));

        int[] arr2 = { 2, 2, 0, 1, 2, 0 };
        sort(arr2);
        System.out.println(Arrays.toString(arr2));
    }
}
