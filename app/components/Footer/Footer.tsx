import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div>
        <h5>Contact Us</h5>
        <p className='feedback'>
          Have questions or feedback? Feel free to reach out to us at{' '}
          <a href="mailto:info@example.com">info@example.com</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;