package pl.zako.backend.DTO;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

public class DesDto {
    public final static List<Integer> beginningPermutation = List.of(
            58, 50, 42, 34, 26, 18, 10, 2,
            60, 52, 44, 36, 28, 20, 12, 4,
            62, 54, 46, 38, 30, 22, 14, 6,
            64, 56, 48, 40, 32, 24, 16, 8,
            57, 49, 41, 33, 25, 17, 9, 1,
            59, 51, 43, 35, 27, 19, 11, 3,
            61, 53, 45, 37, 29, 21, 13, 5,
            63, 55, 47, 39, 31, 23, 15, 7);

    final static List<Integer> permutationChoice = List.of(
            57, 49, 41, 33, 25, 17, 9,
            1, 58, 50, 42, 34, 26, 18,
            10, 2, 59, 51, 43, 35, 27,
            19, 11, 3, 60, 52, 44, 36,
            63, 55, 47, 39, 31, 23, 15,
            7, 62, 54, 46, 38, 30, 22,
            14, 6, 61, 53, 45, 37, 29,
            21, 13, 5, 28, 20, 12, 4);

    final static List<Integer> movingTable = List.of(
            1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1
    );

    final static List<Integer> permutationChoice_2 = List.of(
            14, 17, 11, 24, 1, 5,
            3, 28, 15, 6, 21, 10,
            23, 19, 12, 4, 26, 8,
            16, 7, 27, 20, 13, 2,
            41, 52, 31, 37, 47, 55,
            30, 40, 51, 45, 33, 48,
            44, 49, 39, 56, 34, 53,
            46, 42, 50, 36, 29, 32
    );

    final static List<Integer> extendedPermutation = List.of(
            32, 1, 2, 3, 4, 5,
            4, 5, 6, 7, 8, 9,
            8, 9, 10, 11, 12, 13,
            12, 13, 14, 15, 16, 17,
            16, 17, 18, 19, 20, 21,
            20, 21, 22, 23, 24, 25,
            24, 25, 26, 27, 28, 29,
            28, 29, 30, 31, 32, 1
    );

