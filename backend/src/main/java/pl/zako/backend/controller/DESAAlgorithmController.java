package pl.zako.backend.controller;


import org.springframework.web.bind.annotation.GetMapping;
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

    @GetMapping("/DES/encode")
    public String encode(@RequestBody String aMessage, String aKey){
        return DesDto.encode(aMessage, aKey);
    }

    @GetMapping("/DES/decode")
    public String decode(@RequestBody String aBitsToDecode, String aKey){
        return DesDto.decode(aBitsToDecode, aKey);
    }
}
