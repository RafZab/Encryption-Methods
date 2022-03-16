import {Card, Col, Container, Row, Stack} from "react-bootstrap";

function App() {
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
                                               min="1" max="999" step="1" aria-describedby="helpInline1"/>
                                    </div>
                                    <div className="col-auto">
                                <span id="helpInline1" className="form-text">
                                  Must be number in between 1-999.
                                </span>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="m-3">
                                    <h3>Encoded</h3>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"/>
                                </div>
                            </Col>
                            <Col>
                                <div className="m-3">
                                    <h3>Decoded</h3>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"/>
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
                                    <textarea className="form-control" rows="5"/>
                                </div>
                            </Col>
                            <Col>
                                <div className="m-3">
                                    <h3>Decoded</h3>
                                    <textarea className="form-control" rows="5"/>
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
                                    <textarea className="form-control" rows="5"/>
                                </div>
                            </Col>
                            <Col>
                                <div className="m-3">
                                    <h3>Decoded</h3>
                                    <textarea className="form-control" rows="5"/>
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
