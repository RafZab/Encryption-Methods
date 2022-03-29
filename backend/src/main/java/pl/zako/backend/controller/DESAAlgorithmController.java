package pl.zako.backend.controller;


import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DESAAlgorithmController {

    @PostMapping("/DES/encode")
    public String getEncodingResultFromDESAlgorythm(){
        return null;
    }

    @PostMapping("/DES/decode")
    public String getDecodingResultFromDESAlgorythm(){
        return null;
    }
}
