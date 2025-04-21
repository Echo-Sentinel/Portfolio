import React from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        Copyright © Your Website 2023
      </div>

      <div className="footer-icons">
        <a className='tw' href="#"><FaTwitter /></a>
        <a className='fb' href="#"><FaFacebookF /></a>
        <a className='li' href="#"><FaLinkedinIn /></a>
      </div>

      <div className="footer-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Use</a>
      </div>
    </footer>
  );
};

export default Footer;
