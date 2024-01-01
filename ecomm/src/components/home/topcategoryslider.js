import React, { useState } from 'react';
import './topcategoryslider.css';

const ImageSlider = ({ images }) => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setStartIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
        <div className="card-slider">
          <div className="card-container">
            {images.slice(startIndex, startIndex + 4).map((obj, index) => (
              <div key={index} className="card">
                <img src={obj.src} alt="" className='img-fluid'/>
                <button className='btn mt-2 text-black btn-sm' style={{backgroundColor:"offwhite"}}><h6>{obj.category}</h6></button>
              </div>
            ))}
          </div>
          <button className="prev" onClick={handlePrev}>&lt;</button>
          <button className="next" onClick={handleNext}>&gt;</button>
        </div>
      );
    };

export default ImageSlider;
