import React, { useState, useEffect } from "react";
import "./Products.css";
import { useNavigate } from "react-router-dom";

const exploreCards = [
  {
    img: require("../assets/I_ring-removebg-preview.png"),
  },
  {

    img: require("../assets/RJO435-2-removebg-preview.png"),
  },
  {
    img: require("../assets/RKED523.jpg"),
  },
  {
    img: require("../assets/slew-drivers-for-welding.jpg"),
  },
];

const slewDriveCards = [
  { img: require("../assets/I_ring-removebg-preview.png"), title: "Standard Slew Drive" },
  { img: require("../assets/RJO435-2-removebg-preview.png"), title: "Heavy Duty Slew Drive" },
  { img: require("../assets/RKED523.jpg"), title: "Compact Slew Drive" },
  { img: require("../assets/slew-drivers-for-welding.jpg"), title: "Custom Slew Drive" },
];

const slewBearingCards = [
  { img: require("../assets/slew-drivers-for-welding.jpg"), title: "Standard Slew Bearing", desc: "Precision bearings for smooth rotation and durability." },
  { img: require("../assets/I_ring-removebg-preview.png"), title: "Heavy Duty Slew Bearing", desc: "Designed for heavy loads and demanding environments." },
  { img: require("../assets/RJO435-2-1.jpg"), title: "Compact Slew Bearing", desc: "Ideal for applications where space is limited." },
  { img: require("../assets/RKED523.jpg"), title: "Custom Slew Bearing", desc: "Custom engineered bearings for unique requirements." },
];

function ProductsPage() {
  const navigate = useNavigate();

  const [slewIndex, setSlewIndex] = useState(0);
  const [slewPaused, setSlewPaused] = useState(false);

  useEffect(() => {
    if (!slewPaused) {
      const timer = setTimeout(() => {
        setSlewIndex((prev) => (prev + 1) % slewDriveCards.length);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [slewIndex, slewPaused]);

  const [slewHover, setSlewHover] = useState(null);

  const [bearingIndex, setBearingIndex] = useState(0);
  const [bearingPaused, setBearingPaused] = useState(false);

  useEffect(() => {
    if (!bearingPaused) {
      const timer = setTimeout(() => {
        setBearingIndex((prev) => (prev + 1) % slewBearingCards.length);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [bearingIndex, bearingPaused]);

  const [bearingHover, setBearingHover] = useState(null);

  return (
    <div className="products-page">
      <div className="explore-container">
        <h2 className="explore-title">Explore our products</h2>
        <div className="products-ticker">
          <div className="products-ticker-track">
            {[...exploreCards, ...exploreCards].map((card, idx) => (
              <div className="product-card" key={idx}>
                <img src={card.img} alt={card.title} />
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="slew-section-container">
        <h2 className="slew-section-title">Slew Drives</h2>
        <div
          className="slew-drives"
          onMouseEnter={() => setSlewPaused(true)}
          onMouseLeave={() => setSlewPaused(false)}
        >
          <div className="slew-drives-slider">
            {slewDriveCards.map((card, idx) => (
              <div
                key={idx}
                className={`extra-card slew-slide${
                  slewIndex === idx ? " active" : ""
                }`}
                onMouseEnter={() => setSlewHover(idx)}
                onMouseLeave={() => setSlewHover(null)}
              >
                <img src={card.img} alt={card.title} />
                {slewHover === idx && (
                  <div className="slew-drive-actions">
                    <button className="slew-action-btn">Get Quotes</button>
                    <button
                      className="slew-action-btn"
                      onClick={() => navigate("/application")}
                    >
                      Know More
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="slew-drives-dots">
            {slewDriveCards.map((_, idx) => (
              <span
                key={idx}
                className={`dot${slewIndex === idx ? " active" : ""}`}
                onClick={() => setSlewIndex(idx)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="slew-section-container">
        <h2 className="slew-section-title">Slew Bearings</h2>
        <div
          className="slew-drives"
          onMouseEnter={() => setBearingPaused(true)}
          onMouseLeave={() => setBearingPaused(false)}
        >
          <div className="slew-drives-slider">
            {slewBearingCards.map((card, idx) => (
              <div
                key={idx}
                className={`extra-card slew-slide${
                  bearingIndex === idx ? " active" : ""
                }`}
                onMouseEnter={() => setBearingHover(idx)}
                onMouseLeave={() => setBearingHover(null)}
              >
                <img src={card.img} alt={card.title} />
                {bearingHover === idx && (
                  <div className="slew-drive-actions">
                    <button className="slew-action-btn">Get Quotes</button>
                    <button
                      className="slew-action-btn"
                      onClick={() => navigate("/application")}
                    >
                      Know More
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="slew-drives-dots">
            {slewBearingCards.map((_, idx) => (
              <span
                key={idx}
                className={`dot${bearingIndex === idx ? " active" : ""}`}
                onClick={() => setBearingIndex(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
