import React, { useState } from 'react';
import data from '../blog/blog.json';
import './latestnews.css';

const Latestnews = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    const nextIndex = (startIndex + 1) % (data.length - 2); // Adjusted for 3 cards
    setStartIndex(nextIndex);
  };

  const handlePrev = () => {
    setStartIndex(
      (prevIndex) => (prevIndex - 1 + data.length) % data.length
    );
  };

  return (
    <div className="card-slider">
      <div className="card-container">
        {data.slice(startIndex, startIndex + 3).map((obj, index) => (
          <div key={index} className="card mx-5">
            <img src={obj.image} alt="" className='img-fluid'/>
            <h6>{obj.title}</h6>
            <p style={{textAlign:"justify"}}>{obj.description}</p>
            <div className='d-flex flex-row justify-content-between'>
              <div>{obj.writtenby}</div>
              <div><button className='btn font-weight-bold'>READ MORE...</button></div>
            </div>
          </div>
        ))}
      </div>
      <button className="prev" onClick={handlePrev}>&lt;</button>
      <button className="next" onClick={handleNext}>&gt;</button>
    </div>
  );
};

export default Latestnews;
