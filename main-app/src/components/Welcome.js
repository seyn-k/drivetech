import React from "react";
import "./Welcome.css";
import welcomeImg from "../assets/Pastel-Fun-Science-Simple-Machines-Presentation-1-1024x576.png";

function Welcome() {
  return (
    <section className="company-intro">
      <div className="welcome-row">
        <div className="welcome-image">
          <img
            src={welcomeImg}
            alt="Drive Tech Systems"
          />
        </div>
        <div className="welcome-note">
          <h2>Welcome to Drive Tech Systems</h2>
          <p>
            Drive Tech Systems is a global innovator in motion technology, offering high-quality solutions for industrial, renewable energy, and linear markets. Our expertise in slewing drives, slewing bearings, and hydraulic swivels has made us a trusted partner for clients seeking precision, durability, and reliability.
          </p>
          <p>
            Explore how our innovative products are powering the future of industries worldwide.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Welcome;