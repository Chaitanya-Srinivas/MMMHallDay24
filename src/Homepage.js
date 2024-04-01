import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Homepage.css'; // Import CSS file for Homepage styles

const Homepage = ({ images }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <div className="homepage-container">
      <div className="homepage-title">
        <h1>MMM Hall Day Invitation<br/>From Mess Mithrulu</h1>
      </div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="image-slide">
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Homepage;
