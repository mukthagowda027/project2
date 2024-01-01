import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Gallery = () => {
  return (
    <Container>
      <Row>
        <Col md={6} className='mt-5 mb-5' style={{height:"300px"}}>
             <h5>GALLERY</h5>

        </Col>
      </Row>
    </Container>
  );
};

export default Gallery;
