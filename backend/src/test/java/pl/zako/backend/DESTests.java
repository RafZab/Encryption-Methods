package pl.zako.backend;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import pl.zako.backend.DTO.DesDto;
import pl.zako.backend.DTO.GeneratorBskDto;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
public class DESTests {
    final String msg = "Witajcie";

    @Test
    public void mainDesAlgorithmTest() {
        GeneratorBskDto aGeneratorBskDto = new GeneratorBskDto(64);
        String aKeyIn0And1Format = GeneratorBskDto.codeAndReturnString(aGeneratorBskDto);

        String encoded = DesDto.encode(msg, aKeyIn0And1Format);
        System.out.println("encoded = " + encoded);

        String decoded = DesDto.decode(encoded, aKeyIn0And1Format);
        System.out.println("decoded = " + decoded);

        assertEquals(msg, decoded);
    }

    @Test
    public void convertStringToBytesAndUndoIt() {
        String hello1 = "Witajcie";
        String bytes = DesDto.convertStringToBinary(hello1);
        System.out.println("bytes = " + bytes);
        assertEquals(hello1, DesDto.convertBytesIntoString(bytes));
    }

    @Test
    public void movingArrayTest() {
        char[] c = "10010101000011".toCharArray();
        char[] countedLeft = DesDto.movingBitsMultipleTimes(c, 2, false);
        char[] countedRight = DesDto.movingBitsMultipleTimes(c, 2, true);

        assertEquals("01010100001110", String.valueOf(countedLeft));
        assertEquals("11100101010000", String.valueOf(countedRight));
    }

}
