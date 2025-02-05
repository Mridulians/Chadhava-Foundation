/* eslint-disable no-unused-vars */
import React from "react";
import "./TempleImpact.css";

const TempleImpact = () => {
  return (
    <div className="impact-container">
      <h2 className="impact-heading">
        This is the impact <span className="highlight">YOU</span> helped us make in 2023-24
      </h2>
      <p className="sub-text">
        Your support is helping us restore and protect temples across India.
      </p>

      <h1 className="impact-number">1,500+</h1>
      <p className="impact-description">Temples were restored and revitalized</p>

      <div className="impact-stats">
        <div className="stat-card">
          <span className="icon">🏛️</span>
          <h3>500+</h3>
          <p>Temples received structural restoration</p>
        </div>
        <div className="stat-card">
          <span className="icon">🪔</span>
          <h3>300+</h3>
          <p>Temples received daily rituals and maintenance</p>
        </div>
        <div className="stat-card">
          <span className="icon">📜</span>
          <h3>200+</h3>
          <p>Temples documented for heritage conservation</p>
        </div>
        <div className="stat-card">
          <span className="icon">💰</span>
          <h3>₹50M+</h3>
          <p>Raised for temple preservation</p>
        </div>
      </div>
    </div>
  );
};

export default TempleImpact;
