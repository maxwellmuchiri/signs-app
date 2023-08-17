import React from 'react';
//import seedlingImage from '../assets/seedling.jpg';

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="jumbotron">
        <h1>Welcome to Sagana Seedlings</h1>
        <p>We grow and sell high-quality seedlings to help you achieve a successful harvest.</p>
        <a href="/cart" className="btn btn-primary">Shop Now</a>
      </div>
      <div className="container">
        <div className="row">
          {/* <div className="col-md-6">
            <img src={seedlingImage} alt="Seedlings" className="img-fluid" />
          </div> */}
          <div className="col-md-6">
            <h2>About Us</h2>
            <p>We are a family-owned business with over 20 years of experience in growing seedlings. Our goal is to provide our customers with the best quality seedlings to help them achieve a successful harvest.</p>
            <p>We offer a wide variety of seedlings to choose from and we are committed to helping our customers achieve their goals.</p>
            <a href="/about-us" className="btn btn-secondary">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
