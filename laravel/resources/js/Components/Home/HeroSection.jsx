// src/components/HeroSection.jsx
import React from 'react';
import Carousel from './Carousel';

const HeroSection = () => {
  return (
    <div className="container-fluid hero-section py-5">
      <div className="row">
        <div className="col-md-6 d-flex align-items-center">
          <div className="hero-content">
            <h1 className="display-4">Watch the Best Movies Anytime</h1>
            <p className="display-5">Stream your favorite movies and TV shows</p>
          </div>
        </div>
        <div className="col-md-6">
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
