import java.util.Arrays;

/**
 * Solution
 */
public class Solution {

    public static int[] leftArray(int[] arr) {
        int max = arr[0];
        int[] leftArray = new int[arr.length];
        leftArray[0] = max;
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
                leftArray[i] = max;
            } else {
                leftArray[i] = max;
            }
        }
        return leftArray;
    }
   
    public static int[] rightArray(int[] arr) {
        int max = arr[arr.length - 1];
        int[] rightArray = new int[arr.length];
        for (int i = arr.length - 2; i >= 0; i--) {
            if (arr[i] > max) {
                max = arr[i];
                rightArray[i] = max;
            } else {
                rightArray[i] = max;
            }
        }
        return rightArray;
    }
    public static void main(String[] args) {
        int[] someArray = {0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1};
        int[] leftPeakArray = leftArray(someArray);
        System.out.println(Arrays.toString(leftPeakArray));
        int[] rightPeakArray = rightArray(someArray);
        System.out.println(Arrays.toString(rightPeakArray));
        int[] result = new int[someArray.length];
        for (int i = 0; i < someArray.length; i++) {
            if (leftPeakArray[i] < rightPeakArray[i]) {
                int water = leftPeakArray[i] - someArray[i]; 
                if (water > 0) {
                    result[i] = water;
                }
            } else {
                int water = rightPeakArray[i] - someArray[i];
                if (water > 0) {
                    result[i] = water;
                }
            }
        }
        int totalWater = 0;
        for (int i = 0; i < result.length; i++) {
            totalWater += result[i];
        }
        System.out.println(totalWater);
    }
}