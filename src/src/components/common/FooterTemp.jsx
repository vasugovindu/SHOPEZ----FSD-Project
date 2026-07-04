import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin
} from "react-icons/fa";

import "../../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* About */}
        <div className="footer-section">
          <h3>ShopEase</h3>
          <p>
            ShopEase is your one-stop destination for electronics,
            fashion, home appliances and more.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/login/customer">Login</Link>
        </div>

        {/* Customer */}
        <div className="footer-section">
          <h4>Customer Service</h4>
          <Link to="/">Help Center</Link>
          <Link to="/">Return Policy</Link>
          <Link to="/">Shipping Info</Link>
          <Link to="/">Track Order</Link>
        </div>

        {/* Social */}
        <div className="footer-section">
          <h4>Follow Us</h4>

          <div className="social-icons">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
          </div>

          <p>Email: support@shopease.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} ShopEase. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;