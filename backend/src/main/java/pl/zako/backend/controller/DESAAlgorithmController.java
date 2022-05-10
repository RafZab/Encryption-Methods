package pl.zako.backend.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import pl.zako.backend.DTO.DesDto;
import pl.zako.backend.DTO.GeneratorBskDto;

@RestController
public class DESAAlgorithmController {

    @GetMapping("/DES/key")
    public String getRandom_64_bitsKey(){
        GeneratorBskDto aGeneratorBskDto = new GeneratorBskDto(64);
        return GeneratorBskDto.codeAndReturnString(aGeneratorBskDto);
    }

    @GetMapping("/DES/encode/{message}")
    public String encode(@PathVariable("message") String aMessage, @RequestBody String aKey){
        return DesDto.encode(aMessage, aKey);
    }

    @GetMapping("/DES/decode/{bits}")
    public String decode(@PathVariable("bits") String aBitsToDecode, @RequestBody String aKey){
        return DesDto.decode(aBitsToDecode, aKey);
    }
}
