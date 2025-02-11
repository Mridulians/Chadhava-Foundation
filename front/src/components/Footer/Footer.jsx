/* eslint-disable no-unused-vars */
import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Organization Details */}
        <div className="footer-section">
          <h3>Chadhava Foundation</h3>
          <p>C-14 Temple Institutional Area</p>
          <p>New Delhi – 110016</p>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/profile.php?id=61553906044689"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>

            <a
              href="https://x.com/ChadhavaNGO"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>

            <a
              href="https://www.instagram.com/chadhavafoundation1/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/in/chadhava-foundation-47a9192a1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.youtube.com/@ChadhavaFoundation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Middle Sections - Links */}
        <div className="footer-section">
          <h3>About Us</h3>
          <ul>
            <Link to="/privacypolicy" className="footer_links">
              <li>Privacy Policy</li>
            </Link>
            <Link to="/termsandconditions" className="footer_links">
              <li>Terms & Conditions</li>
            </Link>
            <Link to="/missionvision" className="footer_links">
              <li>Mission And Vision</li>
            </Link>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Important Links</h3>
          <ul>
            <Link to="/contact-us" className="footer_links">
              <li>Contact us</li>
            </Link>
            <Link to="/involved" className="footer_links">
              <li>Get Involved</li>
            </Link>
            <Link to="/stories" className="footer_links">
              <li>Top Stories</li>
            </Link>
            <Link to="/about" className="footer_links">
              <li>About us</li>
            </Link>
            <Link to="/donor-login" className="footer_links">
              <li>Login</li>
            </Link>
          </ul>
        </div>

        {/* Right Section - UPI Payment */}
        <div className="footer-section payment">
          <h3>Pay using any UPI Apps</h3>
          {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/UPI-Logo-vector.svg/512px-UPI-Logo-vector.svg.png" alt="UPI Logo" className="upi-logo"/> */}
          <img
            src="https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=upi://pay?pa=templesupport@upi"
            alt="QR Code"
            className="qr-code"
          />
          <p>UPI / VPA ID: templesupport@upi</p>
          <p>Org. Name: Temple Support India</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2024 Temple Support India. All Rights Reserved.</p>
        <p>
          Website Developed and Maintained by{" "}
          <span className="highlight">Chadhava Foundation</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