    final static List<Integer> s1 = List.of(
            14, 4, 13, 1, 2, 15, 11, 8, 3, 10, 6, 12, 5, 9, 0, 7,
            0, 15, 7, 4, 14, 2, 13, 1, 10, 6, 12, 11, 9, 5, 3, 8,
            4, 1, 14, 8, 13, 6, 2, 11, 15, 12, 9, 7, 3, 10, 5, 0,
            15, 12, 8, 2, 4, 9, 1, 7, 5, 11, 3, 14, 10, 0, 6, 13
    );
    final static List<Integer> s2 = List.of(
            15, 1, 8, 14, 6, 11, 3, 4, 9, 7, 2, 13, 12, 0, 5, 10,
            3, 13, 4, 7, 15, 2, 8, 14, 12, 0, 1, 10, 6, 9, 11, 5,
            0, 14, 7, 11, 10, 4, 13, 1, 5, 8, 12, 6, 9, 3, 2, 15,
            13, 8, 10, 1, 3, 15, 4, 2, 11, 6, 7, 12, 0, 5, 14, 9
    );
    final static List<Integer> s3 = List.of(
            10, 0, 9, 14, 6, 3, 15, 5, 1, 13, 12, 7, 11, 4, 2, 8,
            13, 7, 0, 9, 3, 4, 6, 10, 2, 8, 5, 14, 12, 11, 15, 1,
            13, 6, 4, 9, 8, 15, 3, 0, 11, 1, 2, 12, 5, 10, 14, 7,
            1, 10, 13, 0, 6, 9, 8, 7, 4, 15, 14, 3, 11, 5, 2, 12
    );
    final static List<Integer> s4 = List.of(
            7, 13, 14, 3, 0, 6, 9, 10, 1, 2, 8, 5, 11, 12, 4, 15,
            13, 8, 11, 5, 6, 15, 0, 3, 4, 7, 2, 12, 1, 10, 14, 9,
            10, 6, 9, 0, 12, 11, 7, 13, 15, 1, 3, 14, 5, 2, 8, 4,
            3, 15, 0, 6, 10, 1, 13, 8, 9, 4, 5, 11, 12, 7, 2, 14
    );
    final static List<Integer> s5 = List.of(
            2, 12, 4, 1, 7, 10, 11, 6, 8, 5, 3, 15, 13, 0, 14, 9,
            14, 11, 2, 12, 4, 7, 13, 1, 5, 0, 15, 10, 3, 9, 8, 6,
            4, 2, 1, 11, 10, 13, 7, 8, 15, 9, 12, 5, 6, 3, 0, 14,
            11, 8, 12, 7, 1, 14, 2, 13, 6, 15, 0, 9, 10, 4, 5, 3
    );
    final static List<Integer> s6 = List.of(
            12, 1, 10, 15, 9, 2, 6, 8, 0, 13, 3, 4, 14, 7, 5, 11,
            10, 15, 4, 2, 7, 12, 9, 5, 6, 1, 13, 14, 0, 11, 3, 8,
            9, 14, 15, 5, 2, 8, 12, 3, 7, 0, 4, 10, 1, 13, 11, 6,
            4, 3, 2, 12, 9, 5, 15, 10, 11, 14, 1, 7, 6, 0, 8, 13
    );
    final static List<Integer> s7 = List.of(
            4, 11, 2, 14, 15, 0, 8, 13, 3, 12, 9, 7, 5, 10, 6, 1,
            13, 0, 11, 7, 4, 9, 1, 10, 14, 3, 5, 12, 2, 15, 8, 6,
            1, 4, 11, 13, 12, 3, 7, 14, 10, 15, 6, 8, 0, 5, 9, 2,
            6, 11, 13, 8, 1, 4, 10, 7, 9, 5, 0, 15, 14, 2, 3, 12
    );
    final static List<Integer> s8 = List.of(
            13, 2, 8, 4, 6, 15, 11, 1, 10, 9, 3, 14, 5, 0, 12, 7,
            1, 15, 13, 8, 10, 3, 7, 4, 12, 5, 6, 11, 0, 14, 9, 2,
            7, 11, 4, 1, 9, 12, 14, 2, 0, 6, 10, 13, 15, 3, 5, 8,
            2, 1, 14, 7, 4, 10, 8, 13, 15, 12, 9, 0, 3, 5, 6, 11
    );

    final static List<List<Integer>> allS = List.of(s1, s2, s3, s4, s5, s6, s7, s8);

    final static List<Integer> permutationP = List.of(
            16, 7, 20, 21,
            29, 12, 28, 17,
            1, 15, 23, 26,
            5, 18, 31, 10,
            2, 8, 24, 14,
            32, 27, 3, 9,
            19, 13, 30, 6,
            22, 11, 4, 25
    );

    final static List<Integer> initialPermutation_minus_one = List.of(
            40, 8, 48, 16, 56, 24, 64, 32,
            39, 7, 47, 15, 55, 23, 63, 31,
            38, 6, 46, 14, 54, 22, 62, 30,
            37, 5, 45, 13, 53, 21, 61, 29,
            36, 4, 44, 12, 52, 20, 60, 28,
            35, 3, 43, 11, 51, 19, 59, 27,
            34, 2, 42, 10, 50, 18, 58, 26,
            33, 1, 41, 9, 49, 17, 57, 25
    );


    public static String convertBytesIntoString(String input) {
        StringBuilder sb = new StringBuilder();
        Arrays.stream(input.split("(?<=\\G.{8})")).forEach(s -> sb.append((char) Integer.parseInt(s, 2)));
        return sb.toString();
    }

    public static String convertStringToBinary(String input) {

        StringBuilder result = new StringBuilder();
        char[] chars = input.toCharArray();
        for (char aChar : chars) {
            result.append(
                    String.format("%8s", Integer.toBinaryString(aChar))   // char -> int, auto-cast
                            .replaceAll(" ", "0")    // zero pads
            );
        }
        return result.toString();
    }


