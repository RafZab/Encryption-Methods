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

    const [signature, setSignature] = useState('signature')
    const [decodeSignature, setDecodeSignature] = useState('')
    const [encodeSignature, setEncodeSignature] = useState('')



    return (
        <Container>
            <Card className="mt-3">
                <Container className="p-5">
                    <Card>
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
                    <Card>
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
                                    />
                                </div>
                            </Col>
                            <Col>
                                <div className="m-3">
                                    <h3>Decoded</h3>
                                    <textarea className="form-control"
                                              rows="5"
                                              value={decodeKey}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </Container>

                <Container className="p-5">
                    <Card>
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
                                    />
                                </div>
                            </Col>
                            <Col>
                                <div className="m-3">
                                    <h3>Decoded</h3>
                                    <textarea className="form-control"
                                              rows="5"
                                              value={decodeSignature}
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
