// src/components/HorizontalScroll.jsx
import React from 'react';

const HorizontalScroll = ({ title }) => {

  return (
    <div className="container my-5">
      <h2>{title}</h2>
      <div className="horizontal-scroll d-flex">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;
