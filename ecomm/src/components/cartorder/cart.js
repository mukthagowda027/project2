import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useUser } from '../../login register/usercontext';
import 'bootstrap/dist/css/bootstrap.min.css';

const Mycart = () => {

    const[data,setdata]=useState([]);
    const[product,setProduct]=useState([]);
    const [loading, setLoading] = useState(true);
    const [cartTotal, setCartTotal] = useState(0);

    const {userId} =useUser();

    useEffect(() => {
    
        const fetchCartData = async () => {
          try {

           setLoading(true);

            if(userId){
            const response = await axios.get(`http://localhost:3005/cart/get-cart/${userId}`); 
            setdata(response.data);}

            setLoading(false);

    
          } catch (error) {
            console.error('Error fetching cart data:', error);
            setLoading(false);
          }
        };
    
        fetchCartData();
      },[userId]);

      const fetchProductDetails = async (productId) => {
        try {
          const productDetailsResponse = await axios.get(`http://localhost:3005/products/getproducts2/${productId}`);
          setProduct((prevProducts) => [...prevProducts, productDetailsResponse.data]);
          console.log('Product Details:', productDetailsResponse.data);
        } catch (error) {
          console.error(`Error fetching product details for ${productId}:`, error.response.data);
        }
      };
      
      
      console.log(product)
    
      useEffect(() => {
        data.items &&
          data.items.forEach((item) => {
            fetchProductDetails(item.product);
          });
      }, [data.items]);


      const handleRemoveProduct = async (productId) => {
        try {
          const response = await axios.post(`http://localhost:3005/cart/remove-from-cart`, {
            userId,
            productId,
          });
    
          setdata(response.data);


        } catch (error) {
          console.error('Error removing product from cart:', error);
        }
      };

      useEffect(() => {
        if (data.items && product && product.length > 0) {
          const total = data.items.reduce((acc, el) => {
            const productInfo = product.find(p => p._id === el.product);
    
            if (productInfo) {
              acc += productInfo.price * el.quantity;
            }
    
            return acc;
          }, 0);
    
          setCartTotal(total);
        }
      }, [data.items, product]);
    
    

    
      if (loading) {
        return <p>Loading...</p>;
      }

  return (
    <Container>
      <Row>
        <Col md={12} className='mt-5 mb-5' >
          <h5>CART</h5><hr/>
          <div>
            <table className='table '>
              <thead>
                <tr>
                  <td></td>
                  <td></td>
                  <td><h6>PRODUCT</h6></td>
                  <td><h6>PRICE</h6></td>
                  <td><h6>QUANTITY</h6></td>
                  <td><h6>SUBTOTAL</h6></td>
                </tr>
              </thead>
              <tbody>
              {data.items && product && product.length > 0 && data.items.map((el, index) => {
                const productInfo = product.find(p => p._id === el.product);

                return (
                    <tr key={index}>
                    <td onClick={() => handleRemoveProduct(productInfo._id)} style={{fontSize:"30px",cursor:"pointer",color:"gray"}}>&times;</td>
                    <td>
                        {productInfo && <img src={productInfo.imageUrl} alt={productInfo.name} className='img-fluid' style={{width:"80px",height:"80px"}} />}
                    </td>
                    <td>{productInfo ? productInfo.name : 'Product Not Found'}</td>
                    <td>{productInfo ? `Rs.${productInfo.price}`: 'Price Not Found'}</td>
                    <td>{el.quantity !== undefined ? el.quantity : 'Quantity Not Available'}</td>
                   <td>{productInfo ? productInfo.price * el.quantity : 'Total Not Found'}</td>
                    </tr>
                );
                })}


                </tbody>
              <tfoot>
                <tr>
                  <td colSpan="3" className="text-start">
                    <div className="d-flex flex-row">
                    <input type="text" placeholder='Coupon code' className='form-control' style={{ width: '250px',backgroundColor:"whitesmoke"}} />
                      <button className='btn btn-primary ms-2'>APPLY COUPON</button>
                    </div>
                  </td>
                  <td colSpan="3" className="text-end">
                    <button className='btn btn-primary'>UPDATE CART</button>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

           <div style={{width:"500px",border:'1px solid black',float:"right"}}>
               <div className='d-flex align-items-center' style={{border:"1px solid black",height:"50px"}}><h6>CART TOTALS</h6></div>
               <div className='d-flex flex-row justify-content-between align-items-center' style={{border:"1px solid black"}}><h6>TOTAL</h6><p>Rs. {cartTotal}</p></div>
               <div className='d-flex flex-row align-items-center justify-content-center' style={{border:"1px solid black",height:"50px"}}>
                <button className='btn btn-dark btn-sm'><Link to="/checkout" className='text-decoration-none text-white'>PROCEED TO CHECKOUT</Link></button>
             </div>
           </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Mycart;
