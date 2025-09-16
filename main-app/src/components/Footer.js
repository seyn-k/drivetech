import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../assets/ChatGPT-Image-Jul-25-2025-08_49_57-PM.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo-address">
          <img src={logo} alt="Drive Tech Systems Logo" className="footer-logo" />
          <address>
            <strong>Drive Tech Systems Pvt Ltd</strong><br />
            123 Industrial Park Road,<br />
            Chennai, Tamil Nadu, India<br />
            Phone: +91 98765 43210<br />
            Email: info@drivetech.com
          </address>
        </div>
        <div className="footer-links">
          <Link to="/about">About us</Link>
          <Link to="/products">Products</Link>
          <Link to="/application">Application</Link>
          <Link to="/#contact">Contact us</Link>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Drive Tech Systems Pvt Ltd. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;