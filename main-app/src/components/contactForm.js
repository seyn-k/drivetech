import { useState, useRef } from "react";
import api from "../api";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subscribe: false,
  });
  const [subscribed, setSubscribed] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // Add popup state
  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/contacts", formData);

      if (formData.subscribe) {
        await emailjs.send(
          "service_a5e3ej1",
          "template_wmbtxxl",
          {
            from_name: formData.name,
            reply_to: formData.email,
            message: formData.message,
          },
          "hJO9zSFMnIG2dNr8j"
        );
        setSubscribed(true);
      }

      setShowPopup(true); // Show popup
      setTimeout(() => setShowPopup(false), 3500); // Hide after 3.5s
    } catch (err) {
      console.error("Error details:", err);
      alert("Error sending message");
    }
  };

  return (
    <>
      <form className="contact-form" onSubmit={handleSubmit} ref={formRef}>
        <h3>Send us a Message</h3>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
        <label className="checkbox">
          <input type="checkbox" name="subscribe" checked={formData.subscribe} onChange={handleChange} />
          Subscribe to newsletter
        </label>
        <button type="submit">Send Message</button>
        {subscribed && (
          <p className="subscribe-success">
            Thank you for subscribing! Please check your email.
          </p>
        )}
      </form>
      {showPopup && (
        <div className="submission-popup">
          Submission successful
        </div>
      )}
    </>
  );
}
