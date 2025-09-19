import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/ChatGPT-Image-Jul-25-2025-08_49_57-PM.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Drive Tech Systems Logo" />
        </Link>
      </div>

      {/* Fullscreen menu */}
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About us</Link></li>
          <li><Link to="/products" onClick={() => setIsOpen(false)}>Products</Link></li>
          <li><Link to="/application" onClick={() => setIsOpen(false)}>Application</Link></li>
          <li><Link to="/#contact" onClick={() => setIsOpen(false)}>Contact us</Link></li>
        </ul>
      </div>

      {/* Hamburger */}
      <div
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
