package pl.zako.backend.controller;

import org.springframework.web.bind.annotation.*;
import pl.zako.backend.DTO.GeneratorBSK;

import static pl.zako.backend.DTO.GeneratorBSK.code;

@CrossOrigin(origins = "*")
@RestController
public class NumberBSKGeneratorController {

     public static final boolean _1 = true;
     public static final boolean _0 = false;

    @PostMapping("/generator/random")
    public boolean[] getPseudoGeneratedArray(@RequestBody GeneratorBSK aGeneratorBSK){
//        boolean[] polynomial = {_1, _0, _0, _1};
//        boolean[] seed = {_0, _1, _1, _0};
        boolean[] polynomial = aGeneratorBSK.getPolynomial();
        boolean[] seed = aGeneratorBSK.getSeed();
        return code(aGeneratorBSK.getTrial(), polynomial, seed);
    }
}
