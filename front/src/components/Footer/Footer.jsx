/* eslint-disable no-unused-vars */
import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

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
            <FaFacebook />
            {/* <FaXTwitter /> */}
            <FaInstagram />
            <FaLinkedin />
            <FaYoutube />
          </div>
        </div>

        {/* Middle Sections - Links */}
        <div className="footer-section">
          <h3>About Us</h3>
          <ul>
            <li>Our Mission</li>
            <li>Awards & Recognition</li>
            <li>Financials</li>
            <li>Publications</li>
            <li>Research</li>
            <li>Partners</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Support Us</h3>
          <ul>
            <li>Festival Fund</li>
            <li>Temple Restoration</li>
            <li>Donor Programs</li>
            <li>Be A Volunteer</li>
            <li>Emergency Relief 2024</li>
            <li>Online Store</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Important Links</h3>
          <ul>
            <li>Contact Us</li>
            <li>Brochure</li>
            <li>Annual Report</li>
            <li>Tenders</li>
            <li>Job Openings</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Right Section - UPI Payment */}
        <div className="footer-section payment">
          <h3>Pay using any UPI Apps</h3>
          {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/UPI-Logo-vector.svg/512px-UPI-Logo-vector.svg.png" alt="UPI Logo" className="upi-logo"/> */}
          <img src="https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=upi://pay?pa=templesupport@upi" alt="QR Code" className="qr-code"/>
          <p>UPI / VPA ID: templesupport@upi</p>
          <p>Org. Name: Temple Support India</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2024 Temple Support India. All Rights Reserved.</p>
        <p>Website Developed and Maintained by <span className="highlight">Chadhava Foundation</span>.</p>
      </div>
    </footer>
  );
};

export default Footer;