    public static String decode(String aMessageToDecode, String aKey) {
        // initializing
        StringBuilder resultStringBuilder = new StringBuilder();

        // step 0 - parting on 8 bytes blocks
        List<char[]> divided_to_8_bytes_blocks = divideBinaryWordOn_64_Bits(aMessageToDecode);

        for (char[] aDivided_to_8_bytes_block : divided_to_8_bytes_blocks) {
            // step 1,2 - permute and divide on halfs
            char[][] twoHalfs = permuteAndDivideOnTwoHalfs(aDivided_to_8_bytes_block);

            // step 3, 4, 5, 6 - make key from 64 bit to 56 bit
            List<String> finalKeys = getFinalPermutedKeys(aKey);
            char[] left_half = twoHalfs[1];
            char[] right_half = twoHalfs[0];

            for (int k = 15; k >= 0; k--) {
                twoHalfs = feistelFunction(right_half, left_half, finalKeys.get(k));

                left_half = twoHalfs[0];
                right_half = twoHalfs[1];
            }

            String resultString = String.valueOf(mergeArrays(left_half, right_half));
            resultStringBuilder.append(permute(resultString, initialPermutation_minus_one));
        }
        String resultWithTooManyBytes = convertBytesIntoString(resultStringBuilder.toString());

        // delete unnecessary bits basing on last character which is number of bytes to delete
        int length = resultWithTooManyBytes.length();
        char lastChar = resultWithTooManyBytes.charAt(length -1);
        int numberOfCharsToRemove = Integer.parseInt(String.valueOf(lastChar));
        return resultWithTooManyBytes.substring(0, length - numberOfCharsToRemove - 8);
    }

    public static String encode(String aMessageToEncode, String aKey) {

        // adding additional bytes and last with number of added ones
        StringBuilder msgToFillWithSpaces = new StringBuilder(aMessageToEncode);
        int amountOfSpaceToAdd = 8 - (aMessageToEncode.length()%8);
        if(aMessageToEncode.length()%8 == 0) amountOfSpaceToAdd = 0;
        msgToFillWithSpaces.append(" ".repeat(amountOfSpaceToAdd+7));
        msgToFillWithSpaces.append(amountOfSpaceToAdd);

        // converting to binary form
        String text_in_1_and_0 = convertStringToBinary(msgToFillWithSpaces.toString());
        StringBuilder resultStringBuilder = new StringBuilder();

        // step 0 - parting on 8 bytes blocks
        List<char[]> divided_to_8_bytes_blocks = divideBinaryWordOn_64_Bits(text_in_1_and_0);

        for (char[] aDivided_to_8_bytes_block : divided_to_8_bytes_blocks) {

            // step 1,2 - permute and divide on halfs
            char[][] twoHalfs = permuteAndDivideOnTwoHalfs(aDivided_to_8_bytes_block);

            // step 3, 4, 5, 6 - make key from 64 bit to 56 bit
            List<String> finalKeys = getFinalPermutedKeys(aKey);
            char[] left_half = twoHalfs[0];
            char[] right_half = twoHalfs[1];

            for (int k = 0; k < 16; k++) {
                twoHalfs = feistelFunction(left_half, right_half, finalKeys.get(k));

                left_half = twoHalfs[1];
                right_half = twoHalfs[0];
            }
            String resultString = String.valueOf(mergeArrays(right_half, left_half));
            resultStringBuilder.append(permute(resultString, initialPermutation_minus_one));
        }
        return resultStringBuilder.toString();
    }

