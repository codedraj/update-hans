/**
 * Solution
 */
public class Solution {

    public static int factorial(int n) {
        if (n == 0) {
            return 1;
        }
        return n * factorial(n - 1);
    }

    public static void gridPermutationCombination (int A, int B) {
        int possiblePathsFactorial = factorial(A + B - 2); 
        int aFactorial = factorial(A - 1); 
        int bFactorial = factorial(B - 1);
        int totalNumberOfPaths =  possiblePathsFactorial / (aFactorial * bFactorial);
        System.out.println("Total number of paths: " + totalNumberOfPaths);
    }
    public static void main(String[] args) {
        gridPermutationCombination(3, 6);
    }
}