import React from "react";
import "./Features.css";

function Features() {
  return (
    <section className="features">
      <h2>Our Features</h2>
      <div className="features-cards">
        <div className="feature-card">
          <img
            src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
            alt="Best Quality"
            className="feature-icon"
            width={40}
            height={40}
            style={{ marginBottom: "12px" }}
          />
          <h3>Best Quality</h3>
        </div>
        <div className="feature-card">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
            alt="Top Rated"
            className="feature-icon"
            width={40}
            height={40}
            style={{ marginBottom: "12px" }}
          />
          <h3>Top Rated</h3>
        </div>
        <div className="feature-card">
          <img
            src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
            alt="100+ Projects"
            className="feature-icon"
            width={40}
            height={40}
            style={{ marginBottom: "12px" }}
          />
          <h3>100+ Projects</h3>
        </div>
      </div>
    </section>
  );
}

export default Features;