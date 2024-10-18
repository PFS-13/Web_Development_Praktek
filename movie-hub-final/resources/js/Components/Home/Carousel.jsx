// src/components/Carousel.jsx
import React from 'react';

const Carousel = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100"
            src="https://www.movieposters.com/cdn/shop/files/loki_3t6w2gps_480x.progressive.jpg?v=1693682654"
            alt="First slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="https://www.movieposters.com/cdn/shop/products/mandalorian.54000f.pw_480x.progressive.jpg?v=1599582718"
            alt="Second slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="https://www.movieposters.com/cdn/shop/files/sonic-the-hedgehog-3_ncwdwcum_480x.progressive.jpg?v=1725465425"
            alt="Third slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="https://www.movieposters.com/cdn/shop/products/friday.mp_480x.progressive.jpg?v=1615329952"
            alt="Fourth slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="https://www.movieposters.com/cdn/shop/products/inglourious-basterds-style4_37d01d94-318d-4840-a290-6fc5aa7b8072_480x.progressive.jpg?v=1615396029"
            alt="Fifth slide"
          />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
