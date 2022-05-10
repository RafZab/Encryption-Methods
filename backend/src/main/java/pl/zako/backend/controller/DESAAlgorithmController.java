package pl.zako.backend.controller;


import org.springframework.web.bind.annotation.*;
import pl.zako.backend.DTO.DesDto;
import pl.zako.backend.DTO.GeneratorBskDto;

@CrossOrigin(origins = "*")
@RestController
public class DESAAlgorithmController {

    @GetMapping("/DES/key")
    public String getRandom_64_bitsKey(){
        GeneratorBskDto aGeneratorBskDto = new GeneratorBskDto(64);
        return GeneratorBskDto.codeAndReturnString(aGeneratorBskDto);
    }

    @GetMapping("/DES/encode/{message}/{key}")
    public String encode(@PathVariable("message") String aMessage, @PathVariable("key") String aKey){
        return DesDto.encode(aMessage, aKey);
    }

    @GetMapping("/DES/decode/{bits}/{key}")
    public String decode(@PathVariable("bits") String aBitsToDecode, @PathVariable("key") String aKey){
        return DesDto.decode(aBitsToDecode, aKey);
    }
}
