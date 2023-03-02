import React from 'react';
import bruschetta from '../assets/lemon dessert.jpg'
function Confirmation() {
  return (
    <div className="about-us">
    <div className="hero-text">
        <h1>Confirmed! </h1>
        <h2>Information about your booking will be sent to your email shortly. Thank you for choosing to dine at Little Lemon!</h2>

    </div>

    <div>
        <img  src={bruschetta} alt="Little Lemon restaurant cuisine 1"></img>
    </div>
</div>
  );
}

export default Confirmation
