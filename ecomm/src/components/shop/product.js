import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useUser } from '../../login register/usercontext';

const ProductDetails = () => {

  const { userId } = useUser();

  
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(0);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:3005/products/getproducts2/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProducts();
  }, [productId]);


  const handleAddToCart = async () => {
    try {
      const response = await axios.post('http://localhost:3005/cart/add-to-cart', {
        user: userId, 
        items: [{
          product: productId,
          quantity: quantity,
        }],
      });

      console.log(response.data);
      alert('Product added to cart successfully!');
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Error adding to cart. Please try again.');
    }
  };

  


  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };


  if (!product) {
    return <div>Loading...</div>;
  }

  

  return (
    <div className="container mt-5">
      <div className="row">
        <h2 className="mb-2">{product.name}</h2>
        <div className="col d-flex flex-row mt-4">
          <div>
          <img src={product.imageUrl} alt={product.name} className="img-fluid"/>
          </div>
          <div className="mx-5" style={{height:"500px",width:"500px"}}>
          <p className="mt-4"><span style={{fontWeight:"bold"}}>Description: </span><span style={{fontWeight:"bold"}}>Description: </span>{product.description}</p>
          <p><span style={{fontWeight:"bold"}}>Price: </span>{product.price}</p>
          <p><span style={{fontWeight:"bold"}}>Products Available: </span>{product.inventory}</p>
          <p><span style={{fontWeight:"bold"}}>Brand: </span>{product.brand}</p>
          <p><span style={{fontWeight:"bold"}}>Color: </span>{product.color}</p>
          <p><span style={{fontWeight:"bold"}}>Size: </span>{product.size}</p>
          <button className="btn btn-secondary" onClick={handleDecrement}>
              -
            </button>
            <span >{quantity}</span>
            <button className="btn btn-secondary mx-2" onClick={handleIncrement}>
              +
            </button><br/>

          <button className="btn btn-primary mt-4" onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
