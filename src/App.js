import {Card, Col, Container, Row, Stack} from "react-bootstrap";
import {useState} from "react";

function App() {
    const [matrixSize, setMatrixSize] = useState(2)
    const [decodeRail, setDecodeRail] = useState('')
    const [encodeRail, setEncodeRail] = useState('')

    const onChangeMatrixSize = (value) => {
        setMatrixSize(value)
        rail_fence_code(decodeRail, value)
    }

    const onChangeDecodeRail = (value) => {
        setDecodeRail(value)
        rail_fence_code(value, matrixSize)
    }

    const onChangeEncodeRail = (value) => {
        setEncodeRail(value)
        rail_fence_decode(value, matrixSize)
    }

    function rail_fence_code(value, size){
        const codingArray = [];

        for (let i = 0; i < value.length; i++) {
            codingArray[i] = []
        }

        let if_up = true;
        for (let i = 0; i < value.length;) {
            for (let j = 0; j < size; i++) {
                if(j === size-1) if_up = false;
                else if(j === 0) if_up = true;
                if(i >= value.length) break;
                codingArray[i][j] = value[i];
                if(if_up) j++;
                else j--;
            }
        }

        let result = ""
        for (let j = 0; j < size; j++) {
            for (let i = 0; i < value.length;i++) {
                const element = codingArray[i][j];
                if(element !== undefined){
                    result = result+element;
                }

            }
        }
        setEncodeRail(result)
    }

    function rail_fence_decode(ciphertext, size){

        if(ciphertext.length < 1){
            return;
        }
        let key = parseInt(size);
        if(key > Math.floor(2*(ciphertext.length-1))){
            return; }
        let pt = new Array(ciphertext.length);
        let k=0;
        let line;
        for(line=0; line<key-1; line++){
            let skip=2*(key-line-1);
            let j=0;
            for(let i=line; i<ciphertext.length;){
                pt[i] = ciphertext.charAt(k++);
                if((line==0) || (j%2 == 0)) i+=skip;
                else i+=2*(key-1) - skip;
                j++;
            }
        }

        for(let i=line; i<ciphertext.length; i+=2*(key-1)) pt[i] = ciphertext.charAt(k++);

        let result = '';
        for(let i=0; i < pt.length; i++){
            result += pt[i];
        }

        setDecodeRail(result)
    }

    const [key, setKey] = useState(1)
    const [decodeKey, setDecodeKey] = useState('')
    const [encodeKey, setEncodeKey] = useState('')

    const onChangeDecodeKey = (value) => {
        setDecodeKey(value)
        matrix_num_code(value, key)
    }

    const onChangeEncodeKey = (value) => {
        setEncodeKey(value)
        matrix_num_decode(value, key)
    }

    function matrix_num_code(message, keyValue){
        const codingArray = [];

        let keyString = "" + keyValue;

        let key1 = [];
        for(let i=0; i < keyString.length;i++)
            key1.push(keyString[i])

        for (let i = 0; i < key1.length; i++) {
            codingArray[i] = []
        }
        let deep = (message.length/key1.length);

        for (let j = 0; j < deep; j++) {
            for (let i = 0; i < key1.length; i++) {
                const charToSave = message[i+(4*j)]
                if(charToSave !== undefined){
                    codingArray[i][j] = charToSave;
                }
            }
        }
        let result = ""
        for (let j = 0; j < deep; j++) {
            for (let i = 0; i < key1.length; i++) {
                const element = codingArray[key1[i]-1][j];
                if(element !== undefined){
                    result = result+element;
                }
            }
        }
        setEncodeKey(result);
    }

    function matrix_num_decode(message, keyValue){
        const codingArray = [];

        let keyString = "" + keyValue;

        let key1 = [];
        for(let i=0; i < keyString.length;i++)
            key1.push(keyString[i])

        for (let i = 0; i < key1.length; i++) {
            codingArray[i] = []
        }
        let deep = (message.length/key1.length);
        for (let j = 0; j < deep; j++) {
            for (let i = 0; i < key1.length; i++) {
                const charToSave = message[i+(4*j)]
                if(charToSave !== undefined){
                    codingArray[i][j] = charToSave;
                }
            }
        }

        key1.reverse();
        let result = ""
        let k = 0;
        for (let j = 0; j < deep; j++) {
            for (let i = 0; i < key1.length-k; i++) {
                let element = codingArray[key1[i]-1][j];
                if(element !== undefined){
                    result = result+element;
                } else {
                    while(element === undefined){
                        k++;
                        element = codingArray[key1[i]-1-k][j];
                    }
                    result = result+element;
                }
            }
        }
        setDecodeKey(result)
    }


    const [signature, setSignature] = useState('signature')
    const [decodeSignature, setDecodeSignature] = useState('')
    const [encodeSignature, setEncodeSignature] = useState('')

    const onChangeDecodeSignature = (value) => {
        setDecodeSignature(value)
        code_zad3(value, signature)
    }

    const onChangeEncodeSignature = (value) => {
        setEncodeSignature(value)
        console.log(value)
        console.log(signature)
        decode_zad3(value, signature)
    }

    function creatingTitlebarOfArray(sortedKeyArray, mainKeyArray){
        let index = 1;
        sortedKeyArray.forEach((element) => {
            let mainKeyCharacter = mainKeyArray.find(mainElement =>
                mainElement.letter == element && !mainElement.if_was
            )
            mainKeyCharacter.index = index;
            mainKeyCharacter.if_was = true;
            index++;
        });
    }

    function createMainKeyObjectArray(key){
        return key.split("").map( (element) => {
            return {
                letter: element,
                if_was: false
            }
        });
    }

    function code_zad3(message, key){
        message = message.replace(/\s/g, "").split("")
        let sortedKeyArray = key.split("").sort()
        let mainKeyArray = createMainKeyObjectArray(key)
        creatingTitlebarOfArray(sortedKeyArray, mainKeyArray)

        const message_length_without_spaces = message.length;
        const rows_j = message_length_without_spaces/key.length

        for(let j = 0; j < rows_j; j++){
            for(let i = 0; i < key.length; i++){
                if(mainKeyArray[i].message_part === undefined)
                    mainKeyArray[i].message_part = []
                let charToAdd = message[j*key.length+i]
                if(charToAdd !== undefined)
                    mainKeyArray[i].message_part.push(charToAdd)
            }
        }
        mainKeyArray.forEach((el) => el.if_was = false)
        let result = ""
        sortedKeyArray.forEach((element) => {
            let mainKeyCharacter = mainKeyArray.find(mainElement =>
                mainElement.letter == element && !mainElement.if_was
            )
            mainKeyCharacter.if_was = true;
            result += mainKeyCharacter.message_part.join("")+ " "
        });
        setEncodeSignature(result.trim())
    }

    function decode_zad3(message, key){
        let sortedKeyArray = key.split("").sort()
        let mainKeyArray = createMainKeyObjectArray(key)
        creatingTitlebarOfArray(sortedKeyArray, mainKeyArray)
        console.log(mainKeyArray)

        let splittedMessage = message.split(" ");

        for(let i=0; i < mainKeyArray.length; i++){
            let mainKeyCharacter = mainKeyArray[i];
            mainKeyCharacter.message_part = splittedMessage[mainKeyCharacter.index-1]
        }
        console.log(mainKeyArray)
        let result = ""

        const message_length_without_spaces = message.length;
        const rows_j = message_length_without_spaces/key.length

        for(let j = 0; j < rows_j; j++){
            for(let i = 0; i < key.length; i++){
                let characterToSave = mainKeyArray[i].message_part.charAt(j)
                result+=characterToSave
            }
        }

        setDecodeSignature(result.trim())

    }

    return (
        <Container>
            <Card className="mt-3" style={{background : "#C0C0C0"}}>
                <Container className="p-5">
                    <Card style={{boxShadow : "10px 10px #808080"}}>
                        <Stack className="pt-4">
                            <h2 className="d-flex justify-content-center">RAIL FENCE</h2>
                        </Stack>
                        <hr/>
                        <Row>
                            <Col className="d-flex justify-content-center m-5">
                                <div className="row g-3 align-items-center">
                                    <div className="col-auto">
                                        <label htmlFor="input1" className="col-form-label">Matrix size</label>
                                    </div>
                                    <div className="col-auto">
                                        <input type="number" id="input1" className="form-control"
                                               value={matrixSize}
                                               onChange={(e) => onChangeMatrixSize(e.target.value)}
                                               min="2" max="999" step="1" aria-describedby="helpInline1"/>
                                    </div>
                                    <div className="col-auto">
                                <span id="helpInline1" className="form-text">
                                  Must be number in between 2-999.
                                </span>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="m-3">
                                    <h3>Encoded</h3>
                                    <textarea className="form-control"
                                              id="exampleFormControlTextarea1"
                                              rows="5"
                                              value={encodeRail}
                                              onChange={(e) => onChangeEncodeRail(e.target.value)}
                                    />
                                </div>
                            </Col>
                            <Col>
                                <div className="m-3">
                                    <h3>Decoded</h3>
                                    <textarea className="form-control"
                                              id="exampleFormControlTextarea1"
                                              rows="5"
                                              value={decodeRail}
                                              onChange={(e) => onChangeDecodeRail(e.target.value)}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </Container>

                <Container className="p-5">
                    <Card style={{boxShadow : "10px 10px #808080"}}>
                        <Stack className="pt-4">
                            <h2 className="d-flex justify-content-center">MATERIAL ARRANGEMENTS</h2>
                        </Stack>
                        <hr/>
                        <Row>
                            <Col className="d-flex justify-content-center m-5">
                                <div className="row g-3 align-items-center">
                                    <div className="col-auto">
                                        <label htmlFor="input2" className="col-form-label">Key</label>
                                    </div>
                                    <div className="col-auto">
                                        <input type="number" id="input2" className="form-control"
                                               value={key}
                                               onChange={(e) => setKey(e.target.value)}
                                               min="1" max="9999999" step="1" aria-describedby="helpInline2"/>
                                    </div>
                                    <div className="col-auto">
                                <span id="helpInline2" className="form-text">
                                  Must be number in between 1-9999999.
                                </span>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="m-3">
                                    <h3>Encoded</h3>
                                    <textarea className="form-control"
                                              rows="5"
                                              value={encodeKey}
                                              onChange={(e) => onChangeEncodeKey(e.target.value)}

                                    />
                                </div>
                            </Col>
                            <Col>
                                <div className="m-3">
                                    <h3>Decoded</h3>
                                    <textarea className="form-control"
                                              rows="5"
                                              value={decodeKey}
                                              onChange={(e) => onChangeDecodeKey(e.target.value)}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </Container>

                <Container className="p-5">
                    <Card style={{boxShadow : "10px 10px #808080"}}>
                        <Stack className="pt-4">
                            <h2 className="d-flex justify-content-center">MATERIAL ARRANGEMENTS</h2>
                        </Stack>
                        <hr/>
                        <Row>
                            <Col className="d-flex justify-content-center m-5">
                                <div className="row g-3 align-items-center">
                                    <div className="col-auto">
                                        <label htmlFor="input3" className="col-form-label">Signature</label>
                                    </div>
                                    <div className="col-auto">
                                        <input type="text" id="input3" className="form-control"
                                               value={signature}
                                               onChange={(e) => setSignature(e.target.value)}
                                               minLength="1" maxLength="20" aria-describedby="helpInline3"/>
                                    </div>
                                    <div className="col-auto">
                                <span id="helpInline3" className="form-text">
                                  Must be 1-20 characters long.
                                </span>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="m-3">
                                    <h3>Encoded</h3>
                                    <textarea className="form-control"
                                              rows="5"
                                              value={encodeSignature}
                                              onChange={(e) => onChangeEncodeSignature(e.target.value)}
                                    />
                                </div>
                            </Col>
                            <Col>
                                <div className="m-3">
                                    <h3>Decoded</h3>
                                    <textarea className="form-control"
                                              rows="5"
                                              value={decodeSignature}
                                              onChange={(e) => onChangeDecodeSignature(e.target.value)}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </Container>

            </Card>
        </Container>
    );
}

export default App;
