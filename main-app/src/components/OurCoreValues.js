import React from "react";
import "./OurCoreValues.css";

const values = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.562L16.25 22.5l-.648-1.938a3.375 3.375 0 00-2.684-2.684L11.25 18l1.938-.648a3.375 3.375 0 002.684-2.684L16.25 12.75l.648 1.938a3.375 3.375 0 002.684 2.684L21.75 18l-1.938.648a3.375 3.375 0 00-2.684 2.684z" />
      </svg>
    ),
    title: "Innovation",
    info: "We continually push the boundaries of technology to provide cutting-edge solutions.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c1.355 0 2.707-.158 4.008-.468M12 21c-1.355 0-2.707-.158-4.008-.468m0 0a9.005 9.005 0 018.016 0m-8.016 0A8.966 8.966 0 0112 3c1.928 0 3.723.784 5.008 2.07M3.284 9.253A8.966 8.966 0 0112 3c1.928 0 3.723.784 5.008 2.07m-10.016 4.18M12 3c2.755 0 5.255 1.12 7.071 2.929M3.284 9.253c.925-1.28 2.29-2.26 3.82-2.818" />
      </svg>
    ),
    title: "Sustainability",
    info: "We are committed to creating environmentally responsible solutions that contribute to a sustainable future.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: "Integrity",
    info: "Honesty and transparency guide our interactions with clients, partners, and employees.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Quality",
    info: "Every product we deliver undergoes rigorous testing to ensure it meets the highest industry standards.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-2.472M15 19.128v-3.872M15 19.128c-1.566 0-2.958-.84-3.828-2.128M15 19.128c.636 0 1.23-.176 1.772-.493M15 15.256H1.875a18.375 18.375 0 0111.95-6.617M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Customer-Centricity",
    info: "Our customers are at the heart of everything we do. We strive to exceed their expectations at every step.",
  }
];

function OurCoreValues() {
  return (
    <section className="core-values-section">
      <h2>Our Core Values</h2>
      <div className="core-values-grid">
        {values.map((v) => (
          <div className="core-value-item" key={v.title}>
            <div className="core-value-icon">{v.icon}</div>
            <h3>{v.title}</h3>
            <p>{v.info}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurCoreValues;