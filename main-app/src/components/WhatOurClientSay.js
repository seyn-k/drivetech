import React from "react";
import "./WhatOurClientSay.css";

function WhatOurClientSay() {
  return (
    <section className="client-say-section">
      <h2>What Our Clients Say</h2>
      <div className="client-testimonials">
        <div className="testimonial-card">
          <p>
            "Drive Tech Systems provided us with exceptional quality and service. Their slewing drives are reliable and efficient!"
          </p>
          <h4>- Priya S., Industrial Solutions</h4>
        </div>
        <div className="testimonial-card">
          <p>
            "We trust Drive Tech for all our motion technology needs. Their support and expertise are unmatched."
          </p>
          <h4>- Arjun K., Renewable Energy Corp</h4>
        </div>
        <div className="testimonial-card">
          <p>
            "Outstanding products and a fantastic team. Highly recommended for anyone seeking precision engineering."
          </p>
          <h4>- Meera T., Linear Tech Pvt Ltd</h4>
        </div>
      </div>
    </section>
  );
}

export default WhatOurClientSay;