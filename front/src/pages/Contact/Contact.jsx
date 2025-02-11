/* eslint-disable no-unused-vars */
import React from "react";
import "./Contact.css";
import IMG from '../../assets/Contact_us_img.jpg'

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Contact Form Section */}
      <div className="contact-section">
        {/* Left Side - Image */}
        <div className="contact-image">
          <img src={IMG} alt="Contact Us" />
        </div>

        {/* Right Side - Form */}
        <div className="contact-form">
          <h2>Have a Question or Need Assistance?</h2>
          <p>
            Fill out the form below, and we’ll get back to you as soon as
            possible.
          </p>

          <form>
            <div className="form-group">
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
            </div>

            <div className="form-group">
              <input type="email" placeholder="Email" required />
              <input type="tel" placeholder="+91" required />
            </div>

            <textarea placeholder="Write your message..." required></textarea>

            <button type="submit" className="send_message">Send Message</button>
          </form>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="contact-info">
        <h2>Contact Information</h2>

        <p>📞 Phone: +91 98765 43210</p>
        <p>📧 Email: contact@chadhavafoundation.org</p>
        <p>📍 Address: 123, Chadhava Street, New Delhi, India</p>
        <p>🕒 Timings: Mon - Sun | 9:15 AM to 5:15 PM</p>
      </div>
    </div>
  );
};

export default Contact;