    private static char[][] feistelFunction(char[] aLeft_half, char[] aRight_half, String aKey) {
        // step 7 - right side extended permutation
        String rightSideAfterExtendedPermutation = permute(String.valueOf(aRight_half), extendedPermutation);

        // step 8 - xor Kn and Rn
        String afterXor_Kn_and_Rn = xorStrings(rightSideAfterExtendedPermutation, aKey);

        // step 9 - dividing above string to 8 parts with 6 bits
        List<String> dividedTo8PartsString = divideOn8PartsWith6BitsString(afterXor_Kn_and_Rn);

        // step 10 - take numbers from AllS .. s1,s2 .. s8 and convert to string and merge it
        String numbersFromAllS = readDataFromAllS(dividedTo8PartsString);

        // step 11 - function permutation P
        String numbersFromAllSAfterPermutation = permute(numbersFromAllS, permutationP);

        // assigning final Ln and Rn
        String finalIterate_L = new String(aRight_half);
        String finalIterate_R = xorStrings(String.valueOf(aLeft_half), numbersFromAllSAfterPermutation);

        // step 12 - assign halfs for result
        char[][] result = new char[2][];
        result[0] = finalIterate_R.toCharArray();
        result[1] = finalIterate_L.toCharArray();

        return result;
    }

    private static ArrayList<String> countFinalKeys(char[] aLeftKeyPart, char[] aRightKeyPart) {
        ArrayList<String> finalKeys = new ArrayList<>();
        for (int k = 0; k < 16; k++) {
            // step 5 - left moving parts key bits - shifting
            int amountOfMoving = movingTable.get(k);
            aLeftKeyPart = movingBitsMultipleTimes(aLeftKeyPart, amountOfMoving, false);
            aRightKeyPart = movingBitsMultipleTimes(aRightKeyPart, amountOfMoving, false);

            // step 6 - merging key parts and permute it with permuted choice 2
            char[] whole_merged_key = mergeArrays(aLeftKeyPart, aRightKeyPart);
            String permutedKey = permute(String.valueOf(whole_merged_key), permutationChoice_2);
            finalKeys.add(permutedKey);
        }
        return finalKeys;
    }

    private static char[][] permuteAndDivideOnTwoHalfs(char[] aDivided_to_8_bytes_blocks) {
        // step 1 - mixing according to beginning permutation
        char[] result_char_array_of_1_and_0 = permute(String.valueOf(aDivided_to_8_bytes_blocks), beginningPermutation).toCharArray();

        // step 2 - dividing blocks on left and right - left and right half
        int charArrayHalfLength = result_char_array_of_1_and_0.length / 2;
        char[] left_half = getCharArrayFromIndexToIndexOf(result_char_array_of_1_and_0, 0, charArrayHalfLength);
        char[] right_half = getCharArrayFromIndexToIndexOf(result_char_array_of_1_and_0, charArrayHalfLength, charArrayHalfLength);

        // divide
        char[][] two_halfs = new char[2][];
        two_halfs[0] = left_half;
        two_halfs[1] = right_half;

        return two_halfs;
    }

    private static List<String> getFinalPermutedKeys(String aKey) {
        // step 3 - make key from 64 bit to 56 bit
        String keyAfterChoicePermutation = permute(aKey, permutationChoice);

        // step 4 - dividing key on 2 parts of 28 bits
        int charKeyArrayHalfLength = keyAfterChoicePermutation.length() / 2;
        char[] left_key_half = getCharArrayFromIndexToIndexOf(keyAfterChoicePermutation.toCharArray(), 0, charKeyArrayHalfLength);
        char[] right_key_half = getCharArrayFromIndexToIndexOf(keyAfterChoicePermutation.toCharArray(), charKeyArrayHalfLength, charKeyArrayHalfLength);

        // step 5,6 - key permutation - PC2 and return result
        return countFinalKeys(left_key_half, right_key_half);
    }

