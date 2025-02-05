/* eslint-disable no-unused-vars */
import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <h2 className="newsletter-heading">Subscribe to our Newsletter</h2>
      <p className="newsletter-text">
        Stay up-to-date with all our latest developments and work.
      </p>
      <div className="newsletter-form">
        <input type="email" placeholder="Your Email address" className="newsletter-input" />
        <button className="subscribe-button">Subscribe Now</button>
      </div>
    </div>
  );
};

export default Newsletter;
