
/**
 * Problem Statement:
 * Given a list of intervals, merge all the overlapping intervals to 
 * produce a list that has only mutually exclusive intervals.
 * 
 * Example 1:
 * Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 * Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
 * 
 * Edge cases:
 * Null / empty array -> return
 * Array with one intervals -> return interval as it is
 * 
 * sort the 2D array based on first index (start)
 * initialize start at the first interval 0th index
 * initialize end at the first interval 1st index
 * for every interval from 1 to end:
 *   if the start of the current interval is less than or equal to the end:
 *     update the end to the max of the interval end and the end
 *   otherwise:
 *     push a new interval containing the start and end
 *     update the start and end to the current interval's start and end
 * push the interval of the start and end
 * return the resulting merged intervals
 * 
 * Runtime:
 * Time: O(n * log n)
 * Space: O(n)
 */
import java.util.*;

public class lc56 {
    public static int[][] merge(int[][] intervals) {
        if (intervals == null || intervals.length < 2) {
            return intervals;
        }

        List<int[]> mergedIntervals = new ArrayList<>();

        Arrays.sort(intervals, (i1, i2) -> i1[0] - i2[0]);

        int start = intervals[0][0];
        int end = intervals[0][1];

        for (int i = 1; i < intervals.length; i++) {
            if (intervals[i][0] <= end) {
                end = Math.max(end, intervals[i][1]);
            } else {
                mergedIntervals.add(new int[] { start, end });
                start = intervals[i][0];
                end = intervals[i][1];
            }
        }

        mergedIntervals.add(new int[] { start, end });

        // Java's toArray(T[] a) requires a runtime type of the resulting array type
        return mergedIntervals.toArray(new int[0][]);
    }

    public static void main(String[] args) {
        int[][] input = new int[][] { { 1, 3 }, { 2, 5 }, { 7, 9 } };
        System.out.println("Merged intervals: " + Arrays.deepToString(merge(input)));

        input = new int[][] { { 6, 7 }, { 2, 4 }, { 5, 9 } };
        System.out.println("Merged intervals: " + Arrays.deepToString(merge(input)));

        input = new int[][] { { 1, 4 }, { 2, 6 }, { 3, 5 } };
        System.out.println("Merged intervals: " + Arrays.deepToString(merge(input)));
    }
}
