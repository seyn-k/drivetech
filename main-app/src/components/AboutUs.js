import React, { useState, useEffect } from "react";
import "./AboutUs.css";
import logo from "../assets/ChatGPT-Image-Jul-25-2025-08_49_57-PM.png";
import WhyChooseDriveTech from "./WhyChooseDriveTech";
import OurCoreValues from "./OurCoreValues";

const testimonials = [
  {
    text: "Drive Tech Systems exceeded our expectations with their quality and service. Highly recommended!",
    author: "- Priya S., Industrial Solutions"
  },
  {
    text: "Their expertise and support helped us achieve operational excellence. Fantastic team!",
    author: "- Arjun K., Renewable Energy Corp"
  },
  {
    text: "Reliable products and prompt delivery. We trust Drive Tech for all our motion technology needs.",
    author: "- Meera T., Linear Tech Pvt Ltd"
  }
];

function AboutUs() {
  const [toggle, setToggle] = useState("vision");
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const handleSliderChange = (e) => {
    setToggle(e.target.checked ? "vision" : "mission");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [testimonialIndex]);

  return (
    <div className="about-us-page">
      <div className="about-us-header">
        <div className="about-us-logo">
          <img src={logo} alt="Drive Tech Systems Logo" />
        </div>
        <div className="about-us-details about-us-details-flex">
          <h1>About Drive Tech Systems</h1>
          <p>
            Welcome to Drive Tech Systems, where innovation meets precision. We are
            a dynamic startup with over eight years of experience, on a mission to
            become a global leader in the manufacturing of cutting-edge motion
            solutions. Specializing in slewing drives, slewing bearings, and
            custom-designed mechanical components, we are redefining industry
            standards by delivering exceptional quality and unparalleled service.
            Drive Tech Systems is a global leader in motion technology,
            specializing in high-quality solutions for industrial, renewable
            energy, and linear markets. Our team is dedicated to delivering
            precision, durability, and reliability through innovative products and
            exceptional service. With years of experience and a passion for
            engineering excellence, we have become a trusted partner for clients
            worldwide.
          </p>
          <div className="about-toggle-slider">
            <span className={toggle === "mission" ? "active-label" : ""}>Mission</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={toggle === "vision"}
                onChange={handleSliderChange}
              />
              <span className="slider"></span>
            </label>
            <span className={toggle === "vision" ? "active-label" : ""}>Vision</span>
          </div>
          <div className="about-toggle-content">
            {toggle === "vision" ? (
              <p>
                <strong>Our Vision:</strong> To be the trusted global leader in providing high-quality, durable, and innovative slew drives, slewing rings, and swivels. We aim to set industry benchmarks through our commitment to customer satisfaction, customised solutions, and timely delivery while fostering growth through excellence in quality and service.
              </p>
            ) : (
              <p>
                <strong>Our Mission:</strong> At Drive Tech Solutions, our mission is to deliver exceptional quality and customised solutions that meet the unique requirements of our customers. We are dedicated to producing high-quality slew drives, slewing rings, and swivels, supported by a team of experienced professionals who prioritise innovation, reliability, and excellent customer service. Through our stringent quality assurance processes and commitment to timely delivery, we strive to build trust with our customers and exceed their expectations, driving long-term success for both our clients and our company.
              </p>
            )}
          </div>
          <div className="what-we-do">
            <h1>What we do</h1>
            <div className="what-we-do-cards custom-layout">
              <div className="what-we-do-card card-large">
                <h3>Slewing Drives and Bearings</h3>
                <p>
                  Robust, high-precision components designed for demanding applications across various industries
                </p>
              </div>
              <div className="what-we-do-card-group">
                <div className="what-we-do-card">
                  <h3>Customized Motion Solutions</h3>
                  <p>
                    Tailored products to meet the unique requirements of our clients, ensuring seamless integration and superior performance
                  </p>
                </div>
                <div className="what-we-do-card">
                  <h3>Advanced Engineering and Design</h3>
                  <p>
                    Cutting-edge technology to create products that push the boundaries of durability and efficiency
                  </p>
                </div>
              </div>
            </div>
          </div>
          <WhyChooseDriveTech />
          <OurCoreValues />
          <section className="about-testimonials">
            <h2>Testimonials</h2>
            <div className="about-testimonial-banner">
              <div className="about-testimonial-slide" key={testimonialIndex}>
                <p>
                  {testimonials[testimonialIndex].text}
                </p>
                <span>{testimonials[testimonialIndex].author}</span>
              </div>
              <div className="about-testimonial-dots">
                {testimonials.map((_, idx) => (
                  <span
                    key={idx}
                    className={`dot${testimonialIndex === idx ? " active" : ""}`}
                    onClick={() => setTestimonialIndex(idx)}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;