import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './cardslider.css';

const CardSlider = () => {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3005/products/getproducts');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 4) % products.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 4 + products.length) % products.length
    );
  };

  return (
    <div className="card-slider">
      <div className="card-container">
        {products.slice(currentIndex, currentIndex + 4).map((product, index) => (
          <div key={index} className="card">
            <img src={product.imageUrl} alt={product.name} />
            <h6 className="mt-4">{product.name}</h6>
            <p>{`Rs.${product.price}`}</p>
          </div>
        ))}
      </div>
      <button className="prev" onClick={handlePrev}>&lt;</button>
      <button className="next" onClick={handleNext}>&gt;</button>
    </div>
  );
};

export default CardSlider;
