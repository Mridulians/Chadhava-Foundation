/* eslint-disable no-unused-vars */
import React from "react";
import "./TermsAndConditions.css";

const TermsAndConditions = () => {
  return (
    <div className="terms-container">
      <div className="terms-header">
        <h1>Terms and Conditions</h1>
        <p>Last Updated: February 2025</p>
      </div>

      <div className="terms-content">
        <section>
          <h2>1. Introduction</h2>
          <p>
            Welcome to our NGO, dedicated to **temple safety and heritage
            preservation**. By accessing and using our website, you agree to
            comply with the following Terms and Conditions. If you do not agree
            with any part of these terms, please do not use our services.
          </p>
        </section>

        <section>
          <h2>2. Use of Our Services</h2>
          <p>
            Our website provides information, donation options, volunteer
            opportunities, and educational resources related to temple safety.
            You agree to use this site only for lawful purposes and in
            accordance with these terms.
          </p>
          <ul>
            <li>No misuse of content or materials.</li>
            <li>No unauthorized access or security breaches.</li>
            <li>No offensive, harmful, or illegal activities.</li>
          </ul>
        </section>

        <section>
          <h2>3. Donations and Payments</h2>
          <p>
            We appreciate your generous support in preserving temple safety.
            All donations made through our website are **non-refundable** unless
            there is a transaction error.
          </p>
          <ul>
            <li>Payments are securely processed via third-party payment gateways.</li>
            <li>We do not store credit/debit card details.</li>
            <li>Donation receipts will be sent via email.</li>
          </ul>
        </section>

        <section>
          <h2>4. Intellectual Property</h2>
          <p>
            All content, logos, text, images, and resources on this website are
            the property of our NGO and are **protected by copyright laws**.
            Unauthorized use, reproduction, or distribution of our materials is
            strictly prohibited.
          </p>
        </section>

        <section>
          <h2>5. User-Generated Content</h2>
          <p>
            If you submit stories, testimonials, or feedback, you **grant us the
            right** to use, modify, and publish them for awareness and
            promotional purposes.
          </p>
        </section>

        <section>
          <h2>6. Limitation of Liability</h2>
          <p>
            Our NGO strives to provide accurate and updated information, but we
            do not guarantee complete accuracy. We **are not liable** for any
            direct or indirect damages resulting from the use of our website.
          </p>
        </section>

        <section>
          <h2>7. Changes to Terms</h2>
          <p>
            We may update these Terms and Conditions periodically. Continued use
            of our website after changes signifies acceptance of the revised
            terms.
          </p>
        </section>

        <section>
          <h2>8. Governing Law</h2>
          <p>
            These Terms and Conditions are governed by the laws of India. Any
            disputes shall be resolved under the jurisdiction of Indian courts.
          </p>
        </section>

        <section>
          <h2>9. Contact Us</h2>
          <p>
            For any questions regarding these Terms and Conditions, please
            contact us:
          </p>
          <p><strong>Email:</strong> support@templesafety.org</p>
          <p><strong>Phone:</strong> +91 9876543210</p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
