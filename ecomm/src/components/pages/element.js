import React from 'react';
import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Element = () => {

  const [expandedTabs, setExpandedTabs] = useState(Array(6).fill(false));

  const handleToggle = (index) => {
    const newExpandedTabs = [...expandedTabs];
    newExpandedTabs[index] = !newExpandedTabs[index];
    setExpandedTabs(newExpandedTabs);
  };

  return (
    <Container>
      <Row>
        <Col className=' col-12 mt-5 mb-5'> 
             <h5>ELEMENTS</h5>

             <h5 className='mt-4'>ACCORDIONS & TABS</h5>
              
             {[0, 1, 2].map((index) => (
            <Row key={index}>
              <Col sm={6} className='mb-1'>
                <div style={{ height: '50px', border: '1px solid whitesmoke' }} className='d-flex align-items-center'>
                  <span onClick={() => handleToggle(index)} style={{ cursor: 'pointer' }} className='mx-2'>
                    {expandedTabs[index] ? '-' : '+'}
                  </span>{' '}
                  What are the delivery types?
                  {expandedTabs[index] && (
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat porttitor.</div>
                  )}
                </div>
              </Col>
              <Col sm={6} className='mb-1'>
                <div
                  style={{ height: '50px', border: '1px solid whitesmoke', backgroundColor: 'whitesmoke' }}
                  className='d-flex align-items-center justify-content-between'
                >
                  What are the delivery types?
                  <span onClick={() => handleToggle(index)} style={{ cursor: 'pointer' }} className='mx-2'>
                    {expandedTabs[index] ? '-' : '+'}
                  </span>{' '}
                  {expandedTabs[index] && (
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat porttitor.</div>
                  )}
                </div>
              </Col>
            </Row>
          ))}


        </Col>

        <Col>
                    <h5>SERVICE BOXES</h5>

                      <div className="d-flex flex-row justify-content-around mt-4">

                        <div className=" align-items-center text-center">
                            <img src="./images/s1.png" alt="" style={{height:"60px",width:"60px"}}   />
                            <h6>WEB DESIGN & DEVLOPMENT</h6>
                            <p className="mb-1">Lorem ipsum dolor sit amet, consectetur</p>
                            <p className="mb-1">adipiscing elit. Maecenas placerat porttitor</p>

                        </div>

                        <div className="align-items-center text-center">
                            <img src="./images/s2.png" alt="" style={{height:"60px",width:"60px"}}   />
                            <h6>STORE CUSTOMIZATION</h6>
                            <p className="mb-1" >Lorem ipsum dolor sit amet, consectetur</p>
                            <p className="mb-1">adipiscing elit. Maecenas placerat porttitor</p>
                        </div> 
                        
                        <div className="align-items-center text-center">
                            <img src="./images/s3.png" alt="" style={{height:"60px",width:"60px"}}   />
                            <h6>THEME SUPPORT</h6> 
                            <p className="mb-1">Lorem ipsum dolor sit amet, consectetur</p>
                            <p className="mb-1">adipiscing elit. Maecenas placerat porttitor</p>                   
                      </div>

                      </div>

                      <div className="d-flex flex-row justify-content-around mt-5 mb-5">

                        <div className="align-items-center text-center">
                            <img src="./images/s4.png" alt="" style={{height:"60px",width:"60px"}}   />
                            <h6>POWERFUL SOLUTIONS</h6>
                            <p className="mb-1">Lorem ipsum dolor sit amet, consectetur</p>
                            <p className="mb-1">adipiscing elit. Maecenas placerat porttitor</p>
                        </div>

                        <div className="align-items-center text-center">
                            <img src="./images/s5.png" alt="" style={{height:"60px",width:"60px"}}   />
                            <h6>BRANDING AND SOCIAL MARKETING</h6>
                            <p className="mb-1">Lorem ipsum dolor sit amet, consectetur</p>
                            <p className="mb-1">adipiscing elit. Maecenas placerat porttitor</p>
                        </div> 

                        <div className="align-items-center text-center">
                            <img src="./images/s6.png" alt="" style={{height:"60px",width:"60px"}}   />
                            <h6>MOBILE APP DEVELOPMENT</h6>
                            <p className="mb-1">Lorem ipsum dolor sit amet, consectetur</p>
                            <p className="mb-1">adipiscing elit. Maecenas placerat porttitor</p>
                        </div>
                        
                      </div>
          
        </Col>


      </Row>
    </Container>
  );
};

export default Element;
