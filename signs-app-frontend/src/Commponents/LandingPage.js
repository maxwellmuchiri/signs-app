import React from 'react';
//import seedlingImage from '../assets/seedling.jpg';

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="jumbotron">
        <h1>Welcome to ELIM SIGNS</h1>
        <p>Elevating Your Spaces, One Sign at a Time. Discover the Artistry of Communication Through Our Unique Signage Creations. Your Vision, Our Craftsmanship – Uniting Design and Quality.</p>
        <a href="/cart" className="btn btn-primary">Shop Now</a>
      </div>
      <div className="container">
        <div className="row">
          {/* <div className="col-md-6">
            <img src={seedlingImage} alt="Seedlings" className="img-fluid" />
          </div> */}
          <div className="col-md-6">
            <h2>About Us</h2>
            <p>We are a family-owned business with over 20 years of experience in signs making. Our goal is to provide our customers with the best quality signs to help them achieve their ideas to reality.</p>
            <p>We offer a wide variety of high quality signs to choose from and we are committed to helping our customers achieve your idea to reality.</p>
            <a href="/about-us" className="btn btn-secondary">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
