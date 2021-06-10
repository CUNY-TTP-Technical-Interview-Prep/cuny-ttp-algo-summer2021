
/**
 * Problem Statement:
 * Given an array of intervals representing ‘N’ appointments, 
 * find out if a person can attend all the appointments.
 * 
 * Example 1:
 * Input: [[0,30],[5,10],[15,20]]
 * Output: false
 * 
 * Example 2:
 * Input: [[7,10],[2,4]]
 * Output: true
 * 
 * Edge cases:
 * null / empty array -> return true
 * one appointment -> return true
 * 
 * sort the appointments array based on their starting time
 * for each interval until the second to last one:
 *   if the end time of the current interval is greater than the start of the next interval, return false
 * return true because there is no time conflicts
 * 
 * Runtime:
 * Time: O(n * log n)
 * Space: O(1)
 */
import java.util.*;

public class lc252 {
    public static boolean canAttendAllAppointments(int[][] appointments) {
        if (appointments == null || appointments.length < 2) {
            return true;
        }

        Arrays.sort(appointments, (i1, i2) -> i1[0] - i2[0]);

        for (int i = 0; i < appointments.length - 1; i++) {
            if (appointments[i][1] > appointments[i + 1][0]) {
                return false;
            }
        }

        return true;
    }

    public static void main(String[] args) {
        int[][] intervals = new int[][] { { 1, 4 }, { 2, 5 }, { 7, 9 } };
        System.out.println("Can attend all appointments: " + canAttendAllAppointments(intervals));

        intervals = new int[][] { { 6, 7 }, { 2, 4 }, { 8, 12 } };
        System.out.println("Can attend all appointments: " + canAttendAllAppointments(intervals));

        intervals = new int[][] { { 4, 5 }, { 2, 3 }, { 3, 6 } };
        System.out.println("Can attend all appointments: " + canAttendAllAppointments(intervals));
    }
}
