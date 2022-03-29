package pl.zako.backend.controller;

import org.springframework.web.bind.annotation.*;
import pl.zako.backend.DTO.GeneratorBskDto;

import static pl.zako.backend.DTO.GeneratorBskDto.code;

@CrossOrigin(origins = "*")
@RestController
public class NumberBSKGeneratorController {

     public static final boolean _1 = true;
     public static final boolean _0 = false;

    @PostMapping("/generator/random")
    public boolean[] getPseudoGeneratedArray(@RequestBody GeneratorBskDto aGeneratorBskDto){
//        boolean[] polynomial = {_1, _0, _0, _1};
//        boolean[] seed = {_0, _1, _1, _0};
        boolean[] polynomial = aGeneratorBskDto.getPolynomial();
        boolean[] seed = aGeneratorBskDto.getSeed();
        return code(aGeneratorBskDto.getTrial(), polynomial, seed);
    }
}
