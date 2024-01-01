import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useUser } from '../../login register/usercontext';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

// ... (import statements)

const Checkout = () => {
    const { userId } = useUser();
  
    const [address, setAddress] = useState({
      street: '',
      city: '',
      state: '',
      postalCode: '',
      country: '',
    });
  
    const [paymentMode, setPaymentMode] = useState({
      cardNumber: '',
      cardHolderName: '',
      expirationDate: '',
    });
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post('http://localhost:3005/buyer/create-buyer', {
          user: userId,
          address,
          paymentModes: [paymentMode],
        });
  
        console.log('Buyer created:', response.data);
      } catch (error) {
        console.error('Error creating buyer:', error);
      }
    };

    const handleOrder = async (e) => {
        e.preventDefault();
        try {
          const orderResponse = await axios.post('http://localhost:3005/orders/placeorder', {
            userId,
          });
    
          console.log('Order placed:', orderResponse.data);
          const orderData = orderResponse.data;
          alert(`Order placed successfully!\n
          Total Amount: ${orderData.totalBill}\n
          Delivery Date: ${orderData.deliveryDate}`);
    
        } 
        catch (error) {
          console.error('Error placing order:', error);
        }
      };
    
  
    return (
      <Container>
        <Row>
          <Col  className='mt-5 mb-5'>
            <h5>CHECKOUT</h5>
  
            <h5 className='mt-5'>BILLING DETAILS</h5>
            <Form onSubmit={handleSubmit}>
              <Form.Group className='mb-3'>
                <Form.Label>Street</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter street'
                  value={address.street}
                  onChange={(e) => setAddress({ ...address, street: e.target.value })}
                />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>City</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter city'
                  value={address.city}
                  onChange={(e) => setAddress({ ...address, city: e.target.value })}
                />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>State</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter state'
                  value={address.state}
                  onChange={(e) => setAddress({ ...address, state: e.target.value })}
                />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Postal Code</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter postal code'
                  value={address.postalCode}
                  onChange={(e) => setAddress({ ...address, postalCode: e.target.value })}
                />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Country</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter country'
                  value={address.country}
                  onChange={(e) => setAddress({ ...address, country: e.target.value })}
                />
              </Form.Group>
  
              <Form.Group className='mb-3'>
                <Form.Label>Card Number</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter card number'
                  value={paymentMode.cardNumber}
                  onChange={(e) => setPaymentMode({ ...paymentMode, cardNumber: e.target.value })}
                />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Card Holder Name</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter card holder name'
                  value={paymentMode.cardHolderName}
                  onChange={(e) => setPaymentMode({ ...paymentMode, cardHolderName: e.target.value })}
                />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Expiration Date</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter expiration date'
                  value={paymentMode.expirationDate}
                  onChange={(e) => setPaymentMode({ ...paymentMode, expirationDate: e.target.value })}
                />
              </Form.Group>
  
              <Button variant='primary' type='submit'>
                SAVE
              </Button>
            </Form>
            <p className='mt-4 col-12'>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our<span className='text-primary'>privacy and policy</span>.</p>
            <div className='d-flex flex-row mt-4'>
              <input type="checkbox"/><p className='mx-4 mt-2'> I have read and agree to the website <span className='text-primary'>terms and conditions *</span></p>
            </div>

            <div className='mt-4' style={{float:"right"}}>
            <button className='btn btn-primary' onClick={handleOrder}>PLACE ORDER</button>
            </div>
          </Col>
        </Row>
      </Container>
    );
  };
  
  export default Checkout;
  