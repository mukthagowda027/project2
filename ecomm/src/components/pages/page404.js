import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Page404 = () => {
  return (
    <Container>
      <Row>
        <Col className='mt-5 mb-5'>
             <h5>PAGE 404</h5>

            

             <div className='d-flex align-items-center justify-content-center'>
                    <img src="./images/page404.png" alt="" className='img-fluid'/>
             </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Page404;
