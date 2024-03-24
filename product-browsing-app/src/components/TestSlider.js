import React from 'react';
import Slider from 'react-slick'; // Import Slider component
import 'slick-carousel/slick/slick.css'; // Import slick CSS
import 'slick-carousel/slick/slick-theme.css'; // Import slick theme CSS

const TestSlider = () => {
  // Sample product data for testing
  const products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
    // Add more sample products as needed
  ];

  return (
    <div>
      <h2>Test Slider</h2>
      <div className="carousel-container"> {/* Add class for styling */}
        <Slider dots={true} infinite={true} speed={500} slidesToShow={3} slidesToScroll={1}>
          {/* Render sample products */}
          {products.map((product) => (
            <div key={product.id}>
              <h3>{product.name}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestSlider;
