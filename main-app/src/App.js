import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import ContactForm from "./components/contactForm";
import Features from "./components/Features";
import Welcome from "./components/Welcome";
import OurProduct from "./components/OurProduct";
import Products from "./components/Products";
import WhatOurClientSay from "./components/WhatOurClientSay";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Application from "./components/Application";
import "./App.css";

const HomePage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>DRIVE TECH SYSTEMS PVT LTD</h1>
        </div>
      </section>
      <Features />
      <Welcome />
      <OurProduct />
      <section className="contact" id="contact">
        <h2>Contact Us</h2>
        <ContactForm />
      </section>
      <WhatOurClientSay />
    </>
  );
};

function App() {
  const [scrollWidth, setScrollWidth] = useState(0);
  const [showGoUp, setShowGoUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollWidth(scrolled);

      setShowGoUp(scrollTop > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleGoUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Router>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "4px",
          width: `${scrollWidth}%`,
          background: "#0077ff",
          zIndex: 9999,
          transition: "width 0.2s ease",
        }}
      />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/application" element={<Application />} />
      </Routes>
      <Footer />

      {showGoUp && (
        <button
          onClick={handleGoUp}
          style={{
            position: "fixed",
            right: "32px",
            bottom: "32px",
            padding: "12px 16px",
            background: "#0077ff",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            cursor: "pointer",
            zIndex: 9999,
            fontSize: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background 0.3s",
          }}
          aria-label="Go Up"
        >
          &#8679;
        </button>
      )}
    </Router>
  );
}

export default App;
