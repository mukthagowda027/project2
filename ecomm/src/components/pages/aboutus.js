import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Aboutus = () => {

    return (
        <>
            <Container>
                <Row>
                    <Col md={12} className='mt-5 mb-5'>
                        <h5>ABOUT US</h5>

                        <div className="mt-4">
                            <h4>OUR STORY<hr/></h4>
                            <p style={{ textAlign: "justify" ,color:"grey"}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or randomised words which don’t look even slightly
                                believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t
                                anything embarrassing hidden in the middle of text always free from repetition, injected humour, or non-characteristic
                                words etc. which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum,
                                you need to be sure there isn’t anything embarrassing hidden in the middle of text always free from repetition.</p>
                        </div>

                    
                            <Row>
                                <Col md={6}>
                                    <img src="./images/about1.png" alt="" className="img-fluid" />
                                </Col>
                                <Col md={6} className="mt-5">
                                    <Row>
                                        <Col md={6}>
                                            <h6>EXCLUSIVE WORLDWIDE</h6>
                                            <p style={{color:"grey"}}>Cepteur sint occaecat cupidatat proident, taken possession of my entire soul, like these sweet mornings springs.</p>
                                        </Col>
                                        <Col md={6}>
                                            <h6>STYLE & QUALITY</h6>
                                            <p style={{color:"grey"}}>Cepteur sint occaecat cupidatat proident, taken possession of my entire soul, like these sweet mornings springs.</p>
                                        </Col>
                                        <Col md={6}>
                                            <h6>PROACTIVE APPROACH</h6>
                                            <p style={{color:"grey"}}>Cepteur sint occaecat cupidatat proident, taken possession of my entire soul, like these sweet mornings springs.</p>
                                        </Col>
                                        <Col md={6}>
                                            <h6>FURTHER REGULATIONS</h6>
                                            <p style={{color:"grey"}}>Cepteur sint occaecat cupidatat proident, taken possession of my entire soul, like these sweet mornings springs.</p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                <div className="card" style={{width:"18rem"}}>
                                        <img src="./images/about2.jpg" className="card-img-top" alt="alternate"/>
                                        <div className="card-body">
                                            <h5 className="card-title" style={{textAlign:"left"}}>Quality</h5>
                                            <p className="card-text" style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis 
                                            ligula eu lectus vulputate porttitor sed feugiat nunc. Mauris ac consectetur ante, dapibus gravida tellus. Nullam aliquet eleifend dapibus.</p>
                                        </div>
                                        </div>
                                </Col>
                                <Col>
                                <div className="card" style={{width:"18rem"}}>
                                        <img src="./images/about3.jpg" className="card-img-top" alt="alternate"/>
                                        <div className="card-body">
                                            <h5 className="card-title" style={{textAlign:"left"}}>Teamwork</h5>
                                            <p className="card-text" style={{textAlign:"justify"}}>Cras sagittis, ex euismod lacinia tempor, lectus orci elementum augue,
                                             eget auctor metus ante sit amet velit. Praesent sollicitudin lectus ut pharetra pulvinar. Donec et libero ligula.</p>
                                        </div>
                                        </div>
                                </Col>
                                <Col>
                                <div className="card" style={{width:"18rem"}}>
                                        <img src="./images/about4.jpg" className="card-img-top" alt="alternate"/>
                                        <div className="card-body">
                                            <h5 className="card-title" style={{textAlign:"left"}}>Respect</h5>
                                            <p className="card-text" style={{textAlign:"justify"}}>Maecenas quis viverra metus, et efficitur ligula. Nam congue augue et
                                             ex congue, sed luctus lectus congue. Integer convallis condimentum sem. Duis elementum tortor eget condimentum tempor.</p>
                                        </div>
                                        </div>
                                </Col>
                                <Col>
                                <div className="card" style={{width:"18rem"}}>
                                        <img src="./images/about5.jpg" className="card-img-top" alt="alternate"/>
                                        <div className="card-body">
                                            <h5 className="card-title" style={{textAlign:"left"}}>Responsibility</h5>
                                            <p className="card-text" style={{textAlign:"justify"}}>Maecenas quis viverra metus, et efficitur ligula. Nam congue augue et ex congue, 
                                             luctus lectus congue. Integer convallis condimentum sem. Duis elementum tortor eget condimentum tempor.</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="d-flex justify-content-center mt-4">
                                <Col className="col-6 d-flex flex-row " style={{height:"120px"}}>
                                    <h5 className="mx-5">Our Mission</h5><p style={{textAlign:"justify"}}> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                </Col>
                            </Row>
                            <Row className="d-flex justify-content-center mt-5 mb-4">
                                <Col className="col-6 d-flex flex-row " style={{height:"80px"}}>
                                    <h5 className="mx-5">Our Vission</h5><p style={{textAlign:"justify"}}> Duis aute irure dolor in reprehenderit in voluptate 
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,</p>
                                </Col>
                            </Row>
                            <Row className=" mt-5 mb-4">
                                <Col className=" " style={{height:"80px"}}>
                                    <h6 className="mx-5 font-weight-bolder" style={{fontWeight:"bolder"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</h6>
                                    <p >" Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                         veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit"</p>
                                </Col>
                            </Row>

                

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Aboutus;
