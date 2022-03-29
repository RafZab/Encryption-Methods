package pl.zako.backend.controller;

import org.springframework.web.bind.annotation.*;
import pl.zako.backend.DTO.GeneratorBskDto;

import java.math.BigInteger;
import java.util.Arrays;

@CrossOrigin(origins = "*")
@RestController
public class StreamController {

    @PostMapping("/stream/encode/{message}")
    public String getBitsInStringFormatFromMessage(@PathVariable("message") String aMessage, @RequestBody GeneratorBskDto aGeneratorBskDto) {
        String bitsInStringFormat = convertStringIntoBits(aMessage);
        aGeneratorBskDto.setTrial(bitsInStringFormat.length());
        boolean[] booleanArrayList = convertBitsInStringFormatIntoBooleanArray(bitsInStringFormat);
        boolean[] generatedBooleanArray = GeneratorBskDto.code(aGeneratorBskDto);
        for (int i = 0; i < booleanArrayList.length; i++) {
            booleanArrayList[i] = xor(booleanArrayList[i],generatedBooleanArray[i]);
        }
        return convertBooleanArrayIntoBitsInStringFormat(booleanArrayList);
    }

    @PostMapping("/stream/decode/{bits}")
    public String getMessageFromBitsInStringFormat(@PathVariable("bits") String aBitsInStringFormat, @RequestBody GeneratorBskDto aGeneratorBskDto) {
        aGeneratorBskDto.setTrial(aBitsInStringFormat.length());
        boolean[] booleanArrayList = convertBitsInStringFormatIntoBooleanArray(aBitsInStringFormat);
        boolean[] generatedBooleanArray = GeneratorBskDto.code(aGeneratorBskDto);
        for (int i = 0; i < booleanArrayList.length; i++) {
            booleanArrayList[i] = xor(booleanArrayList[i],generatedBooleanArray[i]);
        }
        String resultMessage = convertBitsInStringFormatIntoStringMessage(booleanArrayList);
        return resultMessage;
    }

    private String convertBitsInStringFormatIntoStringMessage(boolean[] aBooleanArrayList) {
        char[] chartsArray = new char[aBooleanArrayList.length];
        for (int i = 0; i < aBooleanArrayList.length; i++) {
            if(aBooleanArrayList[i]) chartsArray[i] = '1';
            else chartsArray[i] = '0';
        }
        String text = String.valueOf(chartsArray);
        String result = new String(new BigInteger(text, 2).toByteArray());
        return result;
    }


    private static boolean[] convertBitsInStringFormatIntoBooleanArray(String aText) {
        char[] charArray = aText.toCharArray();
        boolean[] booleanArray = new boolean[charArray.length];
        for (int i = 0; i < charArray.length; i++) {
            if (charArray[i] == 48) booleanArray[i] = false;
            else booleanArray[i] = true;
        }
        System.out.println("booleanArray = " + Arrays.toString(booleanArray));
        return booleanArray;
    }

    private static String convertBooleanArrayIntoBitsInStringFormat(boolean[] aBooleanArray){
        StringBuilder stringBuilder = new StringBuilder();
        for (boolean bool : aBooleanArray) {
            if(bool) stringBuilder.append(1);
            else stringBuilder.append(0);
        }
        return stringBuilder.toString();
    }

    private static String convertStringIntoBits(String aText) {
        String result = new BigInteger(aText.getBytes()).toString(2);
        System.out.println("As binary: " + result);
        return result;
    }

    private  static boolean xor(boolean bit1, boolean bit2){
        return bit1 != bit2;
    }

}
