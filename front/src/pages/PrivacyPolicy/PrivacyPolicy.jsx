/* eslint-disable no-unused-vars */
import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <div className="privacy-header">
        <h1>Privacy Policy</h1>
        <p>Last Updated: February 2025</p>
      </div>

      <div className="privacy-content">
        <section>
          <h2>1. Introduction</h2>
          <p>
            Welcome to our NGO dedicated to **temple safety and heritage
            preservation**. Your privacy is important to us, and we are
            committed to protecting the personal information you share with us.
            This Privacy Policy outlines how we collect, use, and safeguard your
            data.
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li>
              **Personal Information**: Name, email, phone number, and address
              when you sign up or donate.
            </li>
            <li>
              **Donation Details**: Payment information processed securely via
              trusted third-party payment gateways.
            </li>
            <li>
              **Site Usage Data**: Cookies, IP address, and browsing behavior to
              improve user experience.
            </li>
          </ul>
        </section>

        <section>
          <h2>3. How We Use Your Information</h2>
          <p>Your data is used for:</p>
          <ul>
            <li>Processing donations and sending receipts.</li>
            <li>Providing updates on temple safety initiatives.</li>
            <li>Sending newsletters and event invitations.</li>
            <li>Improving our website and security measures.</li>
          </ul>
        </section>

        <section>
          <h2>4. Data Protection & Security</h2>
          <p>
            We take strict measures to ensure your data remains secure. Our
            website uses SSL encryption, and sensitive payment details are
            processed through trusted third-party services.
          </p>
        </section>

        <section>
          <h2>5. Sharing Your Information</h2>
          <p>
            We **never** sell or trade your personal information. We may share
            it only when legally required or with partners assisting in temple
            safety projects.
          </p>
        </section>

        <section>
          <h2>6. Your Rights & Choices</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access and update your personal data.</li>
            <li>Opt-out of newsletters and communications.</li>
            <li>Request data deletion, where applicable.</li>
          </ul>
        </section>

        <section>
          <h2>7. Cookies & Tracking</h2>
          <p>
            We use cookies to enhance user experience and website performance.
            You can manage your cookie preferences in browser settings.
          </p>
        </section>

        <section>
          <h2>8. Contact Us</h2>
          <p>
            If you have any questions regarding this Privacy Policy, please
            reach out to us at:
          </p>
          <p>
            <strong>Email:</strong> support@templesafety.org
          </p>
          <p>
            <strong>Phone:</strong> +91 9876543210
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
