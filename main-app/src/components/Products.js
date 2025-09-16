import React, { useState, useEffect } from "react";
import "./Products.css";

const exploreCards = [
  {
    title: "Slewing Drives",
    desc: "High-precision slewing drives for industrial and renewable energy applications.",
    img: require("../assets/I_ring-removebg-preview.png"),
  },
  {
    title: "Slewing Bearings",
    desc: "Durable slewing bearings designed for demanding environments.",
    img: require("../assets/RJO435-2-1.jpg"),
  },
  {
    title: "Custom Motion Solutions",
    desc: "Tailored mechanical components for seamless integration and superior performance.",
    img: require("../assets/ChatGPT-Image-Jul-25-2025-08_49_57-PM.png"),
  },
];

const slewDriveCards = [
  { img: require("../assets/I_ring-removebg-preview.png"), title: "Standard Slew Drive", desc: "Reliable and robust slew drives for general industrial use." },
  { img: require("../assets/RJO435-2-removebg-preview.png"), title: "Heavy Duty Slew Drive", desc: "Engineered for high-load and demanding applications." },
  { img: require("../assets/RKED523.jpg"), title: "Compact Slew Drive", desc: "Space-saving design with uncompromised performance." },
  { img: require("../assets/slew-drivers-for-welding.jpg"), title: "Custom Slew Drive", desc: "Tailored solutions for unique project requirements." },
];

const slewBearingCards = [
  { img: require("../assets/slew-drivers-for-welding.jpg"), title: "Standard Slew Bearing", desc: "Precision bearings for smooth rotation and durability." },
  { img: require("../assets/I_ring-removebg-preview.png"), title: "Heavy Duty Slew Bearing", desc: "Designed for heavy loads and demanding environments." },
  { img: require("../assets/RJO435-2-1.jpg"), title: "Compact Slew Bearing", desc: "Ideal for applications where space is limited." },
  { img: require("../assets/RKED523.jpg"), title: "Custom Slew Bearing", desc: "Custom engineered bearings for unique requirements." },
];

function ProductsPage() {
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
      <h2 className="explore-title">Explore</h2>
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

      <div className="middle-breaker">
        <h2>Slew Drives</h2>
      </div>
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
              style={{
                position: slewIndex === idx ? "relative" : "absolute",
                left: 0,
                top: 0,
                opacity: slewIndex === idx ? 1 : 0,
                transition: "opacity 0.6s",
                width: "320px",
                height: "220px",
                zIndex: slewIndex === idx ? 2 : 1,
                pointerEvents: slewIndex === idx ? "auto" : "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#fff",
                borderRadius: "12px",
              }}
              onMouseEnter={() => setSlewHover(idx)}
              onMouseLeave={() => setSlewHover(null)}
            >
              <img
                src={card.img}
                alt={card.title}
                style={{ width: "90%", height: "auto", borderRadius: "12px" }}
              />
              {slewHover === idx && (
                <div className="slew-drive-actions">
                  <button className="slew-action-btn">Get Quotes</button>
                  <button className="slew-action-btn">Know More</button>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="slew-drives-dots" style={{ textAlign: "center", marginTop: "12px" }}>
          {slewDriveCards.map((_, idx) => (
            <span
              key={idx}
              className={`dot${slewIndex === idx ? " active" : ""}`}
              onClick={() => setSlewIndex(idx)}
            />
          ))}
        </div>
      </div>

      <div className="middle-breaker">
        <h2>Slew Bearings</h2>
      </div>
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
              style={{
                position: bearingIndex === idx ? "relative" : "absolute",
                left: 0,
                top: 0,
                opacity: bearingIndex === idx ? 1 : 0,
                transition: "opacity 0.6s",
                width: "320px",
                height: "220px",
                zIndex: bearingIndex === idx ? 2 : 1,
                pointerEvents: bearingIndex === idx ? "auto" : "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#fff",
                borderRadius: "12px",
              }}
              onMouseEnter={() => setBearingHover(idx)}
              onMouseLeave={() => setBearingHover(null)}
            >
              <img
                src={card.img}
                alt={card.title}
                style={{ width: "90%", height: "auto", borderRadius: "12px" }}
              />
              {bearingHover === idx && (
                <div className="slew-drive-actions">
                  <button className="slew-action-btn">Get Quotes</button>
                  <button className="slew-action-btn">Know More</button>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="slew-drives-dots" style={{ textAlign: "center", marginTop: "12px" }}>
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
  );
}

export default ProductsPage;
