import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./OurProduct.css";
import slewingDriveImg from "../assets/I_ring-removebg-preview.png";
import hydraulicSwivelImg from "../assets/RJO435-2-removebg-preview.png";

function OurProduct() {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate(); // Initialize navigate

  const handleCardClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="our-product-section">
      <h2>Our Products</h2>
      <div className="product-cards">
        {[{
          img: slewingDriveImg,
        }, {
          img: hydraulicSwivelImg,
        }].map((product, idx) => (
          <div
            className={`product-card${activeIndex === idx ? " active" : ""}`}
            key={product.title}
            onClick={() => handleCardClick(idx)}
            tabIndex={0}
            style={{ cursor: "pointer", position: "relative" }}
          >
            <div className="product-card-content">
              <img src={product.img} alt={product.alt} />
              <h3>{product.title}</h3>
              <p>{product.desc}</p>
            </div>
            {activeIndex === idx && (
              <div className="learn-more-blur">
                <button
                  className="learn-more-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("/application");
                  }}
                >
                  Learn More
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurProduct;