// import React from "react";
import "./AboveHeader.css";
import {
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const AboveHeader = () => {
  return (
    <div className="above-header">
      <div className="contact-info-new">
        <span>
          <FaEnvelope /> info@chadhavafoundation.com
        </span>
        <span>
          <FaPhone /> +91-7428393469
        </span>
        <span>
          <FaPhone /> +91-7982183517
        </span>
      </div>
      <div className="social-icons">
        <a
          href="https://www.facebook.com/profile.php?id=61553906044689"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.youtube.com/@ChadhavaFoundation"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube />
        </a>
        <a
          href="https://www.instagram.com/chadhavafoundation1/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://x.com/ChadhavaNGO"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/chadhava-foundation-47a9192a1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default AboveHeader;
