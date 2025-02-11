/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  // State to manage form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      console.log(data.user)

      if (response.ok) {
        alert("Login successful!");

        // Store user's email and name in localStorage
        sessionStorage.setItem(
          "user",
          JSON.stringify({
            email: data.user.email,
          })
        );

        navigate("/"); // Redirect to dashboard or another page after login
      } else {
        alert(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="login-container">
      {/* Banner Section */}
      <div className="login-banner">
        <h2>Welcome Back, Generous Donor</h2>
      </div>

      {/* Form Section */}
      <div className="login-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login to Your Account</h2>

          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit" className="login-btn">
            Login
          </button>

          <p className="signup-link">
            Don’t have an account?{" "}
            <a onClick={() => navigate("/donor-signup")}>Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
