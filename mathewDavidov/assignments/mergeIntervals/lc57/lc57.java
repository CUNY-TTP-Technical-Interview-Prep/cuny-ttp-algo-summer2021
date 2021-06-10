
/**
 * Problem Statement:
 * Given a list of non-overlapping intervals sorted by their start time, 
 * insert a given interval at the correct position and 
 * merge all necessary intervals to produce a list that has only mutually exclusive intervals.
 * 
 * Example 1:
 * Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
 * Output: [[1,5],[6,9]]
 * 
 * Example 2:
 * Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
 * Output: [[1,2],[3,10],[12,16]]
 * Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
 * 
 * Edge cases:
 * null / empty array -> return new interval
 * 
 * The problem is similar to merged intervals (LC 56) with only one added interval.
 * Therefore, we can approach it in a similar fashion, but begin with the start and end
 * as the new interval's start and end. 
 * We must also modify the logic in the for loop to account for normal non-overlapping intervals.
 * 
 * initialize the start to the new interval's start
 * initialize the end to the new interval's end
 * for each interval:
 *   if the current interval's end is less than the start (i.e. unaffected by the new interval):
 *     create an interval containing the current start and end and add it to the merged list
 *   else if the current interval's start is less than or equal to the end:
 *     update the start to be the min of the current interval's start and start
 *     update the end to be the max of the current interval's end and end
 *   else:
 *     create a new interval containing start and end and add it to the merged list
 *     update the start to be the current interval's start
 *     update the end to be the current interval's end
 * add the start and end to the list
 * return the merged list
 * 
 * Runtime:
 * Time: O(n)
 * Space: O(n)
 */
import java.util.*;

public class lc57 {
    public static int[][] insert(int[][] intervals, int[] newInterval) {
        if (intervals == null || intervals.length == 0) {
            return new int[][] { newInterval };
        }

        List<int[]> mergedIntervals = new ArrayList<>();

        int start = newInterval[0];
        int end = newInterval[1];

        for (int i = 0; i < intervals.length; i++) {
            int currentStart = intervals[i][0];
            int currentEnd = intervals[i][1];

            // In this case, the current interval is non-overlapping, add it to the list
            // Otherwise, (in the else if and else) follow the logic of LC 56 to merge
            // intervals and update start/end
            if (currentEnd < start) {
                mergedIntervals.add(new int[] { currentStart, currentEnd });
            } else if (currentStart <= end) {
                start = Math.min(start, currentStart);
                end = Math.max(end, currentEnd);
            } else {
                mergedIntervals.add(new int[] { start, end });
                start = currentStart;
                end = currentEnd;
            }
        }

        mergedIntervals.add(new int[] { start, end });

        return mergedIntervals.toArray(new int[mergedIntervals.size()][2]);
    }

    public static void main(String[] args) {
        int[][] input = new int[][] { { 1, 3 }, { 5, 7 }, { 8, 12 } };
        System.out.println("Intervals after inserting the new interval: "
                + Arrays.deepToString(insert(input, new int[] { 4, 6 })));

        System.out.println("Intervals after inserting the new interval: "
                + Arrays.deepToString(insert(input, new int[] { 4, 10 })));

        input = new int[][] { { 2, 3 }, { 5, 7 } };
        System.out.println("Intervals after inserting the new interval: "
                + Arrays.deepToString(insert(input, new int[] { 1, 4 })));
    }
}
