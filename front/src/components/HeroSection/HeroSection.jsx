/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./HeroSection.css"; // Import custom CSS
import Banner1 from "../../assets/Banner1.jpg";
import Banner2 from "../../assets/Banner2.jpg";
import Banner3 from "../../assets/Banner3.jpg";
import { useNavigate } from "react-router-dom";

const banners = [
  {
    id: 1,
    image: Banner1,
    title: "Ancient Indian Temple",
    subtitle: "Discover the heritage and spirituality",
  },
  {
    id: 2,
    image: Banner2,
    title: "Sacred Temple in Nature",
    subtitle: "Peace and divinity in every corner",
  },
  {
    id: 3,
    image: Banner3,
    title: "Historical Marvel",
    subtitle: "A journey through time and devotion",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  // Autoplay logic (automatically change slide every 3 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Function to handle the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  // Function to handle the previous slide
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + banners.length) % banners.length
    );
  };

  return (
    <div className="hero-container">
      <div className="slider">
        {/* Slider Image */}
        <div
          className="slider-image"
          style={{
            backgroundImage: `url(${banners[currentIndex].image})`,
          }}
        />
        <div className="overlay">
          <h1>{banners[currentIndex].title}</h1>
          <p>{banners[currentIndex].subtitle}</p>
         <button className="donate-now" onClick={()=>navigate("/donation")}>Donate Now</button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default HeroSection;
