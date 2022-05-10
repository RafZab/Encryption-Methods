package pl.zako.backend.DTO;

import lombok.Data;
import pl.zako.backend.controller.StreamController;

import java.math.BigInteger;

import static pl.zako.backend.controller.NumberBSKGeneratorController._0;
import static pl.zako.backend.controller.NumberBSKGeneratorController._1;

@Data
public class GeneratorBskDto {
    int trial;
    boolean[] polynomial;
    boolean[] seed;

    public GeneratorBskDto(int aTrial) {
        this.polynomial = new boolean[]{_1, _0, _0, _1};
        this.seed = new boolean[]{_0, _1, _1, _0};
        this.trial = aTrial;
    }

    public GeneratorBskDto(int trial, boolean[] polynomial, boolean[] seed) {
        this.polynomial = polynomial;
        this.seed = seed;
        this.trial = trial;
    }

    public static boolean[] code(int aTrials, boolean[] aPolynomial, boolean[] aSeed) {
        int n = aSeed.length;
        boolean[] afterTransferSeed = new boolean[aSeed.length];

        boolean newBit;
        boolean[] result = new boolean[aTrials];

        for (int t = 0; t < aTrials; t++) {
            newBit = countingXorForNewGeneratedBit(aPolynomial, aSeed);
            for (int i = 0; i < n - 1; i++) {
                afterTransferSeed[i + 1] = aSeed[i];
            }
            afterTransferSeed[0] = newBit;
            result[t] = aSeed[n - 1];
            copyingArrayWithoutLink(aSeed, afterTransferSeed);
        }

        return result;
    }

    public static String codeAndReturnString(int aTrials, boolean[] aPolynomial, boolean[] aSeed) {
        boolean[] result = code(aTrials, aPolynomial, aSeed);
        return new StreamController().convertBooleanArrayIntoBitsInStringFormat(result);
    }

    public static String codeAndReturnString(GeneratorBskDto aGeneratorBskDto) {
        return codeAndReturnString(aGeneratorBskDto.getTrial(), aGeneratorBskDto.getPolynomial(), aGeneratorBskDto.getSeed());
    }

    private static boolean countingXorForNewGeneratedBit(boolean[] aPolynomial, boolean[] aSeed) {
        boolean finalXor = false;
        for (int i = 0; i < aPolynomial.length; i++)
            if (aPolynomial[i]) finalXor ^= aSeed[i];
        return finalXor;
    }

    private static void copyingArrayWithoutLink(boolean[] aSeed, boolean[] afterTransferSeed) {
        for (int i = 0; i < aSeed.length; i++) {
            aSeed[i] = afterTransferSeed[i];
        }
    }

    public static boolean[] code(GeneratorBskDto aGeneratorBskDto) {
        return code(aGeneratorBskDto.getTrial(), aGeneratorBskDto.getPolynomial(), aGeneratorBskDto.getSeed());
    }

    public int getTrial() {
        return trial;
    }

    public void setTrial(int trial) {
        this.trial = trial;
    }

    public boolean[] getPolynomial() {
        return polynomial;
    }

    public void setPolynomial(boolean[] polynomial) {
        this.polynomial = polynomial;
    }

    public boolean[] getSeed() {
        return seed;
    }

    public void setSeed(boolean[] seed) {
        this.seed = seed;
    }
}
