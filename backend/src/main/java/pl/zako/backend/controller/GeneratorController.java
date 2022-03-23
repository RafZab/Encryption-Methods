package pl.zako.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController("/api/v1")
public class GeneratorController {

     public static final boolean _1 = true;
     public static final boolean _0 = false;

    @GetMapping("/generator/random")
    public boolean[] getPseudoGeneratedArray(@RequestBody Generator aGenerator){
//        boolean[] polynomial = {_1, _0, _0, _1};
//        boolean[] seed = {_0, _1, _1, _0};
        boolean[] polynomial = aGenerator.getPolynomial();
        boolean[] seed = aGenerator.getSeed();
        return code(7, polynomial, seed);
    }

    private static boolean[] code(int aTrials, boolean[] aPolynomial, boolean[] aSeed) {
        int n = aSeed.length;
        boolean[] afterTransferSeed = new boolean[aSeed.length];

        boolean finalXor;
        boolean[] result = new boolean[aTrials];

        for (int t = 0; t < aTrials; t++) {
            finalXor = countingXor(aPolynomial, aSeed);
            for (int i = 0; i < n-1; i++) {
                afterTransferSeed[i+1] = aSeed[i];
            }
            afterTransferSeed[0] = finalXor;
            result[t] = aSeed[n-1];
            copyingArrayWithoutLink(aSeed, afterTransferSeed);
        }

        return result;

    }

    private static boolean countingXor(boolean[] aPolynomial, boolean[] aSeed) {
        boolean finalXor = false;
        for (int i = 0; i < aPolynomial.length; i++)
            if(aPolynomial[i]) finalXor ^= aSeed[i];
        return finalXor;
    }

    private static void copyingArrayWithoutLink(boolean[] aSeed, boolean[] afterTransferSeed) {
        for (int i = 0; i < aSeed.length; i++) {
            aSeed[i] = afterTransferSeed[i];
        }
    }
}
