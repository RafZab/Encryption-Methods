import {Card, Col, Container, Row, Stack} from "react-bootstrap";
import {useState} from "react";
import axios from "axios";

function App() {

    // BSK2
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

        // initialize arrays
        for (let i = 0; i < value.length; i++) {
            codingArray[i] = []
        }
        
        // saving characters in diagonally way to matrix
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

        // reading based on rows from up to down
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

        // recovering previous matrix like in coding
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

        // converting to characters 
        for(let i=line; i<ciphertext.length; i+=2*(key-1)) pt[i] = ciphertext.charAt(k++);

        // setting decoded string
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

        // making array from string which contains numbers
        let key1 = [];
        for(let i=0; i < keyString.length;i++)
            key1.push(keyString[i])
        
        // intializing arrays
        for (let i = 0; i < key1.length; i++) {
            codingArray[i] = []
        }
        
        // filling the matrix
        let deep = (message.length/key1.length);
        for (let j = 0; j < deep; j++) {
            for (let i = 0; i < key1.length; i++) {
                const charToSave = message[i+(key1.length*j)]
                if(charToSave !== undefined){
                    codingArray[i][j] = charToSave;
                }
            }
        }

        // saving characters from particular columns in given order
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

        // making array from string which contains numbers
        let key1 = [];
        for(let i=0; i < keyString.length;i++)
            key1.push(keyString[i])

        // intializing arrays
        for (let i = 0; i < key1.length; i++) {
            codingArray[i] = []
        }

        // filling the matrix
        let deep = (message.length/key1.length);
        for (let j = 0; j < deep; j++) {
            for (let i = 0; i < key1.length; i++) {
                const charToSave = message[i+(key1.length*j)]
                if(charToSave !== undefined){
                    codingArray[i][j] = charToSave;
                }
            }
        }

        // reserving key order
        key1.reverse();
        let result = ""
        let k = 0;
        // using key reading characters to result
        for (let j = 0; j < deep; j++) {
            for (let i = 0; i < key1.length-k; i++) {
                let element = codingArray[key1[i]-1][j];
                if(element !== undefined){
                    result = result+element;
                } else {
                    // made on case when matrix is not fully filled
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
        decode_zad3(value, signature)
    }

    // creating number order based on key
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
    // making array contains objects
    function createMainKeyObjectArray(key){
        return key.split("").map( (element) => {
            return {
                letter: element,
                if_was: false
            }
        });
    }

    function code_zad3(message, key){
        // clearing message from spaces and making it into array and sort
        message = message.replace(/\s/g, "").split("")
        let sortedKeyArray = key.split("").sort()
        
        // creating number order based on key
        let mainKeyArray = createMainKeyObjectArray(key)
        creatingTitlebarOfArray(sortedKeyArray, mainKeyArray)

        const message_length_without_spaces = message.length;
        const rows_j = message_length_without_spaces/key.length

        // setting parts of coded message to columns in matrix
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

        // saving result from set matrix in order of number key generated by string key
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

        // begginning same like in coding
        let sortedKeyArray = key.split("").sort()
        let mainKeyArray = createMainKeyObjectArray(key)
        creatingTitlebarOfArray(sortedKeyArray, mainKeyArray)
        console.log(mainKeyArray)

        // message splitted on parts by spaces given in input
        let splittedMessage = message.split(" ");

        // matching parts of coded message with particular columns in matrix
        // like in the coding function
        for(let i=0; i < mainKeyArray.length; i++){
            let mainKeyCharacter = mainKeyArray[i];
            mainKeyCharacter.message_part = splittedMessage[mainKeyCharacter.index-1]
        }
        
        const message_length_without_spaces = message.length;
        const rows_j = message_length_without_spaces/key.length
        
        // saving decoded message from made simple matrix
        let result = ""
        for(let j = 0; j < rows_j; j++){
            for(let i = 0; i < key.length; i++){
                let characterToSave = mainKeyArray[i].message_part.charAt(j)
                result+=characterToSave
            }
        }

        setDecodeSignature(result.trim())

    }

    // BSK3

    const [trial, setTrial] = useState(7)
    const [polynomial, setPolynomial] = useState('10101')
    const [seed, setSeed] = useState('101100')
    const [resultLFSR, setResultLFSR] = useState('')

    const onChangeSeed = (value) => {
        setSeed(value)
        generateRandomNumber(value)
    }

    const generateRandomNumber = (seedValue) => {
        const polynomialTable = []
        const seedTable = []

        for(let i = 0; i < polynomial.length; i++)
            polynomialTable.push(+polynomial[i])

        for(let i = 0; i < seedValue.length; i++)
            seedTable.push(+seedValue[i])

        const requestBody =
            {
                trial: trial,
                polynomial: polynomialTable,
                seed: seedTable
            }

        axios.post('http://localhost:8080/generator/random', requestBody).then((response) => {
            setResultLFSR(response.data)
            }).catch(function (error) {
            console.log(error);
        });
    }

    const [trialCode, setTrialCode] = useState(5)
    const [polynomialCode, setPolynomialCode] = useState('10101')
    const [seedCode, setSeedCode] = useState('101100')
    const [decodeSignatureCodeSTREAM, setDecodeSignatureCodeSTREAM] = useState('Hello')
    const [encodeSignatureCodeSTREAM, setEncodeSignatureCodeSTREAM] = useState('')

    const onChangeDecodeSignatureCodeSTREAM = (value) => {
        setDecodeSignatureCodeSTREAM(value)
        code_BSK3_zad3(value)
    }

    const onChangeEncodeSignatureCodeSTREAM = (value) => {
        setEncodeSignatureCodeSTREAM(value)
        encode_BSK3_zad3(value)
    }

    function code_BSK3_zad3(message) {
        const polynomialTable = []
        const seedTable = []

        for(let i = 0; i < polynomialCode.length; i++)
            polynomialTable.push(+polynomialCode[i])

        for(let i = 0; i < seedCode.length; i++)
            seedTable.push(+seedCode[i])

        const requestBody =
            {
                trial: trialCode,
                polynomial: polynomialTable,
                seed: seedTable
            }
        axios.post('http://localhost:8080/stream/encode/' + message, requestBody).then((response) => {
            setEncodeSignatureCodeSTREAM(response.data)
        }).catch(function (error) {
            console.log(error);
        });
    }

    function encode_BSK3_zad3(message) {
        const polynomialTable = []
        const seedTable = []

        for(let i = 0; i < polynomialCode.length; i++)
            polynomialTable.push(+polynomial[i])

        for(let i = 0; i < seedCode.length; i++)
            seedTable.push(+seedCode[i])

        const requestBody =
            {
                trial: trialCode,
                polynomial: polynomialTable,
                seed: seedTable
            }

        axios.post('http://localhost:8080/stream/decode/' + message, requestBody).then((response) => {
            setDecodeSignatureCodeSTREAM(response.data)
        }).catch(function (error) {
            console.log(error);
        });
    }

    // DES

    const [decodeDES, setDecodeDES] = useState('')
    const [encodeDES, setEncodeDES] = useState('')

    const onChangeDecodeDES = (value) => {
        setDecodeDES(value)
        code_BSK4_zad4(value)
    }

    const onChangeEncodeDES = (value) => {
        setEncodeDES(value)
        encode_BSK4_zad4(value)
    }


    function code_BSK4_zad4(message) {
        const key = "0110010001111010110010001111010110010001111010110010001111010110"
        axios.get('http://localhost:8888/DES/encode/' + message + '/' + key).then((response) => {
            setEncodeDES(response.data)
        }).catch(function (error) {
            console.log(error);
        });
    }

    function encode_BSK4_zad4(message) {
        const key = "0110010001111010110010001111010110010001111010110010001111010110"
        axios.get('http://localhost:8888/DES/decode/' + message + '/' + key).then((response) => {
            setDecodeDES(response.data)
        }).catch(function (error) {
            console.log(error);
        });
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

                <Container className="p-5">
                    <Card style={{boxShadow : "10px 10px #808080"}}>
                        <Stack className="pt-4">
                            <h2 className="d-flex justify-content-center">PSEUDOLOSE NUMBER GENERATOR</h2>
                        </Stack>
                        <hr/>
                        <Row>
                            <Col className="d-flex justify-content-center m-5">
                                <div className="row g-3 align-items-center">
                                    <div className="col-auto">
                                        <label htmlFor="input2" className="col-form-label">Trial</label>
                                    </div>
                                    <div className="col-auto">
                                        <input type="number" id="input2" className="form-control"
                                               value={trial}
                                               onChange={(e) => setTrial(e.target.value)}
                                               min="1" max="9999999" step="1" aria-describedby="helpInline2"/>
                                    </div>
                                    <div className="col-auto">
                                <span id="helpInline2" className="form-text">
                                  Must be number in between 1-9999999.
                                </span>
                                    </div>
                                </div>
                                <div className="row g-3 align-items-center ps-2">
                                    <div className="col-auto">
                                        <label htmlFor="input2" className="col-form-label">Polynomial</label>
                                    </div>
                                    <div className="col-auto">
                                        <input type="number" id="input2" className="form-control"
                                               value={polynomial}
                                               onChange={(e) => setPolynomial(e.target.value)}
                                               min="1" max="9999999" step="1" aria-describedby="helpInline2"/>
                                    </div>
                                    <div className="col-auto">
                                <span id="helpInline2" className="form-text">
                                  Must be number x+x^3+x^5 = 10101.
                                </span>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="m-3">
                                    <h3>Result</h3>
                                    <textarea className="form-control"
                                              readOnly="true"
                                              rows="5"
                                              value={resultLFSR}

                                    />
                                </div>
                            </Col>
                            <Col>
                                <div className="m-3">
                                    <h3>Seed</h3>
                                    <textarea className="form-control"
                                              rows="5"
                                              value={seed}
                                              onChange={(e) => onChangeSeed(e.target.value)}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </Container>

                <Container className="p-5">
                    <Card style={{boxShadow : "10px 10px #808080"}}>
                        <Stack className="pt-4">
                            <h2 className="d-flex justify-content-center">STREAM CODE</h2>
                        </Stack>
                        <hr/>
                        <Row>
                            <Col className="d-flex justify-content-center m-5">
                                <div className="row g-3 align-items-center">
                                    <div className="col-auto">
                                        <label htmlFor="input2" className="col-form-label">Trial</label>
                                    </div>
                                    <div className="col-auto">
                                        <input type="number" id="input2" className="form-control"
                                               value={trialCode}
                                               onChange={(e) => setTrialCode(e.target.value)}
                                               min="1" max="9999999" step="1" aria-describedby="helpInline2"/>
                                    </div>
                                    <div className="col-auto">
                                <span id="helpInline2" className="form-text">
                                  Must be number in between 1-9999999.
                                </span>
                                    </div>
                                </div>
                                <div className="row g-3 align-items-center ps-2">
                                    <div className="col-auto">
                                        <label htmlFor="input2" className="col-form-label">Polynomial</label>
                                    </div>
                                    <div className="col-auto">
                                        <input type="number" id="input2" className="form-control"
                                               value={polynomialCode}
                                               onChange={(e) => setPolynomialCode(e.target.value)}
                                               min="1" max="9999999" step="1" aria-describedby="helpInline2"/>
                                    </div>
                                    <div className="col-auto">
                                <span id="helpInline2" className="form-text">
                                  Must be number x+x^3+x^5 = 10101.
                                </span>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="m-3">
                                    <h3>Seed</h3>
                                    <textarea className="form-control"
                                              rows="5"
                                              value={seedCode}
                                              onChange={(e) => setSeedCode(e.target.value)}
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="m-3">
                                    <h3>Encoded</h3>
                                    <textarea className="form-control"
                                              rows="5"
                                              value={encodeSignatureCodeSTREAM}
                                              onChange={(e) => onChangeEncodeSignatureCodeSTREAM(e.target.value)}

                                    />
                                </div>
                            </Col>
                            <Col>
                                <div className="m-3">
                                    <h3>Decoded</h3>
                                    <textarea className="form-control"
                                              rows="5"
                                              value={decodeSignatureCodeSTREAM}
                                              onChange={(e) => onChangeDecodeSignatureCodeSTREAM(e.target.value)}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </Container>


                <Container className="p-5">
                    <Card style={{boxShadow : "10px 10px #808080"}}>
                        <Stack className="pt-4">
                            <h2 className="d-flex justify-content-center">DES</h2>
                        </Stack>
                        <hr/>
                        <Row>
                            <Col>
                                <div className="m-3">
                                    <h3>Encoded</h3>
                                    <textarea className="form-control"
                                              rows="5"
                                              value={encodeDES}
                                              onChange={(e) => onChangeEncodeDES(e.target.value)}

                                    />
                                </div>
                            </Col>
                            <Col>
                                <div className="m-3">
                                    <h3>Decoded</h3>
                                    <textarea className="form-control"
                                              rows="5"
                                              value={decodeDES}
                                              onChange={(e) => onChangeDecodeDES(e.target.value)}
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
