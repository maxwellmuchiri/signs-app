
import React from 'react';
import { FaFacebookSquare, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="footer-icons">
              <a href="https://www.facebook.com/SaganaFruitsNursery" target="_blank" rel="noopener noreferrer"><FaFacebookSquare /></a>
              <a href="https://wa.me/254792068962?text=I%27m%20interested%20in%20buying%20seedlings%20from%20your%20farm" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
              <a href="mailto:muchirimaxwel@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
              <a href="tel:+254792068962" target="_blank" rel="noopener noreferrer"><FaPhone /></a>
            </div>
            <p>&copy; 2021 Signs Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