    private static String readDataFromAllS(List<String> aDividedTo8PartsString) {
        StringBuilder result = new StringBuilder();

        for (int i = 0; i < aDividedTo8PartsString.size(); i++) {
            String six_length_word = aDividedTo8PartsString.get(i);
            String rowNumber = "" + six_length_word.charAt(0) + six_length_word.charAt(5);
            String columnNumber = six_length_word.substring(1, 5);
            int rowNumberI = Integer.parseInt(rowNumber, 2);
            int columnNumberI = Integer.parseInt(columnNumber, 2);
            Integer numberFromS = allS.get(i).get(rowNumberI * 16 + columnNumberI);
            // when zeros are missing because binary word is so small
            StringBuilder numberFromSInBinaryStringForm = new StringBuilder(Integer.toBinaryString(numberFromS));
            int lengthOfBinaryWord = numberFromSInBinaryStringForm.length();
            for (int j = 0; j < 4 - lengthOfBinaryWord; j++) {
                numberFromSInBinaryStringForm.insert(0, "0");
            }
            result.append(numberFromSInBinaryStringForm);
        }

        return result.toString();
    }

    private static List<String> divideOn8PartsWith6BitsString(String aAfterXor_kn_and_rn) {
        List<String> result = new LinkedList<>();
        for (int i = 0; i < 8; i++) {
            result.add(aAfterXor_kn_and_rn.substring(i * 6, (i + 1) * 6));
        }
        return result;
    }

    private static String xorStrings(String aRightSideAfterExtendedPermutation, String aMergedKeyAfterPermutation) {
        StringBuilder result = new StringBuilder();
        for (int i = 0; i < aMergedKeyAfterPermutation.length(); i++) {
            char a = aMergedKeyAfterPermutation.charAt(i);
            char b = aRightSideAfterExtendedPermutation.charAt(i);
            if (a != b) result.append('1');
            else result.append('0');
        }
        return result.toString();
    }

    private static char[] mergeArrays(char[] aLeft_key_half, char[] aRight_key_half) {
        char[] result = new char[aLeft_key_half.length + aRight_key_half.length];
        int i = 0;
        for (; i < aLeft_key_half.length; i++) {
            result[i] = aLeft_key_half[i];
        }
        for (int j = 0; j < aRight_key_half.length; i++, j++) {
            result[i] = aRight_key_half[j];
        }

        return result;
    }

    public static char[] movingBitsMultipleTimes(char[] aLeft_key_half, int aAmountOfTimes, boolean aRight) {
        char[] result = aLeft_key_half;
        for (int i = 0; i < aAmountOfTimes; i++) {
            if (aRight) result = movingRightBits(result);
            else result = movingLeftBits(result);
        }
        return result;
    }

    private static char[] movingLeftBits(char[] aLeft_key_half) {
        char[] result = new char[aLeft_key_half.length];
        result[result.length - 1] = aLeft_key_half[0];
        System.arraycopy(aLeft_key_half, 1, result, 0, aLeft_key_half.length - 1);
        return result;
    }

    private static char[] movingRightBits(char[] aRight_key_half) {
        char[] result = new char[aRight_key_half.length];
        result[0] = aRight_key_half[result.length - 1];
        System.arraycopy(aRight_key_half, 0, result, 1, aRight_key_half.length - 1);
        return result;
    }

    public static String permute(String aStringToPermute, List<Integer> permutationTable) {
        StringBuilder result = new StringBuilder();
        char[] keyInCharArray = aStringToPermute.toCharArray();
        for (Integer value : permutationTable) {
            result.append(keyInCharArray[value - 1]);
        }
        return result.toString();
    }

    private static List<char[]> divideBinaryWordOn_64_Bits(String aTextToDivide) {

        List<char[]> result = new LinkedList<>();
        for (int i = 0; i < Math.ceil(aTextToDivide.length() / 64.0); i++) {
            int startIndex = i * 64;
            int partWordLength = aTextToDivide.substring(startIndex).length();
            if (partWordLength > 64) partWordLength = 64;
            result.add(aTextToDivide.substring(startIndex, startIndex + partWordLength).toCharArray());
        }
        return result;
    }

    private static char[] getCharArrayFromIndexToIndexOf(char[] aCharArray, int aFrom, int aHowMany) {
        char[] result = new char[aHowMany];
        for (int j = 0, i = aFrom; i < aFrom + aHowMany; i++, j++) {
            result[j] = aCharArray[i];
        }
        return result;
    }
}
